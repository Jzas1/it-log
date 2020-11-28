import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState(false)

    const onSubmit = () =>{
        if(firstName === '' || lastName === ''){
            M.toast({ html: 'Please enter the first and last name' })
        } else {
            console.log(firstName, lastName)
            

        }
    }

    return (
        <div id='#add-tech-modal' className='modal' style={modalStyle}>
            {console.log(state)}
            <div className="modal-content">
                <h4>New Techician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='firstName' value={firstName} onChange={e => setfirstName(e.target.value)}/>
                        <label htmlFor="firstName" className="active">
                            Log firstName
                        </label>
                    </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name='lastName' value={lastName} onChange={e => setlastName(e.target.value)}/>
                        <label htmlFor="lastName" className="active">
                            Log lastName
                        </label>
                    </div>
                </div>
                </div>
                </div>
            <div className="#add-tech-modal">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-green btn">Enter</a>
            </div>
        </div>
    )
}



export default AddTechModal 