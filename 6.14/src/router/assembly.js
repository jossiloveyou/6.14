import React from 'react';
import Loadable from '@@/Loadable'

const Home= Loadable(() => import('@/pages/Home'))
const Login= Loadable(() => import('@/pages/login'))
const Table= Loadable(() => import('@/pages/table'))

export {
    Home,
    Table,
    Login,
}