import { action } from 'easy-peasy'


const controllerOfNotes = {
    // state
    showOnlyFav: false,

    // actions
    setShowOnlyFav: action((stt, pld) => {
        stt.showOnlyFav = pld
    }),
}

export default controllerOfNotes