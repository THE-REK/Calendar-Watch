import React, {useState} from "react"
import Display from "./components/Display"
import Button from "./components/Button"
import './App.css';
import useLocalStorage from "./hooks/useLocalStorage"
import Tables from "./components/Tables";
import Login from "./components/Login";


function App() {
  const admin={Email:"admin@eren.com",
Password:"1234"};

  const [time, setTime]= useState({ms:0,s:0,m:0,h:0});
  const [interv, setInterv]= useState();
  const [status,setStatus]= useState(0);
  const [table, setTable]= useLocalStorage("table",[]);
  const [dates, setDates]= useLocalStorage("dates", []);
  const [user, setUser]= useLocalStorage("user",{Name:"",Email:"" });

  const start=()=>{
    run();
    setStatus(1)
    setInterv(setInterval(run,10));
  };
  var  updateMs=time.ms, updateM=time.m,updateS=time.s, updateH=time.h;
  const run=()=>{
    if(updateM===60){
      updateH++;
      updateM=0;
    }
    if(updateS===60){
      updateM++;
      updateS=0;
    }
    if(updateMs===100){
      updateS++;
      updateMs=0
    }
    updateMs++;
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH})
  }
  const stop=()=>{
    clearInterval(interv);
    setStatus(2);
    setTable(oldArray=>[...oldArray,time.m +":"+time.s+":"+time.ms]);
    setDates(prevArray=>[...prevArray, Date()])
  };
  const reset=()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0})
  };
  const Sign=(details)=>{
    if(details.Email===admin.Email && details.Password===admin.Password){
      setUser({
        Name: details.Name,
        Email: details.Email
      })
    }else{
      alert("Something is wrong")
    }
  }
  const Logout=()=>{
    setUser({Name:"", Email:""})
  }
  const removeFromTable=(i)=>{
    setTable([]);
    setDates([])
  }

  return (
    <div className="App">
      {(user.Email !=="")? (
        <div><div className="clock-holder">
        <div className="stopwatch">
          <Display time={time}/>         
          <Button start={start} status={status} stop={stop} reset={reset}/>

        </div></div>
        
        <div className="tables"><Tables table={table} dates={dates} user={user}  /></div> 
        <button className="logout-btn" onClick={Logout}>Logout</button>
        <button className="logout-btn" onClick={removeFromTable}>Clean</button> 
        </div>
        
        
        
      ):( <Login Sign={Sign} /> )}
      
      
      
      
    </div>
  );
}

export default App;
