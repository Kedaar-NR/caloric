import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface AppleHealthScreenProps {
  navigation: any;
}

export const AppleHealthScreen: React.FC<AppleHealthScreenProps> = ({
  navigation,
}) => {
  const { setConnectAppleHealth } = useOnboardingStore();

  const progress = 19 / 29;

  const handleConnect = () => {
    setConnectAppleHealth(true);
    navigation.navigate('CaloriesBurned');
  };

  const handleSkip = () => {
    setConnectAppleHealth(false);
    navigation.navigate('CaloriesBurned');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <View style={styles.healthIcon}>
            <Text style={styles.healthEmoji}>❤️</Text>
          </View>
        </View>

        <Text style={styles.title}>Connect to Apple Health</Text>
        <Text style={styles.subtitle}>
          Sync your activity, steps, and workouts to automatically track calories burned
        </Text>

        <View style={styles.benefitsBox}>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>📊</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Automatic tracking</Text>
              <Text style={styles.benefitSubtitle}>
                No manual entry needed
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>🔥</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Accurate calories</Text>
              <Text style={styles.benefitSubtitle}>
                Based on real activity data
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>💪</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Better results</Text>
              <Text style={styles.benefitSubtitle}>
                More precise calorie goals
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button title="Connect" onPress={handleConnect} />
        <Button
          title="Not now"
          onPress={handleSkip}
          variant="secondary"
          style={styles.skipButton}
        />
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  illustration: {
    alignItems: 'center',
    marginVertical: spacing.xxxl,
  },
  healthIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  healthEmoji: {
    fontSize: 60,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xxxl,
  },
  benefitsBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  benefitIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  benefitText: {
    flex: 1,
  },
  benefitTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  benefitSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  skipButton: {
    marginTop: spacing.md,
  },
});
