import { JSONObject } from '@/types/definations';
import React, { useEffect, useState } from 'react';
import MultiSelectDropdown from '../basics/MultiSelectDropdown';

const list = [
    {"name": "All", "_id": "All"},
    {"name": "Promoting sexual and gender diversity", "_id": "Promoting sexual and gender diversity"},
    {"name": "Comprehensive sexuality education to young people", "_id": "Comprehensive sexuality education to young people"},
    {"name": "Preventing sexual and gender-based violence", "_id": "Preventing sexual and gender-based violence"},
    {"name": "Access to safe and legal abortion", "_id": "Access to safe and legal abortion"},
    {"name": "Access to contraception", "_id": "Access to contraception"},
    {"name": "Promoting gender equality", "_id": "Promoting gender equality"},
    {"name": "Other", "_id": "Other"}
];

export default function NeedSelector({
    onItemSelected
}: {
    onItemSelected: (needs: JSONObject[]) => void;
}) {

    return (
		<MultiSelectDropdown options={list} placeholder="Need" onChange={(selectedItems) => {onItemSelected(selectedItems)}} />
    );
}
