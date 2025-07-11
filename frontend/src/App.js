import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations ] = useState([])

  return (
    <div className="bg-[radial-gradient(48.5%_59.31%_at_50%_93.13%,_#75e7eb_0,_#d6ffff_100%)] min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 flex flex-col gap-8">
        <h1 className="text-3xl font-bold mb-8">Recomendador de Produtos RD Station</h1>
        <div className="col-span-2 mb-4">
          <p className="text-lg">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode encontrar uma variedade de produtos da RD Station, cada um projetado para atender às necessidades específicas do seu negócio. De CRM a Marketing, de Conversas a Inteligência Artificial, temos uma solução para ajudar você a alcançar seus objetivos. Use o formulário abaixo para selecionar suas preferências e funcionalidades desejadas e receba recomendações personalizadas de produtos que melhor atendam às suas necessidades.
          </p>
        </div>
        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
        <div>
          <Form setRecommendations={setRecommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
