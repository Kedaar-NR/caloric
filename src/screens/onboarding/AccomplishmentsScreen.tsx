import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface AccomplishmentsScreenProps {
  navigation: any;
}

const accomplishmentOptions = [
  'Eat healthier',
  'Boost energy levels',
  'Stay motivated',
  'Feel better about my body',
];

export const AccomplishmentsScreen: React.FC<AccomplishmentsScreenProps> = ({
  navigation,
}) => {
  const { accomplishments, setAccomplishments } = useOnboardingStore();
  const [selected, setSelected] = useState<string[]>(accomplishments);

  const progress = 16 / 29;

  const toggleAccomplishment = (accomplishment: string) => {
    if (selected.includes(accomplishment)) {
      setSelected(selected.filter((a) => a !== accomplishment));
    } else {
      setSelected([...selected, accomplishment]);
    }
  };

  const handleContinue = () => {
    setAccomplishments(selected);
    navigation.navigate('PotentialGraph');
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>What do you want to accomplish?</Text>
        <Text style={styles.subtitle}>Select all that apply</Text>

        <View style={styles.options}>
          {accomplishmentOptions.map((accomplishment) => (
            <SelectionCard
              key={accomplishment}
              title={accomplishment}
              selected={selected.includes(accomplishment)}
              onPress={() => toggleAccomplishment(accomplishment)}
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
