<template>
  <div class="card-action-container">
    <header class='card-details-header'>
      <div class='card-action'>
        <img alt="Vue logo" src="../../../assets/freeze-card.svg"/>
        <div class='action-name'>Freeze card</div>
      </div>
      <div class='card-action'>
        <img alt="Vue logo" src="../../../assets/spend-limit.svg"/>
        <div class='action-name'>Speed limit</div>
      </div>
      <div class='card-action'>
        <img alt="Vue logo" src="../../../assets/gpay.svg"/>
        <div class='action-name'>Add to Gpay</div>
      </div>
      <div class='card-action'>
        <img alt="Vue logo" src="../../../assets/replace-card.svg"/>
        <div class='action-name'>Replace card</div>
      </div>
      <div class='card-action'>
        <img alt="Vue logo" src="../../../assets/deactivate-card.svg"/>
        <div class='action-name'>Cancel card</div>
      </div>
    </header>
  </div>
  
</template>

<script>

export default {
  name: 'CardActions',
}
</script>

<style lang="scss">
@import './CardActions'
</style>
