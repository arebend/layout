import '../styles/globals.css';
// import SignIn from '../pages/signIn';
import Layout from '../components/layout';
import AuthStateChangeProvider from '../configs/context/auth'
import { UserProvider } from '../configs/context/user'

function MyApp({ Component, pageProps }) {
  return (
     <UserProvider>
       <AuthStateChangeProvider>
         {/* <SignIn> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
         {/* </SignIn> */}
       </AuthStateChangeProvider>
     </UserProvider>
  );
}

export default MyApp;
