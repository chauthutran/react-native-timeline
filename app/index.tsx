import { StyleSheet, Text, View } from 'react-native';
import HomePage from './ui/HomePage';
import './../global.css';
import { EventProvider } from './contexts/EventContext';
import { CategoryProvider } from './contexts/CategoryContext';

export default function Page() {
    return (
        <CategoryProvider>
            <EventProvider>
                <HomePage />
            </EventProvider>
        </CategoryProvider>
    );
}
