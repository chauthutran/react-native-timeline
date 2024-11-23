import { JSONObject } from "@/types/definations";
import { useEvent } from "../contexts/EventContext";
import Divider from "./basics/Divider";
import CategoryList from "./category/CategoryList";
import FilterPage from "./filters/FilterPage";
import TimelinePage from "./timeline/TimelinePage";


const eventList = [
    {
        "_id": "67317166227e4bbd8112656a",
        "orgunitId": "67316f1d227e4bbd81126543",
        "categoryId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-11-11T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Conducted comprehensive research on gender equality policies."
    },
    {
        "_id": "67317166227e4bbd8112656b",
        "orgunitId": "67316f1d227e4bbd81126543",
        "categoryId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-11-12T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Analyzed the impact of proposed policies on women's rights."
    },
    {
        "_id": "67317166227e4bbd8112656c",
        "orgunitId": "67316f1d227e4bbd81126543",
        "categoryId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-11-13T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Published a policy report on the importance of sexual and reproductive health."
    },
    {
        "_id": "67317166227e4bbd8112656d",
        "orgunitId": "67316f1d227e4bbd81126544",
        "categoryId": "67316f1d227e4bbd81126544",
        "eventDate": "2024-11-14T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Engaged with lawmakers to promote gender equality laws."
    },
    {
        "_id": "67317166227e4bbd8112656e",
        "orgunitId": "67316f1d227e4bbd81126544",
        "categoryId": "67316f1d227e4bbd81126544",
        "eventDate": "2024-11-15T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Provided testimony at a parliamentary session on women’s rights."
    },
    {
        "_id": "67317166227e4bbd8112656f",
        "orgunitId": "67316f1d227e4bbd81126544",
        "categoryId": "67316f1d227e4bbd81126544",
        "eventDate": "2024-11-16T14:00:00.000Z",
        "completedStatus": "Completed",
        "SRHRJNeed": "Promoting sexual and gender diversity",
        "brief": "Supported advocacy efforts for the ratification of international gender equality treaties."
    },
    {
        "_id": "673172cb227e4bbd81126575",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-01-15T14:00:00.000Z",
        "level": "National",
        "advocacyWinType": "New national/sub-national strategy",
        "brief": "A national strategy for gender equality was proposed but faced significant opposition in the parliament."
    },
    {
        "_id": "673172cb227e4bbd81126576",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-01-25T14:00:00.000Z",
        "level": "Regional",
        "advocacyWinType": "New national/sub-national legislation",
        "brief": "A proposed regional law for sexual health education was delayed due to political disagreements."
    },
    {
        "_id": "673172cb227e4bbd81126577",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-02-10T14:00:00.000Z",
        "level": "Global",
        "advocacyWinType": "MoH official guidelines approval",
        "brief": "Global guidelines for gender-based violence prevention were proposed but lacked sufficient support."
    },
    {
        "_id": "673172cb227e4bbd81126578",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-02-20T14:00:00.000Z",
        "level": "Sub-national",
        "advocacyWinType": "National development plan (if the plan includes positive change for SRHR as a result of MA advocacy)",
        "brief": "A proposed sub-national development plan to include reproductive health services was rejected."
    },
    {
        "_id": "673172cb227e4bbd81126579",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-03-05T14:00:00.000Z",
        "level": "National",
        "advocacyWinType": "Inclusion of a specific medication on the Essential Medicines List",
        "brief": "A national committee voted against the inclusion of a key contraceptive method in the Essential Medicines List."
    },
    {
        "_id": "673172cb227e4bbd8112657a",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-03-18T14:00:00.000Z",
        "level": "Regional",
        "advocacyWinType": "Court decision",
        "brief": "A regional court ruled against a policy protecting reproductive rights, citing legal ambiguities."
    },
    {
        "_id": "673172cb227e4bbd8112657b",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-04-01T14:00:00.000Z",
        "level": "Global",
        "advocacyWinType": "Approval of new or revised CSE curriculum or curricular guidelines",
        "brief": "International efforts to revise Comprehensive Sexuality Education (CSE) guidelines faced a significant setback after countries withdrew support."
    },
    {
        "_id": "673172cb227e4bbd8112657c",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-04-12T14:00:00.000Z",
        "level": "National",
        "advocacyWinType": "New or revised policy / protocol",
        "brief": "A revised national health policy did not receive the required parliamentary approval, delaying its implementation."
    },
    {
        "_id": "673172cb227e4bbd8112657d",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-05-03T14:00:00.000Z",
        "level": "Sub-national",
        "advocacyWinType": "National (or subnational) plan for a SRHR related issue",
        "brief": "A regional health strategy that included sexual and reproductive health rights was temporarily halted."
    },
    {
        "_id": "673172cb227e4bbd8112657e",
        "categoryId": "67316f1d227e4bbd81126544",
        "orgunitId": "67316f1d227e4bbd81126543",
        "eventDate": "2024-05-15T14:00:00.000Z",
        "level": "Global",
        "advocacyWinType": "Financial appropriation",
        "brief": "A proposed global fund for SRHR was blocked, halting financial support for key programs."
    }];
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
            
            <TimelinePage events={eventList} />
            
            {/* {events === null && <FilterPage onApplyFilters={(filterData: JSONObject) => fetchData(filterData) } /> }
                
            {events !== null && <TimelinePage events={events!}/> } */}
        </>
    )
}