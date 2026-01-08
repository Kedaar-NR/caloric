import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface RolloverCaloriesScreenProps {
  navigation: any;
}

export const RolloverCaloriesScreen: React.FC<RolloverCaloriesScreenProps> = ({
  navigation,
}) => {
  const { rolloverCalories, setRolloverCalories } = useOnboardingStore();
  const [selected, setSelected] = React.useState<boolean | null>(rolloverCalories);

  const progress = 21 / 29;

  const handleContinue = () => {
    if (selected !== null) {
      setRolloverCalories(selected);
      navigation.navigate('AppRating');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Rollover extra calories to the next day?</Text>
        <Text style={styles.subtitle}>
          If you eat under your goal, save those calories for tomorrow
        </Text>

        <View style={styles.visualContainer}>
          <View style={styles.dayBox}>
            <Text style={styles.dayLabel}>Monday</Text>
            <View style={styles.circle}>
              <Text style={styles.circleValue}>1,800</Text>
              <Text style={styles.circleLabel}>cal eaten</Text>
            </View>
            <Text style={styles.remaining}>-200 remaining</Text>
          </View>

          <Text style={styles.arrow}>→</Text>

          <View style={styles.dayBox}>
            <Text style={styles.dayLabel}>Tuesday</Text>
            <View style={styles.circle}>
              <Text style={styles.circleValue}>2,200</Text>
              <Text style={styles.circleLabel}>cal available</Text>
            </View>
            <Text style={styles.bonus}>+200 bonus</Text>
          </View>
        </View>

        <View style={styles.options}>
          <SelectionCard
            title="Yes, rollover calories"
            subtitle="More flexible weekly approach"
            selected={selected === true}
            onPress={() => setSelected(true)}
          />
          <SelectionCard
            title="No, reset daily"
            subtitle="Consistent daily targets"
            selected={selected === false}
            onPress={() => setSelected(false)}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={selected === null}
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
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xl,
  },
  visualContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  dayBox: {
    alignItems: 'center',
    flex: 1,
  },
  dayLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  circleValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  circleLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
  remaining: {
    fontSize: typography.fontSize.sm,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  bonus: {
    fontSize: typography.fontSize.sm,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  arrow: {
    fontSize: 24,
    color: colors.text,
    marginHorizontal: spacing.sm,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
