<template>

        <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
            <!--<svg class="icon" v-if="icon">-->
                <!--<use :xlink:href=`#i-${icon}`></use>-->
            <!--</svg>-->
            <g-icon v-if="icon" :name="icon"></g-icon>
            <div class="content">
                <slot></slot>
            </div>
        </button>

</template>

<script>
    export default {
        // name: "button"
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

            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        padding: 0 1em;
        height: var(--button-height);
        font-size: var(--font-size);
        background: var(--button-bg);
        border-radius: var(--border-radius);
        color: var(--color);
        border: 1px solid  var(--border-color);
        &:hover {
            /*background: var(--border-color-hover);*/
            opacity: .8;
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        &.icon-right {
            > .content {
                order: 1;
            }
            > .icon {
                margin-right: 0;
                margin-left: .3em;
                order: 2;
            }
        }
    }
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
