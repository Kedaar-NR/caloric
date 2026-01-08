import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface GenderSelectionScreenProps {
  navigation: any;
}

export const GenderSelectionScreen: React.FC<GenderSelectionScreenProps> = ({
  navigation,
}) => {
  const { gender, setGender } = useOnboardingStore();
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | 'other' | null>(
    gender
  );

  const progress = 3 / 29;

  const handleContinue = () => {
    if (selectedGender) {
      setGender(selectedGender);
      navigation.navigate('WorkoutFrequency');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What is your gender?</Text>

        <View style={styles.options}>
          <SelectionCard
            title="Male"
            selected={selectedGender === 'male'}
            onPress={() => setSelectedGender('male')}
          />
          <SelectionCard
            title="Female"
            selected={selectedGender === 'female'}
            onPress={() => setSelectedGender('female')}
          />
          <SelectionCard
            title="Other"
            selected={selectedGender === 'other'}
            onPress={() => setSelectedGender('other')}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={!selectedGender}
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
