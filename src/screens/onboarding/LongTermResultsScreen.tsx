import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';

interface LongTermResultsScreenProps {
  navigation: any;
}

export const LongTermResultsScreen: React.FC<LongTermResultsScreenProps> = ({
  navigation,
}) => {
  const progress = 7 / 29;

  const handleContinue = () => {
    navigation.navigate('HeightWeight');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Caloric creates long-term results</Text>
        <Text style={styles.subtitle}>
          Studies show that AI-powered tracking helps users maintain weight loss for 2x longer
        </Text>

        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            <View style={styles.chartRow}>
              <Text style={styles.chartLabel}>Caloric</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, styles.barCaloric]} />
                <Text style={styles.barLabel}>24 months</Text>
              </View>
            </View>
            <View style={styles.chartRow}>
              <Text style={styles.chartLabel}>Other apps</Text>
              <View style={styles.barContainer}>
                <View style={[styles.bar, styles.barOther]} />
                <Text style={styles.barLabel}>12 months</Text>
              </View>
            </View>
          </View>
          <Text style={styles.chartFooter}>Average weight maintenance duration</Text>
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
  chartContainer: {
    marginTop: spacing.xl,
  },
  chart: {
    backgroundColor: colors.backgroundGray,
    borderRadius: 16,
    padding: spacing.lg,
  },
  chartRow: {
    marginBottom: spacing.lg,
  },
  chartLabel: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  barContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bar: {
    height: 32,
    borderRadius: 8,
  },
  barCaloric: {
    width: '80%',
    backgroundColor: colors.text,
  },
  barOther: {
    width: '40%',
    backgroundColor: colors.textSecondary,
  },
  barLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.text,
    marginLeft: spacing.sm,
    fontWeight: typography.fontWeight.medium,
  },
  chartFooter: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
