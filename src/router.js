import {createRouter, createWebHistory} from "vue-router"
import Quiz from "./components/Quiz"
import OfferDilemma from "./components/OfferDilemma"
import EvalDilemma from "./components/EvalDilemma"

const routes = [
    {path:'/Quiz', component:Quiz},
    {path:'/OfferDilemma', component:OfferDilemma},
    {path:'/EvalDilemma', component:EvalDilemma}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;