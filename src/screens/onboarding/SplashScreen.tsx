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
        <Text style={styles.tagline}>Calorie tracking made easy</Text>
      </View>

      {/* Bottom section */}
      <View style={styles.bottom}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Welcome')}
        />
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('SignIn')}
          variant="outline"
          style={styles.signInButtonStyle}
        />
      </View>

      {/* Home indicator space */}
      <View style={styles.homeIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
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
    width: 120,
    height: 120,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logoEmoji: {
    fontSize: 72,
  },
  logoText: {
    fontSize: 48,
    fontWeight: typography.fontWeight.bold,
    color: '#000000',
  },
  tagline: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: '#666666',
    textAlign: 'center',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  signInButtonStyle: {
    marginTop: spacing.md,
  },
  homeIndicator: {
    height: spacing.md,
  },
});
