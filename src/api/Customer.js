import axios from "axios";
import http from "../constans/path/http";
export default {
    createCustomer (request) {
       return http.POST('/customer/add',request);
    },
    getListCustomer () {
        return http.GET('/customer/getList',null);
    }
}