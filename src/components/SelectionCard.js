import React from 'react';
import { Pressable, Text, StyleSheet, View, Animated } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';

const SelectionCard = ({ 
  label, 
  icon, 
  selected, 
  onSelect, 
  subtitle,
  variant = 'default', // 'default', 'radio-left', 'icon-left', 'icon-circle'
  selectedVariant = 'border' // 'border', 'solid-black'
}) => {
  const isSolidBlack = selected && selectedVariant === 'solid-black';
  const scale = React.useRef(new Animated.Value(1)).current;

  React.useEffect(() => {
    if (selected) {
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.02,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 3,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [selected]);

  return (
    <Pressable 
      onPress={onSelect}
    >
      <Animated.View 
        style={[
          styles.card,
          selected && selectedVariant === 'border' && styles.selectedCardBorder,
          isSolidBlack && styles.selectedCardSolid,
          { transform: [{ scale }] }
        ]}
      >
        <View style={styles.content}>
          {variant === 'radio-left' && (
            <View style={[styles.radio, selected && styles.selectedRadio, { marginRight: spacing.md }]}>
              {selected && <View style={styles.radioInner} />}
            </View>
          )}
          
          {variant === 'icon-left' && icon && (
            <View style={styles.iconContainer}>
              {typeof icon === 'string' ? <Text style={styles.iconText}>{icon}</Text> : icon}
            </View>
          )}

          {variant === 'icon-circle' && icon && (
            <View style={styles.iconCircle}>
              {typeof icon === 'string' ? <Text style={styles.iconText}>{icon}</Text> : icon}
            </View>
          )}

          <View style={styles.textContainer}>
            <Text style={[
              styles.label, 
              selected && selectedVariant === 'border' && styles.selectedTextBorder,
              isSolidBlack && styles.selectedTextSolid
            ]}>
              {label}
            </Text>
            {subtitle && <Text style={[styles.subtitle, isSolidBlack && styles.selectedTextSolid]}>{subtitle}</Text>}
          </View>

          {variant === 'default' && selected && selectedVariant === 'border' && (
            <View style={[styles.radio, styles.selectedRadio]}>
              <View style={styles.radioInner} />
            </View>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    marginBottom: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedCardBorder: {
    borderColor: '#1C1C1E',
    backgroundColor: colors.white,
  },
  selectedCardSolid: {
    backgroundColor: '#1C1C1E',
    borderColor: '#1C1C1E',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  iconCircle: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  iconText: {
    fontSize: 18,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
  },
  selectedTextBorder: {
    color: colors.text,
  },
  selectedTextSolid: {
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
    fontWeight: '500',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D1D6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    borderColor: '#1C1C1E',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#1C1C1E',
  },
});

export default SelectionCard;
