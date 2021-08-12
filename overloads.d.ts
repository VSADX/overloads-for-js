class Overload {
    if<A,FN extends(a:A)=>unknown>(a:{new():A},func:FN):Overload
    if<A,B,FN extends(a:A,b:B)=>unknown>(a:{new():A},b:{new():B},func:FN):Overload
    if<A,B,C,FN extends(a:A,b:B,c:C)=>unknown>(a:{new():A},b:{new():B},c:{new():C},func:FN):Overload
    if<A,B,C,D,FN extends(a:A,b:B,c:C,d:D)=>unknown>(a:{new():A},b:{new():B},c:{new():C},d:{new():D},func:FN):Overload
    if<A,B,C,D,E,FN extends(a:A,b:B,c:C,d:D,e:E)=>unknown>(a:{new():A},b:{new():B},c:{new():C},d:{new():D},e:{new():E},func:FN):Overload
    if<A,B,C,D,E,F,FN extends(a:A,b:B,c:C,d:D,e:E,f:F)=>unknown>(a:{new():A},b:{new():B},c:{new():C},d:{new():D},e:{new():E},f:{new():F},func:FN):Overload
    if<A,B,C,D,E,F,G,FN extends(a:A,b:B,c:C,d:D,e:E,f:F,g:G)=>unknown>(a:{new():A},b:{new():B},c:{new():C},d:{new():D},e:{new():E},f:{new():F},g:{new():G},func:FN):Overload
    
    else(fn: Function):Overload

    lock():Function
}
export const overload = () => new Overload
