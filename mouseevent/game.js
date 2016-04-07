var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
renderCore.start(humanContainer, ["left_arm.png", "right_arm.png", "left_leg.png", "right_leg.png", "head.png", "trunk.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vx = 5;
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x += this.vx * duringTime;
        this.y = 100;
        this.rotation += Math.PI * duringTime;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.x = 200;
body.y = 100;
ticker.start([body]);
var eventCore = new events.EventCore();
eventCore.init();
var headHitTest = function (localPoint, displayObject) {
    alert("\u70B9\u51FB\u4F4D\u7F6E\u4E3A" + localPoint.x + "," + localPoint.y);
    return true;
};
var headOnClick = function () {
    alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
};
eventCore.register(head, headHitTest, headOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ2hELEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDZCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO0FBQ2YsSUFBSSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUN6RCxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9CLElBQUksSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO0FBQ3pCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFDM0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUV0QixJQUFJLFFBQVEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNuQyxRQUFRLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztBQUNqQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRXpCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO0FBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFMUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkMsUUFBUSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7QUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV6QixJQUFJLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwQyxTQUFTLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztBQUNuQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRzFCLElBQUksVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRXpDLFVBQVUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsY0FBYyxFQUFDLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBRzdIO0lBQXdCLDZCQUFJO0lBQTVCO1FBQXdCLDhCQUFJO1FBR3hCLE9BQUUsR0FBVSxDQUFDLENBQUM7SUFTbEIsQ0FBQztJQU5HLDRCQUFRLEdBQVIsVUFBUyxVQUFrQjtRQUN2QixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsRUFBRSxHQUFDLFVBQVUsQ0FBQztJQUV4QyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBd0IsSUFBSSxHQVkzQjtBQUVELElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFDMUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDYixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUNiLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBR3JCLElBQUksU0FBUyxHQUFHLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVqQixJQUFJLFdBQVcsR0FBRyxVQUFDLFVBQXFCLEVBQUMsYUFBa0M7SUFDdkUsS0FBSyxDQUFFLG1DQUFRLFVBQVUsQ0FBQyxDQUFDLFNBQUksVUFBVSxDQUFDLENBQUcsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQyxDQUFBO0FBRUQsSUFBSSxXQUFXLEdBQUc7SUFDZCxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIseUJBQXlCO0FBQzdCLENBQUMsQ0FBQTtBQUVELFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsQ0FBQyJ9