import React, {Component} from 'react'
import './index.less'
/*头部组件 */
export default class Header extends Component {
    constructor() {
        super();
        this.ClickAll = this.ClickAll.bind(this)
    }

    ClickAll = () => {

    }

    render() {
        return (
            <div className='header'>
                <button onClick={this.ClickAll}>全 屏</button>
            </div>
        )
    }
}