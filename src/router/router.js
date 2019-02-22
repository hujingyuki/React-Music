import React from 'react';
import Bundle from './bundle';

const Main = (props) => (
  <Bundle load={() => import('@/components/main')}>
    {(Main) => <Main {...props}/>}
  </Bundle>
);

const appRouter = [
  { 
    path: '/Main',
    exact: true,
    component: Main,
  },
  { 
    path: '/Test',
    component: Main
  }
]

export default appRouter;