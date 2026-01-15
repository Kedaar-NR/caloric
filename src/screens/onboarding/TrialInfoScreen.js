import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Check, Bell, ChevronLeft } from 'lucide-react-native';

const TrialInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={28} color="#8E8E93" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.restoreText}>Restore</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>We'll send you a reminder before your free trial ends</Text>

        <View style={styles.imageContainer}>
          <View style={styles.bellContainer}>
            <View style={styles.bellCircle}>
              <Bell size={80} color="#1C1C1E" />
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Check size={20} color="#000" />
          <Text style={styles.infoText}>No Payment Due Now</Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('TrialSelection')}>
            Continue for FREE
          </Button>
          <Text style={styles.priceText}>Just $29.99 per year ($2.49/mo)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingHorizontal: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  restoreText: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellContainer: {
    position: 'relative',
  },
  bellCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#FF3B30',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.white,
  },
  badgeText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: '800',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  footer: {
    width: '100%',
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
  priceText: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: spacing.md,
    fontWeight: '500',
  },
});

export default TrialInfoScreen;
