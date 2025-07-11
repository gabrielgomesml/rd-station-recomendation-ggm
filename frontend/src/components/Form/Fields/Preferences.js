// Preferences.js

import React, { useState } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({
  preferences,
  selectedPreferences = [],
  onPreferenceChange,
}) {
  const [currentPreferences, setCurrentPreferences] = useState(selectedPreferences)
  const [hideContent, setHideContent] = useState(true);

  const handlePreferenceChange = (preference) => {
    const updatedPreferences = currentPreferences.includes(preference)
      ? currentPreferences.filter((pref) => pref !== preference)
      : [...currentPreferences, preference];

    setCurrentPreferences(updatedPreferences);
    onPreferenceChange(updatedPreferences);
  };

  const handleHideContent = () => {
    setHideContent(!hideContent);
  };

  return (
    <div className="mb-4">
      <h2 
        className="text-lg font-bold mb-2 pb-2 border-b border-black-300 flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={() => handleHideContent()}
        >
        Preferências:
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 text-black-500 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </h2>
      {!hideContent && (
      <div className="h-48 overflow-y-auto p-2 border border-gray-200 rounded">
          <ul>
          {preferences.map((preference, index) => (
            <li key={index} className="mb-2">
              <Checkbox
                value={preference}
                checked={currentPreferences.includes(preference)}
                onChange={() => handlePreferenceChange(preference)}
                className="text-blue-500"
              >
                {preference}
              </Checkbox>
            </li>
          ))}
        </ul>
      </div>
      )}
      {hideContent && currentPreferences.length === 0 && (
      <div className="w-full h-[90%] flex justify-center items-center">
        <p>Nenhuma preferência selecionada</p>
      </div>)}
      {hideContent && currentPreferences.length > 0 && (
      <div className="h-48 overflow-y-auto flex flex-col gap-2">
        {currentPreferences.map((preference, index) => (
          <div key={index} className="bg-blue-300 hover:bg-blue-400 px-3 py-2 rounded-full text-sm cursor-pointer" onClick={() => handlePreferenceChange(preference)}>
            <span>{preference}</span>
          </div>
        ))}
      </div>)}
    </div>
  );
}

export default Preferences;
