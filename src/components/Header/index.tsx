import * as C from './styles';
import logo from '../../assets/spotify_logo.png';

const Header = () => {
    return (
        <C.Main>
            <C.Container>
                <img src={logo} alt="logo" />
                <C.Navigation>
                    <ul>
                        <li>Premium</li>
                        <li>Suporte</li>
                        <li>Baixar</li>
                        <li>Inscrever-se</li>
                        <li>Entrar</li>
                    </ul>
                </C.Navigation>
            </C.Container>
        </C.Main>
    )
}

export default Header;