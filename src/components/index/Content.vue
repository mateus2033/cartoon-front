<template>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
    <h1>Content</h1>
</template>

<script>

    import content from '@/services/content';

    export default {
        name: "Content",

        mounted() {
            content.list().then((response) => {
                 this.value = response.content.value
            })
        },
    }
</script>