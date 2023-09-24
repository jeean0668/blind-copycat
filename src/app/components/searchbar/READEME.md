

## Searching Bar

### Searching Bar 추가 방법


Searching Bar의 레이아웃을 만들었습니다.
Click 해서 검색하는 기능을 추가해야 합니다.
```typescript

const Page1:any=()=>{
    return (
        <div className="first-page">
            <div className="first-page column left">
                <SearchingBar type="text" placeholder="text" id = "main-search" imgsrc="./search.svg"></SearchingBar>
            </div>
            <div className="first-page column right">right column</div>
        </div>
    );
};
       
```

SearchingBar 라는 위젯을 추가해주면 됩니다.
- parameter 설명
  - text : input type (현재는 "text"만 구현되어 있음)
  - placeholder : default text, 아무것도 누르지 않은 상태에서 사용자에게 보여지는 단어입니다.
  - id : searchingBar.css에 작성된 main-search 라는 wrapper div의 id 입니다. 
  - imgsrc : 검색 버튼 이미지의 경로를 삽입합니다.
  