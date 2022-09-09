import { Container, Form } from "./styles.js";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { RiArrowLeftLine } from 'react-icons/ri';
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function New() {
  
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={RiArrowLeftLine}/>
            <h1>Novo filme</h1>
          </header>

          <div class="title">
            <Input placeholder="Título"/>
            <Input placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <Textarea placeholder="Observações"/>

          <Section  title="Marcadores">
            <div className="tags">
              <NoteItem value="Ficção Científica" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div class="buttons">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}