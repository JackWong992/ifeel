<template>
    <div class="wrapper">
        <input
                v-bind:value="value"
                :disabled="disabled"
                :readonly="readonly"
                type="text">
    </div>
</template>

<script>
    export default {
        name: 'g-input',
        props: {
            value: {
              type: String
            },
            disabled: {
              type: Boolean,
              default: false
            },
            readonly: {
              type: Boolean,
              default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0,0,0,.5);
    $input-padding: 0 8px;
    $input-disabled-color: #bbb;
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: $input-padding;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled]{
                color: $input-disabled-color;
                cursor: not-allowed;
                border-color: $input-disabled-color;
            }
            &[readonly]{
                box-shadow: none;
                /*cursor: not-allowed;*/
            }
        }
    }
</style>
