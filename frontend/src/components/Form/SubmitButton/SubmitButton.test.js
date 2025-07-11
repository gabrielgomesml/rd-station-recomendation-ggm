import React from 'react';
import SubmitButton from './SubmitButton';
import {render, screen} from '@testing-library/react';

describe("SubmitButton tests", () => {
  it('Should render the component properly', () => {
    const testText = 'testText'
    render(<SubmitButton text={testText} />)

    const buttonElement = screen.getByText(testText);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(testText);
  })
})