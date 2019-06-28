export default ({ props }: any) => {
  return (
    <main class='section'>
      <section class='parallax-background -hobbies'>
        <article class='background background-1'/>
        <article class='background background-2'/>
        <article class='background background-3'/>
        <article class='background background-4'>
          <i class='band-member drummer' />
          <h1 class='game-title -cartel -hobbies'>Drummer</h1>
        </article>
        <article class='background background-5'>
          <h2 class='game-title -cartel -hobbies'>Martial Artist</h2>
        </article>
        <article class='background background-6'/>
        <article class='layerBottom'>
          <h1 class='game-title -cartel -hobbies'>Metalhead and MMA Fan</h1>
        </article>
        <span class='hobby-character running-alex'/>
        <span class='hobby-character hammer-alex'/>
        <span class='hobby-character punching-alex'/>
        <span class='band-member mad-guitarrist' />
        <span class='band-member showoff-guitarrist' />
        <span class='band-member bass-player' />
        <span class='band-member fan' />
      </section>
      <section class='user-panel'>
        <a onClick={() => props.router.push('/interactive-resume/about/live-and-work')} class='button -prev'>
          <i class='fas fa-angle-left' />
          LvL 1.3
        </a>
        <a onClick={() => props.router.push('/interactive-resume/skills')} class='button -next'>
          LvL 2
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
