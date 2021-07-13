// import Button from "./Button";
import { Button, Space } from 'antd';
import React, { FormEvent, useState } from 'react';
import { SelectList, ServiceData } from './SelectList';
import { NumberInput } from './NumberInput';
import { ResultBox } from './ResultBox';

function TipForm(props: { submitTipData: (arg0: { amount: number; quality: number; peopleNo: number; }) => void; })
    : JSX.Element {
    const [amount, setAmount] = useState(0);
    const [quality, setQuality] = useState<number>(0);
    const [peopleNo, setPeopleNo] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const service: ServiceData[] = [
        {
            amount: 2,
            desc: 'Špatná',
        },
        {
            amount: 10,
            desc: 'Dobrá',
        },
        {
            amount: 15,
            desc: 'Perfektní, jsem nadšený',
        }];

    const submitHandler = (event: FormEvent): void => {
        event.preventDefault();

        if (amount >= 0 && peopleNo >= 1) {
            const tipResult = amount + (amount * (quality / 100)) + ((peopleNo * 10) - 10);

            const finalResult = Math.ceil(tipResult / 10) * 10;

            setResult(finalResult);

            const tipData = {
                amount,
                quality,
                peopleNo,
                finalResult,
            };

            console.log(tipData);

            props.submitTipData(tipData);
        }
    };

    return (

        <>
            <Space size={200}>
                <form onSubmit={submitHandler}>
                    <Space direction="vertical" size="large">
                        <NumberInput
                            spacesize="large"
                            id="amount"
                            onChange={(value) => {
                                setAmount(parseInt(value + ''.toString(), 10));
                            }}
                            label="Částka na účtu"
                        />
                        <div>
                            <Space size="large">
                                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                <label htmlFor="quality">Kvalita obsluhy</label>
                                <SelectList
                                    data={service}
                                    onSelect={(value) => { setQuality(parseInt(value.toString(), 10)); }}
                                    id="quality"
                                />
                            </Space>
                        </div>
                        <NumberInput
                            spacesize="large"
                            id="peopleNo"
                            onChange={(value) => { setPeopleNo(parseInt(value + ''.toString(), 10)); }}
                            label="Kolik lidí se dělí o účet"
                        />
                        <div>
                            <Button type="primary" htmlType="submit">Vypočítat</Button>
                        </div>
                    </Space>
                </form>

                <ResultBox result={result} currency="Kč" />

            </Space>
        </>
    );
}

export default TipForm;
