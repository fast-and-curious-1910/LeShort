const app = new Vue({
    el:'#app',
    data:{
        slug:'',
        url:'',
        created:null
    },
    methods:{
        async createURL(){
            const response = await fetch('/url',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                data:JSON.stringify({
                    url:this.url,
                    slug:this.slug
                })
            });
            this.created = await response.json()
        }
    }
})