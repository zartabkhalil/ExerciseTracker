import React,{useReducer,useState ,useEffect} from 'react';
import Button from '../components/Button'
import Card from '../components/Card';


const initalstate=[
    {
        
        Title:"Pushups1",
        Desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. iste dolor tempora, quo voluptas enim explicabo nostrum" 
        ,status:false
    },
    {
        
        Title:"Pushups2",
        Desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. iste dolor tempora, quo voluptas enim explicabo nostrum" 
        ,status:true
        },
    {
        
        Title:"Pushups3",
        Desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. iste dolor tempora, quo voluptas enim explicabo nostrum" 
        ,status:false
    }

]



const reducer=(state,action)=>{
    switch(action){
        case "ALL":return "ALL"
        case "PENDING":
           
        return "PENDING"
        
        
        case "COMPLETED":return "COMPLETED"
    
    }
}

function Home({fulllist}) {
    
    
    const [list, setlist] = useState(fulllist)
    
    const  [state, dispatch] = useReducer(reducer, "ALL")
    
    const handlelist=(arrgs)=>{
        let newarr=[]
            if(arrgs =="c") newarr=fulllist.filter((value)=>{return value.status})
            if(arrgs =="p") newarr=fulllist.filter((value)=>{return !value.status})
            if(arrgs =="a") newarr=fulllist
        
        setlist(newarr)
    }
    
    
    const Toggle=(Title,type)=>{
        
       
       
        const value = fulllist.findIndex((value)=>{ return value.Title==Title}) 
        
        fulllist[value].status=!fulllist[value].status
        
        const newarr=list.filter(value=>value.Title!=Title)
        setlist(newarr)
     
        
    }
    
    return (
    <div className="container">
        <div className="row mt-5">
        <div className="col-6 mx-auto text-center">
            
            <Button text="View ALL " className={state=="ALL" ? " btn text-warning" : "btn "} onClick={()=> {dispatch("ALL");handlelist('a') }}></Button>
            <Button text="Completed " className={state=="COMPLETED" ? " btn text-warning" : "btn "} onClick={()=> {dispatch("COMPLETED");handlelist('c') }}></Button>
            <Button text="Pending " className={state=="PENDING" ? " btn text-warning" : "btn "} onClick={()=> {dispatch("PENDING");handlelist('p') }}></Button>
          
        
        
        </div>
        </div>
        
        <div className="row p-3 ">
            <div className="col-6 mx-auto ">
                    <Card list={list} fun={Toggle}></Card>
                
                
            </div>
        </div>
    </div>
    );
}

export default Home;