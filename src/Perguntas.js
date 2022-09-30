import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";

export default function Perguntas(props) {
  const {cardsMostrados, setCardsMonstrados} = props

  return (
    <>
    {cardsMostrados.map((card) => (card.estado === "fechado") ? <PerguntaFechada card={card} cardsMostrados={cardsMostrados} setCardsMonstrados={setCardsMonstrados}/> : <PerguntaAberta  card={card}/>)}
    </>
  );
}
