<template>
    <div id="app">
        <main class="main">
            <div class="container">
            </div>
        </main>
    </div>
</template>

<script>

    export default {}
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
