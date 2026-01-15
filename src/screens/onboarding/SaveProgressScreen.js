import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { colors, spacing } from '../../theme/theme';
import { Apple } from 'lucide-react-native';

const SaveProgressScreen = ({ navigation }) => {
  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={100} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Save your progress</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.appleButton}
            onPress={goHome}
          >
            <Apple size={24} color="white" />
            <Text style={styles.appleButtonText}>Sign in with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.googleButton}
            onPress={goHome}
          >
            <View style={styles.googleIconContainer}>
              <Text style={styles.googleIcon}>G</Text>
            </View>
            <Text style={styles.googleButtonText}>Sign in with Google</Text>
          </TouchableOpacity>
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
    paddingTop: spacing.xxl,
  },
  textContainer: {
    marginBottom: 100,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'left',
  },
  buttonsContainer: {
    gap: spacing.md,
    width: '100%',
    marginTop: 'auto',
    marginBottom: spacing.xxl,
  },
  appleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 64,
    borderRadius: 32,
    gap: spacing.sm,
  },
  appleButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    gap: spacing.sm,
  },
  googleIconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleIcon: {
    fontSize: 18,
    fontWeight: '900',
    color: '#4285F4',
  },
  googleButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SaveProgressScreen;
