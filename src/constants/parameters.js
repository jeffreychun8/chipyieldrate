export const parameterCategories = {
    'DC Parameters': [
        { name: 'VTH_25C', unit: 'V', spec: [0.5, 1.2], description: 'Threshold Voltage at 25°C' },
        { name: 'VTH_85C', unit: 'V', spec: [0.4, 1.3], description: 'Threshold Voltage at 85°C' },
        // ... all DC parameters
    ],
    'AC Parameters': [
        { name: 'Qg', unit: 'nC', spec: [0, 100], description: 'Gate Charge' },
        // ... all AC parameters
    ],
    // ... other categories
};

export const binCategories = {
    'BIN_1': { label: 'Prime', color: '#22c55e', description: 'All specs pass, premium grade' },
    'BIN_2': { label: 'Standard', color: '#3b82f6', description: 'Good performance, standard grade' },
    // ... all bin categories
};
