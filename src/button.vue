<template>
    <div>
        <button class="g-button">你好</button>
    </div>
</template>

<script>
    export default {
        // name: "button"
    }
</script>

<style scoped lang="scss">
    .g-button {
        padding: 0 1em;
        height: var(--button-height);
        font-size: var(--font-size);
        background: var(--button-bg);
        border-radius: var(--border-radius);
        color: var(--color);
        border: 1px solid  var(--border-color);
        &:hover {
            background: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>
