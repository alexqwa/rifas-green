import { Provider } from "urql"
import { client } from "./lib/urql"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home"
import { Help } from "./pages/help/Help"
import { SignIn } from "./pages/app/SignIn"
import { SignUp } from "./pages/app/SignUp"
import { Raffles } from "./pages/Raffles"
import { Profile } from "./pages/Profile"
import { Dashboard } from "./pages/Dashboard"
import { AboutRaffles } from "./pages/AboutRaffles"

import { AuthContextProvider } from "./contexts/AuthContext"

function App() {
  return (
    <Provider value={client}>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/me/raffles" element={<Raffles />} />
            <Route
              path="/dashboard/me/raffles/:id"
              element={<AboutRaffles />}
            />
            <Route path="/dashboard/me/:id" element={<Profile />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
