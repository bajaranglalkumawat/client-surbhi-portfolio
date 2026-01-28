import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { testConnection } from "./db";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Test database connection on startup
  testConnection();

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Health check endpoint
  app.get("/api/health", async (_req, res) => {
    const isConnected = await testConnection();
    res.status(isConnected ? 200 : 500).json({
      status: isConnected ? "healthy" : "unhealthy",
      database: isConnected ? "connected" : "disconnected",
    });
  });

  return app;
}
