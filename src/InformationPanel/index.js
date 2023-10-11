import React from 'react'

import { Pie } from '../PieGraph'

import './css/index.css'

const InformationPanel = ({ completedTodos, totalTodos }) => {

    const completedPercentage = (completedTodos / totalTodos) * 100
    const pendingTodos = totalTodos - completedTodos
    const activeTodos = (pendingTodos / totalTodos) * 100

  return (
    <section className='InformationPanel'>

        <div className='pie_container pendingTodos'>
                <h3 className='pendingTodos_counter'>{pendingTodos}</h3>
                <p className='pie_description pendingTodos_description'>Tareas pendientes</p>
        </div>

        <div className='pie_container activeTodos'>
            <Pie 
                percentage={activeTodos}
                colour={'crimson'}
            />
            <p className='pie_description'>Tareas activas</p>
        </div>

        <div className='pie_container finishedTodos'>
            <Pie 
                percentage={completedPercentage}
                colour={'seagreen'}
            />
            <p className='pie_description'>Tareas finalizadas</p>
        </div>
    </section>
  )
}

export { InformationPanel }