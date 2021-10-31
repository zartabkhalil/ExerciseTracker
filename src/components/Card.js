import React,{useContext} from 'react';
import Button from './Button'

function Card({list,fun}) {
        
    return (
        list.map((value,index)=>{
            return (
                <div className="card m-2" style={{borderLeft:"10px solid purple"}} key={index}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-9"><h4 className="text-warning">{value.Title}</h4></div>
                        <div className="col-3 d-flex flex-column p-2">
                        
                            <Button text="Toggle" className=" bg-info btn m-1 " onClick={()=>fun(value.Title)}></Button>
                        </div>
                        
                        <div className="row mt-3">
                        <p className="text-muted">
                        {value.Desc}.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
            
            )
        
        })
        
        
    
    
    );
}

export default Card;