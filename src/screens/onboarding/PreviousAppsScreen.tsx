import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface PreviousAppsScreenProps {
  navigation: any;
}

export const PreviousAppsScreen: React.FC<PreviousAppsScreenProps> = ({
  navigation,
}) => {
  const { triedOtherApps, setTriedOtherApps } = useOnboardingStore();
  const [selected, setSelected] = useState<boolean | null>(triedOtherApps);

  const progress = 6 / 29;

  const handleContinue = () => {
    if (selected !== null) {
      setTriedOtherApps(selected);
      navigation.navigate('LongTermResults');
    }
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>Have you tried other calorie tracking apps?</Text>

        <View style={styles.options}>
          <SelectionCard
            title="No"
            selected={selected === false}
            onPress={() => setSelected(false)}
          />
          <SelectionCard
            title="Yes"
            selected={selected === true}
            onPress={() => setSelected(true)}
          />
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title="Continue"
          onPress={handleContinue}
          disabled={selected === null}
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
