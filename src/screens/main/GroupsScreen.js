import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Plus } from 'lucide-react-native';
import { colors, spacing } from '../../theme/theme';

const { width } = Dimensions.get('window');

const GroupsScreen = () => {
  const groups = [
    {
      id: 1,
      title: "New Year's Resolutions",
      members: 291,
      description: "Share your resolutions, stay on track, celebrate...",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 2,
      title: "Weight Loss Support",
      members: 886,
      description: "Stay accountable, share progress, ask questions.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 3,
      title: "Fitness & Workouts",
      members: 534,
      description: "Share workouts that match your calorie goals.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 4,
      title: "New to Calorie Tracking",
      members: 806,
      description: "Beginner questions, tips, and first wins.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=200",
    },
    {
      id: 5,
      title: "Muscle Gain & Bulking",
      members: 674,
      description: "Eat in a surplus and build muscle together.",
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=200",
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Groups</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Bell size={24} color="#1C1C1E" />
          </TouchableOpacity>
        </View>

        {/* Discover Groups Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover Groups</Text>
          <TouchableOpacity style={styles.privateGroupButton}>
            <Plus size={16} color="#8E8E93" />
            <Text style={styles.privateGroupText}>Private Group</Text>
          </TouchableOpacity>
        </View>

        {/* Groups List */}
        <View style={styles.groupsList}>
          {groups.map((group) => (
            <View key={group.id} style={styles.groupCard}>
              <Image source={{ uri: group.image }} style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupTitle}>{group.title}</Text>
                <Text style={styles.groupMembers}>{group.members} members</Text>
                <Text style={styles.groupDescription} numberOfLines={2}>
                  {group.description}
                </Text>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Plus size={16} color="#1C1C1E" />
                <Text style={styles.joinButtonText}>Join</Text>
              </TouchableOpacity>
            </View>
          ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: spacing.xs,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1C1C1E',
    letterSpacing: -0.5,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1C1E',
  },
  privateGroupButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  privateGroupText: {
    fontSize: 15,
    color: '#8E8E93',
    fontWeight: '500',
  },
  groupsList: {
    gap: 16,
  },
  groupCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  groupImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  groupInfo: {
    flex: 1,
    marginRight: 8,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 13,
    color: '#8E8E93',
    marginBottom: 4,
  },
  groupDescription: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
  },
  joinButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    gap: 4,
  },
  joinButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
  },
});

export default GroupsScreen;
