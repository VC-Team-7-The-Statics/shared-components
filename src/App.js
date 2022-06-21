import "./App.scss";
import Button01 from "./lib/components/Button01";
import Button02 from "./lib/components/Button02";
import Select from "./lib/components/Select";
import Option from "./lib/components/Option";
import Input01 from "./lib/components/Input01";
import Input02 from "./lib/components/Input02";
import Textarea from "./lib/components/Textarea";
import Title from "./lib/components/Title";
import Subtitle from "./lib/components/Subtitle";
import RequestCard from "./lib/components/RequestCard";
import UserCard from "./lib/components/UserCard";
import ChatList from "./lib/components/ChatList";

function App() {
  return (
    <center className="container">
      <Title value="Shared Components" />
      <div className="component-container">
        <h2 className="title">Title</h2>
        <div className="content">
          <Title value="This is title!" />
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Subtitle</h2>
        <div className="content">
          <Subtitle value="This is subtitle!" />
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Input01</h2>
        <div className="content">
          <Input01 placeholder="입력해주세요." />
          <Input01 placeholder="입력해주세요." />
          <Input02 placeholder="입력해주세요." />
          <Input02 placeholder="입력해주세요." />
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Select</h2>
        <div className="content">
          <Select defaultValue="선택해주세요.">
            <Option value="선택해주세요." disabled></Option>
            <Option value="hello1"></Option>
            <Option value="hello2"></Option>
            <Option value="hello3"></Option>
          </Select>
          <Select defaultValue="선택해주세요.">
            <Option value="선택해주세요." disabled></Option>
            <Option value="hello1"></Option>
            <Option value="hello2"></Option>
            <Option value="hello3"></Option>
          </Select>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Button</h2>
        <div className="content">
          <Button01 type="button">등록하기</Button01>
          <Button01 type="button">등록하기</Button01>
          <Button02 type="button">등록하기</Button02>
          <Button02 type="button">등록하기</Button02>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Textarea</h2>
        <div className="content">
          <Textarea placeholder="내용을 입력해주세요." />
          <Textarea placeholder="내용을 입력해주세요." />
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">RequestCard</h2>
        <div className="content">
          <ul>
            <li>
              <RequestCard
                name="김진호"
                title="socket io로 채팅 기능 구현하는 게 어려워 커피챗 요청 드립니다."
                content="저 채팅 기능 같이 만들어주시겠어요?"
              />
            </li>
            <li>
              <RequestCard
                name="김진호"
                title="socket io로 채팅 기능 구현하는 게 어려워 커피챗 요청 드립니다."
                content="저 채팅 기능 같이 만들어주시겠어요?"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">UserCard</h2>
        <div className="content">
          <ul>
            <li>
              <UserCard
                name="김진호"
                image="https://randomuser.me/api/portraits/men/31.jpg"
              />
            </li>
            <li>
              <UserCard
                name="김진호"
                image="https://randomuser.me/api/portraits/men/31.jpg"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">ChatList</h2>
        <div className="content">
          <ul>
            <li>
              <ChatList
                image="https://randomuser.me/api/portraits/men/31.jpg"
                name="김진호"
              />
            </li>
            <li>
              <ChatList
                image="https://randomuser.me/api/portraits/men/31.jpg"
                name="김진호"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="component-container">
        <h2 className="title"></h2>
        <div className="content"></div>
      </div> */}
    </center>
  );
}

export default App;
