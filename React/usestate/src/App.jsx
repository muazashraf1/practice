// import React, { useState } from "react";

// function App() {

//   const [newTodo, setNewTodo] = useState("");
//   // Sare tasks yahan store honge
//   const [todos, setTodos] = useState([]);


//   const [editIndex, setEditIndex] = useState(null)

//   // Input change hoga to state update hogi
//   const handleChange = (e) => {
//     setNewTodo(e.target.value);
//   };

//   // Add button click
//   const handleAdd = () => {


//     if (editIndex != null) {
//       const updateTodos = [...todos];

//       updateTodos[editIndex] = newTodo

//       setTodos(updateTodos)

//       setEditIndex(null)
//     } else {
//       setTodos([...todos, newTodo]);
//       setNewTodo("");
//     }
//   };


//   const handleEdit = (index) => {
//     setNewTodo(todos[index])

//     setEditIndex(index)
//   }


//   const handleDelete = (index) => {
//     const filterTodos = todos.filter((todo, i) => {
//       return i !== index 
//     })

//     setTodos(filterTodos)
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={newTodo}
//         onChange={handleChange}
//       />

//       <button onClick={handleAdd}>Add</button>

//       <div>
//         {todos.map((todo, index) => (
//           <>
//             <ul key={index}>
//               <li>{todo}</li>
//             </ul>

//             <button onClick={() => handleEdit(index)}>Edit</button>
//             <button onClick={() => handleDelete(index)}>
//               Delete
//             </button>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;




import React, { useState } from 'react'

function App() {

  // --- form data
  const [formData, setFormData] = useState({
    task: "",
    isCompleted: false
  })
  // --- All Todos aayen gain is main 
  const [todo, setTodo] = useState([])  // ----> stateTodo

  // ----- Edit index for editing
  const [editIndex, setEditIndex] = useState(null)

  // ----- Filter Todos
  const [filterTodos, setFilterTodos] = useState([])


  const handleChange = (e) => {
    // console.log("It is working...");
    // console.log(e.target);
    const { name, value } = e.target
    // console.log(name);
    // console.log(value);
    setFormData({ ...formData, [name]: value })
  }
  console.log(formData);


  const handleAdd = () => {



    if (editIndex != null) {
      const updateTodos = [...todo]

      // console.log("updateTodos:", updateTodos);

      updateTodos[editIndex] = formData
      setTodo(updateTodos)
      setEditIndex(null)

      setFormData({
        task: ""
      })

    } else {
      // setTodo([...todo, formData])

      const updatedTodos = [...todo, formData]

      setTodo(updatedTodos)
      setFilterTodos(updatedTodos)
    }

    setFormData({
      task: "",
      isCompleted : false
    })
  }

  const handleEdit = (idx) => {
    setFormData(todo[idx])
    setEditIndex(idx)  // ---> first click pr setEditIndex(0)    
  }


  const handleDelete = (idx) => {  // idx -> 1
    const filterTodos = todo.filter((_, i) => {
      return i != idx
    })

    setTodo(filterTodos)
  }



  const handleCheck = (idx) => {
    const chekTodos = [...todo]

    chekTodos[idx].isCompleted = !chekTodos[idx].isCompleted

    setTodo(chekTodos)
    setFilterTodos(chekTodos)

    console.log(todo);

  }

  const handleAll = () => {
    setFilterTodos(todo)

    console.log(filterTodos);
  }

  const handleCompleted = () => {
    const isCompleted = todo.filter((item) => {
      return item.isCompleted
    })

    setFilterTodos(isCompleted)
  }

  const handleUncompleted = () => {

    const uncompletedTodos = todo.filter((item) => {
      return !item.isCompleted
    })

    setFilterTodos(uncompletedTodos)
  }
  console.log("todo:", todo);


  return (
    <div>
      <input
        type="text"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Add</button>

      <br />

      <button onClick={handleAll}>All</button>
      <button onClick={handleCompleted}>Completed!</button>
      <button onClick={handleUncompleted}>InCompleted</button>

      <ul>
        {/* {todo.map((ele, idx) => ( */}
        {filterTodos.map((ele, idx) => (
          <>
            <li key={idx}>{ele.task}</li>
            <input
              type='checkbox'
              checked={ele.isCompleted}
              onChange={() => handleCheck(idx)}
            />
            <button onClick={() => handleEdit(idx)}>Edit</button>
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </>

        ))}

      </ul>
    </div>
  )
}

export default App






