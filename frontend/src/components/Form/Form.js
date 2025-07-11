// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({setRecommendations}) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const {getRecommendations} = useRecommendations(products);

  const handleSubmit = (e) => {
    if (formData.selectedRecommendationType === '') {
      alert('Selecione o tipo de recomendação.')
    } else if (formData.selectedFeatures.length + formData.selectedPreferences.length === 0) {
      alert('Selecione pelo menos um atributo: Preferências e/ou Funcionalidades.')
    }
    e.preventDefault();
    const dataRecommendations = getRecommendations(formData);
    setRecommendations(dataRecommendations);
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-full min-h-[300px] mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <div className="flex flex-col gap-4">
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
}

export default Form;
