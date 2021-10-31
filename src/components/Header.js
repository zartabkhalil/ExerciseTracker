import React,{useContext} from 'react';
import  Button  from './Button';
import  NavContext from '../Contex/NavContext';
function Header(props) {
    const [state,dispatch] = useContext(NavContext)
    
    

    return (
        <div className="container">
            <div className="row text-center">
                <div className="col-6.mx-auto">
                    <Button text="Home" bgcolor="purple" className=" btn m-1" onClick={()=>dispatch("HOME")}/>
                    <Button text="Create Exercise" bgcolor="purple" onClick={()=>dispatch("CREATE")}/>
                </div>
            </div>
        </div>
        
    );
}

export default Header;