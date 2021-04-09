import App from "./App";
import User from "./components/User/User";
import Home from "./components/Home/Home";
import ArticleDetail from "./components/Common/ArticleDetail/ArticleDetail";

const routes = [
  {
    path: '/',
    component: App,
    exact: true,
    children: [
      {
        path: '/home',
        component: Home,
        children: [
          {
            path: '/home/detail',
            component: ArticleDetail
          }
        ]
      },
      {
        path: '/user',
        component: User
      }
    ]
  }
];

export {routes}
