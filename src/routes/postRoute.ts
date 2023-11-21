import { Router } from 'express';
import * as postController from '../controller/postController';

const router: Router = Router()

router.post('/', postController.createNewPost)
router.get('/', postController.fetchAllPosts)
router.patch('/', postController.updatePost)
router.delete('/', postController.deletePost)

export default router
