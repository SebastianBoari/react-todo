import React from 'react'

import { ReactComponent as CheckSvg } from './svg/check.svg'
import { ReactComponent as DeleteSvg } from './svg/delete.svg'
import { ReactComponent as EmptySvg } from './svg/empty.svg'
import { ReactComponent as ErrorSvg } from './svg/error.svg'

import './css/index.css'

const TodoIcon = ({ type, isCompleted, onClick }) => {

    const iconTypes = {
        "check": <CheckSvg className={`item_check-icon ${isCompleted && "completed"}`} />,
        "delete":<DeleteSvg className="item_delete-icon"/>,
        "empty": <EmptySvg/>,
        "error": <ErrorSvg/>
    }

    return (
        <div className={`item_${type}`} onClick={onClick}>
            {iconTypes[type]}
        </div>
    )
}

export { TodoIcon }