import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import { Alert } from 'antd';

import { Form, Input, Icon, Button, } from 'antd'
import './login.less'
import TempEcharts from "../../components/echarts/tempEcharts";
/*用户登陆的路由组件 */

class Login extends Component {
    constructor() {
        super();
        this.state = {
            visibleError: false,
        }
    }
    handleSubmit = (event) => {

        // 阻止事件的默认行为
        event.preventDefault()

        // 对所有表单字段进行检验
        // this.props.form.validateFields(async (err, values) => {
        //     // 检验成功
        //     if (!err) {
        //         // console.log('提交登陆的ajax请求', values)
        //         // 请求登陆
        //         const {username, password} = values
        //
        //         // 调用分发异步action的函数 => 发登陆的异步请求, 有了结果后更新状态
        //         this.props.login(username, password)
        //
        //     } else {
        //         console.log('检验失败!')
        //     }
        // });

        // 得到form对象
        const form = this.props.form
        // // 获取表单项的输入数据
        const values = form.getFieldsValue()
        console.log('handleSubmit()', values)

        if (values.username === 'admin' && values.password === 'admin') {
            window.location.href = './'
        } else {
            this.setState({
                visibleError: true,
            })
        }
    }


    validatePwd = (rule, value, callback) => {
        console.log('validatePwd()', rule, value)
        if(!value) {
            callback('密码必须输入')
        } else if (value.length<4) {
            callback('密码长度不能小于4位')
        } else if (value.length>12) {
            callback('密码长度不能大于12位')
        } else {
            callback() // 验证通过
        }
        // callback('xxxx') // 验证失败, 并指定提示的文本
    }

    render () {
        const user = this.props.user
        if(user && user._id) {
            return <Redirect to='/admin'/>
        }

        // 得到具强大功能的form对象
        const form = this.props.form
        const { getFieldDecorator } = form;
        return (
            <div className = 'login'>
                <header className = 'login-header'></header>
                <section className = 'login-content'>
                    <div className="login-title">台州国家电网</div>
                    <div className="login-title2">物联网监控系统</div>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                /*
                              用户名/密码的的合法性要求
                                1). 必须输入
                                2). 必须大于等于4位
                                3). 必须小于等于12位
                                4). 必须是英文、数字或下划线组成
                               */
                            }
                            {
                                getFieldDecorator('username', { // 配置对象: 属性名是特定的一些名称
                                    // 声明式验证: 直接使用别人定义好的验证规则进行验证
                                    rules: [
                                        { required: true, whitespace: true, message: '用户名必须输入' },
                                        { min: 4, message: '用户名至少4位' },
                                        { max: 12, message: '用户名最多12位' },
                                    ],
                                    initialValue: 'admin', // 初始值
                                })(
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="用户名"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        {
                                            validator: this.validatePwd
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                    />
                                )
                            }

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" onClick = {this.tiaozhuan}>
                                登陆
                            </Button>
                        </Form.Item>
                        {this.state.visibleError ? (
                            <Alert
                                message="用户名密码错误"
                                description="您输入的用户名或密码错误，请重新输入"
                                type="error"
                                showIcon
                                closable
                            />
                        ) : null}
                    </Form>
                </section>
            </div>
        )
    }
}

const WrapLogin = Form.create()(Login)
export default WrapLogin