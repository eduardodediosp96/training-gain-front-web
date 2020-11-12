import { HTTP } from '../services/Api'

export default {
    getSesions() {
        console.log("pasa por aca")
        return HTTP.get('/sessions')

    }
}