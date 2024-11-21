import { JSONObject } from '@/types/definations';
import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';


export default function MultiSelectDropdown({
    options,
    placeholder = 'Select options...',
    onChange
}: {
    options: JSONObject[];
    placeholder?: string;
    onChange?: (selected: JSONObject[]) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<JSONObject[]>([]);

    const toggleDropdown = () => setIsOpen((prev: boolean) => !prev);

    const handleOptionClick = (option: JSONObject) => {
        const alreadySelected = selectedOptions.find(
            (o: JSONObject) => o._id === option._id
        );

        if (alreadySelected) {
            const updatedOptions = selectedOptions.filter(
                (o: JSONObject) => o._id !== option._id
            );
            setSelectedOptions(updatedOptions);
            onChange?.(updatedOptions);
        } else {
            const updatedOptions = [...selectedOptions, option];
            setSelectedOptions(updatedOptions);
            onChange?.(updatedOptions);
        }
    };

    const removeSelectedItem = (option: JSONObject) => {
        const updatedOptions = selectedOptions.filter(
            (o: JSONObject) => o._id !== option._id
        );
        setSelectedOptions(updatedOptions);
        onChange?.(updatedOptions);
    };

    return (
        <View style={styles.container}>
            {/* Dropdown Trigger */}
            <TouchableOpacity
                style={[
                    styles.dropdownTrigger,
                    isOpen || selectedOptions.length > 0
                        ? styles.dropdownTriggerActive
                        : styles.dropdownTriggerInactive
                ]}
                onPress={toggleDropdown}
            >
                {/* Render selected options inside the parent View */}
                <View style={styles.selectedItemsContainer}>
                    {selectedOptions.length > 0 ? (
                        selectedOptions.map((option: JSONObject) => (
                            <View key={option._id} style={styles.selectedItem}>
                                <Text style={styles.selectedItemText}>
                                    {option.name}
                                </Text>
                                <TouchableOpacity
                                    onPress={() => removeSelectedItem(option)}
                                >
                                    <Text style={styles.removeItemText}>✕</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )}
                </View>
            </TouchableOpacity>

            {/* Dropdown Options */}
            <Modal visible={isOpen} transparent animationType="fade">
                <TouchableOpacity
                    style={styles.modalOverlay}
                    activeOpacity={1}
                    onPress={() => setIsOpen(false)}
                >
                    <View style={styles.dropdown}>
                        <FlatList<JSONObject>
                            data={options}
                            keyExtractor={(item: JSONObject) => item._id}
                            renderItem={({ item }: { item: JSONObject }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        selectedOptions.find(
                                            (o: JSONObject) => o._id === item._id
                                        )
                                            ? styles.optionSelected
                                            : null
                                    ]}
                                    onPress={() => handleOptionClick(item)}
                                >
                                    <Text style={styles.optionText}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    dropdownTrigger: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    dropdownTriggerActive: {
        borderColor: '#007BFF'
    },
    dropdownTriggerInactive: {
        borderColor: '#ccc'
    },
    selectedItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5
    },
    selectedItem: {
        backgroundColor: '#007BFF',
        padding: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 5
    },
    selectedItemText: {
        color: '#fff',
        marginRight: 5
    },
    removeItemText: {
        color: '#ff4a4a',
        fontWeight: 'bold'
    },
    placeholder: {
        color: '#555',
        fontStyle: 'italic'
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    dropdown: {
        // width: '80%',
        // maxHeight: '60%',
        // backgroundColor: '#fff',
        // borderRadius: 10,
        // padding: 10
        backgroundColor: '#fff',
        borderRadius: 10,
        width: '80%',
        maxHeight: '60%',
        padding: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5
    },
    option: {
        // margin: 4,
        // padding: 5
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    optionSelected: { backgroundColor: '#007BFF' },
    optionText: {
         color: '#000'
    }
});