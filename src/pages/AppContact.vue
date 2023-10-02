<script>
import axios from 'axios';

export default {
    data() {
        return {
            contact: {
                email: '',
                message: ''
            },
            sended: false
        }
    },
    methods: {
        sendMessage() {
            axios.post('http://127.0.0.1:8000/api/email', this.contact)
                .then((response) => {
                    console.log(response.data.result);
                    this.sended = response.data.result;
                })
                .catch((error) => {
                    console.log(error.message);
                    this.sended = false;
                });
        }
    }
}
</script>

<template>
    <form @submit.prevent="sendMessage()">
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com"
                v-model="contact.email" required>
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" v-model="contact.message" rows="3" minlength="1"
                required></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Send</button>
    </form>
    <h3 class="mt-5" v-if="sended"><span class="badge bg-success">Inviata!</span></h3>
</template>

<style scoped></style>