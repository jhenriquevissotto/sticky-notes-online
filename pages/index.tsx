import { Fragment as MyApp } from 'react'
import Document from '../view/documents/standard'
import Layout from '../view/layouts/standard/standard'
import Screen from '../view/screens/index/index'


const content = {
  title: {
    en: 'Sticky Note Online',
  },
}



export default function PageIndex() {
  return (
    <MyApp>
      <Document title={content.title.en} >
        <Layout>
          <Screen />
        </Layout>
      </Document>
    </MyApp>
  )
}



// const test = () => 'oie'
// export default test