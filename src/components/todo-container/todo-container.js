import React, {Component} from 'react';
import './todo-container.sass';

import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemAddForm from '../item-add-form';

class ToDoContainer extends Component{
   constructor(props){
      super(props);
      this.state = {
         data: this.props.data,
      }

   }

   render(){
      const data = this.state.data;

      return(
         <div className='container'>
            <h1 className='container__title'>Todo List</h1>   
            <SearchPanel />
            <ToDoList data={data}/>
            <ItemAddForm />
         </div>
      )
   }
}


export { ToDoContainer };
