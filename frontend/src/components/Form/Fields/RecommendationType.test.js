import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecommendationType from './RecommendationType';

describe('RecommendationType tests', () => {
  const mockOnRecommendationTypeChange = jest.fn();

  beforeEach(() => {
    mockOnRecommendationTypeChange.mockClear();
  });

  it('Should render properly', () => {
    render(<RecommendationType onRecommendationTypeChange={mockOnRecommendationTypeChange} />);

    expect(screen.getByText('Tipo de Recomendação:')).toBeInTheDocument();
    expect(screen.getByText('Produto Único')).toBeInTheDocument();
    expect(screen.getByText('Múltiplos Produtos')).toBeInTheDocument();
    expect(screen.getByText('Melhor Produto')).toBeInTheDocument();
  });

  it('Should display tooltip on hover', () => {
    render(<RecommendationType onRecommendationTypeChange={mockOnRecommendationTypeChange} />);
    const singleProductInfoIcon = screen.getByTestId('info-icon');
    const singleProductTooltipText = 'Recomenda o produto que mais se encaixa nas suas preferências e funcionalidades.';
    fireEvent.mouseEnter(singleProductInfoIcon);
    expect(screen.getByText(singleProductTooltipText)).toBeVisible();
  });
});