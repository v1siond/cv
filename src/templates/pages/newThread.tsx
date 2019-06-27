import TabPanel from '../components/editorTabPanel'

export default ({ props, children }: any) => {
  if (props.data.getLogin && props.data.getAdmin) {
    return (
      <main class='section new-post'>
        <TabPanel
          preview={props.data.preview}
          showPreview={props.methods.showPreview}
          showEditor={props.methods.showEditor}
        />
        {children}
      </main>
    )
  } else {
    return (
      <main class='section new-post'>
        <h2>Admin zone only.</h2>
      </main>
    )
  }
}
