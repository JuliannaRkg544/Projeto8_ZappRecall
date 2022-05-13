
import Card from "./Card"

 function FlashcardRisk({ card, status, color }) {
    console.log("color ",color)
    return (
        <Card>
            <p className={`risk ${color}`}> Pergunta {card.key}</p>  <img src={`./imgs/Vector-${color}.png`} />
        </Card>
        )

}

export default FlashcardRisk

