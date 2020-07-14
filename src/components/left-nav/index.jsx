import React, {Component} from 'react'
import './index.less'

/*左侧导航组件 */
export default class LeftNav extends Component {
    constructor() {
        super();
        this.ClickLeft = this.ClickLeft.bind(this)
    }

    ClickLeft = (event) => {
        let element = event.target
        if (element.classList.contains('b') ) {
            // e.preventDefault()
            let es = document.querySelectorAll('.alightLeft')
            for (let i = 0; i < es.length; i++) {
                let e = es[i]
                e.classList.remove('alightLeft')
            }
            // console.log('classList', e.classList)
            // console.log('element',element)
            element.classList.add('alightLeft')
        }
    }

    render() {
        return (
            <div className="menu">
                <ul className="menubar" onClick={this.ClickLeft}>
                    <li className="menu-value b"><a href="">海门模型</a></li>
                    <li className="b alightLeft"><a href="">历史数据</a></li>
                    <li className="b"><a href="">采集测试</a></li>
                    <li className="b"><a href="">用户管理</a></li>
                </ul>
            </div>
        )
    }
}