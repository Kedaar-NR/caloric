import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';

const DietScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'classic', label: 'Classic', icon: '🍗' },
    { id: 'pescatarian', label: 'Pescatarian', icon: '🐟' },
    { id: 'vegetarian', label: 'Vegetarian', icon: '🍎' },
    { id: 'vegan', label: 'Vegan', icon: '🍃' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={75} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Do you follow a specific diet?</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              icon={option.icon}
              selected={selected === option.id}
              onSelect={() => setSelected(option.id)}
              variant="icon-circle"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button 
            disabled={!selected}
            onPress={() => navigation.navigate('Accomplish')}
          >
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
  optionsContainer: {
    flex: 1,
  },
  footer: {
    marginBottom: spacing.md,
  },
});

export default DietScreen;
