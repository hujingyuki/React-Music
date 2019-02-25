import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from "antd";
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
        </div>
      </header>
    );
  }

  handlerNav(e) {
    this.setState({activeNav: e.key});
  }
}