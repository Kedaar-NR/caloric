import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { CheckCircle2, Heart } from 'lucide-react-native';

const GeneratePlanScreen = ({ navigation }) => {
  const floatAnim = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const heartY = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10],
  });

  const heartScale = floatAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={99.9} />
      <View style={styles.content}>
        <View style={styles.graphicContainer}>
          <View style={styles.circleContainer}>
            <Svg height="240" width="240" viewBox="0 0 240 240">
              <Defs>
                <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <Stop offset="0" stopColor="#FFDEE9" stopOpacity="1" />
                  <Stop offset="1" stopColor="#B5FFFC" stopOpacity="1" />
                </LinearGradient>
              </Defs>
              <Circle cx="120" cy="120" r="110" fill="url(#grad)" opacity="0.5" />
              <Circle cx="120" cy="120" r="90" fill="white" />
            </Svg>
            <View style={styles.handOverlay}>
              <Animated.View style={{ transform: [{ translateY: heartY }, { scale: heartScale }] }}>
                <Heart size={24} color="#FF2D55" style={styles.miniHeart} />
              </Animated.View>
              <Text style={styles.handEmoji}>🫰</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <View style={styles.badge}>
            <CheckCircle2 size={20} color="#E67E22" />
            <Text style={styles.badgeText}>All done!</Text>
          </View>
          <Text style={styles.title}>Time to generate your custom plan!</Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Analyzing')}>
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
    alignItems: 'center',
  },
  graphicContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xxl,
  },
  circleContainer: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  handOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  handEmoji: {
    fontSize: 100,
    marginTop: 10,
  },
  miniHeart: {
    marginBottom: -20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  badgeText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 44,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
    width: '100%',
  },
});

export default GeneratePlanScreen;
