<template>
    <div> name: {{ userInfo.username }} {{ text }} </div>
</template>
<script>
    import commonMixin from 'mixins/common';
    export default {
        mixins: [commonMixin],
        data () {
            return {
                text: '12345'
            };
        },
        mounted () {
        }
    };
</script>