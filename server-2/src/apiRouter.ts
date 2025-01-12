import { RequestWithUserInfo } from './types';
import { Router } from 'express';
import fs from 'fs';

import { auth, user } from './controllers';
import { changeAvatar } from './controllers/file';

// export const uploadImage = uploads.fields([{ name: 'image-file', maxCount: 1 }]);
const apiRouter = (): Router => {

  const router = Router();

  router.post('/login', auth.login);
  router.post('/logout', auth.logout);
  router.post('/changeAvatar', changeAvatar);

  router.post('/resend_verification_email', auth.sendVerificationEmail);

  router.get('/me', user.me);

  return router;
};

export default apiRouter;
