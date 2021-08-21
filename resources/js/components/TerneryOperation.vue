<template>
    <div class="container">       
        <pre>{{beverage}}</pre>
         <!-- <pre>{{greeting}}</pre>    -->
         <pre>{{result}}</pre>    
    </div>
</template>

<script>
export default {
    data() {
        return {
           beverage:'',
        //    greeting:'',
        result:''
           
        }
    },

    mounted() {
       this.terneryOperation1()
  this.terneryOperation2()
    },

    methods:{
        terneryOperation1() {
             var age = 25;
        this.beverage = (age>=30)? 'beer':'fruit juice';
        console.log(beverage)      
        },

        // handleNullValues() {
        //     alert(1)
        //     this.greeting = person => {
        //         let name = person? person.name:'stranger'
        //         return `Howdy, ${name}`
        //     }
        //     console.log(greeting({name: `Alice`}));
        //     console.log(greeting(null));
        // }

        terneryOperation2(){
        var number = 10;
        this.result = (number === 0) ? 'Empty':((number <= 5) ? 'little':'Fill')
    }
     
    },

    
}
</script>