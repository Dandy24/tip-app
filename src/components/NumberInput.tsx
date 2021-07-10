import {InputNumber, Space} from "antd";

// @ts-ignore
function NumberInput(props){

    return(
        <div>
            <Space size={props.spaceSize}>
                <label htmlFor={props.id}>{props.label}</label>
                <InputNumber required id={props.id} ref={props.reference}></InputNumber>
            </Space>
        </div>
    )

}

export default NumberInput;