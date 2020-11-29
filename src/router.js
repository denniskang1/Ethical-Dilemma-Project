import {createRouter, createWebHistory} from "vue-router"
import Quiz from "./components/Quiz"
import OfferDilemma from "./components/OfferDilemma"
import EvalDilemma from "./components/EvalDilemma"
import Lobby from "./components/Lobby"

const routes = [
    {path:'/Quiz', component:Quiz},
    {path:'/OfferDilemma', component:OfferDilemma},
    {path:'/EvalDilemma', component:EvalDilemma},
    {path:'/Lobby', component:Lobby}
]

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;