<template>
  <div class="border-b">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <div class="h-14 flex text-[11px] items-center py-1.5 px-3.5 justify-between">
          <div class="flex">
            <div class="mr-4">
              <span>Tiền ảo: </span>
              <span class="text-blue-500">10023</span>
            </div>
            <div class="mr-4">
              <span>Sàn giao dịch: </span>
              <span class="text-blue-500">798</span>
            </div>
            <div class="mr-4">
              <span>Giá trị vốn hóa thị trường: </span>
              <span class="text-blue-500">1.196.733.390.407 US$</span>
            </div>
            <div class="mr-4">
              <span>Lưu lượng 24 giờ: </span>
              <span class="text-blue-500">37.310.963.571 US$</span>
            </div>
            <div class="mr-4">
              <span>Ưu thế: </span>
              <span class="text-blue-500 mr-1.5">BTC 47,0% </span>
              <span class="text-blue-500"> ETH 18,2%</span>
            </div>
          </div>
          <div class="flex text-[13px]">
            <div class="mr-4">
              <select>
                <option value="usd">USD</option>
                <option value="vnd">VND</option>
              </select>
            </div>
            <div class="cursor-pointer">Dark mode</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-b">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-start-2 col-span-4">
        <div class="h-[75px] flex items-center py-1.5 px-3.5 justify-between">
          <div class="flex text-[0.875rem] font-medium items-center">
            <RouterLink to="/">
              <img
                class="w-[150px] h-[40px] mr-[30px] cursor-pointer"
                alt="CoinGecko Logo"
                src="https://static.coingecko.com/s/coingecko-logo-8903d34ce19ca4be1c81f0db30e924154750d208683fad7ae6f2ce06c76d0a56.png" />
            </RouterLink>
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">Tiền mã hóa</div>
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">Sàn giao dịch</div>
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">NFT</div>
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">Tìm hiểu về tiền mã hóa</div>
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">Sản phẩm</div>
          </div>
          <div class="flex text-[13px] items-center">
            <div class="mr-[24px] cursor-pointer hover:text-[#8bc53f]">Đăng nhập</div>
            <div>
              <button
                class="mr-[24px] text-white font-medium bg-[#8bc53f] px-1.5 py-[6px] rounded cursor-pointer hover:bg-[#69a235]">
                Đăng ký tài khoản
              </button>
            </div>
            <div>
              <input
                class="bg-[#f3f4f6] w-[9rem] py-[0.625rem] px-[0.75rem] rounded outline-none"
                placeholder="Tìm kiếm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>
