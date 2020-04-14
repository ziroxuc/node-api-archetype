import { Router } from 'express'

// Rutas
import ExampleRoutes from './example.routes'

const router = Router();
const exampleRoutes = new ExampleRoutes();

router.use(exampleRoutes.routes());

export default router;