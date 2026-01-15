import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import SelectionCard from '../../components/SelectionCard';
import { colors, spacing } from '../../theme/theme';
import { Check, X } from 'lucide-react-native';

const CoachScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const options = [
    { id: 'yes', label: 'Yes', icon: <Check size={24} color={colors.text} /> },
    { id: 'no', label: 'No', icon: <X size={24} color={colors.text} /> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={50} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Do you currently work with a personal coach or nutritionist?</Text>
        </View>

        <View style={styles.optionsContainer}>
          {options.map((option) => (
            <SelectionCard
              key={option.id}
              label={option.label}
              icon={option.icon}
              selected={selected === option.id}
              onSelect={() => setSelected(option.id)}
              variant="icon-left"
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button 
            disabled={!selected}
            onPress={() => navigation.navigate('DesiredWeight')}
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
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 28,
  },
  optionsContainer: {
    flex: 1,
  },
  footer: {
    marginBottom: spacing.md,
  },
});

export default CoachScreen;
