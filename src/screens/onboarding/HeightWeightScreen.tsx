import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface HeightWeightScreenProps {
  navigation: any;
}

export const HeightWeightScreen: React.FC<HeightWeightScreenProps> = ({
  navigation,
}) => {
  const {
    isMetric,
    setIsMetric,
    heightFt,
    heightIn,
    heightCm,
    weightLbs,
    weightKg,
    setHeight,
    setWeight,
  } = useOnboardingStore();

  const [metric, setMetric] = useState(isMetric);
  const [feet, setFeet] = useState(heightFt?.toString() || '');
  const [inches, setInches] = useState(heightIn?.toString() || '');
  const [cm, setCm] = useState(heightCm?.toString() || '');
  const [lbs, setLbs] = useState(weightLbs?.toString() || '');
  const [kg, setKg] = useState(weightKg?.toString() || '');

  const progress = 8 / 29;

  const handleToggle = () => {
    setMetric(!metric);
  };

  const handleContinue = () => {
    if (metric) {
      const heightValue = parseFloat(cm);
      const weightValue = parseFloat(kg);
      if (heightValue && weightValue) {
        setIsMetric(true);
        setHeight(null, null, heightValue);
        setWeight(null, weightValue);
        navigation.navigate('BirthDate');
      }
    } else {
      const feetValue = parseFloat(feet);
      const inchesValue = parseFloat(inches);
      const weightValue = parseFloat(lbs);
      if (feetValue && inchesValue !== undefined && weightValue) {
        setIsMetric(false);
        setHeight(feetValue, inchesValue, null);
        setWeight(weightValue, null);
        navigation.navigate('BirthDate');
      }
    }
  };

  const isValid = metric
    ? cm && kg
    : feet && inches !== undefined && lbs;

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What are your height and weight?</Text>

        <View style={styles.toggle}>
          <TouchableOpacity
            style={[styles.toggleButton, !metric && styles.toggleButtonActive]}
            onPress={handleToggle}
          >
            <Text style={[styles.toggleText, !metric && styles.toggleTextActive]}>
              Imperial
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, metric && styles.toggleButtonActive]}
            onPress={handleToggle}
          >
            <Text style={[styles.toggleText, metric && styles.toggleTextActive]}>
              Metric
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Height</Text>
          {metric ? (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="170"
                placeholderTextColor={colors.textSecondary}
                value={cm}
                onChangeText={setCm}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>cm</Text>
            </View>
          ) : (
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.inputSmall]}
                placeholder="5"
                placeholderTextColor={colors.textSecondary}
                value={feet}
                onChangeText={setFeet}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>ft</Text>
              <TextInput
                style={[styles.input, styles.inputSmall]}
                placeholder="10"
                placeholderTextColor={colors.textSecondary}
                value={inches}
                onChangeText={setInches}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>in</Text>
            </View>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weight</Text>
          {metric ? (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="70"
                placeholderTextColor={colors.textSecondary}
                value={kg}
                onChangeText={setKg}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>kg</Text>
            </View>
          ) : (
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="154"
                placeholderTextColor={colors.textSecondary}
                value={lbs}
                onChangeText={setLbs}
                keyboardType="numeric"
              />
              <Text style={styles.unit}>lbs</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!isValid}
        />
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xl,
  },
  toggle: {
    flexDirection: 'row',
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: 4,
    marginBottom: spacing.xl,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.sm,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: colors.text,
  },
  toggleText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
  },
  toggleTextActive: {
    color: colors.textWhite,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  inputSmall: {
    flex: 0.5,
    marginRight: spacing.sm,
  },
  unit: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    marginLeft: spacing.sm,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
