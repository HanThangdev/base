# React Js Boilerplate
## BAP IT CO., JSC

### Environment requirement
> NodeJS: `v14.15.4`
>
> NPM: `v6.14.10`

### Install Dependencies
> Install project dependencies: `npm install` or `npm install -f` (if have error)

### Development (For Developer)
> Run: `npm start`
>
> Open browser at: `http://localhost:3000`
>
> Please install flug-in ESLINT into your IDE for code convention auto checking

### Develop Build
> Run: `npm run build`
>
> Copy all content in `./build` for deployment


### Check Convention
> Javascript: `npm run lint`
>
> CSS: `npm run stylelint`

### Check Test
> Run: `npm test`


### production

> Create .env file at root project
> REACT_APP_BASE_API_URL=''

> and then run in order
> npm run build
> npm install -g serve & serve -s build (able to use another server like nginx, apache or nodejs,...)

### 1 commit message sẽ theo cấu trúc như sau:

```
> type(scope?): subject
```

> ##type ở trên có thể là:

```
> build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
> ci: Changes to our CI configuration files and scripts (example scopes: Gitlab CI, Circle, BrowserStack, SauceLabs)
> chore: add something without touching production code (Eg: update npm dependencies)
> docs: Documentation only changes
> feat: A new feature
> fix: A bug fix
> perf: A code change that improves performance
> refactor: A code change that neither fixes a bug nor adds a feature
> revert: Reverts a previous commit
> style: Changes that do not affect the meaning of the code (Eg: adding white-space, > formatting, missing semi-colons, etc)
> test: Adding missing tests or correcting existing tests
```

### scope thì là optional, và nếu có thì nó nên là tên của package mà commit hiện tại làm ảnh hưởng. Mình thấy scope thường dùng ở các repository mà chứa nhiều packages dạng monorepo, ví dụ repo của Vue 3, scope sẽ là tên của 1 package nào đó ở folder packages

### subject là nội dung của commit

© 2019-present BAP IT CO., JSC
