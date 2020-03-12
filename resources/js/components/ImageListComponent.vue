<template>
  <div class="container">
    <div class="grid">
      <!-- <div v-for="n in 10" :key=n>
        <img src="/storage/images/cat01.jpg" alt="" class="imgwidth">
      </div> -->
      <div v-for="n in 9" :key=n>
        <div id="modal">
          <div v-on:click="openModal" class="modal_btn">
            <img src="/storage/images/cat01.jpg" alt="" class="imgwidth">
          </div>
          <div class="overlay" v-show="showContent" v-on:click="closeModal">
            <div class="content" v-on:click="stopEvent">
              <p><img src="/storage/images/cat01.jpg" alt="" class="imgwidth"></p>
              <p><button v-on:click="closeModal">close</button></p>
            </div>
          </div>
        </div>
      </div>
      <div class="sample">sample</div>
      <div class="sample">sample</div>
      <div class="sample">sample</div>
      <div class="sample">sample</div>

    </div>
    <!-- <div id="modal">
      <div v-on:click="openModal">
        <img src="/storage/images/cat01.jpg" alt="" class="imgwidth">
      </div>
      <div id="overlay" v-show="showContent" v-on:click="closeModal">
        <div id="content" v-on:click="stopEvent">
          <p><img src="/storage/images/cat01.jpg" alt="" class="imgwidth"></p>
          <p><button v-on:click="closeModal">close</button></p>
        </div>
      </div>
    </div> -->
  </div>
  
</template>

<script>
export default {
    data: function () {
        return {
            showContent: false,
        }
    },
    methods: {
      openModal: function(){
        // this.showContent = true;
      },
      closeModal: function(){
        // this.showContent = false
      },
      stopEvent: function(){
        // event.stopPropagation()
      }
    },
    mounted: function() {
      $('.modal_btn').click(function() {
        var btnIndex = $(".modal_btn").index(this);
        console.log(btnIndex);
        $('.overlay').eq(btnIndex).fadeIn();
      });

      $('.overlay button,.overlay').click(function(){
        $('.overlay').fadeOut(); // モーダルを非表示にする
      });

      $('.content').click(function (event) {
        // ウィンドウの中身をクリックしても、閉じないようにする
        event.stopPropagation();
      });

      $('.sample').click(function() {
        var btnIndex = $(".sample").index(this);
        console.log(btnIndex);
      });
     
    }
}


</script>
<style>
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 31%);
}
.imgwidth{
  max-width:100%;
}

.overlay{
  /*要素を重ねた時の順番*/
  z-index:1;
  /*画面全体を覆う設定*/
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.1);
  /*画面の中央に要素を表示させる設定*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
</style>