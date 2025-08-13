import React, { useState } from "react";

function TodoList() {
    const [input, setInput] = useState('');
    const [list, setList] = useState([]);

    const addItem = () => {
        const value = input.trim();
        if (!value){
            alert("¡¡¡El campo no puede estar vacío, ecribe algo para agregar tu tarea!!!")
            return;
        }
        
        setList((prev) => [...prev, value]);
        setInput("");
    }

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDeafault();
            addItem;
        }
    }

    const removeItem = (idx) => {
        setList((prev) => prev.filter((_, i) => i !== idx));
    };


    return (
        <div className="list-container">
            {/* Contenedor del input y botón */}
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Introduce tu tarea..."
                    className="input-field"
                    value={input} // Valor controlado por el estado
                    onChange={(e) => setInput(e.target.value)} // Actualiza el estado cuando cambia
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === "NumpadEnter") addItem();
                    }}
                />
                <button className="add-input-button" type="submit" onClick={addItem}>
                    Agregar
                </button>
            </div>

            {list.length > 0 && (
                <ul className="app-list">
                    {list.map((item, i) => (
                        <li key={i} className="list-item">
                            <span className="list-text">{item}</span>
                            <button
                                className="remove-button"
                                onClick={() => removeItem(i)}
                                aria-label={`Eliminar ${item}`}
                                type="button"
                            >
                                ✕
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

}

export default TodoList;
