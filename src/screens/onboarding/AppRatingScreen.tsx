import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface AppRatingScreenProps {
  navigation: any;
}

export const AppRatingScreen: React.FC<AppRatingScreenProps> = ({
  navigation,
}) => {
  const progress = 22 / 29;

  const handleRate = () => {
    // Open App Store rating
    navigation.navigate('Notifications');
  };

  const handleSkip = () => {
    navigation.navigate('Notifications');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Give us a rating</Text>
        <Text style={styles.subtitle}>
          Help others discover Caloric by leaving a review on the App Store
        </Text>

        <View style={styles.starsContainer}>
          <Text style={styles.stars}>⭐️⭐️⭐️⭐️⭐️</Text>
        </View>

        <View style={styles.reviewsBox}>
          <View style={styles.review}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewStars}>⭐️⭐️⭐️⭐️⭐️</Text>
              <Text style={styles.reviewDate}>2 days ago</Text>
            </View>
            <Text style={styles.reviewTitle}>"Finally an app that works!"</Text>
            <Text style={styles.reviewText}>
              I've tried so many calorie tracking apps and Caloric is the first one that actually helped me lose weight. The AI makes it so easy!
            </Text>
            <Text style={styles.reviewAuthor}>- Sarah M.</Text>
          </View>

          <View style={styles.review}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewStars}>⭐️⭐️⭐️⭐️⭐️</Text>
              <Text style={styles.reviewDate}>1 week ago</Text>
            </View>
            <Text style={styles.reviewTitle}>"Game changer"</Text>
            <Text style={styles.reviewText}>
              Lost 15 lbs in 2 months. The scanning feature is incredible and saves so much time.
            </Text>
            <Text style={styles.reviewAuthor}>- Mike R.</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button title="Rate on App Store" onPress={handleRate} />
        <Button
          title="Maybe later"
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
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xl,
  },
  starsContainer: {
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  stars: {
    fontSize: 40,
  },
  reviewsBox: {
    marginTop: spacing.lg,
  },
  review: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  reviewStars: {
    fontSize: 16,
  },
  reviewDate: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
  },
  reviewTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  reviewText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.normal,
    marginBottom: spacing.sm,
  },
  reviewAuthor: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  skipButton: {
    marginTop: spacing.md,
  },
});
