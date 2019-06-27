export default ({ props }: any) => {
  return (
    <main class='section'>
      <section class='parallax-background -levelSelection -liveAndWork'>
        <h1 class='game-title -cartel'>Live And Work In Arequipa</h1>
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
        <article class='layerBottom'/>
        <span class='character -live-and-work'/>
      </section>
      <section class='user-panel'>
        <a onClick={() => props.router.push('/static-resume/about/born-in')} class='button -prev'>
          <i class='fas fa-angle-left' />
          LvL 1.2
        </a>
        <a onClick={() => props.router.push('/static-resume/about/hobbies')} class='button -next'>
          LvL 1.4
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
