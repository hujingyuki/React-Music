import React from 'react';
import { Button } from 'antd';
import '../css/notlogin.scss';

export default class NotLogin extends React.Component {
  render() {
    return (
      <div className='not-login center'>
        <p>请登录网站，查看完整页面~</p>
        <Button type="primary" className="btn">前往登录</Button>
      </div>
    )
  }
}