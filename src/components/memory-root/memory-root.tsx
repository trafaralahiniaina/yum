import classNames from 'classnames';
import styles from './memory-root.module.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { TopDeal } from '../top-deal/top-deal';

export interface MemoryRootProps {
    className?: string;
}

export const MemoryRoot = ({ className }: MemoryRootProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <TopDeal />
            <Footer />
        </div>
    );
};
