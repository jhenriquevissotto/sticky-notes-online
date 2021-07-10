import { createElement, cloneElement } from 'react'
// ts
import { ReactElement, ReactChildren } from 'react'


interface CreateElementProps {
    children: ReactChildren
    tag: string
    props: any
}

interface CloneElementProps {
    comp: ReactElement
    props: any
}


export function CreateElement({ children, tag, ...props }: CreateElementProps) {
    return createElement(tag, props, children)
}

export function CloneElement({ comp, ...props }: CloneElementProps) {
    return cloneElement(comp, props) 
}


const element = {
    create: createElement,
    clone:   cloneElement,
}

export default element