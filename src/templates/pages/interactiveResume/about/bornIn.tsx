export default ({ props }: any) => {
  return (
    <main class='section'>
      <section class='parallax-background -levelSelection -bornIn'>
        <h1 class='game-title -cartel'>Born in Rome</h1>
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
        <article class='layerBottom'>
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
          <span class='divisions' />
        </article>
        <span class='character'/>
      </section>
      <section class='user-panel'>
        <a onClick={() => props.router.push('/static-resume/about/abilities')} class='button -prev'>
          <i class='fas fa-angle-left' />
          LvL 1.1
        </a>
        <a onClick={() => props.router.push('/static-resume/about/live-and-work')} class='button -next'>
          LvL 1.3
          <i class='fas fa-angle-right' />
        </a>
      </section>
    </main>
  )
}
