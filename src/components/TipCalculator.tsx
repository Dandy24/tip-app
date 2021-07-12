import { Space } from 'antd';
import React from 'react';
import TipForm from './form/TipForm';
import { HistoryList } from './HistoryList';

export function TipCalculator(): JSX.Element {
    function submitTipDataHandler(tipData: any): void {
        fetch('https://tip-app-54c1b-default-rtdb.europe-west1.firebasedatabase.app/tips.json',
            {
                method: 'POST',
                body: JSON.stringify(tipData),
            });
    }

    return (
        <Space size="large" direction="vertical">
            <Space size={200}>
                <TipForm submitTipData={submitTipDataHandler} />
            </Space>
            <HistoryList />
        </Space>
    );
}
