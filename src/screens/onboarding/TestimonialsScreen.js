import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';
import { Star } from 'lucide-react-native';

const TestimonialsScreen = ({ navigation }) => {
  const testimonials = [
    {
      id: 1,
      name: 'Jake Sullivan',
      text: 'I lost 15 lbs in 2 months! I was about to go on Ozempic but decided to give this app a shot and it worked :)',
      rating: 5,
    },
    {
      id: 2,
      name: 'Benny Marcs',
      text: "The time I have saved by just taking pictures of my food has been invaluable. Time is money, and I've confidently saved hundreds of dollars.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Sarah Jenkins',
      text: 'Finally an app that makes tracking easy. The AI is surprisingly accurate and the interface is beautiful.',
      rating: 5,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={99} />
      <ScrollView style={styles.content}>
        <View style={styles.socialProofContainer}>
          <Text style={styles.socialProofTitle}>Caloric was made for people like you</Text>
          <View style={styles.avatarsRow}>
            <View style={[styles.avatar, { backgroundColor: '#FFD700' }]} />
            <View style={[styles.avatar, { backgroundColor: '#FF69B4', marginLeft: -15 }]} />
            <View style={[styles.avatar, { backgroundColor: '#00BFFF', marginLeft: -15 }]} />
          </View>
          <Text style={styles.usersCount}>5M+ Caloric Users</Text>
        </View>

        {testimonials.map((item) => (
          <View key={item.id} style={styles.testimonialCard}>
            <View style={styles.testimonialHeader}>
              <View style={styles.userAvatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <View style={styles.userStars}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} color="#E67E22" />
                  ))}
                </View>
              </View>
            </View>
            <Text style={styles.testimonialText}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={() => navigation.navigate('Notifications')}>
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
  socialProofContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  socialProofTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.xl,
    lineHeight: 36,
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
    marginBottom: spacing.md,
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

export default TestimonialsScreen;
