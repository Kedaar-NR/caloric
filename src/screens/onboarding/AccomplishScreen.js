import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';

const AccomplishScreen = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const options = [
    { id: 'healthier', label: 'Eat and live healthier', icon: '🍎' },
    { id: 'energy', label: 'Boost my energy and mood', icon: '☀️' },
    { id: 'motivated', label: 'Stay motivated and consistent', icon: '💪' },
    { id: 'body', label: 'Feel better about my body', icon: '🧘' },
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
      <Header onBack={() => navigation.goBack()} progress={80} />
      <ScrollView style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>What would you like to accomplish?</Text>
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
          onPress={() => navigation.navigate('Potential')}
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

export default AccomplishScreen;
