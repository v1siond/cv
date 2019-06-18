export default ({ props }: any) => {
  return (
    <main class='section -login'>
      <section class='parallax-background -levelSelection'>
        <h1 class='game-title'>Login</h1>
        <div class='contact-form'>
          <input
            class='input pure-input-1'
            id='email'
            placeholder='Email'
            type='email'
            vModel={props.email}
          />
          <input
            class='input pure-input-1'
            id='password'
            placeholder='Password'
            type='password'
            vModel={props.password}
          />
          <span class='pure-form-message'>
            <routerLink class='link' to='/signup'>Create account</routerLink>
          </span>
          <button class='button' onClick={() => props.methods.signin(props.email, props.password)}>
            Sign in
          </button>
        </div>
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
