<template>
    <header>
        <tLogo></tLogo>
        <tNav></tNav>
        <tSetbutton></tSetbutton>
    </header>
</template>

<script setup>
import tLogo from '@/components/header/modules/logo.vue'
import tNav from '@/components/header/modules/nav.vue'
import tSetbutton from '@/components/header/modules/setbutton.vue'
</script>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    -webkit-app-region: drag;
    box-shadow: 0px -1px 0px #77777733 inset;
    width: 100%;
    height: 60px;
}
</style>