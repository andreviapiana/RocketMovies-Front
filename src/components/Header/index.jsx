import { Container, Profile, Logo, Search } from "./styles";
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';

export function Header() {
    return (
        <Container>
            
            <Logo>
                <div>
                    <h1>RocketMovies</h1>
                </div>
            </Logo>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Profile>
                <div>
                    <strong>André Viapiana</strong>
                    <span>sair</span>
                </div>

                <img src="https://github.com/andreviapiana.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    );
}
