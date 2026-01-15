import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing } from '../../theme/theme';
import { CheckCircle2 } from 'lucide-react-native';

const AnalyzingScreen = ({ navigation }) => {
  const [progress, setProgress] = useState(0);
  const progressAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('PlanReady');
    });

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { label: 'Calories', done: progress > 20 },
    { label: 'Carbs', done: progress > 40 },
    { label: 'Protein', done: progress > 60 },
    { label: 'Fats', done: progress > 80 },
    { label: 'Health Score', done: progress > 95 },
  ];

  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.percentage}>{progress}%</Text>
        <Text style={styles.title}>We're setting everything up for you</Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBg} />
          <Animated.View style={[styles.progressBar, { width: progressWidth }]} />
        </View>

        <Text style={styles.status}>Finalizing results...</Text>

        <View style={styles.checklist}>
          <Text style={styles.checklistTitle}>Daily recommendation for</Text>
          {steps.map((step, index) => (
            <View key={index} style={styles.checkItem}>
              <Text style={styles.checkLabel}>• {step.label}</Text>
              {step.done && (
                <CheckCircle2 size={24} color="#1C1C1E" />
              )}
            </View>
          ))}
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
    padding: spacing.xxl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontSize: 72,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    lineHeight: 40,
  },
  progressContainer: {
    width: '100%',
    height: 12,
    marginBottom: spacing.xl,
    position: 'relative',
  },
  progressBg: {
    position: 'absolute',
    width: '100%',
    height: 12,
    backgroundColor: '#F2F2F7',
    borderRadius: 6,
  },
  progressBar: {
    position: 'absolute',
    height: 12,
    borderRadius: 6,
    backgroundColor: '#5E97F6',
  },
  status: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: '600',
    marginBottom: spacing.xxl,
  },
  checklist: {
    width: '100%',
    marginTop: spacing.xxl,
  },
  checklistTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.lg,
  },
  checkItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
    height: 32,
  },
  checkLabel: {
    fontSize: 18,
    color: colors.text,
    fontWeight: '500',
  },
});

export default AnalyzingScreen;
