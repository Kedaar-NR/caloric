import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface FinalPaywallScreenProps {
  navigation: any;
}

export const FinalPaywallScreen: React.FC<FinalPaywallScreenProps> = ({
  navigation,
}) => {
  const progress = 29 / 29;

  const handleContinue = () => {
    navigation.navigate('SpinWheel');
  };

  const handleRestore = () => {
    // Handle restore purchases
  };

  return (
    <OnboardingContainer progress={progress} showProgress={false}>
      <View style={styles.content}>
        <Text style={styles.title}>Unlock Caloric to reach your goals faster</Text>
        <Text style={styles.subtitle}>
          Join thousands who've transformed their health with premium features
        </Text>

        <View style={styles.phoneMockup}>
          <View style={styles.mockupCard}>
            <Text style={styles.mockupEmoji}>📱</Text>
            <Text style={styles.mockupText}>AI Food Scanner</Text>
          </View>
        </View>

        <View style={styles.featuresBox}>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Unlimited AI food scanning</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Personalized meal plans</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Advanced progress analytics</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Custom macro targets</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>No ads, ever</Text>
          </View>
        </View>

        <View style={styles.pricingBox}>
          <View style={styles.pricingBadge}>
            <Text style={styles.badgeText}>BEST VALUE</Text>
          </View>
          <Text style={styles.pricingTitle}>Annual Plan</Text>
          <View style={styles.pricingRow}>
            <Text style={styles.oldPrice}>$79.99</Text>
            <Text style={styles.newPrice}>$39.99/year</Text>
          </View>
          <Text style={styles.savingsText}>Save 50% • Just $3.33/month</Text>
        </View>

        <Text style={styles.trial}>Start 7-day free trial, cancel anytime</Text>
      </View>

      <View style={styles.bottom}>
        <Button title="Continue" onPress={handleContinue} />
        <Button
          title="Restore Purchases"
          onPress={handleRestore}
          variant="outline"
          style={styles.restoreButton}
        />
        <Text style={styles.disclaimer}>
          By continuing, you agree to our Terms of Service and Privacy Policy. Subscription automatically renews unless cancelled.
        </Text>
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
    textAlign: 'center',
    marginBottom: spacing.md,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xl,
  },
  phoneMockup: {
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  mockupCard: {
    width: 200,
    height: 120,
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockupEmoji: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  mockupText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  featuresBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  checkmark: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.md,
  },
  featureText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  pricingBox: {
    backgroundColor: colors.text,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  pricingBadge: {
    backgroundColor: colors.textWhite,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
  },
  badgeText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  pricingTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textWhite,
    marginBottom: spacing.sm,
  },
  pricingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.xs,
  },
  oldPrice: {
    fontSize: typography.fontSize.md,
    color: colors.textWhite,
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  newPrice: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  savingsText: {
    fontSize: typography.fontSize.sm,
    color: colors.textWhite,
    opacity: 0.9,
  },
  trial: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  restoreButton: {
    marginTop: spacing.md,
  },
  disclaimer: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
    marginTop: spacing.md,
  },
});
