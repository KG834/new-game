class Game {
    constructor() {

    }
    start() {
       form.title.hide(); 
        var C = createSprite(width/2-600, height/2, 100, 400);
        C.shapeColor = "grey";
       
        var D = createSprite(width/2-495, height/2, 100, 400);
        D.shapeColor = "grey";
      
        var E = createSprite(width/2-390, height/2, 100, 400);
        E.shapeColor = "grey";
        var F = createSprite(width/2-285, height/2, 100, 400);
        F.shapeColor = "grey";
        
        var G = createSprite(width/2-180, height/2, 100, 400);
        G.shapeColor = "grey";
        
        var A = createSprite(width/2-75, height/2, 100, 400);
        A.shapeColor = "grey";
        
        var B = createSprite(width/2+30, height/2, 100, 400);
        B.shapeColor = "grey";
        
        var Cs = createSprite(width/2-550, height/2-100, 50, 200);
        Cs.shapeColor = "black";
        var Ds = createSprite(width/2-445, height/2-100, 50, 200);
        Ds.shapeColor = "black";
        //var Es = createSprite(width/2-340, height/2-100, 50, 200);
       // Es.shapeColor = "black";
        var Fs = createSprite(width/2-235, height/2-100, 50, 200);
        Fs.shapeColor = "black";
        var Gs = createSprite(width/2-130, height/2-100, 50, 200);
        Gs.shapeColor = "black";
        var As = createSprite(width/2-25, height/2-100, 50, 200);
        As.shapeColor = "black";
        
       // var r1 = Math.round(random(0, arr.length))
       // console.log(r1)
       // console.log(arr[r1])
       // setInterval(function() { var r1 = Math.round(random(0, arr.length))
       // }, 5000)
        var c = createSprite(100, 40, 20, 20)
        c.visible = false;
        c.addImage(cKey)
        var d = createSprite(150, 40, 20, 20)
        d.visible = false;
        d.shapeColor="grey"

        var e = createSprite(200, 40, 20, 20)
        e.visible = false;
        e.shapeColor="black"

        var f = createSprite(250, 40, 20, 20)
        f.visible = false;
        f.shapeColor="green"

        var g = createSprite(300, 40, 20, 20)
        g.visible = false;
        g.shapeColor="red"

        var a = createSprite(350, 40, 20, 20);
        a.visible = false; 
        a.shapeColor = "orange";
       
        
        var b = createSprite(400, 40, 20, 20);
       b.visible = false; 
       b.shapeColor = "indigo";
        
        var cs = createSprite(450, 40, 20, 20);
         cs.visible = false;
         cs.shapeColor = "purple";
       
        var ds = createSprite(500, 40, 20, 20);
        ds.visible = false;
        ds.shapeColor = "blue";
        
        
        var gs = createSprite(550, 40, 20, 20);
        gs.visible = false;
         gs.shapeColor = "turquiose";
       
        var as = createSprite(600, 40, 20, 20);
         as.visible = false;
         as.shapeColor = "#94ebb8";
       
        var bs = createSprite(650, 40, 20, 20);
        bs.visible = false;
        bs.shapeColor = "#3e1394";
        
        

    
        var arr1 = []
        arr1.push(c)
        arr1.push(d)
        arr1.push(e)
        arr1.push(f)
        arr1.push(g)
        arr1.push(a)
        arr1.push(b)
        arr1.push(cs)
        arr1.push(ds)
        arr1.push(gs);
        arr1.push(as);
        arr1.push(bs);



        if(frameCount%20==0){
            
            var a = Math.round(random(0, arr1.length-1));
            arr1[a].visible=true
            
           
        }
    
      
    }
    getState() {
        database.ref("gameState").on("value", (data)=>{
            gamestate = data.val()
        })
    }
    updateState(state) {
        database.ref("/").update({
            gameState : state
        })
    }
}