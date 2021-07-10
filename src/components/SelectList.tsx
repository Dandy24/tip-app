import {Select} from "antd";
import {Option} from "antd/es/mentions";

function SelectList(props: {
    reference: any;
    data: any[]; }){

    return(

    <Select id='quality' defaultValue={props.data[0].desc} style={{ width: 200 }} ref={props.reference}>
        {props.data.map((serv) =>{
            return(
                <Option value={serv.amount}>{serv.desc}</Option>
            )
        })}

    </Select>
    )
}

export default SelectList;
