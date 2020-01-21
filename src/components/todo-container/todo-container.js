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
         filter: 'all'
      }
      this.id = 10;
      this.handleDelete = this.handleDelete.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleImportant = this.handleImportant.bind(this);
      this.handleAddItem = this.handleAddItem.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
   }

   handleDelete(id){
      this.setState(({data}) => {
         const i = data.findIndex(el => el.id === id);
         return {data: [...data.slice(0,i), ...data.slice(i+1)]}
      });
   }

   handleSearch(e){
      this.setState({searchText: e.target.value});
   }

   handleImportant(id){
      this.setState(({data}) => {
         const i = data.findIndex(el => el.id === id);
         const newElement = Object.assign({}, data[i]);
         newElement.done = !newElement.done;
         return {data: [...data.slice(0,i), newElement, ...data.slice(i+1)]}
      });
   }

   handleAddItem(text){
      const newItem = {
         label: text, 
         done: false,
         id: this.id++,
      };
      this.setState(({data}) => ({
         data: [...data, newItem]
      }))
   }

   handleFilter(value){
      this.setState({filter: value})
   }

   myFilter(searchText, data){
      return data.filter(el => el.label.toLowerCase().includes(searchText.toLowerCase()));
   }

   myFilterActive(data, filter){
      switch(filter){
         case 'all': return data;
         case 'active': return data.filter(data => !data.done);
         case 'done': return data.filter(data => data.done);
         default: return data;
      }
   }

   render(){
      const {data, searchText, filter} = this.state;
      const filterData = this.myFilterActive(this.myFilter(searchText, data), filter);
      return(
         <div className='container'>
            <h1 className='container__title'>Todo List</h1>   
            <SearchPanel 
               searchText={searchText} 
               handleSearch={this.handleSearch}
               filter={this.state.filter}
               handleFilter={this.handleFilter}/>
            <ToDoList 
               data={filterData} 
               handleDelete={this.handleDelete}
               handleImportant={this.handleImportant}/>
            <ItemAddForm 
               handleAddItem={this.handleAddItem}/>
         </div>
      )
   }
}

export { ToDoContainer };
