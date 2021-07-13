import { Space } from 'antd';
import React, { useState } from 'react';
import TipForm from './form/TipForm';
import { HistoryList } from './HistoryList';

export function TipCalculator(): JSX.Element {
    const [isCalculated, setIsCalculated] = useState(false);

    function submitTipDataHandler(tipData: any): void {
        fetch('https://tip-app-54c1b-default-rtdb.europe-west1.firebasedatabase.app/tips.json',
            {
                method: 'POST',
                body: JSON.stringify(tipData),
            });
        setIsCalculated(true);
    }

    return (
        <Space size="large" direction="vertical">
            <Space size={200}>
                <TipForm submitTipData={submitTipDataHandler} />
            </Space>
            {console.log(isCalculated)}
            <HistoryList calculated={isCalculated} setCalculated={setIsCalculated} />
        </Space>
    );
}
