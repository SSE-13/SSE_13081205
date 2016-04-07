var human = new render.DisplayObjectContainer();
human.x = -50;
human.y = -100;
var humanContainer = new render.DisplayObjectContainer();
humanContainer.addChild(human);

var head = new render.Bitmap();
head.source = "head.png";
human.addChild(head);

var trunk = new render.Bitmap();
trunk.source = "trunk.png";
human.addChild(trunk);

var left_arm = new render.Bitmap();
left_arm.source = "left_arm.png";
human.addChild(left_arm);

var right_arm = new render.Bitmap();
right_arm.source = "right_arm.png";
human.addChild(right_arm);

var left_leg = new render.Bitmap();
left_leg.source = "left_leg.png";
human.addChild(left_leg);

var right_leg = new render.Bitmap();
right_leg.source = "right_leg.png";
human.addChild(right_leg);


var renderCore = new render.RenderCore();

renderCore.start(humanContainer, ["left_arm.png","right_arm.png", "left_leg.png", "right_leg.png", "head.png", "trunk.png"]);


class HumanBody extends Body {
    
    
    vx:number = 5;
    vr = Math.PI/2;

    onTicker(duringTime: number) {
        this.x += this.vx * duringTime;
        this.rotation += Math.PI*duringTime;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.x = 200;
body.y = 100; 
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var isHead = 0;
var ClickedHead = false;

var headHitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);

    if(localPoint.x <= Math.abs(displayObject.x * 6) && localPoint.y <= Math.abs(displayObject.y)&&
    localPoint.x > 0 && localPoint.y > 0){
        isHead += 1;
        ClickedHead = true;
        
    }
    return ClickedHead;
}

var headOnClick = () => {
    //alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
     if(isHead == 1){
        if(body.vx!=0){
            body.vx *= -1;
            body.vr *= -1;
        }
        if(body.vx == 0){
            isHead = 0;
        }
        
    }

    if(isHead != 1){
        body.vx = 5;
        body.vr = Math.PI/2;
        isHead = 0;
    }
    ClickedHead = false;
   alert("clickhead:"+isHead);
}

eventCore.register(head,headHitTest,headOnClick);










