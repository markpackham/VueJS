<template>
    <div class="test">
        <!--you can edit the title -->
        <input type="text" v-model="title"><br/>
        <h1>{{title}}</h1>
        <p>{{user.firstName}}</p>
        <p v-text="user.firstName"></p>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Name not found</p>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('Enatro Adoon')">
            Say Greeting
        </button>
        <br>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr>
        <label>First Name: </label>
        <input type="text" v-model="user.firstName">
        <br>
        <label>Last Name: </label>
        <input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
    </div>
</template>

<script>
    export default {
        name: 'test',
        data() {
            return {
                title: 'Hello Mark',
                user: {
                    firstName: 'John',
                    lastName: 'Smith'
                },
                showName: true,
                items: [
                    {title: 'Item One'},
                    {title: 'Item Two'},
                    {title: 'Item Three'}
                ]
            }
        },
        methods: {
            greet: function (greeting) {
                alert(greeting);
            },
            pressKey: function (e) {
                console.log(e.target.value);
            },
            enterHit: function () {
                console.log('You hit enter');
            }
        },
        computed: {
            fullName: function () {
                return this.user.firstName + ' ' + this.user.lastName;
            }
        }
    }
</script>

<style scoped>

</style>