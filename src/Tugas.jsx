import React, { useState } from 'react'
import './Tugas.css'

export default function Tugas() {
    const [form, setForm] = useState({
        nama: '',
        email: ''
    });

    const [submissions, setSubmissions] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form, 
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmissions([...submissions, form]);  // Add the current form data to the submissions array
        setForm({ nama: '', email: '' });  // Clear the form fields
    }

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Functional Form</h1>
                <div className="nama">
                    <label htmlFor="nama" className='namaedit'>Nama </label>
                    <input type="text" name='nama' value={form.nama} onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="email">Email </label>
                    <input type="email" name='email' value={form.email} onChange={handleChange} />
                </div>
                <div className="button">
                    <button type='submit'>Submit</button>
                </div>
            </form>
            </div>
            <div className="submitted-data">
                {submissions.length > 0 && (
                    <div>
                        <h2>Submitted Data:</h2>
                        <ul>
                            {submissions.map((submission, index) => (
                                <li key={index}>
                                    <p>Nama: {submission.nama}</p>
                                    <p>Email: {submission.email}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}
