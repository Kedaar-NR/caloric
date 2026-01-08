import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { colors, typography, spacing, borderRadius } from '@/theme';

interface SpinWheelScreenProps {
  navigation: any;
}

const discounts = ['10%', '20%', '30%', '50%', '60%', '70%', '80%', '90%'];

export const SpinWheelScreen: React.FC<SpinWheelScreenProps> = ({
  navigation,
}) => {
  const [hasSpun, setHasSpun] = useState(false);
  const [discount, setDiscount] = useState<string | null>(null);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handleSpin = () => {
    if (hasSpun) return;

    setHasSpun(true);
    const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];

    // Spin animation
    Animated.timing(rotateAnim, {
      toValue: 5 + Math.random(), // 5+ full rotations
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setDiscount(randomDiscount);
      setTimeout(() => {
        navigation.navigate('DiscountedPaywall', { discount: randomDiscount });
      }, 2000);
    });
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Spin to unlock your discount!</Text>
        <Text style={styles.subtitle}>
          Everyone wins! Get up to 90% off your subscription
        </Text>

        <View style={styles.wheelContainer}>
          <Animated.View
            style={[
              styles.wheel,
              {
                transform: [{ rotate: spin }],
              },
            ]}
          >
            {discounts.map((disc, index) => (
              <View
                key={index}
                style={[
                  styles.segment,
                  {
                    transform: [
                      { rotate: `${(360 / discounts.length) * index}deg` },
                    ],
                    backgroundColor: index % 2 === 0 ? colors.text : colors.backgroundDark,
                  },
                ]}
              >
                <Text style={styles.segmentText}>{disc}</Text>
              </View>
            ))}
            <View style={styles.wheelCenter}>
              <Text style={styles.wheelCenterText}>SPIN</Text>
            </View>
          </Animated.View>
          <View style={styles.pointer} />
        </View>

        {discount && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>You won!</Text>
            <Text style={styles.resultDiscount}>{discount} OFF</Text>
            <Text style={styles.resultSubtitle}>Redirecting to your offer...</Text>
          </View>
        )}

        {!hasSpun && (
          <TouchableOpacity style={styles.spinButton} onPress={handleSpin}>
            <Text style={styles.spinButtonText}>TAP TO SPIN</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.disclaimer}>
        Limited time offer • One spin per user
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxxl,
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxxl,
  },
  wheelContainer: {
    position: 'relative',
    width: 300,
    height: 300,
    marginVertical: spacing.xxxl,
  },
  wheel: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 8,
    borderColor: colors.text,
    position: 'relative',
  },
  segment: {
    position: 'absolute',
    width: 150,
    height: 150,
    top: 150,
    left: 150,
    transformOrigin: 'top left',
  },
  segmentText: {
    position: 'absolute',
    top: 20,
    left: 60,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  wheelCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.text,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateX: -40 }, { translateY: -40 }],
  },
  wheelCenterText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  pointer: {
    position: 'absolute',
    top: -20,
    left: '50%',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderTopWidth: 30,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: colors.text,
    transform: [{ translateX: -15 }],
  },
  resultBox: {
    backgroundColor: colors.backgroundGray,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  resultTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  resultDiscount: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  resultSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  spinButton: {
    marginTop: spacing.xl,
    backgroundColor: colors.text,
    paddingHorizontal: spacing.xxxl,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
  },
  spinButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.textWhite,
  },
  disclaimer: {
    fontSize: typography.fontSize.xs,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingBottom: spacing.lg,
  },
});
