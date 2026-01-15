import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Trophy } from 'lucide-react-native';

const PotentialScreen = ({ navigation }) => {
  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, []);

  const lineLength = 600; // Approximate length of the path
  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [lineLength, 0],
  });

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={85} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>You have great potential to crush your goal</Text>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Your weight transition</Text>
          
          <View style={styles.chartContainer}>
            <Svg height="160" width="100%" viewBox="0 0 300 160">
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor="#E67E22" stopOpacity="0.2" />
                  <Stop offset="1" stopColor="#E67E22" stopOpacity="0" />
                </LinearGradient>
              </Defs>
              
              {/* Grid lines */}
              <Path d="M 0 40 L 300 40" stroke="#F2F2F7" strokeWidth="1" strokeDasharray="4 4" />
              <Path d="M 0 80 L 300 80" stroke="#F2F2F7" strokeWidth="1" strokeDasharray="4 4" />
              
              {/* Area */}
              <Path
                d="M 0 100 Q 50 100, 100 90 T 200 60 T 300 40 L 300 140 L 0 140 Z"
                fill="url(#grad)"
              />
              
              {/* Line */}
              <AnimatedPath
                d="M 0 100 Q 50 100, 100 90 T 200 60 T 300 40"
                fill="none"
                stroke="#E67E22"
                strokeWidth="3"
                strokeDasharray={`${lineLength} ${lineLength}`}
                strokeDashoffset={strokeDashoffset}
              />
              
              {/* Points */}
              <Circle cx="10" cy="100" r="6" fill="white" stroke="#1C1C1E" strokeWidth="2" />
              <Circle cx="100" cy="90" r="6" fill="white" stroke="#1C1C1E" strokeWidth="2" />
              <Circle cx="180" cy="65" r="6" fill="white" stroke="#1C1C1E" strokeWidth="2" />
              
              {/* Trophy */}
              <View style={styles.trophyContainer}>
                <View style={styles.trophyBg}>
                  <Trophy size={16} color="white" />
                </View>
              </View>
            </Svg>
            
            <View style={styles.labelsRow}>
              <Text style={styles.chartLabel}>3 Days</Text>
              <Text style={styles.chartLabel}>7 Days</Text>
              <Text style={styles.chartLabel}>30 Days</Text>
            </View>
          </View>

          <Text style={styles.chartDescription}>
            Based on Caloric's historical data, weight loss is usually delayed at first, but after 7 days, you can burn fat like crazy!
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Privacy')}>
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
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 44,
  },
  chartCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 24,
    padding: spacing.xl,
    marginTop: spacing.md,
  },
  chartTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xl,
  },
  chartContainer: {
    height: 180,
    marginBottom: spacing.lg,
  },
  labelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    marginTop: spacing.sm,
  },
  chartLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  chartDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  trophyContainer: {
    position: 'absolute',
    right: 0,
    top: 20,
  },
  trophyBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E67E22',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
  },
});

export default PotentialScreen;
