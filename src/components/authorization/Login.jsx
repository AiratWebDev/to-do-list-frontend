import React from 'react';
import {useState, useContext} from "react";
import {Form, Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import AuthContext from "../../context/AuthContext";


const Login = () => {
    let {loginUser} = useContext(AuthContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span>Войти как администратор — </span>

            <Link variant="primary" onClick={handleShow}>
                войти
            </Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Войти</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={loginUser}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Имя пользователя</Form.Label>
                            <Form.Control
                                name={'username'}
                                type="text"
                                placeholder="Ваш логин"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput2"
                        >
                            <Form.Label>Пароль для входа</Form.Label>
                            <Form.Control type={'password'} name={'password'} placeholder={'Ваш пароль'}/>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput3"
                        >
                        </Form.Group>
                        <Modal.Footer>
                            <Button type={'submit'} variant="primary" onClick={handleClose}>
                                Войти
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Login;