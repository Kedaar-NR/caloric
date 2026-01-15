import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';

const WorkoutFrequencyScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: '0-2', label: '0-2', subtitle: 'Workouts now and then', icon: '🚶' },
    { id: '3-5', label: '3-5', subtitle: 'A few workouts per week', icon: '🏃' },
    { id: '6+', label: '6+', subtitle: 'Dedicated athlete', icon: '💪' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={10} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>How many workouts do you do per week?</Text>
          <Text style={styles.subtitle}>This will be used to calibrate your custom plan.</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              subtitle={option.subtitle}
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
            onPress={() => navigation.navigate('Source')}
          >
            Continue
          </Button>
        </View>
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
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  optionsContainer: {
    flex: 1,
  },
  footer: {
    marginBottom: spacing.md,
  },
});

export default WorkoutFrequencyScreen;
