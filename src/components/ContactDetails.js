import React from 'react'
import download from '../images/download.png'
import { Link } from 'react-router-dom'

const ContactDetails = (props) => {
    const { name, email } = props.location.state.contact
    console.log(props);

    return (
        <div className='d-flex justify-content-center my-5'>
            <div className="card" style={{ width: "18rem" }} >
                {/* <h1 className='mb-2'>Contact Detail</h1> */}
                <img src={download} className="card-img-top img-thumbnail" alt={name} />
                <div className="d-flex justify-content-center">
                    <div className="card-body ">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{email}</p>
                        <Link to='/'>
                            <button className="btn btn-primary ">Back to Contacts</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ContactDetails
