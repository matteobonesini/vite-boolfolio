<script>
import axios from 'axios';

export default {
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
        <div v-for="project in projects">
            {{ project.title }}
        </div>
    </main>
</template>

<style scoped>
main {
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
    min-height: calc(100vh - 140px);
}
</style>