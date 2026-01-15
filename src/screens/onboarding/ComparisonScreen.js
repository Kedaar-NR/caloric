import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing, borderRadius } from '../../theme/theme';

const { width } = Dimensions.get('window');

const ComparisonScreen = ({ navigation }) => {
  const progress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const lineLength = 500; // Approximate length of the path
  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [lineLength, 0],
  });

  const AnimatedPath = Animated.createAnimatedComponent(Path);

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={25} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Caloric creates{'\n'}long-term results</Text>
        </View>

        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Your weight</Text>
          <View style={styles.chartWrapper}>
            <Svg width={width - 80} height={150} viewBox={`0 0 ${width - 80} 150`}>
              <Defs>
                <LinearGradient id="gradRed" x1="0" y1="0" x2="0" y2="1">
                  <Stop offset="0" stopColor="#ff3b30" stopOpacity="0.2" />
                  <Stop offset="1" stopColor="#ff3b30" stopOpacity="0" />
                </LinearGradient>
              </Defs>
              
              {/* Traditional Diet Line (Red) */}
              <AnimatedPath
                d={`M 0 50 Q ${(width - 80) / 2} 150, ${width - 80} 20`}
                fill="none"
                stroke="#ff3b30"
                strokeWidth="2"
                strokeDasharray={`${lineLength} ${lineLength}`}
                strokeDashoffset={strokeDashoffset}
              />
              <Text style={styles.chartLabelRed}>Traditional diet</Text>

              {/* Caloric Line (Black) */}
              <AnimatedPath
                d={`M 0 50 Q ${(width - 80) / 2} 50, ${width - 80} 120`}
                fill="none"
                stroke="#1C1C1E"
                strokeWidth="3"
                strokeDasharray={`${lineLength} ${lineLength}`}
                strokeDashoffset={strokeDashoffset}
              />
              
              <Circle cx="0" cy="50" r="4" fill="#fff" stroke="#1C1C1E" strokeWidth="2" />
              <Circle cx={width - 80} cy={120} r="4" fill="#fff" stroke="#1C1C1E" strokeWidth="2" />
            </Svg>
          </View>
          
          <View style={styles.chartFooter}>
            <Text style={styles.monthLabel}>Month 1</Text>
            <Text style={styles.monthLabel}>Month 6</Text>
          </View>

          <Text style={styles.socialProofText}>
            80% of Caloric users maintain their{'\n'}weight loss even 6 months later
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Motivation')}>
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
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 40,
  },
  chartCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 24,
    padding: spacing.xl,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    alignSelf: 'flex-start',
    marginBottom: spacing.lg,
  },
  chartWrapper: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: spacing.sm,
  },
  monthLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  socialProofText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
    lineHeight: 20,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
  },
});

export default ComparisonScreen;
