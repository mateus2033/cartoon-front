<template>
    <v-app>
        <div>
            <HeaderSessionUser/> 
        </div>

        <div> 
            <RegisterSessionUser/>
        </div>

        <!-- <div> 
            <FooterSessionUser/>
        </div> -->
    </v-app>
</template>

<script>

import RegisterSessionUser from '../../components/session/RegisterSessionUser.vue';
import HeaderSessionUser from '../../components/session/HeaderSessionUser.vue'; 
import FooterSessionUser from '../../components/session/FooterSessionUser.vue';

export default {

    components: {
        RegisterSessionUser,
        HeaderSessionUser,
        FooterSessionUser
    },

    name: "Register"
}
    
</script>