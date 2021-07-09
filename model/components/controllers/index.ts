import controllerOfNotes from './controller-of-notes'

// ts
import { ControllerOfNotes } from './controller-of-notes'

export interface Controllers {
    controllerOfNotes: ControllerOfNotes
}

const controllers = {
    controllerOfNotes,
}

export default controllers