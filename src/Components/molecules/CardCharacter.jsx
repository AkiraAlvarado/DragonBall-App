
const CardCharacter = ({character}) => {
  return (
    <div className="card-container">
      <div className="card-container__image">
         <img className="card__image" src={character.image} alt="" />
      </div>
      <div className="card-container__info">
         <p className="card__name">{character.name}</p>
         <div className="card__ki">
            <p className="card__name__ki">Ki Base: </p>
            <p className="card__number__ki">{character.ki}</p>
         </div>
         <div className="card__ki">
            <p className="card__name__ki">Ki Max: </p>
            <p className="card__number__ki">{character.maxKi}</p>
         </div>
      </div>
    </div>
  )
}

export default CardCharacter