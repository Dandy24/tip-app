import SelectList from './SelectList'

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

    return(
        <form>
            <div>
                <label htmlFor='amount'>Částka na účtu</label>
                <input type="number" required id='amount'/>
            </div>
            <div>
                <label htmlFor='quality'>Kvalita obsluhy</label>
                <SelectList data={service}/>
            </div>
            <div>
                <label htmlFor='peopleNo'>Kolik lidí se dělí o účet</label>
                <input type="number" required id='peopleNo'/>
            </div>
        </form>
    )
}

export default TipForm;
