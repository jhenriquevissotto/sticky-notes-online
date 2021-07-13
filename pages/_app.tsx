// polyfill
import 'core-js'

// framework
import { Fragment as MyDocument } from 'react'

// style
// import '../public/assets/styles/global-style.css'
import GlobalStyle from '../public/assets/styles/global-style'
import CustomStyle from '../public/assets/styles/custom-style'
// import 'tailwindcss/tailwind.css'

// model
import { StoreProvider } from 'easy-peasy'
import store from '../model/store'




function MyApp({ Component: Page, pageProps }) {
  return (
    <MyDocument>
      <StoreProvider store={store} >
        <GlobalStyle />
        <CustomStyle />
        <Page {...pageProps} />
      </StoreProvider>
    </MyDocument>
  )
}



export default MyApp