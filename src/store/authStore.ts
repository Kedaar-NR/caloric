import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  email: string | null;
  provider: 'apple' | 'google' | null;
  setAuthenticated: (authenticated: boolean, userId?: string, email?: string, provider?: 'apple' | 'google') => void;
  logout: () => void;
  loadAuthState: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userId: null,
  email: null,
  provider: null,

  setAuthenticated: async (authenticated, userId = null, email = null, provider = null) => {
    set({
      isAuthenticated: authenticated,
      userId,
      email,
      provider
    });

    // Save to AsyncStorage
    try {
      if (authenticated) {
        await AsyncStorage.setItem('@auth_state', JSON.stringify({
          isAuthenticated: true,
          userId,
          email,
          provider
        }));
      } else {
        await AsyncStorage.removeItem('@auth_state');
      }
    } catch (error) {
      console.error('Error saving auth state:', error);
    }
  },

  logout: async () => {
    set({
      isAuthenticated: false,
      userId: null,
      email: null,
      provider: null
    });

    try {
      await AsyncStorage.removeItem('@auth_state');
    } catch (error) {
      console.error('Error removing auth state:', error);
    }
  },

  loadAuthState: async () => {
    try {
      const authState = await AsyncStorage.getItem('@auth_state');
      if (authState) {
        const parsed = JSON.parse(authState);
        set({
          isAuthenticated: parsed.isAuthenticated,
          userId: parsed.userId,
          email: parsed.email,
          provider: parsed.provider
        });
      }
    } catch (error) {
      console.error('Error loading auth state:', error);
    }
  },
}));
