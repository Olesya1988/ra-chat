import { Component } from "react";

export class Typing extends Component {
  render() {
    const { list } = this.props;

    return (
      <>
        <li>
          <div className="message-data">
            <span className="message-data-name">
              {list.from.name} набирает сообщение...
            </span>
          </div>
        </li>
      </>
    );
  }
}
