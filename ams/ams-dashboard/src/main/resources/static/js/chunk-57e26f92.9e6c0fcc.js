(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57e26f92"],{"1ea5":function(e,t,n){},5606:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"e",(function(){return p}));var c=n("5530"),a=(n("b0c0"),n("b32d"));function r(){return a["a"].get("ams/v1/catalog/metastore/types")}function o(e){return a["a"].get("ams/v1/catalogs/".concat(e))}function s(e){return a["a"].delete("ams/v1/catalogs/".concat(e))}function i(e){return a["a"].get("ams/v1/catalogs/".concat(e,"/delete/check"))}function u(e){var t=e.isCreate,n=e.name;return delete e.isCreate,t?a["a"].post("ams/v1/catalogs",Object(c["a"])({},e)):a["a"].put("ams/v1/catalogs/".concat(n),Object(c["a"])({},e))}function l(){return a["a"].get("ams/v1/settings/system")}function p(){return a["a"].get("ams/v1/settings/containers")}},"61c2":function(e,t,n){"use strict";n.r(t);var c=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("159b"),n("b64b"),n("7a23")),r=n("47e2"),o=n("5606"),s={class:"setting-wrap"},i={class:"system-setting"},u={class:"g-mb-12"},l={class:"container-setting"},p={class:"g-mb-12"},b={class:"content"},m={class:"item"},d={class:"left"},j={class:"right"},O={class:"item"},f={class:"left"},g={class:"right"},v={class:"g-mb-12 g-mt-12"},y={class:"g-mb-12 g-mt-12"},h=Object(a["defineComponent"])({setup:function(e){var t=Object(r["b"])(),n=t.t,h=Object(a["ref"])(!1),k=Object(a["reactive"])([]),w=Object(a["reactive"])([]),E=Object(a["reactive"])([{title:n("name"),dataIndex:"name",width:340,ellipsis:!0},{title:n("propertiesMemory",{type:"taskmanager"}),dataIndex:"tmMemory",width:"50%",ellipsis:!0},{title:n("propertiesMemory",{type:"jobmanager"}),dataIndex:"jmMemory",width:"50%",ellipsis:!0}]),N=Object(a["reactive"])([{title:n("key"),dataIndex:"key",width:340,ellipsis:!0},{title:n("value"),dataIndex:"value"}]),V=Object(a["ref"])([]);function x(){return B.apply(this,arguments)}function B(){return B=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["f"])();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:Object.keys(t).forEach((function(e){k.push({key:e,value:t[e]})}));case 6:case"end":return e.stop()}}),e)}))),B.apply(this,arguments)}function C(){return S.apply(this,arguments)}function S(){return S=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["e"])();case 2:t=e.sent,V.value=[],(t||[]).forEach((function(e,t){e.propertiesArray=[],V.value.push(e.name),w.push(e),Object.keys(e.properties||{}).forEach((function(n){w[t].propertiesArray.push({key:n,value:e.properties[n]})}))}));case 5:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}return Object(a["onMounted"])(Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,h.value=!0,e.next=4,Promise.all([x(),C()]);case 4:return e.prev=4,h.value=!1,e.finish(4);case 7:case"end":return e.stop()}}),e,null,[[0,,4,7]])})))),function(e,t){var n=Object(a["resolveComponent"])("a-table"),c=Object(a["resolveComponent"])("a-collapse-panel"),r=Object(a["resolveComponent"])("a-collapse"),o=Object(a["resolveComponent"])("u-loading");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("h1",u,Object(a["toDisplayString"])(e.$t("systemSetting")),1),Object(a["unref"])(k).length?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,rowKey:"key",columns:Object(a["unref"])(N),"data-source":Object(a["unref"])(k),pagination:!1},null,8,["columns","data-source"])):Object(a["createCommentVNode"])("",!0)]),Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("h1",p,Object(a["toDisplayString"])(e.$t("containerSetting")),1),Object(a["createVNode"])(r,{activeKey:V.value,"onUpdate:activeKey":t[0]||(t[0]=function(e){return V.value=e})},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(Object(a["unref"])(w),(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(c,{key:t.name,header:t.name},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("ul",b,[Object(a["createElementVNode"])("li",m,[Object(a["createElementVNode"])("h3",d,Object(a["toDisplayString"])(e.$t("name")),1),Object(a["createElementVNode"])("span",j,Object(a["toDisplayString"])(t.name),1)]),Object(a["createElementVNode"])("li",O,[Object(a["createElementVNode"])("h3",f,Object(a["toDisplayString"])(e.$t("type")),1),Object(a["createElementVNode"])("span",g,Object(a["toDisplayString"])(t.type),1)])]),Object(a["createElementVNode"])("h3",v,Object(a["toDisplayString"])(e.$t("properties")),1),t.propertiesArray.length?(Object(a["openBlock"])(),Object(a["createBlock"])(n,{key:0,rowKey:"key",columns:Object(a["unref"])(N),"data-source":t.propertiesArray,pagination:!1},null,8,["columns","data-source"])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("h3",y,Object(a["toDisplayString"])(e.$t("optimzeGroup")),1),Object(a["createVNode"])(n,{rowKey:"name",columns:Object(a["unref"])(E),"data-source":t.optimizeGroup,pagination:!1},null,8,["columns","data-source"])]})),_:2},1032,["header"])})),128))]})),_:1},8,["activeKey"])])]),h.value?(Object(a["openBlock"])(),Object(a["createBlock"])(o,{key:0})):Object(a["createCommentVNode"])("",!0)],64)}}}),k=(n("7d79"),n("6b0d")),w=n.n(k);const E=w()(h,[["__scopeId","data-v-2c72c81e"]]);t["default"]=E},"7d79":function(e,t,n){"use strict";n("1ea5")}}]);