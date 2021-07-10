import SelectList from './SelectList'
//import Button from "./Button";
import {Button, Space} from "antd";
import {useRef} from "react";
import NumberInput from "./NumberInput";

function TipForm(){

    const service = [
        {
            'amount' : 2,
            'desc' : "Špatná",
        },
        {
            'amount' : 10,
            'desc' : "Dobrá"
        },
        {
            'amount': 15,
            'desc': "Perfektní, jsem nadšený"
        }]

    const amountRef = useRef<HTMLInputElement>(null);
    const qualityRef = useRef();
    const peopleNoRef = useRef<HTMLInputElement>(null);

    function submitHandler(event: { preventDefault: () => void; }){
        event.preventDefault();

        // @ts-ignore
        const enteredAmount = amountRef.current.value;
        // @ts-ignore
        const enteredQuality = qualityRef.current.value;
        // @ts-ignore
        const enteredPeopleNo = peopleNoRef.current.value;

        const tipData = {
            amount : enteredAmount,
            quality : enteredQuality,
            peopleNo : enteredPeopleNo
        }
        console.log(tipData)
    }

    // @ts-ignore
    return(
        <form onSubmit={submitHandler}>
            <Space direction='vertical' size='large'>
                <NumberInput spaceSize='large' id='amount' reference={amountRef} label='Částka na účtu'/>
            <div>
                <Space size='large'>
                <label htmlFor='quality'>Kvalita obsluhy</label>
                <SelectList data={service} reference={qualityRef} id='quality'/>
                </Space>
            </div>
            <NumberInput spaceSize='large' id='peopleNo' reference={peopleNoRef} label='Kolik lidí se dělí o účet'/>
            <div>
                <Button type='primary' htmlType='submit'>Vypočítat</Button>
            </div>
            </Space>
        </form>
    )
}

export default TipForm;
