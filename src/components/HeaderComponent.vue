<script>
export default {

}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center px-5">
        <div>
            <router-link :to="{ name: 'home' }" class="nav-link">Boolfolio</router-link>
        </div>
        <nav>
            <ul>
                <li class="me-3">
                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'blog' }" class="nav-link">Blog</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    height: 70px;
    background-color: antiquewhite;
}

header div {
    font-size: 3em;
    text-align: center;
}

header nav ul li {
    display: inline-block;
    list-style-type: none;
}
</style>