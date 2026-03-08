import React from "react"
import '../assets/css/title.less'

import logos from '../assets/img/bg.png'


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
                    <div className="title"><span>University Logo API</span></div>
                    <div className="description">A simple API for fetching university logos <br /></div>
                    <div className="button"><a href="">Get Started</a></div>
                </div>
            </div>
        )
    }
}