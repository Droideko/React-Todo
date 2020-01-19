import React, {Component} from 'react';
import './todo-list.sass';
import ToDoItem from '../todo-item';

class ToDoList extends Component{
   render(){
      const data = this.props.data;
      // console.log(data);
      return(
         <div>
            <table>
               <tbody>       
                  {data.map(el => 
                     <ToDoItem 
                        key={el.id}
                        label={el.label}
                        done={el.done}
                        id={el.id}/>
                  )}              
               </tbody>           
            </table>         
         </div>
      );
   }
}

export { ToDoList };