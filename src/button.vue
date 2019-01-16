<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')">
        <g-icon v-if="icon && !loading " :name="icon" class="icon"></g-icon>
        <g-icon v-if="loading" name="loading" class="loading icon"></g-icon>
        <div class="g-button-content">
                <slot></slot>
        </div>
    </button>

</template>

<script>
    import Icon from './icon'
    export default {
        name: "g-button",
        components: {
            'g-icon': Icon
        },
        props: {
            icon: {
                type: String,
               // default: 'setting'
            },
            iconPosition: {
                type: String,
                default: 'right',
                validator(value){
                    if(value !=='right'&& value!=='left'){
                        return false
                    }else {
                        return true
                    }
                }

            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid  var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            /*background: #eee;*/
            opacity: .8;
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .g-button-content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right:.1em;
        }

        &.icon-right {
            > .g-button-content {
                order: 1;
            }
            > .icon {
                margin-right: 0;
                margin-left: .1em;
                order: 2;
            }
        }
    }
    .loading {
        animation: spin 1s infinite linear;
    }

</style>
