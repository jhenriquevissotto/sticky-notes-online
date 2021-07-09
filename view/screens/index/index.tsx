import { Fragment as Layout } from 'react'

import SectionContainerOfNotes from './sections/container-of-notes'



export default function ScreenIndex() {


    return (
        <Layout>
            <SectionContainerOfNotes style={{ marginTop: 50 }} />
        </Layout>
    )
}