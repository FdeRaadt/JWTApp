<template>
    <div class="container">

        <div class="card">
            <div class="card-header">
               Register
            </div>
            <div class="card-body">
                <form @submit.prevent="register">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" name="name" class="form-control" v-model="user.name">
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" name="email" class="form-control" v-model="user.email">
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" name="password" class="form-control" v-model="user.password">
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        
        methods: {
            register() {
                this.axios
                    .post('api/register', {
                        name: this.user.name,
                        email: this.user.email,
                        password: this.user.password
                    })

                    // 
                    .then(response => {
                        console.log(response),
                            this.$router.push({
                                name: 'login'
                            })
                    })  
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }

    }

</script>
