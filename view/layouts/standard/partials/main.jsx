import cn from 'classnames'

export default function Main({ children: screen, className, ...props }) {
    return (
        <main 
            className={cn('flex', className)} 
            {...props} 
        >
            {screen}
        </main>
    )
}