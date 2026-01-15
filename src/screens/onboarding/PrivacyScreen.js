import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Lock } from 'lucide-react-native';

const PrivacyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={90} />
      <View style={styles.content}>
        <View style={styles.graphicContainer}>
          <View style={styles.circle}>
            <View style={styles.handsContainer}>
              <Text style={{ fontSize: 80 }}>🙌</Text>
            </View>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>Thank you for trusting us</Text>
          <Text style={styles.subtitle}>Now let's personalize Caloric for you...</Text>
        </View>

        <View style={styles.privacyCard}>
          <View style={styles.lockIcon}>
            <Lock size={20} color="#1C1C1E" />
          </View>
          <Text style={styles.privacyTitle}>Your privacy and security matter to us.</Text>
          <Text style={styles.privacyText}>
            We promise to always keep your personal information private and secure.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('AppleHealth')}>
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
    alignItems: 'center',
  },
  graphicContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xxl,
  },
  circle: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  handsContainer: {
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  privacyCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: spacing.xl,
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    marginTop: spacing.xl,
  },
  lockIcon: {
    position: 'absolute',
    top: -20,
    backgroundColor: '#F2F2F7',
    padding: spacing.sm,
    borderRadius: 12,
    borderWidth: 4,
    borderColor: colors.white,
  },
  privacyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.xs,
    textAlign: 'center',
  },
  privacyText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
    width: '100%',
  },
});

export default PrivacyScreen;
