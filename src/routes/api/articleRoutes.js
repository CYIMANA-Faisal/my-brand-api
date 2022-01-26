import express from 'express'
import { ArticleController } from './../../controllers/articleController.js'
const route = express.Router()
const articleControllers = new ArticleController()
route.post('/', articleControllers.createArticle)
route.get('/', articleControllers.getAllArticles)
route.get('/:id', articleControllers.getArticle)

export default route