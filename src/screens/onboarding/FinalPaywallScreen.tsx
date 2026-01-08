import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface FinalPaywallScreenProps {
  navigation: any;
}

export const FinalPaywallScreen: React.FC<FinalPaywallScreenProps> = ({
  navigation,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const handleContinue = () => {
    navigation.navigate('MainTabs');
  };

  const handleRestore = () => {
    // Handle restore purchases
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRestore}>
            <Text style={styles.restoreText}>Restore</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <Text style={styles.title}>Start your 3-day FREE trial to continue.</Text>

        {/* Timeline */}
        <View style={styles.timeline}>
          {/* Today */}
          <View style={styles.timelineItem}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, styles.iconCircleActive]}>
                <Text style={styles.iconEmoji}>🔓</Text>
              </View>
              <View style={[styles.timelineLine, styles.timelineLineActive]} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>Today</Text>
              <Text style={styles.timelineSubtitle}>
                Unlock all the app's features like AI calorie scanning and more.
              </Text>
            </View>
          </View>

          {/* In 2 Days */}
          <View style={styles.timelineItem}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, styles.iconCircleActive]}>
                <Text style={styles.iconEmoji}>🔔</Text>
              </View>
              <View style={[styles.timelineLine, styles.timelineLineActive]} />
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>In 2 Days - Reminder</Text>
              <Text style={styles.timelineSubtitle}>
                We'll send you a reminder that your trial is ending soon.
              </Text>
            </View>
          </View>

          {/* In 3 Days */}
          <View style={styles.timelineItem}>
            <View style={styles.iconContainer}>
              <View style={[styles.iconCircle, styles.iconCircleInactive]}>
                <Text style={styles.iconEmoji}>👑</Text>
              </View>
            </View>
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>In 3 Days - Billing Starts</Text>
              <Text style={styles.timelineSubtitle}>
                You'll be charged on Jan 8, 2026 unless you cancel anytime before.
              </Text>
            </View>
          </View>
        </View>

        {/* Pricing Plans */}
        <View style={styles.pricingContainer}>
          {/* Monthly Plan */}
          <TouchableOpacity
            style={[
              styles.pricingCard,
              selectedPlan === 'monthly' && styles.pricingCardSelected,
            ]}
            onPress={() => setSelectedPlan('monthly')}
          >
            <Text style={styles.planName}>Monthly</Text>
            <Text style={styles.planPrice}>$9.99 /mo</Text>
            <View style={[
              styles.radioCircle,
              selectedPlan === 'monthly' && styles.radioCircleSelected,
            ]}>
              {selectedPlan === 'monthly' && <View style={styles.radioCircleInner} />}
            </View>
          </TouchableOpacity>

          {/* Yearly Plan */}
          <TouchableOpacity
            style={[
              styles.pricingCard,
              selectedPlan === 'yearly' && styles.pricingCardSelected,
            ]}
            onPress={() => setSelectedPlan('yearly')}
          >
            <View style={styles.freeBadge}>
              <Text style={styles.freeBadgeText}>3 DAYS FREE</Text>
            </View>
            <Text style={styles.planName}>Yearly</Text>
            <Text style={styles.planPrice}>$2.49/mo</Text>
            <View style={[
              styles.radioCircle,
              selectedPlan === 'yearly' && styles.radioCircleSelected,
            ]}>
              {selectedPlan === 'yearly' && (
                <Text style={styles.checkmark}>✓</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>

        {/* No Payment Due Now */}
        <View style={styles.noPaymentRow}>
          <Text style={styles.checkmarkSmall}>✓</Text>
          <Text style={styles.noPaymentText}>No Payment Due Now</Text>
        </View>

        {/* CTA Button */}
        <TouchableOpacity style={styles.ctaButton} onPress={handleContinue}>
          <Text style={styles.ctaButtonText}>Start My 3-Day Free Trial</Text>
        </TouchableOpacity>

        {/* Footer Text */}
        <Text style={styles.footerText}>
          3 days free, then $29.99 per year ($2.49/mo)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 36,
    color: colors.text,
  },
  restoreText: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
  },
  title: {
    fontSize: 28,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.xs,
  },
  timeline: {
    marginBottom: spacing.xl,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: spacing.md,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircleActive: {
    backgroundColor: '#FF9500',
  },
  iconCircleInactive: {
    backgroundColor: '#8E8E93',
  },
  iconEmoji: {
    fontSize: 24,
  },
  timelineLine: {
    width: 4,
    flex: 1,
    minHeight: 40,
  },
  timelineLineActive: {
    backgroundColor: '#FF9500',
  },
  timelineContent: {
    flex: 1,
    paddingTop: spacing.xs,
  },
  timelineTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  timelineSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  pricingContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  pricingCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E5EA',
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    position: 'relative',
    minHeight: 120,
  },
  pricingCardSelected: {
    borderColor: '#000000',
    borderWidth: 2,
  },
  freeBadge: {
    position: 'absolute',
    top: -12,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  freeBadgeText: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: typography.fontWeight.bold,
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  planName: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  planPrice: {
    fontSize: 22,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  radioCircle: {
    position: 'absolute',
    top: spacing.lg,
    right: spacing.lg,
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5EA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioCircleSelected: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  radioCircleInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: typography.fontWeight.bold,
  },
  noPaymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  checkmarkSmall: {
    fontSize: 18,
    color: colors.text,
    marginRight: spacing.xs,
  },
  noPaymentText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
  },
  ctaButton: {
    backgroundColor: '#000000',
    borderRadius: borderRadius.md,
    paddingVertical: 18,
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  ctaButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semibold,
    color: '#FFFFFF',
  },
  footerText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
