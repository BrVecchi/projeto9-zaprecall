import PerguntaFechada from "./PerguntaFechada";
import PerguntaAberta from "./PerguntaAberta";

export default function Perguntas({ cardsMostrados, setCardsMostrados, VERDE, VERMELHO, AMARELO, CINZA }) {
  return (
    <>
      {cardsMostrados.map((card) =>
        card.estado === "fechado" ? (
          <PerguntaFechada
            card={card}
            cardsMostrados={cardsMostrados}
            setCardsMostrados={setCardsMostrados}
            VERDE={VERDE}
            AMARELO={AMARELO}
            VERMELHO={VERMELHO}
          />
        ) : (
          <PerguntaAberta
            VERDE={VERDE}
            AMARELO={AMARELO}
            VERMELHO={VERMELHO}
            CINZA={CINZA}
            card={card}
            cardsMostrados={cardsMostrados}
            setCardsMostrados={setCardsMostrados}
          />
        )
      )}
    </>
  );
}
