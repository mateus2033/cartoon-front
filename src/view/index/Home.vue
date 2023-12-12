<template>
<v-app> 
    <div>
        <Header></Header>     
    </div>

    <div> 
        <Content></Content>
    </div>
    
    <div>
        <Footer></Footer>
    </div>
</v-app> 
</template>

<script>

import Header from '../../components/index/Header.vue'
import Content from '../../components/index/Content.vue'
import Footer from '../../components/index/Footer.vue'

    export default {
        name: "Home",
        components: { Header, Content, Footer }
    }
</script>