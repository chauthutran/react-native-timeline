"use client";

import { JSONObject } from '@/types/definations';
import { createContext, useContext, useState, ReactNode } from 'react';
import * as mongodb from "@/app/scripts/mongodbService";
import * as Constant from "@/app/scripts/constants";

// filterData : 
//     { 
//        "orgunitId": { "$in": [ { "$oid": "67316f1d227e4bbd81126543" } ] } ,
//        "$or": [
//        {
//          "eventDate": {
//            "$gte": {"$date":"2024-01-01T00:00:00Z"},
//            "$lte": {"$date":"2024-12-31T23:59:59Z"}
//          }
//        },
//        {
//          "eventDate": {
//            "$gte": {"$date":"2022-01-01T00:00:00Z"},
//            "$lte": {"$date":"2022-12-31T23:59:59Z"}
//          }
//        }
//      ],
//        "SRHRJNeed": { "$in": [ "Access to HIV prevention", "Maternal healthcare" ] }
//    }


interface EventContextProps {
	events: JSONObject[]| null;
	fetchEvents: ( filterData: JSONObject) => Promise<void>;
    
	processStatus: string;
	error: string | null;
}

const EventContext  = createContext<EventContextProps>({
	events: null,
	fetchEvents: async(filterData: JSONObject) => {},

	processStatus: "",
	error: null
});

export const useEvent = (): EventContextProps => {
	const context = useContext(EventContext);

	if (!context) {
	  throw new Error('useEvent must be used within an EventProvider');
	}
	return context;
};

export const EventProvider = ({ children }: { children: ReactNode }) => {
	const [events, setEvents] = useState<JSONObject[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [processStatus, setProcessStatus] = useState<string>("");


	const fetchEvents = async(filterData: JSONObject) => {
		setProcessStatus(Constant.RESPONSE_FETCH_EVENT_REQUEST);
		setError(null);
        
        const response = await mongodb.getData("events", filterData);
		if (response.status === "success") {
			setEvents(response.data);
			setProcessStatus(Constant.RESPONSE_FETCH_EVENT_SUCCESS);
		}
		else {
			setProcessStatus(Constant.RESPONSE_FETCH_EVENT_FAILURE);
			setError(response.message);
		}
	};
	
	return (
		<EventContext.Provider value={{ events, fetchEvents, processStatus, error }}>
			{children}
		</EventContext.Provider>
	);
};