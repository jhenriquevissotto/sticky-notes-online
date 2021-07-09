import { createElement, cloneElement } from 'react'
// ts
// import PropTypes from 'prop-types'
// import { FC, ReactNode } from 'react'

export function CreateElement({ children, tag, ...props }) {
    return createElement(tag, props, children)
}


export function CloneElement({ comp, ...props }) {
    return cloneElement(comp, props) 
}



const element = {
    create: createElement,
    clone:   cloneElement,
}

export default element