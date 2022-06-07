# Shared Components

공통 컴포넌트를 저장하는 리포지토리 입니다.

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

### Input

```
<Input placeholder="입력해주세요." />
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
