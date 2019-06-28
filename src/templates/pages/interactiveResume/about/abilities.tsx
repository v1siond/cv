export default ({ props }: any) => {
  return (
    <main ref='main'>
      <section class='parallax-background -interactive -abilities'>
        <h1 ref='title' class='game-title -cartel -abilities -interactive'>Multidisciplinary Full Stack Developer</h1>
        <div ref='background1' class='background background-1'>
          <span class='divisions' />
          <span class='divisions' />
          <div class='divisions'>
            <span class='grass' />
            <article ref='info'>
              <span class='tree-1'>
                <h2 class='game-title -ability -backend'>
                  <p></p>  Backend
                  <div class='expertise'>
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                  </div>
                </h2>
              </span>
              <span class='tree-2'>
                <h2 class='game-title -ability -frontend'>
                  <p></p>  Frontend
                  <div class='expertise'>
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                  </div>
                </h2>
              </span>
              <span class='tree-3'>
                <h2 class='game-title -ability -animation'>
                  <p></p>  Animation
                  <div class='expertise'>
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
                    <i class='fas fa-star' />
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
            </article>
          </div>
        </div>
        <article ref='background2' class='background background-2'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article ref='background3' class='background background-3'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article ref='background4' class='background background-4'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article ref='background5' class='background background-5'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <article ref='bottom' class='layerBottom'>
          <span class='divisions' />
          <span ref='interactiveCharacter' tabIndex='0' class='character -interactive'/>
        </article>
      </section>
      <section class='user-panel'>
      <a onClick={() => props.router.push('/interactive-resume/')} class='button -prev'>
        <i class='fas fa-angle-left' />
        Level Selection
      </a>
        <a onClick={() => props.router.push('/interactive-resume/about/born-in')} class='button -next'>
          LVL 1.2
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
