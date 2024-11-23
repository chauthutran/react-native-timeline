import { StyleSheet, Text, View } from 'react-native';
import HomePage from './ui/HomePage';
import './../global.css';
import { EventProvider } from './contexts/EventContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/types'; 
import TimelinePage from './ui/timeline/TimelinePage';


const Stack = createStackNavigator<RootStackParamList>();

export default function Page() {
    return (
        <CategoryProvider>
            <EventProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="HomePage">
                    <Stack.Screen name="HomePage" component={HomePage} />
                    <Stack.Screen name="TimelinePage" component={TimelinePage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </EventProvider>
        </CategoryProvider>
      
        // <CategoryProvider>
        //     <EventProvider>
        //         <HomePage />
        //     </EventProvider>
        // </CategoryProvider>
    );
}
