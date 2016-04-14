var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var game;
(function (game) {
    var GRID_PIXEL_WIDTH = 50;
    var GRID_PIXEL_HEIGHT = 50;
    var NUM_ROWS = 12;
    var NUM_COLS = 12;
    var WorldMap = (function (_super) {
        __extends(WorldMap, _super);
        function WorldMap() {
            _super.call(this);
            var grid = new astar.Grid(NUM_COLS, NUM_ROWS);
            this.grid = grid;
            grid.setWalkable(5, 0, false);
            grid.setWalkable(5, 1, false);
            grid.setWalkable(5, 2, false);
            grid.setWalkable(5, 3, false);
            grid.setWalkable(5, 4, false);
            grid.setWalkable(5, 5, false);
        }
        WorldMap.prototype.render = function (context) {
            //context.fillStyle = '#0000FF';
            context.strokeStyle = '#FF0000';
            context.beginPath();
            for (var i = 0; i < NUM_COLS; i++) {
                for (var j = 0; j < NUM_ROWS; j++) {
                    if (!this.grid.getNode(i, j).walkable) {
                        context.fillRect(i * GRID_PIXEL_WIDTH, (j - 1) * GRID_PIXEL_HEIGHT, GRID_PIXEL_WIDTH, GRID_PIXEL_HEIGHT);
                        context.fillRect(i * GRID_PIXEL_WIDTH, j * GRID_PIXEL_HEIGHT, GRID_PIXEL_WIDTH, GRID_PIXEL_HEIGHT);
                        context.fillStyle = '#000000';
                    }
                    else {
                        context.rect(i * GRID_PIXEL_WIDTH, j * GRID_PIXEL_HEIGHT, GRID_PIXEL_WIDTH, GRID_PIXEL_HEIGHT);
                        context.fillStyle = '#0000FF';
                    }
                    context.fill();
                    context.stroke();
                }
            }
            context.closePath();
        };
        return WorldMap;
    }(DisplayObject));
    game.WorldMap = WorldMap;
    var BoyShape = (function (_super) {
        __extends(BoyShape, _super);
        function BoyShape() {
            _super.apply(this, arguments);
        }
        BoyShape.prototype.render = function (context) {
            context.beginPath();
            context.fillStyle = '#00FFFF';
            context.arc(GRID_PIXEL_WIDTH / 2, GRID_PIXEL_HEIGHT / 2, Math.min(GRID_PIXEL_WIDTH, GRID_PIXEL_HEIGHT) / 2 - 5, 0, Math.PI * 2);
            context.fill();
            context.closePath();
        };
        return BoyShape;
    }(DisplayObject));
    game.BoyShape = BoyShape;
    var BoyBody = (function (_super) {
        __extends(BoyBody, _super);
        function BoyBody() {
            _super.apply(this, arguments);
            this._Position = new Array(2);
            this._Step = 1;
        }
        BoyBody.prototype.run = function (grid) {
            for (var i = 0; i < 2; i++) {
                this._Position[i] = new Array;
            }
            grid.setStartNode(0, 0);
            grid.setEndNode(10, 8);
            this.Path = new astar.AStar();
            this.Path.setHeurisitic(this.Path.diagonal);
            var result = this.Path.findPath(grid);
            var path = this.Path._path;
            for (var i = 1; i < this.Path._path.length; i++) {
                this._Position[0][i] = this.Path._path[i].x - this.Path._path[i - 1].x;
                this._Position[1][i] = this.Path._path[i].y - this.Path._path[i - 1].y;
            }
            console.log(path);
            console.log(grid.toString());
        };
        BoyBody.prototype.onTicker = function (duringTime) {
            if (this.x < NUM_ROWS * GRID_PIXEL_WIDTH && this.y < NUM_COLS * GRID_PIXEL_HEIGHT) {
                if (this._Step <= this.Path._path.length) {
                    this.x += this._Position[0][this._Step] * GRID_PIXEL_WIDTH;
                    this.y += this._Position[1][this._Step] * GRID_PIXEL_HEIGHT;
                    this._Step++;
                }
            }
        };
        return BoyBody;
    }(Body));
    game.BoyBody = BoyBody;
})(game || (game = {}));
var boyShape = new game.BoyShape();
var world = new game.WorldMap();
var body = new game.BoyBody(boyShape);
body.run(world.grid);
body.vx = 15;
body.vy = 15;
var renderCore = new RenderCore();
renderCore.start([world, boyShape]);
var ticker = new Ticker();
ticker.start([body]);

