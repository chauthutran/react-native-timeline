import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return <View style={styles.divider} />;
};

export default Divider;

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#ccc', // Gray color
        marginVertical: 16, // Space above and below
    },
});
