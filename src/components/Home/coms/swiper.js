import React from 'react';
import { Carousel } from  'antd';
import { $api } from '@/config';
import '../css/swiper.scss';

export default class Swiper extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [],
      baseUrl: 'http://www.pmgtsp.cn'
    }
  }

  componentWillMount() {
    this.getList();
  }

  render(){
    return (
      <Carousel autoplay className='center'>
        {this.state.list.map(item => {
          return (
            <div className='swiper' key={item.id}>
              <img src={this.state.baseUrl + item.path} alt={item.title}></img>
            </div>
          )
        })}
      </Carousel>
    )
  }
  
  //在线获取轮播图数据
  async getList(){
    let res = await $api['apis/swiperlist']();
    this.setState({list: res.data.advertisementlist});
  }
}