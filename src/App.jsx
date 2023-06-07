import './App.css'
import Avatar from './assets/avatar.png'

function App() {



  return (
      <div id="container">
        
        <div id="profile">
          <img src={Avatar} alt="Avatar"></img>
          <p>@queiroz.dll</p>
        </div>

        <div id="switch">
          <button></button>
          <span></span>
        </div>

        <ul>
          <li>
            <a href="#">Inscrever-se no NLW</a>
          </li>

          <li>
            <a href="#">Baixar meu e-book</a>
          </li>

          <li>
            <a href="https://www.github.com/queiroz1">Veja meu portifolio</a>
          </li>
          
          <li>
            <a href="https://www.google.com" target='_blank'>Conheca o google</a>
          </li>
        </ul>

        <div id="social-links">
          <a href="https://www.facebook.com/queiroz.dll" target='_blank'>
            F
          </a>

          <a href="https://www.instagram.com/queiroz.dll/" target='_blank'>
            I
          </a>

          <a href="https://www.linkedin.com/in/queiroz-dll/" target='_blank'>
            L
          </a>

          <a href="https://github.com/queiroz1" target='_blank'>
            G
          </a>
        </div>

        <footer>
        Feito com ♥ por &#64;queiroz.dll
      </footer>
      </div>
  )
}

export default App
