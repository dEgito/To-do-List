import Logo from "../../assets/images/Ignite.svg";
import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <header>
        <img src={Logo} />
      </header>

      <div>
        <input />
        <button>
          Criar
          <img />
        </button>
      </div>

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
