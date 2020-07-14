import React,{Component} from "react";
import { Cascader } from 'antd';

export default class MachineCader extends Component{
    state = {
        options: [
            {
                value: 'hezha',
                label: '合闸',
                children: [
                    {
                        value: 'current',
                        label: '电流',
                    },
                    {
                        value: 'voltage',
                        label: '电压',
                    },
                ],
            },
            {
                value: 'fenzha',
                label: '分闸',
                children: [
                    {
                        value: 'current',
                        label: '电流',
                    },
                    {
                        value: 'voltage',
                        label: '电压',
                    },
                ],
            },
            {
                value: 'chuneng',
                label: '储能',
                children: [
                    {
                        value: 'current',
                        label: '电流',
                    },
                    {
                        value: 'voltage',
                        label: '电压',
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
                defaultValue={['hezha', 'current']}
                options={this.state.options}
                onChange={this.onChange}
            />
        )
    }
}