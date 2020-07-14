import React,{Component} from "react";
import { Cascader } from 'antd';

export default class WirelessCader extends Component{
    state = {
        options: [
            {
                value: 'uparm',
                label: '上臂',
                children: [
                    {
                        value: 'A',
                        label: 'A组',
                    },
                    {
                        value: 'B',
                        label: 'B组',
                    },
                    {
                        value: 'C',
                        label: 'C组',
                    },
                ],
            },
            {
                value: 'lowarm',
                label: '下臂',
                children: [
                    {
                        value: 'A',
                        label: 'A组',
                    },
                    {
                        value: 'B',
                        label: 'B组',
                    },
                    {
                        value: 'C',
                        label: 'C组',
                    },
                ],
            },
            {
                value: 'busbar',
                label: '母排',
                children: [
                    {
                        value: 'A',
                        label: 'A组',
                    },
                    {
                        value: 'B',
                        label: 'B组',
                    },
                    {
                        value: 'C',
                        label: 'C组',
                    },
                ],
            },
            {
                value: 'cable',
                label: '电缆',
                children: [
                    {
                        value: 'A',
                        label: 'A组',
                    },
                    {
                        value: 'B',
                        label: 'B组',
                    },
                    {
                        value: 'C',
                        label: 'C组',
                    },
                ],
            },
        ],
    }
    onChange(values) {
        console.log(values);
    }
    render() {
        return (
            <Cascader
                defaultValue={['uparm', 'A']}
                options={this.state.options}
                onChange={this.onChange}
            />
        )
    }
}