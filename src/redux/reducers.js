// import { addContact } from "./actions";

const initialState = {
    contacts: [
        { id: 1, name: "Jacob", phone: "451 12 13" },
        { id: 2, name: "Maria", phone: "451 66 73" },
        { id: 3, name: "Sarah", phone: "451 33 13" },
        { id: 4, name: "Mikle", phone: "451 25 36" },
        { id: 5, name: "David", phone: "451 47 58" },
    ],
};

export const rootReducer = (state = initialState, action) => {    
    switch (action.type) {
        case "contact/addContact": {
            return { ...state, contacts: [...state.contacts, action.payload] }
        }
        case "contact/deleteContact": {
            return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)}
        }
        default: return state;
    }
}