<template>
    <v-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" color="grey-lighten-3" height="853" elevation="4" rounded>
        <v-card class="mx-auto px-6 py-10" max-width="850" width="850" title="Cadastrar-se">
            <v-form v-model="form" @submit.prevent="onSubmit">
                    <v-container>
                        <v-row> 
                            <v-col cols="12" sm="6"> 
                            <v-text-field 
                                prepend-icon="mdi-account"
                                v-model="name" 
                                color="primary" 
                                label="Primeiro nome" 
                                :rules="[rules.required]"
                                variant="outlined">
                            </v-text-field>
                           </v-col>
                           <v-col cols="12" sm="6"> 
                            <v-text-field 
                                :rules="[rules.required]"
                                prepend-icon="mdi-account"
                                v-model="lastName" 
                                color="primary" 
                                label="Nome final" 
                                variant="outlined">
                            </v-text-field>
                        </v-col> 
                        </v-row>

                        <v-row> 
                            <v-col cols="12" sm="6"> 
                                <v-file-input 
                                    accept="image/png, image/jpeg, image/bmp"
                                    placeholder="Pick an avatar"
                                    prepend-icon="mdi-camera"
                                    label="Foto de perfil"
                                    variant="outlined">
                                </v-file-input>
                        </v-col>
                            <v-col cols="12" sm="6"> 
                                <v-text-field   
                                   :rules="[rules.required]"
                                    prepend-icon="mdi-check"
                                    v-model="cpf" 
                                    color="primary" 
                                    label="Cpf" 
                                    variant="outlined">
                                </v-text-field>
                            </v-col>      
                        </v-row>

                        <v-row> 
                            <v-col cols="12" sm="6"> 
                                <v-text-field  
                                    :rules="[rules.required]"
                                    prepend-icon="mdi-calendar"
                                    v-model="dataBirth" 
                                    type="date"
                                    color="primary" 
                                    label="Data de nascimento" 
                                    variant="outlined"
                                    :max="getFormattedMinDate()">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6"> 
                                <v-text-field 
                                    :rules="[rules.required]"
                                    prepend-icon="mdi-cellphone"
                                    v-model="cellphone" 
                                    color="primary" 
                                    label="Celular/Telefone" 
                                    variant="outlined">
                                </v-text-field>
                            </v-col> 
                        </v-row>

                        <v-row> 
                            <v-col cols="12" sm="6"> 
                                <v-text-field
                                    :rules="[rules.required]" 
                                    prepend-icon="mdi-email"
                                    v-model="email" 
                                    color="primary" 
                                    label="Email" 
                                    variant="outlined">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6"> 
                                <v-text-field 
                                   :rules="[rules.required]"
                                    prepend-icon="mdi-lock-outline"
                                    v-model="password" 
                                    type="password"
                                    color="primary" 
                                    label="Senha" 
                                    placeholder="Digite sua senha"
                                    variant="outlined">
                                </v-text-field>
                        </v-col> 
                      </v-row>
                    </v-container>

                    <v-divider></v-divider>

                    <v-row class="pa-4" justify="center">
                        <v-card-actions>
                        <v-btn color="error">
                            Cancelar <v-icon icon="mdi-minus-circle" end></v-icon>
                        </v-btn>
                        
                        <v-btn color="success">
                            Cadastrar <v-icon icon="mdi-checkbox-marked-circle" end></v-icon>
                        </v-btn>
                    </v-card-actions>
                    </v-row>
            </v-form>
        </v-card>
    </v-sheet>
</template>

<script>

export default {
    name: "RegisterSessionUser",
    data: () => ({
        name: null,
        lastName: null,
        image: null,
        cpf: null,
        dataBirth: null,
        cellphone: '',
        email: null,
        password: null,
        form: false,
        rules: {
            required: (value) => !!value || "Obrigatório",
        },
    }),

    methods: {
      onSubmit () {
        if (!this.form) return
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },

      getFormattedMinDate() {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        return formattedDate;
      },

    },
}
</script>