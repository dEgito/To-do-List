import Logo from "../../assets/images/Ignite.svg";
import { Container, SearchBar, Section, Progress, Content } from "./style";
import { PlusCircle, ClipboardText } from "phosphor-react";

export function Home() {
  return (
    <Container>
      <header>
        <img src={Logo} alt="logo rocketseat"/>
      </header>

      <SearchBar>
        <textarea>Adicione uma nova tarefa</textarea>
        <button>
          Criar
          <PlusCircle size={20}/>
        </button>
      </SearchBar>

      <Section>
        <Progress>
          <div>
            <p task="to-do">Tarefas criadas</p>
            <span>0</span>
          </div>

          <div>
            <p task="done">Concluídas</p>
            <span>0</span>
          </div>
        </Progress>

        <Content>
          <ClipboardText size={64}/>
          <h3>Você ainda não tem tarefas adicionadas</h3>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </Content>
      </Section>
    </Container>
  );
}
