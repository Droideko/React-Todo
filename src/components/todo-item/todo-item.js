import React from 'react';
import './todo-item.sass'

const ToDoItem = ({label, done, id}) => {
   return(
      <tr>
         <td>{label}</td>
         <td>
            <button>delete</button>         
         </td>
      </tr>
   );
};

export { ToDoItem };