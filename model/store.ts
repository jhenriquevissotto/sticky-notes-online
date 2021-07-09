import { createStore, persist } from 'easy-peasy'
import components from './components'

// ts
import { createTypedHooks } from 'easy-peasy'
import { Components } from './components'

interface Store {
    components: Components 
}


const store = createStore(persist({
    components,
}, {
    storage: 'localStorage', 
}))



const typedHooks = createTypedHooks<Store>()

export const useStore           = typedHooks.useStore
export const useStoreState      = typedHooks.useStoreState
export const useStoreActions    = typedHooks.useStoreActions
export const useStoreDispatch   = typedHooks.useStoreDispatch


export default store