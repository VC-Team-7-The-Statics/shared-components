# Shared Components

Shared components for team 'The Statics' at Vanilla Coding bootcamp.

## Announcement

```
- Storybook update is coming in about 1 week.
```

## Styles

```
Default styles
- font-style: "Roboto"
- font-size: 12px;

<Title />
- font-size: 15px;
- font-weight: bolder;

<Button />
- font-size: 13px;
```

## Components

- Title
- Input
- Select
- Button
- Checkboxes
- Textarea
- RequestCard

## How to use

### Title

```
<Title value="This is title!" />
```

### Subtitle

```
<Subtitle value="This is subtitle!" />
```

### Input

```
<Input01 placeholder="입력해주세요." />
<Input02 placeholder="입력해주세요." />
```

### Select

```
<Select defaultValue="초기에 보여주는 옵션입니다. 두 내용을 맞춰주세요.">
  <Option value="초기에 보여주는 옵션입니다. 두 내용을 맞춰주세요." disabled></Option>
  <Option value="hello1"></Option>
  <Option value="hello2"></Option>
  <Option value="hello3"></Option>
</Select>
```

### Button

```
<Button01 type="button">등록하기</Button01>
<Button02 type="button">등록하기</Button02>
```

### Checkbox

```
<Checkbox value="checkbox"></Checkbox>
```

### Checkboxes

```
<Checkboxes values={["html", "css", "js"]} />
```

### Textarea

```
<Textarea placeholder="내용을 입력해주세요." />
```

### RequestCard

```
<RequestCard
  requester="ken"
  title="안녕하세요 고수님~"
  content="채팅 기능을 못만들어서 연락드렸어요"
/>
```

### ChatCard

```
<ChatCard
  profileImage={"https://randomuser.me/api/portraits/men/3.jpg"}
  name="공유정"
  chatText="첫 눈에 반했어요!"
  time="2022/03/12 13:00:43"
/>
```

### ChatBalloon

```
<ChatBalloon text="hello"></ChatBalloon>
```
