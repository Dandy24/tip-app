import { Select } from 'formik-antd';
import { SelectProps } from 'antd/lib/select';

export interface SelectListProps extends SelectProps<any>{
    data: ServiceData[],
    name: string
}

export interface ServiceData {
    amount: number,
    desc: string
}

export function SelectList(props: SelectListProps): JSX.Element {
    const { data, name } = props;

    return (

        <Select name={name} style={{ width: 200 }}>
            {data.map((serv) => (
                <Select.Option value={serv.desc}>{serv.desc}</Select.Option>
            ))}
        </Select>
    );
}
