import React from 'react';
import {Button} from 'antd';
import '../css/comBox.scss';

export default class ComBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      des:[
        '模拟真实考试环境，专家团队紧扣大纲倾心命题，新教材新试题助您“顺利通关”！',
        '随学随练、定期巩固提升、更有神秘模拟题，最贴心的学习套餐伴您学练考！',
        '随学随练、定期巩固提升，最贴心的学习套餐伴您学练考！'
      ]
    }
  }

  /* componentWillMount(){
    console.log(this.props)
  } */
  render() {
    const btn =  this.props.item.isCharge 
      ? <Button type='primary' className="btn" onClick={this.toPay(this.props.item.commodityId)}>立即购买</Button>
      : <Button className='btn white' onClick={this.freePay(this.props.item.commodityId)}>免费加入</Button>

    const price =  this.props.item.isCharge 
      ? <h3> 套餐价:<span>￥</span><span>{this.props.item.discountPrice}</span><span>[￥{this.props.item.originalPrice}]</span></h3>
      : ''

    const content = this.props.item.content 
      ? this.formatArr(this.props.item.content).map((temp,index)=>{
          return <div key={index} className="price" dangerouslySetInnerHTML= {{__html: temp}}></div>
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

  // 根据内容进行字符格式化处理
  formatArr(str) {
    let strArr = str ? str.split('+') : [];
    let newArr = strArr.map((str,i)=>{
      let arr = str.split(':');
       return arr.length > 1 ? arr[0] + "<span class='blue'>[￥" + arr[1] + ']</span>' : arr[0];
    })
    return newArr;
  }
  toPay(){}
  freePay(){}
  /**
   * @desc 获取描述信息
   * @param type 套餐类型
   */
  getDes(type) {
    return type > 2 ? this.state.des[0] : this.state.des[type];
  }
}