import { createRouter } from "vue-router";
import Vuetify  from "vuetify";
import "vuetify/dist/vuetify.min.css";

createRouter.use(Vuetify);

const opts = {};

export default new Vuetify(opts);
