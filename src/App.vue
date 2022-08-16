<template>
    <div id="app">
        <main class="main">
            <div class="container">
                <Main/>
            </div>
        </main>
    </div>
</template>

<script>

    import Main from "@/components/Main";

    export default {
        components: {Main}
    }
</script>

<style lang="scss">
    @font-face {
        font-family: $fontFamily;
        src: url('fonts/SourceSansPro-Regular.ttf');
    }

    @font-face {
        font-family: $fontFamily;
        src: url('fonts/SourceSansPro-SemiBold.ttf');
    }

    * {
        font-family: $fontFamily;
        margin: 0;
        padding: 0;
    }

    body, html {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        background: $backgroundColor;
    }

    .container {
        width: 1920px;
        margin: 0 auto;
        padding: 20px;
    }
</style>
