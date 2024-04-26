import { render, screen } from "@testing-library/react";
import { Button } from '.';

describe('<Button />', () => {
    test('should render the button with the text "Load more"', () => {
        render(<Button text="Load more" />);

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        
        expect(button).toBeInTheDocument();
    });

    test('should call function on button click"', () => {

        // criando um mock simples
        const fn = jest.fn();

        render(<Button text="Load more" onClick={fn} />);

        const button = screen.getByRole('button', { name: /load more/i });

    });
});