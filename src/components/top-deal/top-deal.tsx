import classNames from 'classnames';
import styles from './top-deal.module.scss';
import { Card } from '../card/card';

export interface TopDealProps {
    className?: string;
}

export const TopDeal = ({ className }: TopDealProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.conteiner}>
                <h2>Today&apos;s Top Deals</h2>
                <div className={styles.cards}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
