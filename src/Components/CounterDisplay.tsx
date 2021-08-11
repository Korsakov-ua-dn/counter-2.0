import React from 'react';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from '../store/store'
import { StateType, setError } from '../store/counter-reducer'
import { useState } from 'react';

const CounterDisplay: React.FC = () => {
    console.log('CounterDisplay')

    const state = useSelector<AppRootStateType, StateType>(state => state.data)
    const dispatch = useDispatch()
    const error = state.error
    
    let [current, setCurrent] = useState(state.start)
    
    const content = () => {
        switch (error) {
            case 'Invalid value':
                return <div className={"error"} >{error}</div>
            case 'press set':
                return <div className={"error"} style={{color: "cyan"}} >{error}</div>
            case 'invalid current':
                return <div className={"error"} style={{fontSize: "75px", color: "red"}}>{current}</div>
            default: return <div className={"error"} style={{fontSize: "60px", color: "cyan"}}>{current}</div>
        }
    }

    const inc = () => {
        if (current || current === 0) setCurrent(++current)
        if (current === state.max) dispatch(setError('invalid current'))
    }
    const reset = () => {
        dispatch(setError(''))
        setCurrent(state.start)
    }

    return (
        <div className={"block"}>
            <div className="display">
               { content() }
            </div>
            <div className="btnWrapper">
                <Button disable={error !== ''} callback={inc} title={"inc"}/>
                <Button disable={error !== ''} callback={reset} title={"reset"}/>
            </div>
        </div>
    )
}

export default CounterDisplay