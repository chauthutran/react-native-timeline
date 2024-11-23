"use client";

import { JSONObject } from '@/types/definations';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import * as mongodb from "@/app/scripts/mongodbService";
import * as Constant from "@/app/scripts/constants";

interface CategoryContextProps {
	categories: JSONObject[]| null;
    
	processStatus: string;
	error: string | null;
}

const CategoryContext  = createContext<CategoryContextProps>({
	categories: null,

	processStatus: "",
	error: null
});

export const useCategory = (): CategoryContextProps => {
	const context = useContext(CategoryContext);

	if (!context) {
	  throw new Error('useCategory must be used within an CategoryProvider');
	}
	return context;
};

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
	const [categories, setCategories] = useState<JSONObject[] | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [processStatus, setProcessStatus] = useState<string>("");


	const fetchCategories = async() => {
		setProcessStatus(Constant.RESPONSE_FETCH_CATEGORY_REQUEST);
		setError(null);
        
        const response = await mongodb.getData("categories", {});
		if (response.status === "success") {
			setCategories(response.data);
			setProcessStatus(Constant.RESPONSE_FETCH_CATEGORY_SUCCESS);
		}
		else {
			setProcessStatus(Constant.RESPONSE_FETCH_CATEGORY_FAILURE);
			setError(response.message);
		}
	};
	
	useEffect(() => {
		if( categories === null ) {
			fetchCategories();
		}
	}, [])
	
	return (
		<CategoryContext.Provider value={{ categories, processStatus, error }}>
			{children}
		</CategoryContext.Provider>
	);
};