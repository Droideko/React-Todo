import React, {Component} from 'react';
import './todo-list.sass';
import ToDoItem from '../todo-item';

class ToDoList extends Component{
   render(){
      const {data, handleDelete} = this.props;
      return(
         <table>
            <tbody>       
               {data.map(el => 
                  <ToDoItem 
                     key={el.id}
                     label={el.label}
                     done={el.done}
                     handleDelete={() => handleDelete(el.id)}/>
               )}              
            </tbody>           
         </table>         
      );
   }
}

export { ToDoList };