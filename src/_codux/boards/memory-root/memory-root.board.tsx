import { createBoard } from '@wixc3/react-board';
import { MemoryRoot } from '../../../components/memory-root/memory-root';

export default createBoard({
    name: 'MemoryRoot',
    Board: () => <MemoryRoot />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            top: 0,
            left: 0,
            right: 0,
        },
    },
});
