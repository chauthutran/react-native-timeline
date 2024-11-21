import { StyleSheet, Text, View } from "react-native";
import HomePage from "./ui/HomePage";
import "./../global.css";

export default function Page() {
  return (
    <View className="w-full">
        <HomePage />
    </View>
  );
}