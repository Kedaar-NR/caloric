import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../theme/theme';
import { Plus, Flame, Beef, Wheat, Droplets, Apple } from 'lucide-react-native';
import Svg, { Circle } from 'react-native-svg';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const [selectedDay, setSelectedDay] = useState(13);

  const days = [
    { day: 'Thu', date: 8 },
    { day: 'Fri', date: 9 },
    { day: 'Sat', date: 10 },
    { day: 'Sun', date: 11 },
    { day: 'Mon', date: 12 },
    { day: 'Tue', date: 13 },
    { day: 'Wed', date: 14 },
  ];

  const calories = { consumed: 0, goal: 2223, left: 2223 };
  const macros = [
    { label: 'Protein left', value: '186g', icon: <Beef size={16} color="#FF3B30" />, color: '#FF3B30', bg: '#FF3B3015' },
    { label: 'Carbs left', value: '230g', icon: <Wheat size={16} color="#E67E22" />, color: '#E67E22', bg: '#E67E2215' },
    { label: 'Fat left', value: '61g', icon: <Droplets size={16} color="#007AFF" />, color: '#007AFF', bg: '#007AFF15' },
  ];

  const CircularProgress = ({ size, strokeWidth, progress, color, icon }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDashoffset = circumference - progress * circumference;

    return (
      <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
        <Svg width={size} height={size}>
          <Circle
            stroke="#F2F2F7"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            stroke={color}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </Svg>
        {icon && <View style={styles.centerIcon}>{icon}</View>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Apple size={28} color="#1C1C1E" fill="#1C1C1E" />
            <Text style={styles.logoText}>Cal AI</Text>
          </View>
          <View style={styles.streakContainer}>
            <Flame size={16} color="#E67E22" fill="#E67E22" />
            <Text style={styles.streakText}>0</Text>
          </View>
        </View>

        {/* Calendar Strip */}
        <View style={styles.calendarStrip}>
          {days.map((item, index) => {
            const isSelected = item.date === selectedDay;
            return (
              <TouchableOpacity 
                key={index} 
                style={[styles.dayItem, isSelected && styles.selectedDayItem]}
                onPress={() => setSelectedDay(item.date)}
              >
                <Text style={[styles.dayLabel, isSelected && styles.selectedDayText]}>{item.day}</Text>
                <View style={[styles.dateCircle, isSelected && styles.selectedDateCircle]}>
                   <Text style={[styles.dateLabel, isSelected && styles.selectedDayText]}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Calories Card */}
        <View style={styles.caloriesCard}>
          <View>
            <Text style={styles.caloriesValue}>{calories.left}</Text>
            <Text style={styles.caloriesLabel}>Calories left</Text>
            <View style={styles.caloriesBadge}>
              <Text style={styles.caloriesBadgeIcon}>🍲</Text>
              <Text style={styles.caloriesBadgeText}>+42</Text>
            </View>
          </View>
          <CircularProgress 
            size={120} 
            strokeWidth={12} 
            progress={0.75} 
            color="#1C1C1E" 
            icon={<Flame size={32} color="#1C1C1E" fill="#1C1C1E" />}
          />
        </View>

        {/* Macros Grid */}
        <View style={styles.macrosGrid}>
          {macros.map((macro, index) => (
            <View key={index} style={styles.macroCard}>
              <Text style={styles.macroValue}>{macro.value}</Text>
              <Text style={styles.macroLabel}>{macro.label}</Text>
              <View style={styles.macroProgressContainer}>
                <CircularProgress 
                  size={60} 
                  strokeWidth={6} 
                  progress={0.3} 
                  color={macro.color} 
                  icon={macro.icon}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Recently Uploaded */}
        <Text style={styles.sectionTitle}>Recently uploaded</Text>
        <View style={styles.uploadCard}>
          <View style={styles.uploadContent}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200' }} 
              style={styles.foodImage}
            />
            <View style={styles.uploadLines}>
              <View style={[styles.uploadLine, { width: '80%' }]} />
              <View style={[styles.uploadLine, { width: '50%' }]} />
            </View>
          </View>
          <Text style={styles.uploadText}>Tap + to add your first meal of the day</Text>
        </View>

        {/* Spacer for Bottom Tab Bar */}
        {/* Spacer for Bottom Tab Bar */}
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
    marginTop: spacing.xs,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1C1C1E',
    letterSpacing: -0.5,
  },
  streakContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  streakText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  calendarStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  dayItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    gap: 8,
  },
  selectedDayItem: {
    // No background on the container itself, just the circle
  },
  dayLabel: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '600',
  },
  dateCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderStyle: 'dashed', 
  },
  selectedDateCircle: {
    backgroundColor: '#FFFFFF',
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    borderStyle: 'solid',
  },
  dateLabel: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '700',
  },
  selectedDayText: {
    color: '#1C1C1E',
  },
  caloriesCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 32,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  caloriesValue: {
    fontSize: 56,
    fontWeight: '800',
    color: '#1C1C1E',
    lineHeight: 64,
    letterSpacing: -1,
  },
  caloriesLabel: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
    marginBottom: 12,
  },
  caloriesBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
    gap: 6,
  },
  caloriesBadgeIcon: {
    fontSize: 14,
  },
  caloriesBadgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  centerIcon: {
    position: 'absolute',
  },
  macrosGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  macroCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    paddingVertical: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  macroValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  macroLabel: {
    fontSize: 13,
    color: '#8E8E93',
    fontWeight: '500',
    marginBottom: 16,
  },
  macroProgressContainer: {
    alignSelf: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1C1C1E',
    marginBottom: 16,
  },
  uploadCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 4,
  },
  uploadContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
    justifyContent: 'center',
    gap: 20,
  },
  foodImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  uploadLines: {
    flex: 1,
    gap: 10,
  },
  uploadLine: {
    height: 10,
    backgroundColor: '#F2F2F7',
    borderRadius: 5,
  },
  uploadText: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
  },
});

export default HomeScreen;
