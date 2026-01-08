import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface GoalSelectionScreenProps {
  navigation: any;
}

export const GoalSelectionScreen: React.FC<GoalSelectionScreenProps> = ({
  navigation,
}) => {
  const { goal, setGoal } = useOnboardingStore();
  const [selected, setSelected] = useState<'lose' | 'maintain' | 'gain' | null>(goal);

  const progress = 10 / 29;

  const handleContinue = () => {
    if (selected) {
      setGoal(selected);
      if (selected === 'lose') {
        navigation.navigate('DesiredWeight');
      } else {
        navigation.navigate('ComparisonStats');
      }
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What is your goal?</Text>

        <View style={styles.options}>
          <SelectionCard
            title="Lose weight"
            subtitle="Reduce body weight with a calorie deficit"
            selected={selected === 'lose'}
            onPress={() => setSelected('lose')}
          />
          <SelectionCard
            title="Maintain weight"
            subtitle="Stay at your current weight"
            selected={selected === 'maintain'}
            onPress={() => setSelected('maintain')}
          />
          <SelectionCard
            title="Gain weight"
            subtitle="Build muscle with a calorie surplus"
            selected={selected === 'gain'}
            onPress={() => setSelected('gain')}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!selected}
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
    marginBottom: spacing.xl,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
