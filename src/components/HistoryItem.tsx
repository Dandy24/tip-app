import {Card, Descriptions} from "antd";
import DescriptionsItem from "antd/es/descriptions/Item";

// @ts-ignore
function HistoryItem(props){

    return(
        <Card title={'Objednávka č.:' + props.id}>
            <Descriptions bordered>
                <DescriptionsItem label='Celková cena objednávky'>{props.overallAmount}</DescriptionsItem>
                <DescriptionsItem label='Kvalita obsluhy'>{props.quality}</DescriptionsItem>
                <DescriptionsItem label='Počet lidí u stolu'>{props.peopleNo}</DescriptionsItem>
            </Descriptions>
        </Card>
    )

}

export default HistoryItem