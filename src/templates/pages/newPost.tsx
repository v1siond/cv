import TabPanel from '../components/editorTabPanel'

export default ({ props, children }: any) => {
  if (props.data.getLogin) {
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
    return <div>You must be logged to perform this action.</div>
  }
}
