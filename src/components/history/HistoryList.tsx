import { Divider } from 'antd';
import { useEffect, useState } from 'react';
import { HistoryItem } from './HistoryItem';

export interface HistoryListProps{
    calculated : boolean,
    setCalculated: (arg0: boolean) => void
}

export function HistoryList(props: HistoryListProps): JSX.Element {
    const { calculated, setCalculated } = props;

    const tips = [
        {
            id: 1,
            overallAmount: 400,
            quality: 'Špatná',
            peopleNo: 3,
        },
        {
            id: 2,
            overallAmount: 520,
            quality: 'Dobrá',
            peopleNo: 2,
        },
        {
            id: 3,
            overallAmount: 765,
            quality: 'Perfektní, jsem nadšený',
            peopleNo: 4,
        }];

    const [isLoading, setIsLoading] = useState(true);
    const [loadedTips, setLoadedTips] = useState(tips);

    useEffect(() => {
        fetch('https://tip-app-54c1b-default-rtdb.europe-west1.firebasedatabase.app/tips.json').then(
            (response) => response.json(),
        ).then((data) => {
            const responseTips = Object.entries(data).map((dataEl: any) => ({ id: dataEl[0], ...dataEl[1] }));

            setIsLoading(false);
            setLoadedTips(responseTips.reverse());
        });
        setCalculated(false);
    }, [calculated, setCalculated]);

    if (isLoading) {
        return (
            <h4>Načítá se historie dýšek.</h4>
        );
    }

    return (
        <>
            <Divider>
                <h1>Historie dýšek</h1>
            </Divider>
            {loadedTips.map((tip: any) => (
                <Divider key={tip.id}>
                    <HistoryItem
                        id={tip.id}
                        key={tip.id}
                        overallAmount={tip.finalResult}
                        quality={tip.quality}
                        peopleNo={tip.peopleNo}
                    />
                </Divider>
            ))}
        </>
    );
}
