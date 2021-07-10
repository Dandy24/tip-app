import HistoryItem from "./HistoryItem";
import {useState} from "react";
import {Space} from "antd";

function HistoryList(){

    const tips = [
        {
            'id' : 1,
            'overallAmount' : 400,
            'quality' : "Špatná",
            'peopleNo' : 3
        },
        {
            'id' : 2,
            'overallAmount' : 520,
            'quality' : "Dobrá",
            'peopleNo' : 2
        },
        {
            'id' : 3,
            'overallAmount' : 765,
            'quality' : "Perfektní, jsem nadšený",
            'peopleNo' : 4
        },]

    return(
        <>
        <h1>Historie dýšek</h1>
            {tips.map((tip) => {
                return(
                    <Space>
                        <HistoryItem id={tip.id} key={tip.id} overallAmount={tip.overallAmount} quality={tip.quality} peopleNo={tip.peopleNo}/>
                    </Space>
                )
            })}
        </>
    )

}

export default HistoryList