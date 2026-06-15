import { Router, type IRouter } from "express";
import healthRouter from "./health";
import stripeRouter from "./stripe";
import newsletterRouter from "./newsletter";

const router: IRouter = Router();

router.use(healthRouter);
router.use(stripeRouter);
router.use(newsletterRouter);

export default router;
