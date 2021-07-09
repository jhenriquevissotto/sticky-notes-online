import element from '../../../libs/helpers/element'

// ts
// import { FC, ReactNode } from 'react'


export default function Text({ children, as, ...props }) {
    return element.create(as, props, children)
}