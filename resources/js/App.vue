<template>
    <div>
     <router-view />
    </div>
        
</template>

<script>
export default {
    name: "App",

    mounted() {
        if(this.$router.name == "dashboard" || this.$router.name == "/" ) {
        this.$router.push({
            path: "/dashboard",
        }).catch(()=>{});
        }
    }
}
</script>