import Toolbar from '../../components/Toolbar'

export default ({ props, children }: any) => {
  if (props && props.methods) {
    return (
      <main class='section -intro animated'>
        {children}
        <section class={`parallax-background ${props.animationClass}`}>
          <header class='game-options-text'>
            <h1 class='game-title -home'>
              <p>Alexander Pulido</p>
            </h1>
            <span>
              <a
                onClick={() => props.router.push('/interactive-resume')}
                class={props.interactive ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('interactive')}
              >
                Start Interactive Resume
              </a>
              <a
                onClick={() => props.router.push('/static-resume')}
                class={props.static ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('static')}
              >
                Start Static Resume
              </a>
              <a
                onClick={() => props.router.push('/blog')}
                class={props.blog ? '-selected game-start-button' : 'game-start-button'}
                onmouseenter={() => props.methods.buttonSelected('blog')}
              >
                Forum
              </a>
            </span>
          </header>
          <article class='background background-1'/>
          <article class='background background-2'/>
          <article class='background background-3'/>
          <article class='layerBottom'/>
          <article ref='character1' class='character'/>
          <article ref='character2' class='character -jumpDownIntro'/>
        </section>
      </main>
    )
  } else {
    return null
  }
}
