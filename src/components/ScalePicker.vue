<template>
    <div class="size-picker">
        <btn icon outline style="z-index: 1" :selected="scale === 0" @click="update(0)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48">
                <path
                    d="M40,38c0,-1.105 -0.895,-2 -2,-2c-5.745,0 -22.255,0 -28,0c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c5.745,0 22.255,0 28,0c1.105,0 2,-0.895 2,-2c0,0 0,0 0,0Zm0,-20c0,-1.105 -0.895,-2 -2,-2c-5.745,0 -22.255,0 -28,0c-1.105,0 -2,0.895 -2,2c0,3.074 0,8.926 0,12c0,1.105 0.895,2 2,2c5.745,0 22.255,0 28,0c1.105,0 2,-0.895 2,-2c0,-3.074 0,-8.926 0,-12Zm0,-8c0,-1.105 -0.895,-2 -2,-2c-5.745,0 -22.255,0 -28,0c-1.105,0 -2,0.895 -2,2c0,1.105 0.895,2 2,2c5.745,0 22.255,0 28,0c1.105,0 2,-0.895 2,-2c0,0 0,0 0,0Z"
                />
            </svg>
        </btn>
        <btn icon outline style="z-index: 2" :selected="scale === 1" @click="update(1)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48">
                <path
                    d="M22,10c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.661,0 -7.339,0 -10,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.661 0,7.339 0,10c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.661,0 7.339,0 10,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-10Z"
                />
                <path
                    d="M22,28c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.661,0 -7.339,0 -10,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.661 0,7.339 0,10c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.661,0 7.339,0 10,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-10Z"
                />
                <path
                    d="M40,10c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.661,0 -7.339,0 -10,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.661 0,7.339 0,10c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.661,0 7.339,0 10,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-10Z"
                />
                <path
                    d="M40,28c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.661,0 -7.339,0 -10,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.661 0,7.339 0,10c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.661,0 7.339,0 10,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-10Z"
                />
            </svg>
        </btn>
        <btn icon outline style="z-index: 3" :selected="scale === 2" @click="update(2)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 48 48">
                <path
                    d="M16,8c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M29,8c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M42,8c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M16,21c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M29,21c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M42,21c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M16,34c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M29,34c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
                <path
                    d="M42,34c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586l-6,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414l0,6c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586l6,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414l0,-6Z"
                />
            </svg>
        </btn>
    </div>
</template>

<script>
import Btn from 'src/components/Btn.vue';

export default {
    name: 'ScalePicker',
    components: {
        Btn,
    },
    computed: {
        scale() {
            return this.$store.state.scale;
        },
    },
    methods: {
        update(scale) {
            this.$store.dispatch('setScale', scale);
            this.$store.dispatch('toggleDrawer', false);
        },
        onResize() {
            if (!window.matchMedia('(min-width: 768px)').matches && this.scale > 1) {
                this.$store.dispatch('setScale', 1);
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.onResize);
    },
    destroyed() {
        window.removeEventListener('resize', this.onResize);
    },
};
</script>

<style scoped lang="scss">
@use "src/styles/shape";
@use "src/styles/color";
@use "src/styles/responsive" as r;

.size-picker {
    display: flex;
    border-radius: shape.$radius;

    .btn {
        &:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &:not(:first-child) {
            margin-left: -2px;
        }

        &:focus-visible {
            z-index: 4 !important;
        }
    }

    @include r.md {
        .btn {
            &:not(:first-child):not(:last-child) {
                border-radius: 0;
            }

            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
        }
    }

    @include r.lt-md {
        .btn {
            &:nth-child(2) {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            &:nth-child(n + 3) {
                display: none;
            }
        }
    }
}
</style>
