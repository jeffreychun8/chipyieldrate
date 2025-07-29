import React from 'react';
import { Eye } from 'lucide-react';

const DieDetails = ({ selectedDie }) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Die Analysis
            </h3>
            
            {/* Die details content */}
        </div>
    );
};

export default DieDetails;
