import React from 'react';
import '@/assets/css/learn.scss';

export default class Learn extends React.Component {
  constructor() {
    super();
    this.state = {
      list1: [
        {
          id: 1,
          name: '李煜',
          school: '总成绩：98分',
          src: require('@/assets/images/photo_03.png')
        },
        {
          id: 2,
          name: '王思尹',
          school: '总成绩：96分',
          src: require('@/assets/images/photo_05.png')
        },
        {
          id: 3,
          name: '周欣彤',
          school: '总成绩：92分',
          src: require('@/assets/images/photo_08.png')
        },
        {
          id: 4,
          name: '肖力坤',
          school: '总成绩：89分',
          src: require('@/assets/images/photo_10.png')
        }
      ],
      list2: [
        {
          id: 5,
          src: require('@/assets/images/photo_23.png')
        },
        {
          id: 6,
          src: require('@/assets/images/photo_25.png')
        },
        {
          id: 7,
          src: require('@/assets/images/photo_27.png')
        },
        {
          id: 8,
          src: require('@/assets/images/photo_17.png')
        },
        {
          id: 9,
          src: require('@/assets/images/photo_30.png')
        },
        {
          id: 10,
          src: require('@/assets/images/photo_32.jpg')
        },
        {
          id: 11,
          src: require('@/assets/images/photo_20.png')
        },
        {
          id: 12,
          src: require('@/assets/images/photo_35.png')
        },
        {
          id: 13,
          src: require('@/assets/images/photo_37.png')
        },
        {
          id: 14,
          src: require('@/assets/images/photo_39.png')
        },
        {
          id: 15,
          src: require('@/assets/images/photo_52.png')
        },
        {
          id: 16,
          src: require('@/assets/images/photo_68.png')
        },
        {
          id: 23,
          src: require('@/assets/images/photo_55.png')
        },
        {
          id: 17,
          src: require('@/assets/images/photo_57.png')
        },
        {
          id: 18,
          src: require('@/assets/images/photo_59.png')
        },
        {
          id: 19,
          src: require('@/assets/images/photo_61.png')
        },
        {
          id: 20,
          src: require('@/assets/images/photo_63.png')
        },
        {
          id: 21,
          src: require('@/assets/images/photo_65.png')
        },
        {
          id: 22,
          src: require('@/assets/images/photo_71.png')
        }
      ]
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='center'>
          <p className='shine-title'>他们都在学</p> 
          <div className='learner'>
            {this.state.list1.map(item => {
              return <div className='learnerDetail' key={item.id}>
                <img className="headimg" src={item.src} alt={item.name}/>
                <p className="name">{item.name}</p>
                <p className="school" title={item.school}>{item.school}</p>
              </div>
            })}
          </div>

          <div className='more_learner'>
            {this.state.list2.map( moreItem => {
              return <div className='moredetail' key={moreItem.id}>
                <img className="more_headimg" src={moreItem.src} alt={moreItem.name}/>
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}