import { Component } from "react";
import { Message } from "./Message";
import { Response } from "./Response";
import { Typing } from "./Typing";

export class MessageHistory extends Component {  

  render() {
    const { list } = this.props;

    return (
      <ul>
        {list.map((el) => {
          console.log(el.type);

          switch (el.type) {
            case "message":
              return <Message key={el.id} list={el} />;
            case "response":
              return <Response key={el.id} list={el} />;
            case "typing":
                return <Typing key={el.id} list={el} />;
            default:
              return null;
          }
        })}
      </ul>
    );
  }
}
