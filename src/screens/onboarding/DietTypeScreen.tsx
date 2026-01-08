import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface DietTypeScreenProps {
  navigation: any;
}

const dietOptions = [
  { value: 'classic', label: 'Classic', subtitle: 'No dietary restrictions' },
  { value: 'pescatarian', label: 'Pescatarian', subtitle: 'Fish but no meat' },
  { value: 'vegetarian', label: 'Vegetarian', subtitle: 'No meat or fish' },
  { value: 'vegan', label: 'Vegan', subtitle: 'No animal products' },
];

export const DietTypeScreen: React.FC<DietTypeScreenProps> = ({
  navigation,
}) => {
  const { dietType, setDietType } = useOnboardingStore();
  const [selected, setSelected] = useState<string | null>(dietType);

  const progress = 15 / 29;

  const handleContinue = () => {
    if (selected) {
      setDietType(selected);
      navigation.navigate('Accomplishments');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What type of diet do you follow?</Text>
        <Text style={styles.subtitle}>
          We'll personalize meal suggestions based on your preferences
        </Text>

        <View style={styles.options}>
          {dietOptions.map((option) => (
            <SelectionCard
              key={option.value}
              title={option.label}
              subtitle={option.subtitle}
              selected={selected === option.value}
              onPress={() => setSelected(option.value)}
            />
          ))}
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
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xl,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
