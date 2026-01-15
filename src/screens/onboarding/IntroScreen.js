import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import SignInModal from '../../components/SignInModal';
import { colors, spacing } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

const IntroScreen = ({ navigation }) => {
  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const phoneAnimation = useRef(new Animated.Value(-height)).current;

  useEffect(() => {
    Animated.spring(phoneAnimation, {
      toValue: 0,
      tension: 40,
      friction: 7,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.mockupContainer}>
          <Animated.View
            style={[
              styles.phoneFrame,
              {
                transform: [{ translateY: phoneAnimation }]
              }
            ]}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000' }}
              style={styles.mockupImage}
              resizeMode="cover"
            />
            <View style={styles.mockupOverlay}>
              <View style={styles.mockupCard}>
                <Text style={styles.mockupCardTitle}>Turkey Sandwich</Text>
                <Text style={styles.mockupCardValue}>460 kcal</Text>
              </View>
            </View>
          </Animated.View>
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>Calorie tracking{'\n'}made easy</Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Gender')}>
            Get Started
          </Button>
          <TouchableOpacity 
            onPress={() => setIsSignInVisible(true)}
            style={styles.signInButton}
          >
            <Text style={styles.signInText}>
              Already have an account? <Text style={styles.signInLink}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <SignInModal 
        visible={isSignInVisible} 
        onClose={() => setIsSignInVisible(false)}
        onSignIn={(type) => {
          setIsSignInVisible(false);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
          });
        }}
      />
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
    justifyContent: 'space-between',
  },
  mockupContainer: {
    height: '55%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneFrame: {
    width: width * 0.7,
    height: '100%',
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#1a1a1a',
    overflow: 'hidden',
    backgroundColor: '#000',
    position: 'relative',
  },
  mockupImage: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  mockupOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
  },
  mockupCard: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 15,
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mockupCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
  },
  mockupCardValue: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.blue,
  },
  textContainer: {
    marginTop: spacing.xl,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 44,
  },
  footer: {
    width: '100%',
    marginBottom: spacing.md,
  },
  signInButton: {
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  signInText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  signInLink: {
    color: colors.primary,
    fontWeight: '700',
  },
});

export default IntroScreen;
