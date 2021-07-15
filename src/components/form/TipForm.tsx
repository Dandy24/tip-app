import { Button, Space } from 'antd';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { SelectList, ServiceData } from './SelectList';
import { NumberInput } from './NumberInput';
import { ResultBox } from './ResultBox';
import { addTipData } from '../api/tipAPI';

export interface TipFormProps{
    setIsCalculated?: Dispatch<SetStateAction<boolean>>
}

export function TipForm(props: TipFormProps): JSX.Element {
    const [result, setResult] = useState<number>(0);
    const { setIsCalculated } = props;

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

    const submitHandler = (values: any): void => {
        let tipResult = 0;

        if (values.quality === 'Špatná') {
            tipResult = values.amount + (values.amount * (2 / 100)) + ((values.peopleNo * 10) - 10);
        } else if (values.quality === 'Dobrá') {
            tipResult = values.amount + (values.amount * (10 / 100)) + ((values.peopleNo * 10) - 10);
        } else {
            tipResult = values.amount + (values.amount * (15 / 100)) + ((values.peopleNo * 10) - 10);
        }
        const finalResult = Math.ceil(tipResult / 10) * 10;

        setResult(finalResult);

        const tipData = {
            amount: values.amount,
            quality: values.quality,
            peopleNo: values.peopleNo,
            finalResult,
        };

        addTipData(tipData).then(() => {
            if (setIsCalculated) { setIsCalculated(true); }
        });
    };

    return (

        <>
            <Space size={200}>
                <Formik
                    initialValues={{
                        amount: 0,
                        quality: service[1].desc,
                        peopleNo: 0,
                    }}
                    validationSchema={
                        Yup.object({
                            amount: Yup.number()
                                .min(1, 'Hodnota musi byt zadana')
                                .lessThan(10000, 'Castka je prilis vysoka. Prekontrolujte prosim ucet')
                                .required('Hodnota musi byt zadana')
                                .moreThan(1, 'Utracena castka musi byt kladna')
                                .positive('Utracena castka musi byt kladna')
                                .typeError('Hodnota musi byt zadana'),
                            quality: Yup.string()
                                .required('Kvalita obsluhy musi byt zvolena'),
                            peopleNo: Yup.number()
                                .min(1, 'Hodnota musi byt zadana')
                                .lessThan(25, 'U stolu nemuze sedet vice nez 25 lidi')
                                .required('Hodnota musi byt zadana')
                                .moreThan(1, 'Pocet lidi u stolu musi byt alespon 1')
                                .positive('Pocet lidi u stolu musi byt alespon 1')
                                .typeError('Hodnota musi byt zadana'),
                        })
                    }
                    onSubmit={(values) => {
                        submitHandler(values);
                    }}
                >
                    <Form>
                        <Space direction="vertical" size="large">
                            <NumberInput
                                spacesize="large"
                                name="amount"
                                label="Částka na účtu"
                            />
                            <div>
                                <Space size="large">
                                    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                                    <label htmlFor="quality">Kvalita obsluhy</label>
                                    <SelectList
                                        data={service}
                                        name="quality"
                                    />
                                </Space>
                            </div>
                            <NumberInput
                                spacesize="large"
                                name="peopleNo"
                                label="Kolik lidí se dělí o účet"
                            />
                            <div>
                                <Button type="primary" htmlType="submit">Vypočítat</Button>
                            </div>
                        </Space>
                    </Form>
                </Formik>

                <div style={{ float: 'right' }}>
                    <ResultBox result={result} currency="Kč" />
                </div>

            </Space>
        </>
    );
}
