import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

// Import all screens
import {
  SplashScreen,
  WelcomeScreen,
  GenderSelectionScreen,
  WorkoutFrequencyScreen,
  ReferralSourceScreen,
  PreviousAppsScreen,
  LongTermResultsScreen,
  HeightWeightScreen,
  BirthDateScreen,
  GoalSelectionScreen,
  DesiredWeightScreen,
  GoalPaceScreen,
  ComparisonStatsScreen,
  ObstaclesScreen,
  DietTypeScreen,
  AccomplishmentsScreen,
  PotentialGraphScreen,
  ThankYouScreen,
  AppleHealthScreen,
  CaloriesBurnedScreen,
  RolloverCaloriesScreen,
  AppRatingScreen,
  NotificationsScreen,
  ReferralCodeScreen,
  PlanGenerationScreen,
  LoadingProgressScreen,
  PlanReadyScreen,
  SignInScreen,
  FinalPaywallScreen,
  SpinWheelScreen,
  DiscountedPaywallScreen,
} from '@/screens/onboarding';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' },
          animationEnabled: true,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GenderSelection" component={GenderSelectionScreen} />
        <Stack.Screen name="WorkoutFrequency" component={WorkoutFrequencyScreen} />
        <Stack.Screen name="ReferralSource" component={ReferralSourceScreen} />
        <Stack.Screen name="PreviousApps" component={PreviousAppsScreen} />
        <Stack.Screen name="LongTermResults" component={LongTermResultsScreen} />
        <Stack.Screen name="HeightWeight" component={HeightWeightScreen} />
        <Stack.Screen name="BirthDate" component={BirthDateScreen} />
        <Stack.Screen name="GoalSelection" component={GoalSelectionScreen} />
        <Stack.Screen name="DesiredWeight" component={DesiredWeightScreen} />
        <Stack.Screen name="GoalPace" component={GoalPaceScreen} />
        <Stack.Screen name="ComparisonStats" component={ComparisonStatsScreen} />
        <Stack.Screen name="Obstacles" component={ObstaclesScreen} />
        <Stack.Screen name="DietType" component={DietTypeScreen} />
        <Stack.Screen name="Accomplishments" component={AccomplishmentsScreen} />
        <Stack.Screen name="PotentialGraph" component={PotentialGraphScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />
        <Stack.Screen name="AppleHealth" component={AppleHealthScreen} />
        <Stack.Screen name="CaloriesBurned" component={CaloriesBurnedScreen} />
        <Stack.Screen name="RolloverCalories" component={RolloverCaloriesScreen} />
        <Stack.Screen name="AppRating" component={AppRatingScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="ReferralCode" component={ReferralCodeScreen} />
        <Stack.Screen name="PlanGeneration" component={PlanGenerationScreen} />
        <Stack.Screen name="LoadingProgress" component={LoadingProgressScreen} />
        <Stack.Screen name="PlanReady" component={PlanReadyScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="FinalPaywall" component={FinalPaywallScreen} />
        <Stack.Screen name="SpinWheel" component={SpinWheelScreen} />
        <Stack.Screen name="DiscountedPaywall" component={DiscountedPaywallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
