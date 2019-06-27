export default ({ props }: any) => {
  const getColaborators = () => {
    const colaborators: any[] = []
    if (props.colaborators && props.colaborators.length > 0) {
      props.colaborators.map((colaborator) => {
        colaborators.push(
          <li class='colaborator'>
            <a href={colaborator.url}>{colaborator.name}</a>
          </li>
        )
        colaborators.push(
          <li class='colaborator-job'>
            {colaborator.job}
          </li>
        )
      })
    }
    return colaborators
  }
  const getpublishedContent = () => {
    const publishedContent: any[] = []
    if (props.publishedContent && props.publishedContent.length > 0) {
      props.publishedContent.map((content) => {
        publishedContent.push(
          <li class='colaborator'>
            <a href={content.url}>{content.title}</a>
          </li>
        )
      })
    }
    return publishedContent
  }
  return (
    <main class='section -credits'>
      <h1 class='game-title -credit'>Credits</h1>
      <ul class='colaborators'>
        <h2 class='game-title -credits'>
          Colaborators
        </h2>
        {getColaborators()}
      </ul>
      <ul class='published-content'>
        <h2 class='game-title -credits'>
          Published Content
        </h2>
        {getpublishedContent()}
      </ul>
      <section class='contact'>
        <h2 class='game-title -credits'>
          Contact
        </h2>
        <form class='contact-form'>
          <input
            on-input={(e) => props.sync('email', e.target.value)}
            type='email'
            placeholder='Email'
            required
          />
          <input
            on-input={(e) => props.sync('subject', e.target.value)}
            type='text'
            placeholder='Subject'
            required
          />
          <textarea
            on-input={(e) => props.sync('message', e.target.value)}
            name='message'
            cols='5' rows='10'
            placeholder='Message'
            required
          />
          <a class='button' onClick={() => props.sendEmail()}>Send message</a>
        </form>
        <article class='contact-information'>
          <a><i class='fab fa-facebook' />Facebook</a>
          <a><i class='fab fa-github' />Github</a>
          <a><i class='fab fa-youtube' />Youtube (Drummin Channel)</a>
        </article>
      </section>
    </main>
  )
}
