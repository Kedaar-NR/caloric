import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import { colors, spacing } from '../../theme/theme';

const NotificationsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} progress={99.5} />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Be reminded to log meals</Text>
        </View>

        <View style={styles.mockupBg}>
          {/* Background elements to simulate a blurred screen */}
          <View style={styles.mockupCard} />
          <View style={styles.mockupCard} />
        </View>

        <Modal transparent={true} visible={true} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.alert}>
              <View style={styles.alertContent}>
                <Text style={styles.alertTitle}>"Caloric" Would Like to Send You Notifications</Text>
                <Text style={styles.alertMessage}>
                  Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.
                </Text>
              </View>
              <View style={styles.alertButtons}>
                <TouchableOpacity 
                  style={styles.alertButton}
                  onPress={() => navigation.navigate('Referral')}
                >
                  <Text style={styles.alertButtonText}>Don't Allow</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={[styles.alertButton, styles.borderLeft]}
                  onPress={() => navigation.navigate('Referral')}
                >
                  <Text style={[styles.alertButtonText, styles.boldText]}>Allow</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  textContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xxl,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.text,
    textAlign: 'center',
  },
  mockupBg: {
    flex: 1,
    gap: spacing.md,
    opacity: 0.3,
  },
  mockupCard: {
    height: 100,
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  alert: {
    width: 270,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 14,
    overflow: 'hidden',
  },
  alertContent: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  alertTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginBottom: 4,
  },
  alertMessage: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
    lineHeight: 18,
  },
  alertButtons: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: '#3F3F3F',
  },
  alertButton: {
    flex: 1,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertButtonText: {
    fontSize: 17,
    color: '#007AFF',
  },
  borderLeft: {
    borderLeftWidth: 0.5,
    borderColor: '#3F3F3F',
  },
  boldText: {
    fontWeight: '600',
  },
});

export default NotificationsScreen;
