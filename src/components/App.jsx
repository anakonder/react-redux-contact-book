import { useDispatch } from "react-redux";
import ContactsList from "./ContactsList";
import { addContact } from "../redux/actions";

const App = () => {
    const dispatch = useDispatch()

    

    const handleContacts = () => {
        const name = prompt("Enter name");
        const phone = prompt("Enter phone number");
        if (name && phone) { // Перевірте, чи введено ім'я та номер
            dispatch(addContact(name, phone));
        }
    }

    return (
        <>
            <ContactsList />
            <button type="button" onClick={handleContacts}>addContact</button>
        </>
    )

}

export default App;