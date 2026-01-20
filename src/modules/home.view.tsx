import React from 'react';
// import '../assets/css/home.less'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Title from '../components/Title'

export default class HomeView extends React.Component {
    render(): React.ReactNode {
        return (
            <div className='home'>
                <Banner />
                <Title /> 
                <Footer />
            </div>
        );
    }
}