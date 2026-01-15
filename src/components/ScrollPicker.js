import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { spacing } from '../theme/theme';

const ITEM_HEIGHT = 40;
const VISIBLE_ITEMS = 5;
const PADDING = ITEM_HEIGHT * ((VISIBLE_ITEMS - 1) / 2);

const ScrollPicker = ({ items, selectedValue, onValueChange, label }) => {
  const flatListRef = useRef(null);
  const selectedIndex = items.indexOf(selectedValue);

  useEffect(() => {
    if (selectedIndex !== -1 && flatListRef.current) {
      const offset = selectedIndex * ITEM_HEIGHT;
      flatListRef.current.scrollToOffset({ offset, animated: false });
    }
  }, [selectedIndex]);

  const onMomentumScrollEnd = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    const clampedIndex = Math.min(Math.max(index, 0), items.length - 1);

    onValueChange(items[clampedIndex]);
    flatListRef.current?.scrollToOffset({
      offset: clampedIndex * ITEM_HEIGHT,
      animated: true,
    });
  };

  const renderItem = ({ item }) => {
    const isSelected = item === selectedValue;
    return (
      <View style={styles.item}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.pickerContainer}>
        <View style={styles.selectionOverlay} pointerEvents="none" />
        <FlatList
          ref={flatListRef}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.toString()}
          showsVerticalScrollIndicator={false}
          snapToInterval={ITEM_HEIGHT}
          decelerationRate="fast"
          onMomentumScrollEnd={onMomentumScrollEnd}
          contentContainerStyle={{
            paddingVertical: PADDING,
          }}
          getItemLayout={(_, index) => ({
            length: ITEM_HEIGHT,
            offset: PADDING + ITEM_HEIGHT * index,
            index,
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: spacing.md,
  },
  pickerContainer: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  selectionOverlay: {
    position: 'absolute',
    top: PADDING,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    zIndex: 1,
    marginHorizontal: spacing.sm,
    alignSelf: 'center',
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ITEM_HEIGHT,
  },
  itemText: {
    fontSize: 18,
    color: '#D1D1D6',
    fontWeight: '600',
  },
  selectedItemText: {
    fontSize: 18,
    color: '#1C1C1E',
    fontWeight: '700',
  },
});

export default ScrollPicker;
