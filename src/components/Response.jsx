import { Component } from "react";

export class Response extends Component {
  render() {
    const { list } = this.props;

    return (
      <>
        <li>
          <div className="message-data">
            <span className="message-data-name">
              <i className="fa fa-circle online"></i>
              {list.from.name}
            </span>
            <span className="message-data-time">{list.time}</span>
          </div>
          <div className="message my-message">{list.text}</div>
        </li>
      </>
    );
  }
}
