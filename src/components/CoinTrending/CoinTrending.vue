import { RouterLink } from 'vue-router';
<template>
  <div class="my-16">
    <div class="font-bold text-[1.5rem] mb-[20px]">Xu hướng</div>
    <div class="grid grid-cols-5 gap-2">
      <div
        v-for="coin in trendingCoins"
        :key="coin.item.coin_id"
        class="h-36 p-4 mb-2 mr-2 shadow-md hover:cursor-pointer hover:shadow-xl rounded-md">
        <RouterLink :to="'/coin/' + coin.item.coin_id">
          <div class="flex">
            <span class="mr-2">
              <img :src="coin.item.small" alt="Symbol" />
            </span>
            <div class="flex">
              <span class="mr-2 font-bold">{{ coin.item.name }}</span>
              <span>({{ coin.item.symbol }})</span>
            </div>
          </div>
          <div class="italic text-[12px] mt-3">Rank: {{ coin.item.market_cap_rank }}</div>
          <div class="italic text-[12px]">Price: {{ coin.item.price_btc }} BTC</div>
        </RouterLink>
      </div>

      <div
        class="h-36 p-4 mb-2 mr-2 shadow-md hover:cursor-pointer hover:shadow-xl rounded-md"
        style="
          background-image: url(https://static.coingecko.com/s/top_categories_bg-6972db9c971f4682ce537a14f6b27eee5bcd43e64da9b7d039d539a3936c0075.png);
          background-repeat: no-repeat;
          background-size: cover;
        "></div>
      <div
        class="h-36 p-4 mb-2 mr-2 shadow-md hover:cursor-pointer hover:shadow-xl rounded-md"
        style="
          background-image: url(https://static.coingecko.com/s/recently_added_bg-5d0819d31cca2c427e7633bb5ef933896813d8d65f78e7d0fc9fc0b5d77fa045.png);
          background-repeat: no-repeat;
          background-size: cover;
        "></div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    trendingCoins: Array,
  },
};
</script>
