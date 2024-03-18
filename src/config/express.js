import router from '#Routes/user.router.js';
import express from 'express'

const App=express();

App.use(express.json());
App.use(express.urlencoded({extended:true}))
App.use('/api', router)

export default express;
