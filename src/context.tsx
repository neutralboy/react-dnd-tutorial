import React,{ useReducer }  from "react";

interface IStore{
    children: React.ReactNode;
}
interface IState{
    knightPosition: number[]
}
interface IReducer{
    payload: number[]
}
const canMoveKnight = (state: IState, newState: number[]): boolean => {
    const dx = state.knightPosition[0] - newState[0];
    const dy = state.knightPosition[1] - newState[1];
    return(
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    )
}

const Reducer = (state: IState, {payload}: IReducer): IState => {
    return { knightPosition: payload }
}

const initialState: IState = {
    knightPosition: [0, 0]
};

const AppContext = React.createContext<{ state: IState, dispatch: React.Dispatch<IReducer> }>({ state: initialState, dispatch: () => null });

const Store = ({ children }: IStore) =>{
    const [state, dispatch] = useReducer(Reducer, initialState);
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}


export {Store, AppContext, canMoveKnight};