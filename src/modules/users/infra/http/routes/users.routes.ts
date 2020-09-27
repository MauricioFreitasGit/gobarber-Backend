import { Router } from 'express';
import multer from 'multer';
import UploadConfig from '@config/upload';

import UsersController from '../controllers/UsersControllers';
import UsersAvatarController from '../controllers/UserAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userAvatarController = new UsersAvatarController();
const upload = multer(UploadConfig);
usersRouter.post('/', usersController.create);

usersRouter.patch(
    '/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    userAvatarController.update,
);
export default usersRouter;
