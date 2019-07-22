import React, { Component } from 'react';

import Loader from '../components/loader/loader';
import Dashboard from '../components/dashboard/dashboard';

class Home extends Component {

  constructor( props ) {
    super( props ); 

    this.state= {
      isLoaded: false,
      data: [],
      error: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/all')
      .then(res => res.json())
      .then(
        ( result ) => {

          this.setState({
            isLoaded: true,
            data: result
          });
        },
        ( error ) => {

          this.setState({
            isLoaded: true,
            error
          });
        }
     )
  }

  render() {
    
    const { error, isLoaded, data } = this.state;

    if ( error ) {
      return ( <div>Error {error.message}</div> );
    } 
    
    else if ( !isLoaded ) {
      return ( 
        <Loader />
      );
    } 
    
    else {
      return ( 
        <Dashboard data={data}/>
      );
    }
    
  }

}

export default Home;
