import React, {useContext, useState} from 'react';
import {Button, Card, Form} from 'react-bootstrap';
import PatchTask from '../../data/PatchTask'
import AuthContext from "../../context/AuthContext";
import {useDispatch} from "react-redux";
import {updateTaskStatusAction, updateTaskTextAction} from "../../store/taskReducer";

const TaskItem = ({task}) => {
        const dispatch = useDispatch()
        const [taskToShow, setTaskToShow] = useState(task)
        const {user} = useContext(AuthContext)

        // function for changing status div class
        let classStatus = () => {
            if (taskToShow.status) {
                return 'completed'
            } else {
                return 'to-do'
            }
        }

        // function for changing status div inner text
        let textStatus = () => {
            if (taskToShow.status) {
                return 'Выполнено'
            } else {
                return 'В процессе'
            }
        }

        // function for setting checkbox value
        let booleanCheckBoxStatus = () => {
            if (taskToShow.status) {
                return true
            } else {
                return false
            }
        }

        // function for showing button to change task text, when authorized
        let showChangeTextButton = () => {
            if (user) {
                return <Button type={'submit'}>
                    Изменить текст</Button>
            } else {
                return ''
            }
        }

        // function for showing textarea of task text, when authorized
        let showChangeTextField = () => {
            if (user) {
                return (
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control id={'text'} as="textarea" rows={3} placeholder={taskToShow.text}
                                      required
                                      onChange={''}/>
                    </Form.Group>
                )
            } else {
                return <p>{taskToShow.text}</p>
            }

        }

        // function for showing checkbox when authorized
        let showCheckBox = () => {
            if (user) {
                return (
                    <div className="check">

                        <Form.Check onClick={() => taskDone(taskToShow.id)} type={'checkbox'}
                                    className={'form-checkbox'} checked={booleanCheckBoxStatus()}
                                    label={<p><b>{taskToShow.title}</b></p>}/>
                    </div>
                )
            } else {
                return <p><b>{taskToShow.title}</b></p>
            }
        }

        // function to complete task. Works every time the checkbox is clicked
        let taskDone = (id) => {
            const doneCopy = {...taskToShow}
            doneCopy.status = !doneCopy.status
            setTaskToShow(doneCopy)

            dispatch(updateTaskStatusAction(id))
            PatchTask(id, doneCopy.status, doneCopy.text)
        }

        // function to update task text. Works when the button "Изменить текст" is clicked
        let updateTask = (event) => {
            event.preventDefault()

            const updateCopy = {...taskToShow}
            updateCopy.text = event.target.text.value
            setTaskToShow(updateCopy)

            dispatch(updateTaskTextAction({id: updateCopy.id, text: updateCopy.text}))
            PatchTask(updateCopy.id, updateCopy.status, updateCopy.text)

            window.location.reload()
        }

        return (
            <>
                <div className={'tab-content'}>
                    <Card>
                        <Card.Body>
                            {showCheckBox()}
                            <Card.Text>
                                <span><b>{taskToShow.username}</b>, <i>{taskToShow.email}</i></span>

                                <Form onSubmit={(event) => updateTask(event)}>
                                    {showChangeTextField()}

                                    <div className="card-bottom">
                                        <div className={classStatus()}>{textStatus()}</div>

                                        {showChangeTextButton()}
                                    </div>
                                </Form>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
;

export default TaskItem;
