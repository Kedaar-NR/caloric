import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Heart, Apple, Flame, Wheat, Beef, Droplets } from 'lucide-react-native';

const ReachGoalsScreen = ({ navigation }) => {
  const tips = [
    {
      id: 1,
      icon: <Heart size={24} color="#FF2D55" />,
      text: 'Use health scores to improve your routine',
    },
    {
      id: 2,
      icon: <Text style={{ fontSize: 24 }}>🥑</Text>,
      text: 'Track your food',
    },
    {
      id: 3,
      icon: (
        <View style={styles.circleIcon}>
          <Flame size={12} color="#1C1C1E" />
        </View>
      ),
      text: 'Follow your daily calorie recommendation',
    },
    {
      id: 4,
      icon: (
        <View style={styles.macrosIcon}>
          <View style={[styles.miniCircle, { backgroundColor: '#E67E22' }]} />
          <View style={[styles.miniCircle, { backgroundColor: '#FF3B30' }]} />
          <View style={[styles.miniCircle, { backgroundColor: '#007AFF' }]} />
        </View>
      ),
      text: 'Balance your carbs, proteins, and fat',
    },
  ];

  const sources = [
    'Basal metabolic rate',
    'Calorie counting - Harvard',
    'International Society of Sports Nutrition',
    'National Institutes of Health',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={100} />
      <ScrollView style={styles.content}>
        <View style={styles.tipsSection}>
          <Text style={styles.title}>How to reach your goals:</Text>
          {tips.map((tip) => (
            <View key={tip.id} style={styles.tipItem}>
              <View style={styles.iconContainer}>{tip.icon}</View>
              <Text style={styles.tipText}>{tip.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.sourcesSection}>
          <Text style={styles.sourcesTitle}>
            Plan based on the following sources, among other peer-reviewed medical studies:
          </Text>
          {sources.map((source, index) => (
            <Text key={index} style={styles.sourceItem}>
              • {source}
            </Text>
          ))}
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
  tipsSection: {
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.xxl,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    marginBottom: spacing.xl,
  },
  iconContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tipText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    lineHeight: 24,
  },
  circleIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  macrosIcon: {
    width: 32,
    height: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  miniCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  sourcesSection: {
    marginTop: spacing.xl,
  },
  sourcesTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    lineHeight: 22,
  },
  sourceItem: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
    marginBottom: spacing.xs,
    textDecorationLine: 'underline',
  },
  footer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
});

export default ReachGoalsScreen;
