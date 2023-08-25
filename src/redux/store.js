import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    contacts: [
        { id: 1, name: "Jacob", phone: "451 12 13" },
        { id: 2, name: "Maria", phone: "451 66 73" },
        { id: 3, name: "Sarah", phone: "451 33 13" },
        { id: 4, name: "Mikle", phone: "451 25 36" },
        { id: 5, name: "David", phone: "451 47 58" },
    ],
};

const rootReducer = (state = initialState, action) => {
    return state
}

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer)
