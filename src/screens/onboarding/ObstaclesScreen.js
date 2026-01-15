import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';
import { BarChart2, Utensils, Users, Calendar, Lightbulb } from 'lucide-react-native';

const ObstaclesScreen = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const options = [
    { id: 'consistency', label: 'Lack of consistency', icon: <BarChart2 size={24} color="#1C1C1E" /> },
    { id: 'habits', label: 'Unhealthy eating habits', icon: '🍔' },
    { id: 'support', label: 'Lack of support', icon: <Users size={24} color="#1C1C1E" /> },
    { id: 'schedule', label: 'Busy schedule', icon: <Calendar size={24} color="#1C1C1E" /> },
    { id: 'inspiration', label: 'Lack of meal inspiration', icon: <Lightbulb size={24} color="#1C1C1E" /> },
  ];

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(i => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={70} />
      <ScrollView style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>What's stopping you from reaching your goals?</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              icon={option.icon}
              selected={selected.includes(option.id)}
              onSelect={() => toggleSelect(option.id)}
              variant="icon-circle"
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button 
          disabled={selected.length === 0}
          onPress={() => navigation.navigate('Diet')}
        >
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  textContainer: {
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 40,
  },
  optionsContainer: {
    flex: 1,
  },
  footer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
});

export default ObstaclesScreen;
