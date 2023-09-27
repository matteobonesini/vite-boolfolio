<script>
import axios from 'axios';
import ProjectCard from './partials/ProjectCard.vue';

export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        }
    },
    created() {
        axios
            .get('http://127.0.0.1:8000/api/projects')
            .then(response => {
                // handle success
                console.log(response.data.result);
                this.projects = response.data.result;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row g-3">
                <div class="col-3" v-for="project in projects">
                    <ProjectCard :proj="project" />
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