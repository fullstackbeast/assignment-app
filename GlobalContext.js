import React, { useEffect, useState } from 'react'
import { getData } from './AsyncStore';

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalChild, setModalChild] = useState(null);
    // const [currentUser, setCurrentUser] = useState({
    //     id: 1,
    //     firstName: "Ololade",
    //     lastName: "Asake",
    //     role: "student",
    //     email: "student@assignment.com",
    //     password: "password"
    // });

    const [currentUser, setCurrentUser] = useState({
        id: 1,
        firstName: "Abisola",
        lastName: "Alake",
        role: "lecturer",
        email: "teacher@assignment.com",
        password: "password"
    });

    const [assignments, setAssignments] = useState([]);

    useEffect(()=>{

        getData('assignment').then(r => {
            if(r) setAssignments(r);
        })

    }, [])


    const values = {
        isModalOpen,
        setIsModalOpen,
        modalChild,
        setModalChild,
        currentUser,
        setCurrentUser,
        assignments,
        setAssignments
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider };