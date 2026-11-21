
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="study-page">
      <nav className="navbar">
        <h2>🎓 StudySphere</h2>
        <Link to="/dashboard">
          <button>Кіру</button>
        </Link>
      </nav>

      <main className="hero">
        <p className="subtitle">SMART STUDENT PLATFORM</p>
        <h1>StudySphere</h1>
        <h2>Оқу үлгеріміңді жаңа деңгейге көтер!</h2>
        <p>
          Бағаларыңды бақыла, GPA есепте,
          тапсырмаларыңды жоспарла және
          оқу нәтижелеріңді талда.
        </p>
        <Link to="/dashboard">
          <button className="start-btn">Бастау →</button>
        </Link>
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="dashboard">
      <nav className="navbar">
        <h2>🎓 StudySphere</h2>
        <Link to="/">
          <button>Басты бет</button>
        </Link>
      </nav>

      <main className="dashboard-content">
        <h1>Студенттің жеке кабинеті</h1>
        <p>StudySphere платформасына қош келдің!</p>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h2>📊 GPA</h2>
            <p>Орташа академиялық көрсеткіш</p>
            <h3>3.75</h3>
          </div>

          <div className="dashboard-card">
            <h2>📚 Пәндер</h2>
            <p>Оқып жатқан пәндер саны</p>
            <h3>6</h3>
          </div>

          <div className="dashboard-card">
            <h2>📝 Тапсырмалар</h2>
            <p>Орындалуы тиіс тапсырмалар</p>
            <h3>4</h3>
          </div>

          <div className="dashboard-card">
            <h2>🎯 Үлгерім</h2>
            <p>Жалпы оқу нәтижесі</p>
            <h3>92%</h3>
          </div>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

