import React ,{useState} from 'react';
import axios from 'axios';

 const Login = (props) => {

    const url = "http://18.141.178.15:8080/login"

    const [form,setForm ] = useState({
        username:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url,form)
        .then(res=>{
            console.log(res)
            if(res.status === 200){
                console.log(res.data.data)
                localStorage.setItem("token", res.data.data.token);
                window.location.replace('/checklist')
            } else if(res.status === 404){
                alert('Not Found')
            } 
        })
        .catch(function(err){
            console.log(err)
        })
    }

    const handleChange = (e) => {
		const {name,value} = e.target
		setForm({
			...form,
			[name] : value
		})
    }

    return (
        <div className="container">

            <div className="card" style={{width: "500px", margin: "auto", zIndex: 2}}>
                <div className="card-body">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <h3>Please Login!</h3>
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={form.username}
                            type="text" 
                            name="username" 
                            id="username" 
                            className="form-control" 
                            placeholder="Insert username"
                        />
                    </div>
                    <div className="form-group"> 
                        <label>Password</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={form.password}
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="Insert password"
                        />
                    </div>
                    <p>Don't have an account ? Please register <a href="/register">here</a> </p>
                    <button className="btn btn-success">Login</button>
                </form>
                </div>
            </div> 
            
        </div>
    )
    
}

export default Login;
