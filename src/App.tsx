import React, {useState} from 'react';
import './App.css';
import {Button} from './components/Button';

function App() {

    // Инициализируем state для хранения счётчика
    const [counter, setCounter] = useState<number>(0);

    // Задаём максимально допустимое значение
    const maxValue = 5;

    const addCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(0)
    }


    return (
        <div className="App">
            <header className="App-header">
                <div className="App-main">
                    <div className={`${counter === maxValue ? 'max-value' : ''} counter-wrapper`}>{counter}</div>
                    <div className="buttons-wrapper">
                        <Button title={'inc'}
                                onClick={addCounter}
                                className="my-button"
                                isDisabled={counter === maxValue}
                        />
                        <Button title={'reset'}
                                onClick={resetCounter}
                                className="my-button"
                                isDisabled={counter === 0}
                        />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
