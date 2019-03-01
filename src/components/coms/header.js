import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button } from "antd";
import '@/assets/css/header.scss';
//组件没传入history的时候使用context获取
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props){
    super(props);
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

  componentWillMount(){
    console.log('nav');
    this.setState({activeNav: this.getCurrentPath()});
  }

  componentWillReceiveProps() {
    console.log('update');
    this.setState({activeNav: this.getCurrentPath()});
  }

  render() {
    const userShow = sessionStorage.getItem('USERID') 
      ? (<span className='login'>
          <Button type='primary'>{sessionStorage.getItem('USERNAME')}</Button>
          <Button>{sessionStorage.getItem('USERNAME')}</Button>
        </span>)
      : (<span className='login'>
          <span onClick={this.login}>登录 </span>
          <span>/ </span>
          <span onClick={this.register}>注册</span>
        </span>);

    return (
      <header className='header'>
        <div className='center'>
          <span className="logo">React-Music</span>
          <Menu mode='horizontal' selectedKeys={[this.state.activeNav]} onClick={this.handlerNav.bind(this)}>
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

  getCurrentPath() {
    const path = this.context.router;
    const activeNav = path ? path.history.location.pathname : '/';
    return activeNav;
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
}