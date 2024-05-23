import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../Components/Popup";
import { removeContact } from "../Redux/action";
import React from "react";

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false); 
    // State to manage popup visibility
    const [singleContact, setSingleContact] = useState({}); 
    // State to hold a single contact's data for the popup
    let data = undefined;

    const AllContacts = useSelector((store) => store.contacts); 
    // Fetch all contacts from the Redux store
    const dispatch = useDispatch(); 
    // Hook to dispatch actions to the Redux store

    const togglePopup = (contact) => {
        setSingleContact(contact); 
        // Set the selected contact for the popup
        setIsOpen(!isOpen); 
        // Toggle popup visibility
    };

    useEffect(() => {
        // This effect runs when dispatch or the length of AllContacts changes
    }, [dispatch, AllContacts.length]);

    return (
        <div className="justify-center pt-16 text-white p-4 w-full">
            <div className="m-4">
                <button className="rounded-full shadow mt-5 shadow-slate-700 font-bold bg-black p-4">
                    <Link to="/contact_form">
                        Create New Contact
                    </Link>
                </button>
            </div>
            {AllContacts.length === 0 && (
                <div className="m-auto w-fit p-4 align-middle text-blue-500 justify-center">
                    <svg className="m-auto" width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* SVG content */}
                    </svg>
                    <h1 className="text-3xl">No Contact Found Please add contact from <br /> Create Contact Button</h1>
                </div>
            )}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AllContacts.map((el) => (
                    <div key={el.id} className="bg-black rounded-md shadow-xl m-4 p-1 text-center text-white">
                        <div onClick={() => togglePopup(el)} className="w-3/4 m-auto">
                            <div className="p-4">
                                {isOpen && <Popup close={() => togglePopup(data)} el={singleContact} />}
                            </div>
                            <div className="text-left text">
                                <p>First Name: {el.first_name}</p>
                                <p>Last Name: {el.last_name}</p>
                                <p>Mobile: {el.mob}</p>
                                <p>Status: {el.status === "active" ? "Active" : "Inactive"}</p>
                            </div>
                        </div>
                        <div className="flex justify-between my-2">
                            <Link to={`edit/${el.id}`}>
                                <button className="rounded p-2 bg-emerald-400 text-black">
                                    Edit
                                </button>
                            </Link>
                            <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contacts;
