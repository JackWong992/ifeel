<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "g-button-group",
        //检测button-group的子元素
        mounted() {
            for( let node of this.$el.children){
                let name = node.nodeName.toLocaleLowerCase()
                if(name !== 'button'){
                    console.warn(`button-group的子元素应该为button,而您输入的为${name}`)
                }
            }

        }
    }
</script>

<style scoped lang="scss">
    .button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child {
                border-left: 1px solid var(--border-color);
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:last-child {
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
