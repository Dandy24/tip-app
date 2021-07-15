import { Statistic } from 'antd';

export interface ResultBoxProps {
    result: number
    currency: string
}

export function ResultBox(props: ResultBoxProps): JSX.Element {
    const { result, currency } = props;

    return (
        <Statistic title="Celková cena včetně dýška" value={`${result} ${currency}`} />
    );
}
