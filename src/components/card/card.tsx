import classNames from 'classnames';
import styles from './card.module.scss';
import Card_board_module from '../../_codux/boards/card/card.board.module.scss';
import CoverPng from '../../assets/cover.png';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl = CoverPng, children = "Super Mine Sao", className }: CardProps) => {
    return (
        <div className={styles.root}>
            <img src={imageUrl} alt="" className={styles.image} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
