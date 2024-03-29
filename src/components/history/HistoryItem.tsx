import { Card, Descriptions } from 'antd';
import DescriptionsItem from 'antd/es/descriptions/Item';

export interface HistoryItemProps{
    id: number,
    overallAmount: number,
    qualityDesc: string,
    peopleNo: number
}

export function HistoryItem(props: HistoryItemProps): JSX.Element {
    const {
        id, overallAmount, peopleNo, qualityDesc,
    } = props;

    return (
        <Card title={`Kód objednávky: ${id}`}>
            <Descriptions bordered>
                <DescriptionsItem label="Celková cena objednávky">{overallAmount}</DescriptionsItem>
                <DescriptionsItem label="Kvalita obsluhy">{qualityDesc}</DescriptionsItem>
                <DescriptionsItem label="Počet lidí u stolu">{peopleNo}</DescriptionsItem>
            </Descriptions>
        </Card>
    );
}
