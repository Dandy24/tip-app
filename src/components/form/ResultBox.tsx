export interface ResultBoxProps {
    result?: number
    currency: string
}

export function ResultBox(props: ResultBoxProps): JSX.Element {
    const { result, currency } = props;

    return (
        <h2>
            {result}
            {' '}
            {currency}
        </h2>
    );
}
