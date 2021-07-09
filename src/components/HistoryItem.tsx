import {Card} from "antd";

// @ts-ignore
function HistoryItem(props){

    return(
        <Card title={'Objednávka č.:' + props.id}>
            <p>Celková cena objednávky: {props.overallAmount}</p>
            <p>Kvalita obsluhy: {props.quality}</p>
            <p>Počet lidí u stolu: {props.peopleNo}</p>
        </Card>
    )

}

export default HistoryItem