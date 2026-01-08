import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { colors, typography, spacing } from '@/theme';

interface PlanGenerationScreenProps {
  navigation: any;
}

export const PlanGenerationScreen: React.FC<PlanGenerationScreenProps> = ({
  navigation,
}) => {
  const scaleAnim = new Animated.Value(1);

  const progress = 25 / 29;

  useEffect(() => {
    // Pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate to next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.navigate('LoadingProgress');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <OnboardingContainer progress={progress} showProgress={false}>
      <View style={styles.content}>
        <Animated.View style={[styles.iconContainer, { transform: [{ scale: scaleAnim }] }]}>
          <Text style={styles.icon}>✨</Text>
        </Animated.View>

        <Text style={styles.title}>Time to generate your custom plan!</Text>
        <Text style={styles.subtitle}>
          Our AI is analyzing your profile to create a personalized nutrition plan just for you
        </Text>

        <View style={styles.processingBox}>
          <View style={styles.processingRow}>
            <Text style={styles.processingIcon}>🎯</Text>
            <Text style={styles.processingText}>Analyzing your goals...</Text>
          </View>
          <View style={styles.processingRow}>
            <Text style={styles.processingIcon}>🔬</Text>
            <Text style={styles.processingText}>Calculating calorie needs...</Text>
          </View>
          <View style={styles.processingRow}>
            <Text style={styles.processingIcon}>🍽️</Text>
            <Text style={styles.processingText}>Creating meal recommendations...</Text>
          </View>
        </View>
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: spacing.xxxl,
  },
  icon: {
    fontSize: 80,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
    paddingHorizontal: spacing.lg,
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xxxl,
    paddingHorizontal: spacing.lg,
  },
  processingBox: {
    width: '100%',
    paddingHorizontal: spacing.lg,
  },
  processingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  processingIcon: {
    fontSize: 24,
    marginRight: spacing.md,
  },
  processingText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
});
