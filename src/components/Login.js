import React, {useState} from "react"

function Login({Sign}){
    const [details, setDetails]=useState({Name:"",Email:"",Password:"" });
    const submitHandler=event=>{
        event.preventDefault();
        Sign(details)
    }

    return (
        <div>
            <form className="form-signin" onSubmit={submitHandler} >
  
  <h1 className="h3">Please Login</h1>
  <label htmlFor="Email" className="sr-only">Email Address</label>
  <input type="email" id="Email" className="form-control" placeholder="Email address" required autoFocus 
  onChange={e=> setDetails({...details, Email: e.target.value})} value={details.Email} />
  <label htmlFor="Name" className="sr-only">User Name</label>
  <input type="text" id="Name" className="form-control" placeholder="User Name" required
  onChange={e=> setDetails({...details, Name: e.target.value})} value={details.Name} />
  <label htmlFor="Password" className="sr-only">Password</label>
  <input type="password" id="Password" className="form-control" placeholder="Password" required 
  onChange={e=> setDetails({...details, Password: e.target.value})} value={details.Password}/>
  
  
  <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
  </form>
        </div>
    )
}
export default Login;