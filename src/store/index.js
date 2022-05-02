import { createStore } from "vuex";
import user from '../store/module/user'

const store = createStore({
    modules: {
        user,
    },
})

export default store