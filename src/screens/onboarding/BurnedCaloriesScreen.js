import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Flame, Activity } from 'lucide-react-native';

const BurnedCaloriesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={94} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Add calories burned back to your daily goal?</Text>
        </View>

        <View style={styles.graphicContainer}>
          <View style={styles.imagePlaceholder}>
            {/* Using a placeholder for the runner image */}
            <View style={styles.goalCard}>
              <Text style={styles.goalTitle}>Today's Goal</Text>
              <View style={styles.goalRow}>
                <Flame size={24} color="#1C1C1E" />
                <Text style={styles.goalValue}>500 Cals</Text>
              </View>
              <View style={styles.activityRow}>
                <View style={styles.activityIcon}>
                  <Activity size={16} color="white" />
                </View>
                <View>
                  <Text style={styles.activityLabel}>Running</Text>
                  <View style={styles.pill}>
                    <Text style={styles.pillText}>+100 cals</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.buttonRow}>
            <Button 
              variant="outline" 
              style={styles.halfButton}
              onPress={() => navigation.navigate('RolloverCalories')}
            >
              No
            </Button>
            <Button 
              style={styles.halfButton}
              onPress={() => navigation.navigate('RolloverCalories')}
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
    paddingBottom: spacing.xl,
  },
  textContainer: {
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 40,
  },
  graphicContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    height: 300,
    backgroundColor: '#F2F2F7',
    borderRadius: 24,
    justifyContent: 'flex-end',
    padding: spacing.lg,
    overflow: 'hidden',
  },
  goalCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.lg,
    width: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  goalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
    gap: spacing.xs,
  },
  goalValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#1C1C1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  pill: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 2,
  },
  pillText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1C1C1E',
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

export default BurnedCaloriesScreen;
