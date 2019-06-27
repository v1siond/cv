export default ({ props }: any) => {
  const showRocks = (skills) => {
    const rocks: any[] = []

    for (const [i, skill] of skills.entries()) {
      rocks.push(<div class={`rock rock-${i + 1}`}>
          <h3>{skill.name}</h3>
          <span class='stars'>
            {showStars(skill.stars)}
          </span>
        </div>
      )
    }
    return rocks
  }
  const showStars = (stars) => {
    const starsArray: any[] = []

    for (let i: number = 0; i < stars; i++) {
      starsArray.push(<i class='fas fa-star'/>)
    }
    return starsArray
  }
  const divisions = () => {
    const divisionsArray: any[] = []

    for (let i: number = 0; i < 5; i++) {
      divisionsArray.push(<span class='divisions' />)
    }
    return divisionsArray
  }
  return (
    <main class='section'>
      <section class='parallax-background -skill'>
        <transition-group tag='div' name={props.transitionName} class='background background-1 slides-group'>
          { props.show && (
            <span
              key={props.current}
              class={`divisions slide -skills`}
            >
              {showRocks(props.skills[props.current].techs)}
            </span>
          )}
        </transition-group>
        <article class='background background-2'>
          {divisions()}
        </article>
        <article ref='moveSand' class={`background background-3 ${props.transitionName}-enter-bg ${props.transitionName}-enter-active-bg`}>
          {divisions()}
        </article>
        <article class='background background-4'>
          {divisions()}
        </article>
        <article class='background background-5'>
          {divisions()}
        </article>
        <article class='layerBottom'>
          <h2 class='game-title -skill -general'>{props.skills[props.current].title}</h2>
        </article>
        <div class='btn btn-prev' aria-label='Previous slide' onClick={() => props.slide(-1)}>
          &#10094;
        </div>
        <div class='btn btn-next' aria-label='Next slide' onClick={() => props.slide(1)}>
          &#10095;
        </div>
      </section>
      <section class='user-panel'>
      <p>
        <span>Beginner</span>
        <span>
          <i class='fas fa-star'/>
          <i class='fas fa-star'/>
          <i class='fas fa-star'/>
          <i class='fas fa-star'/>
          <i class='fas fa-star'/>
        </span>
        <span>Expert</span>
      </p>
      <a onClick={() => props.router.push(props.prevUrl.url)} class='button -prev'>
        <i class='fas fa-angle-left' />
        {props.prevUrl.text}
      </a>
      <a onClick={() => props.router.push(props.nextUrl.url)} class='button -next'>
        {props.nextUrl.text}
        <i class='fas fa-angle-right' />
      </a></section>
    </main>
  )
}
