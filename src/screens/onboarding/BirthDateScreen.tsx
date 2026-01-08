import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { OnboardingContainer } from '@/components/common/OnboardingContainer';
import { Button } from '@/components/common/Button';
import { colors, typography, spacing } from '@/theme';
import { useOnboardingStore } from '@/store/onboardingStore';

interface BirthDateScreenProps {
  navigation: any;
}

export const BirthDateScreen: React.FC<BirthDateScreenProps> = ({
  navigation,
}) => {
  const { birthDate, setBirthDate } = useOnboardingStore();
  const [date, setDate] = useState(birthDate || new Date(1990, 0, 1));
  const [show, setShow] = useState(Platform.OS === 'ios');

  const progress = 9 / 29;

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleContinue = () => {
    setBirthDate(date);
    navigation.navigate('GoalSelection');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <OnboardingContainer progress={progress} onBack={() => navigation.goBack()}>
      <View style={styles.content}>
        <Text style={styles.title}>When were you born?</Text>
        <Text style={styles.subtitle}>
          We use your age to calculate your personalized calorie goals
        </Text>

        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>Date of Birth</Text>
          <Text style={styles.dateDisplay}>{formatDate(date)}</Text>

          {show && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={onChange}
              maximumDate={new Date()}
              minimumDate={new Date(1900, 0, 1)}
              style={styles.datePicker}
              textColor={colors.text}
            />
          )}
        </View>
      </View>

      <View style={styles.bottom}>
        <Button title="Continue" onPress={handleContinue} />
      </View>
    </OnboardingContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.md,
    color: colors.textSecondary,
    lineHeight: typography.fontSize.md * typography.lineHeight.normal,
    marginBottom: spacing.xxxl,
  },
  dateContainer: {
    marginTop: spacing.xl,
  },
  dateLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  dateDisplay: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text,
    marginBottom: spacing.xl,
  },
  datePicker: {
    width: '100%',
  },
  bottom: {
    paddingBottom: spacing.lg,
  },
});
