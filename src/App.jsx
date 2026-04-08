import { useState } from "react";

function App() {
  const produtos = [
    {
      id: 1,
      nome: "Plano Básico",
      descricao: "Ideal para fluxos simples e automações menores.",
      preco: 99.9,
      imagem: "/plano1.jpg",
    },
    {
      id: 2,
      nome: "Plano Pro",
      descricao: "Pensado para integrações maiores entre sistemas.",
      preco: 199.9,
      imagem: "/plano2.jpg",
    },
    {
      id: 3,
      nome: "API Connect",
      descricao: "Conector voltado para consumo e envio de APIs REST.",
      preco: 149.9,
      imagem: "/plano3.jpg",
    },
    {
      id: 4,
      nome: "Data Flow",
      descricao: "Organização visual de entrada, transformação e saída.",
      preco: 129.9,
      imagem: "/plano4.jpg",
    },
  ];

  const [carrinho, setCarrinho] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function adicionarAoCarrinho(produto) {
    setCarrinho([...carrinho, produto]);
  }

  function removerDoCarrinho(indice) {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(indice, 1);
    setCarrinho(novoCarrinho);
  }

  function enviarFormulario(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso.");
    setNome("");
    setEmail("");
    setMensagem("");
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <div>
      <header className="topo">
        <div className="logo">
          <span>ALON</span>AVALIAÇÃO
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
          <a href="#produtos">Planos</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="escuro"></div>

        <div className="hero-texto">
          <h1>CONECTE SISTEMAS. AUTOMATIZE PROCESSOS.</h1>
          <p>
           Uma plataforma para integrar banco de dados, APIs e transformar dados de forma inteligente e escalável.
          </p>
          <a href="#produtos" className="botao-amarelo">
            Veja nossos planos
          </a>
        </div>
      </section>

      <section className="menu-planos">
        <h2>Nossos recursos</h2>

        <div className="cards-recursos">
          <div className="card-recurso" style={{ backgroundImage: "url('/fluxos.png')" }}>
            <div className="faixa">Fluxos</div>
          </div>

          <div className="card-recurso" style={{ backgroundImage: "url('/API.png')" }}>
            <div className="faixa">APIs</div>
          </div>

          <div className="card-recurso" style={{ backgroundImage: "url('/validaçao.jpg')" }}>
            <div className="faixa">Validação</div>
          </div>

          <div className="card-recurso" style={{ backgroundImage: "url('/tecnologia.png')" }}>
            <div className="faixa">Logs</div>
          </div>

          <div className="card-recurso" style={{ backgroundImage: "url('/bancocerto.jpg')" }}>
            <div className="faixa">Banco</div>
          </div>

          <div className="card-recurso" style={{ backgroundImage: "url('/dashboard.png')" }}>
            <div className="faixa">Dashboard</div>
          </div>
        </div>
      </section>

      <section className="segundo-banner">
        <div className="escuro"></div>

        <div className="segundo-texto">
          <h2>Mais controle sobre seus dados</h2>
          <p>
            Centralize informações, automatize tarefas e acompanhe processos de
            integração com mais clareza.
          </p>
          <a href="#sobre" className="botao-amarelo">
            Saiba mais
          </a>
        </div>
      </section>

      <section id="produtos" className="mais-vendidos">
        <h2>Planos em destaque</h2>

        <div className="grid-produtos">
          {produtos.map((produto) => (
            <div
              className="produto-card"
              key={produto.id}
              style={{ backgroundImage: `url(${produto.imagem})` }}
            >
              <div className="produto-camada">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <span>R$ {produto.preco.toFixed(2)}</span>
                <button onClick={() => adicionarAoCarrinho(produto)}>
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="carrinho">
        <h2>Carrinho</h2>

        {carrinho.length === 0 ? (
          <p className="vazio">Seu carrinho está vazio.</p>
        ) : (
          <div className="lista-carrinho">
            {carrinho.map((item, indice) => (
              <div className="item-carrinho" key={indice}>
                <div>
                  <strong>{item.nome}</strong>
                  <p>R$ {item.preco.toFixed(2)}</p>
                </div>

                <button onClick={() => removerDoCarrinho(indice)}>
                  Remover
                </button>
              </div>
            ))}

            <h3 className="total">Total: R$ {total.toFixed(2)}</h3>
          </div>
        )}
      </section>

      <section id="sobre" className="sobre">
        <h2>Sobre</h2>

        <div className="sobre-conteudo">
          <p>
           A ideia dessa plataforma é facilitar a forma como diferentes sistemas se conectam, organizando dados e reduzindo processos manuais.
          </p>

          <p>
          A ideia dessa plataforma é facilitar a forma como diferentes sistemas se conectam, organizando dados e reduzindo processos manuais.
          </p>
        </div>
      </section>

      <section id="contato" className="contato">
        <h2>Fazer contato</h2>

        <form className="formulario" onSubmit={enviarFormulario}>
          <label>Nome</label>
          <input
            type="text"
            placeholder="Coloque seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <label>E-mail</label>
          <input
            type="email"
            placeholder="Coloque um email válido"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mensagem</label>
          <textarea
            placeholder="Digite sua mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>

          <button type="submit" className="enviar">
            Enviar
          </button>
        </form>
      </section>

      <footer className="rodape">
        <h2>CONTATOS</h2>

        <div className="rodape-grid">
          <div>
            <h3>Localização</h3>
            <p>Niterói - RJ</p>
          </div>

          <div>
            <h3>Telefone</h3>
            <p>(21) 99999-9999</p>
          </div>

          <div>
            <h3>Email</h3>
            <p>primeconnect@email.com</p>
          </div>
        </div>

        <p className="copy">© 2026 Projeto desenvolvido em React</p>
      </footer>
    </div>
  );
}

export default App;