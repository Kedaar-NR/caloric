import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
    // Handle Apple Sign In - Navigate directly to Home
    navigation.navigate('Home');
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign In - Navigate directly to Home
    navigation.navigate('Home');
  };

  const handleSkip = () => {
    // Skip and go to paywall (only when coming from onboarding flow)
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
        <TouchableOpacity style={styles.appleButton} onPress={handleAppleSignIn}>
          <Text style={styles.appleIcon}></Text>
          <Text style={styles.appleText}>Sign in with Apple</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignIn}>
          <Text style={styles.googleIcon}>G</Text>
          <Text style={styles.googleText}>Sign in with Google</Text>
        </TouchableOpacity>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 56,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  appleIcon: {
    fontSize: 20,
    color: '#FFFFFF',
    marginRight: spacing.sm,
  },
  appleText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 56,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  googleIcon: {
    fontSize: 20,
    color: '#4285F4',
    fontWeight: typography.fontWeight.bold,
    marginRight: spacing.sm,
  },
  googleText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: '#000000',
  },
  skipButton: {
    marginTop: spacing.sm,
  },
});
