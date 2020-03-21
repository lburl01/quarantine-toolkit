import "../styles/index.css";

function App({
  Component,
  pageProps
}: {
  Component: React.ComponentClass;
  pageProps: any;
}): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
