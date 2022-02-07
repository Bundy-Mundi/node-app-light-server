import express from "express";
const router = express.Router();

router.get("/auth", () => {
    return res.send("/api/v1/auth")
});

export default router;

