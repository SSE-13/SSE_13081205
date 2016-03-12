/**
 * 基类，负责处理x,y,rotation 等属性
 */ 
class DisplayObject {

    x = 0;

    y = 0;

    rotation = 0;

    draw(context: CanvasRenderingContext2D) {
        context.save();
        context.rotate(this.rotation);
        context.translate(this.x, this.y);
        this.render(context);

        context.restore();
    }

    render(context: CanvasRenderingContext2D) {

    }

}

class Bitmap extends DisplayObject {


    source;

    render(context: CanvasRenderingContext2D) {

        var image = imagePool[this.source];
        if (image) {
            context.drawImage(image, 0, 0);
        }
        else {
            context.font = "20px Arial";
            context.fillStyle = '#000000';
            context.fillText('错误的URL', 0, 20);
        }
    }

}

class Rect extends DisplayObject {

    width = 100

    height = 100;

    color = '#FF0000';

    render(context: CanvasRenderingContext2D) {
        context.fillStyle = this.color;
        context.fillRect(0, 0, this.width, this.height);
    }
}

class TextField extends DisplayObject {

    render(context: CanvasRenderingContext2D) {
        context.font = "20px Arial";
        context.fillStyle = '#FFFFFF';
        context.fillText('HelloWorld', 0, 20);
    }
}

function drawQueue(queue) {
    for (var i = 0; i < renderQueue.length; i++) {
        var displayObject: DisplayObject = renderQueue[i];
        displayObject.draw(context);
    }
}

var imagePool = {};

function loadResource(imageList, callback) {
    var count = 0;
    imageList.forEach(function(imageUrl) {
        var image = new Image();
        image.src = imageUrl;
        image.onload = onLoadComplete;
        image.onerror = onLoadError;

        function onLoadComplete() {
            imagePool[imageUrl] = image;
            count++;
            if (count == imageList.length) {
                callback();
            }
        }
        
        function onLoadError(){
            alert('资源加载失败:' + imageUrl);
        }
    })
}


var canvas: HTMLCanvasElement = document.getElementById("game") as HTMLCanvasElement;
var context = canvas.getContext("2d");


var rect = new Rect();
rect.width = 1024;
rect.height = 576;
rect.color = '#4282fe'

var rect2 = new Rect();
rect2.width = 20;
rect2.height = 576;
rect2.color = '#000000';

var rect3 = new Rect();
rect3.width = 20;
rect3.height = 576;
rect3.x = 1004;
rect3.color = '#000000';

var text = new TextField();
text.x = 10;

var bitmap1 = new Bitmap();
bitmap1.source = 'play_icon.png';
bitmap1.x = 575;
bitmap1.y = 114;

var bitmap2 = new Bitmap();
bitmap2.source = 'options_icon.png';
bitmap2.x = 639;
bitmap2.y = 239;

var bitmap3 = new Bitmap();
bitmap3.source = 'get_songs.png';
bitmap3.x = 578;
bitmap3.y = 365;

var bitmap4= new Bitmap();
bitmap4.source = 'title_icon.png';
bitmap4.x = 130;
bitmap4.y = 26;

//渲染队列
var renderQueue = [rect, rect2, rect3, text, bitmap1, bitmap2, bitmap3, bitmap4];
//资源加载列表
var imageList = ['play_icon.png','options_icon.png','get_songs.png','title_icon.png'];

//先加载资源，加载成功之后执行渲染队列
loadResource(imageList, function() {
    drawQueue(renderQueue);
})


