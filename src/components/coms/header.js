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
        name: '首页'
      },
      { 
        path: '/primary',
        name: '音乐初级闯关'
      },
      { 
        path: '/middle',
        name: '音乐中级闯关'
      },
      { 
        path: '/grade',
        name: '我的闯关'
      },
      { 
        path: '/download',
        name: '下载客户端'
      }]
    }
  }

  render() {
    return (
      <header className='header'>
        <div className='center'>
          <span className="logo">音乐系统</span>
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