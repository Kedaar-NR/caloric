import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './screens/onboarding/SplashScreen';
import IntroScreen from './screens/onboarding/IntroScreen';
import GenderScreen from './screens/onboarding/GenderScreen';
import WorkoutsScreen from './screens/onboarding/WorkoutsScreen';
import SourceScreen from './screens/onboarding/SourceScreen';
import ExperienceScreen from './screens/onboarding/ExperienceScreen';
import MotivationScreen from './screens/onboarding/MotivationScreen';
import HeightWeightScreen from './screens/onboarding/HeightWeightScreen';
import BirthdayScreen from './screens/onboarding/BirthdayScreen';
import CoachScreen from './screens/onboarding/CoachScreen';
import GoalScreen from './screens/onboarding/GoalScreen';
import DesiredWeightScreen from './screens/onboarding/DesiredWeightScreen';
import TargetTextScreen from './screens/onboarding/TargetTextScreen';
import GoalSpeedScreen from './screens/onboarding/GoalSpeedScreen';
import ComparisonScreen from './screens/onboarding/ComparisonScreen';
import ObstaclesScreen from './screens/onboarding/ObstaclesScreen';
import DietScreen from './screens/onboarding/DietScreen';
import AccomplishScreen from './screens/onboarding/AccomplishScreen';
import PotentialScreen from './screens/onboarding/PotentialScreen';
import PrivacyScreen from './screens/onboarding/PrivacyScreen';
import AppleHealthScreen from './screens/onboarding/AppleHealthScreen';
import BurnedCaloriesScreen from './screens/onboarding/BurnedCaloriesScreen';
import RolloverCaloriesScreen from './screens/onboarding/RolloverCaloriesScreen';
import RatingScreen from './screens/onboarding/RatingScreen';
import TestimonialsScreen from './screens/onboarding/TestimonialsScreen';
import NotificationsScreen from './screens/onboarding/NotificationsScreen';
import ReferralScreen from './screens/onboarding/ReferralScreen';
import GeneratePlanScreen from './screens/onboarding/GeneratePlanScreen';
import AnalyzingScreen from './screens/onboarding/AnalyzingScreen';
import PlanReadyScreen from './screens/onboarding/PlanReadyScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/intro" element={<IntroScreen />} />
        <Route path="/gender" element={<GenderScreen />} />
        <Route path="/workouts" element={<WorkoutsScreen />} />
        <Route path="/source" element={<SourceScreen />} />
        <Route path="/experience" element={<ExperienceScreen />} />
        <Route path="/motivation" element={<MotivationScreen />} />
        <Route path="/height-weight" element={<HeightWeightScreen />} />
        <Route path="/birthday" element={<BirthdayScreen />} />
        <Route path="/coach" element={<CoachScreen />} />
        <Route path="/goal" element={<GoalScreen />} />
        <Route path="/desired-weight" element={<DesiredWeightScreen />} />
        <Route path="/target-text" element={<TargetTextScreen />} />
        <Route path="/goal-speed" element={<GoalSpeedScreen />} />
        <Route path="/comparison" element={<ComparisonScreen />} />
        <Route path="/obstacles" element={<ObstaclesScreen />} />
        <Route path="/diet" element={<DietScreen />} />
        <Route path="/accomplish" element={<AccomplishScreen />} />
        <Route path="/potential" element={<PotentialScreen />} />
        <Route path="/privacy" element={<PrivacyScreen />} />
        <Route path="/apple-health" element={<AppleHealthScreen />} />
        <Route path="/burned-calories" element={<BurnedCaloriesScreen />} />
        <Route path="/rollover" element={<RolloverCaloriesScreen />} />
        <Route path="/rating" element={<RatingScreen />} />
        <Route path="/testimonials" element={<TestimonialsScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
        <Route path="/referral" element={<ReferralScreen />} />
        <Route path="/generate-plan" element={<GeneratePlanScreen />} />
        <Route path="/analyzing" element={<AnalyzingScreen />} />
        <Route path="/plan-ready" element={<PlanReadyScreen />} />
        {/* More routes will be added here */}
      </Routes>
    </Router>
  );
}

export default App;
