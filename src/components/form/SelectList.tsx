import { Select } from 'antd';
import { SelectProps } from 'antd/lib/select';

export interface SelectListProps extends SelectProps<any>{
    data: ServiceData[]
}

export interface ServiceData {
    amount: number,
    desc: string
}

export function SelectList(props: SelectListProps): JSX.Element {
    const { data, id } = props;

    return (

        <Select id={id} defaultValue={data[0].amount} style={{ width: 200 }} {...props}>
            {data.map((serv) => (
                <Select.Option value={serv.amount}>{serv.desc}</Select.Option>
            ))}

        </Select>
    );
}
