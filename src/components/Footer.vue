<template>
    <footer class="footer-container">
        <div class="links">
            <a href="https://github.com/jakeBlackburn">gihub</a>
            <a href="mailto:jakeblackburnn@gmail.com">email</a>
            <a href="https://www.linkedin.com/in/jake-blackburn-53a94b246/">linkedin</a>
        </div>
    </footer>
</template>

<style scoped>
.footer-container {
    height: 300px;
    background: linear-gradient(0deg, pink, rgb(84, 48, 127));
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
    text-shadow: 2px 2px hotpink;
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