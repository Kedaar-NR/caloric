import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface LoadingProgressScreenProps {
  navigation: any;
}

const loadingMessages = [
  'Analyzing your metabolism...',
  'Calculating optimal macros...',
  'Personalizing meal suggestions...',
  'Setting up your dashboard...',
  'Finalizing your plan...',
];

export const LoadingProgressScreen: React.FC<LoadingProgressScreenProps> = ({
  navigation,
}) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            navigation.navigate('PlanReady');
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <OnboardingContainer progress={26 / 29} showProgress={false}>
      <View style={styles.content}>
        <Text style={styles.percentage}>{progress}%</Text>
        <Text style={styles.title}>We're setting everything up for you</Text>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]} />
          </View>
        </View>

        <Text style={styles.message}>{loadingMessages[messageIndex]}</Text>

        <View style={styles.stepsContainer}>
          {loadingMessages.map((message, index) => (
            <View key={index} style={styles.stepRow}>
              <View
                style={[
                  styles.stepDot,
                  index <= messageIndex && styles.stepDotActive,
                ]}
              />
              <Text
                style={[
                  styles.stepText,
                  index <= messageIndex && styles.stepTextActive,
                ]}
              >
                {message}
              </Text>
            </View>
          ))}
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
  percentage: {
    fontSize: 72,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
    paddingHorizontal: spacing.lg,
  },
  progressBarContainer: {
    width: '100%',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  progressBar: {
    height: 12,
    backgroundColor: colors.backgroundGray,
    borderRadius: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.text,
    borderRadius: 6,
  },
  message: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
  },
  stepsContainer: {
    width: '100%',
    paddingHorizontal: spacing.lg,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.backgroundGray,
    marginRight: spacing.md,
  },
  stepDotActive: {
    backgroundColor: colors.text,
  },
  stepText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  stepTextActive: {
    color: colors.text,
    fontWeight: typography.fontWeight.medium,
  },
});
