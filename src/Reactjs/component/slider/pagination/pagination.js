import React from 'react';

import PaginationDot from './paginationDot';

const styles = {
    root: {
        display: 'flex',
        justifyContent:'center',
        
    }
};

const Pagination=React.createClass({
    propTypes:{
        dots:React.PropTypes.number.isRequired,
        index:React.PropTypes.number.isRequired,
        onChangeIndex:React.PropTypes.func.isRequired
    },
    handleCLick:function (event,index) {
        this.props.onChangeIndex(index)
    },

   render(){
       const {
           index,
           dots
       }=this.props;

       const children=[];

       for(let i=0;i<dots;i++){
          children.push(
              <PaginationDot
                key={i}
                index={i}
                active={i===index}
                onClick={this.handleCLick}
              />
          )
       }

       return(
           <div style={styles.root}>
               {children}
           </div>
       );
   }
});

export default Pagination;