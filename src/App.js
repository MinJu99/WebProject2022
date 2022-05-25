import logo from './logo.svg';
import './App.css';
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsChatTextFill } from "react-icons/bs";


function App() {

  return (
    <div className="App">
      {/* navigation */}
      <div className="Menu-nav">
        <div> What's Chats </div>
      </div>
      <div className="Menu-nav-explan">
        <div> Stay connected with your family and friends </div>
      </div>

      {/* 버튼1 */}
      <div className='Menu-Local-Chat-box'>
        <BsFillChatDotsFill className="direct_chat_icon"/>
        <div className='Local_chat'> Local Chat </div>
      </div>

      {/* 버튼2 */}
      <div className={'Menu-Global-Chat-box'}>
        <BsChatTextFill className="text_reporter_icon"/>
        <div className='Global_chat'> Global Chat </div>
      </div>
      
    </div>
  );
}

export default App;
