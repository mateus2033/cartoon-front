<template>
    <v-row class="pa-10">
        <v-col v-for="(item, index) in vetor" :key="index" cols="6" md="2">
            <v-card :loading="loading" class="mx-auto my-12" max-width="300">
                <template v-slot:loader="{ isActive }">
                    <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
                </template>

                <v-img cover height="290" src="../../assets/eldenring.jpeg"></v-img>

                <v-card-item>
                    <v-card-title>{{ item.name }}</v-card-title>
                </v-card-item>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly
                            size="small"></v-rating>
                        <div class="text-grey ms-4">4.5 (413)</div>
                    </v-row>

                    <div class="my-4 text-subtitle-1"> R$ {{ item.price }} • </div>
                    <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
                    </div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                    <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
                        Comprar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    <div>
        <v-pagination v-model="pagination.page" :length="totalPages"  :total-visible="5" @update:model-value="fetch" />
    </div>
</template>

<script>

import content from '@/services/content';

export default {
    name: "ProductBasicCard",

    data() {
        return {
            reserve:false,
            loading:false,
            totalItens:10,
            vetor: [],
            pagination:{
                page: 1, 
                perpage: 24,
                paginate: true
            }
        }
    },

    mounted() {
        this.fetchData();
    },
    
    computed: { 
        totalPages() {
            return Math.ceil(this.totalItens / this.pagination.perpage);
        }
    },

    methods: {
        fetchData() {
            content.list(this.pagination).then((response) => {
                this.totalItens = response.data.total;
                this.vetor = response.data.data;
            }).catch((error) => {
                console.error("Erro ao buscar dados:", error);
            });
        },

        fetch(val){
            this.pagination.page = val;
            this.loading = true;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            setTimeout(() => {
                this.fetchData();
                this.loading = false;
            }, 1000);
        }
    },
}

</script>