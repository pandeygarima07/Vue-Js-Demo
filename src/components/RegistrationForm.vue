<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="form.email" id="email" />
        <span v-if="!$v.form.email.$pending && !$v.form.email.$model">Email is required and must be valid.</span>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="form.password" id="password" />
        <span v-if="!$v.form.password.$pending && !$v.form.password.$model">Password is required and must be at least 6 characters long.</span>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" v-model="form.confirmPassword" id="confirmPassword" />
        <span v-if="!$v.form.confirmPassword.$pending && !$v.form.confirmPassword.$model">Passwords must match.</span>
      </div>

      <button type="submit" :disabled="$v.$invalid">Register</button>
    </form>
  </div>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import { validationMixin } from 'vuelidate'

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs('password') }
    }
  },
  methods: {
    handleSubmit() {
      this.$v.$touch()
      if (this.$v.$invalid) return

      // Handle form submission
      alert('Registration successful!')
    }
  }
}
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 1em;
}
label {
  display: block;
  margin-bottom: 0.5em;
}
input {
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
}
button {
  padding: 0.5em 1em;
}
span {
  color: red;
  font-size: 0.875em;
}
</style>
