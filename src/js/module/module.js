export function $k1(tag, options = {}, elements = null){
    const el = document.createElement(tag);
    if(options.id){
        el.id = options.id;
    }
    if(options.class){
        el.className = Array.isArray(options.class)
            ? options.class.join(" ")
            : options.class;
    }
    if(options.text){
        el.innerHTML = options.text;
    }
    if(elements){
        if(Array.isArray(elements)){
            elements.forEach(elmnt=>{
                if(elmnt instanceof Node){
                    el.appendChild(elmnt);
                }
                else if(typeof elmnt === "string"){
                    el.append(elmnt);
                }
            });
        }else{
            if(elements instanceof Node){
                el.appendChild(elements);
            }
            else if(typeof elements === "string"){
                el.append(elements);
            }
        }
    }
    if(options.attr){
        for(let key in options.attr){
            el.setAttribute(key, options.attr[key]);
        }
    }
    if(options.data){
        for(let key in options.data){
            el.dataset[key] = options.data[key];
        }
    }
    if(options.style){
        for(let key in options.style){
            if(key.startsWith('--')){
                el.style.setProperty(key, options.style[key]);
            }else{
                el.style[key] = options.style[key];
            }
        }
    }
    if(options.parent){
        if(typeof options.parent === "string"){
            document.querySelector(options.parent).appendChild(el);
        }else{
            options.parent.appendChild(el);
        }
    }
    return el;
}
export function $(selector, all = false){
    if(selector.startsWith("#") && !selector.includes(" ")){
        return document.getElementById(selector.slice(1));
    }
    if(all) return document.querySelectorAll(selector);
    return document.querySelector(selector);
}