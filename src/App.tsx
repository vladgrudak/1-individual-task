import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';

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
                    <Counter counter={counter} addCounter={addCounter} resetCounter={resetCounter} maxValue={maxValue} />
            </header>
        </div>
    );
}

export default App;
