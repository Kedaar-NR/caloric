import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Activity, Flame, Check } from 'lucide-react-native';

const MyFitnessPalScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={93} />
      <View style={styles.content}>
        <View style={styles.graphicContainer}>
          <View style={styles.circle}>
            <View style={styles.brandBadge}>
              <Text style={styles.brandTitle}>MyFitnessPal</Text>
              <Text style={styles.brandSubtitle}>Import ready</Text>
            </View>

            <View style={styles.checkIcon}>
              <Check size={16} color="white" strokeWidth={3} />
            </View>

            <View style={[styles.label, { top: 36, left: -28 }]}>
              <Text style={styles.labelTitle}>Streak</Text>
              <Text style={styles.labelValue}>24 days</Text>
            </View>
            <View style={[styles.label, { top: 92, right: -38 }]}>
              <View style={styles.iconRow}>
                <Flame size={14} color="#FF3B30" />
                <Text style={styles.labelValue}>Meals</Text>
              </View>
              <Text style={styles.labelHint}>synced</Text>
            </View>
            <View style={[styles.label, { top: 144, left: -24 }]}>
              <View style={styles.iconRow}>
                <Activity size={14} color="#007AFF" />
                <Text style={styles.labelValue}>Workouts</Text>
              </View>
              <Text style={styles.labelHint}>tracked</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Connect to MyFitnessPal</Text>
          <Text style={styles.subtitle}>
            Import streaks and data to keep Caloric aligned with your daily logging.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('BurnedCalories')}>
            Continue
          </Button>
          <TouchableOpacity 
            style={styles.skipButton}
            onPress={() => navigation.navigate('BurnedCalories')}
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
  brandBadge: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  brandSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
    marginTop: 2,
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
    alignItems: 'center',
  },
  labelTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  labelValue: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.text,
  },
  labelHint: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 32,
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

export default MyFitnessPalScreen;

