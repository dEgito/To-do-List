import { ReactComponent as Logo } from '../../assets/images/Ignite.svg';
import {
  Container,
  SearchBar,
  Section,
  Progress,
  Content,
  Task,
} from "./style";
import { PlusCircle, ClipboardText, Trash } from "phosphor-react";

export function Home() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="logo rocketseat" />
      </header>

      <SearchBar>
        <textarea>Adicione uma nova tarefa</textarea>
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </SearchBar>

      <Section>
        <Progress>
          <div>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>

          <div>
            <p>Concluídas</p>
            <span>0</span>
          </div>
        </Progress>

        <Content>
          <ul>
            <Task>
              <div>
                <label>
                  <input type="checkbox" readOnly />
                  <span></span>
                </label>
                <p> TESTANDOOOOOO CARALHO DE ASA ALADO</p>
              </div>

              <button>
                <Trash size={18} />
              </button>
            </Task>
          </ul>

          {/* <ClipboardText size={64}/>
          <h3>Você ainda não tem tarefas adicionadas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p> */}
        </Content>
      </Section>
    </Container>
  );
}
