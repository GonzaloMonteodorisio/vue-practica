<template>
    <div class="users">
        <h1>User Component</h1>
        <ul>
            <li v-for="(user, index) in users" v-bind:key="index">
                {{ user.name }} - {{ user.email }} 
                <button v-on:click="deleteUser(user)">X</button>
            </li>
        </ul>
        <form v-on:submit.prevent="addUser">
            <label for="name">Nombre</label>
            <input type="text" name="name" v-model="newUser.name">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="newUser.email">
            <button type="submit">
                Add
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            newUser: {}
        }
    }, 
    methods: {
        addUser() {
            this.users.push(this.newUser);
            this.newUser = {};
        },
        deleteUser(user) {
            this.users.splice(this.users.indexOf(user), 1);
            // Forma alternativa
            // this.users = this.users.filter(item => item !== user);
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.body;
            });
    }
}
</script>

<style lang="css">
    .users {
        background: #333;
        color: #fff;
        padding: 20px;
    }
</style>
