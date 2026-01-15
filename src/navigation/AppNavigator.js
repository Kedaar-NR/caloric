import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/onboarding/SplashScreen';
import IntroScreen from '../screens/onboarding/IntroScreen';
import GenderScreen from '../screens/onboarding/GenderScreen';
import WorkoutFrequencyScreen from '../screens/onboarding/WorkoutFrequencyScreen';
import SourceScreen from '../screens/onboarding/SourceScreen';
import ExperienceScreen from '../screens/onboarding/ExperienceScreen';
import MotivationScreen from '../screens/onboarding/MotivationScreen';
import GoalScreen from '../screens/onboarding/GoalScreen';
import HeightWeightScreen from '../screens/onboarding/HeightWeightScreen';
import BirthdayScreen from '../screens/onboarding/BirthdayScreen';
import CoachScreen from '../screens/onboarding/CoachScreen';
import DesiredWeightScreen from '../screens/onboarding/DesiredWeightScreen';
import TargetTextScreen from '../screens/onboarding/TargetTextScreen';
import GoalSpeedScreen from '../screens/onboarding/GoalSpeedScreen';
import ComparisonScreen from '../screens/onboarding/ComparisonScreen';
import ObstaclesScreen from '../screens/onboarding/ObstaclesScreen';
import DietScreen from '../screens/onboarding/DietScreen';
import AccomplishScreen from '../screens/onboarding/AccomplishScreen';
import PotentialScreen from '../screens/onboarding/PotentialScreen';
import PrivacyScreen from '../screens/onboarding/PrivacyScreen';
import AppleHealthScreen from '../screens/onboarding/AppleHealthScreen';
import MyFitnessPalScreen from '../screens/onboarding/MyFitnessPalScreen';
import BurnedCaloriesScreen from '../screens/onboarding/BurnedCaloriesScreen';
import RolloverCaloriesScreen from '../screens/onboarding/RolloverCaloriesScreen';
import RatingScreen from '../screens/onboarding/RatingScreen';
import TestimonialsScreen from '../screens/onboarding/TestimonialsScreen';
import NotificationsScreen from '../screens/onboarding/NotificationsScreen';
import ReferralScreen from '../screens/onboarding/ReferralScreen';
import GeneratePlanScreen from '../screens/onboarding/GeneratePlanScreen';
import AnalyzingScreen from '../screens/onboarding/AnalyzingScreen';
import PlanReadyScreen from '../screens/onboarding/PlanReadyScreen';
import PlanDetailsScreen from '../screens/onboarding/PlanDetailsScreen';
import ReachGoalsScreen from '../screens/onboarding/ReachGoalsScreen';
import SaveProgressScreen from '../screens/onboarding/SaveProgressScreen';
import PaywallScreen from '../screens/onboarding/PaywallScreen';
import TrialInfoScreen from '../screens/onboarding/TrialInfoScreen';
import TrialSelectionScreen from '../screens/onboarding/TrialSelectionScreen';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#fff' },
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Gender" component={GenderScreen} />
      <Stack.Screen name="WorkoutFrequency" component={WorkoutFrequencyScreen} />
      <Stack.Screen name="Source" component={SourceScreen} />
      <Stack.Screen name="Experience" component={ExperienceScreen} />
      <Stack.Screen name="Motivation" component={MotivationScreen} />
      <Stack.Screen name="Goal" component={GoalScreen} />
      <Stack.Screen name="HeightWeight" component={HeightWeightScreen} />
      <Stack.Screen name="Birthday" component={BirthdayScreen} />
      <Stack.Screen name="Coach" component={CoachScreen} />
      <Stack.Screen name="DesiredWeight" component={DesiredWeightScreen} />
      <Stack.Screen name="TargetText" component={TargetTextScreen} />
      <Stack.Screen name="GoalSpeed" component={GoalSpeedScreen} />
      <Stack.Screen name="Comparison" component={ComparisonScreen} />
      <Stack.Screen name="Obstacles" component={ObstaclesScreen} />
      <Stack.Screen name="Diet" component={DietScreen} />
      <Stack.Screen name="Accomplish" component={AccomplishScreen} />
      <Stack.Screen name="Potential" component={PotentialScreen} />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen name="AppleHealth" component={AppleHealthScreen} />
      <Stack.Screen name="MyFitnessPal" component={MyFitnessPalScreen} />
      <Stack.Screen name="BurnedCalories" component={BurnedCaloriesScreen} />
      <Stack.Screen name="RolloverCalories" component={RolloverCaloriesScreen} />
      <Stack.Screen name="Rating" component={RatingScreen} />
      <Stack.Screen name="Testimonials" component={TestimonialsScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Referral" component={ReferralScreen} />
      <Stack.Screen name="GeneratePlan" component={GeneratePlanScreen} />
      <Stack.Screen name="Analyzing" component={AnalyzingScreen} />
      <Stack.Screen name="PlanReady" component={PlanReadyScreen} />
      <Stack.Screen name="PlanDetails" component={PlanDetailsScreen} />
      <Stack.Screen name="ReachGoals" component={ReachGoalsScreen} />
      <Stack.Screen name="SaveProgress" component={SaveProgressScreen} />
      <Stack.Screen name="Paywall" component={PaywallScreen} />
      <Stack.Screen name="TrialInfo" component={TrialInfoScreen} />
      <Stack.Screen name="TrialSelection" component={TrialSelectionScreen} />
      <Stack.Screen name="Main" component={MainNavigator} /> 
    </Stack.Navigator>
  );
};

export default AppNavigator;
