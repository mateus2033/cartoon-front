<template v-slot:header>
        <v-toolbar  class="bg-indigo-lighten-1" title="Cartoon">
            <v-autocomplete            
                clearable
                theme="light"
                hide-details
                prepend-inner-icon="mdi-magnify"
                density="comfortable"
                label="Search"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="solo">
            </v-autocomplete>

            <v-btn 
                 prepend-icon="mdi-account-circle" 
                 variant="text" 
                 @click="Register()"> Entrar 
            </v-btn>
        </v-toolbar>

</template>

<script>
    export default {
        name: "Header",

        methods: { 
            Register() { if (this.$route.path !== "/Register") this.$router.push("/Register"); }
        }
    }
</script>