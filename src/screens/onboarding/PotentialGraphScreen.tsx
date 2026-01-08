import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface PotentialGraphScreenProps {
  navigation: any;
}

export const PotentialGraphScreen: React.FC<PotentialGraphScreenProps> = ({
  navigation,
}) => {
  const progress = 17 / 29;

  const handleContinue = () => {
    navigation.navigate('ThankYou');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>You have great potential</Text>
        <Text style={styles.subtitle}>
          Based on your profile, here's your predicted weight loss journey
        </Text>

        <View style={styles.graphContainer}>
          <View style={styles.graph}>
            <View style={styles.yAxis}>
              <Text style={styles.axisLabel}>90 kg</Text>
              <Text style={styles.axisLabel}>80 kg</Text>
              <Text style={styles.axisLabel}>70 kg</Text>
              <Text style={styles.axisLabel}>60 kg</Text>
            </View>
            <View style={styles.plotArea}>
              <View style={styles.line} />
              <View style={styles.dataPoints}>
                <View style={[styles.dot, { top: '10%', left: '10%' }]} />
                <View style={[styles.dot, { top: '30%', left: '40%' }]} />
                <View style={[styles.dot, { top: '70%', left: '90%' }]} />
              </View>
            </View>
          </View>
          <View style={styles.xAxis}>
            <Text style={styles.axisLabel}>3 days</Text>
            <Text style={styles.axisLabel}>7 days</Text>
            <Text style={styles.axisLabel}>30 days</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>-5 kg</Text>
            <Text style={styles.statLabel}>In 3 days</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>-10 kg</Text>
            <Text style={styles.statLabel}>In 7 days</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>-15 kg</Text>
            <Text style={styles.statLabel}>In 30 days</Text>
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
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xxxl,
  },
  graphContainer: {
    marginTop: spacing.xl,
  },
  graph: {
    flexDirection: 'row',
    height: 200,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
  },
  yAxis: {
    justifyContent: 'space-between',
    paddingRight: spacing.sm,
  },
  plotArea: {
    flex: 1,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: '30%',
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: colors.text,
    borderBottomLeftRadius: 8,
  },
  dataPoints: {
    flex: 1,
  },
  dot: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.text,
  },
  xAxis: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.md,
  },
  axisLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: spacing.xl,
    gap: spacing.sm,
  },
  statBox: {
    flex: 1,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    alignItems: 'center',
  },
  statValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
