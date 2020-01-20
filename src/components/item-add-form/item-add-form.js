import React, {Component} from 'react';

import './item-add-form.sass';

class ItemAddForm extends Component{
   constructor(props){
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.state = { 
         text: '' 
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e){
      e.preventDefault();
      const text = this.state.text;
      if (!text) return;
      this.props.handleAddItem(text);
      this.setState({text: ''});
   }

   handleChange(e){
      this.setState({text : e.target.value});
   }

   render(){
      return(
         <form 
            onSubmit={this.handleSubmit}
            className='added-container'>
            <input 
               className='added-container__input'
               type='text'
               placeholder='Enter text...'
               value={this.state.text}
               onChange={this.handleChange}/>  
            <button
               className='added-container__button'
               type='button'
               onClick={this.handleSubmit}>
                  Add Item
            </button>                         
         </form>         
      );
   }
}

export { ItemAddForm };