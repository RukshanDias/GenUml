import React from 'react'
import { useState } from 'react'

const test = [
    {
        actor: "waiter",
        usecases: ["order food", "serve food"]
    },
    {
        actor: "client",
        usecases: ["Eat food", "Pay for food"]
    },
    {
        actor: "client",
        usecases: ["Eat food", "Pay for food"]
    },
    {
        actor: "client",
        usecases: ["Eat food", "Pay for food"]
    },
]



const Edit_items = () => {
    const [data, setData] = useState(test);

    const handleActorEdit = (event, key) => {
        const newTest = [...test];
        newTest[key].actor = event.target.value;
        setData(newTest);
    }
    const handleUCEdit = (event, key, subkey) => {
        const newTest = [...test];
        newTest[key].usecases[subkey] = event.target.value;
        setData(newTest);
    }

    return (
        <div className='overflow-auto' style={{ maxHeight: "60vh" }}>
            <div>
                {test.map((item, key) => (
                    <div className='my-3'>
                        <input type={'text'} value={item.actor} className='form-control border border-4 rounded mb-1 p-1' style={{ width: "30%" }} onChange={(event) => handleActorEdit(event, key)} />
                        {item.usecases.map((subitem, subkey) => (
                            <input type={'text'} value={subitem} className='form-control border border-4 rounded ms-4 p-1' style={{ width: "60%" }} onChange={(event) => handleUCEdit(event, key, subkey)} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Edit_items
