<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
            <span class="expand-key">职业：</span>
            <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">兴趣：</span>
            <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">生日：</span>
            <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
            <span class="expand-key">最喜欢的书：</span>
            <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
            <span class="expand-key">最喜欢的电影：</span>
            <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
            <span class="expand-key">最喜欢的音乐：</span>
            <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        props: {
            row: Object
        }
    };
</script>