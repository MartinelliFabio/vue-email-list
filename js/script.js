const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            arrayEmail: []
        }
    },
    methods: {
        callApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                console.log(res.data.response);
                this.arrayEmail.push(res.data.response);
            })
        }
    },
    mounted() {
        for(let i = 0; i < 10; i++) {
            this.callApi();
        }
    }
}).mount('#app');