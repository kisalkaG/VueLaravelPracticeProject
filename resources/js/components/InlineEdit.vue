<template>
    <div class="container">
        <button class="primary" @click.prevent="addRow">Add</button>

        <br>
         <br>
        <pre>{{items}}</pre>
        <div v-for="(item,index) in items" :key="index">
            <form>
               Name: <input type="text" name="Name" v-model="item.name" >
               Address: <input type="text" name="address" v-model="item.address">
                Phone No: <input type="text" name="phoneNo" v-model="item.phoneNo" >
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items:[],
            id:0

        }
    },

    methods: {
        addRow() {   
              this.items.push( 
               {
                   id:this.id,
                   name:'',
                   address:'',
                   phoneNo:''
               }
           )
           this.id++
               

        }
    }
}

</script>