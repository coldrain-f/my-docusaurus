---
slug: TIL-221006
title: 2022-10-06(목) TIL
authors:
  name: coldrain-f
  title: Backend Engineer @
  url: https://github.com/coldrain-f
  image_url: https://avatars.githubusercontent.com/u/81298415?v=4
tags: [알고리즘, 프로그래머스, 스웨거, NestJS, TIL]
---

오늘은 원티드 프리온보딩 때 진행했던 SNS API 프로젝트의 스웨거 설정을 적용해봤고,
스웨거 설정을 적용하던 중 하나의 의문점이 생겼습니다.

NestJS 인터셉터로 컨트롤러의 응답 포맷을 설정하고 나면
실제 서버에게 응답받는 JSON 포맷과 스웨거에서 설정한 응답 포맷이 맞지 않을 것 같은데,
이를 서로 맞춰주는 방법이 없을까 하는 의문이었습니다.

```json title='기존 응답 포맷'
{
  "id": 1,
  "title": "title",
  "content": "content"
}
```

기존에는 이런 식으로 응답 값을 반환했었고, 이를 NestJS의 인터셉터를 적용해서 성공 여부와 data를 분류하여
응답 값을 반환하고 싶었습니다.

```json title='인터셉터 적용 후 응답 포맷'
{
  "success": true
  "data": {
    "id": 1,
    "title": "title",
    "content": "content"
  }
}
```

여기까지는 원하던 방향이라 좋았지만, 스웨거의 응답 예시 포맷은 인터셉터 적용 후의 포맷이 아니라,
기존의 응답 포맷으로 보여진다는 게 문제였습니다.
그도 그럴 것이 스웨거는 실제 서버에서 인터셉터가 적용되어, 응답 값이 바꾼 후의 결과를 알 방법이 없기 때문이었습니다.

가장 좋은 해결 방법은 스웨거에서 이를 적용할 수 있는 설정 방법이 있는지 찾아보는 것이었지만,
제 능력으로는 아무리 찾아봐도 찾을 수 없었습니다.

대신 차선책은 하나 발견했습니다.

```typescript title='스웨거 적용 핸들러'
@ApiOkResponse({
  schema: {
    example: {
      success: true,
      data: {
        "id": 1,
        "title": "title",
        "content": "content"
      }
    }
  },
})
@Get(':id')
async findOne(@Param('id', ParseIntPipe) boardId: number): Promise<BoardDetailInfo> {
  return await this.boardsService.getDetail(boardId);
}
```

이런 식으로 `@ApiResponse()` 데코레이터에서 `schema` 속성으로
예시 응답 포맷을 직접 적어주는 방법이었습니다. 이 방법은 스웨거 설정 코드가 많이 길어진다는 단점이 있지만,
아직은 이 방법 말고는 찾을 수 없었기 때문에 일단은 이렇게 적용해봤습니다.

그리고... 다음 주 화요일에 면접 일정이 하나 잡혔기 때문에 그전까지는 면접 준비를 할 생각입니다.
오늘의 목표 중 하나였던 문서 리뉴얼은 너무 피곤해서 하지 못했고, 프로그래머스 Lv.1 문제는 3개 정도 풀었습니다.

매번 공부한 내용을 문서로 남기려면 실제 공부 시간보다 문서 작성이 훨씬 오래 걸려서,
하루의 공부량을 잘 조절해야 할 것 같다는 생각이 들었습니다.

[알고리즘 > 프로그래머스 > Lv.1 > x만큼 간격이 있는 n개의 문자](http://coldrain-f.netlify.app/algorithm/프로그래머스/Lv.%201/x만큼-간격이-있는-n개의-숫자) <br/>
[알고리즘 > 프로그래머스 > Lv.1 > 나머지가 1이 되는 수 찾기](http://coldrain-f.netlify.app/algorithm/프로그래머스/Lv.%201/나머지가-1이-되는-수-찾기) <br/>
[알고리즘 > 프로그래머스 > Lv.1 > 콜라츠 추측](http://coldrain-f.netlify.app/algorithm/프로그래머스/Lv.%201/콜라츠-추측)
