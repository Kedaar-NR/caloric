import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '@/screens/main/HomeScreen';
import { AnalyticsScreen } from '@/screens/main/AnalyticsScreen';
import { SettingsScreen } from '@/screens/main/SettingsScreen';
import { darkColors } from '@/theme/darkColors';

const Tab = createBottomTabNavigator();

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: darkColors.background,
          borderTopColor: darkColors.backgroundSecondary,
          borderTopWidth: 1,
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarActiveTintColor: darkColors.text,
        tabBarInactiveTintColor: darkColors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <HomeIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AnalyticsTab"
        component={AnalyticsScreen}
        options={{
          tabBarLabel: 'Analytics',
          tabBarIcon: ({ color, size }) => (
            <AnalyticsIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsTab"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SettingsIcon color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Simple icon components using text
const HomeIcon: React.FC<{ color: string; size: number }> = ({ color }) => (
  <Text style={{ fontSize: 24, color }}>🏠</Text>
);

const AnalyticsIcon: React.FC<{ color: string; size: number }> = ({ color }) => (
  <Text style={{ fontSize: 24, color }}>📊</Text>
);

const SettingsIcon: React.FC<{ color: string; size: number }> = ({ color }) => (
  <Text style={{ fontSize: 24, color }}>⚙️</Text>
);
