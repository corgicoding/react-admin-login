import React, {Component} from "react";
import Button from "antd";
import TempEcharts from "../echarts/tempEcharts";
import HumEcharts from "../echarts/humEcharts";
import Error from "../error";
import MachineCader from "../casCader/machineCader";
import WirelessCader from "../casCader/wirelessCader";

import './index.less'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.ClickHum = this.ClickHum.bind(this)
        this.ClickTemp = this.ClickTemp.bind(this)
        this.ClickSwitch = this.ClickSwitch.bind(this)
        this.ClickStyle = this.ClickStyle.bind(this)
        this.ClickError = this.ClickError.bind(this)
        this.ClickDownload = this.ClickDownload.bind(this)
        this.ClickMachine = this.ClickMachine.bind(this)
        this.ClickWireless = this.ClickWireless.bind(this)
        // 添加图表判定的值
        this.state = {
            visibleAllData: '机械特性',
            visibleTemp:  false,
            visibleHum: false,
            visibleError: false,
            visibleSwitch: false,
            visibleDownload: true,
            visibleMachine: true,
            visibleWireless: false,
        }
    }
    ClickDownload () {
        let style = this.state.visibleAllData
        let temp = this.state.visibleTemp
        let hum = this.state.visibleHum
        if (temp || hum) {
            if (temp) {
                alert('接入' + style + '温度的接口')
            } else {
                alert('接入' + style + '湿度的接口')
            }
        } else {
            alert('接入' + style + '接口')
        }
    }

    ClickError(e) {
        this.setState({
            visibleTemp:  false,
            visibleHum: false,
            visibleError: true,
        })

    }

    ClickHum(e) {
        e.preventDefault()
        this.setState({
            visibleTemp:  false,
            visibleHum: true,
            visibleError: false,
        })
    }
    ClickTemp(e) {
        e.preventDefault()
        this.setState({
            visibleTemp:  true,
            visibleHum: false,
            visibleError: false,
        })
    }



    ClickStyle(e) {
        let element = e.target
        if (element.classList.contains('a') ) {
            // console.log('neirong',element.innerHTML !== '开关柜除湿机')
            this.setState({
                visibleAllData: element.innerHTML,
            })
            let boolean = element.innerHTML !== '开关柜除湿机'
            if (boolean) {
                // console.log('jinru')
                this.setState({
                        visibleSwitch: false,
                        visibleTemp:  false,
                        visibleHum: false,
                        visibleError: false,
                    }
                )
            }

            boolean = element.innerHTML !== '机械特性'
            if (boolean) {
                // console.log('jinru')
                this.setState({
                        visibleTemp:  false,
                        visibleHum: false,
                        visibleError: false,
                        visibleMachine: false,
                    }
                )
            }

            boolean = element.innerHTML !== '无线测温'
            if (boolean) {
                // console.log('jinru')
                this.setState({
                        visibleTemp:  false,
                        visibleHum: false,
                        visibleError: false,
                        visibleWireless: false,
                    }
                )
            }

                // e.preventDefault()
            let es = document.querySelectorAll('.alight')
            for (let i = 0; i < es.length; i++) {
                let e = es[i]
                e.classList.remove('alight')
            }
            // console.log('classList', e.classList)
            // console.log('element',element)
            element.classList.add('alight')
        }
        if (element.classList.contains('right') ) {
            // e.preventDefault()
            let es = document.querySelectorAll('.right')
            for (let i = 0; i < es.length; i++) {
                let e = es[i]
                e.classList.remove('alight')
            }
            // console.log('classList', e.classList)
            console.log('element',element)
            element.classList.add('alight')
        }
        // e.classList.add('alight')
    }

    ClickSwitch(e) {
        // e.preventDefault()
        this.setState({
            visibleSwitch: true,
            visibleTemp: true,
            visibleError: false,
        })
    }

    ClickMachine(e) {
        this.setState({
                visibleMachine: true,
            }
        )
    }

    ClickWireless(e) {
        this.setState({
            visibleWireless: true,
        })
    }
    
    render() {
        return (
            <div className='content'>
                <ul className = 'contentUl' onClick = {this.ClickStyle}>
                    <button className = 'a alight' onClick={this.ClickMachine}>机械特性</button>
                    <button className = 'a'>局部放电</button>
                    <button className = 'a' onClick={this.ClickWireless}>无线测温</button>
                    <button className = 'a' onClick={this.ClickSwitch}>开关柜除湿机</button>
                    <button className = 'a'>端子箱除湿机</button>
                    <button className = 'error' onClick={this.ClickError}>异常数据</button>



                    {this.state.visibleDownload ? (
                        <button className = 'right' onClick={this.ClickDownload}>下载</button>
                    ) : null}
                    {this.state.visibleSwitch ? (
                        <button className = 'right' onClick={this.ClickHum}>湿度</button>
                    ) : null}
                    {this.state.visibleSwitch ? (
                        <button className = 'right alight' onClick={this.ClickTemp}>温度</button>
                    ) : null}

                    {this.state.visibleMachine ? (
                        <MachineCader />
                    ) : null}
                    {this.state.visibleWireless ? (
                        <WirelessCader />
                    ) : null}


                </ul>

                {this.state.visibleTemp ? (
                    <TempEcharts className='tempTable' />
                ) : null}
                {this.state.visibleHum ? (
                    <HumEcharts className = 'hunTable' />
                ) : null}
                {this.state.visibleError ? (
                    <Error className = 'error' />
                ) : null}

            </div>
        )
    }
}