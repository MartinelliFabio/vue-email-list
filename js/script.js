const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            arrayEmail: []
        }
    },
    methods: {
        // Metodo per chiamare l'API delle email random
        callApi() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                console.log(res.data.response);
                this.arrayEmail.push(res.data.response);
            })
        },
        // Metodo per pulire l'array e generare di nuovo le 10 email
        createArray() {
            this.arrayEmail.splice(0);
            for(let i = 0; i < 10; i++) {
                this.callApi();
            }
        }
    },
    // Mounted per ciclare e stampare 10 email nel DOM
    mounted() {
        for(let i = 0; i < 10; i++) {
            this.callApi();
        }
    }
}).mount('#app');