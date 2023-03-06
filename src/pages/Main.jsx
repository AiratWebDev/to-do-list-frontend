import React from 'react';
import TaskList from '../components/interaction with tasks/TaskList'
import Navigation from '../components/navigation and routing/Navigation'

const Main = () => {
    return (
        <>
            <Navigation/>
            <TaskList/>
        </>
    )
}

export default Main;