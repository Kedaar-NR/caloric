import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Flame, History } from 'lucide-react-native';

const RolloverCaloriesScreen = ({ navigation }) => {
  const renderCalorieCard = (title, current, total, color, extra = null) => (
    <View style={styles.card}>
      <View style={[styles.cardHeader, { backgroundColor: color + '10' }]}>
        <Flame size={16} color={color} />
        <Text style={[styles.cardTitle, { color }]}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.valueRow}>
          <Text style={styles.currentValue}>{current}</Text>
          <Text style={styles.totalValue}>/{total}</Text>
        </View>
        
        {extra && (
          <View style={styles.extraRow}>
            <History size={14} color="#007AFF" />
            <Text style={styles.extraText}>+{extra}</Text>
          </View>
        )}

        <View style={styles.progressContainer}>
          <Svg height="80" width="80" viewBox="0 0 40 40">
            <Circle
              cx="20"
              cy="20"
              r="18"
              stroke="#F2F2F7"
              strokeWidth="4"
              fill="none"
            />
            <Circle
              cx="20"
              cy="20"
              r="18"
              stroke="#1C1C1E"
              strokeWidth="4"
              strokeDasharray="113"
              strokeDashoffset={113 * (1 - current / total)}
              strokeLinecap="round"
              fill="none"
              transform="rotate(-90 20 20)"
            />
            <View style={styles.innerIcon}>
              <Flame size={12} color="#1C1C1E" />
            </View>
          </Svg>
          <View style={styles.tooltip}>
            <Text style={styles.tooltipTitle}>Cals left</Text>
            <Text style={styles.tooltipValue}>{total - current}{extra ? ` + ${extra}` : ''}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={96} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Rollover extra calories to the next day?</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Rollover up to <Text style={{ color: '#007AFF' }}>200 cals</Text></Text>
          </View>
        </View>

        <View style={styles.graphicContainer}>
          <View style={styles.cardsRow}>
            <View style={{ transform: [{ translateY: -20 }] }}>
              {renderCalorieCard('Yesterday', 350, 500, '#FF3B30')}
            </View>
            <View style={{ transform: [{ translateY: 20 }] }}>
              {renderCalorieCard('Today', 350, 650, '#1C1C1E', 150)}
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonRow}>
            <Button 
              variant="outline" 
              style={styles.halfButton}
              onPress={() => navigation.navigate('Rating')}
            >
              No
            </Button>
            <Button 
              style={styles.halfButton}
              onPress={() => navigation.navigate('Rating')}
            >
              Yes
            </Button>
          </View>
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
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 40,
    marginBottom: spacing.md,
  },
  badge: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  graphicContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.lg,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 20,
    width: 160,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    gap: spacing.xs,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  cardContent: {
    padding: spacing.md,
    alignItems: 'center',
  },
  valueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: spacing.xs,
  },
  currentValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  totalValue: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  extraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 10,
    marginBottom: spacing.md,
    gap: 4,
  },
  extraText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#007AFF',
  },
  progressContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -6,
    marginTop: -6,
  },
  tooltip: {
    position: 'absolute',
    top: -20,
    left: -40,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
    alignItems: 'center',
  },
  tooltipTitle: {
    fontSize: 10,
    color: colors.white,
    fontWeight: '600',
  },
  tooltipValue: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '800',
  },
  footer: {
    marginBottom: spacing.md,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  halfButton: {
    flex: 1,
    backgroundColor: '#1C1C1E',
  },
});

export default RolloverCaloriesScreen;
