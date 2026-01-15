import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';

const GenderScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'male', label: 'Male', icon: '👨' },
    { id: 'female', label: 'Female', icon: '👩' },
    { id: 'other', label: 'Other', icon: '🧑' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={5} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Choose your Gender</Text>
          <Text style={styles.subtitle}>This will be used to calibrate your custom plan.</Text>
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
            onPress={() => navigation.navigate('WorkoutFrequency')}
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
    fontSize: 24,
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

export default GenderScreen;
