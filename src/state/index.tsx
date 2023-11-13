import React, { ReactNode, createContext, useContext, useReducer } from 'react';

interface AppState {
    data: any;
}

type AppAction = { type: 'ADD_DATA'; payload: any } | { type: 'RESET_DATA' };

// Create the initial state
const initialState: AppState = {
    data: {},
}

const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'ADD_DATA':
            return { ...state, data: action.payload };
        case 'RESET_DATA':
            return { ...state, data: {} };
        default:
            return state;
    }
};

const AppContext = createContext<{
    state: AppState;
    dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
