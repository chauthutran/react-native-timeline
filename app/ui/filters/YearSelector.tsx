import { JSONObject } from "@/types/definations";
import MultiSelectDropdown from "../basics/MultiSelectDropdown";

export default function YearSelector({ onItemSelected }: { onItemSelected: (years: JSONObject[]) => void }) {

    const generateYears = () => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 10;
        const years = [];
        for (let year = startYear; year <= currentYear; year++) {
            years.push({ _id: year.toString(), name: year.toString() });
        }
		
        return years.reverse();
    }

    
    const yearList = generateYears();

    return (
        <MultiSelectDropdown options={yearList} placeholder="Years" onChange={(selectedItems) => {onItemSelected(selectedItems)}} />
    )
}