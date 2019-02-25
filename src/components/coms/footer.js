import React from 'react';
import { Row, Col } from 'antd';
import '@/assets/css/footer.scss';

export default class Footer extends React.Component{
  render(){
    return (
      <footer>
        <Row>
          <Col span={24} className='footer'>
            &copy;&nbsp;2019 音乐系统。All Rights Reserved.
          </Col>
        </Row>
    </footer>
    );
  }
}