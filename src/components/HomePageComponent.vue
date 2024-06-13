<template>

    <form class="homepage">
        <label>Username</label>
        <input type="text" v-model="username" placeholder="Enter username" >
        <label>password</label>
        <input type="password" v-model="password" placeholder="Enter password">
        <button    type="submit" class="btn btn-success shadow-lg">Submit</button>
        
    </form>
   
</template>

<script>
export default {
   data()
   {
    return{
        username:'',
        password:''
    };
   },
   methods:{
    handleSubmit(){
        console.log('Username:', this.usename);
        console.log('Password:',this.password);
        this.navigateTo('Submit');
    },
navigateTo(page) {
      // Implement navigation logic here
      console.log('Navigating to:', page);
      // For example, you might use Vue Router to navigate
      // this.$router.push({ name: page });
    }
    }
   }

</script>

<style scoped>
@import'~bootstrap/dist/css/bootstrap.css';

.homepage {margin-top: 150px;}
    label {
  
  
    margin-top: 10px;
    margin-bottom: 5px;
    text-align: center;
    color: #555;
    font-weight: bold;
}

input {

    width: 10%;
    padding-left: 35%;
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    display: block;
             margin : 0 auto;
}

   button{
    margin-top: 1%;
   } 



</style>