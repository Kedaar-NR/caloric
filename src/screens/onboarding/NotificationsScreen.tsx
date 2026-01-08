import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface NotificationsScreenProps {
  navigation: any;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({
  navigation,
}) => {
  const { setAllowNotifications } = useOnboardingStore();

  const progress = 23 / 29;

  const handleAllow = () => {
    setAllowNotifications(true);
    navigation.navigate('ReferralCode');
  };

  const handleDeny = () => {
    setAllowNotifications(false);
    navigation.navigate('ReferralCode');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <View style={styles.illustration}>
          <View style={styles.bellIcon}>
            <Text style={styles.bellEmoji}>🔔</Text>
          </View>
        </View>

        <Text style={styles.title}>Reach your goals with notifications</Text>
        <Text style={styles.subtitle}>
          Stay on track with helpful reminders and encouragement
        </Text>

        <View style={styles.benefitsBox}>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>⏰</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Meal reminders</Text>
              <Text style={styles.benefitSubtitle}>
                Never forget to log your meals
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>🎯</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Goal progress</Text>
              <Text style={styles.benefitSubtitle}>
                Celebrate your achievements
              </Text>
            </View>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>💡</Text>
            <View style={styles.benefitText}>
              <Text style={styles.benefitTitle}>Helpful tips</Text>
              <Text style={styles.benefitSubtitle}>
                Get personalized nutrition advice
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.note}>
          You can change this anytime in Settings
        </Text>
      </View>

      <View style={styles.bottom}>
        <Button title="Allow Notifications" onPress={handleAllow} />
        <Button
          title="Don't Allow"
          onPress={handleDeny}
          variant="secondary"
          style={styles.denyButton}
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
  bellIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellEmoji: {
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
    marginBottom: spacing.lg,
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
  note: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  denyButton: {
    marginTop: spacing.md,
  },
});
