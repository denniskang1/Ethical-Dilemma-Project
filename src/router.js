import Vue from 'vue'
import VueRouter from 'vue-router'
import Quiz from "./components/Quiz"
import OfferDilemma from "./components/OfferDilemma"
import EvalDilemma from "./components/EvalDilemma"
import Lobby from "./components/Lobby"

Vue.use(VueRouter)

const routes = [
    {path:'/Quiz', component:Quiz},
    {path:'/OfferDilemma', component:OfferDilemma},
    {path:'/EvalDilemma', component:EvalDilemma},
    {path:'/Lobby', component:Lobby}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;