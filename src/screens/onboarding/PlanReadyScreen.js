import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { CheckCircle2, Flame, Wheat, Beef, Droplets, Pencil } from 'lucide-react-native';

const PlanReadyScreen = ({ navigation }) => {
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
        <View style={styles.headerSection}>
          <CheckCircle2 size={40} color="#1C1C1E" />
          <Text style={styles.title}>Congratulations your custom plan is ready!</Text>
        </View>

        <View style={styles.goalSection}>
          <Text style={styles.goalTitle}>You should lose:</Text>
          <View style={styles.goalBadge}>
            <Text style={styles.goalText}>Lose 9.6 lbs by June 10</Text>
          </View>
        </View>

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
  headerSection: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.md,
    lineHeight: 40,
  },
  goalSection: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
  },
  goalBadge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: 24,
  },
  goalText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  recommendationHeader: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
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
  footer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
});

export default PlanReadyScreen;
