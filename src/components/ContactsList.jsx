import { useSelector } from "react-redux/es/hooks/useSelector";

const ContactsList = () => {
    const contacts = useSelector(state => state.contacts)
    

    return (
        <div>
            <ul>
                {contacts.map(contact => 
                    
                    <li key={contact.id}>
                        <p>
                            Name: {contact.name}, number: {contact.phone}
                        </p>
                        <button type="button">delete</button>
                    </li>
                )}
            </ul>
        </div>
    )


    
};

export default ContactsList;