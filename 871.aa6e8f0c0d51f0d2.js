"use strict";(self.webpackChunksotre=self.webpackChunksotre||[]).push([[871],{4871:(E,g,c)=>{c.r(g),c.d(g,{CartModule:()=>V});var l=c(6895),s=c(433),t=c(1571),d=c(7865),f=c(9963),u=c(6217);function C(n,a){if(1&n&&(t.TgZ(0,"li",36)(1,"div")(2,"h6",30),t._uU(3),t.qZA(),t.TgZ(4,"small",18),t._uU(5),t.qZA()(),t.TgZ(6,"span",18),t._uU(7),t.ALo(8,"currency"),t.qZA()()),2&n){const e=a.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(2),t.hij("",e.quantity," pieces"),t.xp6(2),t.Oqu(t.lcZ(8,3,e.price))}}function Z(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",22)(1,"h4",23)(2,"span",24),t._uU(3,"Your cart"),t.qZA(),t.TgZ(4,"span",25),t._uU(5),t.qZA()(),t.TgZ(6,"ul",26),t.YNc(7,C,9,5,"li",27),t.TgZ(8,"li",28)(9,"div",29)(10,"h6",30),t._uU(11,"Promo code"),t.qZA(),t.TgZ(12,"small"),t._uU(13),t.qZA()(),t.TgZ(14,"span",29),t._uU(15),t.ALo(16,"currency"),t.qZA()(),t.TgZ(17,"li",31)(18,"span"),t._uU(19,"Total (USD)"),t.qZA(),t.TgZ(20,"strong"),t._uU(21),t.ALo(22,"currency"),t.qZA()()(),t.TgZ(23,"div",32)(24,"input",33,34),t.NdJ("keydown",function(){t.CHM(e);const o=t.MAs(25),i=t.oxw();return t.KtG(i.applyDiscount(o.value))}),t.qZA(),t.TgZ(26,"button",35),t.NdJ("click",function(){t.CHM(e);const o=t.MAs(25),i=t.oxw();return t.KtG(i.applyDiscount(o.value))}),t._uU(27,"Redeem"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(5),t.Oqu(e.productsInCart.cartProducts.length),t.xp6(2),t.Q6J("ngForOf",e.productsInCart.cartProducts),t.xp6(6),t.Oqu(e.promoCode),t.xp6(2),t.Oqu(t.lcZ(16,5,-e.discount)),t.xp6(6),t.Oqu(t.lcZ(22,7,e.total))}}function b(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please enter, This is required"),t.qZA())}function x(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please Enter, Valid Minimum Length"),t.qZA())}function y(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please enter, This is required"),t.qZA())}function v(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please Enter, Valid Minimum Length"),t.qZA())}function T(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1," Please enter your shipping address."),t.qZA())}const p=function(n){return{"is-invalid":n}};let q=(()=>{class n{constructor(e,r,o,i){this.cartService=e,this.fb=r,this.orderService=o,this.router=i,this.productsInCart={},this.total=0,this.discount=0,this.promoCode="",this.userEmail=localStorage.getItem("email"),this.userInfo=this.fb.group({firstName:["",[s.kI.required,s.kI.minLength(5)]],lastName:["",[s.kI.required,s.kI.minLength(5)]],address:["",[s.kI.required,s.kI.minLength(5)]],address2:["",[s.kI.minLength(5)]]})}ngOnInit(){this.cartService.cartProducts(this.userEmail).subscribe(e=>{this.productsInCart=e[0],this.calucalteTotal()})}applyDiscount(e){this.total=0,this.discount=0,this.promoCode="",this.calucalteTotal(),"asmaa"===e.toLowerCase()&&(this.discount=.7*this.total,this.total=.3*this.total,this.promoCode=e)}calucalteTotal(){this.productsInCart.cartProducts.forEach(e=>{this.total+=e.price*e.quantity})}makeOrder(){const{firstName:e,lastName:r,address:o}=this.userInfo.value;this.orderService.makeOrder(e,r,o,this.userEmail,this.total,this.productsInCart.cartProducts),this.router.navigate(["/cart/checkout"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.N),t.Y36(s.qu),t.Y36(f.p),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-cart"]],decls:40,vars:17,consts:[[1,"container"],[1,"row","g-5"],["class","col-md-5 col-lg-4 order-md-last",4,"ngIf"],[1,"col-md-7","col-lg-8"],[1,"mb-3"],[1,"needs-validation",3,"formGroup","ngSubmit"],[1,"row","g-3"],[1,"col-sm-6"],["for","firstName",1,"form-label"],["formControlName","firstName","type","text","id","firstName","placeholder","Please Enter Your First Name here","required","",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],[4,"ngIf"],["for","lastName",1,"form-label"],["formControlName","lastName","type","text","id","lastName","placeholder","Please Enter Your First Name here","required","",1,"form-control",3,"ngClass"],[1,"col-12"],["for","address",1,"form-label"],["formControlName","address","type","text","id","address","placeholder","1234 Main St","required","",1,"form-control",3,"ngClass"],["for","address2",1,"form-label"],[1,"text-body-secondary"],["type","text","id","address2","placeholder","Apartment or suite",1,"form-control"],[1,"my-4"],["type","submit",1,"w-100","btn","btn-primary","btn-lg",3,"disabled"],[1,"col-md-5","col-lg-4","order-md-last"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"text-primary"],[1,"badge","bg-primary","rounded-pill"],[1,"list-group","mb-3"],["class","list-group-item d-flex justify-content-between lh-sm",4,"ngFor","ngForOf"],[1,"list-group-item","d-flex","justify-content-between","bg-body-tertiary"],[1,"text-success"],[1,"my-0"],[1,"list-group-item","d-flex","justify-content-between"],[1,"input-group"],["type","text","placeholder","Promo code",1,"form-control",3,"keydown"],["code",""],["type","submit",1,"btn","btn-secondary",3,"click"],[1,"list-group-item","d-flex","justify-content-between","lh-sm"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,Z,28,9,"div",2),t.TgZ(3,"div",3)(4,"h4",4),t._uU(5,"Billing address"),t.qZA(),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return r.makeOrder()}),t.TgZ(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"First name"),t.qZA(),t._UZ(11,"input",9),t.TgZ(12,"span",10),t.YNc(13,b,2,0,"span",11),t.YNc(14,x,2,0,"span",11),t.qZA()(),t.TgZ(15,"div",7)(16,"label",12),t._uU(17,"Last name"),t.qZA(),t._UZ(18,"input",13),t.TgZ(19,"span",10),t.YNc(20,y,2,0,"span",11),t.YNc(21,v,2,0,"span",11),t.qZA()(),t.TgZ(22,"div",14)(23,"label",15),t._uU(24,"Address"),t.qZA(),t._UZ(25,"input",16),t.TgZ(26,"span",10),t.YNc(27,T,2,0,"span",11),t.qZA()(),t.TgZ(28,"div",14)(29,"label",17),t._uU(30,"Address 2 "),t.TgZ(31,"span",18),t._uU(32,"(Optional)"),t.qZA()(),t._UZ(33,"input",19),t.qZA()(),t._UZ(34,"hr",20),t.TgZ(35,"button",21),t._uU(36," Continue to checkout "),t.qZA(),t.ynx(37),t.TgZ(38,"span",10),t._uU(39,"Please Make Sure To Enter All Required Fields"),t.qZA(),t.BQk(),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",r.productsInCart.cartProducts),t.xp6(4),t.Q6J("formGroup",r.userInfo),t.xp6(5),t.Q6J("ngClass",t.VKq(11,p,(r.userInfo.controls.firstName.touched||r.userInfo.controls.firstName.dirty)&&r.userInfo.controls.firstName.invalid)),t.xp6(2),t.Q6J("ngIf",null==r.userInfo.controls.firstName||null==r.userInfo.controls.firstName.errors?null:r.userInfo.controls.firstName.errors.required),t.xp6(1),t.Q6J("ngIf",null==r.userInfo.controls.firstName||null==r.userInfo.controls.firstName.errors?null:r.userInfo.controls.firstName.errors.minlength),t.xp6(4),t.Q6J("ngClass",t.VKq(13,p,(r.userInfo.controls.lastName.touched||r.userInfo.controls.lastName.dirty)&&r.userInfo.controls.lastName.invalid)),t.xp6(2),t.Q6J("ngIf",null==r.userInfo.controls.lastName||null==r.userInfo.controls.lastName.errors?null:r.userInfo.controls.lastName.errors.required),t.xp6(1),t.Q6J("ngIf",null==r.userInfo.controls.lastName||null==r.userInfo.controls.lastName.errors?null:r.userInfo.controls.lastName.errors.minlength),t.xp6(4),t.Q6J("ngClass",t.VKq(15,p,(r.userInfo.controls.address.touched||r.userInfo.controls.address.dirty)&&r.userInfo.controls.address.invalid)),t.xp6(2),t.Q6J("ngIf",null==r.userInfo.controls.address||null==r.userInfo.controls.address.errors?null:r.userInfo.controls.address.errors.required),t.xp6(8),t.Q6J("disabled",!r.userInfo.valid))},dependencies:[l.mk,l.sg,l.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.sg,s.u,l.H9],styles:[".bgd-danger[_ngcontent-%COMP%]{background:linear-gradient(30deg,red,yellow)}.btn-n[_ngcontent-%COMP%]{color:#fff;background:gray;transition:.2s ease;transform:skew(0)}.btn-n[_ngcontent-%COMP%]:hover{background:red;color:#fff;box-shadow:0 0 10px #000c;transition:.2s ease;transform:scale(1.08) translateY(-3px)}.btn-y[_ngcontent-%COMP%]{background:gray;color:#fff;transition:.2s ease}.btn-y[_ngcontent-%COMP%]:hover{background:green;color:#fff;box-shadow:0 0 10px #000c;transition:.2s ease;transform:scale(1.08) translateY(-3px)}.card-bg[_ngcontent-%COMP%]{transition:1s ease}.card-bg[_ngcontent-%COMP%]:hover{transform:skew(-10deg) scale(1.05);transition:1s ease}.icons[_ngcontent-%COMP%]{transition:.8s ease;cursor:pointer}.icons[_ngcontent-%COMP%]:hover{color:#007bff;transform:scale(1.05) translateY(-5px);transition:.8s ease}.iconck[_ngcontent-%COMP%]{color:#007bff;transform:scale(1.05) translateY(-5px)}.icon[_ngcontent-%COMP%]{transition:1s ease}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.2);transition:1s ease}.text-trans[_ngcontent-%COMP%]{transition:.5s ease}.text-trans[_ngcontent-%COMP%]:hover{transform:skew(-15deg);transition:.5s ease}.btns[_ngcontent-%COMP%]{background:#007bff;color:#fff;font-weight:700;font-size:18px;transition:1s ease}.btns[_ngcontent-%COMP%]:hover{text-decoration:none;color:#fff;box-shadow:5px 5px 7px #000c;transform:scale(1.05) translateY(-8px) skew(-10deg);transition:1s ease}.bg-alert[_ngcontent-%COMP%]{box-shadow:0 0 3px #000c}.bg-alert-bg[_ngcontent-%COMP%]{box-shadow:0 0 10px #000c;transform:scale(1.05)}.w-35[_ngcontent-%COMP%]{width:36%!important}.mrg-ct[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.int-chagne[_ngcontent-%COMP%]{transition:1s ease}.int-chagne[_ngcontent-%COMP%]:hover{transform:skew(-15deg);transition:1s ease}.turn[_ngcontent-%COMP%]{display:block;transform:none;transition:.5s ease}.turnb[_ngcontent-%COMP%]{display:block;transform:rotate(-180deg);transition:.5s ease}.clps[_ngcontent-%COMP%]{color:#007bff;text-decoration:none!important}.clps[_ngcontent-%COMP%]:hover{color:#007bff}.clps-btn-style[_ngcontent-%COMP%]{transition:.5s ease}.clps-btn-style[_ngcontent-%COMP%]:hover{color:#007bff;transform:skew(-15deg);transition:.5s ease}p[_ngcontent-%COMP%]{margin-bottom:.5px!important}"]}),n})(),_=(()=>{class n{transform(e,...r){return null}transformCredit(e,...r){return e.replace(/\d{4}/g,o=>`${o} `).replace(/\s{1,}/g," ")}transformExpire(e,...r){return e.replace(/\d{2}/g,o=>`${o}/`).replace(/\/{1,}/g,"/")}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"userCredit",type:n,pure:!0}),n})();var k=c(5226),I=c.n(k);function A(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Credit card number is required"),t.qZA())}function M(n,a){1&n&&(t.TgZ(0,"span"),t._uU(1,"Please Make Sure To Eneter Valid Credit Card Number"),t.qZA())}const U=function(n){return{"is-invalid":n}};let N=(()=>{class n{constructor(e,r,o){this.orderService=e,this.pipe=r,this.router=o,this.total=0,this._creditCard="",this._expireDate="",this._CVV="",this.total=this.orderService.getUserInfo().total}get creditCard(){return this._creditCard}set creditCard(e){this._creditCard=/\d{4}/.test(this._creditCard)&&e.length<16?this.pipe.transformCredit(e):e}get expireDate(){return this._expireDate}set expireDate(e){this._expireDate=e.length<5?this.pipe.transformExpire(e):e}get CVV(){return this._CVV}set CVV(e){this._CVV=e}submitOrder(){this.orderService.submitOrder(),I().mixin({toast:!0,position:"top-right",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,title:"SuccessFully Oreder Done",icon:"success"}).fire(),setTimeout(()=>{this.router.navigate(["/products"])})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.p),t.Y36(_),t.Y36(u.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-checkout"]],features:[t._Bn([_])],decls:55,vars:12,consts:[[1,"container"],[1,"mb-3"],[1,"my-3"],[1,"form-check"],["id","credit","name","paymentMethod","type","radio","checked","","required","",1,"form-check-input"],["for","credit",1,"form-check-label"],["id","debit","name","paymentMethod","type","radio","required","",1,"form-check-input"],["for","debit",1,"form-check-label"],["id","paypal","name","paymentMethod","type","radio","required","",1,"form-check-input"],["for","paypal",1,"form-check-label"],[1,"row","gy-3"],[1,"col-md-6"],["for","cc-name",1,"form-label"],["type","text","id","cc-name","placeholder","Hedman Khalifa","required","",1,"form-control"],[1,"text-body-secondary"],[1,"invalid-feedback"],["for","cc-number",1,"form-label"],["type","text","id","cc-number","placeholder","xxxx xxxx xxxx xxxx","required","","pattern","[0-9\\s]{19}","maxlength","19",1,"form-control","p-2",3,"ngModel","ngClass","ngModelChange"],["creditCardInput","ngModel"],[4,"ngIf"],[1,"col-md-3"],["for","cc-expiration",1,"form-label"],["type","text","id","cc-expiration","minlength","5","maxlength","5","placeholder","02/31","required","",1,"form-control",3,"ngModel","ngModelChange"],["expireDateInput","ngModel"],["for","cc-cvv",1,"form-label"],["type","text","placeholder","xxx","id","cc-cvv","minlength","3","maxlength","3","required","",1,"form-control",3,"ngModel","ngModelChange"],["CVVInput","ngModel"],[1,"my-4"],[1,"text-center"],["type","submit",1,"w-30","btn","btn-primary","btn-lg","text-center",3,"disabled","click"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"h3",1),t._uU(2),t.ALo(3,"currency"),t.qZA(),t.TgZ(4,"div",2)(5,"h4",1),t._uU(6,"Payment Method"),t.qZA(),t.TgZ(7,"div",3),t._UZ(8,"input",4),t.TgZ(9,"label",5),t._uU(10,"Credit card"),t.qZA()(),t.TgZ(11,"div",3),t._UZ(12,"input",6),t.TgZ(13,"label",7),t._uU(14,"Debit card"),t.qZA()(),t.TgZ(15,"div",3),t._UZ(16,"input",8),t.TgZ(17,"label",9),t._uU(18,"PayPal"),t.qZA()()(),t.TgZ(19,"div",10)(20,"div",11)(21,"label",12),t._uU(22,"Name on card"),t.qZA(),t._UZ(23,"input",13),t.TgZ(24,"small",14),t._uU(25,"Full name as displayed on card"),t.qZA(),t.TgZ(26,"div",15),t._uU(27," Name on card is required "),t.qZA()(),t.TgZ(28,"div",11)(29,"label",16),t._uU(30,"Credit card number"),t.qZA(),t.TgZ(31,"input",17,18),t.NdJ("ngModelChange",function(i){return r.creditCard=i}),t.qZA(),t.TgZ(33,"span",15),t.YNc(34,A,2,0,"span",19),t.YNc(35,M,2,0,"span",19),t.qZA(),t._UZ(36,"div",15),t.qZA(),t.TgZ(37,"div",20)(38,"label",21),t._uU(39,"Expiration"),t.qZA(),t.TgZ(40,"input",22,23),t.NdJ("ngModelChange",function(i){return r.expireDate=i}),t.qZA(),t.TgZ(42,"div",15),t._uU(43," Expiration date required "),t.qZA()(),t.TgZ(44,"div",20)(45,"label",24),t._uU(46,"CVV"),t.qZA(),t.TgZ(47,"input",25,26),t.NdJ("ngModelChange",function(i){return r.CVV=i}),t.qZA(),t.TgZ(49,"div",15),t._uU(50," Security code required "),t.qZA()()(),t._UZ(51,"hr",27),t.TgZ(52,"div",28)(53,"button",29),t.NdJ("click",function(){return r.submitOrder()}),t._uU(54," Confirm Your Order "),t.qZA()()()),2&e){const o=t.MAs(32),i=t.MAs(41),m=t.MAs(48);t.xp6(2),t.Oqu(t.lcZ(3,8,r.total)),t.xp6(29),t.Q6J("ngModel",r.creditCard)("ngClass",t.VKq(10,U,(o.touched||o.dirty)&&o.invalid)),t.xp6(3),t.Q6J("ngIf",null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==o.errors?null:o.errors.minlength),t.xp6(5),t.Q6J("ngModel",r.expireDate),t.xp6(7),t.Q6J("ngModel",r.CVV),t.xp6(6),t.Q6J("disabled",o.invalid||m.invalid||i.invalid)}},dependencies:[l.mk,l.O5,s.Fj,s.JJ,s.Q7,s.wO,s.nD,s.c5,s.On,l.H9]}),n})();var O=c(529);function P(n,a){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4),t._uU(5),t.qZA(),t.TgZ(6,"div",2)(7,"button",5),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.decreaseQuantity(o.item))}),t._uU(8,"-"),t.qZA(),t.TgZ(9,"div",6),t._uU(10),t.qZA(),t.TgZ(11,"button",5),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.increaseQuantity(o.item))}),t._uU(12,"+"),t.qZA()(),t.TgZ(13,"div",2)(14,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.removeFromCart(o.item))}),t._UZ(15,"i",8),t.qZA()()(),t.BQk()}if(2&n){const e=t.oxw();t.xp6(3),t.s9C("src",e.item.url,t.LSH),t.xp6(2),t.hij(" ",e.item.name," "),t.xp6(5),t.Oqu(e.item.quantity)}}let w=(()=>{class n{constructor(e){this.cartService=e,this.item={}}increaseQuantity(e){return e.quantity=e?.quantity&&++e.quantity||1,this.updateCart(e),e}decreaseQuantity(e){return e.quantity=e?.quantity&&--e.quantity||0,e.quantity?this.updateCart(e):this.removeFromCart(e),e}updateCart(e){const{name:r,url:o,price:i,quantity:m=1}=e;return this.cartService.updateCart({name:r,price:i,url:o,quantity:m}),e}removeFromCart(e){return e.quantity=0,this.cartService.removeProductFromCart(e.name),e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-basket-item"]],inputs:{item:"item"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"d-flex","justify-content-between","list-group-item","list-group-item-action"],[1,"mw-20","d-flex","justify-content-center","align-items-center","p-2",2,"min-width","20%"],[1,"img-fluid",2,"max-height","100px","max-width","100px",3,"src"],[1,"mw-20","d-flex","justify-content-center","align-items-center","p-2",2,"min-width","30%"],[1,"btn","btn-primary","fw-bold",3,"click"],[1,"m-2","fw-bold"],[1,"btn","fw-bold",3,"click"],[1,"far","fa-trash-alt"]],template:function(e,r){1&e&&t.YNc(0,P,16,3,"ng-container",0),2&e&&t.Q6J("ngIf",r.item.quantity)},dependencies:[l.O5]}),n})();function J(n,a){if(1&n&&(t.ynx(0),t._UZ(1,"app-basket-item",9),t.BQk()),2&n){const e=a.$implicit;t.xp6(1),t.Q6J("item",e)}}function Y(n,a){if(1&n&&(t.ynx(0),t.YNc(1,J,2,1,"ng-container",6),t.TgZ(2,"button",7)(3,"a",8),t._uU(4,"Go To Shipping"),t.qZA()(),t.BQk()),2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e.productsInCart.cartProducts)}}function Q(n,a){if(1&n&&(t.TgZ(0,"div",4),t.YNc(1,Y,5,1,"ng-container",5),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.productsInCart.cartProducts.length)}}function B(n,a){if(1&n&&(t.ynx(0),t.YNc(1,Q,2,1,"div",3),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.productsInCart.cartProducts)}}function F(n,a){1&n&&(t.TgZ(0,"div",10)(1,"h1"),t._uU(2,"You Did Not Add Any Products"),t.qZA(),t.TgZ(3,"button",11)(4,"a",12),t._uU(5,"Go To Shopping"),t.qZA()()())}let h=(()=>{class n{constructor(e){this.cartService=e,this.productsInCart={},this.userEmail=localStorage.getItem("email")}ngOnInit(){this.cartService.cartProducts(this.userEmail).subscribe(e=>{this.productsInCart=e[0]})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.N))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-basket"]],decls:4,vars:2,consts:[[1,"container",2,"min-height","50vh"],[4,"ngIf","ngIfElse"],["noData",""],["class","list-group",4,"ngIf"],[1,"list-group"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"btn","btn-outline-dark","mt-5"],["routerLink","/cart/cart",1,"nav-link","btn"],[3,"item"],[1,"text-center","mt-5"],[1,"btn","btn-outline-dark"],["routerLink","/products",1,"nav-link","btn"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,B,2,1,"ng-container",1),t.qZA(),t.YNc(2,F,6,0,"ng-template",null,2,t.W1O)),2&e){const o=t.MAs(3);t.xp6(1),t.Q6J("ngIf",r.productsInCart)("ngIfElse",o)}},dependencies:[l.sg,l.O5,u.rH,w]}),n})();const S=[{path:"",component:h,title:"Basket"},{path:"basket",component:h,title:"Cart"},{path:"cart",component:q,title:"Cart"},{path:"checkout",component:N,title:"Checkout"}];let V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,u.Bz.forChild(S),O.JF,s.UX,s.u5]}),n})()}}]);