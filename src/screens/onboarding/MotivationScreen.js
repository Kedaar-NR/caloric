import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';

const MotivationScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'health', label: 'Eat and live healthier', icon: '🍎' },
    { id: 'energy', label: 'Boost my energy and mood', icon: '☀️' },
    { id: 'motivation', label: 'Stay motivated and consistent', icon: '💪' },
    { id: 'body', label: 'Feel better about my body', icon: '🧘' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={80} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>What would you like to accomplish?</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              icon={option.icon}
              selected={selected === option.id}
              onSelect={() => setSelected(option.id)}
              variant="icon-left"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button 
            disabled={!selected}
            onPress={() => navigation.navigate('Goal')}
          >
            Continue
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
  },
  textContainer: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 28,
  },
  optionsContainer: {
    marginBottom: spacing.xl,
  },
  footer: {
    marginBottom: spacing.md,
  },
});

export default MotivationScreen;
