import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";

export default function Perguntas({ cardsMostrados, setCardsMonstrados, VERDE, VERMELHO, AMARELO, CINZA }) {
  return (
    <>
      {cardsMostrados.map((card) =>
        card.estado === "fechado" ? (
          <PerguntaFechada
            card={card}
            cardsMostrados={cardsMostrados}
            setCardsMonstrados={setCardsMonstrados}
          />
        ) : (
          <PerguntaAberta
            VERDE={VERDE}
            AMARELO={AMARELO}
            VERMELHO={VERMELHO}
            CINZA={CINZA}
            card={card}
          />
        )
      )}
    </>
  );
}
