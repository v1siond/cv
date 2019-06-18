import CategoryForm from '../components/form'
import CategoryList from '../components/list'
import Pagination from '../components/pagination'

export default ({ props, data, children }: any) => {
  return (
    <main {...data}>
      {children}
      {props.data.getLogin && props.data.getAdmin && (
        <CategoryForm
          getLogin={props.data.getLogin}
          apollo={props.methods.apollo}
          title={props.data.title}
          mutation={props.methods.mutation}
          sucessHandler={props.methods.sucessHandler}
          errorHandler={props.methods.errorHandler}
        />
      )}
      <CategoryList
        list={props.data.categories}
        routeHandler={props.methods.routeHandler}
      />
      {props.data.totalPages > 0 && (
        <Pagination
          active={props.data.active}
          handlePrevPage={props.methods.prevPage}
          pageHandler={props.methods.goToPage}
          page={props.data.page}
          totalPages={props.data.totalPages}
          handleNextPage={props.methods.nextPage}
        />
      )}
    </main>
  )
}
