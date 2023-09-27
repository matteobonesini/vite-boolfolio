<script>

export default {
    data() {
        return {
        }
    },
    props: {
        proj: Object
    }
}
</script>

<template>
    <div class="card h-100">
        <img :src="'http://127.0.0.1:8000/storage/' + proj.img_src" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ proj.title }}</h5>
            <p class="card-text">{{ proj.description }}</p>
        </div>
    </div>
</template>

<style scoped></style>