import Menu from '../../components/Menu'

export default ({ props }: any) => {
  if (props.data.blog) {
    return (
      <nav class={`menu-top`}>
        <section class='container'>
          <article class='links'>
            {props.data.getBack && (
              <a onClick={props.methods.backHandler} class='link'>
                <i class='fas fa-arrow-left' />
              </a>
            )}
            {props.data.getTitle === 'Alexander Pulido' ? (
              <routerLink class='game-title -small' to='/blog' title='Forum'>
                {props.data.getTitle}
              </routerLink>) : (
              <p class='game-title -small'>{props.data.getTitle}</p>
            )}
          </article>
          {props.data.getLogin ? (
            <a
              class='link'
              onClick={props.methods.logoutHandler}
              title='Logout'
            >
              <i class='fas fa-user' />
            </a>
          ) : (
            <routerLink class='link' to='/login' title='Login'>
              <i class='fas fa-user' />
            </routerLink>
          )}
        </section>
      </nav>
    )
  } else {
    return (
      <nav class={`menu-top -game`}>
        {props.showMenu && (<Menu buttonSelected={props.methods.buttonSelected} formatTime={props.methods.formatTime} openMenu={props.methods.openMenu} pushRoute={props.pushRoute}/>)}
        {props.showMenu === false && (
          <section class='container'>
            <ul class='stats-list'>
              <li class='stat'>
                <i onClick={() => props.methods.setSound()} class={props.data.getSound ? 'fas fa-volume-up' : 'fas fa-volume-off'} />
              </li>
              <li class='stat'>
                <h3>Alex</h3>
              </li>
              { props.mobile && (
                <li class='stat'>
                  <h3>World</h3>
                  { props.getLevelNumber !== '_' && props.getLevelName !== 'Credits' ? (
                    <p>{ props.getLevelNumber }: { props.getLevelName }</p>
                  ) : (<p>{ props.getLevelName }</p>)}
                </li>
              )}
              { props.mobile && (
                <li class='stat'>
                  <h3>Time</h3>
                  <p>{props.methods.formatTime(props.data.getTime)}</p>
                </li>
              )}
              <li class='stat' onClick={() => props.methods.openMenu()}>
                <a onmouseenter={() => props.methods.buttonSelected()}><i class='fa fa-bars '/></a>
              </li>
            </ul>
          </section>
        )}
      </nav>
    )
  }
}
