<template>
    <div> 
        <v-toolbar class="bg-indigo-lighten-1" title="Cartoon">
            <v-btn prepend-icon="mdi-home-circle" variant="text" @click="Home()"> Voltar </v-btn>
        </v-toolbar>
    </div>
</template>

<script> 
    export default {
        name:"HeaderSessionUser",

        methods: { 
            Home() { if (this.$route.path !== "/") this.$router.push("/"); }
        }
    }
</script>