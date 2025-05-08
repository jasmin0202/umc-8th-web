import TodoAfter from './components/TodoAfter'
import React from 'react'
import './App.css'
import { TodoProvider } from './context/Todocontext'

function App() {
return <div>
  <TodoProvider>
    <TodoAfter />
  </TodoProvider>
</div>
}

export default App
