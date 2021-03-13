# 개발 환경 구성

1. npm i -g webpack-cli browser-sync
2. npm install
3. npm run start
4. npm run bro-sync
5. localhost:3000 에서 작업

실제 react 서버는 localhost:8080에서 서비스 되지만 browser-sync 의 자동 새로고침 기능을 이용하여 개발 browser-sync : https://browsersync.io/

# 패키지 설치시 유의할점

모든 npm 패키지가 Typescript를 지원하는 것은 아님 npm install [package 명] 후에도 자동 완성이 되지 않는다면 npm install -D @types/[package 명] 을 한 후에 라이브 러리 사용! ( @types/를 설치 할 때 npm install -D 를 하는 이유 패키징 할때 최대한 용량을 줄이기 위함) -- @types/[package 명]가 없다면 다른 대체 패키지를 사용

# 사용 기술

React useRef -> 자식 element 참조 React Hook useEffect componentDidMount componentDidUnMount useEffect componentDidMount componentDidUnMount Typescript typescript paths 설정 React-Router-Dom HashRouter SCSS : https://soooprmx.com/archives/7948 & : this 와 같은 개념 HashRouter useHistory SCSS : https://soooprmx.com/archives/7948 & : this 와 같은 개념 Webpack 이미지 처리 scss 처리 리액트 빌드 처리

#TODO

1. IE 에서 실행 안되는 오류 고치기
2. cors 허용 설정

# 디렉토리 구조 2020-11-19 기준

│ .babelrc.js - > 브라우저별 js 호환성 처리 라이브러리 │ .eslintignore │ .eslintrc.js - > eslint 문법 검사 설정 │ .gitignore │ .importSortPrefixrc │ .lintstagedrc │ .prettierignore │ .prettierrc - > pretiier 코드 자동 정렬 설정 npm run format │ package-lock.json │ package.json - > node.js npm package 폴더 │ README.md │ tsconfig.json - > typescript 설정 (paths 처리 자동완성 shortcut) │ webpack.config.babel.js │ ├─dist - > React 빌드 결과 폴더 │ ├─public │ favicon.ico │ index.html │ ├─src │ │ index.html │ │ index.scss -> ## 전역 스타일 설정 공통적으로 사용하는 스타일 지정 │ │ index.tsx -> react root │ │ RootRouter.tsx -> react-router-dom 라우팅 루트, 모든 페이지는 이곳에 url과 함께 연결되어야 함. │ │ │ ├─@types │ │ global.d.ts -> import 시 png, svg 등의 파일을 임포트 할때 사용 tsconfig.json에서 typeRoots 중 하나로 지정 │ │ │ ├─assets -> 각종 이미지 파일 폴더 │ │ │ │ │ ├─fonts │ │ │ │ │ └─imgs │ │ │ ├─components -> 컴포넌트 폴더 Page에서 import 하여 사용 │ │ └─Common │ │ │ ├─constrants -> │ │ API_PATH.ts -> API path 설정 ( /launcher/login & /launcher/getMyAppList 등을 저장) │ │ ROUTER_PATH.ts - > react-router-dom 에서 페이지 이동시 사용하는 url 값 │ │ │ └─pages - > │ └─webpack │ base.js │ dev.js │ entry.js │ optimization.js -> webpack 최적화 설정 │ prod.js │ ├─config │ alias.js -> typeconfig의 paths 와 설정이 같아야 함 (import shortcut 설정) │ devServer.js -> 리액트 개발 서버 설정 (포트 url 설정등) │ devServierProxy.js │ externals.js │ index.js │ postcss.js -> postcss : scss 처리 (autoprefixer : ie 의존성 ) │ sassResources.js │ ├─plugins │ index.js │ pluginCleanWebpack.js │ pluginCopy.js -> static한 요소를 dist로 복사하는 플러그인 (src/assets) │ pluginDefine.js │ pluginEsLint.js │ pluginForkTsChecker.js │ pluginHtml.js -> public/public.html & public/favicon.ico dist로 복사하는 플러그인 │ pluginMiniCssExtract.js -> s │ pluginProvide.js │ pluginRobotstxt.js │ ├─rules │ common.js -> tsx, ts, js, jsx, html 등 파일을 어느 플러그인과 연결하여 처리할지 설정 │ index.js │ styles.js - > scss를 webpack에서 어떻게 처리 할지 설정 (autoprefixer 등) │ svg.js │ useLoaderRuleItems.js │ └─utils cleanConsoleOnHMR.js env.js helpers.js
