export default ({ props }: any) => {
  return (
    <main class='section -login'>
      <section class='parallax-background -levelSelection'>
        <h1 class='game-title'>Signup</h1>
        <div class='contact-form'>
          <input
            id='name'
            placeholder='Name'
            type='text'
            vModel={props.name}
          />
          <input
            id='email'
            placeholder='Email'
            type='email'
            vModel={props.email}
          />
          <input
            id='password'
            placeholder='Password'
            type='password'
            vModel={props.password}
          />
          <input
            id='username'
            placeholder='Username'
            type='text'
            vModel={props.username}
          />
          <button class='button' onClick={() => props.methods.signup(props.name, props.email, props.password, props.username)}>
            Sign up
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

