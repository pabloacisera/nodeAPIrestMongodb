import {createServer} from 'http'
import express from './express.js'

const httpServer = createServer(express)

export default httpServer;