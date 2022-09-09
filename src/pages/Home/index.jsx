import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from "../../components/Button";
import { FiPlus } from "react-icons/fi";
import { MovieCard } from '../../components/MovieCard';

export function Home() {
    return (
        <Container>

            <Header />

            <main>
              <Content>
                <div className="header">
                  <h1>Meus filmes</h1>
                  <Button icon={FiPlus} title="Adicionar filme" />
                </div>

                <div className="movies">
                  <MovieCard />
                </div>

                <div className="movies">
                  <MovieCard />
                </div>

                <div className="movies">
                  <MovieCard />
                </div>

              </Content>
            </main>

        </Container>
    );
}
