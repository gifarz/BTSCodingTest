import React ,{useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

 const Register = (props) => {

    const url = "http://18.141.178.15:8080/register";
    const {register, errors, handleSubmit} = useForm({mode: "onChange" })

    const [form,setForm ] = useState({
        email: "",
        username:"",
        password:""
    })

    const Submit = () => {
        axios.post(url,form)
        .then(res=>{
            console.log(res)
            if(res.statusCode === 2110) {
                console.log(res.message)
            }
            alert('Registered successfully!')
            props.history.push("/login")
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
                    <form onSubmit={handleSubmit(Submit)}>
                        <div>
                            <h3>Please Register!</h3>
                            <hr/>
                        </div>

                        <div className="form-group"> 
                            <label>Email</label>
                            <input 
                                onChange={(e) => handleChange(e)}
                                value={form.email}
                                type="text" 
                                name="email" 
                                id="email" 
                                className="form-control" 
                                placeholder="Insert Email"
                            />
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
                        <p>Already have an account ? Please <a href="/login">login here</a></p>
                        <button className="btn btn-success">Register</button>
                    </form>
                        
                </div>
            </div>
        </div>
    )

}

export default Register