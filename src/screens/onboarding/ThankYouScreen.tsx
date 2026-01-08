import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface ThankYouScreenProps {
  navigation: any;
}

export const ThankYouScreen: React.FC<ThankYouScreenProps> = ({
  navigation,
}) => {
  const { setAcceptedPrivacy } = useOnboardingStore();

  const progress = 18 / 29;

  const handleContinue = () => {
    setAcceptedPrivacy(true);
    navigation.navigate('AppleHealth');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <View style={styles.lockIcon}>
            <Text style={styles.lockEmoji}>🔒</Text>
          </View>
        </View>

        <Text style={styles.title}>Thank you for sharing</Text>
        <Text style={styles.subtitle}>
          Your data is encrypted and private. We never sell your information to third parties.
        </Text>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.infoText}>End-to-end encryption</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.infoText}>Your data stays yours</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.infoText}>No selling to advertisers</Text>
          </View>
        </View>

        <Text style={styles.disclaimer}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
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
  illustration: {
    alignItems: 'center',
    marginVertical: spacing.xxxl,
  },
  lockIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockEmoji: {
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
  infoBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  checkmark: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.md,
  },
  infoText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    flex: 1,
  },
  disclaimer: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
