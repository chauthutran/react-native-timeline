import { useCategory } from '@/app/contexts/CategoryContext';
import { JSONObject } from '@/types/definations';
import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import TimelineEvent from './TimelineEvent';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export default function TimelinePage({ events }: { events: JSONObject[] }) {
    
    // Group events by month
    const groupedEvents = events.reduce(
        (acc: Record<number, JSONObject[]>, event) => {
            const monthIndex = new Date(event.eventDate).getMonth();
            if (!acc[monthIndex]) {
                acc[monthIndex] = [];
            }
            acc[monthIndex].push(event);
            return acc;
        },
        {}
    );

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {months.map((month, index) => (
                <View key={index} style={styles.timelineRow}>
                    {/* Month Label */}
                    <View style={styles.monthContainer}>
                        <Text style={styles.monthText}>{month}</Text>
                    </View>

                    {/* Vertical Line */}
                    <View style={styles.lineContainer}>
                        <View style={styles.circle} />
                        {index < months.length - 1 && (
                            <View style={styles.line} />
                        )}
                    </View>

                    {/* Events */}
                    <TimelineEvent events={groupedEvents[index]} />
                </View>
            ))}
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 50
    },
    timelineRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 30
    },
    monthContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    monthText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#444'
    },
    lineContainer: {
        alignItems: 'center',
        width: 20,
        marginHorizontal: 10
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#3498db'
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#d3d3d3',
        marginTop: 2
    }
});
