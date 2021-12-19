import React from 'react'
import CreateContact from './CreateContact'
import { Link } from "react-router-dom";
const ContactList = (props) => {
    const { removeContactHandeler } = props
    // console.log(props);

    const randerList = props.contacts.map((contact) => {
        // console.log(contact);

        return (<div key={contact.id}>
            <CreateContact contact={contact} removeContactHandeler={removeContactHandeler} />
        </div>
        )
    })
    return (
        <div className="container my-4">
            <div className='d-flex justify-content-between'>
                <h2 className='my-2'>Contact List</h2>
                <Link to={'/add'}>
                    <button style={{ height: '35px' }} className="btn btn-primary btn-sm">Add Contacts</button>
                </Link>
            </div>
            <hr />
            {randerList.length > 1 ? randerList : "No Contacts Available"}
        </div>
    )
}

export default ContactList
