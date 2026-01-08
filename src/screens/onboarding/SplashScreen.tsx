import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, typography, spacing } from '@/theme';
import { Button } from '@/components/common/Button';

interface SplashScreenProps {
  navigation: any;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoIcon}>
            <Text style={styles.logoEmoji}>🍎</Text>
          </View>
          <Text style={styles.logoText}>Caloric</Text>
        </View>

        {/* Tagline */}
        <Text style={styles.tagline}>Calorie tracking{'\n'}made easy</Text>
      </View>

      {/* Bottom section */}
      <View style={styles.bottom}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Welcome')}
        />
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>
            Already have an account? <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Home indicator space */}
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },
  logoIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.backgroundGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  logoEmoji: {
    fontSize: 48,
  },
  logoText: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
  },
  tagline: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.medium,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: typography.fontSize.xl * typography.lineHeight.relaxed,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  signInButton: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  signInText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  signInLink: {
    color: colors.text,
    fontWeight: typography.fontWeight.semibold,
  },
  homeIndicator: {
    height: spacing.md,
  },
});
