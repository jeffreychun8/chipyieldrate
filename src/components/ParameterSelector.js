import React from 'react';
import { Settings } from 'lucide-react';
import { parameterCategories } from '../constants/parameters.js';

const ParameterSelector = ({ data, selectedParameters, onParameterChange }) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                ML Training Parameters
            </h3>
            
            {/* Parameter selection interface */}
        </div>
    );
};

export default ParameterSelector;
