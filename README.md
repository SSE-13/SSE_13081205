#自我介绍

## 个人资料
* 姓名：**刘川华**
* 学号：**13081205**
* QQ：947344529

## About me：
* 没事喜欢打游戏，**怪物猎人X**绝赞狩猎中！
* 不过比起游戏更喜欢音乐
* 重度拖延症，感谢身边的同学朋友的鞭策才让我存活至今
* [顺便恭喜小李子终于拿到奥斯卡](http://ent.sina.com.cn/f/m/the88thoscar/)
* 不过比起这些，我家猫才是最重要的
![icon](http://ww3.sinaimg.cn/large/71f39cf5gw1ev9a87vekej21kw11xwpz.jpg)

## 代码片段：
      class arrStack {
        int mSize;
        int top;
        char[] st;
	    arrStack(int size){
		    mSize = size;
		    top = -1;
            char[] st = new char[80];
	    }

	    arrStack(){
	    	top = -1;
	    }

	    void clear(){
	    	top = -1;
	    }

	    bool push(char  item){
	    	if(top==mSize-1){
	    		Console.WriteLine("栈满溢出");
		    	return false;
		    }
		    else{
		      st[++top]=item;
		      return true;
		    }
		}
	    
	    bool pop(int item){
	      if(top==-1){
	        Console.WriteLine("栈为空。不能执行出栈操作");
	        return false;
	      }
	      else{
	        item=st[top--];
	        return true;
	        }
	     }
	 };


* hsdfhkjshjhdsjfhdkjshjhkgjds