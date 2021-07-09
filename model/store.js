import { createStore, persist } from 'easy-peasy'
import components from './components'


const store = createStore(persist({
    components,
}))


export default store