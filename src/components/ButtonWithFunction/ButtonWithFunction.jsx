
import "./ButtonWithFunction";

export default  function ButtonWithFunction({name ,onclick}){
    return(<>
        
        <button onClick={onclick}>{name}</button>
        
        </>);
}