import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Button } from "antd";
import '@/assets/css/header.scss';
import UserModal from './modal';
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
      }],
      modalVisible: false,
      modalType: 'login'
    }
  }

  componentWillMount(){
    this.getCurrentPath();
  }

  componentWillReceiveProps() {
    this.getCurrentPath();
  }

  render() {
    //用户登录
    const userShow = sessionStorage.getItem('USERID') 
    ? (<span className='login'>
          <Button type='primary'>{sessionStorage.getItem('USERNAME')}</Button>
          <Button>{sessionStorage.getItem('USERNAME')}</Button>
        </span>)
      : (<span className='login'>
          <span onClick={this.setModalVisible.bind(this,true,'login')}>登录 </span>
          <span>/ </span>
          <span onClick={this.setModalVisible.bind(this,true,'register')}>注册</span>
        </span>);

    //菜单
    const items = this.state.navList.map(item => (
      <Menu.Item key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </Menu.Item>
    ));

    return (
      <header className='header'>
        <div className='center'>
          <span className="logo">React-Music</span>
          <Menu mode='horizontal' selectedKeys={[this.state.activeNav]} onClick={this.handlerNav.bind(this)}>
            {items} 
          </Menu>
          { userShow }
        </div>
        <UserModal setModalVisible ={this.setModalVisible.bind(this)}
                   visible = {this.state.modalVisible}
                   current = {this.state.modalType}
                   changeCurrent={this.changeTab.bind(this)}></UserModal>
      </header>
    );
  }

  handlerNav(e) {
    this.setState({activeNav: e.key});
  }

  getCurrentPath() {
    const path = this.context.router;
    const activeNav = path ? path.history.location.pathname : '/';
    this.setState({activeNav: activeNav});
  }

  setModalVisible(flag, type){
    this.setState({ modalVisible: flag }); 
    if (type) {
      this.changeTab(type);
    }
  }

  changeTab(cur){
    this.setState({ modalType: cur }); 
  }
}

Header.contextTypes = {
  router: PropTypes.object.isRequired
}