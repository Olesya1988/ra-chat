import { MessageHistory } from "./components/MessageHistory";
import './App.css';
import list from '../src/components/items.json';

export default function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={list} />
        </div>
      </div>  
    </div>
  )
}