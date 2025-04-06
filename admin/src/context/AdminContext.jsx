import { createContext, useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
export const AdminContext = createContext()


const AdminContextProvider = (props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const value={
        backendUrl
    }
return (
    <AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>
)
}
export default AdminContextProvider