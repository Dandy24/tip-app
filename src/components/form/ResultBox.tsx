import { Statistic } from 'antd';

export interface ResultBoxProps {
    result?: number
    currency?: string
}

export function ResultBox(props: ResultBoxProps): JSX.Element {
    const { result, currency } = props;

    if (result && currency) {
        return (
            <Statistic title="Celková cena včetně dýška" value={`${result} ${currency}`} />
        );
    }

    return (
        <Statistic title="Celková cena včetně dýška" value="0 Kč" />
    );
}
