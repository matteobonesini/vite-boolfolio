<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
            loading: false
        }
    },
    created() {
        if (!this.loading) {
            this.loading = true;
            axios
                .get(`http://localhost:8000/api/projects/${this.$route.params.slug}`)
                .then(res => {
                    console.log(res);
                    this.project = res.data.results;
                    this.loading = false;
                })
                .catch(err => {
                    console.log(err);
                    if (err.response.status == 404) {
                        this.$router.push({ name: 'not-found' });
                    }
                });
        }
    }
}
</script>

<template>
    <template v-if="project">
        <h1 class="text-center mb-5">
            {{ project.title }}
        </h1>
        <div class="row g-5">
            <div class="col-6">
                <img class="w-75" :src="project.full_img_src" :alt="project.title">
            </div>
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item">Title: {{ project.title }}</li>
                    <li class="list-group-item">Description: {{ project.description }}</li>
                    <li class="list-group-item">Type: {{ project.type.title }}</li>
                    <li class="list-group-item">Technology:
                        <span v-for="technology in project.technologies" class="mx-1">
                            {{ technology.title }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </template>
</template>

<style scoped></style>