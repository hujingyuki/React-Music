import React from 'react';
import { $api } from '@/config';
import '@/assets/css/indexCom.scss';

export default class IndexCom extends React.Component {
  constructor(){
    super();
    this.state = {
      flowList:[]
    }
  }

  componentWillMount() {
    this.initData();
  }

  render() {
    return(
      <div className='indexCom'>
        {this.state.flowList.map((item,index) => {
          return <div className='box' key={index}>
            <div className='center'>
              <p className='shine-title'>{item.title}</p>
              <p className='total'>{item.type ===1 ?'初级':'中级'}闯关总人数<span>{item.totalNum}</span></p>
              <div className='com'>
                <div className='left'>
                  <h1>音基<span>{item.type ===1 ?'初级':'中级'}闯关</span></h1>
                  <h2>{item.entitle}</h2>
                </div>
                <div className='right'>
                  {item.commodity.map((commodity,index)=>{
                    return <div className='innerbox' key={'innerbox'+index}>
                      <div>
                        <h1>{commodity.ctitle}</h1>
                        <h2>{commodity.entitle}</h2>
                        {!!commodity.ccontent && commodity.ccontent.length > 0 
                          ? (<div className="content">
                              <p>所含内容</p>
                              <ul>
                                {commodity.ccontent.split('+').map((li,index) =>{
                                  return <li key={'li'+index}>{li}</li>
                                })}    
                              </ul>
                            </div>)
                          : (<div className="devlop"><p>即将开放<br/>敬请期待</p></div>)
                        }
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    )
  }

  async initData() {
    let res = await $api['apis/getCommodityCategoryList']();
    this.setState({flowList: res.data.commodityCategory});
  }
}