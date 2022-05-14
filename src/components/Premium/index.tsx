import * as C from './styles';
import image from '../../assets/tenis.png';

const Premium = () => {
    return (
        <C.Main>
            <C.Container>
                <C.Description>
                    <span>SPOTIFY PREMIUM</span>
                    <h1>Tá Acabando: 3 meses de Premium grátis</h1>
                    <p>Curta músicas sem anúncios, modo offline e muito mais.<br/>Cancele quando quiser.</p>
                    <button>APROVEITE 3 MESES GRÁTIS</button>
                    <span>
                        Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito a Termos e Condições. Oferta disponível apenas para quem nunca usou o Premium.
                        Esta oferta termina em 19 de maio de 2022.
                    </span>
                </C.Description>
                <img src={image} alt="tenis" />
            </C.Container>
        </C.Main>
    )
}

export default Premium;