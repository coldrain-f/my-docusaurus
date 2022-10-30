---
slug: TIL-221030
title: 2022-10-30(일) TIL
authors:
  name: coldrain-f
  title: Backend Engineer @
  url: https://github.com/coldrain-f
  image_url: https://avatars.githubusercontent.com/u/81298415?v=4
tags: [자바, 스프링, TIL]
---

<!-- [](http://coldrain-f.netlify.app) <br/> -->


계속 NestJS의 TypeORM만 쓰다가 오랜만에 Java/Spring의 JPA를 쓰니까 미묘하게 달라서 헷갈리는 점이 많았습니다.
그래도 이전에 정리해놓은 자료나 진행했던 프로젝트가 GitHub에 있어서 참고하면서 진행하고 있습니다.

```javascript showLineNumbers
@Transactional
public void modify(Long wordId, WordModifyRequestDTO wordModifyRequestDTO) {
    final Word wordEntity = wordRepository.findById(wordId)
            .orElseThrow(() -> new IllegalArgumentException("Word not found."));

    wordEntity.changeName(wordModifyRequestDTO.getName());
    wordEntity.changeMeaning(wordModifyRequestDTO.getMeaning());
    wordEntity.changeDescription(wordModifyRequestDTO.getDescription());
}
```
TypeORM으로 엔티티를 수정할 때는 수정한 다음에 DB에 다시 save()를 해줬었는데,
JPA에서는 변경 감지라고 해서 엔티티를 조회해온 후 값만 변경해 주면 돼서 굉장히 편리했습니다.
그런데 `@Transactional` 애노테이션을 붙여줘야 적용된다는 점을 까먹고 있어서 삽질을 좀 했습니다.

- JPA는 변경 감지(Dirty Checking)라는 개념이 있다.
- JPA의 `findById()` 메서드로 조회해온 엔티티는 영속 상태가 된다.
- (영속성 컨텍스트에 이미 있으면 있는 것을 활용, 없으면 DB에서 조회 후 영속성 컨텍스트에 저장)
- 영속 상태의 엔티티는 값만 변경해 주면 트랜잭션이 commit 되는 시점에 DB에 반영된다.
- 즉, 변경 감지는 변경된 값을 감지해서 commit 시점에 update 되는 기능이다.

앞으로 까먹지 않게 간략하게 정리했습니다.
결론은 영속 상태의 엔티티는 트랜잭션으로 묶어주면 commit 되는 시점에 
변경을 감지하여 DB에 반영된다는 정도인 것 같습니다.

오랜만에 스프링 사용하니까 너무 재밌는데 뭐지...?