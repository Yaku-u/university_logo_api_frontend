import React from 'react';
import './index.less'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Title from './components/Title'
import Example from './components/ApiExample'
import Features from './components/Features'

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="app">
        <Banner />
        <Title />
        <Features />
        <Example />
        <Footer />
      </div>
    );
  }
}
