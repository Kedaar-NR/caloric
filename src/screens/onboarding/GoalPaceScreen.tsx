import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface GoalPaceScreenProps {
  navigation: any;
}

export const GoalPaceScreen: React.FC<GoalPaceScreenProps> = ({
  navigation,
}) => {
  const { goalPaceKg, setGoalPace } = useOnboardingStore();
  const [pace, setPace] = useState(goalPaceKg);

  const progress = 12 / 29;

  const handleContinue = () => {
    setGoalPace(pace);
    navigation.navigate('ComparisonStats');
  };

  const getPaceLabel = () => {
    if (pace <= 0.5) return 'Slow & Steady';
    if (pace <= 1.0) return 'Balanced';
    return 'Fast Track';
  };

  const getPaceIcon = () => {
    if (pace <= 0.5) return '🐢';
    if (pace <= 1.0) return '🐰';
    return '🐆';
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>How fast do you want to reach your goal?</Text>
        <Text style={styles.subtitle}>
          Faster isn't always better. A sustainable pace leads to long-term success
        </Text>

        <View style={styles.paceContainer}>
          <Text style={styles.paceIcon}>{getPaceIcon()}</Text>
          <Text style={styles.paceLabel}>{getPaceLabel()}</Text>
          <Text style={styles.paceValue}>{pace.toFixed(1)} kg / week</Text>
        </View>

        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0.1}
            maximumValue={1.5}
            step={0.1}
            value={pace}
            onValueChange={setPace}
            minimumTrackTintColor={colors.text}
            maximumTrackTintColor={colors.backgroundGray}
            thumbTintColor={colors.text}
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabel}>🐢 Slower</Text>
            <Text style={styles.sliderLabel}>Faster 🐆</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Why pace matters</Text>
          <Text style={styles.infoText}>
            Losing weight too quickly can lead to muscle loss and make it harder to maintain your results. A moderate pace helps preserve muscle while burning fat.
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button title="Continue" onPress={handleContinue} />
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
  paceContainer: {
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  paceIcon: {
    fontSize: 60,
    marginBottom: spacing.md,
  },
  paceLabel: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  paceValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  sliderContainer: {
    marginVertical: spacing.xl,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.sm,
  },
  sliderLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  infoBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginTop: spacing.xl,
  },
  infoTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
