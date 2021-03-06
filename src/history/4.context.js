import React from 'react';
import ReactDOM from 'react-dom';
import {PropTypes} from 'prop-types';
class Container extends React.Component {
    getChildContext(){
        //返回一个对象，这个对象是就是子组件context对象
        return {color:'green'};
    }
    render() {
        return (
            <MessageList color={color} messages={this.props.messages}/>
        )
    }
}
Container.childContextTypes = {
  color:PropTypes.string
}
class MessageList extends React.Component {
    render(){
        return (
            <ul>
                {
                    this.props.messages.map((message,index)=><Message color={color} key={index} message={message}/>)
                }
            </ul>
        )
    }
}
class Message extends React.Component {
    render(){
        return (
            <li style={{color:this.context.color}}>{this.props.message}</li>
        )
    }
}
Message.contextTypes  = {
    color:PropTypes.string
}
let messages = [1, 2, 3];
let color =  'blue';
ReactDOM.render(
    <Container messages={messages} color={color}>
    </Container>
    , document.querySelector('#root'));