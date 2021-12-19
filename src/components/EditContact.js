import React, { useState } from 'react'

const EditContact = (props) => {
    const { id, name, email } = props.location.state.contact
    const [note, setNote] = useState({ id, name, email })

    const update = (e) => {
        e.preventDefault();
        setNote({ id, name, email })
        console.log(note);
        props.updateContactHandeler(note)
        props.history.push('/')
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className='text-center my-3'>Update Contact</h2>
            <div className='container card' style={{ marginTop: '30px', width: '1200' }}>
                <form onSubmit={update} >
                    <div className="mb-3 input-group-sm">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" value={note.name} className="form-control " placeholder='Name' name='name' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email" value={note.email} className="form-control" placeholder='Email' name='email' onChange={onChange} />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="" value={note.phone} className="form-label">Phone No</label>
                        <input className="form-control" placeholder='Phone No' name='phone' onChange={onChange} />
                    </div> */}
                    <button type="submit" className="btn btn-dark mb-3">Update</button>
                </form>
            </div>
        </>
    )
}

export default EditContact
