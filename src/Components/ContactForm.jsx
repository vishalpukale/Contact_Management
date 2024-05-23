import { useState } from 'react';
import { useDispatch } from "react-redux";
import { addContact } from '../Redux/action';
import React from "react";

function ContactForm() {
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store

    // Local state for the form data
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        mob: "",
        status: "active" // Default status is set to 'active'
    });

    // Handler for input changes
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value // Update the form state based on input changes
        });
    };

    // Handler for the save button
    function handleSave() {
        dispatch(addContact(form)); // Dispatch the addContact action with the form data
    }

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl text-white font-bold mb-4">
                <button className="rounded-full shadow shadow-slate-700 mt-5 mb-3 font-bold bg-black p-3 text-lg">
                    Create Contact
                </button>
            </h2>

            {/* Input field for first name */}
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="first-name">
                    First Name
                </label>
                <input
                    className="w-full border text-center border-black p-2 rounded-full"
                    id="first-name"
                    type="text"
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                />
            </div>

            {/* Input field for last name */}
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="last-name">
                    Last Name
                </label>
                <input
                    className="w-full border text-center border-black p-2 rounded-full"
                    id="last-name"
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                />
            </div>

            {/* Input field for mobile number */}
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="mobile-number">
                    Mobile Number
                </label>
                <input
                    className="w-full border text-center border-black p-2 rounded-full"
                    id="mobile-number"
                    type="number"
                    name="mob"
                    value={form.mob}
                    onChange={handleChange}
                />
            </div>

            {/* Select field for status */}
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border text-center text-bold border-black p-2 rounded-full"
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                >
                    <option value="active"><strong>Active</strong></option>
                    <option value="inactive"><strong>Inactive</strong></option>
                </select>
            </div>

            {/* Save button */}
            <button
                className="bg-black mt-3 hover:bg-teal-900 shadow-md text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default ContactForm;
