import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ScrollPicker from '../../components/ScrollPicker';
import { colors, spacing } from '../../theme/theme';

const BirthdayScreen = ({ navigation }) => {
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('3');
  const [year, setYear] = useState('2024');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString());

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={45} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>When were you born?</Text>
          <Text style={styles.subtitle}>This will be used to calibrate your custom plan.</Text>
        </View>

        <View style={styles.pickersContainer}>
          <ScrollPicker 
            items={months} 
            selectedValue={month} 
            onValueChange={setMonth} 
          />
          <ScrollPicker 
            items={days} 
            selectedValue={day} 
            onValueChange={setDay} 
          />
          <ScrollPicker 
            items={years} 
            selectedValue={year} 
            onValueChange={setYear} 
          />
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Coach')}>
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
  footer: {
    marginBottom: spacing.md,
  },
});

export default BirthdayScreen;
