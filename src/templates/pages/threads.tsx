import ThreadsList from '../components/list'

export default ({ props, data, children }: any) => {
  return (
    <main {...data}>
      {children}
      <ThreadsList
        list={props.data.threads}
        routeHandler={props.methods.routeHandler}
      />
      {props.data.getLogin && props.data.getAdmin && (
        <routerLink
          class='pure-button -fixed'
          to={`/blog/categories/${props.data.category.id}/new-thread/`}
        >
          New Thread
        </routerLink>
      )}
    </main>
  )
}
