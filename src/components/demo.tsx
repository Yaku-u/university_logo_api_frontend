import React from 'react';
import type { DemoProps } from '../common/interface/demo';

export default class Demo extends React.Component<DemoProps> {
  constructor(props: DemoProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div>
        <p>
          DemoComponent: Message from Parent Component is <b>{this.props.demoText}</b>
        </p>
      </div>
    );
  }
}
