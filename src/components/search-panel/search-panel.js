import React, {Component} from 'react';

import './search-panel.sass';

class SearchPanel extends Component{
   constructor(props){
      super(props);
      this.buttons = [
         { name: 'all', label: 'All' },
         { name: 'active', label: 'Active' },
         { name: 'done', label: 'Done' }
      ]
   }
   render(){
      const {searchText, handleSearch, filter, handleFilter} = this.props;
      const buttons = this.buttons.map(el => {
         const isActive = filter === el.name;
         console.log(isActive);
         return <li
            key={el.name}
            onClick={() => handleFilter(el.name)}            
            className={isActive ? 'btn-active' : 'btn'}>
               {el.label}
         </li>
      })
      return(
         <div className='container__search-panel'>
            <form className='container__search-form'>
               <input 
                  className='container__search-input'
                  placeholder='Search...'
                  value={searchText}
                  onChange={handleSearch}>
               </input>                           
            </form>
            <ul className='container__list'>
               {buttons}          
            </ul>         
         </div>
      );
   }
}

export { SearchPanel };