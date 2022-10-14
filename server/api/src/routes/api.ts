import { Router } from 'express';

import * as  TarefaController from  '../controllers/tarefaController';

const router = Router();

router.get('/todo', TarefaController.all);
router.post('/todo', TarefaController.add);
router.put('/todo/:id', TarefaController.update);
router.delete('/todo/:id', TarefaController.remove);

export default router;