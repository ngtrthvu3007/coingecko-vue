<template>
  <div class="grid grid-cols-6 gap-4">
    <div class="col-start-2 col-span-4">
      <div class="py-1.5 px-3.5 mb-4 flex mt-2">
        <div class="grid grid-cols-3">
          <div class="col-start-1 col-span-2 mt-5">
            <div class="ml-4 mb-2 font-bold italic">
              <span class="border bg-gray-600 px-[6px] rounded-sm text-white text-[13px]">
                Rank: #{{ coinDetail.coingecko_rank }}
              </span>
            </div>
            <div class="flex items-center">
              <span><img :src="coinDetail.image?.small" alt="Logo" class="coin_image" /></span>
              <span class="font-bold text-[18px] mr-2">{{ coinDetail.name }}</span>
              <span class="text-[16px] uppercase"> {{ coinDetail.symbol }}</span>
            </div>
            <div class="text-[1.875rem] font-bold mt-2 flex items-center">
              {{ coinPrice.current_price?.usd }} US$ <span class="text-red-500 text-[20px] ml-2"> 0.2%</span>
            </div>
            <small class="text-gray-500">{{ coinPrice.price_change_24h }}</small>
            <div class="mt-3 flex items-center text-[13px] text-gray-500">
              <div class="mr-5">
                <div class="py-3 border-b flex justify-between w-[400px]">
                  Giá trị vốn hóa thị trường
                  <span class="text-black font-semibold">{{ coinPrice.market_cap?.usd }} US$</span>
                </div>
                <div class="py-3 border-b flex justify-between">
                  KL giao dịch trong 24 giờ
                  <span class="text-black font-semibold">{{ coinPrice.total_volume?.usd }} US$</span>
                </div>
                <div class="py-3 border-b flex justify-between">
                  Định giá pha loãng hoàn toàn
                  <span class="text-black font-semibold">{{ coinPrice.market_cap?.usd }} US$</span>
                </div>
              </div>
              <div>
                <div class="py-3 border-b flex justify-between w-[400px]">
                  Cung lưu thông<span class="text-black font-semibold">{{ coinPrice.circulating_supply }} </span>
                </div>
                <div class="py-3 border-b flex justify-between">
                  Tổng cung <span class="text-black font-semibold">{{ coinPrice.total_supply }} </span>
                </div>
                <div class="py-3 border-b flex justify-between">
                  Tổng lượng cung tối đa<span class="text-black font-semibold">{{ coinPrice.max_supply ?? "~~" }}</span>
                </div>
              </div>
            </div>
            <div class="mt-10">
              <p class="font-bold text-[20px] mb-2">Giới thiệu</p>
              <div class="text-[15px] text-gray-500 leading-7">{{ coinDetail.description?.en }}</div>
            </div>
          </div>

          <div class="col-start-3 mt-[100px] pl-10 text-[13px] text-gray-500">
            <div>
              <p class="font-bold text-[20px] text-black mb-3">Thông tin</p>
              <div class="mb-7">
                <span> Trang web </span>
                <a :href="coinInfo?.homepage[0]" class="border bg-gray-200 p-[4px] rounded-lg ml-6" target="_blank"
                  ><span class="text-black font-semibold">
                    {{ coinDetail.name }}
                  </span></a
                >
              </div>
              <div class="mb-7">
                <span> Khám phá </span>
                <a
                  :href="coinInfo?.blockchain_site[0]"
                  class="border bg-gray-200 p-[4px] rounded-lg ml-6"
                  target="_blank"
                  ><span class="text-black font-semibold">
                    {{ coinInfo?.blockchain_site[0] }}
                  </span></a
                >
              </div>
              <div class="mb-7">
                <span> Cộng đồng </span>
                <a
                  :href="coinInfo?.subreddit_url"
                  class="border bg-gray-200 p-[4px] rounded-lg ml-5 mr-2"
                  target="_blank"
                  ><span class="text-black font-semibold"> Reddit </span></a
                >
                <a :href="coinInfo?.chat_url[1]" class="border bg-gray-200 p-[4px] rounded-lg" target="_blank"
                  ><span class="text-black font-semibold"> Discord </span></a
                >
              </div>
              <div class="mb-7">
                <span> Mã nguồn </span>
                <a
                  :href="coinInfo?.repos_url?.github[0]"
                  class="border bg-gray-200 p-[4px] ml-6 rounded-lg"
                  target="_blank"
                  ><span class="text-black font-semibold"> Github </span></a
                >
              </div>
            </div>
            <div class="bg-[#f3f4f6] p-[15px] rounded-lg mt-10">
              <p class="font-bold text-[20px] text-black mb-3">Công cụ chuyển đổi Ethereum</p>
              <div class="input-change-price">
                <span class="text-[20px] uppercase text-black font-semibold mr-2 pr-1 border-r"
                  >{{ coinDetail.symbol }}
                </span>
                <input type="number" v-model="inputValue" @input="calculateAndDisplayResult" />
              </div>
              <div class="input-change-price mt-3 mb-3">
                <span class="text-[20px] uppercase text-black font-semibold mr-2 pr-1 border-r">USD</span>
                <input type="number" v-model="result" />
              </div>
              <p class="font-semibold ml-2 uppercase text-[15px] text-black">
                1 {{ coinDetail.symbol }} = {{ coinPrice.current_price?.usd }} US$
              </p>
            </div>
          </div>
        </div>
      </div>
      <coin-trending :trendingCoins="trendingCoins" />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { fetchCoinDetail, fetchTrendingCoins } from "../../apis/coin";
import CoinTrending from "../CoinTrending/CoinTrending.vue";

export default {
  data() {
    return {
      coinDetail: {},
      coinPrice: {},
      coinInfo: {},
      trendingCoins: [],

      result: null,
      inputValue: null,
    };
  },
  async beforeCreate() {
    const route = useRoute();
    const id = route.params.id;

    this.coinDetail = await fetchCoinDetail(id);
    this.trendingCoins = await fetchTrendingCoins();
    this.coinPrice = this.coinDetail.market_data;
    this.coinInfo = this.coinDetail.links;
  },
  components: {
    CoinTrending,
  },
  methods: {
    calculateAndDisplayResult() {
      this.result = this.inputValue * this.coinPrice.current_price?.usd;
    },
  },
};
</script>

<style scoped>
.coin_image {
  width: 30px;
  height: 30px;
}
.input-change-price {
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
}
.input-change-price input {
  min-height: 23px;
  outline: none;
  min-width: 265px;
}
</style>
