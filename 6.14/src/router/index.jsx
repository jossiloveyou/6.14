import React from 'react';
import { withRouter, BrowserRouter, Route, NavLink, Redirect, Switch} from 'react-router-dom'
import { Home, Login, Table } from './assembly'
import {renderRoutes } from 'react-router-config'




const Root = ({ route }) => {
    console.log(route,1)
    return <>{renderRoutes(route.routes)}</>
}
const routes = [ 
    {
        path:'/home',
        component:Home,
        routes: [
            {
                path:'/home/table',
                component:Table
            },
        ]
    },
    {
        path:'/login',
        component:Login,
    }
]
    
export default class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
        )
    }
}
