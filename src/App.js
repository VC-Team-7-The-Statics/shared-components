import "./App.scss";
import "./_reset.scss";
import Button from "./lib/components/Button";
import Select from "./lib/components/Select";
import Option from "./lib/components/Option";
import Input from "./lib/components/Input";
import Checkbox from "./lib/components/Checkbox";
import Checkboxes from "./lib/components/Checkboxes";
import Textarea from "./lib/components/Textarea";
import RequestCard from "./lib/components/RequestCard";

function App() {
  return (
    <center className="container">
      <h1>Shared Components</h1>
      <div className="component-container">
        <h2 className="title">Input</h2>
        <div className="content">
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
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Button</h2>
        <div className="content">
          <Button type="button">등록하기</Button>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Checkbox</h2>
        <div className="content">
          <Checkbox value="html"></Checkbox>
          <Checkbox value="css"></Checkbox>
          <Checkbox value="js"></Checkbox>
          <Checkboxes>
            <Checkbox value="html"></Checkbox>
            <Checkbox value="css"></Checkbox>
            <Checkbox value="js"></Checkbox>
          </Checkboxes>
        </div>
      </div>
      <div className="component-container">
        <h2 className="title">Textarea</h2>
        <div className="content">
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
