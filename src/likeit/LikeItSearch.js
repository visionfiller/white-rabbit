export const LikeItSearchBar = ({setterFunctionVarietal, setterFunctionRegion}) => {
    return(<>
     <div className="form-control w-full max-w-xs ml-auto mr-auto pt-10 pb-10 ">
            <label className="label label-text">What is the grape?</label>
            <input 
            className="input input-bordered w-full max-w-xs"
            onChange={
                (changeEvent) => {
                    setterFunctionVarietal(changeEvent.target.value)
                }
            }
            type="text" placeholder="e.g. Viognier "/>
            <label className="label label-text">Where country is it from?</label>
            <input 
            className="input input-bordered w-full max-w-xs"
            onChange={
                (changeEvent) => {
                    setterFunctionRegion(changeEvent.target.value)
                }
            }
            type="text" placeholder="e.g. France"/>
        </div>
    </>)
   
}