import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface PlanReadyScreenProps {
  navigation: any;
}

export const PlanReadyScreen: React.FC<PlanReadyScreenProps> = ({
  navigation,
}) => {
  const progress = 27 / 29;

  const handleContinue = () => {
    navigation.navigate('SignIn');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>🎉</Text>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>Your custom plan is ready</Text>
        </View>

        <View style={styles.planContainer}>
          <View style={styles.mainGoal}>
            <Text style={styles.calorieValue}>2,000</Text>
            <Text style={styles.calorieLabel}>Daily Calories</Text>
          </View>

          <View style={styles.macrosContainer}>
            <View style={styles.macroBox}>
              <View style={[styles.macroCircle, { backgroundColor: '#FF6B6B' }]}>
                <Text style={styles.macroValue}>50g</Text>
              </View>
              <Text style={styles.macroLabel}>Protein</Text>
            </View>
            <View style={styles.macroBox}>
              <View style={[styles.macroCircle, { backgroundColor: '#4ECDC4' }]}>
                <Text style={styles.macroValue}>200g</Text>
              </View>
              <Text style={styles.macroLabel}>Carbs</Text>
            </View>
            <View style={styles.macroBox}>
              <View style={[styles.macroCircle, { backgroundColor: '#FFD93D' }]}>
                <Text style={styles.macroValue}>65g</Text>
              </View>
              <Text style={styles.macroLabel}>Fat</Text>
            </View>
          </View>
        </View>

        <View style={styles.highlightsBox}>
          <Text style={styles.highlightsTitle}>Your Plan Includes:</Text>
          <View style={styles.highlightRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.highlightText}>Personalized daily calorie goal</Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.highlightText}>Custom macro breakdown</Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.highlightText}>AI-powered meal suggestions</Text>
          </View>
          <View style={styles.highlightRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.highlightText}>Progress tracking & insights</Text>
          </View>
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
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },
  emoji: {
    fontSize: 60,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  planContainer: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginBottom: spacing.xl,
  },
  mainGoal: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    paddingBottom: spacing.xl,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  calorieValue: {
    fontSize: 48,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  calorieLabel: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  macroBox: {
    alignItems: 'center',
  },
  macroCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  macroValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  macroLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  highlightsBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  highlightsTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkmark: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.md,
  },
  highlightText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
