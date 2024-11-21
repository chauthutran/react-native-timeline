import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import OrgUnitSelector from './OrgUnitSelector';
import { JSONObject } from '@/types/definations';
import YearSelector from './YearSelector';
import NeedSelector from './NeedSelector';

const FilterPage = ({
    onApplyFilters
}: {
    onApplyFilters: (filterData: JSONObject) => void;
}) => {
    const [selectedOrgunits, setSelectedOrgunits] = useState<JSONObject[]>([]);
    const [selectedYears, setSelectedYears] = useState<JSONObject[]>([]);
    const [selectedNeeds, setSelectedNeeds] = useState<JSONObject[]>([]);

    const handleApplyFilters = () => {
        onApplyFilters({
            orgUnits: selectedOrgunits,
            years: selectedYears,
            SRHRJNeeds: selectedNeeds
        });
    };

    return (
        <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={true}  // To always show the scrollbar
	  scrollEnabled ={true}
    >
		<Text >More content ...</Text>
		
      {/* Orgunit Filter */}
      <Text style={styles.filterLabel}>Select Orgunit</Text>
      <OrgUnitSelector
        onItemSelected={(selectedItems: JSONObject[]) =>
          setSelectedOrgunits(selectedItems)
        }
      />

      {/* Year Filter */}
      <Text style={styles.filterLabel}>Select Year</Text>
      <YearSelector
        onItemSelected={(selectedItems: JSONObject[]) =>
          setSelectedYears(selectedItems)
        }
      />

      {/* SRHRJNeed Filter */}
      <Text style={styles.filterLabel}>Select SRHRJ Need</Text>
      <NeedSelector
        onItemSelected={(selectedItems: JSONObject[]) =>
          setSelectedNeeds(selectedItems)
        }
      />

      {/* Apply Filters Button */}
      <Button title="Apply Filters" onPress={handleApplyFilters} />
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    }, extraContent: {
		marginBottom: 10,
		fontSize: 16,
	  },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    filterLabel: {
        fontSize: 16,
        marginBottom: 5
    },
    picker: {
        height: 50,
        width: '100%',
        marginBottom: 20
    }
});

export default FilterPage;
