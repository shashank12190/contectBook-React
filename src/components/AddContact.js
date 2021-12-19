import React, { useState } from 'react'

const AddContact = (props) => {
    const [note, setNote] = useState({ name: '', email: '' })
    // console.log(props);

    const add = (e) => {
        e.preventDefault();
        if (note.name === '' && note.email === '') {
            alert('enter values')
        }
        setNote({ name: '', email: '' })
        console.log(note);
        props.addContactHandeler(note)
        props.history.push('/')

    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2 className='text-center my-3'>Add Contact</h2>
            <div className='container card' style={{ marginTop: '30px', width: '1200' }}>
                <form onSubmit={add} >
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
                    <button type="submit" className="btn btn-dark mb-3">Add</button>
                </form>
            </div>
        </>
    )
}

export default AddContact
