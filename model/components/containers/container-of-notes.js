import { action } from 'easy-peasy'
import moment from 'moment'
import shortid from 'shortid'




const containerOfNotes = {
    // ======================= //
    // ======== state ======== //
    // ======================= //
    listOfNotes: Array(0).fill({
        id: shortid.generate(),
        text: '', 
        isFavorite: false,
        datetime: moment().format('YYYY-MM-DD hh:mm'),
    }),
    
    // ========================= //
    // ======== actions ======== //
    // ========================= //
    newNote: action((stt, pld) => {
        stt.listOfNotes.unshift({
            id: shortid.generate(),
            text: '', 
            isFavorite: false,
            datetime: moment().format('YYYY-MM-DD hh:mm'),
        }) 
    }),

    setFavoriteById: action((stt, pld) => {
        const { id, isFavorite } = pld
        stt.listOfNotes.find(i => i.id == id).isFavorite = isFavorite
    }),

    editNoteById: action((stt, pld) => {
        const { id, text } = pld
        stt.listOfNotes.find(i => i.id == id).text = text
    }),

    deleteNoteById: action((stt, pld) => {
        const { id } = pld
        stt.listOfNotes = stt.listOfNotes.filter(i => i.id != id)
    }),

    deleteAllNotes: action((stt, pld) => {
        stt.listOfNotes = []
    }),
}


export default containerOfNotes