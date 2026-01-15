import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import UnitToggle from '../../components/UnitToggle';
import ScrollPicker from '../../components/ScrollPicker';
import { colors, spacing } from '../../theme/theme';

const HeightWeightScreen = ({ navigation }) => {
  const [unit, setUnit] = useState('Imperial');
  const [heightFt, setHeightFt] = useState('5 ft');
  const [heightIn, setHeightIn] = useState('10 in');
  const [heightCm, setHeightCm] = useState('170 cm');
  const [weightLb, setWeightLb] = useState('120 lb');
  const [weightKg, setWeightKg] = useState('60 kg');

  const ftItems = Array.from({ length: 8 }, (_, i) => `${i + 1} ft`);
  const inItems = Array.from({ length: 12 }, (_, i) => `${i} in`);
  const lbItems = Array.from({ length: 300 }, (_, i) => `${i + 50} lb`);

  const cmItems = Array.from({ length: 150 }, (_, i) => `${i + 100} cm`);
  const kgItems = Array.from({ length: 200 }, (_, i) => `${i + 30} kg`);

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={40} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Height & weight</Text>
          <Text style={styles.subtitle}>This will be used to calibrate your custom plan.</Text>
        </View>

        <UnitToggle unit={unit} onUnitChange={setUnit} />

        <View style={styles.pickersContainer}>
          {unit === 'Imperial' ? (
            <>
              <View style={styles.pickerGroup}>
                <Text style={styles.pickerLabel}>Height</Text>
                <View style={styles.row}>
                  <ScrollPicker 
                    items={ftItems} 
                    selectedValue={heightFt} 
                    onValueChange={setHeightFt} 
                  />
                  <ScrollPicker 
                    items={inItems} 
                    selectedValue={heightIn} 
                    onValueChange={setHeightIn} 
                  />
                </View>
              </View>
              <View style={styles.pickerGroup}>
                <Text style={styles.pickerLabel}>Weight</Text>
                <ScrollPicker
                  items={lbItems}
                  selectedValue={weightLb}
                  onValueChange={setWeightLb}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.pickerGroup}>
                <Text style={styles.pickerLabel}>Height</Text>
                <ScrollPicker
                  items={cmItems}
                  selectedValue={heightCm}
                  onValueChange={setHeightCm}
                />
              </View>
              <View style={styles.pickerGroup}>
                <Text style={styles.pickerLabel}>Weight</Text>
                <ScrollPicker
                  items={kgItems}
                  selectedValue={weightKg}
                  onValueChange={setWeightKg}
                />
              </View>
            </>
          )}
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Birthday')}>
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
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '500',
    lineHeight: 22,
  },
  pickersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  pickerGroup: {
    flex: 1,
    alignItems: 'center',
  },
  pickerLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
  },
  footer: {
    marginBottom: spacing.md,
  },
});

export default HeightWeightScreen;
