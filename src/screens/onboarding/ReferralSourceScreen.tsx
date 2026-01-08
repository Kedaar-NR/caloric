import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { SelectionCard } from '@/components/common/SelectionCard';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface ReferralSourceScreenProps {
  navigation: any;
}

const sources = [
  'App Store',
  'TikTok',
  'YouTube',
  'TV',
  'X',
  'Instagram',
  'Google',
  'Facebook',
];

export const ReferralSourceScreen: React.FC<ReferralSourceScreenProps> = ({
  navigation,
}) => {
  const { referralSource, setReferralSource } = useOnboardingStore();
  const [selected, setSelected] = useState<string | null>(referralSource);

  const progress = 5 / 29;

  const handleSelect = (source: string) => {
    setSelected(source);
    setReferralSource(source);
    // Auto-advance after selection
    setTimeout(() => {
      navigation.navigate('PreviousApps');
    }, 300);
  };

  const handleContinue = () => {
    if (selected) {
      setReferralSource(selected);
      navigation.navigate('PreviousApps');
    }
  };

  return (
    <OnboardingContainer
      progress={progress}
      onBack={() => navigation.goBack()}
      scrollable
    >
      <View style={styles.content}>
        <Text style={styles.title}>Where did you hear about us?</Text>

        <View style={styles.options}>
          {sources.map((source) => (
            <SelectionCard
              key={source}
              title={source}
              selected={selected === source}
              onPress={() => handleSelect(source)}
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
    marginBottom: spacing.xl,
  },
  options: {
    marginTop: spacing.md,
  },
  bottom: {
    paddingBottom: spacing.lg,
    marginTop: spacing.xl,
  },
});
