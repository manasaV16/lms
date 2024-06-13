<template>

    <div class="homepage">
        <header class="header">
            <ul class="main-nav-list">
                <li><a class="main-nav-link1" href="#">Sl</a></li>
            </ul>
            <ul class="main-nav-list">
                <li><a class="main-nav-link" href="#">Home</a></li>
                <li><a class="main-nav-link" href="#">Catalog</a></li>
                <li><a class="main-nav-link" href="#">Login</a></li>
            </ul>
        </header>
        <div> <img src="@/assets/library.jpg" class="img-logo  " alt="Logo">
            <p>Welcome to Sunnyvale Library Applicatiopn</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePageComponent'
}
</script>

<style scoped>
@import'~bootstrap/dist/css/bootstrap.css';

.homepage {
    background-color:rosybrown;
    min-height: 100vh;
}

.header {

    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(77, 161, 180);
    padding: 10px 20px;
}

.img-logo {
    max-width: 150px;
   
    height: auto;
    padding-top: 10%;
}

.main-nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 3.8rem;
}

.main-nav-link1,
.main-nav-link {
    text-decoration: none;
    color:white;
    font-weight: bold;
    font-size: 1.8rem;
    transition: all 0.3s;
}

.main-nav-link1:hover,
.main-nav-link:hover {
    text-decoration: underline;
}

p {
    text-align: center;
    padding-top: 1%;
    color: black;
    font-size: larger;
}
</style>