import './App.css';
import React,{useState,useReducer} from 'react';
import Header from './components/Header';
import Home from './pages/Home'
import Create from './pages/Create'
import NavContext from './Contex/NavContext';


const inital=[
  {
      
      Title:"Pushups1",
      Desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. iste dolor tempora, quo voluptas enim explicabo nostrum" 
      ,status:false
  },
  

]


const initalstate={
  active:"Home"
}

const myreducer=(state,action)=>{
  switch(action){
      case "HOME" : return {active:"Home"}
      case "CREATE" : return {active:"create"}
      default :
      
      return state;
  }
}




function App() {
  const [state, dispatch] = useReducer(myreducer,initalstate)
  const [fulllist, setfulllist] = useState(inital)
  
  const handler=(title,desc)=>{
    const newone={
        Title:title,
        Desc:desc,
        status:false
    }
    
    setfulllist([newone ,...fulllist]);
    dispatch("HOME")
    
  }
  
  return (
    
  <>
    <NavContext.Provider value={[state,dispatch]}>
      <Header></Header>
      { state.active  == "Home" ? 
        <Home fulllist={fulllist}></Home>
      
      :
        <Create handler={handler}></Create>
      
      }
    </NavContext.Provider>
      
  </>
  );
}

export default App;
