import React, { useEffect, useState } from 'react';
import Loading from '../basics/Loading';
import * as mongodb from '@/app/scripts/mongodbService';
import MultiSelectDropdown from '../basics/MultiSelectDropdown';
import { JSONObject } from '@/types/definations';
import { Text, View } from 'react-native';


export default function OrgUnitSelector({
    onItemSelected
}: {
    onItemSelected: (orgUnitList: JSONObject[]) => void;
}) {
    const [list, setList] = useState<JSONObject[] | null>(null);
    const [errMsg, setErrMsg] = useState('');
    const [selectedList, setSelectedList] = useState<JSONObject[]>([]);
    const [openList, setOpenList] = useState(false);

    const fetchOrgunits = async () => {
        const response = await mongodb.getData('organisationunits', {});
        if (response.status === 'success') {
            setList(response.data);
        } else {
            setErrMsg(response.message);
        }
    };

    useEffect(() => {
        fetchOrgunits();
    }, []);


    if (list === null) return <Loading />;

    return (
		<MultiSelectDropdown options={list} placeholder="O.Unit" onChange={(selectedItems) => {onItemSelected(selectedItems)}} />
    )
}
