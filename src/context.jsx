import React, { createContext, useContext, useMemo, useState } from 'react'

export const context = createContext({count: 0, setCount: () => {}}) 

export const Provider = ({ children }) => {
    const [count, setCount] = useState(0);
    const value = useMemo(() => ({ count, setCount }), [count]);
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export const useMyContext = () => {
    return useContext(context)
}
