export default ({ props }: any) => {
  return (
    <main class='section -intro'>
      <section class='parallax-background -levelSelection'>
        <article class='levels-selection'>
          <a
            onClick={() => props.router.push('/static-resume/about')}
            class='level -about'
            onmouseenter={() => props.methods.levelSelected('About')}
          >
            <h3>level 1: About</h3>
          </a>
          <a
            onClick={() => props.router.push('/static-resume/skills')}
            class='level -skills'
            onmouseenter={() => props.methods.levelSelected('Skills')}
          >
            <h3>level 2: Skills</h3>
          </a>
          <a
            onClick={() => props.router.push('/static-resume/experience')}
            class='level -experience'
            onmouseenter={() => props.methods.levelSelected('Experience')}
          >
            <h3>level 3: Experience</h3>
          </a>
          <a
            onClick={() => props.router.push('/credits')}
            class='level -credits'
            onmouseenter={() => props.methods.levelSelected('Pubacations')}
          >
            <h3>Credits</h3>
          </a>
        </article>
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
      </section>
    </main>
  )
}
