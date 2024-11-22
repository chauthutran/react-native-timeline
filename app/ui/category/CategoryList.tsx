import { JSONObject } from "@/types/definations";
import { useEffect, useState } from "react"
import * as mongodb from "@/app/scripts/mongodbService";
import { ScrollView, Text, View } from "react-native";
import Loading from "../basics/Loading";
import CategoryListItem from "./CategoryListItem";


export default function CategoryList() {

    const [list, setList] = useState<JSONObject | null>(null);
	const [errMsg, setErrMsg] = useState("");

    const fetchCategories = async() => {
        const response = await mongodb.getData("categories", {});
		if (response.status === "success") {
			setList(response.data);
		}
		else {
			setErrMsg(response.message);
		}
    }
    
    useEffect(() => {
        fetchCategories();
    }, []);

    
    if( list === null ) 
        return (<Loading />);

    return (
        // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        // <ScrollView>
            <View className="flex flex-row flex-wrap">
                {list.map((category: JSONObject, idx: number) => (
                    <CategoryListItem key={category._id} data={category} />
                ))}
            </View>
        // </ScrollView>
    )
}