import '../styles/globals.css'
import NProgress from 'nprogress'
import Router from 'next/router'

NProgress.configure({ showSpinner: false });
Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp