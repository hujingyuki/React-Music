import React from 'react';
import { Menu, Button} from 'antd';
// 引入connect函数用来生成Redux组件
import { connect } from 'react-redux';
import { reverseNav } from '@/store/actions';

class Main extends React.Component {
  render() {
    let navList = this.props.MenuList.map((item,index)=> (
      <Menu.Item key={item.key}>
        {item.name}
      </Menu.Item>
    ))

    return (
      <div>
        <Menu mode='horizontal'>
          {navList}
        </Menu>
        {/* <Button onClick={()=>{this.props.dispatch(reverseNav())}} type='primary'>反转菜单</Button> */}
        <Button onClick={this.props.handClick} type='primary'>倒置</Button>
      </div>
    );
  }
}

//redux
const mapStateToProps = (state, ownProps) => {
  return {
    MenuList: state.nav
  };
};

//也可以直接调用this.props.dispatch
const mapDispatchToProps = dispatch => ({
  handClick() {
    dispatch(reverseNav());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)