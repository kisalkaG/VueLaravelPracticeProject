<template>
    <div>
        <button class="abc" @click.prevent="getDetails">Click</button>

    </div>
</template>

<script>
export default {
    name:'PivotTable',
    data() {
        return {

        }

    },

    mounted() {
        // this.getDetails()
    },

    methods : {
        getDetails() {
            axios.get('/getdetails').then(response => {
                console.log(response)
            })
        }
    }
}
</script>