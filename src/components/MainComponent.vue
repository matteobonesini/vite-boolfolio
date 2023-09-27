<script>
import axios from 'axios';
import ProjectCard from './partials/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: [],
            currentPage: 1,
            lastPage: 1
        }
    },
    created() {
        axios
            .get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentPage
                }
            })
            .then(response => {
                // handle success
                console.log(response.data.result);
                this.projects = response.data.result.data;
                this.lastPage = response.data.result.last_page;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    },
    methods: {
        getProject() {
            axios
                .get('http://127.0.0.1:8000/api/projects', {
                    params: {
                        page: this.currentPage
                    }
                })
                .then(response => {
                    this.projects = response.data.result.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
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
    <main>
        <div class="container">
            <div class="row g-3">
                <div class="col-6" v-for="project in projects">
                    <ProjectCard :proj="project" />
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center mt-5">
                <div>
                    <button @click="changePage('-')" class="btn btn-primary">Prev</button>
                    <span class="mx-4">{{ currentPage }}</span>
                    <button @click="changePage('+')" class="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 30px 0;
    min-height: calc(100vh - 140px);
}
</style>