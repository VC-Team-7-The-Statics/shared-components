# Shared Components

공통 컴포넌트를 저장하는 리포지토리 입니다.

## Components

- Input
- Select
- Button
- Checkbox
- Textarea
- RequestCard

## How to use

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
<Button type="button">등록하기</Button>
```

### Checkbox

```
<Checkbox value="html"></Checkbox>
<Checkbox value="css"></Checkbox>
<Checkbox value="js"></Checkbox>
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
