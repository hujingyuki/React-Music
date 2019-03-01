import React from 'react';
import { Swiper, IndexCom, Learn } from './coms';

export default class Index extends React.Component {
  render(){
    return (
      <div>
        <Swiper></Swiper>
        <IndexCom></IndexCom>
        <Learn></Learn>
      </div>
    )
  }
}