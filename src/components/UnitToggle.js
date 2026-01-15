import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';

const UnitToggle = ({ unit, onUnitChange }) => {
  const translateX = React.useRef(new Animated.Value(unit === 'Imperial' ? 0 : 1)).current;

  const handleToggle = (newUnit) => {
    onUnitChange(newUnit);
    Animated.spring(translateX, {
      toValue: newUnit === 'Imperial' ? 0 : 1,
      useNativeDriver: true,
      tension: 50,
      friction: 7,
    }).start();
  };

  const sliderTranslate = translateX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 62],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.labelContainer} 
        onPress={() => handleToggle('Imperial')}
        activeOpacity={1}
      >
        <Text style={[styles.label, unit === 'Imperial' && styles.activeLabel]}>Imperial</Text>
      </TouchableOpacity>

      <View style={styles.track}>
        <Animated.View style={[styles.slider, { transform: [{ translateX: sliderTranslate }] }]} />
      </View>

      <TouchableOpacity 
        style={styles.labelContainer} 
        onPress={() => handleToggle('Metric')}
        activeOpacity={1}
      >
        <Text style={[styles.label, unit === 'Metric' && styles.activeLabel]}>Metric</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    marginVertical: spacing.xl,
  },
  labelContainer: {
    paddingHorizontal: spacing.sm,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#D1D1D6',
  },
  activeLabel: {
    color: '#1C1C1E',
  },
  track: {
    width: 120,
    height: 44,
    backgroundColor: '#E5E5EA',
    borderRadius: 22,
    padding: 2,
    position: 'relative',
  },
  slider: {
    width: 56,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default UnitToggle;
