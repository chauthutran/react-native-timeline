import { JSONObject } from "@/types/definations";
import { useEvent } from "../contexts/EventContext";
import Divider from "./basics/Divider";
import CategoryList from "./category/CategoryList";
import FilterPage from "./filters/FilterPage";
import TimelinePage from "./timeline/TimelinePage";


export default function HomePage() {
    
    const { events, fetchEvents } = useEvent();

    const fetchData = async(filterData: JSONObject) => {
        
        const orgunitIds = filterData.orgUnits.map((item: JSONObject) => ({ "$oid": item._id}) );
        const eventDateRanges = filterData.years.map((year: JSONObject) => (
                                                    {
                                                        "eventDate": {
                                                            "$gte": {"$date":`${year._id}-01-01T00:00:00Z`},
                                                            "$lte": {"$date":`${year._id}-12-31T00:00:00Z`}
                                                        }
                                                    }));
        const payload = {
            "orgunitId": { "$in": orgunitIds },
            "$or": eventDateRanges,
            "SRHRJNeed": { "$in": filterData.needs.map((item: JSONObject) => item._id) }
        };
        
        await fetchEvents(payload);
    }
    
    
    return (
        <>
            <CategoryList />
            <Divider />
{/*             
            <TimelinePage events={eventList} /> */}
            
            {events === null && <FilterPage onApplyFilters={(filterData: JSONObject) => fetchData(filterData) } /> }
                
            {events !== null && <TimelinePage events={events!}/> }
        </>
    )
}