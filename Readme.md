# 🔐 React Authentication 

A modern React authentication application featuring **Login, Signup, and Forgot Password flows**, built using **React Router DOM**, **Framer Motion**, and **React Icons**.

---
# Pookie_Auth_Suite

A **Pookie_Auth_Suite is a secure and developer-friendly authentication system designed to keep user access smooth without compromising safety. It handles login, signup, role-based access, and session security seamlessly, so builders can focus on features—not auth headaches**


## 📦 Dependencies Installation (Required)

Before running the project, install the following dependencies:

### ▶ React Router DOM  
Used for client-side routing and navigation.

```bash
npm install react-router-dom


```
### Framer Motion
``` bash
npm install framer-motion
```
### React Icons

```bash
npm install react-icons
```

## ✨ Features

- User Signup
- Login (route ready)
- Forgot Password (route ready)
- Client-side routing with React Router
- Smooth animations using Framer Motion
- Scalable SVG icons with React Icons
- Clean and modular component structure

---

## 🛠 Tech Stack


- React
- React Router DOM
- Framer Motion
- React Icons
- Vite / CRA (based on your setup)

---

## 🔗 Application Routing Structure

The application routing is defined as follows:

```jsx
import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/SignUp"
import SiginIn from "./pages/SiginIn"
import ForgotPassword from "./pages/ForgotPassword"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/PUI/login" element={<SiginIn />}/>
        <Route path="/PUI/login/forgot-credentials" element={<ForgotPassword />}/>
      </Routes>
    </div>
  )
}

export default App



```