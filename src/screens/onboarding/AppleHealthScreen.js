import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Apple, Heart, Check } from 'lucide-react-native';

const AppleHealthScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={92} />
      <View style={styles.content}>
        <View style={styles.graphicContainer}>
          <View style={styles.circle}>
            <View style={styles.appleIcon}>
              <Apple size={40} color="white" />
            </View>
            <View style={styles.heartIcon}>
              <Heart size={40} color="#FF2D55" />
            </View>
            <View style={styles.checkIcon}>
              <Check size={16} color="white" strokeWidth={3} />
            </View>
            <View style={[styles.label, { top: 40, left: -20 }]}>
              <Text style={styles.labelText}>Walking</Text>
            </View>
            <View style={[styles.label, { top: 80, left: -40 }]}>
              <Text style={styles.labelText}>Running</Text>
            </View>
            <View style={[styles.label, { top: 110, right: -20 }]}>
              <Text style={styles.labelText}>Yoga</Text>
            </View>
            <View style={[styles.label, { top: 150, right: -40 }]}>
              <Text style={styles.labelText}>Sleep</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Connect to Apple Health</Text>
          <Text style={styles.subtitle}>
            Sync your daily activity between Caloric and the Health app to have the most thorough data.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('MyFitnessPal')}>
            Continue
          </Button>
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={() => navigation.navigate('MyFitnessPal')}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    alignItems: 'center',
    paddingBottom: spacing.xl,
  },
  graphicContainer: {
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },
  circle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  appleIcon: {
    position: 'absolute',
    top: 40,
    right: 40,
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  checkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -12,
    marginTop: -12,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
    width: '100%',
  },
  skipButton: {
    marginTop: spacing.md,
    alignItems: 'center',
  },
  skipText: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
  },
});

export default AppleHealthScreen;
