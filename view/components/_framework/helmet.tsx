// import NextHead from 'next/head'
import Helmet from 'react-helmet'
import { Fragment as ROOT } from 'react'
import { Fragment as HTML } from 'react'


export function Html({ children, htmlAttributes }) {
    return (
        <ROOT>
            <Helmet htmlAttributes={htmlAttributes} />
            {children}
        </ROOT>
    )
}

export function Head({ children }) {
    return (
        <HTML>
            <Helmet>{children}</Helmet>
            {/* <NextHead>{children}</NextHead> */}
        </HTML>
    )
}

export function Body({ children, bodyAttributes }) {
    return (
        <HTML>
            <Helmet bodyAttributes={bodyAttributes} />
            {children}
        </HTML>
    )
}