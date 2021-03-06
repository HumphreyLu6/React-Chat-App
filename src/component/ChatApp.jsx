import React, { Component } from 'react';
import '../App.css';
import socket from "../client/socket";
import {Link} from "react-router-dom";
import ChatMenu from "./ChatMenu";
import {Button, Row,Col} from "antd";
import ChatPart from "./ChatPart";


class ChatApp extends Component {
  constructor(props){
    super(props);
    this.state ={
        currentRoom:"general",
      
    }
  }

  switchRoom = (room) =>{

      this.setState({currentRoom:room});
  };

  render() {
    const {rooms} = this.state;

    return (
      <Row className="app-row">
        <Col className="menu-area" span={4}>
          <ChatMenu name={this.props.name} switch={this.switchRoom}/>
        </Col>

        <Col className="chat-area" span={20}>
          <ChatPart name={this.props.name} room={this.state.currentRoom}/>
        </Col>

        
        
      </Row>
      
    );
  }
}

export default ChatApp;
