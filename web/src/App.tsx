import { Provider } from "urql"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import { Home } from "./pages/Home"
import { Help } from "./pages/Help"

import { Account } from "./pages/Dashboard/Account"

// Section: App Login and Register
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"

// Section: Dashboard
import { Create } from "./pages/Dashboard/Create"
import { Raffles } from "./pages/Dashboard/Raffles"

import { AuthContextProvider } from "./contexts/AuthContext"
import { client } from "./lib/urql"

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
            <Route path="/raffles" element={<Raffles />} />
            <Route path="/raffles/create" element={<Create />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
