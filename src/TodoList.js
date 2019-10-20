import React, { useState } from 'react';
import TodoInput from './TodoInput';

const TodoList = () => {
    const [items, setItems] = useState([]);
    const addItem = (text) => {
        setItems([...items, {id: Date.now(), text}]);
    }

    const removeItem = (id) => {
        setItems(items.filter(item => (
            item.id !== id
        )));
    }

    return (
        console.log(items),
        <div>
            <TodoInput addItem={addItem}/>
                <ul>
                    {items.map(item => (
                        <li key={item.id} onClick={() => removeItem(item.id)}>
                            {item.text}
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default TodoList;