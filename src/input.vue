<template>
    <div class="wrapper" :class="{error}">
        <input
                v-bind:value="value"
                :disabled="disabled"
                :readonly="readonly"
                type="text">
        <template>
            <icon name="error" v-if="error" class="icon-error"></icon>
            <span class="error-message">{{error}}</span>
        </template>
        <template>
            <icon name="info" v-if="info" class="icon-info"></icon>
            <span class="info-message">{{info}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
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
            },
            error: {
              type: String
            },
            info: {
              type: String
            }
        },
        components: {
            Icon
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
    $error-color: #F1435D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > * {
            margin-right: .3em;
            &:last-child{
                margin-right: 0;
            }
        }
        > input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: $input-padding;font-size: inherit;
            &:hover {border-color: $border-color-hover;}
            &:focus {outline: none;box-shadow: inset 0 1px 3px $box-shadow-color;}
            &[disabled]{color: $input-disabled-color;cursor: not-allowed;border-color: $input-disabled-color;}
            &[readonly]{box-shadow: none; /*cursor: not-allowed;*/}
        }
        &.error {
            > input {border: 1px solid $error-color;}
        }
        
        .icon-error {fill: $error-color;}
        .error-message {color: $error-color;}
        .icon-info {fill: #46a0fc;}

    }
</style>
