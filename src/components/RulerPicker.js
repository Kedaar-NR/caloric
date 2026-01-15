import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Animated } from 'react-native';
import { colors, spacing } from '../theme/theme';

const { width } = Dimensions.get('window');
const TICK_SPACING = 10;
const CENTER_OFFSET = width / 2;

const RulerPicker = ({ min, max, value, onValueChange, unit }) => {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const initialOffset = (value - min) * TICK_SPACING;
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({ x: initialOffset, animated: false });
    }, 100);
  }, []);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false, listener: (event) => {
      const offset = event.nativeEvent.contentOffset.x;
      const newValue = Math.round(offset / TICK_SPACING) + min;
      if (newValue !== value && newValue >= min && newValue <= max) {
        onValueChange(newValue);
      }
    }}
  );

  const renderTicks = () => {
    const ticks = [];
    for (let i = min; i <= max; i++) {
      const isMajor = i % 5 === 0;
      ticks.push(
        <View key={i} style={[styles.tickContainer, { width: TICK_SPACING }]}>
          <View style={[styles.tick, isMajor ? styles.majorTick : styles.minorTick]} />
        </View>
      );
    }
    return ticks;
  };

  return (
    <View style={styles.container}>
      <View style={styles.rulerContainer}>
        <View style={styles.indicator} />
        <ScrollView
          ref={scrollViewRef}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={TICK_SPACING}
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingHorizontal: CENTER_OFFSET,
          }}
        >
          {renderTicks()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },
  rulerContainer: {
    height: 80,
    width: '100%',
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    left: CENTER_OFFSET - 1,
    width: 2,
    height: 60,
    backgroundColor: '#1C1C1E',
    borderRadius: 1,
    zIndex: 1,
  },
  tickContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80,
  },
  tick: {
    width: 2,
    backgroundColor: '#D1D1D6',
    borderRadius: 1,
  },
  majorTick: {
    height: 40,
    backgroundColor: '#1C1C1E',
  },
  minorTick: {
    height: 20,
  },
});

export default RulerPicker;
