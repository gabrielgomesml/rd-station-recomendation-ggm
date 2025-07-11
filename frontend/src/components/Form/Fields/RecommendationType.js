import React from 'react';
import Checkbox from '../../shared/Checkbox';

function RecommendationType({ onRecommendationTypeChange }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2 pb-4 border-b border-black-300">Tipo de Recomendação:</h2>
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="SingleProduct"
            onChange={() => onRecommendationTypeChange('SingleProduct')}
            className="mr-2"
          />
          <label htmlFor="SingleProduct" className="mr-4">Produto Único</label>
        </div>
        <div className="flex items-center">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="MultipleProducts"
            onChange={() => onRecommendationTypeChange('MultipleProducts')}
            className="mr-2"
          />
          <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
        </div>
        <div className="flex items-center">
          <Checkbox
            type="radio"
            name="recommendationType"
            value="BetterProduct"
            onChange={() => onRecommendationTypeChange('BetterProduct')}
            className="mr-2"
          />
          <label htmlFor="BetterProduct">Melhor Produto</label>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
