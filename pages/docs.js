const Docs = (props) => (
  <main>
    <h1>{ props.data.parameters.title }</h1>

    <div dangerouslySetInnerHTML={{ __html: props.content }} />
  </main>
)

Docs.getInitialProps = async function ({ query }) {
  const { data, content, version } = query

  return { data, content, version }
}

export default Docs
