import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Check } from 'lucide-react-native';

const PaywallScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.restoreText}>Restore</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>We want you to try Caloric for free.</Text>

        <View style={styles.imageContainer}>
          <View style={styles.phoneMockup}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000' }} 
              style={styles.mockupImage}
              resizeMode="cover"
            />
            <View style={styles.mockupOverlay}>
              <View style={styles.scanTarget} />
              <View style={styles.scanControls}>
                <View style={styles.controlIcon} />
                <View style={styles.scanButton}>
                  <Text style={styles.scanButtonText}>Scan Food</Text>
                </View>
                <View style={styles.controlIcon} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Check size={20} color="#000" />
          <Text style={styles.infoText}>No Payment Due Now</Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('TrialInfo')}>
            Try for $0.00
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
    alignItems: 'flex-end',
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
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  phoneMockup: {
    width: 260,
    height: 520,
    backgroundColor: '#000',
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: '#1C1C1E',
    position: 'relative',
  },
  mockupImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  mockupOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanTarget: {
    width: 180,
    height: 180,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.8)',
    borderRadius: 24,
  },
  scanControls: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 30,
  },
  scanButton: {
    backgroundColor: 'transparent',
  },
  scanButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  controlIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#E5E5EA',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: spacing.xl,
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

export default PaywallScreen;
