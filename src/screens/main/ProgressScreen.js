import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../theme/theme';
import { Flame, Medal, Plus, ChevronRight, Info } from 'lucide-react-native';
import Svg, { Line, Path, Rect } from 'react-native-svg';

const { width } = Dimensions.get('window');

const ProgressScreen = () => {
  const [weightRange, setWeightRange] = useState('90D');
  const [energyRange, setEnergyRange] = useState('This wk');

  const renderWeightChart = () => (
    <View style={styles.chartContainer}>
      <View style={styles.chartYAxis}>
        <Text style={styles.axisLabel}>198</Text>
        <Text style={styles.axisLabel}>196</Text>
        <Text style={styles.axisLabel}>194</Text>
        <Text style={styles.axisLabel}>192</Text>
        <Text style={styles.axisLabel}>190</Text>
      </View>
      <View style={styles.chartContent}>
        {/* Grid Lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <View key={i} style={[styles.gridLine, { top: i * 40 }]} />
        ))}
        {/* Weight Line (Simplified representation) */}
        <View style={{ position: 'absolute', top: 80, left: 0, right: 0, height: 2, backgroundColor: '#1C1C1E' }} />
      </View>
    </View>
  );

  const renderEnergyChart = () => (
    <View style={styles.energyChartContainer}>
      <View style={styles.energyYAxis}>
        <Text style={styles.axisLabel}>150</Text>
        <Text style={styles.axisLabel}>100</Text>
        <Text style={styles.axisLabel}>50</Text>
        <Text style={styles.axisLabel}>0</Text>
      </View>
      <View style={styles.energyChartContent}>
        {/* Grid Lines */}
        {[0, 1, 2, 3].map((i) => (
          <View key={i} style={[styles.dashedGridLine, { top: i * 50 }]} />
        ))}
        
        {/* Bars */}
        <View style={styles.barsContainer}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <View key={index} style={styles.barGroup}>
              {index < 3 && ( // Demo data for first 3 days
                <View style={[styles.bar, { height: [140, 110, 40][index], backgroundColor: '#C69C6D' }]} />
              )}
              <Text style={styles.barLabel}>{day}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Progress</Text>

        {/* Top Cards */}
        <View style={styles.topCardsRow}>
          <View style={styles.statCard}>
            <View style={styles.iconContainer}>
              <Flame size={32} color="#E67E22" fill="#E67E22" />
              <View style={styles.streakBadge}>
                <Text style={styles.streakBadgeText}>0</Text>
              </View>
            </View>
            <Text style={styles.statLabel}>Day Streak</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.iconContainer}>
              <Medal size={32} color="#5856D6" fill="#5856D6" />
              <View style={styles.streakBadge}>
                <Text style={styles.streakBadgeText}>0</Text>
              </View>
            </View>
            <Text style={styles.statLabel}>Badges Earned</Text>
          </View>
        </View>

        {/* Weight Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Current Weight</Text>
            <View style={styles.nextWeighIn}>
              <Text style={styles.nextWeighInText}>Next weigh-in: 7d</Text>
            </View>
          </View>
          <Text style={styles.mainValue}>194 lbs</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '0%' }]} />
          </View>
          <View style={styles.weightStatsRow}>
            <Text style={styles.weightStat}>Start: <Text style={styles.weightStatValue}>194 lbs</Text></Text>
            <Text style={styles.weightStat}>Goal: <Text style={styles.weightStatValue}>184.4 lbs</Text></Text>
          </View>
          <Text style={styles.goalDate}>At your goal by <Text style={styles.goalDateValue}>Jun 10, 2026.</Text></Text>
        </View>

        {/* Weight Progress Chart */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Weight Progress</Text>
            <View style={styles.goalBadge}>
              <Text style={styles.goalBadgeText}>🏳️ 0% of goal</Text>
            </View>
          </View>
          
          {renderWeightChart()}

          <View style={styles.rangeSelector}>
            {['90D', '6M', '1Y', 'ALL'].map((range) => (
              <TouchableOpacity 
                key={range} 
                style={[styles.rangeButton, weightRange === range && styles.rangeButtonActive]}
                onPress={() => setWeightRange(range)}
              >
                <Text style={[styles.rangeText, weightRange === range && styles.rangeTextActive]}>{range}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Weight Changes List */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weight Changes</Text>
          <View style={styles.changesList}>
            {[
              { label: '3 day', change: '0.0 lbs', trend: 'No change' },
              { label: '7 day', change: '0.0 lbs', trend: 'No change' },
              { label: '14 day', change: '0.0 lbs', trend: 'No change' },
              { label: '30 day', change: '0.0 lbs', trend: 'No change' },
              { label: '90 day', change: '0.0 lbs', trend: 'No change' },
              { label: 'All Time', change: '0.0 lbs', trend: 'No change' },
            ].map((item, index) => (
              <View key={index} style={styles.changeRow}>
                <Text style={styles.changeLabel}>{item.label}</Text>
                <View style={styles.sparkline} />
                <Text style={styles.changeValue}>{item.change}</Text>
                <View style={styles.trendContainer}>
                  <Text style={styles.trendIcon}>→</Text>
                  <Text style={styles.trendText}>{item.trend}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Progress Photos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Progress Photos</Text>
          <View style={styles.photoUploadContainer}>
            <View style={styles.photoPlaceholder}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=200' }} 
                style={styles.placeholderImage} 
              />
            </View>
            <View style={styles.uploadInfo}>
              <Text style={styles.uploadTitle}>Want to add a photo to track your progress?</Text>
              <TouchableOpacity style={styles.uploadButton}>
                <Plus size={16} color="#1C1C1E" />
                <Text style={styles.uploadButtonText}>Upload a Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Daily Average Calories */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Average Calories</Text>
          <View style={styles.emptyStateContainer}>
            <View style={styles.emptyIconCircle}>
              <View style={styles.barIcon} />
            </View>
            <Text style={styles.emptyStateTitle}>No data to show</Text>
            <Text style={styles.emptyStateSubtitle}>This will update as you log more food.</Text>
          </View>
          <View style={styles.rangeSelector}>
            {['This wk', 'Last wk', '2 wk ago', '3 wk ago'].map((range) => (
              <TouchableOpacity 
                key={range} 
                style={[styles.rangeButton, range === 'This wk' && styles.rangeButtonActive]}
              >
                <Text style={[styles.rangeText, range === 'This wk' && styles.rangeTextActive]}>{range}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Weekly Energy */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Weekly Energy</Text>
          <View style={styles.energyStatsRow}>
            <View>
              <Text style={styles.energyStatLabel}>Burned</Text>
              <Text style={styles.energyStatValue}>290 <Text style={styles.unit}>cal</Text></Text>
            </View>
            <View>
              <Text style={styles.energyStatLabel}>Consumed</Text>
              <Text style={styles.energyStatValue}>0 <Text style={styles.unit}>cal</Text></Text>
            </View>
            <View>
              <Text style={styles.energyStatLabel}>Energy</Text>
              <Text style={styles.energyStatValue}>-290 <Text style={styles.unit}>cal</Text></Text>
            </View>
          </View>
          
          {renderEnergyChart()}

          <View style={styles.legendContainer}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#C69C6D' }]} />
              <Text style={styles.legendText}>Burned</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#34C759' }]} />
              <Text style={styles.legendText}>Consumed</Text>
            </View>
          </View>

          <View style={styles.rangeSelector}>
            {['This wk', 'Last wk', '2 wk ago', '3 wk ago'].map((range) => (
              <TouchableOpacity 
                key={range} 
                style={[styles.rangeButton, energyRange === range && styles.rangeButtonActive]}
                onPress={() => setEnergyRange(range)}
              >
                <Text style={[styles.rangeText, energyRange === range && styles.rangeTextActive]}>{range}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Expenditure Changes */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Expenditure Changes</Text>
          <View style={styles.changesList}>
            {[
              { label: '3 day', change: '17.7 cal', trend: 'Increase', color: '#C69C6D' },
              { label: '7 day', change: '188.0 cal', trend: 'Increase', color: '#C69C6D' },
              { label: '14 day', change: '62.1 cal', trend: 'Increase', color: '#C69C6D' },
              { label: '30 day', change: '30.8 cal', trend: 'Increase', color: '#C69C6D' },
              { label: '90 day', change: '-189.5 cal', trend: 'Decrease', color: '#C69C6D' },
            ].map((item, index) => (
              <View key={index} style={styles.changeRow}>
                <Text style={styles.changeLabel}>{item.label}</Text>
                <View style={styles.sparklineCurve}>
                   {/* Simplified sparkline */}
                   <View style={[styles.curveLine, { borderColor: item.color }]} />
                </View>
                <Text style={styles.changeValue}>{item.change}</Text>
                <View style={styles.trendContainer}>
                  <Text style={[styles.trendIcon, { color: item.color }]}>↗</Text>
                  <Text style={styles.trendText}>{item.trend}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* BMI Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Your BMI</Text>
            <Info size={20} color="#8E8E93" />
          </View>
          <View style={styles.bmiValueRow}>
            <Text style={styles.bmiValue}>27.8</Text>
            <Text style={styles.bmiLabel}>Your weight is <Text style={styles.bmiStatus}>Overweight</Text></Text>
          </View>
          
          <View style={styles.bmiGauge}>
            <View style={[styles.bmiSegment, { backgroundColor: '#5856D6', flex: 1, borderTopLeftRadius: 4, borderBottomLeftRadius: 4 }]} />
            <View style={[styles.bmiSegment, { backgroundColor: '#34C759', flex: 2 }]} />
            <View style={[styles.bmiSegment, { backgroundColor: '#FFCC00', flex: 2 }]} />
            <View style={[styles.bmiSegment, { backgroundColor: '#FF3B30', flex: 2, borderTopRightRadius: 4, borderBottomRightRadius: 4 }]} />
            <View style={[styles.bmiIndicator, { left: '55%' }]} />
          </View>

          <View style={styles.bmiLegend}>
            <View style={styles.bmiLegendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#5856D6' }]} />
              <Text style={styles.bmiLegendText}>Underweight {'\n'}&lt;18.5</Text>
            </View>
            <View style={styles.bmiLegendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#34C759' }]} />
              <Text style={styles.bmiLegendText}>Healthy {'\n'}18.5-24.9</Text>
            </View>
            <View style={styles.bmiLegendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#FFCC00' }]} />
              <Text style={styles.bmiLegendText}>Overweight {'\n'}25.0-29.9</Text>
            </View>
            <View style={styles.bmiLegendItem}>
              <View style={[styles.legendDot, { backgroundColor: '#FF3B30' }]} />
              <Text style={styles.bmiLegendText}>Obese {'\n'}&gt;30.0</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    padding: spacing.lg,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1C1C1E',
    marginBottom: spacing.lg,
    marginTop: spacing.xs,
  },
  topCardsRow: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    marginBottom: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakBadge: {
    position: 'absolute',
    bottom: -4,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E67E22', // Or matching icon color
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 1,
  },
  streakBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  nextWeighIn: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  nextWeighInText: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '600',
  },
  mainValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1C1C1E',
    marginBottom: spacing.md,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#F2F2F7',
    borderRadius: 3,
    marginBottom: spacing.md,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1C1C1E',
    borderRadius: 3,
  },
  weightStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  weightStat: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  weightStatValue: {
    color: '#1C1C1E',
    fontWeight: '700',
  },
  goalDate: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  goalDateValue: {
    color: '#1C1C1E',
    fontWeight: '700',
  },
  goalBadge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  goalBadgeText: {
    fontSize: 12,
    color: '#1C1C1E',
    fontWeight: '600',
  },
  chartContainer: {
    flexDirection: 'row',
    height: 200,
    marginBottom: spacing.lg,
  },
  chartYAxis: {
    justifyContent: 'space-between',
    paddingRight: spacing.md,
    paddingVertical: 10,
  },
  axisLabel: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
  },
  chartContent: {
    flex: 1,
    position: 'relative',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#F2F2F7',
  },
  rangeSelector: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    padding: 4,
  },
  rangeButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 12,
  },
  rangeButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  rangeText: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '600',
  },
  rangeTextActive: {
    color: '#1C1C1E',
  },
  changesList: {
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  changeLabel: {
    width: 60,
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  sparkline: {
    width: 40,
    height: 20,
    backgroundColor: '#E1E9FF', // Placeholder blue
    borderRadius: 4,
  },
  sparklineCurve: {
    width: 40,
    height: 20,
    justifyContent: 'center',
  },
  curveLine: {
    width: '100%',
    height: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderTopRightRadius: 10,
  },
  changeValue: {
    width: 80,
    fontSize: 14,
    color: '#1C1C1E',
    fontWeight: '700',
    textAlign: 'right',
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 90,
    justifyContent: 'flex-end',
    gap: 4,
  },
  trendIcon: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '700',
  },
  trendText: {
    fontSize: 14,
    color: '#8E8E93',
    fontWeight: '500',
  },
  photoUploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.sm,
  },
  photoPlaceholder: {
    width: 60,
    height: 80,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#F2F2F7',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    opacity: 0.5,
  },
  uploadInfo: {
    flex: 1,
  },
  uploadTitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: spacing.sm,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
    gap: 6,
  },
  uploadButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  emptyStateContainer: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
    marginBottom: spacing.lg,
  },
  emptyIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  barIcon: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#8E8E93',
    borderRadius: 4,
  },
  emptyStateTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
  },
  energyStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  energyStatLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
  },
  energyStatValue: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  unit: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8E8E93',
  },
  energyChartContainer: {
    flexDirection: 'row',
    height: 180,
    marginBottom: spacing.lg,
  },
  energyYAxis: {
    justifyContent: 'space-between',
    paddingRight: spacing.md,
    paddingVertical: 10,
  },
  energyChartContent: {
    flex: 1,
    position: 'relative',
  },
  dashedGridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#F2F2F7',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#F2F2F7',
  },
  barsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  barGroup: {
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: 6,
    borderRadius: 3,
  },
  barLabel: {
    fontSize: 10,
    color: '#8E8E93',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.lg,
    marginBottom: spacing.lg,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#8E8E93',
    fontWeight: '500',
  },
  bmiValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  bmiValue: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  bmiLabel: {
    fontSize: 14,
    color: '#8E8E93',
  },
  bmiStatus: {
    color: '#FFCC00', // Overweight color
    fontWeight: '700',
  },
  bmiGauge: {
    height: 8,
    flexDirection: 'row',
    marginBottom: spacing.lg,
    position: 'relative',
  },
  bmiSegment: {
    height: '100%',
    marginHorizontal: 1,
  },
  bmiIndicator: {
    position: 'absolute',
    top: -4,
    width: 2,
    height: 16,
    backgroundColor: '#1C1C1E',
  },
  bmiLegend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
  },
  bmiLegendItem: {
    flexDirection: 'row',
    gap: 6,
    width: '45%',
  },
  bmiLegendText: {
    fontSize: 10,
    color: '#8E8E93',
    lineHeight: 14,
  },
});

export default ProgressScreen;
