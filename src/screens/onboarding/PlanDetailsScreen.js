import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Flame, Wheat, Beef, Droplets, Pencil, Heart } from 'lucide-react-native';

const PlanDetailsScreen = ({ navigation }) => {
  const renderMacroCard = (label, value, unit, color, icon) => (
    <View style={styles.macroCard}>
      <View style={styles.macroHeader}>
        <View style={[styles.macroIcon, { backgroundColor: color + '10' }]}>
          {icon}
        </View>
        <Text style={styles.macroLabel}>{label}</Text>
      </View>
      <View style={styles.macroContent}>
        <View style={styles.progressContainer}>
          <Svg height="80" width="80" viewBox="0 0 40 40">
            <Circle
              cx="20"
              cy="20"
              r="18"
              stroke="#F2F2F7"
              strokeWidth="3"
              fill="none"
            />
            <Circle
              cx="20"
              cy="20"
              r="18"
              stroke={color}
              strokeWidth="3"
              strokeDasharray="113"
              strokeDashoffset="28"
              strokeLinecap="round"
              fill="none"
              transform="rotate(-90 20 20)"
            />
          </Svg>
          <View style={styles.macroValueContainer}>
            <Text style={styles.macroValue}>{value}</Text>
            {unit && <Text style={styles.macroUnit}>{unit}</Text>}
          </View>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Pencil size={14} color="#1C1C1E" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={100} />
      <ScrollView style={styles.content}>
        <View style={styles.recommendationHeader}>
          <Text style={styles.sectionTitle}>Daily recommendation</Text>
          <Text style={styles.sectionSubtitle}>You can edit this anytime</Text>
        </View>

        <View style={styles.macrosGrid}>
          <View style={styles.macroRow}>
            {renderMacroCard('Calories', '2181', null, '#1C1C1E', <Flame size={14} color="#1C1C1E" />)}
            {renderMacroCard('Carbs', '226', 'g', '#E67E22', <Wheat size={14} color="#E67E22" />)}
          </View>
          <View style={styles.macroRow}>
            {renderMacroCard('Protein', '182', 'g', '#FF3B30', <Beef size={14} color="#FF3B30" />)}
            {renderMacroCard('Fats', '60', 'g', '#007AFF', <Droplets size={14} color="#007AFF" />)}
          </View>
        </View>

        <View style={styles.healthScoreCard}>
          <View style={styles.healthScoreHeader}>
            <Heart size={32} color="#FF2D55" />
            <View style={styles.healthScoreInfo}>
              <Text style={styles.healthScoreLabel}>Health Score</Text>
              <Text style={styles.healthScoreValue}>7/10</Text>
            </View>
          </View>
          <View style={styles.healthScoreProgressBg}>
            <View style={[styles.healthScoreProgressFill, { width: '70%' }]} />
          </View>
        </View>

        <View style={styles.howToSection}>
          <Text style={styles.howToTitle}>How to reach your goals:</Text>
          <View style={styles.howToItem}>
            <Heart size={24} color="#FF2D55" />
            <Text style={styles.howToText}>Use health scores to improve your routine</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('SaveProgress')}>
          Let's get started!
        </Button>
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
  recommendationHeader: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  macrosGrid: {
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  macroRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  macroCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  macroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  macroIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  macroLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  macroContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  macroValueContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  macroValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  macroUnit: {
    fontSize: 10,
    fontWeight: '700',
    color: '#1C1C1E',
    marginTop: -2,
  },
  editButton: {
    padding: 4,
  },
  healthScoreCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: '#F2F2F7',
    marginBottom: spacing.xxl,
  },
  healthScoreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  healthScoreInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  healthScoreLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  healthScoreValue: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  healthScoreProgressBg: {
    height: 8,
    backgroundColor: '#F2F2F7',
    borderRadius: 4,
    overflow: 'hidden',
  },
  healthScoreProgressFill: {
    height: '100%',
    backgroundColor: '#34C759',
  },
  howToSection: {
    marginTop: spacing.xl,
  },
  howToTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xl,
  },
  howToItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  howToText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
  },
  footer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
});

export default PlanDetailsScreen;
