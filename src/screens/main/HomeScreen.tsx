import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { darkColors } from '@/theme/darkColors';
import { typography, spacing, borderRadius } from '@/theme';

interface HomeScreenProps {
  navigation: any;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<'today' | 'yesterday'>('today');

  // Mock data
  const caloriesLeft = 2500;
  const totalCalories = 2500;
  const streak = 15;

  const macros = {
    protein: { current: 45, target: 150, label: 'Protein over', color: darkColors.protein },
    carbs: { current: 89, target: 200, label: 'Carbs left', color: darkColors.carbs },
    fats: { current: 48, target: 70, label: 'Fats left', color: darkColors.fats },
  };

  const recentFoods = [
    {
      id: 1,
      name: 'Apple Salmon salad...',
      time: '9:00am',
      calories: 500,
      protein: 78,
      carbs: 78,
      fats: 78,
      image: '🥗',
    },
    {
      id: 2,
      name: 'Apple Salmon salad...',
      time: '9:00am',
      calories: 500,
      protein: 78,
      carbs: 78,
      fats: 78,
      image: '🍎',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoIcon}>🍎</Text>
            <Text style={styles.logoText}>Caloric</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.icon}>🖼️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.streakBadge}>
              <Text style={styles.streakIcon}>🔥</Text>
              <Text style={styles.streakText}>{streak}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tab Bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'today' && styles.activeTab]}
            onPress={() => setActiveTab('today')}
          >
            <Text style={[styles.tabText, activeTab === 'today' && styles.activeTabText]}>
              Today
            </Text>
            {activeTab === 'today' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'yesterday' && styles.activeTab]}
            onPress={() => setActiveTab('yesterday')}
          >
            <Text style={[styles.tabText, activeTab === 'yesterday' && styles.activeTabText]}>
              Yesterday
            </Text>
            {activeTab === 'yesterday' && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        </View>

        {/* Main Calorie Card */}
        <View style={styles.calorieCard}>
          <View style={styles.calorieContent}>
            <View style={styles.calorieInfo}>
              <Text style={styles.calorieNumber}>{caloriesLeft}</Text>
              <Text style={styles.calorieLabel}>Calories left</Text>
            </View>
            <View style={styles.calorieCircle}>
              <View style={styles.calorieProgress}>
                <Text style={styles.calorieIcon}>🔥</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Macro Cards */}
        <View style={styles.macroGrid}>
          {Object.entries(macros).map(([key, macro]) => (
            <View key={key} style={styles.macroCard}>
              <Text style={styles.macroValue}>{macro.current}g</Text>
              <Text style={styles.macroLabel}>{macro.label}</Text>
              <View style={styles.macroCircle}>
                <View style={[styles.macroProgress, { borderColor: macro.color }]}>
                  <Text style={styles.macroIcon}>
                    {key === 'protein' ? '⚡' : key === 'carbs' ? '🌾' : '💧'}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Recently Uploaded */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently uploaded</Text>

          {recentFoods.map((food) => (
            <View key={food.id} style={styles.foodItem}>
              <View style={styles.foodImage}>
                <Text style={styles.foodEmoji}>{food.image}</Text>
              </View>
              <View style={styles.foodInfo}>
                <View style={styles.foodHeader}>
                  <Text style={styles.foodName}>{food.name}</Text>
                  <Text style={styles.foodTime}>{food.time}</Text>
                </View>
                <View style={styles.foodCalories}>
                  <Text style={styles.calorieIcon}>🔥</Text>
                  <Text style={styles.foodCalorieText}>{food.calories} kcal</Text>
                </View>
                <View style={styles.foodMacros}>
                  <View style={styles.macroItem}>
                    <Text style={styles.macroItemIcon}>⚡</Text>
                    <Text style={styles.macroItemText}>{food.protein}g</Text>
                  </View>
                  <View style={styles.macroItem}>
                    <Text style={styles.macroItemIcon}>🌾</Text>
                    <Text style={styles.macroItemText}>{food.carbs}g</Text>
                  </View>
                  <View style={styles.macroItem}>
                    <Text style={styles.macroItemIcon}>💧</Text>
                    <Text style={styles.macroItemText}>{food.fats}g</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkColors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 32,
    marginRight: spacing.xs,
  },
  logoText: {
    fontSize: 28,
    fontWeight: typography.fontWeight.bold,
    color: darkColors.text,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: darkColors.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: darkColors.card,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  streakIcon: {
    fontSize: 20,
    marginRight: spacing.xs,
  },
  streakText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: darkColors.text,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  tab: {
    marginRight: spacing.lg,
    paddingVertical: spacing.sm,
  },
  activeTab: {},
  tabText: {
    fontSize: typography.fontSize.lg,
    color: darkColors.textSecondary,
    fontWeight: typography.fontWeight.medium,
  },
  activeTabText: {
    color: darkColors.text,
    fontWeight: typography.fontWeight.bold,
  },
  tabIndicator: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: darkColors.text,
    marginTop: spacing.xs,
  },
  calorieCard: {
    backgroundColor: darkColors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginHorizontal: spacing.lg,
    marginBottom: spacing.lg,
  },
  calorieContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calorieInfo: {},
  calorieNumber: {
    fontSize: 64,
    fontWeight: typography.fontWeight.bold,
    color: darkColors.text,
  },
  calorieLabel: {
    fontSize: typography.fontSize.lg,
    color: darkColors.textSecondary,
    marginTop: spacing.xs,
  },
  calorieCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: darkColors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calorieProgress: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: darkColors.card,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 8,
    borderColor: darkColors.text,
    borderLeftColor: darkColors.backgroundSecondary,
    borderBottomColor: darkColors.backgroundSecondary,
  },
  calorieIcon: {
    fontSize: 32,
  },
  macroGrid: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  macroCard: {
    flex: 1,
    backgroundColor: darkColors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
  },
  macroValue: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: darkColors.text,
    marginBottom: spacing.xs,
  },
  macroLabel: {
    fontSize: typography.fontSize.sm,
    color: darkColors.textSecondary,
    marginBottom: spacing.md,
  },
  macroCircle: {
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  macroProgress: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: darkColors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
  },
  macroIcon: {
    fontSize: 24,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: darkColors.text,
    marginBottom: spacing.lg,
  },
  foodItem: {
    flexDirection: 'row',
    backgroundColor: darkColors.card,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  foodImage: {
    width: 80,
    height: 80,
    borderRadius: borderRadius.md,
    backgroundColor: darkColors.backgroundSecondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  foodEmoji: {
    fontSize: 40,
  },
  foodInfo: {
    flex: 1,
  },
  foodHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  foodName: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
    color: darkColors.text,
  },
  foodTime: {
    fontSize: typography.fontSize.sm,
    color: darkColors.textSecondary,
  },
  foodCalories: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  foodCalorieText: {
    fontSize: typography.fontSize.sm,
    color: darkColors.textSecondary,
    marginLeft: spacing.xs,
  },
  foodMacros: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  macroItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  macroItemIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  macroItemText: {
    fontSize: typography.fontSize.sm,
    color: darkColors.textSecondary,
  },
  bottomSpacer: {
    height: 100,
  },
  fab: {
    position: 'absolute',
    right: spacing.lg,
    bottom: 90,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: darkColors.button,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 32,
    color: darkColors.buttonText,
    fontWeight: typography.fontWeight.bold,
  },
});
