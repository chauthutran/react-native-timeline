import { JSONObject } from "@/types/definations";
import { useState } from "react"
import { Text, View } from "react-native";
import { Checkbox } from "react-native-paper";


export default function CategoryListItem({data}: {data: JSONObject}) {
    const [checked, setChecked] = useState(true);

    return (
        <>
           <View className="flex flex-row items-center mr-3">
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color={data.color} // Set color for the checkbox when checked
                    uncheckedColor="#6b7280" // Color of unchecked box
                  />
                <Text className="">{data.name}</Text>
            </View>
        </>
    )
}