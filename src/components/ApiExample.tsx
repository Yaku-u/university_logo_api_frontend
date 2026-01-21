import React from 'react'
import '../assets/css/apiExample.less'

export default class Example extends React.Component {
    render() {
        return (
            <div className="api-example">
                <div className="example-container">
                    <div className="example-text">
                        <div className="section">咕咕 & 嘎嘎</div>
                        <p>
                            扶清灭洋，五十五天在北京，天无雨☁️<br />
                            地焦旱🔥🔥，鬼子眼珠皆发蓝🤡
                        </p>
                    </div>
                    <div className="example-code">
                        <pre>
                            <code>{codeSnippet.trim()}</code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

const codeSnippet = `
.example-code {
    flex: 1;
    background: #f9f9f9;
    padding: 1rem 2rem 0;
    border-radius: 2px;
    // box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    border: 0.5px solid #DEE2E6;
    overflow-x: auto;
}
`