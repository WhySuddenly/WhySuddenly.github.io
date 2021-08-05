var env = 'https://mock.mengxuegu.com/mock/610bfa4aeba50e3ad83d872c/api/'

new Vue({
    el: '#app',
    data: {
        name: '',
        age: ''
    },
    created: function () {
        this.getUserInfo();
    },
    methods: {
        getUserInfo: function () {
            let url = env + 'userInfo'
            axios.get(url).then(res => {
                let result = res.data
                this.name = result.data.name;
                this.age = result.data.age;
            })
        }
    }
})