import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className="h-[150px] p-3 w-full">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}
        <div className="flex gap-10">
          {recommendations.map((recommendation, index) => (
            <div key={index} className="mb-2 flex flex-col items-center font-bold">
              {recommendation.name}
              <img className="h-[70px] w-[150px]" alt={recommendation.name} src={recommendation.asset} />
            </div>
          ))}
        </div>
    </div>
  );
}

export default RecommendationList;