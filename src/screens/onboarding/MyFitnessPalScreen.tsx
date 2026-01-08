import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface MyFitnessPalScreenProps {
  navigation: any;
}

export const MyFitnessPalScreen: React.FC<MyFitnessPalScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isImporting, setIsImporting] = useState(false);

  const progress = 19.5 / 29;

  const handleImport = async () => {
    if (email && password) {
      setIsImporting(true);
      // Simulate import process
      setTimeout(() => {
        setIsImporting(false);
        navigation.navigate('AppleHealth');
      }, 2000);
    }
  };

  const handleSkip = () => {
    navigation.navigate('AppleHealth');
  };

  return (
    <OnboardingContainer
      progress={progress}
      onBack={() => navigation.goBack()}
      scrollable
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.emoji}>📊</Text>
          <Text style={styles.title}>Import from MyFitnessPal</Text>
          <Text style={styles.subtitle}>
            Bring your food diary and make the transition seamless
          </Text>
        </View>

        <View style={styles.benefitsBox}>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✅</Text>
            <Text style={styles.benefitText}>Import your food history</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✅</Text>
            <Text style={styles.benefitText}>Sync saved meals and recipes</Text>
          </View>
          <View style={styles.benefitRow}>
            <Text style={styles.benefitIcon}>✅</Text>
            <Text style={styles.benefitText}>Continue your streak</Text>
          </View>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>MyFitnessPal Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.note}>
            🔒 Your credentials are encrypted and never stored
          </Text>
        </View>
      </View>

      <View style={styles.bottom}>
        <Button
          title={isImporting ? 'Importing...' : 'Import Data'}
          onPress={handleImport}
          disabled={!email || !password || isImporting}
          loading={isImporting}
        />
        <Button
          title="Skip for now"
          onPress={handleSkip}
          variant="outline"
          style={styles.skipButton}
        />
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  emoji: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
  },
  benefitsBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  benefitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  benefitIcon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  benefitText: {
    fontSize: typography.fontSize.md,
    color: colors.text,
    flex: 1,
  },
  form: {
    marginBottom: spacing.xl,
  },
  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  input: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    fontSize: typography.fontSize.md,
    color: colors.text,
    marginBottom: spacing.md,
  },
  note: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  skipButton: {
    marginTop: spacing.md,
  },
});
