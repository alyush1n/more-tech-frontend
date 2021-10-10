import React, {useState} from 'react';
import './createDataset.css';

const CreateDataset = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    return (
        <div className="createDataset">
            <h3>Создание нового датасета</h3>
            <button style={{fontSize:"26px"}}>Создать датасет</button>
            <button style={{marginLeft:"55px", fontSize:"18px"}}>Отобразить структуру JSON</button>
            <button style={{marginLeft:"15px", fontSize:"18px"}}>Добавить поле</button>
            <p></p>
            <p style={{display:`${isDisplay ? "block" : "none"}`}}>
                <p>Название поля: <input type="text" /></p>
            </p>
        </div>
    );
};

export default CreateDataset;