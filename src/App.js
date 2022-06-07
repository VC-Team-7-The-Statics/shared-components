import "./App.scss";
import Button01 from "./lib/components/Button01";
import Button02 from "./lib/components/Button02";
import Select from "./lib/components/Select";
import Option from "./lib/components/Option";
import Input from "./lib/components/Input";
import Checkboxes from "./lib/components/Checkboxes";
import Textarea from "./lib/components/Textarea";
import RequestCard from "./lib/components/RequestCard";
import Title from "./lib/components/Title";

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
        <h2 className="title">Input</h2>
        <div className="content">
          <Input placeholder="입력해주세요." />
          <Input placeholder="입력해주세요." />
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
        <h2 className="title">Checkbox</h2>
        <div className="content">
          <Checkboxes values={["html", "css", "js"]} />
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
        <h2 className="title">Request Card</h2>
        <div className="content">
          <RequestCard
            requester="ken"
            title="안녕하세요 고수님~"
            content="채팅 기능을 못만들어서 연락드렸어요"
          ></RequestCard>
          <RequestCard
            requester="ken"
            title="안녕하세요 고수님~"
            content="채팅 기능을 못만들어서 연락드렸어요"
          ></RequestCard>
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
