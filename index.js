const Koa=require("koa");
const KoaBody=require("koa-body");
const Static=require("koa-static");
const jwt=require("jsonwebtoken");
const KoaJwt=require("koa-jwt")
const Router=require("koa-router");
const path=require("path");

const app=new Koa();
const router=new Router();
const secret='fdjkakdjfk';
app.use(Static(path.resolve(__dirname,'./static')));
app.use(KoaBody());
app.use(KoaJwt({
    secret
}).unless({
    path:[/^\/login/]
}))

router.get('/getData',(ctx)=>{
  
    ctx.body={
        status:1,
        data:{...ctx.query}
    }

})
router.post("/login",ctx=>{
     console.log(ctx.request.body);
    const token=jwt.sign({'uid':1},secret);
    ctx.body={
        status:1,
        token
    }
})
 

app.use(router.routes());



app.listen(3000);