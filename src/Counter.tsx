import {Button} from './components/Button';
import React from 'react';

type CounterPropsType = {
    maxValue: number
    startValue: number
    counter: number
    errorMessage: string

    addCounter: () => void
    resetCounter: () => void
}

export const Counter = ({counter, startValue, maxValue, errorMessage, addCounter, resetCounter}: CounterPropsType) => {


    return (
        <div className="App-main">
            <div className={'counter-wrapper'}>
                {errorMessage.length > 0
                    ? <div className={`${errorMessage === 'Incorrect value!' ? 'red-error' : ''} error-message`}>{errorMessage}</div>
                    : <div className={`${counter === maxValue ? 'red-error' : ''}`}>{counter}</div>
                }
            </div>
            <div className="buttons-wrapper">
                <Button title={'inc'}
                        onClick={addCounter}
                        className="my-button"
                        isDisabled={counter === maxValue || errorMessage.length > 0}
                />
                <Button title={'reset'}
                        onClick={resetCounter}
                        className="my-button"
                        isDisabled={counter === startValue || errorMessage.length > 0}
                />
            </div>
        </div>
    );
};