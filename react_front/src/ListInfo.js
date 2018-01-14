import React, { Component } from 'react';

class ListInfo extends Component {
    render() {
      return (
    
          <div className="bloc">

            <p> {this.props.name} </p>
            {/* <p>{this.props.image}</p> */}
            <img src={this.props.image} />
          
          </div>
  
          
      );
    }
  }
  
  export default ListInfo;
  