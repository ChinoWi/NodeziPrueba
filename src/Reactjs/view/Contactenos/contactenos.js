import React from 'react';
import Nodezi from './prueba'

var style={
  contact:{
      textAlign:'center',
      padding:'20px'
  },
};

const ViewContactenos=React.createClass({


    render(){
        return(
            <div style={style.contact}>
                <Nodezi></Nodezi>
            </div>
        );
    }
});
export default ViewContactenos;