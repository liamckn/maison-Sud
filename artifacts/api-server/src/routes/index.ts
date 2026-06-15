import { Router, type IRouter } from "express";
import healthRouter from "./health";
import stripeRouter from "./stripe";
import newsletterRouter from "./newsletter";
import chatRouter from "./chat";

const router: IRouter = Router();

router.use(healthRouter);
router.use(stripeRouter);
router.use(newsletterRouter);
router.use(chatRouter);

export default router;
