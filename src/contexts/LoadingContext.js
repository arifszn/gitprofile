import { createContext, useState } from "react";

const initialValue = true;

export const LoadingContext = createContext();

export const LoadingProvider = (props) => {
    const [loading, setLoading] = useState(initialValue);

    return (
        <LoadingContext.Provider value={[loading, setLoading]}>
            {props.children}
        </LoadingContext.Provider>
    );
}