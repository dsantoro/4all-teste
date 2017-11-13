import React,  { Component } from 'react';
import APIRequest from '../utils/utils';
import image from '../orange.jpg';

class Chat extends Component {

    constructor(props) {
        super(props)

        APIRequest('http://dev.4all.com:3050/messages')
        .then(data => {
          this.setState({
            messages: data
          })
        })

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
          messages: [],
        }
      }

      handleChange(event) {

        this.setState({ [event.target.name] : event.target.value })
      }

      handleSubmit(event) {

        event.preventDefault();

        this.state.messages.push({
          userName: 'Eu',
          portrait: image,
          displayPortraitLeft: true,
          message: this.state.text,
          time: '1 minute ago'
        })

        this.setState({
          text: '',
          messages: [...this.state.messages]
        })
      }

    render(){

        return(

           <div>
                <div className="chat-shell el-shadow">

                    <ul className="chat-board">
                    { this.state.messages.map(function(data, i){
                        return(
                        <li key={ i }>
                        <div className={`flex each-message ${(data.displayPortraitLeft !== true ? 'row-reverse' : '')}` }>
                            <img width={80} height={80} src={ data.portrait } alt="" />
                            <div className="message">
                            <span className="author">{ data.userName } <span className="time">{ data.time }</span></span>
                            <p>{ data.message }</p>
                            </div>
                        </div>
                        </li>
                        )
                    }) }
                    </ul>
                </div>

                <form action="" onSubmit={ this.handleSubmit }>
                    <div className="input-group el-shadow">
                    <input onChange={ this.handleChange }
                    className="input-group-field"
                    type="text"
                    name="text"
                    value={ this.state.text }
                    placeholder="Type your message here" />
                    <div className="input-group-button">
                        <button className="button">Send</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Chat;