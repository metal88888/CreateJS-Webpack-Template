import * as createjs from 'EaselJS';

class CircleButton extends createjs.Container {
    constructor(text = '', color = '#222', radius = 40) {
        // Container のコンストラクタ呼び出し
        super();

        // プロパティを設定する
        this.text = text;
        this.radius = radius;
        this.color = color;

        // コンポーネントの初期化
        this.setup();
    }

    setup() {
        // circle のシェイプを作成
        const circle = new createjs.Shape();
        circle.graphics.beginFill(this.color).drawCircle(0, 0, this.radius);
        this.addChild(circle);

        // テキストを作成
        const txt = new createjs.Text(this.text, "20px Arial", "white");
        this.addChild(txt);

        // circle 内の中央にテキストを配置
        txt.x = txt.getMeasuredWidth() / 2 * -1;
        txt.y = txt.getMeasuredHeight() / 2 * -1;
    }
}

export default createjs.promote(CircleButton, "Container");
