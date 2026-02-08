
import "./ButtonWithFunction.css";

export default  function ButtonWithFunction({name ,onclick}){
    return(<>
        
        <button onClick={onclick} className="btnfun">{name}</button>
        
        </>);
}