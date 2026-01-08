import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface ComparisonStatsScreenProps {
  navigation: any;
}

export const ComparisonStatsScreen: React.FC<ComparisonStatsScreenProps> = ({
  navigation,
}) => {
  const progress = 13 / 29;

  const handleContinue = () => {
    navigation.navigate('Obstacles');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Lose twice as much weight with Caloric vs on your own
        </Text>
        <Text style={styles.subtitle}>
          Research shows AI-powered tracking doubles weight loss success rates
        </Text>

        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <View style={styles.chartRow}>
              <View style={styles.chartLabelContainer}>
                <Text style={styles.chartLabel}>With Caloric</Text>
                <Text style={styles.chartSubLabel}>AI-powered tracking</Text>
              </View>
              <View style={styles.barContainer}>
                <View style={[styles.bar, styles.barCaloric]}>
                  <Text style={styles.barValue}>12 kg</Text>
                </View>
              </View>
            </View>
            <View style={styles.chartRow}>
              <View style={styles.chartLabelContainer}>
                <Text style={styles.chartLabel}>On your own</Text>
                <Text style={styles.chartSubLabel}>Manual tracking</Text>
              </View>
              <View style={styles.barContainer}>
                <View style={[styles.bar, styles.barManual]}>
                  <Text style={styles.barValue}>6 kg</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.chartFooter}>Average weight loss in 6 months</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>2x</Text>
            <Text style={styles.statLabel}>More weight lost</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Success rate</Text>
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
    marginBottom: spacing.xxxl,
  },
  chartContainer: {
    marginTop: spacing.xl,
  },
  chart: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  chartRow: {
    marginBottom: spacing.lg,
  },
  chartLabelContainer: {
    marginBottom: spacing.sm,
  },
  chartLabel: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  chartSubLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  barContainer: {
    width: '100%',
  },
  bar: {
    height: 48,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  barCaloric: {
    width: '100%',
    backgroundColor: colors.text,
  },
  barManual: {
    width: '50%',
    backgroundColor: colors.textSecondary,
  },
  barValue: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  chartFooter: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: spacing.xl,
    gap: spacing.md,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
