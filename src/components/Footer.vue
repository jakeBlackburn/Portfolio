<template>
    <footer class="footer-container">
        <div class="links">
            <a href="https://github.com/jakeBlackburn">github</a>
            <a href="mailto:jakeblackburnn@gmail.com">email</a>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    height: 250px;
    background-color: rgb(84, 48, 127);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.links {
    margin: 0 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

a {
    font-family: Teko;
    font-size: 2rem;
    text-decoration: none;
    color: wheat;
    padding: 10px 30px;
    border-radius: 5px;
}

a:hover {
    background-color: rgba(0, 255, 255, 0.3);
}

@media screen and (max-width: 500px) {
    a {
        font-size: 1rem;
    }

    .footer-container {
        height: 200px;
    }
}
</style>