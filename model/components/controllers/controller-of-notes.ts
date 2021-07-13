import { action } from 'easy-peasy'
// ts
import { Action } from 'easy-peasy'


export interface ControllerOfNotes {
    // state
    showOnlyFav: boolean;
    // actions
    setShowOnlyFav: Action<ControllerOfNotes, boolean>;
}


const controllerOfNotes: ControllerOfNotes = {
    // state
    showOnlyFav: false,

    // actions
    setShowOnlyFav: action((stt, pld) => {
        stt.showOnlyFav = pld
    }),
}

export default controllerOfNotes