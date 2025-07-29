import React, { useState } from 'react';
import ControlPanel from './components/ControlPanel.js';
import StatsDashboard from './components/StatsDashboard.js';
import WaferMap from './components/WaferMap.js';
import DieDetails from './components/DieDetails.js';
import ParameterSelector from './components/ParameterSelector.js';

const App = () => {
    // Main state management
    const [data, setData] = useState(null);
    const [predictions, setPredictions] = useState(null);
    const [selectedDie, setSelectedDie] = useState(null);
    const [viewMode, setViewMode] = useState('yield');
    // ... other state variables

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
            {/* Header */}
            <div className="text-center mb-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                    Industrial Wafer Yield Analysis System
                </h1>
            </div>

            {/* Control Panel */}
            <ControlPanel 
                onDataLoad={setData}
                onTrain={handleTraining}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
            />

            {/* Statistics */}
            <StatsDashboard stats={stats} />

            {/* Main Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                <div className="xl:col-span-2">
                    <WaferMap 
                        data={data}
                        predictions={predictions}
                        viewMode={viewMode}
                        onDieClick={setSelectedDie}
                    />
                </div>
                
                <div className="xl:col-span-2 space-y-6">
                    <ParameterSelector 
                        data={data}
                        selectedParameters={selectedParameters}
                        onParameterChange={setSelectedParameters}
                    />
                    
                    <DieDetails 
                        selectedDie={selectedDie}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
