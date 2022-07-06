import Titulo from './Titulo'
import Imagem from './Imagem'
import Texto from './Texto'
import Gifs from './Gifs'
import Footer from './Footer'
import Cabecalho from './Cabecalho'
import Resumo from './Resumo'
import './App.css'

function App() {
 
  return (
  <> 
  <header>
  <Cabecalho>Meu diário na Reprograma</Cabecalho>
  </header>
  <nav className="navbar">
    <Imagem image="https://media.giphy.com/media/FHE2M6TJgsWNxSUMlj/giphy.gif" alt="imagem da desenvolvedora do site, Gabriella Ribeiro" />
    <Titulo title="Olá, Bem vindo(a) ao meu Diário" />
  </nav>  
  <section>
    <Resumo>Me chamo Gabriella Ribeiro, Tenho 23 anos, esse é meu primeiro projeto em React, estou bem feliz por isso, futuro desenvolvedora Front-End e apaixonada pela tecnologia.
      . </Resumo>
    <hr/>
  </section>
  <article>
      <Titulo title="As 5 coisas que aprendi na Reprograma:" />    
    <div className="container">
      < Titulo title="HTML" />
      < Gifs image="https://media.giphy.com/media/kQxf9vdbSg6DS/giphy.gif" alt="Gif Justin"/>
      <Texto>  <b>HTML</b> é uma linguagem de marcação utilizada na construção de páginas na Web.
      Achei bem empolgante mexer com o HTML, Ja me sentia uma programadora quando mexi pela primeira vez rs.       
      </Texto>
    </div>
    <div className="container">
      < Titulo title="CSS" />
      < Gifs image="https://media.giphy.com/media/ZP11h5WlnR0eFWHk53/giphy.gif" alt="Gif Beleza" />
      <Texto> <b>CSS</b> é um mecanismo de dar, estilo, cores, fontes, espaçamento, para uma página Web. Adoro decoração, então quando vi o CSS pela primeira vez, amei na hora, super me identifiquei.</Texto>
    </div>
    <div className="container">
      < Titulo title="Git" />
      < Gifs image="https://media.giphy.com/media/WRQBXSCnEFJIuxktnw/giphy.gif" alt="Gif Nazare"/>
      <Texto>Meu primeiro contato com o <b>Git </b> foi na segunda semana de aula do curso, de inicio achei que fosse um bicho de sete cabeças, mas com as semanas colocando em pratica, fui me familiarizando mais e hoje consigo usar normalmente.</Texto>
    </div>
    <div className="container">
      < Titulo title="JavaScript" />
      < Gifs image="https://media.giphy.com/media/ICfEwJthOkWpGCbaTI/giphy.gif" alt="Gif Nazare" />
      <Texto>Meu primeiro contato com o <b>JavaScript</b> eu simplesmente não entedi nada, fiquei bem assustada, mas limpei as lagrimas e respirei fundo e comecei navamente com calma, ainda não sei mexer muito bem, mas com muita dedicação e estudo, sei que chegarei lá.  </Texto>
    </div>
    <div className="container">
      < Titulo title="React" />
      < Gifs image="https://media.giphy.com/media/h85NkRhu3Sgdq/giphy.gif" alt="Gif Justin Bieber" />
      <Texto>Meu primeiro contato com o <b>React</b> eu até voltei acreditar que conseguiria mandar bem na programação, comecei a me achar novamente haha.  </Texto>
    </div>
  </article>
  <footer>
  <Footer> Feito por Gabriella Ribeiro | Turma On17 | 2022</Footer>
  </footer>
  </>
  )
}

export default App
