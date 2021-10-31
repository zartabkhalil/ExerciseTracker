import React,{useState} from 'react';


function Create({handler}) {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    return (
        <div className="row mt-5">
            <div className="col-6 mx-auto">
                <div className="card p-4">
                    <div className="card-body">
                        <h1>Add New Exercise</h1>
                        <input type="text" className="form-control"  placeholder="Enter Title" value={title} onChange={(e)=>settitle(e.target.value)}/>
                        <textarea col="40" row="30" className=" mt-3 form-control" value={desc} onChange={(e)=>setdesc(e.target.value)} ></textarea>
                        <button className="btn btn-success mx-auto mt-3 d-block" onClick={()=>handler(title,desc)} >ADD</button>
                    </div>
                </div>
            </div>
        </div>    
            
    );
}

export default Create;