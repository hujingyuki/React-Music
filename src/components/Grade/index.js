import React from 'react';
import './css/grade.scss';
import { NotLogin } from './coms';

export default class Grade extends React.Component {
  render(){
    const show = sessionStorage.getItem('_USERID')
      ? ''
      : <NotLogin></NotLogin>
    return (
      <main className= {sessionStorage.getItem('_USERID')?'':'gray'}>
        {show}
      </main>
    )
  }
}