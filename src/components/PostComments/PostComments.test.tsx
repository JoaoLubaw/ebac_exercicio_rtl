import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar um comentario', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('Commentarea'), {
            target: {
                value: 'testando seu code e seu batcarro, vrum vrum.'
            }
        })
        fireEvent.click(screen.getByTestId('CommentButton'))
        expect(screen.getByText('testando seu code e seu batcarro, vrum vrum.')).toBeInTheDocument();
    })
});