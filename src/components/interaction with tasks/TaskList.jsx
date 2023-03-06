import React, {useEffect} from 'react';
import TaskForm from "./TaskForm";
import PaginationTasks from './PaginationTasks'
import FetchTasks from "../../data/FetchTasks";
import {useDispatch} from "react-redux";
import {addTasksAction} from '../../store/taskReducer'

const TaskList = () => {
    const dispatch = useDispatch()

    let tasks = FetchTasks()

    const addTasks = () => {
        dispatch(addTasksAction(tasks))
    }

    useEffect(() => {
        addTasks()
    }, [tasks])

    return (
        <>
            <div className={'task-list'}>
                <h1>Создать новую задачу</h1>
                <TaskForm/>
                <br/>
                <h2>Список задач</h2>
                <PaginationTasks/>
            </div>
        </>
    );
};

export default TaskList;
