import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Star } from 'lucide-react-native';

const RatingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={98} />
      <ScrollView style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Give us a rating</Text>
        </View>

        <View style={styles.ratingCard}>
          <View style={styles.ratingRow}>
            <Text style={styles.ratingValue}>4.8</Text>
            <View style={styles.starsRow}>
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} color="#E67E22" />
              ))}
            </View>
          </View>
          <Text style={styles.ratingCount}>200K+ App Ratings</Text>
        </View>

        <View style={styles.socialProofContainer}>
          <Text style={styles.socialProofTitle}>Caloric was made for people like you</Text>
          <View style={styles.avatarsRow}>
            {/* Avatars would be images in a real app */}
            <View style={[styles.avatar, { backgroundColor: '#FFD700' }]} />
            <View style={[styles.avatar, { backgroundColor: '#FF69B4', marginLeft: -15 }]} />
            <View style={[styles.avatar, { backgroundColor: '#00BFFF', marginLeft: -15 }]} />
          </View>
          <Text style={styles.usersCount}>5M+ Caloric Users</Text>
        </View>

        <View style={styles.testimonialCard}>
          <View style={styles.testimonialHeader}>
            <View style={styles.userAvatar} />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Jake Sullivan</Text>
              <View style={styles.userStars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} color="#E67E22" />
                ))}
              </View>
            </View>
          </View>
          <Text style={styles.testimonialText}>
            I lost 15 lbs in 2 months! I was about to go on Ozempic but decided to give this app a shot and it worked :)
          </Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('Testimonials')}>
          Continue
        </Button>
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
  },
  ratingCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F2F2F7',
    marginBottom: spacing.xxl,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.sm,
  },
  ratingValue: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  ratingCount: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '600',
  },
  socialProofContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  socialProofTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  avatarsRow: {
    flexDirection: 'row',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.white,
  },
  usersCount: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '700',
  },
  testimonialCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: '#F2F2F7',
    marginBottom: spacing.xl,
  },
  testimonialHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  userAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F2F2F7',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  userStars: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 2,
  },
  testimonialText: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    fontWeight: '500',
  },
  footer: {
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
});

export default RatingScreen;
