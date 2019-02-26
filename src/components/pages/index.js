import React from 'react';
import { Swiper } from '../coms';
import IndexCom from '../coms/indexCom';

export default class Index extends React.Component {
  render(){
    return (
      <div>
        <Swiper></Swiper>
        <IndexCom></IndexCom>
      </div>
    )
  }
}