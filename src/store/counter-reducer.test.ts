import { StateType, counterReducer, setError, setBasicDataValue } from './counter-reducer'

let initialState: StateType

beforeEach(() => {
    initialState = {
        start: null as null | number,
        max: null as null | number,
        error: 'Invalid value'
    }
})

test("Set new error message", () => {
    // Logic
    const res = counterReducer(initialState, setError("new string"))
    // Expect
    expect(res.error).toBe("new string")
})

test("Set basic data value", () => {
    // Logic
    const res = counterReducer(initialState, setBasicDataValue(0, 5))
    // Expect
    expect(res.start).toBe(0)
    expect(res.max).toBe(5)
})