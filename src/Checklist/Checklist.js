import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {ChecklistItem} from './ChecklistItem';

export const Checklist = () => {

    const url = "http://18.141.178.15:8080/checklist"
    const [profile, setProfile] = useState({user : []})

    const [form, setForm] = useState({
        name: ""
    })

    useEffect(()=> {
        axios.get(url,
            {headers: {
                "Authorization" : localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res)
        })
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(url,form)
        .then(res=>{
            console.log(res)
            if(res.status === 200){
                console.log(res.data.data)
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
                        <h3>Selamat Datang!</h3>
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={form.name}
                            type="text" 
                            name="name" 
                            id="name" 
                            className="form-control" 
                            placeholder="Insert name"
                        />
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
                <ChecklistItem />
            </div> 
            
        </div>
    )
}