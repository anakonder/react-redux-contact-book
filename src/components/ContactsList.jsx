import { useSelector } from "react-redux/es/hooks/useSelector";
import { deleteContact } from "../redux/actions";
import { useDispatch } from "react-redux";

const ContactsList = () => {
    const contacts = useSelector(state => state.contacts)
    const dispatch = useDispatch()

    const handleDelete = (contactId) => {
        dispatch(deleteContact(contactId))
    }
    

    return (
        <div>
            <ul>
                {contacts.map(contact => 
                    
                    <li key={contact.id}>
                        <p>
                            Name: {contact.name}, number: {contact.phone}
                        </p>
                        <button type="button" onClick={() => { handleDelete(contact.id); console.log(contact.id)}}>delete</button>
                    </li>
                )}
            </ul>
        </div>
    )


    
};

export default ContactsList;