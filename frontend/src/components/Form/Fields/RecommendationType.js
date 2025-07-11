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
          <div className="group ml-2 relative cursor-help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-700 text-white p-2 rounded-md shadow-lg text-sm hidden group-hover:block z-10">
              <p>Recomenda o produto que mais se encaixa nas suas preferências e funcionalidades.</p>
            </div>
          </div>
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
          <div className="group ml-2 relative cursor-help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-700 text-white p-2 rounded-md shadow-lg text-sm hidden group-hover:block z-10">
              <p>Recomenda produtos que se encaixam em pelo menos uma preferência ou funcionalidade.</p>
            </div>
          </div>
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
          <div className="group ml-2 relative cursor-help">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-gray-700 text-white p-2 rounded-md shadow-lg text-sm hidden group-hover:block z-10">
              <p>Recomenda o produto que se encaixa em todas suas preferências e funcionalidades.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationType;
