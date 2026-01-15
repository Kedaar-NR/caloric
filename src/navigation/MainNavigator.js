import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, BarChart2, Users, User, Plus } from 'lucide-react-native';
import HomeScreen from '../screens/main/HomeScreen';
import ProgressScreen from '../screens/main/ProgressScreen';
import GroupsScreen from '../screens/main/GroupsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import LogModal from '../components/LogModal';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -25, // Move it up more
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#1C1C1E',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 4,
        borderColor: '#F9F9F9', // Match background color to create "cutout" effect
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const MainNavigator = () => {
  const [logModalVisible, setLogModalVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarStyle: {
            position: 'absolute',
            bottom: 30,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ffffff',
            borderRadius: 35,
            height: 85,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 12,
            paddingBottom: 20, // Push icons up a bit
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: '#1C1C1E',
          tabBarInactiveTintColor: '#C7C7CC',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: -5,
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, focused }) => <Home size={24} color={color} strokeWidth={focused ? 2.5 : 2} />,
          }}
        />
        <Tab.Screen 
          name="Progress" 
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ color, focused }) => <BarChart2 size={24} color={color} strokeWidth={focused ? 2.5 : 2} />,
          }}
        />
        <Tab.Screen 
          name="Log" 
          component={HomeScreen} // Placeholder, action handled by button
          options={{
            tabBarIcon: ({ focused }) => (
              <Plus size={32} color="#fff" strokeWidth={3} />
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props} onPress={() => setLogModalVisible(true)} />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen 
          name="Groups" 
          component={GroupsScreen}
          options={{
            tabBarIcon: ({ color, focused }) => <Users size={24} color={color} strokeWidth={focused ? 2.5 : 2} />,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, focused }) => <User size={24} color={color} strokeWidth={focused ? 2.5 : 2} />,
          }}
        />
      </Tab.Navigator>

      <LogModal visible={logModalVisible} onClose={() => setLogModalVisible(false)} />
    </>
  );
};

export default MainNavigator;
