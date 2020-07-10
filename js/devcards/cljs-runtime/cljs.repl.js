goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__45123){
var map__45124 = p__45123;
var map__45124__$1 = (((((!((map__45124 == null))))?(((((map__45124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45124):map__45124);
var m = map__45124__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45124__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45124__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45126_45331 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45127_45332 = null;
var count__45128_45333 = (0);
var i__45129_45334 = (0);
while(true){
if((i__45129_45334 < count__45128_45333)){
var f_45336 = chunk__45127_45332.cljs$core$IIndexed$_nth$arity$2(null,i__45129_45334);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45336], 0));


var G__45337 = seq__45126_45331;
var G__45338 = chunk__45127_45332;
var G__45339 = count__45128_45333;
var G__45340 = (i__45129_45334 + (1));
seq__45126_45331 = G__45337;
chunk__45127_45332 = G__45338;
count__45128_45333 = G__45339;
i__45129_45334 = G__45340;
continue;
} else {
var temp__5735__auto___45341 = cljs.core.seq(seq__45126_45331);
if(temp__5735__auto___45341){
var seq__45126_45342__$1 = temp__5735__auto___45341;
if(cljs.core.chunked_seq_QMARK_(seq__45126_45342__$1)){
var c__4609__auto___45343 = cljs.core.chunk_first(seq__45126_45342__$1);
var G__45344 = cljs.core.chunk_rest(seq__45126_45342__$1);
var G__45345 = c__4609__auto___45343;
var G__45346 = cljs.core.count(c__4609__auto___45343);
var G__45347 = (0);
seq__45126_45331 = G__45344;
chunk__45127_45332 = G__45345;
count__45128_45333 = G__45346;
i__45129_45334 = G__45347;
continue;
} else {
var f_45348 = cljs.core.first(seq__45126_45342__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_45348], 0));


var G__45349 = cljs.core.next(seq__45126_45342__$1);
var G__45350 = null;
var G__45351 = (0);
var G__45352 = (0);
seq__45126_45331 = G__45349;
chunk__45127_45332 = G__45350;
count__45128_45333 = G__45351;
i__45129_45334 = G__45352;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_45354], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_45354)))?cljs.core.second(arglists_45354):arglists_45354)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45131_45355 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45132_45356 = null;
var count__45133_45357 = (0);
var i__45134_45358 = (0);
while(true){
if((i__45134_45358 < count__45133_45357)){
var vec__45145_45359 = chunk__45132_45356.cljs$core$IIndexed$_nth$arity$2(null,i__45134_45358);
var name_45360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45145_45359,(0),null);
var map__45148_45361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45145_45359,(1),null);
var map__45148_45362__$1 = (((((!((map__45148_45361 == null))))?(((((map__45148_45361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45148_45361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45148_45361):map__45148_45361);
var doc_45363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148_45362__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45148_45362__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45360], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45364], 0));

if(cljs.core.truth_(doc_45363)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45363], 0));
} else {
}


var G__45366 = seq__45131_45355;
var G__45367 = chunk__45132_45356;
var G__45368 = count__45133_45357;
var G__45369 = (i__45134_45358 + (1));
seq__45131_45355 = G__45366;
chunk__45132_45356 = G__45367;
count__45133_45357 = G__45368;
i__45134_45358 = G__45369;
continue;
} else {
var temp__5735__auto___45370 = cljs.core.seq(seq__45131_45355);
if(temp__5735__auto___45370){
var seq__45131_45371__$1 = temp__5735__auto___45370;
if(cljs.core.chunked_seq_QMARK_(seq__45131_45371__$1)){
var c__4609__auto___45372 = cljs.core.chunk_first(seq__45131_45371__$1);
var G__45373 = cljs.core.chunk_rest(seq__45131_45371__$1);
var G__45374 = c__4609__auto___45372;
var G__45375 = cljs.core.count(c__4609__auto___45372);
var G__45376 = (0);
seq__45131_45355 = G__45373;
chunk__45132_45356 = G__45374;
count__45133_45357 = G__45375;
i__45134_45358 = G__45376;
continue;
} else {
var vec__45154_45377 = cljs.core.first(seq__45131_45371__$1);
var name_45378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45154_45377,(0),null);
var map__45157_45379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45154_45377,(1),null);
var map__45157_45380__$1 = (((((!((map__45157_45379 == null))))?(((((map__45157_45379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45157_45379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45157_45379):map__45157_45379);
var doc_45381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45157_45380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_45382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45157_45380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_45378], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_45382], 0));

if(cljs.core.truth_(doc_45381)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_45381], 0));
} else {
}


var G__45383 = cljs.core.next(seq__45131_45371__$1);
var G__45384 = null;
var G__45385 = (0);
var G__45386 = (0);
seq__45131_45355 = G__45383;
chunk__45132_45356 = G__45384;
count__45133_45357 = G__45385;
i__45134_45358 = G__45386;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__45160 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__45161 = null;
var count__45162 = (0);
var i__45163 = (0);
while(true){
if((i__45163 < count__45162)){
var role = chunk__45161.cljs$core$IIndexed$_nth$arity$2(null,i__45163);
var temp__5735__auto___45387__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45387__$1)){
var spec_45388 = temp__5735__auto___45387__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45388)], 0));
} else {
}


var G__45389 = seq__45160;
var G__45390 = chunk__45161;
var G__45391 = count__45162;
var G__45392 = (i__45163 + (1));
seq__45160 = G__45389;
chunk__45161 = G__45390;
count__45162 = G__45391;
i__45163 = G__45392;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__45160);
if(temp__5735__auto____$1){
var seq__45160__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__45160__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45160__$1);
var G__45393 = cljs.core.chunk_rest(seq__45160__$1);
var G__45394 = c__4609__auto__;
var G__45395 = cljs.core.count(c__4609__auto__);
var G__45396 = (0);
seq__45160 = G__45393;
chunk__45161 = G__45394;
count__45162 = G__45395;
i__45163 = G__45396;
continue;
} else {
var role = cljs.core.first(seq__45160__$1);
var temp__5735__auto___45397__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___45397__$2)){
var spec_45398 = temp__5735__auto___45397__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_45398)], 0));
} else {
}


var G__45399 = cljs.core.next(seq__45160__$1);
var G__45400 = null;
var G__45401 = (0);
var G__45402 = (0);
seq__45160 = G__45399;
chunk__45161 = G__45400;
count__45162 = G__45401;
i__45163 = G__45402;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__45403 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__45404 = cljs.core.ex_cause(t);
via = G__45403;
t = G__45404;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__45190 = datafied_throwable;
var map__45190__$1 = (((((!((map__45190 == null))))?(((((map__45190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45190):map__45190);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45190__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45190__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45190__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__45191 = cljs.core.last(via);
var map__45191__$1 = (((((!((map__45191 == null))))?(((((map__45191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45191):map__45191);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45191__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45191__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__45192 = data;
var map__45192__$1 = (((((!((map__45192 == null))))?(((((map__45192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45192):map__45192);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45192__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__45193 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__45193__$1 = (((((!((map__45193 == null))))?(((((map__45193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45193):map__45193);
var top_data = map__45193__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45193__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__45212 = phase;
var G__45212__$1 = (((G__45212 instanceof cljs.core.Keyword))?G__45212.fqn:null);
switch (G__45212__$1) {
case "read-source":
var map__45221 = data;
var map__45221__$1 = (((((!((map__45221 == null))))?(((((map__45221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45221):map__45221);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45221__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45221__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__45230 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__45230__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45230,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45230);
var G__45230__$2 = (cljs.core.truth_((function (){var fexpr__45240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45240.cljs$core$IFn$_invoke$arity$1 ? fexpr__45240.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45240.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45230__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45230__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45230__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45230__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__45241 = top_data;
var G__45241__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45241,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__45241);
var G__45241__$2 = (cljs.core.truth_((function (){var fexpr__45242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45242.cljs$core$IFn$_invoke$arity$1 ? fexpr__45242.cljs$core$IFn$_invoke$arity$1(source) : fexpr__45242.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__45241__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__45241__$1);
var G__45241__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45241__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45241__$2);
var G__45241__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45241__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45241__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45241__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45241__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__45243 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45243,(3),null);
var G__45246 = top_data;
var G__45246__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__45246);
var G__45246__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__45246__$1);
var G__45246__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__45246__$2);
var G__45246__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__45246__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45246__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__45246__$4;
}

break;
case "execution":
var vec__45254 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45254,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45186_SHARP_){
var or__4185__auto__ = (p1__45186_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__45258 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__45258.cljs$core$IFn$_invoke$arity$1 ? fexpr__45258.cljs$core$IFn$_invoke$arity$1(p1__45186_SHARP_) : fexpr__45258.call(null,p1__45186_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__45265 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__45265__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45265,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__45265);
var G__45265__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45265__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__45265__$1);
var G__45265__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45265__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__45265__$2);
var G__45265__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45265__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__45265__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__45265__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__45265__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45212__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__45284){
var map__45285 = p__45284;
var map__45285__$1 = (((((!((map__45285 == null))))?(((((map__45285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45285):map__45285);
var triage_data = map__45285__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45285__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__45291 = phase;
var G__45291__$1 = (((G__45291 instanceof cljs.core.Keyword))?G__45291.fqn:null);
switch (G__45291__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__45292 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__45293 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45294 = loc;
var G__45295 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45297_45416 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45298_45417 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45299_45418 = true;
var _STAR_print_fn_STAR__temp_val__45300_45419 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45299_45418);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45300_45419);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45282_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45282_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45298_45417);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45297_45416);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45292,G__45293,G__45294,G__45295) : format.call(null,G__45292,G__45293,G__45294,G__45295));

break;
case "macroexpansion":
var G__45302 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__45303 = cause_type;
var G__45304 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45305 = loc;
var G__45306 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45302,G__45303,G__45304,G__45305,G__45306) : format.call(null,G__45302,G__45303,G__45304,G__45305,G__45306));

break;
case "compile-syntax-check":
var G__45307 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__45308 = cause_type;
var G__45309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45310 = loc;
var G__45311 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45307,G__45308,G__45309,G__45310,G__45311) : format.call(null,G__45307,G__45308,G__45309,G__45310,G__45311));

break;
case "compilation":
var G__45312 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__45313 = cause_type;
var G__45314 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45315 = loc;
var G__45316 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45312,G__45313,G__45314,G__45315,G__45316) : format.call(null,G__45312,G__45313,G__45314,G__45315,G__45316));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__45317 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__45318 = symbol;
var G__45319 = loc;
var G__45320 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__45321_45421 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__45322_45422 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__45323_45423 = true;
var _STAR_print_fn_STAR__temp_val__45324_45424 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__45323_45423);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__45324_45424);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45283_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__45283_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__45322_45422);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__45321_45421);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__45317,G__45318,G__45319,G__45320) : format.call(null,G__45317,G__45318,G__45319,G__45320));
} else {
var G__45325 = "Execution error%s at %s(%s).\n%s\n";
var G__45326 = cause_type;
var G__45327 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__45328 = loc;
var G__45329 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__45325,G__45326,G__45327,G__45328,G__45329) : format.call(null,G__45325,G__45326,G__45327,G__45328,G__45329));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45291__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
