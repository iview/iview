<template>
    <ul :class="[prefixCls + '-list']">
        <li
            v-for="file in files"
            :class="fileCls(file)"
            @click="handleClick(file)">
            <span @click="handlePreview(file)">
                <Icon :type="format(file)"></Icon> {{ file.name }}
            </span>
            <Icon
                type="ios-close-empty"
                :class="[prefixCls + '-list-remove']"
                v-show="file.status === 'finished'"
                @click.native="handleRemove(file)"></Icon>
            <transition name="fade">
                <i-progress
                    v-if="file.showProgress"
                    :stroke-width="2"
                    :percent="parsePercentage(file.percentage)"
                    :status="file.status === 'finished' && file.showProgress ? 'success' : 'normal'"></i-progress>
            </transition>
        </li>
    </ul>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import iProgress from '../progress/progress.vue';
    const prefixCls = 'ivu-upload';

    export default {
        name: 'UploadList',
        components: { Icon, iProgress },
        props: {
            files: {
                type: Array,
                default() {
                    return [];
                }
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        methods: {
            fileCls (file) {
                return [
                    `${prefixCls}-list-file`,
                    {
                        [`${prefixCls}-list-file-finish`]: file.status === 'finished'
                    }
                ];
            },
            handleClick (file) {
                this.$emit('on-file-click', file);
            },
            handlePreview (file) {
                this.$emit('on-file-preview', file);
            },
            handleRemove (file) {
                this.$emit('on-file-remove', file);
            },
            format (file) {
                const format = file.name.split('.').pop().toLocaleLowerCase() || '';
                let type = 'document';

                if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
                    type = 'image';
                }
                if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
                    type = 'ios-film';
                }
                if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
                    type = 'ios-musical-notes';
                }
                if (['doc','txt','docx','pages','epub','pdf'].indexOf(format) > -1) {
                    type = 'document-text';
                }
                if (['numbers','csv','xls','xlsx'].indexOf(format) > -1) {
                    type = 'stats-bars';
                }
                if (['keynote','ppt','pptx'].indexOf(format) > -1) {
                    type = 'ios-videocam';
                }

                return type;
            },
            parsePercentage (val) {
                return parseInt(val, 10);
            }
        }
    };
</script>