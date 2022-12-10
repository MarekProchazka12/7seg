const pins = [];

let a = document.getElementById("a")
let b = document.getElementById("b")
let c = document.getElementById("c")
let d = document.getElementById("d")
let e = document.getElementById("e")
let f = document.getElementById("f")
let g = document.getElementById("g")
let h = document.getElementById("h")

let Pa = document.getElementById("Pa")
let Pb = document.getElementById("Pb")
let Pc = document.getElementById("Pc")
let Pd = document.getElementById("Pd")
let Pe = document.getElementById("Pe")
let Pf = document.getElementById("Pf")
let Pg = document.getElementById("Pg")
let Ph = document.getElementById("Ph")

a.onclick = function(){
    if (a.classList.contains("on")){
        a.classList.remove("on")
        a.classList.add("off")       
        PinDrop()
    }
   
    else{
            a.classList.remove("off")
            a.classList.add("on")
            PinDrop()
    }
}

b.onclick = function(){
    if (b.classList.contains("on")){
        b.classList.remove("on")
        b.classList.add("off")       
        PinDrop()
    }
   
    else{
            b.classList.remove("off")
            b.classList.add("on")
            PinDrop()
    }
}

c.onclick = function(){
    if (c.classList.contains("on")){
        c.classList.remove("on")
        c.classList.add("off")       
        PinDrop()
    }
   
    else{
            c.classList.remove("off")
            c.classList.add("on")
            PinDrop()
    }
}

d.onclick = function(){
    if (d.classList.contains("on")){
        d.classList.remove("on")
        d.classList.add("off")       
        PinDrop()
    }
   
    else{
            d.classList.remove("off")
            d.classList.add("on")
            PinDrop()
    }
}

e.onclick = function(){
    if (e.classList.contains("on")){
        e.classList.remove("on")
        e.classList.add("off")       
        PinDrop()
    }
   
    else{
            e.classList.remove("off")
            e.classList.add("on")
            PinDrop()
    }
}

f.onclick = function(){
    if (f.classList.contains("on")){
        f.classList.remove("on")
        f.classList.add("off")       
        PinDrop()
    }
   
    else{
            f.classList.remove("off")
            f.classList.add("on")
            PinDrop()
    }
}

g.onclick = function(){
    if (g.classList.contains("on")){
        g.classList.remove("on")
        g.classList.add("off")       
        PinDrop()
    }
   
    else{
            g.classList.remove("off")
            g.classList.add("on")
            PinDrop()
    }
}

h.onclick = function(){
    if (h.classList.contains("on")){
        h.classList.remove("on")
        h.classList.add("off")       
        PinDrop()
    }
   
    else{
            h.classList.remove("off")
            h.classList.add("on")
            PinDrop()
    }
}





function PinDrop(){
    pins.splice(0,pins.length)
    inPin(a)
    inPin(b)
    inPin(c)
    inPin(d)
    inPin(e)
    inPin(f)
    inPin(g)
    inPin(h)
    Pa.innerHTML = pins[0]
    Pb.innerHTML = pins[1]
    Pc.innerHTML = pins[2]
    Pd.innerHTML = pins[3]
    Pe.innerHTML = pins[4]
    Pf.innerHTML = pins[5]
    Pg.innerHTML = pins[6]
    Ph.innerHTML = pins[7]
    console.log(pins)
}

function inPin(x){
    if(x.classList.contains("on")){
        pins.push(1)
    }
    else{
        pins.push(0)
    }
}