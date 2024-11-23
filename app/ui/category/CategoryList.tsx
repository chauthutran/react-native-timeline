import { JSONObject } from "@/types/definations";
import { useEffect, useState } from "react"
import * as mongodb from "@/app/scripts/mongodbService";
import { ScrollView, Text, View } from "react-native";
import Loading from "../basics/Loading";
import CategoryListItem from "./CategoryListItem";
import { useCategory } from "@/app/contexts/CategoryContext";
import * as Constant from "@/app/scripts/constants";


export default function CategoryList() {

    const { categories, error, processStatus } = useCategory();
    
    // const [list, setList] = useState<JSONObject | null>(null);
	const [errMsg, setErrMsg] = useState("");
    console.log(" ======= processStatus: ", processStatus);
    if (processStatus === Constant.RESPONSE_FETCH_CATEGORY_REQUEST) {
        return <Text>{Constant.RESPONSE_FETCH_CATEGORY_REQUEST}</Text>;
    }

    if( categories === null )  return (<Loading />);
    if( error !== null ) return (<Text>{error}</Text>);
    
    
    return (
        <View className="flex flex-row flex-wrap">
            {categories.map((category: JSONObject, idx: number) => (
                <CategoryListItem key={category._id} data={category} />
            ))}
        </View>
    )
}