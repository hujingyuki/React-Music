import React from 'react';
import Bundle from './bundle';

const Index = (props) => (
  <Bundle load={() => import('../components/pages/index')}>
    {(Index) => <Index {...props}/>}
  </Bundle>
);

const Commodity = (props) => (
  <Bundle load={() => import('../components/pages/commodity')}>
    {(Commodity) => <Commodity {...props}/>}
  </Bundle>
);

const Grade = (props) => (
  <Bundle load={() => import('../components/pages/grade')}>
    {(Grade) => <Grade {...props}/>}
  </Bundle>
);

const Download = (props) => (
  <Bundle load={() => import('../components/pages/download')}>
    {(Download) => <Download {...props}/>}
  </Bundle>
);

const appRouter = [
  { 
    path: '/',
    exact: true,
    component: Index
  },
  { 
    path: '/primary',
    component: Commodity
  },
  { 
    path: '/middle',
    component: Commodity
  },
  { 
    path: '/grade',
    component: Grade
  },
  { 
    path: '/download',
    component: Download
  }
]

export default appRouter;