export const WineSearch = ({ setterFunction }) => {
    return (
        <div className="">
            <label>Search by varietal, country, or region</label>
            <input 
            onChange={
                (changeEvent) => {
                    setterFunction(changeEvent.target.value)
                }
            }
            type="text" placeholder="Search through our varietals"/>
        </div>
    )
    
    }