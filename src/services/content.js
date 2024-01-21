import { http } from "./config";

export default {
    list(data) {
        return http.get('/cartoon/index/',{       
            params: {
                page: data.page,
                perpage: data.perpage,
                paginate: data.paginate
            }
        });
    }
}