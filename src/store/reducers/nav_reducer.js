//1.定义初始化变量
let initialState = [{
    key: 'main',
    link: '/Main',
    name: '首页'
  },
  {
    key: 'test',
    link: '/test',
    name: '测试'
  }
];

//2.reducer
const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REVERSE':
      return [...state].reverse();
    default:
      return state;
  }
}

//3.export
export default navReducer;