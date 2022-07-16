import Logo from "../../assets/images/Ignite.svg";
import { Container, SearchBar } from "./style";

export function Home() {
  return (
    <Container>
      <header>
        <img src={Logo} />
      </header>

      <SearchBar>
        <input />
        <button>
          Criar
          <img />
        </button>
      </SearchBar>

      <div>
        <div>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>

        <div>
          <p>Concluídas</p>
          <span>0</span>
        </div>

        <hr />

        <div>
          <img />
          <h3>Você ainda não tem tarefas adicionadas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </Container>
  );
}
