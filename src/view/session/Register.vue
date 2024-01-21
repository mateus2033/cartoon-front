<template>
    <v-app>
        <div>
            <HeaderSessionUser/> 
        </div>

        <div> 
            <RegisterSessionUser/>
        </div>
    </v-app>
</template>

<script>

import RegisterSessionUser from '../../components/session/RegisterSessionUser.vue';
import HeaderSessionUser from '../../components/session/HeaderSessionUser.vue';

export default {

    components: {
        RegisterSessionUser,
        HeaderSessionUser
    },

    name: "Register"
}
    
</script>