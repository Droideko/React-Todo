import React, {Component} from 'react';

import './search-panel.sass';

class SearchPanel extends Component{
   render(){
      const {searchText, handleSearch} = this.props;
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
               <li>All</li>
               <li>Active</li>
               <li>Done</li>            
            </ul>         
         </div>
      );
   }
}

export { SearchPanel };