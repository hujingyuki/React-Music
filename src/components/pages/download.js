import React from 'react';
import '@/assets/css/download.scss';

export default class Download extends React.Component {
  constructor(){
    super();
    this.state = {
      downurl: 'http://www.pmgtsp.cn/music_assessment_portal/assessment/downloadExe'
    }
  }
  render() {
    return (
      <div className="download">
        <div className="center">
          <div className="computer">
            <div className="computer-content">
              <p className="bigtop">下载Windows客户端</p>
              <p className="smalltop">请下载音基Windows版客户端，进行完整的闯关训练；</p>
              <p className="smalltop">Mac版本，敬请期待。</p>
              <a className="btn" href={this.state.downurl}>立即下载</a>
            </div>
          </div>
          <div className="bottom">
            <h1>联系我们</h1>
            <p>服务时间：周一至周五 09:00~17:00</p>
            <p>电话: 010-57199944<span className="ml30">QQ:3299264827</span></p>
            <p>友情链接：
              <a href="http://www.moe.edu.cn" target="_blank" rel="noopener noreferrer">中华人民共和国教育部</a>&nbsp;&nbsp;
              <a href="http://www.ccom.edu.cn" className="ml15" target="_blank" rel="noopener noreferrer">中央音乐学院</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}