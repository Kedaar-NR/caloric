import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, Camera, Mic, PenTool, Barcode } from 'lucide-react-native';
import { colors, spacing } from '../theme/theme';

const LogModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Log Food</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color="#1C1C1E" />
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <TouchableOpacity style={styles.optionCard}>
              <View style={[styles.iconCircle, { backgroundColor: '#FF3B3015' }]}>
                <Camera size={32} color="#FF3B30" />
              </View>
              <Text style={styles.optionLabel}>Snap Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
              <View style={[styles.iconCircle, { backgroundColor: '#007AFF15' }]}>
                <Barcode size={32} color="#007AFF" />
              </View>
              <Text style={styles.optionLabel}>Scan Barcode</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
              <View style={[styles.iconCircle, { backgroundColor: '#34C75915' }]}>
                <Mic size={32} color="#34C759" />
              </View>
              <Text style={styles.optionLabel}>Voice Log</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
              <View style={[styles.iconCircle, { backgroundColor: '#FF950015' }]}>
                <PenTool size={32} color="#FF9500" />
              </View>
              <Text style={styles.optionLabel}>Manual Entry</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: spacing.xl,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1C1C1E',
  },
  closeButton: {
    padding: 4,
    backgroundColor: '#F2F2F7',
    borderRadius: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  optionCard: {
    width: '47%',
    backgroundColor: '#F9F9F9',
    borderRadius: 24,
    padding: spacing.lg,
    alignItems: 'center',
    gap: spacing.md,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
  },
});

export default LogModal;
