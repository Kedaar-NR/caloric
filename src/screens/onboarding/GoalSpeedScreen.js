import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing, borderRadius } from '../../theme/theme';

const GoalSpeedScreen = ({ navigation }) => {
  const [speed, setSpeed] = useState(1.0);

  const speeds = [
    { id: 'slow', label: 'Slow', value: 0.5, icon: '🦥' },
    { id: 'recommended', label: 'Recommended', value: 1.0, icon: '🐇' },
    { id: 'fast', label: 'Fast', value: 2.0, icon: '🐆' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={65} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>How fast do you want to reach your goal?</Text>
          <Text style={styles.subtitle}>Weight loss speed per week</Text>
        </View>

        <View style={styles.speedValueContainer}>
          <Text style={styles.speedValue}>{speed.toFixed(1)} lbs</Text>
        </View>

        <View style={styles.iconsRow}>
          {speeds.map((s) => (
            <TouchableOpacity 
              key={s.id} 
              onPress={() => setSpeed(s.value)}
              style={styles.iconItem}
            >
              <Text style={styles.iconEmoji}>{s.icon}</Text>
              <Text style={[
                styles.iconLabel, 
                speed === s.value && styles.activeIconLabel,
                s.id === 'recommended' && speed === 1.0 && { color: '#E67E22' }
              ]}>
                {s.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.sliderContainer}>
          <View style={styles.sliderTrack} />
          <View style={[styles.sliderThumb, { left: `${(speed - 0.5) / 1.5 * 100}%` }]} />
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>
            You will reach your goal in <Text style={{ color: '#E67E22' }}>5 months</Text>
          </Text>
          <Text style={styles.infoText}>
            This is the most balanced pace, motivating and ideal for most users.
          </Text>
          <Text style={styles.infoCalorie}>Daily calorie goal: 2,181 cal</Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Obstacles')}>
            Continue
          </Button>
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
  },
  textContainer: {
    marginBottom: spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 30,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    fontWeight: '600',
  },
  speedValueContainer: {
    alignItems: 'center',
    marginVertical: spacing.lg,
  },
  speedValue: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconEmoji: {
    fontSize: 32,
    marginBottom: spacing.xs,
  },
  iconLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D1D1D6',
  },
  activeIconLabel: {
    color: '#1C1C1E',
  },
  sliderContainer: {
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xxl,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#E5E5EA',
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 24,
    height: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1D1D6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: spacing.xl,
    marginTop: spacing.sm,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    fontWeight: '500',
    marginBottom: spacing.sm,
  },
  infoCalorie: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
  },
});

export default GoalSpeedScreen;
