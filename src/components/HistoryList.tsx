import {HistoryItem} from "./HistoryItem";
import {Divider} from "antd";
import {useEffect, useState} from "react";

export function HistoryList(): JSX.Element{

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

    const [isLoading, setIsLoading] = useState(true);
    const [loadedTips, setLoadedTips] = useState(tips);

    useEffect(() => {
        fetch('https://tip-app-54c1b-default-rtdb.europe-west1.firebasedatabase.app/tips.json'
        ).then(response => {
            return response.json();
        }).then(data =>{
            const tips = [];

            for(const key in data){
                const tip = {
                    id: key,
                    ...data[key]
                }
                tips.push(tip)
            }

            setIsLoading(false);
            setLoadedTips(tips);
        });
    }, [])


    if(isLoading){
        return (
            <h4>Načítá se historie dýšek.</h4>
        )
    }else{

    }

    return(
        <>
        <Divider>
            <h1>Historie dýšek</h1>
        </Divider>
            {loadedTips.map((tip: any) => {
                return(
                    <Divider key={tip.id}>
                    <HistoryItem id={tip.id} key={tip.id} overallAmount={tip.finalResult} quality={tip.quality} peopleNo={tip.peopleNo}/>
                    </Divider>
                )
            })}
        </>
    )

}