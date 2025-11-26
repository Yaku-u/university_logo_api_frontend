import React from 'react';
import '../../assets/css/home.css'
// import type { HomeState } from '../../common/interface/home';

export default class HomeView extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='home'>
                <div>logo</div>
                <h1>首先要有一个大标题</h1>
                <p>这是副标题</p>
                <div>
                    <h2>这是首页内容</h2>
                    <p>来点图片（？）</p>
                    <p>大体介绍（好 nb 的一 api ）</p>
                </div>
                <button>文档</button>
                <s>炫酷的背景</s>
                <div>请输入文本</div>

            </div>
        );
    }
}