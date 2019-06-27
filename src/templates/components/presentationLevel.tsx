export default ({ props }: any) => {
  return (
    <main class='section -presentation'>
      <ul class='presentation-lvl-indicador'>
        <li class='presentation'>
          <h3>World {props.getLevelNumber}: {props.getLevelName}</h3>
          <div>
            <i class='character-static' />
            <h3>x 3</h3>
          </div>
        </li>
      </ul>
    </main>
  )
}
