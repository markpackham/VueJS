<template>
    <div class="users">
        <h1>Users</h1>
        <p>Taken from https://jsonplaceholder.typicode.com/users</p>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter name">
            <br>
            <input type="text" v-model="newUser.email" placeholder="Enter email">
            <br>
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">

                <!-- if user contacted then give class of contacted -->
                <span :class="{contacted: user.contacted}">
                    {{user.name}} : {{user.email}}
                    <button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return {
                newUser: {},
                users: [

                    /*
                    {
                        name: 'Mark Packham',
                        email: 'mpackham@email.com',
                        contacted: false
                    },
                    {
                        name: 'Mark2 Packham2',
                        email: 'm2packham@email.com',
                        contacted: false
                    },
                    {
                        name: 'Mark3 Packham3',
                        email: 'm3packham@email.com',
                        contacted: false
                    }
                    */
                ]
            }
        },
        methods: {
            addUser: function (e) {
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
                e.preventDefault();
            },
            deleteUser: function (user) {
                this.users.splice(this.users.indexOf(user), 1);
            }
        },
        //we get created from vueResource
        created: function () {
            this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
                this.users = response.data;
            });
        }

    }
</script>

<style scoped>
    .contacted {
        text-decoration: line-through;
    }
</style>