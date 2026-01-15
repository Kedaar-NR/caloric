import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import Button from '../../components/Button';
import { colors, spacing } from '../../theme/theme';

const TargetTextScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={60} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Losing <Text style={styles.highlight}>9.6 lbs</Text> is a realistic target. It's not hard at all!
          </Text>
          <Text style={styles.subtitle}>
            90% of users say that the change is obvious after using Caloric and it is not easy to rebound.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('GoalSpeed')}>
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
    justifyContent: 'center',
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 44,
    marginBottom: spacing.xl,
  },
  highlight: {
    color: '#E67E22',
  },
  subtitle: {
    fontSize: 18,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
    fontWeight: '500',
  },
  footer: {
    marginTop: 'auto',
    marginBottom: spacing.md,
    width: '100%',
  },
});

export default TargetTextScreen;
