import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Pressable, Image } from 'react-native';
import { colors, spacing, borderRadius } from '../theme/theme';
import { Apple } from 'lucide-react-native';

const SignInModal = ({ visible, onClose, onSignIn }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.content} onPress={(e) => e.stopPropagation()}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <Text style={styles.title}>Sign in</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, styles.appleButton]} onPress={() => onSignIn('apple')}>
              <Apple size={20} color="white" style={styles.buttonIcon} />
              <Text style={styles.appleButtonText}>Sign in with Apple</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={() => onSignIn('google')}>
              <View style={styles.googleIconContainer}>
                <Text style={styles.googleIcon}>G</Text>
              </View>
              <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            By continuing you agree to Caloric's{'\n'}
            <Text style={styles.link}>Terms and Conditions</Text> and <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: spacing.xl,
    paddingBottom: spacing.xxl + spacing.lg,
    alignItems: 'center',
  },
  handle: {
    width: 36,
    height: 5,
    backgroundColor: '#E5E5EA',
    borderRadius: 2.5,
    marginBottom: spacing.lg,
  },
  header: {
    marginBottom: spacing.xxl,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
  },
  buttonsContainer: {
    gap: spacing.md,
    marginBottom: spacing.xxl,
    width: '100%',
  },
  button: {
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  buttonIcon: {
    marginRight: spacing.sm,
  },
  appleButton: {
    backgroundColor: '#000000',
    borderColor: '#000000',
  },
  appleButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  googleButton: {
    backgroundColor: colors.white,
  },
  googleIconContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  googleIcon: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4285F4',
  },
  googleButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 20,
    fontWeight: '500',
  },
  link: {
    textDecorationLine: 'underline',
  },
});

export default SignInModal;
