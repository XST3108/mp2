# LLM Chat Log

Full conversation with Claude (Anthropic) used while building this MP, exported from the Claude desktop app.
User messages and assistant replies are shown in full. Tool calls the assistant made (running commands, writing files, testing in a browser) are summarized in one line each; tool outputs and internal reasoning are omitted.

---

## 🧑 User

MP 2: Front-end App
Due: Tuesday, Oct 6, 2026, 11:59PM CT
Table of Contents

1. [Assignment](https://github.com/cs409-fa25/mp2#assignment)
2. [Grading Breakdown](https://github.com/cs409-fa25/mp2#grading-breakdown)
3. [Tips](https://github.com/cs409-fa25/mp2#tips)
4. [Rules](https://github.com/cs409-fa25/mp2#rules)
5. [Getting Started](https://github.com/cs409-fa25/mp2#getting-started)
6. [Submission Details](https://github.com/cs409-fa25/mp2#submission-details)

Assignment
Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.
Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.

* [TMDB](https://www.themoviedb.org/documentation/api)
* [Pokemon](https://pokeapi.co/)
* [NASA](https://api.nasa.gov/index.html)
* [Marvel](https://developer.marvel.com/)
* [Jelly Belly Wiki](https://jelly-belly-wiki.netlify.app/)
* [The Meal DB](https://www.themealdb.com/api.php)
* [Art Institute of Chicago](https://api.artic.edu/docs/)
* More APIs if you want to explore [here](https://publicapis.dev/) (please keep it class appropriate) 🫵🤨📸.

Note that you may need to create an account and/or acquire an API key for some of the APIs. GitHub won’t restrict you from pushing API keys, but may send an email to say some keys are exposed. Because of this, please don't use any paid APIs.
The API you are working with may become temporarily unavailable. If/when this happens, it doesn't mean you are blocked from working on the MP. You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
You may need to deal with APIs having rate-limiting policies. You can find ways to get around them like caching the results of large and common API calls
These are also good opportunities to think about how your app should handle errors.
Your app should have the following features:

* A list view: where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
* A gallery view: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
* A detail view: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.

Here's an old example that fulfills these requirements: https://www.youtube.com/watch?v=DmDZuAr7QJE
You will also be required to use following tools:

* Use [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
* Use [Axios](https://www.npmjs.com/package/axios) for API calls.
* Use [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html).

Grading Breakdown
Total Points : 100
List View:

* Does the list view display relevant items from the chosen API ? (4 points)
* Does the search bar filter down items based on the search? (8 points)
* Can you sort by at least 2 properties? (8 points)
* Can the properties be sorted in Ascending and Descending order? (8 points)

Gallery View:

* Is the gallery composed of item media? (4 points)
* Does clicking on a filter change results accordingly? (8 points)

Details View:

* Does clicking on an item in List View take you to the Details View? (10 points)
* Does clicking on an item in Gallery View take you to the Details View? (10 points)
* Does the Details View contain item details? (8 points)
* Do the PREVIOUS and NEXT buttons work correctly? (10 points)

Other:

* Does the implementation use React Router and TypeScript? (12 points)
* Design (10 points)

Tips

* Start early! This is first MP that uses React so start ahead.
* Visit https://reactjs.org/docs/faq-structure.html for examples on how to structure your React files.
* You may use a React component library for this MP.
* We recommend using [Normalize.css](https://necolas.github.io/normalize.css/).
* We recommend using [CSS Modules](https://vite.dev/guide/features.html#css-modules), which Vite supports out of the box via `*.module.css`.

Rules

1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. There should be no use of inline styling.
4. No inline script tags should be used.
5. HTML tables cannot be used for layout.
6. If you think something you’re doing might not be acceptable, please ask on Piazza.
7. We strongly recommend using `Vite` to get your MP started. If you ignore this, we will not help with any environment issues.

Getting Started

1. Use `Vite` (see below) to generate your MP starter code, then run `npm install`.
2. After running `npm run dev` open a browser and go to `http://localhost:5173/` to view your page.
3. Open up `src/App.tsx` to start building your first component. Visit https://react.dev/learn for many official, high quality resources to help get you started.

Vite
[Vite](https://vite.dev/) generates a React starter project that requires no immediate configuration, and is one of the tools [React officially recommends](https://react.dev/link/cra) now that Create React App is deprecated. Use the react-ts template:

```
npm create vite@latest . -- --template react-ts

```

If Vite does not install dependencies for you, run `npm install` afterwards. The dev server is `npm run dev` (not `npm start`), and a production build goes to `dist/` (not `build/`).
Submission Details
Here's what you will need to submit:

1. On the [class repo](https://github.com/cs409-fa25/mp2), click Use this template > Create a new repository. Name it `mp2` and make it public (GitHub Pages requires a public repo on a free account). Then clone it: `git clone git@github.com:<your-github-username>/mp2.git`
2. `cd mp2`, then scaffold a Vite + React + TypeScript project in place:


```
npm create vite@latest . -- --template react-ts

```

* The directory already has `README.md` and `.github/`, so Vite will ask how to proceed. Choose "Ignore files and continue". (Do NOT choose "Remove existing files" -- that deletes the deploy workflow.)
* Note: Vite's template will overwrite `README.md`. Please pay attention to this and use an appropriate method to restore it if needed.

3. Install dependencies:


```
npm install

```

* This also creates `package-lock.json`. Commit it -- the deploy workflow runs `npm ci`, which fails without a lockfile.

4. Set `base` in `vite.config.ts` so the deployed site can find its assets:


```
export default defineConfig({
  plugins: [react()],
  base: '/<your-github-repo-name>/',   // e.g. '/mp2/' -- must match the repo name
})
```

* Getting this wrong produces a blank page with 404s on your JS/CSS, not a build error.

5. In your `BrowserRouter` or `Router` component, set the basename to match:


```
<BrowserRouter basename={import.meta.env.BASE_URL}>
  ...
</BrowserRouter>

```

* Note: Should use `<Link/>` component instead of `<a>` to have the same basename.

6. Set GitHub Pages Deployment Source to Github Actions
   * In your Github repo, go to Settings > Pages > Build and Deployment > Source > Select "GitHub Actions"
7. Commit and push your local changes to this new repository.


```
git add . # "." adds all changed files, can also add specific files too
git commit -m "[my-commit-message]" # message should be clear and meaningful
git branch -M main
git push origin main

```

8. `.github/workflows/deploy.yml` file automatically makes a GitHub CI pipeline run to deploy your code. After the pipeline finishes, your site should be live at `https://<your-github-username>.github.io/mp2`. It should take around 1 minute.
9. Make a video (3 minutes max) demo-ing your deployed website and upload it to Google Drive. Share it with `uiuc.web.programming@gmail.com` and put the share link in the submission form.

* Show the url to prove you are on your deployed website. Then show all the requirement features you fulfilled in your mp.
* If you were unable to deploy your website, you can demo your mp locally for some point deduction (hard capped at 80%)
   * Just make sure you do `git status` and `git log` first so we can see your last edits.

10. Fill out and submit the form [here](https://forms.gle/PkYq9RaMFG8MaMjF7).大白话给我讲下这个项目是要做个什么东西

### 🤖 Claude

## 一句话版本

做一个**网页小应用**：从一个公开的数据接口（API）拉数据，比如宝可梦、电影、菜谱，然后让用户能**搜索、浏览图片、点进去看详情**。最后把它发布到网上，再录一个演示视频交上去。

---

## 打个比方

假设你选的是**宝可梦 API**，做出来大概是一个"宝可梦图鉴网站"，有 3 个页面：

### 1. 列表页（搜索页）
- 顶部有个搜索框，**一边打字一边筛选**。比如输入 "pika"，列表马上只剩皮卡丘这类结果，不用按回车。
- 有一个**排序**功能，至少能按 2 种属性排，比如"按名字"、"按编号"。
- 能切换**升序 / 降序**（A→Z 或 Z→A）。

### 2. 画廊页（图片墙）
- 一格一格地展示图片，比如每只宝可梦的头像。
- 上面有一排**筛选按钮**，比如"火系""水系""草系"，可以多选，点了以后图片墙只显示对应类型的。

### 3. 详情页
- 在列表页或画廊页**点任意一项**，就跳到它的详情页，显示名字、编号、身高、体重、属性等信息。
- 有**"上一个 / 下一个"**按钮，不用返回就能挨个往下翻。
- 每个详情页要有**自己的网址**，比如 `.../pokemon/25`，把这个链接直接贴进浏览器也能打开。

---

## 技术上硬性要求

| 要求 | 大白话 |
|---|---|
| **React** | 用 React 写页面 |
| **TypeScript** | 用带类型的 JS 写 |
| **React Router** | 管理页面跳转和网址 |
| **Axios** | 用它去请求 API 数据 |
| **Vite** | 用它创建项目骨架 |
| 不准写行内样式 | 不能写 `style={{...}}`，样式要放进 CSS 文件里（推荐 CSS Modules） |
| 不准用 `<table>` 排版 | 页面布局用 flex 或 grid |

---

## 交作业流程

1. 用课程模板在 GitHub 建一个**公开仓库**，名字叫 `mp2`
2. 写代码，配置好 `base: '/mp2/'` 和 `basename`，不然部署后会白屏
3. push 到 GitHub，它会**自动部署**到 `https://你的用户名.github.io/mp2`
4. 录一个**3 分钟以内**的视频，先展示网址，再把上面的功能逐个演示一遍
5. 视频传到 Google Drive，共享给助教邮箱，再填提交表单

> 如果部署失败，可以在本地演示，但**最多只能拿 80 分**。

---

## 分数主要在哪

- 列表页：28 分（搜索 8 + 排序 8 + 升降序 8 + 显示 4）
- 画廊页：12 分
- 详情页：38 分（**点击跳转各 10 分、上一个/下一个 10 分**，这三项最值钱）
- 用 Router + TS：12 分
- 好不好看：10 分

---

⚠️ **截止时间就是今天（10 月 6 日）晚上 11:59（美中时间）**。如果还没开始，建议直接选**宝可梦 API** 或 **The Meal DB**：这两个不用注册、不用 API key，数据结构也简单，做起来最快。

需要的话我可以直接帮你把项目搭起来。

---

## 🧑 User

是要做一个网页还是做一个手机app

### 🤖 Claude

要做的是**网页**，不是手机 App。

- 题目里说的 "Front-end App" 和 "single-page React app"，指的是**在浏览器里打开的网页应用**。
- 最后要部署到 `https://你的用户名.github.io/mp2`，也就是一个网址，用电脑浏览器打开就能用。
- 用的是 React，不是 React Native（React Native 才是做手机 App 的）。

不用上架应用商店，也不用装到手机上。手机浏览器其实也能打开这个网址，但作业没有要求适配手机，**主要在电脑浏览器上演示**就行。

---

## 🧑 User

Assignment
Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.
Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.

* [TMDB](https://www.themoviedb.org/documentation/api)
* [Pokemon](https://pokeapi.co/)
* [NASA](https://api.nasa.gov/index.html)
* [Marvel](https://developer.marvel.com/)
* [Jelly Belly Wiki](https://jelly-belly-wiki.netlify.app/)
* [The Meal DB](https://www.themealdb.com/api.php)
* [Art Institute of Chicago](https://api.artic.edu/docs/)
* More APIs if you want to explore [here](https://publicapis.dev/) (please keep it class appropriate) 🫵🤨📸.

Note that you may need to create an account and/or acquire an API key for some of the APIs. GitHub won’t restrict you from pushing API keys, but may send an email to say some keys are exposed. Because of this, please don't use any paid APIs.
The API you are working with may become temporarily unavailable. If/when this happens, it doesn't mean you are blocked from working on the MP. You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
You may need to deal with APIs having rate-limiting policies. You can find ways to get around them like caching the results of large and common API calls
These are also good opportunities to think about how your app should handle errors.
Your app should have the following features:

* A list view: where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
* A gallery view: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
* A detail view: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.

Here's an old example that fulfills these requirements: https://www.youtube.com/watch?v=DmDZuAr7QJE
You will also be required to use following tools:

* Use [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
* Use [Axios](https://www.npmjs.com/package/axios) for API calls.
* Use [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html).

Grading Breakdown
Total Points : 100
List View:

* Does the list view display relevant items from the chosen API ? (4 points)
* Does the search bar filter down items based on the search? (8 points)
* Can you sort by at least 2 properties? (8 points)
* Can the properties be sorted in Ascending and Descending order? (8 points)

Gallery View:

* Is the gallery composed of item media? (4 points)
* Does clicking on a filter change results accordingly? (8 points)

Details View:

* Does clicking on an item in List View take you to the Details View? (10 points)
* Does clicking on an item in Gallery View take you to the Details View? (10 points)
* Does the Details View contain item details? (8 points)
* Do the PREVIOUS and NEXT buttons work correctly? (10 points)

Other:

* Does the implementation use React Router and TypeScript? (12 points)
* Design (10 points)

Tips

* Start early! This is first MP that uses React so start ahead.
* Visit https://reactjs.org/docs/faq-structure.html for examples on how to structure your React files.
* You may use a React component library for this MP.
* We recommend using [Normalize.css](https://necolas.github.io/normalize.css/).
* We recommend using [CSS Modules](https://vite.dev/guide/features.html#css-modules), which Vite supports out of the box via `*.module.css`.

Rules

1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. There should be no use of inline styling.
4. No inline script tags should be used.
5. HTML tables cannot be used for layout.
6. If you think something you’re doing might not be acceptable, please ask on Piazza.
7. We strongly recommend using `Vite` to get your MP started. If you ignore this, we will not help with any environment issues.

Getting Started

1. Use `Vite` (see below) to generate your MP starter code, then run `npm install`.
2. After running `npm run dev` open a browser and go to `http://localhost:5173/` to view your page.
3. Open up `src/App.tsx` to start building your first component. Visit https://react.dev/learn for many official, high quality resources to help get you started.

Vite
[Vite](https://vite.dev/) generates a React starter project that requires no immediate configuration, and is one of the tools [React officially recommends](https://react.dev/link/cra) now that Create React App is deprecated. Use the react-ts template:

```
npm create vite@latest . -- --template react-ts

```

If Vite does not install dependencies for you, run `npm install` afterwards. The dev server is `npm run dev` (not `npm start`), and a production build goes to `dist/` (not `build/`).
Submission Details
Here's what you will need to submit:

1. On the [class repo](https://github.com/cs409-fa25/mp2), click Use this template > Create a new repository. Name it `mp2` and make it public (GitHub Pages requires a public repo on a free account). Then clone it: `git clone git@github.com:<your-github-username>/mp2.git`
2. `cd mp2`, then scaffold a Vite + React + TypeScript project in place:


```
npm create vite@latest . -- --template react-ts

```

* The directory already has `README.md` and `.github/`, so Vite will ask how to proceed. Choose "Ignore files and continue". (Do NOT choose "Remove existing files" -- that deletes the deploy workflow.)
* Note: Vite's template will overwrite `README.md`. Please pay attention to this and use an appropriate method to restore it if needed.

3. Install dependencies:


```
npm install

```

* This also creates `package-lock.json`. Commit it -- the deploy workflow runs `npm ci`, which fails without a lockfile.

4. Set `base` in `vite.config.ts` so the deployed site can find its assets:


```
export default defineConfig({
  plugins: [react()],
  base: '/<your-github-repo-name>/',   // e.g. '/mp2/' -- must match the repo name
})
```

* Getting this wrong produces a blank page with 404s on your JS/CSS, not a build error.

5. In your `BrowserRouter` or `Router` component, set the basename to match:


```
<BrowserRouter basename={import.meta.env.BASE_URL}>
  ...
</BrowserRouter>

```

* Note: Should use `<Link/>` component instead of `<a>` to have the same basename.

6. Set GitHub Pages Deployment Source to Github Actions
   * In your Github repo, go to Settings > Pages > Build and Deployment > Source > Select "GitHub Actions"
7. Commit and push your local changes to this new repository.


```
git add . # "." adds all changed files, can also add specific files too
git commit -m "[my-commit-message]" # message should be clear and meaningful
git branch -M main
git push origin main

```

8. `.github/workflows/deploy.yml` file automatically makes a GitHub CI pipeline run to deploy your code. After the pipeline finishes, your site should be live at `https://<your-github-username>.github.io/mp2`. It should take around 1 minute.
9. Make a video (3 minutes max) demo-ing your deployed website and upload it to Google Drive. Share it with `uiuc.web.programming@gmail.com` and put the share link in the submission form.

* Show the url to prove you are on your deployed website. Then show all the requirement features you fulfilled in your mp.
* If you were unable to deploy your website, you can demo your mp locally for some point deduction (hard capped at 80%)
   * Just make sure you do `git status` and `git log` first so we can see your last edits.

10. Fill out and submit the form [here](https://forms.gle/PkYq9RaMFG8MaMjF7).完整中文

### 🤖 Claude

# MP 2：前端应用

**截止时间：2026 年 10 月 6 日（周二）晚上 11:59（美国中部时间）**

---

## 作业

### 任务
在这次编程作业中，你需要用 React 实现一个**调用 API 的前端界面**。开始之前，请先把整份作业说明读完。

### 要求
做一个**单页 React 应用**，让用户能和下面任意一个 API 的数据进行交互：

* [TMDB](https://www.themoviedb.org/documentation/api)（电影数据库）
* [Pokemon](https://pokeapi.co/)（宝可梦）
* [NASA](https://api.nasa.gov/index.html)（美国国家航空航天局）
* [Marvel](https://developer.marvel.com/)（漫威）
* [Jelly Belly Wiki](https://jelly-belly-wiki.netlify.app/)（Jelly Belly 糖果百科）
* [The Meal DB](https://www.themealdb.com/api.php)（菜谱数据库）
* [Art Institute of Chicago](https://api.artic.edu/docs/)（芝加哥艺术博物馆）
* 想找更多 API 可以去[这里](https://publicapis.dev/)看看（请选适合课堂的内容）🫵🤨📸

注意：有些 API 可能需要注册账号或申请 API key。GitHub 不会阻止你上传 API key，但可能会发邮件提醒你密钥被公开了。因此，**请不要使用任何付费 API**。

你用的 API 可能会暂时无法访问。如果遇到这种情况，不代表你没法继续做作业。你可以**模拟数据**，也就是在本地写一份固定的返回结果，用它来代替真实请求。

有些 API 有**请求频率限制**。你可以想办法绕开，比如把大量、常用的请求结果**缓存**起来。

这些情况也是思考"应用该如何处理错误"的好机会。

你的应用需要有以下功能：

* **列表视图**：用户在搜索框里输入关键词，应用返回匹配的结果列表（比如搜电影或搜宝可梦）。还要能根据结果的不同属性**排序**（比如按名字或排名），并能指定**顺序**（升序和降序）。另外，搜索框要**边输入边筛选**。排序和筛选可以在前端完成。
* **画廊视图**：展示所选 API 中的某种**图片内容**（比如电影海报墙）。画廊视图还要有某种**筛选属性**，用户可以选择一个或多个属性来筛选画廊（比如电影或音乐的类型）。
* **详情视图**：在搜索视图或画廊视图中**点击某一项**时，应用要显示该项的各项属性。这个视图还要有**"上一个"和"下一个"按钮**（可以用箭头实现），让用户在列表对象之间来回切换。详情视图被访问时要有**专属路由**。简单说，用户要能通过一个**特定网址**直接打开详情页。

这里有一个符合以上要求的旧示例：https://www.youtube.com/watch?v=DmDZuAr7QJE

你还必须使用以下工具：

* 用 [React Router](https://reactrouter.com/web/guides/quick-start) 做路由。
* 用 [Axios](https://www.npmjs.com/package/axios) 调用 API。
* 用 [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html)。

---

## 评分细则

**总分：100 分**

**列表视图：**
* 列表视图是否显示了所选 API 中的相关条目？（4 分）
* 搜索框是否能根据搜索内容筛选条目？（8 分）
* 是否能按至少 2 种属性排序？（8 分）
* 属性是否能按升序和降序排列？（8 分）

**画廊视图：**
* 画廊是否由条目的图片内容组成？（4 分）
* 点击筛选项后，结果是否相应变化？（8 分）

**详情视图：**
* 在列表视图中点击某项，是否会跳转到详情视图？（10 分）
* 在画廊视图中点击某项，是否会跳转到详情视图？（10 分）
* 详情视图是否包含条目的详细信息？（8 分）
* "上一个"和"下一个"按钮是否正常工作？（10 分）

**其他：**
* 实现中是否使用了 React Router 和 TypeScript？（12 分）
* 设计美观度（10 分）

---

## 小建议

* **尽早开始！** 这是第一个用 React 的 MP，所以要提前动手。
* 访问 https://reactjs.org/docs/faq-structure.html 查看 React 文件结构的示例。
* 本次 MP **可以使用** React 组件库。
* 推荐使用 [Normalize.css](https://necolas.github.io/normalize.css/)。
* 推荐使用 [CSS Modules](https://vite.dev/guide/features.html#css-modules)，Vite 通过 `*.module.css` 原生支持它。

---

## 规则

1. 这是**个人作业**，禁止任何合作。
2. **禁止复制粘贴不是你自己写的代码。** 不过你可以参考各种代码来源获取灵感、帮助理解。完成作业时参考过的**所有来源**（代码和阅读材料）都必须在提交时声明。
3. **不能使用行内样式**（inline styling）。
4. **不能使用行内 script 标签。**
5. **不能用 HTML 表格做页面布局。**
6. 如果你不确定某种做法是否被允许，请在 Piazza 上提问。
7. 强烈建议用 `Vite` 创建 MP 项目。如果你不用，环境出了问题我们不提供帮助。

---

## 开始上手

1. 用 `Vite`（见下文）生成 MP 的初始代码，然后运行 `npm install`。
2. 运行 `npm run dev` 后，打开浏览器访问 `http://localhost:5173/` 查看页面。
3. 打开 `src/App.tsx`，开始写你的第一个组件。可以访问 https://react.dev/learn，那里有很多高质量的官方学习资料。

### Vite
[Vite](https://vite.dev/) 能生成一个无需额外配置的 React 初始项目。在 Create React App 被弃用后，它是 [React 官方推荐](https://react.dev/link/cra)的工具之一。请使用 react-ts 模板：

```
npm create vite@latest . -- --template react-ts
```

如果 Vite 没有自动安装依赖，之后请运行 `npm install`。开发服务器的命令是 `npm run dev`（不是 `npm start`），生产构建会输出到 `dist/`（不是 `build/`）。

---

## 提交说明

你需要提交以下内容：

**1.** 在[课程仓库](https://github.com/cs409-fa25/mp2)页面点击 **Use this template > Create a new repository**。仓库命名为 `mp2`，并设为**公开**（免费账号要用 GitHub Pages 必须是公开仓库）。然后克隆它：`git clone git@github.com:<你的GitHub用户名>/mp2.git`

**2.** 执行 `cd mp2`，然后在当前目录下创建 Vite + React + TypeScript 项目：

```
npm create vite@latest . -- --template react-ts
```

* 目录里已经有 `README.md` 和 `.github/`，所以 Vite 会问你怎么处理。选 **"Ignore files and continue"（忽略文件并继续）**。（**千万不要**选 "Remove existing files"，否则会删掉部署工作流。）
* 注意：Vite 模板会覆盖 `README.md`。请留意这一点，必要时用合适的方法把它恢复回来。

**3.** 安装依赖：

```
npm install
```

* 这一步还会生成 `package-lock.json`。**一定要提交它**：部署工作流会运行 `npm ci`，没有这个锁文件就会失败。

**4.** 在 `vite.config.ts` 中设置 `base`，让部署后的网站能找到资源文件：

```
export default defineConfig({
  plugins: [react()],
  base: '/<你的GitHub仓库名>/',   // 例如 '/mp2/'，必须和仓库名一致
})
```

* 这里写错的话，**构建不会报错**，但页面会一片空白，JS/CSS 报 404。

**5.** 在你的 `BrowserRouter` 或 `Router` 组件中，把 basename 设成一致的值：

```
<BrowserRouter basename={import.meta.env.BASE_URL}>
  ...
</BrowserRouter>
```

* 注意：应该用 `<Link/>` 组件而不是 `<a>` 标签，这样链接才会带上同样的 basename。

**6.** 把 GitHub Pages 的部署来源设为 GitHub Actions：
* 在你的 GitHub 仓库里，进入 **Settings > Pages > Build and Deployment > Source**，选择 **"GitHub Actions"**。

**7.** 提交本地修改，并推送到这个新仓库：

```
git add . # "." 表示添加所有改动的文件，也可以只添加指定文件
git commit -m "[你的提交说明]" # 提交说明要清楚、有意义
git branch -M main
git push origin main
```

**8.** `.github/workflows/deploy.yml` 文件会自动触发一个 GitHub CI 流水线来部署你的代码。流水线跑完后，你的网站应该会上线在 `https://<你的GitHub用户名>.github.io/mp2`，大约需要 1 分钟。

**9.** 录一个**演示视频**（最长 3 分钟），展示你部署好的网站，上传到 Google Drive。把视频共享给 `uiuc.web.programming@gmail.com`，并把共享链接填到提交表单里。
* 视频里要**展示网址**，证明你访问的是已部署的网站，然后演示你完成的所有功能要求。
* 如果网站没能部署成功，可以在本地演示，但会扣分（**最高只能拿 80%**）。
  * 这种情况下，请先运行 `git status` 和 `git log`，让我们能看到你最后的修改记录。

**10.** 填写并提交[这个表单](https://forms.gle/PkYq9RaMFG8MaMjF7)。

---

## 🧑 User

你建议我选哪个api 简单好用并且好访问 能保证拿分的

> 🔧 *Bash*: Test which APIs are reachable from this machine

### 🤖 Claude

我建议选 **The Meal DB（菜谱数据库）**。

我刚在你电脑上测了几个 API，The Meal DB、宝可梦、芝加哥艺术博物馆都能正常访问，速度也都不慢（0.2～0.4 秒）。

## 为什么选 The Meal DB

**1. 不用注册，不用 API key**
直接请求就能拿到数据，也不用担心密钥泄露。

**2. 每个评分项都有现成的数据对应**

| 评分要求 | The Meal DB 里用什么 |
|---|---|
| 列表 + 搜索 | 菜名，比如输入 "chicken" 就筛出鸡肉类的菜 |
| 按 2 种属性排序 | 菜名、ID、分类、国家，任选两种 |
| 升序 / 降序 | 直接对上面的属性正着排、倒着排 |
| 画廊图片 | 每道菜都有一张漂亮的成品图 |
| 画廊多选筛选 | 按**分类**（牛肉、甜点、海鲜……）或**国家**（中式、意式、日式……） |
| 详情页内容 | 菜名、图片、分类、国家、配料表、做法步骤、YouTube 视频链接 |

**3. 数据量刚好**
总共只有几百道菜，一次全拿下来，在前端做筛选和排序就行，不用考虑分页，也碰不到频率限制。

**4. 图片好看，设计分好拿**
美食图片做出来的画廊本身就很好看。

## 为什么不选其他的

- **宝可梦**：也不错，但列表接口只返回名字，要拿图片和属性得对每一只再单独请求一次，代码会更麻烦。这是**第二推荐**。
- **TMDB / NASA**：要注册拿 key，TMDB 的图片在国内经常加载不出来。
- **Marvel**：要 key，而且这个 API 很不稳定，经常挂。
- **艺术博物馆**：数据字段比较杂，不少作品没有图片，处理起来麻烦。

---

截止时间就是今晚。要我直接帮你用 The Meal DB 把整个项目搭起来吗？三个页面、路由、排序筛选、上一个 / 下一个，以及部署配置都可以一次做好，你再自己看懂、录视频就行。

---

## 🧑 User

保姆式教学告诉我怎么完成这个作业

> 🔧 *Bash*: Check Node, npm and git versions

### 🤖 Claude

先在这台电脑上把整套代码跑通一遍，确认教程里每一步都能用，再一步步讲给你。

> 🔧 *Bash*: Scaffold Vite React-TS project and install dependencies

> 🔧 *Bash*: Inspect generated config and sample API data

> 🔧 *Bash*: Check meal counts and area/category fields

> 🔧 *Bash*: Fetch class repo deploy workflow and README

> 🔧 *Bash*: Write config, types, API module and hook

*[Request interrupted by user]*

---

## 🧑 User

你先从怎么拉代码创建仓库告诉我，然后再说写代码文件的事情

### 🤖 Claude

好，先把仓库和项目骨架搭好，代码下一步再写。每做完一步可以告诉我结果，卡住了就把报错贴给我。

---

## 第 0 步：准备工作（确认一次就行）

你电脑上已经装好了 **Node.js（v24）** 和 **Git**，这一步我已经帮你确认过了，不用再装。

你还需要：
- 一个 **GitHub 账号**，没有的话去 https://github.com 注册一个
- 一个代码编辑器，推荐 **VS Code**：https://code.visualstudio.com

---

## 第 1 步：用课程模板创建你自己的仓库

1. 浏览器打开 https://github.com/cs409-fa25/mp2 ，先登录 GitHub
2. 点右上角绿色按钮 **Use this template**，选 **Create a new repository**
3. 按下面填写：
   - **Owner**：选你自己的账号
   - **Repository name**：填 `mp2`（一定要叫这个名字，后面配置会用到）
   - 选 **Public**（公开），**不能选 Private**
4. 点 **Create repository**

创建好以后，网页地址应该是 `https://github.com/你的用户名/mp2`。

---

## 第 2 步：把仓库下载到电脑上（clone）

1. 在电脑上找一个放作业的文件夹，比如 `D:\cs409`，没有就新建一个
2. 在这个文件夹里空白处**右键**，选 **Open Git Bash here**（Win11 可能要先点"显示更多选项"）
3. 在弹出的黑窗口里输入下面的命令，**把 `你的用户名` 换成你的 GitHub 用户名**：

```bash
git clone https://github.com/你的用户名/mp2.git
```

> 作业说明里用的是 `git@github.com:...`（SSH 方式），那个要先配置 SSH 密钥，比较麻烦。用上面的 https 地址效果一样。

4. 进入这个文件夹：

```bash
cd mp2
```

5. 看看里面有什么：

```bash
ls -a
```

应该能看到 `README.md` 和 `.github`。**`.github` 很重要，里面是自动部署的配置，千万别删。**

---

## 第 3 步：用 Vite 生成 React 项目

还是在 `mp2` 文件夹里，运行：

```bash
npm create vite@latest . -- --template react-ts
```

它会问你几个问题，按下面回答（用方向键选择，回车确认）：

| 问题 | 怎么选 |
|---|---|
| `Need to install create-vite... Ok to proceed?` | 输入 `y`，回车 |
| `Current directory is not empty...` | 选 **Ignore files and continue**（⚠️ **不要**选 Remove existing files） |
| `Install with npm and start now?`（如果有这一问） | 选 **No** |

---

## 第 4 步：把被覆盖的 README 恢复回来

Vite 会把原来的 `README.md` 换成它自己的。用这条命令改回去：

```bash
git checkout README.md
```

---

## 第 5 步：安装依赖

先装项目本身需要的依赖：

```bash
npm install
```

再装作业要求的 Axios、React Router，以及推荐的 Normalize.css：

```bash
npm install axios react-router-dom normalize.css
```

装完后文件夹里会多出 `node_modules`（很大，不会上传）和 `package-lock.json`（**必须上传**，部署时要用）。

---

## 第 6 步：先跑起来看看

```bash
npm run dev
```

看到类似 `Local: http://localhost:5173/` 的提示后，在浏览器打开这个地址，能看到 Vite + React 的默认页面就说明成功了。

看完后回到黑窗口，按 **Ctrl + C** 停止运行。

---

## 第 7 步：打开 GitHub Pages 自动部署

1. 回到浏览器，打开你的仓库 `https://github.com/你的用户名/mp2`
2. 点上方的 **Settings**
3. 左边栏点 **Pages**
4. 找到 **Build and deployment** → **Source**，下拉选 **GitHub Actions**

这一步只需要设置一次。

---

## 第 8 步：用 VS Code 打开项目

在 Git Bash 里输入：

```bash
code .
```

如果提示找不到 `code` 命令，就打开 VS Code，点 **File → Open Folder**，选 `mp2` 文件夹。

---

## 做到这里先停一下

确认这几件事：
- ✅ GitHub 上有了你自己的 `mp2` 仓库（Public）
- ✅ 电脑上的 `mp2` 文件夹里有 `.github`、`src`、`package.json`、`package-lock.json`
- ✅ `npm run dev` 能打开默认页面
- ✅ Pages 的 Source 设成了 GitHub Actions

**先不用 push**，等代码写好、配置改好以后一起推上去，不然现在推上去部署出来是白屏。

都做完了就告诉我"好了"，我们接着讲写代码。哪一步报错了，就把黑窗口里的报错截图或复制给我。

---

## 🧑 User

*[screenshot attached]*

现在可以点击Create repository了吗

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\1.png]

### 🤖 Claude

可以，直接点 **Create repository**。

你的设置都没问题：
- 模板是 `cs409-fa25/mp2` ✅
- Owner 是你的账号 `XST3108` ✅
- 仓库名是 `mp2`，已显示可用 ✅
- 可见性是 **Public** ✅
- "Include all branches" 保持 Off 就行，Description 可以不填

创建好以后，接着做**第 2 步**。你的 clone 命令是：

```bash
git clone https://github.com/XST3108/mp2.git
```

---

## 🧑 User

https://github.com/XST3108/mp2.git用这个指令吗

### 🤖 Claude

对，用的就是这个地址，但前面要加上 `git clone`。完整命令是：

```bash
git clone https://github.com/XST3108/mp2.git
```

具体步骤：

1. 在电脑上找一个放作业的文件夹，比如 `D:\cs409`
2. 在这个文件夹里空白处**右键** → **Open Git Bash here**（Win11 要先点"显示更多选项"）
3. 把上面这条命令粘贴进去，回车

> 在 Git Bash 里粘贴要用 **Shift + Insert** 或者**右键 → Paste**，`Ctrl + V` 可能没反应。

成功的话会看到类似这样的输出：

```
Cloning into 'mp2'...
...
done.
```

然后这个文件夹里会多出一个 `mp2` 文件夹。接着输入下面这条命令进入它：

```bash
cd mp2
```

再继续做第 3 步。

---

## 🧑 User

PS D:\北美sde项目\cs409\mp2> npm create vite@latest . -- --template react-ts
npm : 无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.co
m/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm create vite@latest . -- --template react-ts
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS D:\北美sde项目\cs409\mp2>咋办

### 🤖 Claude

这是 **PowerShell 的安全设置**把 npm 拦住了，不是你操作错了。有三种解决办法，任选一种：

## 方法 1：改用 Git Bash（最推荐）

我之前的命令都是按 Git Bash 写的，换过去以后就不会有这个问题。

1. 打开文件夹 `D:\北美sde项目\cs409\mp2`
2. 在空白处**右键** → **Open Git Bash here**
3. 重新运行：

```bash
npm create vite@latest . -- --template react-ts
```

## 方法 2：继续用 PowerShell，把 `npm` 换成 `npm.cmd`

```bash
npm.cmd create vite@latest . -- --template react-ts
```

后面所有命令里的 `npm` 都要换成 `npm.cmd`，比如 `npm.cmd install`、`npm.cmd run dev`。

## 方法 3：一次性解除限制

在 PowerShell 里运行下面这条命令，它只对你当前的用户账号生效：

```bash
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

如果问你是否更改，输入 `Y` 回车。之后在 PowerShell 里也能直接用 `npm` 了。

---

⚠️ **另外提醒一下**：你的路径里有中文（`北美sde项目`）。一般没问题，但如果后面运行时出现奇怪的报错，可以把整个 `cs409` 文件夹挪到纯英文路径下，比如 `D:\cs409`。

---

## 🧑 User

*[screenshot attached]*

现在咋办

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\2.png]

### 🤖 Claude

按两次 **↓（下方向键）**，把绿点移到 **Ignore files and continue**，然后按 **回车**。

```
○ Cancel operation
○ Remove existing files and continue   ← ⚠️ 千万别选这个，会删掉部署配置
● Ignore files and continue            ← 选这个
```

如果后面还问 `Install with npm and start now?`，选 **No**。

完成后接着运行下面这三条命令。你现在用的是 PowerShell，所以记得用 `npm.cmd`：

1. 恢复原来的 README：

```bash
git checkout README.md
```

2. 安装依赖：

```bash
npm.cmd install
```

3. 安装作业要用的库：

```bash
npm.cmd install axios react-router-dom normalize.css
```

---

## 🧑 User

*[screenshot attached]*

现在呢

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\3.png]

### 🤖 Claude

直接按**回车**，用默认的 **Oxlint** 就行。

它是代码检查工具，选哪个对作业都没有影响。我在你电脑上测试的时候用的也是 Oxlint。

如果接下来问 `Install with npm and start now?`，选 **No**。之后就接着运行上一条消息里的那三条命令。

---

## 🧑 User

*[screenshot attached]*

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\4.png]

### 🤖 Claude

按一下 **→（右方向键）**，把绿点移到 **No**，然后按**回车**。

```
○ Yes / ● No
```

选 No 是因为我们还要先恢复 README、安装其他库。选 Yes 的话它会直接启动网页，占住这个窗口。

完成后依次运行：

```bash
git checkout README.md
```

```bash
npm.cmd install
```

```bash
npm.cmd install axios react-router-dom normalize.css
```

三条都跑完后，把最后的输出截图发给我。

---

## 🧑 User

PS D:\北美sde项目\cs409\mp2> npm install
npm : 无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.co
m/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm install
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS D:\北美sde项目\cs409\mp2>

### 🤖 Claude

这是因为少打了 `.cmd`。在 PowerShell 里要写成 `npm.cmd`：

```bash
npm.cmd install
```

---

后面还要输入很多次 npm，每次都加 `.cmd` 很容易忘。建议**一次性解决**，在 PowerShell 里运行：

```bash
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

如果提示是否更改，输入 `Y` 回车。之后就可以直接用 `npm` 了。

> 这条命令只对你自己的账号生效，作用是允许运行本机上的脚本（比如 npm）。从网上下载、没有签名的脚本仍然会被拦住，是开发者常用的设置。

---

然后依次运行：

```bash
git checkout README.md
```

```bash
npm install
```

```bash
npm install axios react-router-dom normalize.css
```

---

## 🧑 User

PS D:\北美sde项目\cs409\mp2> git checkout README.md
Updated 1 path from the index
PS D:\北美sde项目\cs409\mp2> npm install
npm : 无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.co
m/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ npm install
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
PS D:\北美sde项目\cs409\mp2> npm.cmd install

added 27 packages, and audited 28 packages in 10s

9 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\北美sde项目\cs409\mp2> npm.cmd install axios react-router-dom normalize.css

added 32 packages, and audited 60 packages in 4s

16 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS D:\北美sde项目\cs409\mp2>现在咋样可以进行下一步了 吗，现在属于处于什么情况

### 🤖 Claude

都成功了，可以进行下一步。

## 你现在的进度

| 步骤 | 状态 |
|---|---|
| 1. 在 GitHub 创建仓库 | ✅ 完成 |
| 2. clone 到电脑 | ✅ 完成 |
| 3. 用 Vite 生成 React 项目 | ✅ 完成 |
| 4. 恢复 README | ✅ 完成（`Updated 1 path` 就是恢复成功） |
| 5. 安装依赖和作业用的库 | ✅ 完成（`found 0 vulnerabilities` 说明没有问题） |
| 6. 跑起来看看 | ⬜ 下一步 |
| 7. 设置 GitHub Pages | ⬜ |
| 8. 用 VS Code 打开 | ⬜ |

简单说：**项目骨架已经搭好了，所有需要的工具都装好了，还没开始写代码。**

---

## 第 6 步：跑起来看看

```bash
npm.cmd run dev
```

看到 `Local: http://localhost:5173/` 后，按住 **Ctrl** 点这个链接，或者复制到浏览器打开。能看到一个带 Vite 和 React 图标、中间有计数按钮的页面，就说明成功了。

看完回到 PowerShell，按 **Ctrl + C** 停止（如果问 `终止批处理操作吗(Y/N)?`，输入 `Y`）。

## 第 7 步：设置 GitHub Pages

1. 浏览器打开 https://github.com/XST3108/mp2
2. 点上方的 **Settings**
3. 左边栏点 **Pages**
4. **Build and deployment** → **Source**，下拉选 **GitHub Actions**

## 第 8 步：用 VS Code 打开项目

```bash
code .
```

如果提示找不到 `code`，就手动打开 VS Code，点 **File → Open Folder**，选 `D:\北美sde项目\cs409\mp2`。

---

这三步做完告诉我，接下来就正式开始写代码。

---

## 🧑 User

*[screenshot attached]*

现在网页是这个情况 ok吗

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\5.png]

### 🤖 Claude

完全 OK，这就是 Vite 自带的默认页面，说明项目已经能正常运行了。待会儿写代码时会把它整个换掉。

现在：

1. 回到 PowerShell，按 **Ctrl + C** 停止运行（问 `Y/N` 就输入 `Y`）
2. 做**第 7 步**：打开 https://github.com/XST3108/mp2 → **Settings** → **Pages** → **Source** 选 **GitHub Actions**
3. 做**第 8 步**：用 VS Code 打开 `mp2` 文件夹

> 其实不停止也可以。开着 `npm run dev` 写代码，每次保存网页都会自动刷新，可以边写边看效果。想这样的话，就另外开一个 PowerShell 窗口来输入其他命令。

这两步做完说一声，我们就开始写代码。

---

## 🧑 User

*[screenshot attached]*

现在ok了吗已经

---

## 🧑 User

[Image: source: C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\images\6.png]

### 🤖 Claude

Source 已经是 **GitHub Actions**，这一步完成了。下面那两个 **Configure** 按钮**不要点**，课程模板里已经自带了部署配置。

接下来开始写代码。我先在这边把完整代码跑一遍，确认没问题后再一个文件一个文件地教你。

> 🔧 *Bash*: Write entry, app routes, layout and status components

*[Request interrupted by user]*

---

## 🧑 User

PS D:\北美sde项目\cs409\mp2> 我的代码在这个文件目录下，你直接按照要求给我写个满分的出来：


Table of Contents

1. [Assignment](https://github.com/XST3108/mp2#assignment)
2. [Grading Breakdown](https://github.com/XST3108/mp2#grading-breakdown)
3. [Tips](https://github.com/XST3108/mp2#tips)
4. [Rules](https://github.com/XST3108/mp2#rules)
5. [Getting Started](https://github.com/XST3108/mp2#getting-started)
6. [Submission Details](https://github.com/XST3108/mp2#submission-details)

Assignment
Task
In this programming assignment, you will implement a front-end interface using React that consumes an API. Please read through the entire MP before you start.
Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.

* [TMDB](https://www.themoviedb.org/documentation/api)
* [Pokemon](https://pokeapi.co/)
* [NASA](https://api.nasa.gov/index.html)
* [Marvel](https://developer.marvel.com/)
* [Jelly Belly Wiki](https://jelly-belly-wiki.netlify.app/)
* [The Meal DB](https://www.themealdb.com/api.php)
* [Art Institute of Chicago](https://api.artic.edu/docs/)
* More APIs if you want to explore [here](https://publicapis.dev/) (please keep it class appropriate) 🫵🤨📸.

Note that you may need to create an account and/or acquire an API key for some of the APIs. GitHub won’t restrict you from pushing API keys, but may send an email to say some keys are exposed. Because of this, please don't use any paid APIs.
The API you are working with may become temporarily unavailable. If/when this happens, it doesn't mean you are blocked from working on the MP. You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
You may need to deal with APIs having rate-limiting policies. You can find ways to get around them like caching the results of large and common API calls
These are also good opportunities to think about how your app should handle errors.
Your app should have the following features:

* A list view: where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
* A gallery view: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
* A detail view: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.

Here's an old example that fulfills these requirements: https://www.youtube.com/watch?v=DmDZuAr7QJE
You will also be required to use following tools:

* Use [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
* Use [Axios](https://www.npmjs.com/package/axios) for API calls.
* Use [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html).

Grading Breakdown
Total Points : 100
List View:

* Does the list view display relevant items from the chosen API ? (4 points)
* Does the search bar filter down items based on the search? (8 points)
* Can you sort by at least 2 properties? (8 points)
* Can the properties be sorted in Ascending and Descending order? (8 points)

Gallery View:

* Is the gallery composed of item media? (4 points)
* Does clicking on a filter change results accordingly? (8 points)

Details View:

* Does clicking on an item in List View take you to the Details View? (10 points)
* Does clicking on an item in Gallery View take you to the Details View? (10 points)
* Does the Details View contain item details? (8 points)
* Do the PREVIOUS and NEXT buttons work correctly? (10 points)

Other:

* Does the implementation use React Router and TypeScript? (12 points)
* Design (10 points)

Tips

* Start early! This is first MP that uses React so start ahead.
* Visit https://reactjs.org/docs/faq-structure.html for examples on how to structure your React files.
* You may use a React component library for this MP.
* We recommend using [Normalize.css](https://necolas.github.io/normalize.css/).
* We recommend using [CSS Modules](https://vite.dev/guide/features.html#css-modules), which Vite supports out of the box via `*.module.css`.

Rules

1. This is an individual assignment. No collaboration is permitted.
2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
3. There should be no use of inline styling.
4. No inline script tags should be used.
5. HTML tables cannot be used for layout.
6. If you think something you’re doing might not be acceptable, please ask on Piazza.
7. We strongly recommend using `Vite` to get your MP started. If you ignore this, we will not help with any environment issues.

Getting Started

1. Use `Vite` (see below) to generate your MP starter code, then run `npm install`.
2. After running `npm run dev` open a browser and go to `http://localhost:5173/` to view your page.
3. Open up `src/App.tsx` to start building your first component. Visit https://react.dev/learn for many official, high quality resources to help get you started.

Vite
[Vite](https://vite.dev/) generates a React starter project that requires no immediate configuration, and is one of the tools [React officially recommends](https://react.dev/link/cra) now that Create React App is deprecated. Use the react-ts template:

```
npm create vite@latest . -- --template react-ts

```

If Vite does not install dependencies for you, run `npm install` afterwards. The dev server is `npm run dev` (not `npm start`), and a production build goes to `dist/` (not `build/`).
Submission Details
Here's what you will need to submit:

1. On the [class repo](https://github.com/cs409-fa25/mp2), click Use this template > Create a new repository. Name it `mp2` and make it public (GitHub Pages requires a public repo on a free account). Then clone it: `git clone git@github.com:<your-github-username>/mp2.git`
2. `cd mp2`, then scaffold a Vite + React + TypeScript project in place:


```
npm create vite@latest . -- --template react-ts

```

* The directory already has `README.md` and `.github/`, so Vite will ask how to proceed. Choose "Ignore files and continue". (Do NOT choose "Remove existing files" -- that deletes the deploy workflow.)
* Note: Vite's template will overwrite `README.md`. Please pay attention to this and use an appropriate method to restore it if needed.

3. Install dependencies:


```
npm install

```

* This also creates `package-lock.json`. Commit it -- the deploy workflow runs `npm ci`, which fails without a lockfile.

4. Set `base` in `vite.config.ts` so the deployed site can find its assets:


```
export default defineConfig({
  plugins: [react()],
  base: '/<your-github-repo-name>/',   // e.g. '/mp2/' -- must match the repo name
})
```

* Getting this wrong produces a blank page with 404s on your JS/CSS, not a build error.

5. In your `BrowserRouter` or `Router` component, set the basename to match:


```
<BrowserRouter basename={import.meta.env.BASE_URL}>
  ...
</BrowserRouter>

```

* Note: Should use `<Link/>` component instead of `<a>` to have the same basename.

6. Set GitHub Pages Deployment Source to Github Actions
   * In your Github repo, go to Settings > Pages > Build and Deployment > Source > Select "GitHub Actions"
7. Commit and push your local changes to this new repository.


```
git add . # "." adds all changed files, can also add specific files too
git commit -m "[my-commit-message]" # message should be clear and meaningful
git branch -M main
git push origin main

```

8. `.github/workflows/deploy.yml` file automatically makes a GitHub CI pipeline run to deploy your code. After the pipeline finishes, your site should be live at `https://<your-github-username>.github.io/mp2`. It should take around 1 minute.
9. Make a video (3 minutes max) demo-ing your deployed website and upload it to Google Drive. Share it with `uiuc.web.programming@gmail.com` and put the share link in the submission form.

* Show the url to prove you are on your deployed website. Then show all the requirement features you fulfilled in your mp.
* If you were unable to deploy your website, you can demo your mp locally for some point deduction (hard capped at 80%)
   * Just make sure you do `git status` and `git log` first so we can see your last edits.

10. Fill out and submit the form [here](https://forms.gle/PkYq9RaMFG8MaMjF7).

> 🔧 *ToolSearch*: select:mcp__ccd_directory__change_directory

> 🔧 *mcp__ccd_directory__change_directory*: D:\北美sde项目\cs409\mp2

> 🔧 *Bash*: Inspect the user's project and deploy workflow

> 🔧 *Bash*: Copy drafted files into the project and check versions

> 🔧 *Bash*: Write list view page and styles

### 🤖 Claude

搜索列表页已经写好，接下来写画廊页和详情页，然后编译检查。

> 🔧 *Bash*: Write gallery and detail pages, then build

> 🔧 *Bash*: Check which files were written

### 🤖 Claude

改用文件写入工具，逐个写入。

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\index.html

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.tsx

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.module.css

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\DetailPage.tsx

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\DetailPage.module.css

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\NotFoundPage.tsx

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\NotFoundPage.module.css

> 🔧 *Bash*: Build the project, lint, and check thumbnail sizes

> 🔧 *Edit*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.tsx

> 🔧 *Bash*: Rebuild and re-lint

### 🤖 Claude

编译和代码检查都通过了，现在打开浏览器实际点一遍。

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\.claude\launch.json

> 🔧 *mcp__Claude_Browser__preview_start*

> 🔧 *Bash*: Start the dev server for browser testing

> 🔧 *mcp__Claude_Browser__preview_start*: http://localhost:5180/mp2/

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__javascript_tool*

### 🤖 Claude

Now test search, sorting, gallery filter, and detail navigation with real clicks.

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__find*: Search meals

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__javascript_tool*

### 🤖 Claude

搜索正常（790 → 70 条）。接着测排序。

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__find*: combobox

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__javascript_tool*

### 🤖 Claude

排序正常。现在点列表项进入详情页，测试上一个和下一个。

> 🔧 *mcp__Claude_Browser__find*: Chickpea Fajitas

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__browser_batch*

### 🤖 Claude

详情页和上一个 / 下一个都正常。最后测画廊的多选筛选。

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__find*: Dessert

> 🔧 *mcp__Claude_Browser__browser_batch*

### 🤖 Claude

Multi-select filter works. Now click a gallery card, and check that opening a detail URL directly works.

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__find*: link /mp2/meal/53281

> 🔧 *mcp__Claude_Browser__read_page*

> 🔧 *mcp__Claude_Browser__browser_batch*

### 🤖 Claude

所有功能都测通了。再修一个小问题：直接打开详情页网址时，"← Back" 按钮会跳出网站，改成这种情况下回到首页。

> 🔧 *Edit*: D:\北美sde项目\cs409\mp2\src\pages\DetailPage.tsx

> 🔧 *Bash*: Rebuild, lint, and show changed files

> 🔧 *Bash*: Stop the test dev server

> 🔧 *PowerShell*: Stop the test dev server on port 5180

### 🤖 Claude

代码已经写进你的 `mp2` 文件夹了。我在浏览器里把每个评分项都实际点过一遍，全部正常，编译也没有报错。

## 每个评分项的实现

| 评分项 | 实现方式 | 实测结果 |
|---|---|---|
| 列表显示数据 | 从 TheMealDB 拉取全部菜谱 | 790 道菜 ✅ |
| 边打边搜 | 输入时实时筛选 | 输入 "chick" 后剩 70 条 ✅ |
| 2 种以上属性排序 | 名字 / 分类 / 菜系 / ID，共 4 种 | ✅ |
| 升序 / 降序 | 两个切换按钮 | ✅ |
| 画廊图片 | 菜品图片网格 | ✅ |
| 画廊筛选（多选） | 点分类按钮，可以同时选多个 | 选甜点 + 牛肉后只剩这两类 ✅ |
| 列表 → 详情 | 点任意一行进入 | ✅ |
| 画廊 → 详情 | 点任意图片进入 | ✅ |
| 详情内容 | 大图、分类、菜系、ID、标签、配料表、做法步骤、YouTube 链接 | ✅ |
| 上一个 / 下一个 | 按你点进来时那个列表的顺序切换，到头会循环，键盘 ← → 也能用 | ✅ |
| 详情页有独立网址 | 比如 `/mp2/meal/52772`，直接打开也能用 | ✅ |
| React Router + TypeScript | 全部使用 | ✅ |

作业规则也都遵守了：样式全部在 CSS Modules 里，没有行内样式，没有行内 script，没有用 table 布局。

另外我做了一个额外处理：GitHub Pages 本身不支持前端路由，直接打开详情页网址会 404。我在 [vite.config.ts](vite.config.ts) 里让构建时自动生成 `404.html` 来解决这个问题。

## 主要文件

- [src/api.ts](src/api.ts)：用 Axios 请求数据，并做了缓存
- [src/pages/ListPage.tsx](src/pages/ListPage.tsx)：搜索列表页
- [src/pages/GalleryPage.tsx](src/pages/GalleryPage.tsx)：画廊页
- [src/pages/DetailPage.tsx](src/pages/DetailPage.tsx)：详情页
- [src/App.tsx](src/App.tsx)：路由配置

---

## 接下来你要做的

**1. 本地看一眼**

```bash
npm.cmd run dev
```

打开终端里显示的地址，注意现在要加上 `/mp2/`，也就是 `http://localhost:5173/mp2/`。

**2. 提交并推送**（在 `mp2` 文件夹的 PowerShell 里依次运行）

```bash
git add .
```

```bash
git commit -m "Build recipe finder app with list, gallery and detail views"
```

```bash
git branch -M main
```

```bash
git push origin main
```

第一次 push 可能会弹出 GitHub 登录窗口，登录就行。

**3. 等部署完成**

打开 https://github.com/XST3108/mp2/actions ，等任务变成绿色 ✅（大约 1 分钟），然后访问 **https://xst3108.github.io/mp2/** 。

**4. 录视频（3 分钟以内）**，按这个顺序演示：
1. 先展示浏览器地址栏里的网址
2. 搜索页：输入关键词 → 切换排序属性 → 切换升序 / 降序
3. 点一道菜进入详情页 → 点几次 Next 和 Previous
4. 画廊页：选一个分类 → 再多选一个 → 点一张图进入详情页 → 点几次 Next 和 Previous
5. 把某个详情页网址复制到新标签页打开，展示它能直接访问

**5.** 视频上传 Google Drive，共享给 `uiuc.web.programming@gmail.com`，再填提交表单。

---

⚠️ **最后提醒一件重要的事**：作业规则第 2 条要求声明所有参考来源，这份代码是我（AI）写的。请先看一下课程大纲或 Piazza 上对使用 AI 的规定，并在提交时如实声明。录视频前也建议把这几个文件读一遍，确保助教问起时你能讲清楚。

推送或部署时遇到报错，把报错贴给我就行。

---

## 🧑 User

<task-notification>
<task-id>b4258s98q</task-id>
<tool-use-id>toolu_01UPQs3vEwZeeXn9JzeofhUy</tool-use-id>
<output-file>C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\tasks\b4258s98q.output</output-file>
<status>failed</status>
<summary>Background command "Start the dev server for browser testing" failed with exit code 127</summary>
</task-notification>

### 🤖 Claude

这条通知只是说测试用的开发服务器停止了，是我自己关掉的，不影响你的项目。

接下来按上一条消息里的步骤操作就行：先运行 `npm.cmd run dev` 在本地看一眼，然后 `git add`、`git commit`、`git push`。

---

## 🧑 User

我三分钟的视频要怎么demo啊 挨个按照下面这个去讲 去介绍吗：


Grading Breakdown
Total Points : 100
List View:

* Does the list view display relevant items from the chosen API ? (4 points)
* Does the search bar filter down items based on the search? (8 points)
* Can you sort by at least 2 properties? (8 points)
* Can the properties be sorted in Ascending and Descending order? (8 points)

Gallery View:

* Is the gallery composed of item media? (4 points)
* Does clicking on a filter change results accordingly? (8 points)

Details View:

* Does clicking on an item in List View take you to the Details View? (10 points)
* Does clicking on an item in Gallery View take you to the Details View? (10 points)
* Does the Details View contain item details? (8 points)
* Do the PREVIOUS and NEXT buttons work correctly? (10 points)

Other:

* Does the implementation use React Router and TypeScript? (12 points)
* Design (10 points)

### 🤖 Claude

对，基本就是**按评分表逐项演示**，让助教看完视频能直接在每一项打勾。不过不用死板地一条一条念，按操作顺序走一遍就能自然覆盖所有评分项。

下面是一份**约 2 分 40 秒**的脚本，留了一点余量。旁白用英文，你可以照着念，也可以用自己的话说。

---

## 录之前准备

- 浏览器打开 **https://xst3108.github.io/mp2/** ，先等页面加载完
- VS Code 打开项目，提前点开 [src/App.tsx](src/App.tsx)
- 关掉无关的标签页和消息通知
- 录屏工具：Windows 自带 **Win + Alt + R**（Xbox Game Bar），或者用 OBS

---

## 脚本

### ① 开场 + 网址（0:00 – 0:10）
**操作**：鼠标指一下地址栏。

> "Hi, this is my MP2, a recipe finder built with React, TypeScript, React Router and Axios, using TheMealDB API. As you can see, it's deployed at xst3108.github.io/mp2."

### ② 列表视图（0:10 – 0:50）
对应评分：**显示数据 4 分 + 搜索 8 分 + 排序 8 分 + 升降序 8 分**

**操作**：
1. 停在搜索页，滚动一下列表
   > "This is the list view. It shows all meals from the API with their category and cuisine."
2. 在搜索框里**慢慢**打 `chicken`，让助教看到结果随着输入变化
   > "The search bar filters as I type. The result count updates live."
3. "Sort by" 依次选 **Name** → **Category** → **Cuisine**
   > "I can sort by name, category, cuisine, or ID."
4. 点 **Descending**，再点回 **Ascending**
   > "And each property can be sorted in ascending or descending order."

### ③ 列表 → 详情 + 上一个/下一个（0:50 – 1:25）
对应评分：**列表进详情 10 分 + 详情内容 8 分 + 上一个/下一个 10 分**

**操作**：
1. 点列表里的某一道菜
   > "Clicking an item takes me to the detail view."
2. 指一下地址栏里的 `/meal/xxxxx`，再往下滚动页面
   > "Each meal has its own route. The detail view shows the image, category, cuisine, ID, tags, ingredients with measurements, and step-by-step instructions."
3. 点 **Next** 两三次，再点 **Previous** 一两次，注意指一下 `3 / 70` 这个计数
   > "The previous and next buttons cycle through the same list I came from, in the same order. The counter shows my position."

### ④ 画廊视图（1:25 – 1:55）
对应评分：**图片画廊 4 分 + 筛选 8 分**

**操作**：
1. 点顶部 **Gallery**，滚动一下
   > "This is the gallery view, made of meal images."
2. 点 **Dessert**，指一下数量变化
   > "I can filter by category."
3. 再点 **Beef**，然后再点一次 **Dessert** 取消它
   > "Multiple categories can be selected at once, and clicking again deselects."
4. 点 **All**
   > "All clears the filters."

### ⑤ 画廊 → 详情（1:55 – 2:15）
对应评分：**画廊进详情 10 分 + 上一个/下一个**

**操作**：
1. 先选一个分类，比如 **Seafood**，然后点一张图片
   > "Clicking an image in the gallery also opens the detail view."
2. 点 **Next** 几次
   > "Here, next and previous only cycle through seafood meals, since that's what the gallery was filtered to."

### ⑥ 直接访问网址（2:15 – 2:25）
**操作**：复制当前详情页网址，打开新标签页粘贴，回车
> "The detail route also works when opened directly by URL."

### ⑦ React Router + TypeScript（2:25 – 2:45）
对应评分：**12 分**

**操作**：切到 VS Code，展示 [src/App.tsx](src/App.tsx)，再展开左侧的 `src` 文件夹
> "The app uses React Router for routing. Here are the routes for the list, gallery and detail pages. Everything is written in TypeScript, with typed meal data, and Axios handles the API calls."

> 设计分（10 分）不用专门讲，助教看整个视频的界面就会打分。

### ⑧ 结尾（2:45）
> "That's my MP2. Thanks for watching."

---

## 几个小技巧

- **鼠标动作放慢**，每次点击后停 1 秒，让画面跟上
- **先完整排练一遍**再正式录，超时就把旁白说短一点，**操作步骤不要删**
- 第 ③ 和第 ⑤ 步是**分值最高**的部分（每个 10 分），一定要清楚展示点击和跳转
- 录完自己看一遍，确认网址清晰可见、没有超过 3 分钟

---

## 🧑 User

Gallery View:

* Is the gallery composed of item media? (4 points)这是个啥意思啊

### 🤖 Claude

意思是：**画廊页是不是由每个条目的图片组成的？**

拆开来看：
- **gallery**：画廊页
- **item**：每一个条目，在你的项目里就是**每一道菜**
- **media**：媒体内容，主要指**图片**（也可以是视频之类的）
- **composed of**：由……组成

合起来就是：画廊页要**以图片为主**，而且图片要来自 API 返回的数据，不能是随便放的装饰图。比如电影 API 就是一墙电影海报，宝可梦 API 就是一墙宝可梦头像。

---

**你的项目已经满足了**：画廊页是一格一格的菜品照片，每张图都是 TheMealDB 返回的那道菜的成品图（`strMealThumb` 字段）。

录视频时打开画廊页，**上下滚动一下**，让助教看到满屏都是菜品图片，同时说一句：

> "This is the gallery view, made of meal images from the API."

这 4 分就拿到了。

---

## 🧑 User

List View:

* Does the list view display relevant items from the chosen API ? (4 points)
* Does the search bar filter down items based on the search? (8 points)
* Can you sort by at least 2 properties? (8 points)
* Can the properties be sorted in Ascending and Descending order? (8 points)完整准确的中文 啥意思 咋展示

### 🤖 Claude

## 列表视图（List View）

### 第 1 条（4 分）
**原文**：Does the list view display relevant items from the chosen API?
**翻译**：列表视图是否显示了**来自你所选 API 的相关条目**？

**意思**：列表里的内容必须是**从 API 真实拿到的数据**，比如菜名、分类，不能是空白页，也不能是你随便写死的假数据。

**怎么展示**：打开搜索页，**上下滚动一下列表**，让助教看到很多道菜，每道菜都有名字、图片、分类、菜系。
> "This is the list view. It shows meals from TheMealDB API, with their name, image, category and cuisine."

---

### 第 2 条（8 分）
**原文**：Does the search bar filter down items based on the search?
**翻译**：搜索框是否能**根据搜索内容筛选出条目**？

**意思**：在搜索框里输入文字后，列表要**只剩下匹配的结果**。作业要求里还特别说了要**边打字边筛选**（filter as you type），不用按回车。

**怎么展示**：**一个字母一个字母慢慢打** `chicken`，让助教看到每打一个字母，下面的列表和结果数量（比如 `790 results` → `70 results`）都在变化。
> "The search bar filters as I type. You can see the result count going down."

---

### 第 3 条（8 分）
**原文**：Can you sort by at least 2 properties?
**翻译**：是否能按**至少 2 种属性**排序？

**意思**：要能选择"按什么来排序"，**至少要有 2 种选项**。你的项目有 4 种：**Name（菜名）、Category（分类）、Cuisine（菜系/国家）、ID（编号）**。

**怎么展示**：点 **Sort by** 下拉框，依次切换 **Name** → **Category** → **Cuisine**，每次切换后停一秒，让助教看到列表顺序变了。可以指一下每行上的分类标签，说明确实是按分类排好的。
> "I can sort by name, category, cuisine, or ID."

---

### 第 4 条（8 分）
**原文**：Can the properties be sorted in Ascending and Descending order?
**翻译**：这些属性是否能按**升序和降序**排列？

**意思**：每种排序都要能**正着排、倒着排**：
- **升序（Ascending）**：A → Z，或者数字从小到大
- **降序（Descending）**：Z → A，或者数字从大到小

**怎么展示**：先选 **Name**，点 **↓ Descending**，列表变成 Z 开头的菜在最上面；再点 **↑ Ascending**，又变回 A 开头。最好再换成 **Category** 也演示一次，证明不只是名字能升降序。
> "Each property can be sorted in ascending or descending order."

---

## 一口气演示的顺序（约 40 秒）

1. 滚动列表 → **第 1 条**
2. 慢慢打 `chicken` → **第 2 条**
3. 下拉框切换 Name / Category / Cuisine → **第 3 条**
4. 点 Descending，再点 Ascending → **第 4 条**

这样 4 条连着演示完，列表视图的 28 分就全覆盖了。

---

## 🧑 User

Your app should have the following features:

* A list view: where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
* A gallery view: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
* A detail view: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.完整中文

### 🤖 Claude

你的应用需要具备以下功能：

* **列表视图**：用户可以在搜索框中输入查询内容，应用返回与查询相匹配的结果列表（例如搜索电影或宝可梦）。还应该提供一种方式，能根据结果的不同属性（例如名称或排名）对搜索结果进行**排序**，并能指定**排列顺序**（升序和降序）。此外，搜索框应该**边输入边筛选**。排序和筛选可以在客户端（前端）完成。

* **画廊视图**：展示所选 API 中的某种**图片媒体**（例如电影海报画廊）。画廊视图还应该有某种**筛选属性**，用户可以选择**一个或多个**属性来筛选画廊中的内容（例如电影或音乐的类型）。

* **详情视图**：当用户在搜索视图或画廊视图中**点击某个条目**时，应用应该显示所选条目的**各项属性**。此外，这个视图还应该有**"上一个"和"下一个"按钮**（可以用箭头实现），让用户能在对象列表中**来回切换**。详情视图被访问时应该有一个**专属的路由**。简单来说，用户应该能通过一个**特定的网址**直接访问详情页。

---

## 🧑 User

英文首字母咋说

### 🤖 Claude

"首字母"在英文里一般说 **first letter**，也可以说 **initial letter**，或者直接用 **initial**。

例句：
- The meals are sorted by the **first letter** of their names.（菜品按名字的首字母排序。）
- His **initials** are X.S.T.（他名字的首字母缩写是 X.S.T.）

几个相关的说法：

| 中文 | 英文 |
|---|---|
| 首字母 | first letter / initial |
| 姓名首字母缩写 | initials（一般用复数） |
| 首字母大写 | capitalize the first letter |
| 首字母缩略词（比如 NASA） | acronym |
| 按字母顺序 | alphabetically / in alphabetical order |

录视频演示排序时可以这样说：

> "Sorted by name in ascending order, the meals go from A to Z by their **first letter**."

> "In descending order, it goes from Z to A."

---

## 🧑 User

The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).这里的 one or many attributes 指的是同时可以filter catgory和Cusine还是啥意思

### 🤖 Claude

不是。这里的意思是：**同一种筛选条件下，可以同时选一个或多个选项**。不要求你同时按 Category 和 Cuisine 两种维度筛选。

看它举的例子就清楚了：**genres of films**（电影的类型）。

- 筛选条件只有一种：**类型（genre）**
- "选一个或多个"指的是：可以只选「动作片」，也可以同时选「动作片 + 喜剧片 + 科幻片」

这句话里 "attribute" 的用法有点随意。前面的 "filtering attribute" 指**筛选的维度**（类型），后面的 "one or many attributes" 其实指的是**这个维度下的具体值**（动作、喜剧……）。

---

## 套到你的项目上

| | 电影例子 | 你的项目 |
|---|---|---|
| 筛选维度 | 类型 genre | 分类 Category |
| 选一个 | 只看动作片 | 只看 Dessert |
| 选多个 | 动作片 + 喜剧片 | Dessert + Beef + Seafood |

**你现在的画廊已经满足要求了**：分类按钮可以多选，再点一次就取消，点 **All** 清空。

录视频时一定要演示**多选**，这是这一项的关键：

1. 点 **Dessert**，只剩甜点
2. 再点 **Beef**，甜点和牛肉一起显示，数量变多
3. 再点一次 **Dessert**，取消它，只剩牛肉

> "Users can select one or multiple categories to filter the gallery, and click again to deselect."

---

如果你想更保险，我也可以再加一组 **Cuisine** 筛选，让两种维度同时生效（比如"甜点 + 意大利菜"）。不过评分表只写了 *"Does clicking on a filter change results accordingly?"*，现在的实现已经够拿满分，加不加都行。

---

## 🧑 User

那你再给我加上一组 Cuisine 筛选吧，能让category和Cuisine 同时生效，然后对应的gallery每个item也要和catergory一样显示对应的suisine

> 🔧 *Read*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.tsx

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.tsx

> 🔧 *Write*: D:\北美sde项目\cs409\mp2\src\pages\GalleryPage.module.css

> 🔧 *Bash*: Build and lint after adding cuisine filter

### 🤖 Claude

Build passes. Now test it in the browser.

> 🔧 *Bash*: Start dev server for testing

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *mcp__Claude_Browser__browser_batch*

> 🔧 *PowerShell*: Stop the test dev server

### 🤖 Claude

Cuisine 筛选已经加好了，我在浏览器里实际点过，编译也通过了。改动只涉及 [GalleryPage.tsx](src/pages/GalleryPage.tsx) 和 [GalleryPage.module.css](src/pages/GalleryPage.module.css)。

## 改了什么

**1. 新增一组 Cuisine 筛选按钮**，放在 Category 下面。菜系有好几十个，所以这一组限制了高度，在框里上下滚动，不会把整个页面撑得很长。

**2. 两组筛选同时生效**，规则是：
- **同一组内是"或"**：选 Dessert + Beef，表示甜点**或**牛肉都显示
- **两组之间是"且"**：再选 Italy，表示必须**同时满足**分类条件和菜系条件

**3. 每张图片上同时显示分类和菜系**两个小标签，比如 `Dessert` `Italy`。

**4. 其他细节**：
- 每组各有一个 **All** 按钮，只清空这一组
- 有筛选时右上角出现 **Clear all filters**，一键清空全部
- 结果数量旁边会写出当前选了哪些条件
- 组合筛选没有结果时，会显示提示文字，而不是一片空白

## 实测结果

| 操作 | 结果 |
|---|---|
| 不筛选 | 790 道菜 |
| 选 Dessert | 167 道，全是甜点 |
| 再选 Italy | 1 道（意大利甜点） |
| 再选 France | 7 道（意大利或法国的甜点） |
| 再选 Beef | 10 道（意大利或法国的甜点或牛肉） |

---

## 录视频时这样演示（约 30 秒）

1. 点 **Dessert**："I can filter by category."
2. 再点 **Beef**："Multiple categories can be selected."
3. 在 Cuisine 框里**往下滚**，找到并点 **Italy**："And filter by cuisine at the same time. Both filters apply together."
4. 指一下图片上的两个标签："Each card shows its category and cuisine."
5. 点 **Clear all filters**

---

## 推送更新

之前已经 push 过的话，再运行下面三条，网站会自动重新部署：

```bash
git add .
```

```bash
git commit -m "Add cuisine filter to gallery"
```

```bash
git push
```

还没 push 过的话，就按上上条消息里的完整步骤来，这次的改动会一起带上去。

---

## 🧑 User

<task-notification>
<task-id>budvdra9w</task-id>
<tool-use-id>toolu_01JspDqZBV6uKxLkwk35GER1</tool-use-id>
<output-file>C:\Users\86182\AppData\Local\Temp\claude\C--Users-86182-AppData-Roaming-Claude-scratch-workspaces-9b293ab1-0fc3-4d7c-8e11-1e94e9c6ac29-3ddf33d7-31e5-4204-8a50-beb0d49401dc-scratch-2026-10-06-e50983\0117462d-789e-426e-b055-f1bc5714fcb1\tasks\budvdra9w.output</output-file>
<status>failed</status>
<summary>Background command "Start dev server for testing" failed with exit code 127</summary>
</task-notification>

### 🤖 Claude

这条通知只是说测试用的开发服务器停了，是我测完后自己关掉的，不影响你的项目。

---

## 🧑 User

页面最右上角 是显示search和gallery还是list和gallery啊

### 🤖 Claude

现在显示的是 **Search** 和 **Gallery**。

两种叫法都可以，不影响得分。作业原文说的是 *"A list view: where users can input a query into a **search bar**..."*，列表页本身就是带搜索功能的列表，助教看到 Search 也能明白。

如果你想和评分表里的 **List View** 叫法完全一致，录视频时讲解更直观，可以改成 **List**。只需要改 [src/components/Layout.tsx](src/components/Layout.tsx) 里的一个单词：

```tsx
<NavLink to="/" end className={linkClass}>
  Search
</NavLink>
```

把 `Search` 改成 `List` 就行。要我直接帮你改吗？

---

## 🧑 User

直接给我改好吧

> 🔧 *Edit*: D:\北美sde项目\cs409\mp2\src\components\Layout.tsx

> 🔧 *Bash*: Rename back links and rebuild

### 🤖 Claude

改好了，编译也通过了。

- 右上角导航从 **Search** 改成了 **List**（[Layout.tsx](src/components/Layout.tsx)）
- 为了叫法统一，详情页和 404 页里的 "← Back to search" 也改成了 **"← Back to list"**

列表页标题还是 "Search Recipes"，这个描述的是页面功能，保留没问题。

推送到网上：

```bash
git add .
```

```bash
git commit -m "Rename Search nav link to List"
```

```bash
git push
```

---

## 🧑 User

Requirements
Create a single-page React app that lets users interact with the data from one of the following APIs.

* [TMDB](https://www.themoviedb.org/documentation/api)
* [Pokemon](https://pokeapi.co/)
* [NASA](https://api.nasa.gov/index.html)
* [Marvel](https://developer.marvel.com/)
* [Jelly Belly Wiki](https://jelly-belly-wiki.netlify.app/)
* [The Meal DB](https://www.themealdb.com/api.php)
* [Art Institute of Chicago](https://api.artic.edu/docs/)
* More APIs if you want to explore [here](https://publicapis.dev/) (please keep it class appropriate) 🫵🤨📸.

Note that you may need to create an account and/or acquire an API key for some of the APIs. GitHub won’t restrict you from pushing API keys, but may send an email to say some keys are exposed. Because of this, please don't use any paid APIs.
The API you are working with may become temporarily unavailable. If/when this happens, it doesn't mean you are blocked from working on the MP. You can mock the data, i.e. create a local hard coded response and use that instead of making the request.
You may need to deal with APIs having rate-limiting policies. You can find ways to get around them like caching the results of large and common API calls
These are also good opportunities to think about how your app should handle errors.
Your app should have the following features:

* A list view: where users can input a query into a search bar and the app returns a list of results that match the query (i.e. searching movies or pokemon). There should also be a way to sort the search results based on different properties of the results (such as the name or rank) and of specifying an ordering (ascending and descending). Also, the search bar should filter as you type. You can sort and filter in the client side.
* A gallery view: that displays some kind of image media from the chosen API (gallery of movie posters). The gallery view should also have some kind filtering attribute where users can select one or many attributes and filter the gallery by them (i.e. genres of films or music).
* A detail view: When an item in the search view or the gallery view is clicked, the app should display the different attributes of the selected item. Also, this view should have previous and next buttons (can be implemented with arrows) that lets the user cycle through the list of objects. A detail view should have a specific route when navigated to. Basically, a user should be able to access the detail route through a specific url.

Here's an old example that fulfills these requirements: https://www.youtube.com/watch?v=DmDZuAr7QJE
You will also be required to use following tools:

* Use [React Router](https://reactrouter.com/web/guides/quick-start) for routing.
* Use [Axios](https://www.npmjs.com/package/axios) for API calls.
* Use [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html).


 Other:
   * Does the implementation use React Router and TypeScript? (12 points)
   * Design (10 points)
Tips
   * Start early! This is first MP that uses React so start ahead.
   * Visit https://reactjs.org/docs/faq-structure.html for examples on how to structure your React files.
   * You may use a React component library for this MP.
   * We recommend using [Normalize.css](https://necolas.github.io/normalize.css/).
   * We recommend using [CSS Modules](https://vite.dev/guide/features.html#css-modules), which Vite supports out of the box via `*.module.css`.
Rules
   1. This is an individual assignment. No collaboration is permitted.
   2. It is not permitted to copy/paste code that is not your own. You are, however, free to look at different code sources for inspiration and clarity. All sources (code as well as reading material) that you reference to complete this assignment must be declared in the submission.
   3. There should be no use of inline styling.
   4. No inline script tags should be used.
   5. HTML tables cannot be used for layout.
   6. If you think something you’re doing might not be acceptable, please ask on Piazza.
   7. We strongly recommend using `Vite` to get your MP started. If you ignore this, we will not help with any environment issues.你去看下我目前的代码 是否满足这里的所有要求了

> 🔧 *Bash*: Audit current code against assignment rules

### 🤖 Claude

代码层面**全部满足要求**，我逐条查过。但发现一个**更要紧的问题**：你的代码**还没有提交、也没有推送到 GitHub**，所以现在网站还没上线。

## ⚠️ 最要紧：代码还没推上去

我查了 git 记录，只有课程模板自带的 `Initial commit`，所有代码文件都还是"未提交"状态（`??`）。也就是说 **https://xst3108.github.io/mp2/ 现在打不开**，录视频必须用部署后的网址，否则**最高只能拿 80%**。今晚就截止，建议现在就推：

```bash
git add .
```

```bash
git commit -m "Build recipe finder app with list, gallery and detail views"
```

```bash
git branch -M main
```

```bash
git push origin main
```

推完打开 https://github.com/XST3108/mp2/actions 等它变绿，再访问网站确认。

---

## 逐条检查结果

### 功能要求

| 要求 | 状态 | 依据 |
|---|---|---|
| 单页 React 应用 | ✅ | Vite + React，只有一个 `index.html` |
| 使用列表中的 API | ✅ | The Meal DB |
| 列表：搜索返回匹配结果 | ✅ | [ListPage.tsx](src/pages/ListPage.tsx) |
| 列表：边打字边筛选 | ✅ | 输入时实时过滤 |
| 列表：按不同属性排序 | ✅ | 名字 / 分类 / 菜系 / ID |
| 列表：升序 / 降序 | ✅ | 两个切换按钮 |
| 画廊：展示图片 | ✅ | [GalleryPage.tsx](src/pages/GalleryPage.tsx) |
| 画廊：可选一个或多个属性筛选 | ✅ | Category 和 Cuisine 两组，都能多选 |
| 详情：从列表和画廊点进去 | ✅ | 都用 `<Link>` 跳转 |
| 详情：显示各项属性 | ✅ | 图片、分类、菜系、ID、标签、配料、做法、视频 |
| 详情：上一个 / 下一个 | ✅ | 按来源列表顺序循环切换 |
| 详情：有专属网址 | ✅ | `/meal/:id`，直接打开也能用 |

### 工具要求

| 要求 | 状态 | 依据 |
|---|---|---|
| React Router | ✅ | [main.tsx](src/main.tsx) 里有 `BrowserRouter`，[App.tsx](src/App.tsx) 里有 `Routes` |
| Axios | ✅ | [api.ts](src/api.ts) 用 `axios.create` 发请求 |
| TypeScript | ✅ | 全部是 `.ts` / `.tsx`，没有 `.js` 文件，类型检查通过 |
| basename 和 base 配置 | ✅ | `base: '/mp2/'`，`basename={import.meta.env.BASE_URL}` |
| 内部链接用 `<Link>` | ✅ | 仅有的两个 `<a>` 都是外部链接（TheMealDB 官网、YouTube），这是正确用法 |

### 附加建议（不扣分，但做了更好）

| 建议 | 状态 |
|---|---|
| 缓存请求结果，应对频率限制 | ✅ 整个应用只请求一次，之后切换页面都用缓存 |
| 处理错误 | ✅ 请求失败显示提示，找不到菜或页面也有提示 |
| Normalize.css | ✅ 已引入 |
| CSS Modules | ✅ 每个页面都有自己的 `.module.css` |

### 规则

| 规则 | 状态 |
|---|---|
| 3. 不用行内样式 | ✅ 全项目搜索不到 `style=` |
| 4. 不用行内 script | ✅ 只有 Vite 自带的外部引用 `<script src="...">`，不算行内 |
| 5. 不用 table 布局 | ✅ 全项目没有 `<table>` |
| 7. 用 Vite | ✅ |
| **2. 声明所有参考来源** | ⚠️ **需要你自己处理** |

---

## 需要你自己处理的一件事

规则第 2 条要求**声明所有参考来源**。这份代码是 AI 帮你写的，提交时请如实写明（比如在提交表单里，或在 README 里加一段 Sources），也可以一并列上用到的文档：TheMealDB API、React Router、Axios、Vite 的官方文档。具体怎么写，以课程对 AI 使用的规定为准，不确定就去 Piazza 问一下。

需要的话，我可以现在帮你执行上面的提交和推送。

---

## 🧑 User

PS D:\北美sde项目\cs409\mp2> git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of '.oxlintrc.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/api.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/Layout.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/Layout.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/Status.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/components/Status.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/hooks/useMeals.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/navState.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/DetailPage.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/DetailPage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/GalleryPage.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/GalleryPage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/ListPage.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/ListPage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/NotFoundPage.module.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/pages/NotFoundPage.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/types.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.app.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.node.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.ts', LF will be replaced by CRLF the next time Git touches it
PS D:\北美sde项目\cs409\mp2> git commit -m "Build recipe finder app with list, gallery and detail views"
[main 65bdd85] Build recipe finder app with list, gallery and detail views
 28 files changed, 3194 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 .oxlintrc.json
 create mode 100644 index.html
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 src/App.tsx
 create mode 100644 src/api.ts
 create mode 100644 src/components/Layout.module.css
 create mode 100644 src/components/Layout.tsx
 create mode 100644 src/components/Status.module.css
 create mode 100644 src/components/Status.tsx
 create mode 100644 src/hooks/useMeals.ts
 create mode 100644 src/index.css
 create mode 100644 src/main.tsx
 create mode 100644 src/navState.ts
 create mode 100644 src/pages/DetailPage.module.css
 create mode 100644 src/pages/DetailPage.tsx
 create mode 100644 src/pages/GalleryPage.module.css
 create mode 100644 src/pages/GalleryPage.tsx
 create mode 100644 src/pages/ListPage.module.css
 create mode 100644 src/pages/ListPage.tsx
 create mode 100644 src/pages/NotFoundPage.module.css
 create mode 100644 src/pages/NotFoundPage.tsx
 create mode 100644 src/types.ts
 create mode 100644 tsconfig.app.json
 create mode 100644 tsconfig.json
 create mode 100644 tsconfig.node.json
 create mode 100644 vite.config.ts
PS D:\北美sde项目\cs409\mp2> git branch -M main
PS D:\北美sde项目\cs409\mp2> git push origin main
Enumerating objects: 35, done.
Counting objects: 100% (35/35), done.
Delta compression using up to 20 threads
Compressing objects: 100% (33/33), done.
Writing objects: 100% (34/34), 26.40 KiB | 1.76 MiB/s, done.
Total 34 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), done.
To https://github.com/XST3108/mp2.git
   af653fb..65bdd85  main -> main
PS D:\北美sde项目\cs409\mp2>你看下ok吗

### 🤖 Claude

推送成功了。那些 `LF will be replaced by CRLF` 只是 Windows 换行符的提示，不是错误，可以忽略。我看一下部署情况。

> 🔧 *Bash*: Check GitHub Actions deploy status and live site

### 🤖 Claude

部署正在进行中（第一次那个失败是模板自带的初始提交，当时还没有代码，属于正常情况）。我等它跑完。

> 🔧 *ToolSearch*: select:Monitor

> 🔧 *Bash*: Wait for deploy to finish, then check live site

### 🤖 Claude

部署成功了。详情页网址返回 404 状态码是预期内的：GitHub Pages 会用我们生成的 `404.html` 来加载应用。我在浏览器里实际打开确认一下。

> 🔧 *mcp__Claude_Browser__browser_batch*

### 🤖 Claude

全部没问题，你的网站已经上线了：**https://xst3108.github.io/mp2/**

我在浏览器里实际打开检查过：

| 检查项 | 结果 |
|---|---|
| GitHub Actions 部署 | ✅ 成功 |
| 首页（List） | ✅ 正常打开 |
| 画廊页 | ✅ 790 道菜，Category 和 Cuisine 两组筛选都在 |
| 直接打开详情页网址 `/mp2/meal/52772` | ✅ 显示 Teriyaki Chicken Casserole，上一个 / 下一个也在 |
| 右上角导航 | ✅ 显示 **List** 和 **Gallery** |

截图里有些图片是灰色的，那是图片还在加载（滚动到附近才会加载），不是坏图。

---

## 还剩下这些

1. **录视频**（3 分钟以内），**一定要用上面这个线上网址**，开头先给地址栏一个镜头。按之前给你的脚本走就行。
2. 视频上传到 **Google Drive**，共享给 `uiuc.web.programming@gmail.com`（权限选"查看者"即可）
3. 填写[提交表单](https://forms.gle/PkYq9RaMFG8MaMjF7)，附上：
   - 视频共享链接
   - GitHub 仓库地址：https://github.com/XST3108/mp2
   - 网站地址：https://xst3108.github.io/mp2/
   - **参考来源声明**（包括使用了 AI，以及 TheMealDB、React Router、Axios 的文档）

以后再改代码，只要 `git add .`、`git commit -m "..."`、`git push` 三步，网站约 1 分钟后会自动更新。

---

## 🧑 User

https://xst3108.github.io/mp2/ 这个我也没印象设置过这个网页啊，就是给push之后就自动弄成这个网页了吗难道

### 🤖 Claude

对，就是 push 之后自动生成的。不过其实你**已经设置过**了，只是当时没意识到。这个网页是下面三样东西配合出来的：

## 1. 课程模板里自带了"自动部署脚本"

你用课程模板创建仓库时，里面就带了一个文件 `.github/workflows/deploy.yml`。这就是为什么之前一再强调**不要删 `.github` 文件夹**。

这个文件的意思是：**每次往 main 分支 push 代码，GitHub 就自动执行以下步骤**：

1. 在 GitHub 的服务器上下载你的代码
2. 安装依赖（`npm ci`）
3. 打包成网页（`npm run build`，生成 `dist` 文件夹）
4. 把 `dist` 发布成网站

## 2. 你在 Settings 里打开了这个功能

前面第 7 步，你在 **Settings → Pages → Source** 里选了 **GitHub Actions**。这一步就是告诉 GitHub："用上面那个脚本来发布我的网站。"

## 3. 网址是 GitHub 固定的格式

GitHub Pages 的网址规则是固定的，不用你自己设置：

```
https://你的用户名.github.io/仓库名/
```

你的用户名是 `XST3108`（网址里会自动变成小写），仓库名是 `mp2`，所以就是 `https://xst3108.github.io/mp2/`。

这也是为什么代码里要设置 `base: '/mp2/'`：网站不在根目录，而是在 `/mp2/` 这个子路径下，不设置的话页面会找不到 JS 和 CSS 文件，直接白屏。

---

## 整个流程

```
你在电脑上 git push
        ↓
GitHub 收到代码，自动运行 deploy.yml
        ↓
在 GitHub 服务器上安装依赖、打包
        ↓
发布到 https://xst3108.github.io/mp2/
```

你可以打开 https://github.com/XST3108/mp2/actions 看看，每次 push 都会在这里多一条记录，绿色 ✅ 表示部署成功。

所以以后改了代码，只要 push，网站大约 1 分钟后就会自动更新。

---

## 🧑 User

怎么加入Large Language Model (LLM) Usage 啊

> 🔧 *Bash*: Search README for LLM usage section

> 🔧 *ToolSearch*: select:mcp__ccd_session_mgmt__export_transcript
