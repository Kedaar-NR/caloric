import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface CaloriesBurnedScreenProps {
  navigation: any;
}

export const CaloriesBurnedScreen: React.FC<CaloriesBurnedScreenProps> = ({
  navigation,
}) => {
  const { addCaloriesBurned, setAddCaloriesBurned } = useOnboardingStore();
  const [selected, setSelected] = React.useState<boolean | null>(addCaloriesBurned);

  const progress = 20 / 29;

  const handleContinue = () => {
    if (selected !== null) {
      setAddCaloriesBurned(selected);
      navigation.navigate('RolloverCalories');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Add calories burned back to your daily goal?</Text>
        <Text style={styles.subtitle}>
          When you exercise, you can eat more to fuel your workouts
        </Text>

        <View style={styles.exampleBox}>
          <View style={styles.exampleRow}>
            <Text style={styles.exampleLabel}>Daily goal</Text>
            <Text style={styles.exampleValue}>2,000 cal</Text>
          </View>
          <View style={styles.exampleRow}>
            <Text style={styles.exampleLabel}>Exercise</Text>
            <Text style={styles.exampleValuePositive}>+300 cal</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.exampleRow}>
            <Text style={styles.exampleLabelBold}>New goal</Text>
            <Text style={styles.exampleValueBold}>2,300 cal</Text>
          </View>
        </View>

        <View style={styles.options}>
          <SelectionCard
            title="Yes, add them back"
            subtitle="Recommended for active lifestyles"
            selected={selected === true}
            onPress={() => setSelected(true)}
          />
          <SelectionCard
            title="No, keep goal fixed"
            subtitle="Faster weight loss"
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
  exampleBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  exampleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  exampleLabel: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  exampleLabelBold: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.semibold,
  },
  exampleValue: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  exampleValuePositive: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  exampleValueBold: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    fontWeight: typography.fontWeight.bold,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.sm,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
