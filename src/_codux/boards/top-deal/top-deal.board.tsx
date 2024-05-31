import { createBoard } from '@wixc3/react-board';
import { TopDeal } from '../../../components/top-deal/top-deal';

export default createBoard({
    name: 'TopDeal',
    Board: () => <TopDeal />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: { left: 0, right: 0, top: 231 },
        windowWidth: 1024,
        windowHeight: 768,
    },
});
