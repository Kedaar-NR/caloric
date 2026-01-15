import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import RulerPicker from '../../components/RulerPicker';
import { colors, spacing } from '../../theme/theme';

const DesiredWeightScreen = ({ navigation }) => {
  const [weight, setWeight] = useState(184.4);

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={55} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>What is your{'\n'}desired weight?</Text>
        </View>

        <View style={styles.valueContainer}>
          <Text style={styles.label}>Lose weight</Text>
          <Text style={styles.value}>{weight.toFixed(1)} lbs</Text>
        </View>

        <RulerPicker 
          min={100} 
          max={300} 
          initialValue={184.4} 
          onValueChange={setWeight} 
          unit="lbs"
        />

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('TargetText')}>
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
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    lineHeight: 44,
  },
  valueContainer: {
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: spacing.sm,
  },
  value: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
  },
});

export default DesiredWeightScreen;
