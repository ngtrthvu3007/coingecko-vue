<template>
  <div class="flex items-center justify-between">
    <div class="font-bold text-[1.5rem] mb-[20px]">Top 100 theo vốn hóa thị trường</div>
    <div class="mb-[20px]">
      <input type="text" placeholder="Nhập tên tiền mã hóa" class="input-search" />
    </div>
  </div>
  <div>
    <div class="table-box">
      <div class="table-main">
        <div class="table-header">
          <div class="coin-name text-[14px] font-bold">Tên</div>
          <div class="text-[14px] font-bold">24h</div>
          <div class="text-[14px] font-bold">Giá</div>
          <div class="text-[14px] font-bold">Khối lượng 24h</div>
          <div class="text-[14px] font-bold">Vốn hóa</div>
          <div class="text-[14px] font-bold">Tổng cung lưu hành</div>
        </div>
        <div class="table-body">
          <div v-for="coin in oneHundredCoins" :key="coin.id" class="table-content">
            <div class="coin-content hover:bg-[#f2f2f2]">
              <RouterLink :to="'/coin/' + coin.id">
                <div class="coin-name flex items-center cursor-pointer">
                  <span><img :src="coin.image" alt="{{ coin.symbol }}" class="coin-image" /></span>
                  <span class="uppercase text-[15px] font-bold mx-2 hover:text-[#8bc53f]">{{ coin.symbol }}</span>
                  <span class="text-[15px] text-gray-500 hover:text-[#8bc53f]">{{ coin.name }}</span>
                </div>
              </RouterLink>
              <div>{{ coin.price_change_percentage_24h }}</div>
              <div>{{ coin.current_price }}</div>
              <div>{{ coin.market_cap_change_24h }}</div>
              <div>{{ coin.market_cap }}</div>
              <div>{{ coin.circulating_supply }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    oneHundredCoins: Array,
  },
};
</script>
<style scoped>
.table-box {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 120px;
  margin-bottom: -120px;
}
.table-main {
  box-sizing: border-box;
  margin: 0;
  min-width: 1092px;
}
.table-header {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  padding-right: 16px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #eaecef;
  border-radius: 4px 4px 0px 0px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #e5e5e5;
  border-bottom: none;
  padding-left: 16px;
  max-height: 40px;
}
.table-content {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 64px;
}
.coin-name {
  width: 300px;
  min-width: 0;
  box-sizing: border-box;
  margin: 0;
}
.coin-content {
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  padding-right: 16px;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid;
  border-color: #eaecef;
  border-radius: 4px 4px 0px 0px;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;

  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #1e2329;
  padding-left: 16px;
}
.coin-image {
  width: 40px;
  height: 40px;
}
.input-search {
  border: 1px solid #f2f2f2;
  width: 250px;
  height: 40px;
  padding-left: 5px;
  border-radius: 5px;
  outline: none;
}
</style>
