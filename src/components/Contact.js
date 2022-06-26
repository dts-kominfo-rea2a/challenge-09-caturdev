// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({ data }) => {
    return (
        <>
            <div style={{ width: '100%' }}>
                {data.map(contact => (
                    <div key={contact.phone}>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{
                                display: 'flex', backgroundColor: '#efeded', width: '30em', marginBottom: 10, borderRadius: '10px'
                            }}>
                                <div style={{ width: '50em' }}>
                                    <img alt="Gambar Kucing" src={contact.photo} style={{ borderRadius: '100px', margin: 20 }} width="150" />
                                </div>
                                <div style={{ width: '50em', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center' }}>
                                    <h6 style={{ margin: 10 }}>{contact.name}</h6>
                                    <p style={{ margin: 10 }}>{contact.phone}</p>
                                    <p style={{ margin: 0 }}>{contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </>
    )
}

export default Contact;