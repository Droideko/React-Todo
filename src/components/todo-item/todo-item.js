import React from 'react';
import './todo-item.sass'

const ToDoItem = ({label, done, handleDelete, handleImportant}) => {
   const styleDone = done ? {textDecoration: `line-through`} : {textDecoration: `none`}
   return(
      <tr>
         <td
            className='list__item'
            onClick={handleImportant}
            style={styleDone}>
               {label}
         </td>
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