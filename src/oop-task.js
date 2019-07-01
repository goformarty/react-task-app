import React, { Component, useState } from 'react';

class Task extends Component{

    constructor(props) {
        super(props);
        this.state = {
            task: props.content
        }
    }

    handleNewTask = event => {
        event.preventDefault()
        this.setState({task: event.target[0].value})
    }
    
    render() {
        const {task} = this.state

        return(
            <section className="Task">
                <section className="Task">
                {!task && (
                    <form onSubmit= {this.handleNewTask}>
                        <label htmlFor="name">Task:</label>
                        <input type="text" name="taskname" />
                    </form>
                )}
                { task }
                </section>
            </section>
        )
    }
}

export default Task;