import React from 'react'
import '../assets/css/features.less'
import { icons } from 'antd/lib/image/PreviewGroup'



const features = [
    {
        title: '古',
        description: '清晨🌅阳光攀过窗隙缝🌇温暖了我的被窝🛌搅醒没做完的好梦🎠🎢🎡',
        icon: '🎡'
    },
    {
        title: '咕',
        description: '起身🕴手忙脚乱匆匆出门🏃🚪怕赶不上整点开走的巴士一路狂奔🚃 🏃💨',
        icon: '🏃'
    },
    {
        title: '顾',
        description: '铃声🛎唤不动我疲惫眼神😪怪自己昨夜睡的太沉🛌💤闹钟不够大声⏰',
        icon: '🛌'
    }
]


const FeatureItem = ({ title, description, icon }) => (
    <div className="feature-item">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
    </div>
)


export default class Features extends React.Component {
    render() {
        return (
            <div className="features">
                <div className="container">
                    <div className="section-title">why ?</div>
                    <div className="features-grid">
                        {features.map((f, index) => (
                            <FeatureItem key={index} {...f} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}