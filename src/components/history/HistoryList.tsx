import { Divider, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { HistoryItem } from './HistoryItem';
import { getTipData } from '../../api/tipAPI';

export interface HistoryListProps{
    calculated : boolean,
    setCalculated: (arg0: boolean) => void
}

export function HistoryList(props: HistoryListProps): JSX.Element {
    const { calculated, setCalculated } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [loadedTips, setLoadedTips] = useState<any[]>([]); // TODO create response type

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    useEffect(() => {
        getTipData()
            .then((data) => {
                const responseTips = data
                    ? Object.entries(data).map((dataEl: any) => ({ id: dataEl[0], ...dataEl[1] }))
                    : [];

                setIsLoading(false);
                setLoadedTips(responseTips.reverse());
            });
        setCalculated(false);
    }, [calculated, setCalculated]);

    if (isLoading) {
        return (
            <div style={{ textAlign: 'center' }}>
                <Spin spinning indicator={antIcon}>Načítá se historie dýšek.</Spin>
            </div>
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
                        qualityDesc={tip.quality.desc}
                        peopleNo={tip.peopleNo}
                    />
                </Divider>
            ))}
        </>
    );
}
