# FocusSprint Frontend

A modern and responsive frontend for **FocusSprint**, a task management application built with **Angular**, **TypeScript**, and **Bootstrap**. This application provides a seamless user experience with secure **JWT Authentication**, intuitive task management, and full integration with the FocusSprint RESTful API.

## ⚡ Quick Start (5 Minutes)

```bash
# 1. Clone repository
git clone https://github.com/rahman-03/focussprint-angular.git
cd focussprint-angular

# 2. Install dependencies
npm install

# 3. Start dev server
npm start

# 4. Open browser
# http://localhost:4200
```

---

## 🚀 Features

- User authentication (integrates with backend JWT auth)
- Register / Login / Logout flows
- Todo CRUD (create, read, update, delete)
- Admin user management pages
- Responsive UI with Bootstrap
- Client-side route protection with guards
- HTTP interceptors for auth and loading state
- Cookie helpers and token handling

---

## 🛠️ Tech Stack

- Angular 19
- TypeScript
- Bootstrap 5
- RxJS
- `jwt-decode`, `ngx-cookie-service`
- Angular CLI

---

## 📂 Project Structure

```
focussprint-frontend/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   ├── home/
│   │   │   ├── loader/
│   │   │   ├── login/
│   │   │   ├── navbar/
│   │   │   ├── page-not-found/
│   │   │   ├── register/
│   │   │   ├── todo/
│   │   │   └── user/
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── services/
│   │   └── app.component.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── main.ts
├── public/
├── angular.json
├── package.json
└── netlify.toml
```

---

## ⚙️ Installation

### Prerequisites

- Node.js (recommend Node 18+)
- npm (comes with Node.js)

### 1. Clone the repository

```bash
git clone https://github.com/rahman-03/focussprint-angular.git
cd focussprint-angular
```

### 2. Install dependencies

```bash
npm install
```

---

## 🔧 Environment & Configuration

- Frontend environment files live in `src/environments/`.
- Typical variables to configure in `environment.ts` / `environment.prod.ts`:
  - `apiUrl` — backend API base URL (e.g. `http://localhost:8000`)
  - `frontendUrl` — the app origin (e.g. `http://localhost:4200`)

Example `src/environments/environment.ts` entry:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000',
  frontendUrl: 'http://localhost:4200'
};
```

**Security tip:** do not place secrets (API keys, private tokens) in client-side code.

---

## ▶️ Run the Application

### Development server

```bash
npm start
# or
ng serve
```

App runs at `http://localhost:4200` by default.

### Build (production)

```bash
npm run build
```

Build artifacts are placed in `dist/focussprint-frontend` (see `angular.json`).

### Watch (incremental builds)

```bash
npm run watch
```

### Tests

```bash
npm test
```

---

## 🚀 Deployment (Netlify)

This repository includes `netlify.toml` to serve `index.html` for SPA routing.

1. Build the app: `npm run build`
2. In Netlify, set **Build command** to `npm run build`
3. Set **Publish directory** to `dist/focussprint-frontend`

---

## 🧰 Scripts

Defined in `package.json`:
- `npm start` — `ng serve`
- `npm run build` — `ng build`
- `npm run watch` — `ng build --watch --configuration development`
- `npm test` — run unit tests

---

## 🚨 Troubleshooting

### Port 4200 Already in Use

**Windows (PowerShell):**
```powershell
# Find process using port 4200
Get-NetTCPConnection -LocalPort 4200

# Kill process by PID
Stop-Process -Id <PID> -Force

# Or run on different port
ng serve --port 4300
```

### Backend CORS / Auth Issues

- Ensure backend has CORS allowed for `frontendUrl`.
- Verify `apiUrl` in `src/environments` matches backend URL.

### Build Fails / Missing Module

```bash
# Reinstall deps
npm ci

# Clear Angular cache
ng cache clean
```

---

## ✅ Security Notes

- Prefer storing refresh tokens in secure httpOnly cookies served by backend.
- Avoid storing sensitive tokens in `localStorage`.
- Use production build optimizations and serve assets over HTTPS.

---

## 🎯 Roadmap & Enhancements

### Short Term (v1.1)
- [ ] Email verification on signup
- [ ] Password reset functionality
- [ ] Task categories and tags
- [ ] Due dates and reminders

### Medium Term (v1.2)
- [ ] Subtasks support
- [ ] Task sharing with other users
- [ ] Task comments and discussions

### Long Term (v2.0)
- [ ] Real-time notifications
- [ ] Two-Factor Authentication (2FA)
- [ ] User profiles with avatars
- [ ] Task templates
- [ ] Activity logs
- [ ] Analytics & productivity dashboard
- [ ] Time tracking on tasks
- [ ] Recurring tasks
- [ ] Calendar view
- [ ] API integrations (Slack, Google Calendar)
- [ ] Docker containerization
- [ ] CI/CD Pipeline
---

## 🤝 Contributing

Follow the same process as other repo READMEs:

1. Fork the repo
2. Create a branch `feature/your-feature`
3. Commit & push
4. Open a PR with description and screenshots

Commit message examples:
```
feat: add task filters
fix: resolve todo save issue
docs: update README
```

---

## 🌐 Related Projects

- Backend (FastAPI): https://github.com/rahman-03/focussprint-fastapi

---

## 📄 License

This project is licensed under the **MIT License** — add a `LICENSE` file to make it explicit.

---

## 👨‍💻 Author

**Abdul Rahman M**

- GitHub: https://github.com/rahman-03
- LinkedIn: https://www.linkedin.com/in/abdul-rahman-m-660158206

---

## 📞 Support

For issues, questions, or suggestions:
- Open GitHub Issue: https://github.com/rahman-03/focussprint-angular/issues
- Email: indmabdulrahman@gmail.com

**Happy coding! 🚀**