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
         searchText: '',
      }
      this.handleDelete = this.handleDelete.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

   }

   handleDelete(id){
      const data = this.props.data;
      this.setState(({data}) => {
         const i = data.findIndex(el => el.id === id);
         return {data: [...data.slice(0,i), ...data.slice(i+1)]}
      });
   }

   handleSearch(e){
      this.setState({searchText: e.target.value});
   }

   myFilter(searchText, data){
      return data.filter(el => el.label.toLowerCase().includes(searchText.toLowerCase()));
   }

   render(){
      const {data, searchText} = this.state;
      const filterData = this.myFilter(searchText, data);
      return(
         <div className='container'>
            <h1 className='container__title'>Todo List</h1>   
            <SearchPanel searchText={searchText} handleSearch={this.handleSearch}/>
            <ToDoList data={filterData} handleDelete={this.handleDelete}/>
            <ItemAddForm />
         </div>
      )
   }
}

export { ToDoContainer };
