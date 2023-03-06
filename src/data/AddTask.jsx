import React from 'react';
import axios from "axios";

const AddTask = async (data) => {
    const url = `http://45.8.96.2:5000/tasks`

    const response = await axios.post(url, data)
        .then()
        .catch((error) => console.log('Ошибка: ' + error.response.data))

    return response
};

export default AddTask;