
function MyApp({ Component, pageProps: { pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
     
    </>
  )
}

export default MyApp
