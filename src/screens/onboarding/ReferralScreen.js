import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';

const ReferralScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={99.8} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Enter referral code (optional)</Text>
          <Text style={styles.subtitle}>You can skip this step</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Referral Code"
            placeholderTextColor="#8E8E93"
            value={code}
            onChangeText={setCode}
            autoCapitalize="characters"
          />
          <TouchableOpacity 
            style={[styles.submitButton, !code && styles.disabledSubmit]}
            disabled={!code}
            onPress={() => navigation.navigate('GeneratePlan')}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('GeneratePlan')}>
            Skip
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
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
    paddingHorizontal: spacing.md,
    height: 64,
    marginTop: spacing.xl,
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
  },
  submitButton: {
    backgroundColor: '#D1D1D6',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 12,
  },
  disabledSubmit: {
    opacity: 0.5,
  },
  submitText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.white,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
  },
});

export default ReferralScreen;
