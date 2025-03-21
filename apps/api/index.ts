import express from "express"
import { authMiddleware } from "./middleware";
import { prismaClient } from "db";

const app = express()

app.post("/api/v1/webiste", authMiddleware, (req, res) => {
  const userId = req.userId;
  prismaClient.user.create({})
})

app.get("/api/website/status",authMiddleware,(req,res)=>{})

app.get("/api/v1/websites",authMiddleware,(req,res)=>{})

app.delete("/api/v1/webiste",authMiddleware,(req,res)=>{})

app.listen(3000)

