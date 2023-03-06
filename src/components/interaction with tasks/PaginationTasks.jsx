import React, {useState} from 'react';
import {Pagination} from 'react-bootstrap';
import {useSelector} from "react-redux";
import TaskItem from "./TaskItem";
import SortedTasks from "../sorting/SortedTasks";
import {sortTasks} from "../sorting/sortTasks";

const PaginationTasks = (props) => {
    const [page, setPage] = useState(1)

    // sort by username by default
    const [sortBy, setSortBy] = useState("username");
    // sort ascending by default
    const [sortOrder, setSortOrder] = useState("asc");

    // number of tasks per page
    const tasksPerPage = 3

    const tasks = useSelector(state => state.taskReducer)

    // calculate how many pages are needed to display all tasks
    const totalPages = Math.ceil(tasks.length / tasksPerPage)

    // calculate the index of the first and last task on the page
    const startIndex = (page - 1) * tasksPerPage
    const endIndex = startIndex + tasksPerPage

    const tasksToDisplay = sortTasks(tasks, startIndex, endIndex, sortOrder, sortBy);

    // create an array of pagination elements
    const items = []
    for (let number = 1; number <= totalPages; number++) {
        items.push(
            <Pagination.Item
                key={number}
                active={number === page}
                onClick={() => {setPage(number)}}
            >
                {number}
            </Pagination.Item>
        );
    }


    return (
        <>
            <div>
                <SortedTasks sortBy={sortBy} setSortBy={setSortBy}/>

                {tasksToDisplay.map((task) => (
                    <TaskItem key={task.id} task={task}/>
                    ))}

                <Pagination>{items}</Pagination>
            </div>
        </>
    );
};

export default PaginationTasks;
