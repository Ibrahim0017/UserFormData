import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        city: '',
    })
    const handleChange = (e) =>{
        // const name = e.target.name
        // const value = e.target.value
        const {name, value} = e.target

        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        // console.log(formData)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()

        const {name, email, city} = formData
        localStorage.setItem("userInfo", JSON.stringify({name, email, city}))
        alert(`My name is ${name}`)
    }
  return (
    <div>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type= 'text'
                    name= 'name'
                    value={formData.name}
                    onChange= {handleChange}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type= 'email'
                    name= 'email'
                    value={formData.email}
                    onChange= {handleChange}
                />
            </div>
            <div>
                <label>City: </label>
                <input
                    type= 'text'
                    name= 'city'
                    value={formData.city}
                    onChange= {handleChange}
                />
                <button  type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default Form