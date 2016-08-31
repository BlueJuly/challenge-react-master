import React from 'react'
import { connect } from 'react-redux'

import NewTodo from './NewTodo'
import { addTodo, deleteTodo, addLead } from '../actions'
 
import CreateLead from './CreateLead'
const Todos = ({todos, leads, dispatch}) => (
  <div>
    <h1>Todos</h1>
    <NewTodo onChange={e => {
      if(e.keyCode == 13){
        console.log(todos.toString())
        dispatch(addTodo(e.target.value))
        e.target.value = ''
      }
    }}/>
    <CreateLead onAdd={(name, number)=> { console.log(name, number); dispatch(addLead({name, number})) }}/>
    {todos.map((todo, index) => <p key={index}>{todo} <button onClick={e => {
      dispatch(deleteTodo(index))
    }}>X</button></p>)}

    {leads.map((lead, index) => <p key={index}>{lead}</p>)}
  </div>
)

function mapStateToProps(sths) {

 console.log(sths) 
  return {
    todos: sths.todos,
    leads: sths.leads
  }
}

export default connect(mapStateToProps)(Todos)
