import React, {useEffect, useState} from 'react';
import axios from 'axios';


export const ChecklistItem = () => {

    const url = "http://18.141.178.15:8080/item/"

    const [form, setForm] = useState({
        itemName: ""
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
                        <h3>Check List Item!</h3>
                        <hr/>
                    </div>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input 
                            onChange={(e) => handleChange(e)}
                            value={form.itemName}
                            type="text" 
                            name="itemName" 
                            id="itemName" 
                            className="form-control" 
                            placeholder="Insert Item Name"
                        />
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
                </div>
            </div> 
            
        </div>
    )
}