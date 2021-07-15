import { Space } from 'antd';
import React, { useState } from 'react';
import { TipForm } from './form/TipForm';
import { HistoryList } from './history/HistoryList';

export function TipCalculator(): JSX.Element {
    const [isCalculated, setIsCalculated] = useState(false);

    return (
        <Space size={130} direction="vertical">
            <Space size={200}>
                <TipForm setIsCalculated={setIsCalculated} />
            </Space>
            <HistoryList calculated={isCalculated} setCalculated={setIsCalculated} />
        </Space>
    );
}
