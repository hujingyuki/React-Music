import React from 'react';
import {Button} from 'antd';
import '@/assets/css/comBox.scss';

export default class ComBox extends React.Component {
  /* constructor(props){
    super(props);
    this.props = {
      item:{}
    }
  } */

  /* componentWillMount(){
    console.log(this.props)
  } */
  render() {
    const btn =  this.props.item.isCharge 
      ? <Button type='primary' className="leftbtn" onClick={this.toPay(this.props.item.commodityId)}>立即购买</Button>
      : <Button className='leftbtn' onClick={this.freePay(this.props.item.commodityId)}>免费加入</Button>

    const price =  this.props.item.isCharge 
      ? <h2> 套餐价:<span> <i>￥</i>{this.props.item.discountPrice}</span><span>[￥{this.props.item.originalPrice}]</span></h2>
      : ''

    const content = this.props.item.content 
      ? this.props.item.content.split('+').map((temp,index)=>{
          return <div key={index} v-html={temp} className="price"></div>
        })
      : ''
    const titleFlag = this.props.item.titleFlag 
      ? (this.props.item.titleFlag === 'New' 
        ? <i className="new"></i>
        : <span className="discount"><i>{this.props.item.titleFlag}</i><i>起</i></span>)
      : ''
      
    return (
      <section className="section">
        <h1>
          {this.props.item.title}·
          <span className="spantitle">
            {this.props.item.subTitle}
            {titleFlag}
          </span>
        </h1>
        <p className="p-line">{this.getDes(this.props.item.type)}</p>
        <p>包含</p>
        <div className="price-box">
          {content}
        </div>
        {price}
        {btn}
      </section>
    )
  }

  toPay(){}
  freePay(){}
  getDes(){}
}