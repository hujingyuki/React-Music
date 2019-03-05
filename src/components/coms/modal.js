import React from 'react'
import { Modal, Tabs } from 'antd';
import { Login, Register } from './index';
import '@/assets/css/modal.scss';

export default class UserModal extends React.Component {
  render(){ 
    return (
      <Modal onCancel={this.hideModal.bind(this)} 
             onOk={this.hideModal.bind(this)}
             visible={this.props.visible}
             centered={true}
             footer={null}>
        <Tabs activeKey={this.props.current} onChange={this.changeCurrent.bind(this)}>
          <Tabs.TabPane tab="登录" key="login">
            <Login></Login>
          </Tabs.TabPane>
          <Tabs.TabPane tab="注册" key="register">
            <Register></Register>  
          </Tabs.TabPane>
        </Tabs>
      </Modal>
    )
  }

  hideModal() {
    this.props.setModalVisible(false);
  }

  changeCurrent(e) {
    this.props.changeCurrent(e);
  }
}