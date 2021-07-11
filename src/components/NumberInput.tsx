import {InputNumber, Space} from "antd";
import {InputNumberProps} from "antd/lib/input-number";
import {SpaceSize} from "antd/es/space";

export interface NumberInputProps extends InputNumberProps{
    label: string,
    spacesize: SpaceSize,
    id: string

}

export function NumberInput(props: NumberInputProps): JSX.Element{

    const {label, spacesize, id} = props

    return(
        <div>
            <Space size={spacesize}>
                <label htmlFor={id}>{label}</label>
                <InputNumber {...props} id={id} ></InputNumber>
            </Space>
        </div>
    )

}