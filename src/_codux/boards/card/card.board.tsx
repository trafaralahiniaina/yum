import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';
import Card_board_module from './card.board.module.scss';

export default createBoard({
    name: 'Card',
    Board: () => <Card />,
    isSnippet: true,
    environmentProps: {
        windowBackgroundColor: '#c3c0c0',
        canvasWidth: 301,
    },
});
