# MD 수정 필요 보고서

## 26.10.11 21:05

파일 및 폴더 구조 변경 후, 현재 문서와 실제 프로젝트 구조를 비교한 결과입니다.  
이 문서는 기존 문서를 직접 고치지 않고, 어디를 수정해야 하는지 정리합니다.

## 현재 확인한 실제 구조

```text
.
├── .claude/
│   ├── agents/
│   │   ├── figma-implementer
│   │   ├── qa-reporter
│   │   ├── token-checker
│   │   └── ui-reviewer.md
│   └── skills/
│       └── korean-code-comments/
│           ├── SKILL.md
│           └── agents/openai.yaml
├── docs/
│   ├── prd.md
│   └── 작업기록.md
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── AGENTS.md
├── package.json
└── tsconfig.json
```

## 수정 필요 1. `AGENTS.md`

### 1. PRD 위치 기준 수정

- 현재 PRD 파일은 `docs/prd.md`에 있다.
- `AGENTS.md`에서는 “PRD 기준”이라고만 되어 있어, 실제 파일 위치가 명확하지 않다.

수정 제안:

```md
- 서비스 요구사항은 `docs/prd.md`를 기준으로 한다.
```

### 2. 작업 기록 위치 수정

- 현재 작업 기록 파일은 `docs/작업기록.md`에 있다.
- `AGENTS.md`에는 “작업이 끝나면 md 파일을 생성”이라고 되어 있어 매번 새 파일을 만들지, 기존 파일에 누적할지 애매하다.

수정 제안:

```md
- 작업이 끝나면 `docs/작업기록.md`에 YY.mm.dd hh:mm 형식으로 내용을 추가한다.
```

### 3. `npm run lint` 명령어 제거 또는 스크립트 추가 필요

- `AGENTS.md`에는 `npm run lint`가 자주 쓰는 명령어로 적혀 있다.
- 현재 `package.json`에는 `lint` 스크립트가 없다.

선택지:

- 문서에서 `npm run lint` 줄을 제거한다.
- 또는 실제로 lint 도구를 추가하고 `package.json`에 `lint` 스크립트를 만든다.

초보자 프로젝트 기준으로는 현재 없는 명령어를 문서에서 제거하는 쪽이 더 안전하다.

### 4. 폴더 구조 설명을 “예정 구조”로 구분 필요

- `AGENTS.md`의 폴더 구조에는 `src/components/`, `src/lib/supabase.ts`가 적혀 있다.
- 현재 실제 구조에는 해당 폴더와 파일이 없다.

수정 제안:

```md
### 폴더구조

현재 구조:

src/
  app/
    globals.css
    layout.tsx
    page.tsx

구현이 진행되면 사용할 예정 구조:

src/
  app/
    create/page.tsx
    i/[id]/page.tsx
    i/[id]/responses/page.tsx
  components/
  lib/
    supabase.ts
```

### 5. Supabase 사용 여부 확인 필요

- `AGENTS.md`에는 Supabase 테이블 구조와 서버 전용 키 규칙이 들어 있다.
- 현재 `package.json`에는 Supabase 관련 패키지가 없다.
- PRD 원문에도 Supabase는 명시되어 있지 않다.

확인 질문 필요:

```md
이 프로젝트의 데이터 저장소를 Supabase로 확정할까요?
```

확정 전까지는 `AGENTS.md`의 “데이터(Supabase)” 섹션을 “데이터 저장소는 추후 확정”으로 바꾸는 것이 안전하다.

## 수정 필요 2. `docs/prd.md`

### 1. 응답 현황 경로가 `AGENTS.md`와 다름

- `docs/prd.md`: `/i/[id]/responses`
- `AGENTS.md`: `/i/[id]/responses?key=[hostKey]`

`hostKey`를 쓰는 방향으로 확정했다면 PRD도 다음처럼 수정해야 한다.

```md
- /i/[id]/responses?key=[hostKey] : 호스트 응답 목록, 참석·불참 수, 참석 인원 합계 확인
```

단, `hostKey`는 원래 PRD에 없던 내용이므로 사용자 확인 후 반영해야 한다.

### 2. Markdown 제목 띄어쓰기 수정

현재:

```md
#웹 초대장 제작 서비스 PRD
##제외 범위
```

수정 제안:

```md
# 웹 초대장 제작 서비스 PRD
## 제외 범위
```

### 3. 문장 오타 및 띄어쓰기 수정

수정 제안:

- `호스트내용` → `호스트 내용`
- `게스트초대장` → `게스트 초대장`
- `호스트응답` → `호스트 응답`
- `참석 인원 합계공유` → `참석 인원 합계 확인`

## 수정 필요 3. `.claude/agents/figma-implementer`

이 파일은 Markdown 확장자는 없지만, 내용은 Markdown 형식의 에이전트 문서다.

### 1. 현재 없는 경로를 참조함

문서 안에서 다음 파일과 폴더를 참조한다.

- `docs/design-tokens.md`
- `figma-code-connect.json`
- `src/components/ui/`
- `src/tokens/`

현재 프로젝트에는 위 파일과 폴더가 없다.

수정 제안:

- 해당 파일들이 아직 없다면 “없으면 사용자에게 생성 여부를 질문한다”는 규칙을 추가한다.
- 또는 실제 프로젝트 구조에 맞게 `src/app/globals.css`의 `@theme` 토큰을 기준으로 수정한다.

### 2. Storybook, Vitest 전제 확인 필요

문서에서는 다음 파일 생성을 기본으로 한다.

- `*.stories.tsx`
- `*.test.tsx`

현재 `package.json`에는 Storybook, Vitest, test 스크립트가 없다.

수정 제안:

- Storybook/Vitest 도입 전에는 해당 파일 생성을 필수로 하지 않는다.
- 또는 Storybook/Vitest를 도입할지 사용자에게 먼저 질문하도록 바꾼다.

## 수정 필요 4. `.claude/agents/qa-reporter`

### 1. 현재 없는 명령어를 실행하도록 되어 있음

문서에서 `npm test` 실행을 전제로 한다.

현재 `package.json`에는 다음만 있다.

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run typecheck`

수정 제안:

```md
- `npm test`는 `package.json`에 test 스크립트가 있을 때만 실행한다.
- test 스크립트가 없으면 “테스트 스크립트 없음”으로 보고한다.
```

### 2. 현재 없는 토큰/컴포넌트 경로를 참조함

다음 경로가 현재 없다.

- `docs/design-tokens.md`
- `src/tokens/*.css`
- `figma-code-connect.json`
- `src/components/ui/`

수정 제안:

- 현재 프로젝트 기준은 `src/app/globals.css`와 Tailwind CSS v4다.
- 위 경로가 없으면 실패 처리하지 말고 “아직 미구성”으로 보고하도록 바꾼다.

## 수정 필요 5. `.claude/agents/token-checker`

### 1. 현재 없는 토큰 빌드 시스템을 전제로 함

문서에서 다음을 전제로 한다.

- `tokens/*.json`
- `src/tokens/_generated.css`
- `docs/design-tokens.md`
- `npm run build:tokens`

현재 프로젝트에는 모두 없다.

수정 제안:

- 현재 기준은 `src/app/globals.css`의 `@theme` 토큰이라고 명시한다.
- `tokens/*.json` 기반 Style Dictionary 구조를 도입하려면 사용자 확인을 먼저 받도록 한다.
- `npm run build:tokens`는 스크립트가 있을 때만 실행하도록 바꾼다.

## 수정 필요 6. `.claude/agents/ui-reviewer.md`

### 1. 에이전트 파일 확장자 규칙 확인 필요

현재 `.claude/agents/` 안에는 확장자 없는 파일과 `.md` 파일이 섞여 있다.

```text
figma-implementer
qa-reporter
token-checker
ui-reviewer.md
```

확인 질문 필요:

```md
.claude/agents`의 에이전트 파일은 모두 확장자 없이 통일할까요, 아니면 모두 `.md`로 통일할까요?
```

### 2. `globals.css` 토큰 기준 보강 필요

- `ui-reviewer.md`는 `globals.css` 토큰을 기준으로 검사하도록 되어 있다.
- 현재 `src/app/globals.css`에는 `@theme` 토큰이 아직 없고, `body`에 직접 색상값이 들어 있다.

수정 제안:

- 토큰이 없으면 “토큰 정의 없음”으로 보고하도록 되어 있으므로 큰 문제는 아니다.
- 다만 실제 리뷰 기준을 더 명확히 하려면 `@theme`이 없는 경우 확인 불가로 보고한다는 문장을 유지하거나 강화한다.

## 수정 필요 7. `docs/작업기록.md`

### 1. 현재 구조 변경 내용 기록 필요

파일과 폴더 구조를 사용자가 변경했으므로, 다음 내용이 추가되면 좋다.

- `prd.md`가 `docs/prd.md`로 이동됨
- `작업기록.md`가 `docs/작업기록.md`로 이동됨
- `.claude/agents/figma-implementer`, `.claude/agents/qa-reporter`, `.claude/agents/token-checker`가 추가됨
- `.claude/skills/korean-code-comments/`가 유지됨

다만 이 변경은 사용자가 직접 한 것으로 보이므로, 기록에 추가할지 사용자 확인 후 반영하는 것이 안전하다.

## 우선순위

1. `AGENTS.md`의 실제 파일 위치와 명령어 불일치 수정
2. `docs/prd.md`와 `AGENTS.md`의 응답 현황 경로 불일치 확인
3. `.claude/agents/*` 문서들이 현재 없는 토큰/테스트/Storybook 구조를 전제로 하는 문제 수정
4. `.claude/agents/` 파일 확장자 규칙 통일
5. `docs/작업기록.md`에 구조 변경 기록 추가 여부 확인

## 사용자에게 확인이 필요한 질문

1. 응답 현황 경로는 `/i/[id]/responses`로 유지할까요, 아니면 `/i/[id]/responses?key=[hostKey]`로 확정할까요?
2. 데이터 저장소는 Supabase로 확정할까요?
3. `.claude/agents/`의 에이전트 파일명은 확장자 없이 통일할까요, `.md`로 통일할까요?
4. Storybook/Vitest/토큰 빌드 시스템은 지금 도입 예정인가요, 아니면 에이전트 문서에서 “있을 때만 사용”으로 낮출까요?
