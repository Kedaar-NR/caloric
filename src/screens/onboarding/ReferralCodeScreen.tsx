import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface ReferralCodeScreenProps {
  navigation: any;
}

export const ReferralCodeScreen: React.FC<ReferralCodeScreenProps> = ({
  navigation,
}) => {
  const { referralCode, setReferralCode } = useOnboardingStore();
  const [code, setCode] = useState(referralCode || '');

  const progress = 24 / 29;

  const handleContinue = () => {
    if (code.trim()) {
      setReferralCode(code.trim());
    }
    navigation.navigate('PlanGeneration');
  };

  const handleSkip = () => {
    setReferralCode('');
    navigation.navigate('PlanGeneration');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Enter referral code</Text>
        <Text style={styles.subtitle}>
          Have a code from a friend? Enter it here to unlock special bonuses
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter code (optional)"
            placeholderTextColor={colors.textSecondary}
            value={code}
            onChangeText={setCode}
            autoCapitalize="characters"
            autoCorrect={false}
          />
        </View>

        <View style={styles.benefitsBox}>
          <Text style={styles.benefitsTitle}>Referral benefits:</Text>
          <View style={styles.benefitRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.benefitText}>7 days free premium trial</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.benefitText}>Exclusive meal plans</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.benefitText}>Priority support access</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button title="Continue" onPress={handleContinue} />
        <Button
          title="Skip"
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
  inputContainer: {
    marginBottom: spacing.xl,
  },
  input: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    textAlign: 'center',
  },
  benefitsBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  benefitsTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkmark: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.md,
  },
  benefitText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  skipButton: {
    marginTop: spacing.md,
  },
});
