import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Features from './Features';

describe('Features tests', () => {
  const mockFeatures = ['Feature A', 'Feature B', 'Feature C'];
  const mockOnFeatureChange = jest.fn();

  beforeEach(() => {
    mockOnFeatureChange.mockClear();
  });

  it('Should render properly', () => {
    render(<Features features={mockFeatures} selectedFeatures={[]} onFeatureChange={mockOnFeatureChange} />);
    expect(screen.getByText('Funcionalidades:')).toBeInTheDocument();
    expect(screen.getByText('Nenhuma feature selecionada')).toBeInTheDocument();
  });

  it('Should open and close the dropdown with a click', () => {
    render(<Features features={mockFeatures} selectedFeatures={[]} onFeatureChange={mockOnFeatureChange} />);
    const titleElement = screen.getByText('Funcionalidades:');
    fireEvent.click(titleElement);
    expect(screen.getByText('Feature A')).toBeInTheDocument();
    fireEvent.click(titleElement);
    expect(screen.queryByText('Feature A')).not.toBeInTheDocument();
  });

  it('Should a feature and call onFeatureChange', () => {
    render(<Features features={mockFeatures} selectedFeatures={[]} onFeatureChange={mockOnFeatureChange} />);

    fireEvent.click(screen.getByText('Funcionalidades:'));
    
    const featureACheckbox = screen.getByLabelText('Feature A');
    fireEvent.click(featureACheckbox);

    expect(featureACheckbox).toBeChecked();
    expect(mockOnFeatureChange).toHaveBeenCalledWith(['Feature A']);

    fireEvent.click(featureACheckbox);
    expect(featureACheckbox).not.toBeChecked();
    expect(mockOnFeatureChange).toHaveBeenCalledWith([]);
  });

  it('Should display selected features when the dropdown is closed', () => {
    const initialSelectedFeatures = ['Feature A', 'Feature C'];
    render(<Features features={mockFeatures} selectedFeatures={initialSelectedFeatures} onFeatureChange={mockOnFeatureChange} />);

    expect(screen.queryByText('Nenhuma feature selecionada')).not.toBeInTheDocument();
    expect(screen.getByText('Feature A')).toBeInTheDocument();
    expect(screen.getByText('Feature C')).toBeInTheDocument();
    expect(screen.queryByText('Feature B')).not.toBeInTheDocument();
  });

  it('Should deselect feature if the tag is clicked', () => {
    const initialSelectedFeatures = ['Feature A', 'Feature C'];
    render(<Features features={mockFeatures} selectedFeatures={initialSelectedFeatures} onFeatureChange={mockOnFeatureChange} />);

    expect(screen.getByText('Feature A')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Feature A'));
    expect(screen.queryByText('Feature A')).not.toBeInTheDocument();
  });
});
