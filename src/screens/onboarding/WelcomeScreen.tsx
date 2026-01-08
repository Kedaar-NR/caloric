import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, typography, spacing } from '@/theme';
import { Button } from '@/components/common/Button';

interface WelcomeScreenProps {
  navigation: any;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Phone mockup */}
        <View style={styles.phoneMockup}>
          <View style={styles.phoneFrame}>
            <View style={styles.phoneNotch} />
            <View style={styles.phoneScreen}>
              <View style={styles.scanFrame}>
                <View style={[styles.scanCorner, { top: 20, left: 20 }]} />
                <View style={[styles.scanCorner, { top: 20, right: 20 }]} />
                <View style={[styles.scanCorner, { bottom: 20, left: 20 }]} />
                <View style={[styles.scanCorner, { bottom: 20, right: 20 }]} />
              </View>
              <View style={styles.scanButton} />
            </View>
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Calorie tracking{'\n'}made easy</Text>
      </View>

      {/* Bottom section */}
      <View style={styles.bottom}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('GenderSelection')}
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
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneMockup: {
    marginBottom: spacing.xxxl,
  },
  phoneFrame: {
    width: 200,
    height: 400,
    backgroundColor: colors.backgroundDark,
    borderRadius: 30,
    padding: 8,
  },
  phoneNotch: {
    width: 80,
    height: 25,
    backgroundColor: colors.background,
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 8,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#333',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scanFrame: {
    width: '70%',
    height: '50%',
    position: 'relative',
  },
  scanCorner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: colors.textWhite,
    borderWidth: 3,
  },
  scanButton: {
    position: 'absolute',
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.textWhite,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    lineHeight: typography.fontSize.xxl * typography.lineHeight.normal,
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
  homeIndicator: {
    height: spacing.md,
  },
});
