import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from '../Redux/action';

function EditContact() {
    const { id } = useParams(); 
    console.log(id);

    const dispatch = useDispatch(); 

    // Retrieve all contacts from the Redux store
    const AllContact = useSelector((store) => store.contacts); 

    const [form, setForm] = useState({}); 

    // Handler for input changes
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    // Handler for the save button
    function handleSave() {
        dispatch(editContact({ id, ...form }));
    }

    // Fetch the contact details based on the ID and set the form state
    useEffect(() => {
        const contact = AllContact.find((el) => el.id == id);
        if (contact) {
            setForm(contact);
        }
    }, [id, AllContact]);

    return (
        <div className="w-1/2 mx-auto my-4 pt-16">
            <h2 className="text-2xl text-white font-bold mb-4">
                <button className="rounded-full shadow shadow-slate-700 mt-5 text-lg bg-black p-3 mb-3">
                    Edit Information
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
                    value={form.first_name || ''} // Ensure the value is not undefined
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
                    value={form.last_name || ''} // Ensure the value is not undefined
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
                    value={form.mob || ''} // Ensure the value is not undefined
                    onChange={handleChange}
                />
            </div>

            {/* Select field for status */}
            <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="status">
                    Status
                </label>
                <select
                    className="w-full border text-center border-black p-2 rounded-full"
                    id="status"
                    name="status"
                    value={form.status || ''} // Ensure the value is not undefined
                    onChange={handleChange}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            {/* Save button */}
            <button
                className="bg-black hover:bg-teal-900 mt-3 shadow-md text-white font-bold py-2 px-4 rounded"
                onClick={handleSave}
            >
                Save Contact
            </button>
        </div>
    );
}

export default EditContact;
