import Article from "./components/Article.vue";
import Home from "./components/Home.vue";

export const routes = [
    { path: "/", component: Home },
    { path: "/article/:id", component: Article },
];
