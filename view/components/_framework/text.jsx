import element from '../../../libs/helpers/element'

export default function Text({ children, as, ...props }) {
    return element.create(as, props, children)
}