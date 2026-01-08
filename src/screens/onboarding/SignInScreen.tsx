import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface SignInScreenProps {
  navigation: any;
}

export const SignInScreen: React.FC<SignInScreenProps> = ({
  navigation,
}) => {
  const progress = 28 / 29;

  const handleAppleSignIn = () => {
    // Handle Apple Sign In
    navigation.navigate('FinalPaywall');
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign In
    navigation.navigate('FinalPaywall');
  };

  const handleSkip = () => {
    navigation.navigate('FinalPaywall');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>💾</Text>
          <Text style={styles.title}>Save your progress</Text>
          <Text style={styles.subtitle}>
            Sign in to sync your data across devices and never lose your progress
          </Text>
        </View>

        <View style={styles.benefitsBox}>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>☁️</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Cloud backup</Text>
              <Text style={styles.benefitSubtitle}>
                Access your data anywhere
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>🔒</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Secure & private</Text>
              <Text style={styles.benefitSubtitle}>
                Your data is encrypted
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>📱</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Multi-device sync</Text>
              <Text style={styles.benefitSubtitle}>
                iPhone, iPad, and more
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Sign in with Apple"
          onPress={handleAppleSignIn}
          style={styles.appleButton}
        />
        <Button
          title="Sign in with Google"
          onPress={handleGoogleSignIn}
          variant="secondary"
          style={styles.googleButton}
        />
        <Button
          title="Continue without account"
          onPress={handleSkip}
          variant="outline"
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
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },
  emoji: {
    fontSize: 80,
    marginBottom: spacing.lg,
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
    paddingHorizontal: spacing.md,
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
  appleButton: {
    marginBottom: spacing.md,
  },
  googleButton: {
    marginBottom: spacing.md,
  },
  skipButton: {
    marginTop: spacing.sm,
  },
});
