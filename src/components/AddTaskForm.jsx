const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return (
        <>
            <div className='row'>
                <div className='col'>
                    {/* Capture an input and store it in the state variable "newTask" */}
                    <input value={newTask}
                        // 'onChange' used to listen for changes in input field and update the stae variable
                        //  Whenever the user types something in the input field, the "onChange" function will be called with the event object "e" as its argument, and the current value of the input field can be accessed via "e.target.value".
                        // e.target = the element of the area that cursor is clicked
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control form-control-lg' />
                </div>
                <div className='col-auto'>
                    <button onClick={addTask}
                        className='btn btn-lg btn-success'>Add Task</button>
                </div>
            </div>
            <br />
        </>
    )
}

export default AddTaskForm;