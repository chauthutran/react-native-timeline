import { useCategory } from "@/app/contexts/CategoryContext";
import { JSONObject } from "@/types/definations";
import { StyleSheet, Text, View } from "react-native";
import * as Utils from "@/app/scripts/utils";


export default function TimelineEvent({events}: {events: JSONObject[]}) {
    
    const { categories } = useCategory();
    
    const getCategoryData = (event: JSONObject) => {
        return Utils.findItemFromList(categories!, event.categoryId, "_id");
    }
    
    
    return (
        <View style={styles.eventContainer}>
            {events ? (
                events.map((event) => (
                    <View 
                        key={event._id} 
                        style={[styles.eventItem, { backgroundColor: getCategoryData(event)?.color }]} // Set backgroundColor dynamically
                        className="px-3 py-2 rounded-md"
                    >
                        <Text style={styles.eventTitle} className="text-white mb-2">
                            {event.SRHRJNeed}
                        </Text>
                        <View>
                            <Text style={styles.eventDate} className="text-white">
                                {new Date(
                                    event.eventDate
                                ).toLocaleDateString()}
                            </Text>
                        </View>
                    </View>
                ))
            ) : (
                <Text style={styles.noEvents}>No events</Text>
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: '#ddd'
    },
    eventItem: {
        marginBottom: 10,
        paddingVertical: 5
    },
    eventTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    eventDate: {
        fontSize: 12,
        color: '#777'
    },
    noEvents: {
        fontSize: 12,
        color: '#aaa'
    }
})