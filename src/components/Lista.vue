<template>
    <div class="container">
        <table class="table stripped bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="usuario in usuarios" v-bind:id="usuario.id" v-bind:key="usuario.id">
                    <td>{{usuario.name}}</td>
                    <td>{{usuario.username}}</td>
                    <td>{{usuario.email}}</td>
                    <td>
                        <ul>
                            <li>Ciudad: {{usuario.address.city}}</li>
                            <li>Calle: {{usuario.address.street}}</li>
                            <li>Código Postal: {{usuario.address.zipcode}}</li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    data() {
        return {
            usuarios: [],
            posts: [],
            URLGet: 'https://jsonplaceholder.typicode.com/users',
            URLPost: 'https://jsonplaceholder.typicode.com/posts'
        }
    },
    methods: {
        getUsuarios() {
            fetch(this.URLGet).
                then(response => response.json()).
                then(data => {
                                 this.usuarios = data
                                console.log(data)
                });
        },
        getPosts() {
            fetch(this.URLPost).
                then(response => response.json()).
                then(data => {
                                 this.posts = data
                                console.log(data)
                });
        }
    },
    // Como un constructor. Se monta cuando creamos nuestra aplicación
    mounted() {
        this.getUsuarios();
        this.getPosts();
    }
}
</script>

<style>

</style>
