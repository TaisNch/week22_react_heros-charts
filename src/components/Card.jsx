function Card(props) {
    return (
       <div className="card">
        <h2 className='hero_name'>Имя: {props.name}</h2>
        <p className='hero_universe'>Вселенная: {props.universe}</p>
        <p className='hero_alterego'>Альтерэго: {props.alterego}</p>
        <p className='hero_occipation'>Род деятельности: {props.occipation}</p>
        <p className='hero_friends'>Друзья: {props.friends}</p>
        <p className='hero_superpower'>Суперспособности: {props.superpower}</p>
        <p className='hero_info'>Инфо: {props.info}</p>
        </div>
         );
  }
  export default Card;