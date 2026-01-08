import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface ObstaclesScreenProps {
  navigation: any;
}

const obstacleOptions = [
  'Lack of consistency',
  'Unhealthy eating habits',
  'Lack of support',
  'Busy schedule',
  'Lack of meal inspiration',
];

export const ObstaclesScreen: React.FC<ObstaclesScreenProps> = ({
  navigation,
}) => {
  const { obstacles, setObstacles } = useOnboardingStore();
  const [selected, setSelected] = useState<string[]>(obstacles);

  const progress = 14 / 29;

  const toggleObstacle = (obstacle: string) => {
    if (selected.includes(obstacle)) {
      setSelected(selected.filter((o) => o !== obstacle));
    } else {
      setSelected([...selected, obstacle]);
    }
  };

  const handleContinue = () => {
    setObstacles(selected);
    navigation.navigate('DietType');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What obstacles have prevented you from reaching your goals?</Text>
        <Text style={styles.subtitle}>Select all that apply</Text>

        <View style={styles.options}>
          {obstacleOptions.map((obstacle) => (
            <SelectionCard
              key={obstacle}
              title={obstacle}
              selected={selected.includes(obstacle)}
              onPress={() => toggleObstacle(obstacle)}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={selected.length === 0}
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
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
