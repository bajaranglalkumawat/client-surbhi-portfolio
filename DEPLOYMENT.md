# Render Deployment Guide

## Setup Steps

### 1. Push to GitHub
Make sure your code is pushed to GitHub (main branch)

```bash
git add .
git commit -m "Add MySQL setup and Render configuration"
git push origin main
```

### 2. Connect GitHub to Render
1. Go to [render.com](https://render.com)
2. Sign up or log in
3. Click "New +" and select "Web Service"
4. Connect your GitHub repository
5. Select the repository and main branch
6. Render will auto-detect the `render.yaml` config

### 3. Configuration Details
Your `render.yaml` automatically sets up:

- **Web Service**: Node.js server on free tier
- **MySQL Database**: Linked MySQL instance
- **Build Command**: `npm ci && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**: Auto-linked from database service

### 4. Verify Deployment
After deployment completes:

```
Check health: https://your-app-name.onrender.com/api/health
Check ping: https://your-app-name.onrender.com/api/ping
```

### 5. Manual Environment Variables (if needed)
If `render.yaml` doesn't auto-link database variables, manually add in Render Dashboard:

| Key | Value |
|-----|-------|
| DB_HOST | From MySQL service |
| DB_USER | From MySQL service |
| DB_PASSWORD | From MySQL service |
| DB_NAME | surbhi_portfolio |

### 6. MySQL Database Setup
After MySQL service is created:
1. Go to MySQL service in Render Dashboard
2. Copy connection details
3. Connect and create your database schema
4. Render will automatically provide DB_HOST, DB_USER, DB_PASSWORD

### Important Notes
- Free tier MySQL has storage/compute limits
- Free tier web service may sleep after 15 mins inactivity
- To prevent sleeping, upgrade to paid tier or use Render Cron Job
- Ensure .env file is in .gitignore (don't commit secrets)

## Troubleshooting

### Health check fails
1. Check database status in Render Dashboard
2. Verify environment variables are set
3. Check logs: Render Dashboard → Logs tab

### Connection refused
- MySQL service may not be fully initialized (can take 2-3 mins)
- Wait and redeploy or restart the service

### Build fails
1. Check build logs in Render Dashboard
2. Ensure all dependencies are in package.json
3. Run `npm install` locally to verify
