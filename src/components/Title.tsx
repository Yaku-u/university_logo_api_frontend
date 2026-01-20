import React from "react"
import '../assets/css/title.less'
import { Button } from 'antd'
import logos from '../assets/img/b.png'


export default class Title extends React.Component {
    render() {
        return (
            <div className="home-page">
                <div className="logos-img">
                    <img src={logos} alt="" />
                    <img src={logos} alt="" />
                    <img src={logos} alt="" />
                </div>
                <div className="image-mask"></div>
                <div className="home-text">
                    <div className="title">咕咕<span>嘎嘎</span>咕咕嘎嘎</div>
                    <div className="description">蹦蹦蹦蹦蹦蹦蹦😡，蹦蹦蹦蹦蹦蹦😡<br />在光绪二十六年🧐，神助拳义和团👊</div>
                    <Button type='primary'>古咕顾</Button>
                </div>
            </div>
        )
    }
}