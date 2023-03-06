import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import AddTask from '../../data/AddTask'


const TaskForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('')
    const [text, setText] = useState('');

    // function to send form
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            "username": username,
            "email": email,
            "title": title,
            "text": text,
        }

        AddTask(data)

        window.location.reload()
    };

    return (
        <>
            <div className="send-task">
                <Form onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group className="mb-3" controlId="formBasicText">

                        <Form.Control id={'username'} type={'text'} placeholder={'Имя пользователя'} required
                                      onChange={(e) => setUsername(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            id={'email'} type="email" placeholder="E-mail" required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            title="Введите правильный адрес электронной почты — test@test.com"
                            onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText">

                        <Form.Control id={'title'} type={'text'} placeholder={'Название задачи'} required
                                      onChange={(e) => setTitle(e.target.value)}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control id={'text'} as="textarea" rows={4} placeholder={'Текст задачи'} required
                                      onChange={(e) => setText(e.target.value)}/>
                    </Form.Group>

                    <Button variant="primary" type={'submit'}>
                        Создать задачу
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default TaskForm;
