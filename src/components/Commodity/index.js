import React from 'react';
import { $api } from '@/config';
import { ComBox } from './coms';
import './css/commodity.scss';

export default class Commodity extends React.Component {
  constructor() {
    super();
    this.state = {
      classList:['based','based','simulated','simulated','primary','senior'],
      commodityList: []
    }
  }
  componentWillMount() { 
    let category = this.props.match.path.indexOf('primary') > -1 ? 1 : 2;
    this.getCommodityType(category);
  }

  render(){
    return (
      <div className='center'>
        {
          this.state.commodityList.map((item,index)=> {
            return <div className="unitbox" key={index}>
              <div className={'unitbox-box-card ' + this.state.classList[item.type-1]}>
                <p>{item.subTitle}</p>
                <p>{item.imgSubtitle}</p>
              </div>
              <div className='right-box'>
                <ComBox item={item}></ComBox>
              </div>
            </div>
          })
        }
      </div>
    )
  }

  //获取商品详情列表
  async getCommodity(commodityId) {
    let res = await $api['apis/getCommodityListById']({
      commodityId: commodityId,
      userId: sessionStorage.getItem('userid') || ''
    });
    if(res.code === '000000'){
      this.setState({commodityList: res.data.commodityData});
    }
  }

  /**
   * 获取商品id
   * @param {*} category 1：初级、2：中级
   */
  async getCommodityType(category){
    let res = await $api['apis/getExerciseFlow']({
      category: category,
      userId: sessionStorage.getItem('userid') || '' 
    });
    if(res.code === '000000'){
      let commodityId = res.data.commodities[0].id;
      this.getCommodity(commodityId);
    }
  }
}