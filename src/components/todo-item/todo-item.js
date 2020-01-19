import React from 'react';
import './todo-item.sass'

const ToDoItem = ({label, done, handleDelete}) => {
   return(
      <tr>
         <td
            className='list__item'>{label}</td>
         <td>
            <button
               className='button__delete'
               onClick={handleDelete}>
                  delete
            </button>         
         </td>
      </tr>
   );
};

export { ToDoItem };