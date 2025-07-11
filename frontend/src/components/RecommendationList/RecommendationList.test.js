import React from 'react';
import RecommendationList from './RecommendationList';
import {render, screen} from '@testing-library/react';
import mockProducts from './../../mocks/mockProducts';

describe("RecommendationList tests", () => {
  it('Should render the component properly', () => {
    render(<RecommendationList recommendations={[]} />)

    expect(screen.getByText('Lista de Recomendações:')).toBeInTheDocument();
    expect(screen.getByText('Nenhuma recomendação encontrada.')).toBeInTheDocument();
  })

  it('Should render products recomendations when provided', () => {
    render(<RecommendationList recommendations={mockProducts} />)

    expect(screen.getByText(mockProducts[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[2].name)).toBeInTheDocument();
    expect(screen.getByText(mockProducts[3].name)).toBeInTheDocument();
  })
})