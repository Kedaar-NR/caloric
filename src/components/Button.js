import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Animated, Pressable } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';

const Button = ({ 
  onPress, 
  children, 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  style,
  textStyle
}) => {
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'outline' && styles.outlineButton,
    variant === 'ghost' && styles.ghostButton,
    disabled && styles.disabledButton,
    style
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'outline' && styles.outlineText,
    variant === 'ghost' && styles.ghostText,
    disabled && styles.disabledText,
    textStyle
  ];

  return (
    <Pressable 
      onPress={onPress} 
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      style={({ pressed }) => [
        { opacity: pressed ? 0.9 : 1 }
      ]}
    >
      <Animated.View style={[buttonStyles, { transform: [{ scale }] }]}>
        {loading ? (
          <ActivityIndicator color={variant === 'primary' ? colors.white : colors.primary} />
        ) : (
          <Text style={textStyles}>{children}</Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  ghostButton: {
    backgroundColor: 'transparent',
  },
  disabledButton: {
    backgroundColor: '#D1D1D1',
    borderColor: '#D1D1D1',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
  primaryText: {
    color: colors.white,
  },
  outlineText: {
    color: colors.primary,
  },
  ghostText: {
    color: colors.primary,
  },
  disabledText: {
    color: colors.white,
  },
});

export default Button;
