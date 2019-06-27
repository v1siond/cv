export default ({ props }: any) => {
  return (
    <main class='section'>
      <section class='parallax-background -abilities'>
        <h1 class='game-title -cartel -abilities'>Multidisciplinary Full Stack Developer</h1>
        <article class='background background-1'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-2'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-3'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-4'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-5'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article class='background background-6'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <span class='tree-1'>
          <h2 class='game-title -ability -backend'>
            <p></p>  Backend
            <div class='expertise'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>
          </h2>
        </span>
        <span class='tree-2'>
          <h2 class='game-title -ability -frontend'>
            <p></p>  Frontend
            <div class='expertise'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>
          </h2>
        </span>
        <span class='tree-3'>
          <h2 class='game-title -ability -animation'>
            <p></p>  Animation
            <div class='expertise'>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
              <i class='fas fa-star'></i>
            </div>
          </h2>
        </span>
        <span class='mush-1'/>
        <span class='mush-1-1'/>
        <span class='mush-1-2'/>
        <span class='mush-2'/>
        <span class='mush-2-1'/>
        <span class='mush-2-2'/>
        <span class='mush-3'/>
        <span class='mush-3-1'/>
        <span class='mush-3-2'/>
        <article class='layerBottom'/>
        <span class='character'/>
      </section>
      <section class='user-panel'>
      <a onClick={() => props.router.push('/static-resume')} class='button -prev'>
        <i class='fas fa-angle-left' />
        Level Selection
      </a>
        <a onClick={() => props.router.push('/static-resume/about/born-in')} class='button -next'>
          LVL 1.2
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
