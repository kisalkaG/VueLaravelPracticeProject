<template>
<div class="container">
    <div :class="classObject">Pet</div>
     <div :class="classObject">Pet</div>
    <button @click="change =! change">Click</button>
    <span>{{change}}</span>
    <button @click="warning =! warning">ClickClick</button>
    <span>{{warning}}</span>
    <br>
    <br>
    <br>
    
    <div :class="classObject1">{{value}}</div>
    <div :style="{fontSize:value * 10 + 'px'}">{{value}}</div>
    <button @click="value++">Add</button>
    <button @click="value--">Reduce</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            change : false,
            warning : false,
            value : 1
        }
    },

    computed: {
        classObject() {
            return {
                'red-change':this.change , 
                'blue-change':this.warning
                }
        },

        classObject1() {
            return {
                'red-change':this.value > 5 , 
                'blue-change':this.value <= 5
                }
        }
    }

}


</script>

<style>
.red-change {
    background-color: red;
}

.blue-change {
    background-color: blue;
}
</style>