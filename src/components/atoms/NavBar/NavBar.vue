<template>
  <div class='nav-bar'>
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item href="#" class="logo">
          <img alt="logo" src="../../../assets/Logo.svg"/>
        </b-nav-item>
        <b-nav-item href="#" class="logo">
          <img alt="pay" src="../../../assets/pay.svg"/>
        </b-nav-item>
        <b-nav-item href="#" class="logo">
          <img alt="payments" src="../../../assets/Payments.svg"/>
        </b-nav-item>
        <b-nav-item href="#" class="logo">
          <img alt="payments" src="../../../assets/Credit.svg"/>
        </b-nav-item>
        <b-nav-item href="#" class="logo">
          <img alt="payments" src="../../../assets/Account.svg"/>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
}
</script>

<style>
.nav-bar {
  width: 114px;
  height: 360px;
  box-shadow: 0px -4px 3px #00000014;
}

.logo {
  margin-left: 35px;
}
</style>
