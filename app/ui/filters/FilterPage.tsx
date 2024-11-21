import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import OrgUnitSelector from './OrgUnitSelector';
import { JSONObject } from '@/types/definations';
import YearSelector from './YearSelector';
import NeedSelector from './NeedSelector';

// Example orgunit, year, and SRHRJNeed data.

const yearList = [
  { label: '2023', value: '2023' },
  { label: '2024', value: '2024' },
  { label: '2025', value: '2025' },
];

const SRHRJNeedList = [
  { label: 'Access to safe abortion services', value: 'Access to safe abortion services' },
  { label: 'Comprehensive sexual education', value: 'Comprehensive sexual education' },
  { label: 'Youth-friendly healthcare services', value: 'Youth-friendly healthcare services' },
  { label: 'Family planning awareness', value: 'Family planning awareness' },
  // Add more as needed
];

const FilterPage = ({onApplyFilters}: {onApplyFilters: (filterData: JSONObject) => void}) => {
	
  const [selectedOrgunits, setSelectedOrgunits] = useState<JSONObject[]>([]);
  const [selectedYears, setSelectedYears] = useState<JSONObject[]>([]);
  const [selectedNeeds, setSelectedNeeds] = useState<JSONObject[]>([]);

  const handleApplyFilters = () => {
	onApplyFilters({orgUnits: selectedOrgunits, years: selectedYears, SRHRJNeeds: selectedNeeds});
 };

  return (
    <ScrollView style={styles.container}>
      {/* Orgunit Filter */}
      <Text style={styles.filterLabel}>Select Orgunit</Text>
      <OrgUnitSelector onItemSelected={(
          selectedItems: JSONObject[]
        ) => setSelectedOrgunits(selectedItems)}
      />

      {/* Year Filter */}
      <Text style={styles.filterLabel}>Select Year</Text>
      <YearSelector
        onItemSelected={(
          selectedItems: JSONObject[]
        ) => setSelectedYears(selectedItems)}
      />

      {/* SRHRJNeed Filter */}
      <Text style={styles.filterLabel}>Select SRHRJ Need</Text>
      <NeedSelector onItemSelected={(
          selectedItems: JSONObject[]
        ) => setSelectedNeeds(selectedItems)} />

      {/* Apply Filters Button */}
      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default FilterPage;
