import element from '../../../libs/helpers/element'

// ts
import { ReactChildren } from 'react'


interface Props {
    children: ReactChildren 
    as: string
    props: any
}

export default function Text({ children, as, ...props }: Props) {
    return element.create(as, props, children)
}