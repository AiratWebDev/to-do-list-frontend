import React, {useEffect, useState} from 'react';
import axios from "axios";

const FetchTasks = () => {
    const [tasks, setTasks] = useState([])

    const url = 'http://45.8.96.2:5000/tasks'

    const FetchTasks = async () => {
        const response = await axios.get(url)
            .then()
            .catch((error) => console.log('Ошибка: ' + error.response.data))

        setTasks(response.data)
    }

    useEffect(() => {
        FetchTasks()
    }, [])

    return tasks
};

export default FetchTasks;