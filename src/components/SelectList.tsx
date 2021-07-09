
function SelectList(props: { data: any[]; }){

    return(
        <select name="quality" id="quality">
            {props.data.map((serv) =>{
                return(
                    <option value={serv.amount}>{serv.desc}</option>
                )
            })}

        </select>

    )
}

export default SelectList;
