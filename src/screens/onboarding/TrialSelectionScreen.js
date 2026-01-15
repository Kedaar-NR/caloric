import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Check, ChevronLeft, Lock, Bell, Crown } from 'lucide-react-native';

const TrialSelectionScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState('yearly');

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

      <ScrollView style={styles.content} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Start your 3-day FREE trial to continue.</Text>

        <View style={styles.timeline}>
          <View style={styles.timelineLine} />
          
          <View style={styles.timelineItem}>
            <View style={[styles.timelineIcon, { backgroundColor: '#FF9500' }]}>
              <Lock size={18} color="white" />
            </View>
            <View style={styles.timelineText}>
              <Text style={styles.timelineTitle}>Today</Text>
              <Text style={styles.timelineSubtitle}>Unlock all the app's features like AI calorie scanning and more.</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={[styles.timelineIcon, { backgroundColor: '#FF9500' }]}>
              <Bell size={18} color="white" />
            </View>
            <View style={styles.timelineText}>
              <Text style={styles.timelineTitle}>In 2 Days - Reminder</Text>
              <Text style={styles.timelineSubtitle}>We'll send you a reminder that your trial is ending soon.</Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={[styles.timelineIcon, { backgroundColor: '#1C1C1E' }]}>
              <Crown size={18} color="white" />
            </View>
            <View style={styles.timelineText}>
              <Text style={styles.timelineTitle}>In 3 Days - Billing Starts</Text>
              <Text style={styles.timelineSubtitle}>You'll be charged on Jan 16, 2026 unless you cancel anytime before.</Text>
            </View>
          </View>
        </View>

        <View style={styles.plansContainer}>
          <TouchableOpacity 
            style={[styles.planCard, selectedPlan === 'monthly' && styles.selectedPlanCard]}
            onPress={() => setSelectedPlan('monthly')}
          >
            <Text style={styles.planLabel}>Monthly</Text>
            <Text style={styles.planPrice}>$9.99 /mo</Text>
            <View style={[styles.radio, selectedPlan === 'monthly' && styles.selectedRadio]} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.planCard, selectedPlan === 'yearly' && styles.selectedPlanCard, styles.yearlyCard]}
            onPress={() => setSelectedPlan('yearly')}
          >
            <View style={styles.bestValueBadge}>
              <Text style={styles.bestValueText}>3 DAYS FREE</Text>
            </View>
            <Text style={styles.planLabel}>Yearly</Text>
            <Text style={styles.planPrice}>$2.49/mo</Text>
            <View style={[styles.radio, selectedPlan === 'yearly' && styles.selectedRadio]}>
              {selectedPlan === 'yearly' && <Check size={14} color="white" />}
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.infoRow}>
          <Check size={20} color="#000" />
          <Text style={styles.infoText}>No Payment Due Now</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button onPress={() => console.log('Start Trial')}>
          Start My 3-Day Free Trial
        </Button>
        <Text style={styles.footerText}>3 days free, then $29.99 per year ($2.49/mo)</Text>
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
  },
  contentContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xxl,
  },
  timeline: {
    paddingLeft: spacing.xl,
    marginBottom: spacing.xxl,
    position: 'relative',
  },
  timelineLine: {
    position: 'absolute',
    left: 21,
    top: 20,
    bottom: 20,
    width: 6,
    backgroundColor: '#F2F2F7',
    borderRadius: 3,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: spacing.xl,
    gap: spacing.lg,
  },
  timelineIcon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  timelineText: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
  },
  timelineSubtitle: {
    fontSize: 16,
    color: '#8E8E93',
    lineHeight: 22,
    fontWeight: '500',
  },
  plansContainer: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  planCard: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: spacing.lg,
    borderWidth: 2,
    borderColor: '#F2F2F7',
    position: 'relative',
  },
  selectedPlanCard: {
    borderColor: '#000000',
    backgroundColor: '#F2F2F7',
  },
  yearlyCard: {
    paddingTop: spacing.xl,
  },
  bestValueBadge: {
    position: 'absolute',
    top: -12,
    left: spacing.md,
    right: spacing.md,
    backgroundColor: '#000000',
    paddingVertical: 4,
    borderRadius: 10,
    alignItems: 'center',
  },
  bestValueText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '800',
  },
  planLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.text,
    marginBottom: spacing.md,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#F2F2F7',
    position: 'absolute',
    bottom: spacing.lg,
    right: spacing.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedRadio: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  infoText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  footer: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  footerText: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: spacing.md,
    fontWeight: '500',
  },
});

export default TrialSelectionScreen;
