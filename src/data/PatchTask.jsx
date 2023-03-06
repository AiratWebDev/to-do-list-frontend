import React from 'react';
import axios from "axios";

const PatchTask = async (id, status, text) => {
    const url = `http://45.8.96.2:5000/tasks/${id}`

    const data = {
        "status": status,
        "text": text,
    }

    const response = await axios.patch(url, data)
        .then()
        .catch((error) => console.log('Ошибка: ' + error.response.data))

    return response
};

export default PatchTask;
