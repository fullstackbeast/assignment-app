import React, { useState } from 'react'

const GlobalContext = React.createContext()

const GlobalProvider = ({ children }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalChild, setModalChild] = useState(null);
    // const [currentUser, setCurrentUser] = useState({
    //     id: 1,
    //     firstName: "Toyyib",
    //     lastName: "Omolola",
    //     role: "lecturer"
    // });
    const [currentUser, setCurrentUser] = useState(null);


    const values = {
        isModalOpen,
        setIsModalOpen,
        modalChild,
        setModalChild,
        currentUser,
        setCurrentUser
    }


    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider };