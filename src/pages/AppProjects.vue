<script>
import axios from 'axios';
import ProjectCard from '../components/partials/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 1,
            loading: false
        }
    },
    created() {
        this.getProject();
    },
    methods: {
        getProject() {
            if (!this.loading) {
                this.loading = true;
                axios
                    .get('http://127.0.0.1:8000/api/projects', {
                        params: {
                            page: this.currentPage
                        }
                    })
                    .then(response => {
                        this.projects = response.data.result.data;
                        this.lastPage = response.data.result.last_page;
                        this.loading = false;
                    })
                    .catch((error) => {
                        if (error.response.status == 404) {
                            this.$router.push({ name: 'not-found' });
                        }
                        this.loading = false;
                    })
            }
        },
        changePage(mode) {
            switch (mode) {
                case '+':
                    if (this.currentPage < this.lastPage) {
                        this.currentPage++;
                        this.getProject();
                    }

                    break;
                case '-':
                    if (this.currentPage > 1) {
                        this.currentPage--;
                        this.getProject();
                    }
                    break
            }
        }
    }
}
</script>

<template>
    <div class="row g-3">
        <div class="col-4" v-for="project in projects">
            <router-link :to="{ name: 'blog-project', params: { slug: project.slug } }" class="nav-link h-100">
                <ProjectCard :proj="project" />
            </router-link>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-5">
        <div>
            <button @click="changePage('-')" :disabled="currentPage <= 1 || loading" class="btn btn-primary">Prev</button>
            <span class="mx-4">{{ currentPage }}</span>
            <button :disabled="currentPage >= lastPage || loading" @click="changePage('+')"
                class="btn btn-primary">Next</button>
        </div>
    </div>
</template>

<style scoped></style>