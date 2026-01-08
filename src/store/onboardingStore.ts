import { create } from 'zustand';

export interface OnboardingState {
  // Screen 3
  gender: 'male' | 'female' | 'other' | null;

  // Screen 4
  workoutsPerWeek: '0-2' | '3-5' | '6+' | null;

  // Screen 5
  referralSource: string | null;

  // Screen 6
  triedOtherApps: boolean | null;

  // Screen 8
  heightFt: number | null;
  heightIn: number | null;
  heightCm: number | null;
  weightLbs: number | null;
  weightKg: number | null;
  isMetric: boolean;

  // Screen 9
  birthDate: Date | null;

  // Screen 10
  goal: 'lose' | 'maintain' | 'gain' | null;

  // Screen 11
  desiredWeightLbs: number | null;
  desiredWeightKg: number | null;

  // Screen 13
  goalPaceKg: number;

  // Screen 15
  obstacles: string[];

  // Screen 16
  dietType: string | null;

  // Screen 17
  accomplishments: string[];

  // Screen 19
  acceptedPrivacy: boolean;

  // Screen 20
  connectAppleHealth: boolean | null;

  // Screen 21
  addCaloriesBurned: boolean | null;

  // Screen 22
  rolloverCalories: boolean | null;

  // Screen 24
  allowNotifications: boolean | null;

  // Screen 25
  referralCode: string | null;

  // Actions
  setGender: (gender: 'male' | 'female' | 'other') => void;
  setWorkoutsPerWeek: (workouts: '0-2' | '3-5' | '6+') => void;
  setReferralSource: (source: string) => void;
  setTriedOtherApps: (tried: boolean) => void;
  setHeight: (ft: number | null, inches: number | null, cm: number | null) => void;
  setWeight: (lbs: number | null, kg: number | null) => void;
  setIsMetric: (isMetric: boolean) => void;
  setBirthDate: (date: Date) => void;
  setGoal: (goal: 'lose' | 'maintain' | 'gain') => void;
  setDesiredWeight: (lbs: number | null, kg: number | null) => void;
  setGoalPace: (paceKg: number) => void;
  setObstacles: (obstacles: string[]) => void;
  setDietType: (diet: string) => void;
  setAccomplishments: (accomplishments: string[]) => void;
  setAcceptedPrivacy: (accepted: boolean) => void;
  setConnectAppleHealth: (connect: boolean) => void;
  setAddCaloriesBurned: (add: boolean) => void;
  setRolloverCalories: (rollover: boolean) => void;
  setAllowNotifications: (allow: boolean) => void;
  setReferralCode: (code: string) => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  // Initial state
  gender: null,
  workoutsPerWeek: null,
  referralSource: null,
  triedOtherApps: null,
  heightFt: null,
  heightIn: null,
  heightCm: null,
  weightLbs: null,
  weightKg: null,
  isMetric: false,
  birthDate: null,
  goal: null,
  desiredWeightLbs: null,
  desiredWeightKg: null,
  goalPaceKg: 1.0,
  obstacles: [],
  dietType: null,
  accomplishments: [],
  acceptedPrivacy: false,
  connectAppleHealth: null,
  addCaloriesBurned: null,
  rolloverCalories: null,
  allowNotifications: null,
  referralCode: null,

  // Actions
  setGender: (gender) => set({ gender }),
  setWorkoutsPerWeek: (workoutsPerWeek) => set({ workoutsPerWeek }),
  setReferralSource: (referralSource) => set({ referralSource }),
  setTriedOtherApps: (triedOtherApps) => set({ triedOtherApps }),
  setHeight: (ft, inches, cm) => set({ heightFt: ft, heightIn: inches, heightCm: cm }),
  setWeight: (lbs, kg) => set({ weightLbs: lbs, weightKg: kg }),
  setIsMetric: (isMetric) => set({ isMetric }),
  setBirthDate: (birthDate) => set({ birthDate }),
  setGoal: (goal) => set({ goal }),
  setDesiredWeight: (lbs, kg) => set({ desiredWeightLbs: lbs, desiredWeightKg: kg }),
  setGoalPace: (goalPaceKg) => set({ goalPaceKg }),
  setObstacles: (obstacles) => set({ obstacles }),
  setDietType: (dietType) => set({ dietType }),
  setAccomplishments: (accomplishments) => set({ accomplishments }),
  setAcceptedPrivacy: (acceptedPrivacy) => set({ acceptedPrivacy }),
  setConnectAppleHealth: (connectAppleHealth) => set({ connectAppleHealth }),
  setAddCaloriesBurned: (addCaloriesBurned) => set({ addCaloriesBurned }),
  setRolloverCalories: (rolloverCalories) => set({ rolloverCalories }),
  setAllowNotifications: (allowNotifications) => set({ allowNotifications }),
  setReferralCode: (referralCode) => set({ referralCode }),
}));
