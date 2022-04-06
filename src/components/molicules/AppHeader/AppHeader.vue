<template>
  <div>
    <header class='header-one'>
      <span class='title'>Account Balance</span>
      <img alt="pay" src="../../../assets/AspireLogo.svg"/>
    </header>
    <header class="header-two">
      <span class="box">S$</span>
      <span class="price">{{balance}}</span>
      <span class='new-card-cont'>
        <img alt="pay" src="../../../assets/box.svg"/>
        <router-link class="new-card" to = "/add-card">Add Card</router-link>
      </span>
    </header>
  </div>
</template>

<script>

export default {
  name: 'AppHeader',
  props: ['balance']
}
</script>

<style lang="scss">

.header-one {
  width: 100%;
  height: 44pt;
  padding-top: 15px;
  font-size: 14pt;
  color: #FFFFFF;

  img {
    float: right;
    width: 25pt;
    height: 25pt;
  }

  span {
    margin-left: 10pt;
  }
}

.header-two {
  height: 49pt;
  vertical-align: center;
  color: white;
  font-weight: bold;
  margin-left: 12px;

  .box {
    display: inline-block;
    background: #01D167;
    width: 40pt;
    height: 22pt;
    border-radius: 4pt;
    text-align: center;
    color: white;
    font-weight: bold;
  }

  .price {
    color: white;
    font-weight: bold;
    margin-left: 20pt;
    font-size: 14pt;
    display: inline-block;
    width: 40px;
    height: 20px;
  }

  .new-card-cont {
    margin-top: 8px;
    float: right;
    display: inline-block;

    .new-card {
      color: #23CEFD;
      margin-left: 5px;
      font-size: 10pt;
      text-decoration: none;
    }

  }
}
</style>
