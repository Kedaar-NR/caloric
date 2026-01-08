import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface DesiredWeightScreenProps {
  navigation: any;
}

export const DesiredWeightScreen: React.FC<DesiredWeightScreenProps> = ({
  navigation,
}) => {
  const {
    isMetric,
    weightKg,
    weightLbs,
    desiredWeightKg,
    desiredWeightLbs,
    setDesiredWeight,
  } = useOnboardingStore();

  const currentWeight = isMetric ? weightKg : weightLbs;
  const [desired, setDesired] = useState(
    isMetric
      ? desiredWeightKg?.toString() || ''
      : desiredWeightLbs?.toString() || ''
  );

  const progress = 11 / 29;

  const weightDiff = currentWeight && desired
    ? Math.abs(currentWeight - parseFloat(desired))
    : 0;

  const isRealistic = desired && parseFloat(desired) < (currentWeight || 0);

  const handleContinue = () => {
    const desiredValue = parseFloat(desired);
    if (desiredValue) {
      if (isMetric) {
        setDesiredWeight(null, desiredValue);
      } else {
        setDesiredWeight(desiredValue, null);
      }
      navigation.navigate('GoalPace');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What is your desired weight?</Text>
        <Text style={styles.subtitle}>
          Setting a realistic goal increases your chances of success
        </Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              placeholder={isMetric ? '65' : '143'}
              placeholderTextColor={colors.textSecondary}
              value={desired}
              onChangeText={setDesired}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>{isMetric ? 'kg' : 'lbs'}</Text>
          </View>

          {isRealistic && (
            <View style={styles.validationBox}>
              <Text style={styles.validationIcon}>✓</Text>
              <Text style={styles.validationText}>
                Losing {weightDiff.toFixed(1)} {isMetric ? 'kg' : 'lbs'} is a realistic target
              </Text>
            </View>
          )}
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            Current weight: {currentWeight} {isMetric ? 'kg' : 'lbs'}
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!desired || !isRealistic}
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
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xxxl,
  },
  inputContainer: {
    marginTop: spacing.xl,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  input: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  unit: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    marginLeft: spacing.md,
  },
  validationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  validationIcon: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.sm,
  },
  validationText: {
    flex: 1,
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  infoBox: {
    marginTop: spacing.xl,
    padding: spacing.md,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
  },
  infoText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
