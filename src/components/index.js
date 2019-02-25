import React from 'react';
import { Header, Footer } from './coms';

export default class Main extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}