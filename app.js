new Vue({
    el: '#vue-app',
    data: {
        health:100,
        ended:0
    },
    methods: {
        punch:function(){
            this.health-=10;
        },
        restart:function(){
            this.health = 100;
        }
    },
    computed: {
        
    }
});