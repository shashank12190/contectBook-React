import React from 'react'
import user from '../images/user.png'
import { Link } from "react-router-dom";

const CreateContact = (props) => {
    const { id, name, email } = props.contact
    const { removeContactHandeler } = props
    return (
        <>
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-start'>
                    <div>
                        <img className="img-thumbnail" style={{ width: '50px', height: '50px' }} src={user} alt="user" />
                    </div>
                    <div className='mx-2'>
                        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}  >
                            <div><strong>{name}</strong></div>
                            <div>{email}</div>
                        </Link>
                    </div>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}  >
                        <button className="btn btn-primary btn-sm mx-2" type="button">Update</button>    </Link>
                    < button className="btn btn-danger btn-sm" type="button" onClick={() => removeContactHandeler(id)}>Delete</button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CreateContact
