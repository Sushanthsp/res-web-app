import { createWebHistory, createRouter } from "vue-router";
import HomeC from "../components/Home.vue";
import AboutC from "../components/About.vue";
import AddRes from "../components/Add.vue";
import UpdateRes from "../components/Update.vue";
import SignUp from "../components/SignUp.vue";
import LoginPage from "../components/Login.vue";
import DummyC from "../components/Dummy.vue";
 
const routes = [
  {
    path: "/",
    name :"HomeC",
    component:  HomeC
  },
  {
    path: "/dummy", 
    name :"DummyC",
    component:  DummyC
  },
  {
    path: "/about",
    name :"AboutC",
    component:  AboutC
  },
  {
    Path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    Path: "/login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    Path: "/add",
    name: "AddRes",
    component: AddRes
  },
  {
    Path: "/update/:id",
    name: "UpdateRes",
    component: UpdateRes
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active'
});

export default router;
