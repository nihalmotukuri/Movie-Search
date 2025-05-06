import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import './index.css'

const Task = props => {
    const { taskDetails, deleteTask } = props
    const { id, task, description } = taskDetails
    const [isExpanded, setIsExpanded] = useState(false)
    
    const expandTask = () => isExpanded ? setIsExpanded(false) : setIsExpanded(true)

    const onDelete = () => {
        deleteTask(id)
    }

    return (
        <li className="todo-item"
            style={{ height: isExpanded ? 'auto' : '44px', overflow: 'hidden'}}>
            <div className="left-todo-cont">
                <div className="check-box-cont">
                    <Checkbox 
                        size="small" 
                        color="success"
                        sx={{ 
                            color: '#606062',
                            '&.Mui-checked': {
                                color: '#606062'
                            },
                            marginTop: '-8px' }} />
                </div>
                <div className="todo-cont">
                    <h3>{task}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="btn-cont">
                <div>
                    {isExpanded ? 
                    (<ExpandLessIcon
                        onClick={expandTask}
                        style={{ fontSize:24, color: 'rgb(100, 100, 102)', cursor: 'pointer' }}/>) 
                    :
                    (<ExpandMoreIcon
                        onClick={expandTask}
                        style={{ fontSize:24, color: 'rgb(100, 100, 102)', cursor: 'pointer' }}/>)}
                </div>
                <DeleteOutlineIcon
                    onClick={onDelete} 
                    style={{ fontSize: 22, color: 'rgb(100, 100, 102)', cursor: 'pointer' }} />
            </div>
        </li>
    )
}

export default Task