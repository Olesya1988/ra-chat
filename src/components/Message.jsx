import { Component } from "react";

export class Message extends Component {
  render() {
    const { list } = this.props;

    return (
      <>
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">{list.time}</span> &nbsp; &nbsp;
            <span className="message-data-name">{list.from.name}</span>
            <i className="fa fa-circle me"></i>
          </div>
          <div className="message other-message float-right">{list.text}</div>
        </li>
      </>
    );
  }
}
