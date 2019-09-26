import LoginPage from "./pages/public/login/LoginPage";
import HomePage from "./pages/private/home/HomePage";

export default [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage },
    { path: '/home', component: HomePage }
]