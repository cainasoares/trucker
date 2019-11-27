import React, { Component } from "react";

export default class Ver extends Component {
  state = {
    infos: []
  };

  async componentDidMount() {
    const { id } = this.props.match.params;    

    var response = localStorage.getItem('initialValues');

    response = JSON.parse(response);

    this.setState({
      infos: response.users.find(item => item.id === parseInt(id)),
    });

    console.log(this.state);    

    console.log(response.users.find(item => item.id === parseInt(id)));
    
  }

  render() {

    return (
      <>
        <div className="pageContent">
          
          <div className="container">
          </div>
        </div>
      </>
    );
  }
}
