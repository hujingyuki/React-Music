import React from 'react';
import Bundle from './bundle';

const Index = (props) => (
  <Bundle load={() => import('../components/Home/index')}>
    {(Index) => <Index {...props}/>}
  </Bundle>
);

const Commodity = (props) => (
  <Bundle load={() => import('../components/Commodity')}>
    {(Commodity) => <Commodity {...props}/>}
  </Bundle>
);

const Grade = (props) => (
  <Bundle load={() => import('../components/Grade')}>
    {(Grade) => <Grade {...props}/>}
  </Bundle>
);

const Download = (props) => (
  <Bundle load={() => import('../components/Download')}>
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
    path: '/senior',
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