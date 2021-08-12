import React, { useEffect } from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../store/store'
import { StateType, setError } from '../store/counter-reducer'
import { useState } from 'react'

const Counter = () => {
    console.log('CounterDisplay')

    const state = useSelector<AppRootStateType, StateType>(state => state.data)
    const dispatch = useDispatch()
    const error = state.error

    let [current, setCurrent] = useState(state.start)

    useEffect(() => {
        setCurrent(state.start)
    }, [state.start])

    let content = <div style={{fontSize: "60px", color: "cyan"}}>{current}</div>
    let disableInc = false
    let disableRes = false

    switch (error) {
        case ('Max value limit'):
            content = <div className={"error"} style={{fontSize: "75px"}}>{current}</div>
            disableInc = true
            break;
        case ('Invalid input value'):
            content = <div className={"error"} >{error}</div>
            disableInc = true
            disableRes = true
            break;
        case ('press set'): 
            content = <div className={"error"} style={{color: "cyan"}} >{error}</div>
            disableInc = true
            disableRes = true
    }
    
    const inc = () => {
        if (current || current === 0) setCurrent(++current)
        if (current === state.max) dispatch(setError('Max value limit'))
    }
    const reset = () => {
        dispatch(setError(''))
        setCurrent(state.start)
    }

    return (
        <div className={"block"}>
            <div className="display">
               { content }
            </div>
            <div className="btnWrapper">
                <Button disable={disableInc} callback={inc} title={"inc"}/>
                <Button disable={disableRes} callback={reset} title={"reset"}/>
            </div>
        </div>
    )
}

export default Counter