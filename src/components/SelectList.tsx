
function SelectList(props: {
    reference: any;
    data: any[]; }){

    return(
        <select name="quality" id="quality" ref={props.reference}>
            {props.data.map((serv) =>{
                return(
                    <option value={serv.amount}>{serv.desc}</option>
                )
            })}

        </select>

    )
}

export default SelectList;
