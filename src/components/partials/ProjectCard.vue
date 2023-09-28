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
        <img :src="proj.full_img_src" class="card-img-top" :alt="proj.title" v-if="proj.img_src">
        <div class="card-body">
            <h5 class="card-title">{{ proj.title }}</h5>
            <p class="card-text">{{ proj.description }}</p>
        </div>
    </div>
</template>

<style scoped></style>