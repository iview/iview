<template>
    <div>
        <div class="demo-split">
            <Split v-model="split1">
                <div slot="left" class="demo-split-pane">
                    左边面板
                </div>
                <div slot="right" class="demo-split-pane">
                    右边面板
                </div>
            </Split>
        </div>
        <div class="demo-split">
            <Split v-model="split1" mode="vertical">
                <div slot="left" class="demo-split-pane">
                    左边面板
                </div>
                <div slot="right" class="demo-split-pane">
                    右边面板
                </div>
            </Split>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'split_pane_page',
        data () {
            return {
                offset: 0.6,
                offsetVertical: '250px',
                split1: 0.5
            }
        },
        methods: {
            handleMoving (e) {
                console.log(e.atMin, e.atMax)
            }
        }
    }
</script>

<style lang="less">
    .center-middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .split-pane-page-wrapper {
        height: 600px;
        .pane {
            width: 100%;
            height: 100%;
            &.left-pane {
                background: sandybrown;
            }
            &.right-pane {
                background: palevioletred;
            }
            &.top-pane {
                background: sandybrown;
            }
            &.bottom-pane {
                background: palevioletred;
            }
        }
        .custom-trigger {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            .center-middle;
            box-shadow: 0 0 6px 0 rgba(28, 36, 56, 0.4);
            cursor: row-resize;
            i.trigger-icon {
                .center-middle;
            }
        }
    }
</style>
<style>
    .demo-split{
        height: 300px;
        border: 1px solid #dddee1;
    }
</style>