<template>
    <div>
        <div v-text="title"></div>
        <div v-if="showName">
            <p>{{user.firstName}}</p>
        </div>
        <div v-else>
            <p>No puedo mostrar nombre</p>
        </div>
        <hr>
        <ul>
            <li v-for="(task, index) in tasks" v-bind:key="index">{{ task.title }}</li>
        </ul>
        <form class="formulario">
            <div class="input-click">
                <label for="evento-click">Evento click</label>
                <input type="text" v-model="user.firstName" name="evento-click">
                <button 
                type="button" 
                v-on:click="saludar(user.firstName)">
                    CLICK ME
                </button>
            </div>
            <br>
            <div class="input-keyup">
                <label for="evento-keyup">Evento keyup</label>
                <input type="text" v-on:keyup.enter="typedEnter" name="evento-keyup">
            </div>
        </form>
        <hr>
        <h3>{{ fullName }}</h3>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'Hola Vue JS',
                user: {
                    firstName: 'Gonzalo',
                    lastName: 'Monteodorisio'
                },
                myHTML: '<h3>Hola Vue</h3>',
                showName: false, 
                tasks: [
                    {title: 'eat'},
                    {title: 'dinner'},
                    {title: 'sleep'},
                    {title: 'talk'}
                ]
            }
        },
        methods: {
            saludar(name) {
                alert('Hello ' + name);
            },
            typedEnter(e) {
                console.log('Dio un Enter');
            }
        },
        computed: {
            fullName() {
                return `${this.user.firstName} ${this.user.lastName}`;
            }
        },
        props: {
            msg: {
                type: String,
                default: 'Mensaje por defecto'
            }
        }
    }
</script>

<style media="screen">
    .formulario {
        display: flex;
        flex-direction: column;
    }
    .input-click, .input-keyup {
        display: flex;
        flex-direction: column;
        /* width: 50%; */
        align-items: center;
    }
</style>
