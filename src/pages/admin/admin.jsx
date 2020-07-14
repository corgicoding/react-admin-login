import React, {Component} from 'react'
// import {Redirect} from 'react-router-dom'
import { Layout } from 'antd'
// import memeoryUtils from '../../utils/memoryUtils'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import Content from '../../components/content'
import Error from '../../components/error'
/*后台管理的路由组件 */

const { Footer, Sider } = Layout
/*后台管理的路由组件 */
export default class Admin extends Component {
    render () {
        // const user = memeoryUtils.user
        // if(!user._id) {
        //     return <Redirect to='/login'/>
        // }
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content/>
                    <Footer style={{textAlign: 'center', color: '#aaaaaa'}}>推荐使用谷歌浏览器， 可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}