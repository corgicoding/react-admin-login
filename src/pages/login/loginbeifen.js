import React, {Component} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
/*用户登陆的路由组件 */

class Login extends Component {

    render () {
        const onFinish = values => {
            console.log('Received values of form: ', values);
        };
        return (
            <div className = 'login'>
                {/*<div className='tittle'>*/}
                {/*    <div className="login-title">台州国家电网</div>*/}
                {/*    <div className="login-title2">物联网监控系统</div>*/}
                {/*</div>*/}
                <header className = 'login-header'></header>
                <section className = 'login-content'>
                    <div className="login-title">台州国家电网</div>
                    <div className="login-title2">物联网监控系统</div>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}

// const WrapLogin = Form.create()(Login)
export default Login