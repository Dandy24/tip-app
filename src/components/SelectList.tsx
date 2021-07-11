import {Select} from "antd";
import {SelectProps} from "antd/lib/select";

export interface SelectListProps extends SelectProps<any>{
    data: ServiceData[]
}

export interface ServiceData {
    amount: number,
    desc: string
}


export function SelectList(props: SelectListProps){

    const {data, id} = props

    return(

    <Select id={id} defaultValue={data[0].desc} style={{ width: 200 }} {...props}>
        {data.map((serv) =>{
            return(
                <Select.Option value={serv.amount}>{serv.desc}</Select.Option>
            )
        })}

    </Select>
    )
}
