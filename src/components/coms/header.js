import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button } from "antd";
import '@/assets/css/header.scss';

export default class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      activeNav : '/',
      navList: [{ 
        path: '/',
        name: 'Home'
      },
      { 
        path: '/primary',
        name: 'Primary'
      },
      { 
        path: '/senior',
        name: 'Senior'
      },
      { 
        path: '/grade',
        name: 'My Grade'
      },
      { 
        path: '/download',
        name: 'Download'
      }]
    }
  }

  render() {
    const userShow = sessionStorage.getItem('USERID') 
      ? (<span className='login'>
          <Button type='primary'>{sessionStorage.getItem('USERNAME')}</Button>
          <Button>{sessionStorage.getItem('USERNAME')}</Button>
        </span>)
      : (<span className='login'>
          <a onClick={this.login}>登录 </a>
          <span>/ </span>
          <a onClick={this.register}>注册</a>
        </span>);

    return (
      <header className='header'>
        <div className='center'>
          <span className="logo">React-Music</span>
          <Menu mode='horizontal' selectedKeys={[this.state.activeNav]} onClick={this.handlerNav}>
            {this.state.navList.map(item => {
              return (<Menu.Item key={item.path}>
                <Link to={item.path}>{item.name}</Link>
              </Menu.Item>)
            })}
          </Menu>
          { userShow }
        </div>
      </header>
    );
  }

  handlerNav(e) {
    this.setState({activeNav: e.key});
  }
}