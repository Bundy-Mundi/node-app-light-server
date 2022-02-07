import express from "express";
const router = express.Router();

router.get("/auth", () => {
    console.log("/api/auth");
});

export default router;

