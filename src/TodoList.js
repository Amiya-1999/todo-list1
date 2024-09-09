import React, { useState } from 'react'

export default function TodoList() {

    const [activity, setActivity] = useState('');
    const [listData, setListData] = useState([]);

    function addActivity() {
        setListData([...listData, activity]);
        setActivity('');
    }

    function removeActivity(i) {
        const updatedList = listData.filter((elem, id) => {
            return i !== id;
        })
        setListData(updatedList);
    }

    function removeAll() {
        setListData([])
    }

    return (
        <>
            <div className="container">
                <div className='header'>TODO LIST</div>
                <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button onClick={addActivity}>Add</button>
                {listData.length >= 1 && <p className="list-heading">Here is Your Todo List:</p>}
                {listData != [] && listData.map((data, i) => {
                    return (
                        <>
                            <div key={i}>
                                <div className='listData'>{data}</div>
                                <div className='btn-position'>
                                    <button onClick={() => removeActivity(i)}>Remove</button>
                                </div>
                            </div>
                        </>
                    )
                })}
                {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
            </div>
        </>
    )
}
