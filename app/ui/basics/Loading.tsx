import React from 'react';
import { ActivityIndicator, View, StyleSheet, Text } from 'react-native';

export default function Loading({ size = 'small' }: { size?: 'large' | 'small' }) {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color="#0000ff" />
            {/* <Text>Loading ...</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensures the spinner is centered in the full screen
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: a light transparent background
    },
});


// import { ActivityIndicator, StyleSheet, View } from 'react-native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// export default function Loading({ size = "small" }: { size?: "large" | "small" }) {
//   return (
//     <SafeAreaProvider>
//       <View style={styles.overlay}>
//         <ActivityIndicator size={size} color="#0000ff" />
//       </View>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   overlay: {
//     ...StyleSheet.absoluteFillObject, // Covers the entire screen
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
//     zIndex: 10, // Stays above other components
//   },
// });
