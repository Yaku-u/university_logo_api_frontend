import React from 'react'
import '../assets/css/apiExample.less'

const exampleData = [
    {
        title: 'Example 1: Get University Logo',
        descriptions: 'This example demonstrates how to retrieve a university logo using the API.',
        code: `
        import axios from 'axios';
        `
    },
    {
        title: 'Example 2: Search Universities',
        descriptions: 'This example shows how to search for universities based on specific criteria.',
        code: `
        import axios from 'axios';
        `
    },
    {
        title: 'Example 3: Update University Information',
        descriptions: 'This example illustrates how to update university information using the API.',
        code: `
        import axios from 'axios';
        `
    }
]

interface ExampleProps {
    title: string
    descriptions: string
    code: string
}


const ExampleItem = ({ title, descriptions, code }: ExampleProps) => (
    <div className="example-item">
        <div className="example-text">
            <div className="section">{title}</div>
            <p>{descriptions}</p>
        </div>
        <div className="example-code">
            <pre>
                <code>{code.trim()}</code>
            </pre>
        </div>
    </div>
)

export default class Example extends React.Component {
    render() {
        return (
            <div className="api-example">
                <div className="example-container">
                    {exampleData.map((f, index) => (
                            <ExampleItem key={index} {...f} />
                        ))}
                </div>
            </div>
        )
    }
}
