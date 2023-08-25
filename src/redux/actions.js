export const addContact = (name, phone) => {
    return{
        type: "contact/addContact",
        payload: {
            id: Date.now(),
            name,
            phone
        }
    }
}

export const deleteContact = contactId => {
    return {
        type: "contact/deleteContact",
        payload: contactId
    }
}

