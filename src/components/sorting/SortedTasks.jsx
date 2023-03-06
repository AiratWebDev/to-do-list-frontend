import React from 'react';

const SortedTasks = ({sortBy, setSortBy}) => {

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    }

    return (
        <div className={'sorting'}>
            <label htmlFor="sort-by-select">Сортировать по:</label>
            <select id="sort-by-select" value={sortBy} onChange={handleSortChange}>
                <option value="username">Имени пользователя</option>
                <option value="email">Email</option>
                <option value="status">Статусу задачи</option>
            </select>
        </div>
    )
};

export default SortedTasks
