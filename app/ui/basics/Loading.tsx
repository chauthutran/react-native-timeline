import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Loading({ size = "small" }: { size?: "large" | "small" }) {
  return (
    <SafeAreaProvider>
      <View style={styles.overlay}>
        <ActivityIndicator size={size} color="#0000ff" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire screen
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
    zIndex: 10, // Stays above other components
  },
});
