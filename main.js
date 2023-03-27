const app = new Vue({
  // id = app の要素内で Vue の機能が使えるように設定
  el: "#app",
  data: {
    products: [
      //1つ目
      {
        title: "【初級】機械学習",
        img: "https://web-source.kikagaku.net/ikusai-web-3-0.png",
        price: 10000,
        buyable: true,
        texts: [
          "AI技術や数学を体系的に学びたい方",
          "Python・機械学習の基礎を学びたい方",
          "AI開発の全体像を知りたい",
        ],
      },
      // 2つ目
      {
        title: "【中級】機械学習",
        img: "https://web-source.kikagaku.net/ikusai-web-3-1.png",
        price: 12500,
        buyable: true,
        texts: [
          "実践的なAI技術を学びたい方",
          "機械学習の実装力を身につけたい方",
          "AIをビジネスに活用したい方",
        ],
      },
      //3つ目
      {
        title: "【上級】機械学習",
        img: "https://web-source.kikagaku.net/ikusai-web-3-2.png",
        price: 15000,
        buyable: true,
        texts: [
          "最新手法の理論と実践を学びたい方",
          "AI開発の技術力を深めたい方",
          "独学で発展的な内容に挫折した方",
        ],
      },
    ],
  },
  methods: {
    changeBtnColor() {
      this.buyable = !this.buyable
      if (this.buyable) {
        this.btnType = "btn btn-lg btn-block btn-info"
      } else {
        this.btnType = "btn btn-lg btn-block btn-danger"
      }
    },
    toggleBuyable(index) {
      this.products[index].buyable = !this.products[index].buyable
    },
    noticeSend() {
      alert(`${this.email}に請求書を送付しました。`)
    },
  },
  computed: {
    sumPrice: function () {
      //購入可能かどうかで分岐処理
      let sum = 0
      const cartedProducts = this.products.filter((el) => {
        return el.buyable == false
      })
      cartedProducts.forEach((el) => {
        sum += el.price
      })
      return sum
    },
  },
})
