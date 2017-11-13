import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import APIRequest from '../utils/utils';

class Chart extends Component {

    constructor(props) {
        super(props)

        this.state = {
          chart: [],
          isLoaded: false
        }

        APIRequest('http://dev.4all.com:3050/pageViews')
        .then(data => {
          this.setState({
            chart: data,
            isLoaded: true
          })
        })
    }

    render(){

        return(

            <ResponsiveContainer>
                <LineChart data={this.state.chart} style={ { top: 5, left: -15, right: 5, bottom: 5 } }>
                <Line type="monotone" dataKey="views" strokeWidth="2" stroke="#30a4ff" />
                <CartesianGrid stroke="#ccc" />
                <Tooltip />
                <XAxis dataKey="month" />
                <YAxis dataKey="views" />
                </LineChart>
            </ResponsiveContainer>
        );
    }

}

export default Chart;