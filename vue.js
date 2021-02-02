new Vue({
    el: '#main',

    data: {
        index: 1,
        pokemonName: "",
        name: "",
        type: "",
        weight: "",
        height: "",
        photoUrl: ""
    },

    created(){
        console.log("index : " + this.index)
        this.homePage(1)
    },

    methods: {
        homePage: function(numPokemon){
            axios.get('https://pokeapi.co/api/v2/pokemon/'+numPokemon).then(res =>{
                this.name = res.data['forms']['0']['name']
                this.type = res.data['types']['0']['type']['name']
                this.weight = res.data['weight']
                this.height = res.data['height']
                this.photoUrl = res.data['sprites']['front_default']
                this.index = res.data['id']
            })
        },

        previousPokemon: function (){
            if (this.index <= 1){
                this.index = 151
            } else{
                this.index--
            }
            this.homePage(this.index)
            console.log("index = " + this.index)
        },

        nextPokemon: function (){
            if (this.index >= 151){
                this.index = 1
            }else{
                this.index++
            }
            this.homePage(this.index)
            console.log("index = " + this.index)
        },

        searchPokemon: function (nomPokemon){
            this.homePage(nomPokemon)
        }
    }
})
