<script>
import CoinTrending from "../CoinTrending/CoinTrending.vue";
import Top100 from "../Top100/Top100.vue";
import { fetchTrendingCoins, fetch100Coins } from "../../apis/coin";

export default {
  data() {
    return {
      trendingCoins: [],
      oneHundredCoins: [],
      page: 1,
      per_page: 100,
    };
  },

  components: {
    CoinTrending,
    Top100,
  },
  async beforeCreate() {
    this.trendingCoins = await fetchTrendingCoins();
    this.oneHundredCoins = await fetch100Coins({
      vs_currency: "usd",
      order: "market_cap_desc",
      per_page: this.per_page,
      page: this.page,
      sparkline: false,
    });
  },
  methods: {
    async changePage(message) {
      if (message === "next") this.page = this.page + 1;
      else this.page = this.page - 1;

      this.oneHundredCoins = await fetch100Coins({
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: this.per_page,
        page: this.page,
        sparkline: false,
      });
    },
  },
};
</script>

<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4">
      <div class="py-1 5 px-3 5 mb-5">
        <coin-trending :trendingCoins="trendingCoins" />
        <top-100 :oneHundredCoins="oneHundredCoins" />
        <div class="grid grid-cols-3 mt-3">
          <div class="col-start-3 flex items-center justify-end px-[8px] font-semibold text-[18px] text-gray-600">
            <div class="mr-3 border-[2px] px-[10px] cursor-pointer" @click="changePage('previous')">&lt;</div>
            <div class="border-[2px] px-[10px] cursor-pointer" @click="changePage('next')">&gt;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
