import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { RootStackParamList } from '@/navigation/types';

type DiscountedPaywallScreenProps = StackScreenProps<RootStackParamList, 'DiscountedPaywall'>;

export const DiscountedPaywallScreen: React.FC<DiscountedPaywallScreenProps> = ({
  navigation,
  route,
}) => {
  const discount = route?.params?.discount || '80%';
  const discountValue = parseInt(discount.replace('%', ''));
  const originalPrice = 79.99;
  const discountedPrice = (originalPrice * (1 - discountValue / 100)).toFixed(2);

  const handleSubscribe = () => {
    // Handle subscription
    // TODO: Navigate to main app once implemented
    console.log('Subscription completed!');
  };

  const handleRestore = () => {
    // Handle restore purchases
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>{discount} OFF FOREVER</Text>
          </View>
          <Text style={styles.title}>Your one-time offer</Text>
          <Text style={styles.subtitle}>
            This exclusive discount expires in 10 minutes
          </Text>
        </View>

        <View style={styles.timerBox}>
          <Text style={styles.timerLabel}>Offer expires in:</Text>
          <Text style={styles.timer}>09:47</Text>
        </View>

        <View style={styles.pricingCard}>
          <View style={styles.pricingHeader}>
            <Text style={styles.pricingPlan}>Annual Premium</Text>
            <View style={styles.popularBadge}>
              <Text style={styles.popularText}>MOST POPULAR</Text>
            </View>
          </View>
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.oldPrice}>${originalPrice}/year</Text>
              <View style={styles.newPriceRow}>
                <Text style={styles.newPrice}>${discountedPrice}</Text>
                <Text style={styles.priceUnit}>/year</Text>
              </View>
              <Text style={styles.monthlyPrice}>
                Just ${(parseFloat(discountedPrice) / 12).toFixed(2)}/month
              </Text>
            </View>
            <View style={styles.savingsBadge}>
              <Text style={styles.savingsText}>SAVE</Text>
              <Text style={styles.savingsAmount}>{discount}</Text>
            </View>
          </View>
        </View>

        <View style={styles.featuresBox}>
          <Text style={styles.featuresTitle}>Everything included:</Text>
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
            <Text style={styles.featureText}>Advanced analytics & insights</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Custom macro tracking</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Recipe recommendations</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>Priority customer support</Text>
          </View>
          <View style={styles.featureRow}>
            <Text style={styles.checkmark}>✓</Text>
            <Text style={styles.featureText}>No ads, ever</Text>
          </View>
        </View>

        <View style={styles.guaranteeBox}>
          <Text style={styles.guaranteeIcon}>🔒</Text>
          <Text style={styles.guaranteeText}>
            7-day money-back guarantee • Cancel anytime
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <Button
          title={`Claim ${discount} Discount Now`}
          onPress={handleSubscribe}
        />
        <Button
          title="Restore Purchases"
          onPress={handleRestore}
          variant="outline"
          style={styles.restoreButton}
        />
        <Text style={styles.disclaimer}>
          By continuing, you agree to our Terms of Service and Privacy Policy. This is a one-time offer valid for this session only. Subscription automatically renews unless cancelled.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  discountBadge: {
    backgroundColor: colors.text,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    marginBottom: spacing.md,
  },
  discountBadgeText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
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
  timerBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  timerLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  timer: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  pricingCard: {
    backgroundColor: colors.text,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  pricingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  pricingPlan: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  popularBadge: {
    backgroundColor: colors.textWhite,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  popularText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  oldPrice: {
    fontSize: typography.fontSize.md,
    color: colors.textWhite,
    textDecorationLine: 'line-through',
    opacity: 0.7,
    marginBottom: spacing.xs,
  },
  newPriceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.xs,
  },
  newPrice: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  priceUnit: {
    fontSize: typography.fontSize.lg,
    color: colors.textWhite,
    marginLeft: spacing.xs,
  },
  monthlyPrice: {
    fontSize: typography.fontSize.sm,
    color: colors.textWhite,
    opacity: 0.9,
  },
  savingsBadge: {
    backgroundColor: colors.textWhite,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  savingsText: {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  savingsAmount: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  featuresBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  featuresTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  checkmark: {
    fontSize: typography.fontSize.lg,
    color: colors.text,
    marginRight: spacing.md,
  },
  featureText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  guaranteeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  guaranteeIcon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  guaranteeText: {
    fontSize: typography.fontSize.sm,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
  bottom: {
    paddingHorizontal: spacing.lg,
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
