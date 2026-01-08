import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface WorkoutFrequencyScreenProps {
  navigation: any;
}

export const WorkoutFrequencyScreen: React.FC<WorkoutFrequencyScreenProps> = ({
  navigation,
}) => {
  const { workoutsPerWeek, setWorkoutsPerWeek } = useOnboardingStore();
  const [selected, setSelected] = useState<'0-2' | '3-5' | '6+' | null>(workoutsPerWeek);

  const progress = 4 / 29;

  const handleContinue = () => {
    if (selected) {
      setWorkoutsPerWeek(selected);
      navigation.navigate('ReferralSource');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>How many workouts per week do you do?</Text>

        <View style={styles.options}>
          <SelectionCard
            title="0-2 workouts"
            selected={selected === '0-2'}
            onPress={() => setSelected('0-2')}
          />
          <SelectionCard
            title="3-5 workouts"
            selected={selected === '3-5'}
            onPress={() => setSelected('3-5')}
          />
          <SelectionCard
            title="6+ workouts"
            selected={selected === '6+'}
            onPress={() => setSelected('6+')}
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
