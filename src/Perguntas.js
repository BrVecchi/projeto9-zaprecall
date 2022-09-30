import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";

export default function Perguntas(props) {
  const {cardsMostrados} = props

  return (
    <>
    {cardsMostrados.map((card) => <PerguntaFechada card={card}/>)}
    {cardsMostrados.map((card) => <PerguntaAberta card={card}/>)}
    </>
  );
}
