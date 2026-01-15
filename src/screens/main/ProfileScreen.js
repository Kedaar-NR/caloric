import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  ChevronRight, 
  User, 
  Settings, 
  Globe, 
  Users, 
  Target, 
  Flag, 
  Bell, 
  History, 
  HelpCircle, 
  MessageSquare, 
  Mail, 
  FileText, 
  RefreshCw, 
  Shield, 
  LogOut, 
  Trash2,
  Instagram,
  Twitter,
  Plus,
  Scan,
  Barcode
} from 'lucide-react-native';
import { colors, spacing } from '../../theme/theme';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const SettingItem = ({ icon: Icon, label, value, onPress, color = '#1C1C1E' }) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <View style={styles.settingLeft}>
        <Icon size={20} color={color} strokeWidth={2} />
        <Text style={[styles.settingLabel, { color }]}>{label}</Text>
      </View>
      <View style={styles.settingRight}>
        {value && <Text style={styles.settingValue}>{value}</Text>}
        <ChevronRight size={20} color="#C7C7CC" />
      </View>
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerTitle}>Profile</Text>

        {/* User Card */}
        <View style={styles.userCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200' }} 
            style={styles.avatar} 
          />
          <View style={styles.userInfo}>
            <View style={styles.premiumBadge}>
              <Text style={styles.premiumIcon}>👑</Text>
              <Text style={styles.premiumText}>Premium</Text>
            </View>
            <Text style={styles.tapToSet}>Tap to set name</Text>
            <Text style={styles.username}>and username</Text>
          </View>
          <ChevronRight size={20} color="#C7C7CC" />
        </View>

        {/* Invite Friends */}
        <Text style={styles.sectionLabel}>Invite Friends</Text>
        <TouchableOpacity style={styles.inviteCard}>
          <View style={styles.inviteIconContainer}>
            <Users size={20} color="#1C1C1E" />
          </View>
          <View style={styles.inviteInfo}>
            <Text style={styles.inviteTitle}>Refer a friend and earn $10</Text>
            <Text style={styles.inviteSubtitle}>Earn $10 per friend that signs up with your promo code.</Text>
          </View>
          <ChevronRight size={20} color="#C7C7CC" />
        </TouchableOpacity>

        {/* Account */}
        <SectionHeader title="Account" />
        <View style={styles.sectionContainer}>
          <SettingItem icon={User} label="Personal Details" />
          <SettingItem icon={Settings} label="Preferences" />
          <SettingItem icon={Globe} label="Language" />
          <SettingItem icon={Users} label="Upgrade to Family Plan" />
        </View>

        {/* Goals & Tracking */}
        <SectionHeader title="Goals & Tracking" />
        <View style={styles.sectionContainer}>
          <SettingItem icon={Target} label="Edit Nutrition Goals" />
          <SettingItem icon={Flag} label="Goals & current weight" />
          <SettingItem icon={Bell} label="Tracking Reminders" />
          <SettingItem icon={History} label="Weight History" />
          <SettingItem icon={HelpCircle} label="Ring Colors Explained" />
        </View>

        {/* Widgets */}
        <SectionHeader title="Widgets" />
        <View style={styles.widgetsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.widgetsScroll}>
            {/* Calories Widget */}
            <View style={styles.widgetCard}>
              <View style={styles.caloriesWidget}>
                <View style={styles.caloriesCircle}>
                  <Text style={styles.caloriesWidgetValue}>2223</Text>
                  <Text style={styles.caloriesWidgetLabel}>Calories left</Text>
                </View>
                <TouchableOpacity style={styles.logButton}>
                  <Plus size={16} color="#FFFFFF" />
                  <Text style={styles.logButtonText}>Log your food</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Streak Widget */}
            <View style={styles.widgetCard}>
              <View style={styles.streakWidget}>
                <Text style={styles.streakWidgetIcon}>🔥</Text>
                <Text style={styles.streakWidgetValue}>0</Text>
              </View>
            </View>

            {/* Scan Tools */}
            <View style={styles.toolsWidget}>
              <TouchableOpacity style={styles.toolButton}>
                <View style={styles.toolIconBg}>
                  <Scan size={20} color="#1C1C1E" />
                </View>
                <Text style={styles.toolLabel}>Scan Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.toolButton}>
                <View style={styles.toolIconBg}>
                  <Barcode size={20} color="#1C1C1E" />
                </View>
                <Text style={styles.toolLabel}>Barcode</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Support & Legal */}
        <SectionHeader title="Support & Legal" />
        <View style={styles.sectionContainer}>
          <SettingItem icon={MessageSquare} label="Request a Feature" />
          <SettingItem icon={Mail} label="Support Email" />
          <SettingItem icon={FileText} label="Export PDF Summary Report" />
          <SettingItem icon={RefreshCw} label="Sync Data" value="Last Synced: 1:33 PM" />
          <SettingItem icon={FileText} label="Terms and Conditions" />
          <SettingItem icon={Shield} label="Privacy Policy" />
        </View>

        {/* Follow Us */}
        <SectionHeader title="Follow Us" />
        <View style={styles.sectionContainer}>
          <SettingItem icon={Instagram} label="Instagram" />
          <SettingItem icon={Globe} label="TikTok" /> 
          <SettingItem icon={Twitter} label="X" />
        </View>

        {/* Account Actions */}
        <SectionHeader title="Account Actions" />
        <View style={styles.sectionContainer}>
          <SettingItem icon={LogOut} label="Logout" />
          <SettingItem icon={Trash2} label="Delete Account" />
        </View>

        {/* Spacer for Bottom Tab Bar */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContent: {
    padding: spacing.lg,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1C1C1E',
    marginBottom: 24,
    marginTop: spacing.xs,
    letterSpacing: -0.5,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 4,
  },
  premiumIcon: {
    fontSize: 12,
  },
  premiumText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#D4AF37', // Gold color
  },
  tapToSet: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  username: {
    fontSize: 15,
    color: '#8E8E93',
  },
  sectionLabel: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
    marginBottom: 12,
    marginLeft: 4,
  },
  inviteCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  inviteIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  inviteInfo: {
    flex: 1,
    marginRight: 8,
  },
  inviteTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  inviteSubtitle: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
  },
  sectionHeader: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
    marginBottom: 12,
    marginTop: 8,
    marginLeft: 4,
  },
  sectionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 8,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 13,
    color: '#8E8E93',
  },
  widgetsContainer: {
    marginBottom: 24,
  },
  widgetsScroll: {
    gap: 12,
    paddingRight: 20,
  },
  widgetCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    height: 140,
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  caloriesWidget: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  caloriesCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caloriesWidgetValue: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  caloriesWidgetLabel: {
    fontSize: 10,
    color: '#8E8E93',
  },
  logButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  logButtonText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  streakWidget: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  streakWidgetIcon: {
    fontSize: 40,
    marginBottom: 8,
  },
  streakWidgetValue: {
    fontSize: 24,
    fontWeight: '800',
    color: '#E67E22',
  },
  toolsWidget: {
    height: 140,
    justifyContent: 'space-between',
  },
  toolButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 12,
    width: 100,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  toolIconBg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  toolLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#1C1C1E',
  },
});

export default ProfileScreen;
