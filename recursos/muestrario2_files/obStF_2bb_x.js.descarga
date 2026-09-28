;/*FB_PKG_DELIM*/

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<143730e1c912718d7f0f7dc627659786>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionConfig.prod",["Lexical"],(function $module_LexicalExtensionConfig_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";function n(e){return("function"==typeof e.nodes?e.nodes():e.nodes)||[];}exports.getKnownTypesAndNodes=function(t){var o=new Set(),s=new Set();for(var d of n(t)){var _n="function"==typeof d?d:d.replace;require("Lexical").getStaticNodeConfig(_n),o.add(_n.getType()),s.add(_n);}return{nodes:s,types:o};},exports.getNodeConfig=n;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<68f633d56dd3d53601ffe13ee1617170>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionEditorStateExtension.prod",["LexicalExtensionWatchedSignal"],(function $module_LexicalExtensionEditorStateExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var t={build:function build(t){return require("LexicalExtensionWatchedSignal").watchedSignal(function(){return t.getEditorState();},function(e){return t.registerUpdateListener(function(t){e.value=t.editorState;});});},name:"@lexical/extension/EditorState"};exports.EditorStateExtension=t;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<dda19f91925ca3763ef2449106c45710>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionGetExtensionDependency.prod",["Lexical","LexicalExtensionGetExtensionDependencyFromEditor","LexicalExtensionGetPeerDependencyFromEditor"],(function $module_LexicalExtensionGetExtensionDependency_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";function r(n){return require("LexicalExtensionGetExtensionDependencyFromEditor").getExtensionDependencyFromEditor(require("Lexical").$getEditor(),n);}exports.$getExtensionDependency=r,exports.$getExtensionOutput=function(e){return r(e).output;},exports.$getPeerDependency=function(t){return require("LexicalExtensionGetPeerDependencyFromEditor").getPeerDependencyFromEditor(require("Lexical").$getEditor(),t);};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<779cea22a97c5cf36d8d5116cbd6c09a>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionGetExtensionDependencyFromEditor.prod",["LexicalExtensionLexicalBuilder"],(function $module_LexicalExtensionGetExtensionDependencyFromEditor_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";exports.getExtensionDependencyFromEditor=function(n,r){var i=require("LexicalExtensionLexicalBuilder").LexicalBuilder.fromEditor(n).getExtensionRep(r);return void 0===i&&function(e){var r=new URL("https://lexical.dev/docs/error"),i=new URLSearchParams();i.append("code",e);for(var _len=arguments.length,n=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){n[_key-1]=arguments[_key];}for(var _e of n)i.append("v",_e);throw r.search=i.toString(),Error("Minified Lexical error #"+e+"; visit "+r.toString()+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");}(303,r.name),i.getExtensionDependency();};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<636ce418821cb27dc9dbec72e19eb5ec>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionGetPeerDependencyFromEditor.prod",["LexicalExtensionLexicalBuilder"],(function $module_LexicalExtensionGetPeerDependencyFromEditor_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";function r(r,n){var o=require("LexicalExtensionLexicalBuilder").LexicalBuilder.maybeFromEditor(r);if(!o)return;var t=o.extensionNameMap.get(n);return t?t.getExtensionDependency():void 0;}exports.getPeerDependencyFromEditor=r,exports.getPeerDependencyFromEditorOrThrow=function(e,n){var o=r(e,n);return void 0===o&&function(e){var n=new URL("https://lexical.dev/docs/error"),o=new URLSearchParams();o.append("code",e);for(var _len=arguments.length,r=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){r[_key-1]=arguments[_key];}for(var _e of r)o.append("v",_e);throw n.search=o.toString(),Error("Minified Lexical error #"+e+"; visit "+n.toString()+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");}(291,n),o;};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<d51f007021a06a413fbf4111fef77d02>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionHorizontalRuleExtension.prod",["Lexical","LexicalExtensionEditorStateExtension","LexicalExtensionNodeSelectionExtension","LexicalExtensionSignals","LexicalUtils"],(function $module_LexicalExtensionHorizontalRuleExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var i=require("Lexical").createCommand("INSERT_HORIZONTAL_RULE_COMMAND");var _s3=function(_t$DecoratorNode){function s(){return _t$DecoratorNode.apply(this,arguments)||this;}babelHelpers.inheritsLoose(s,_t$DecoratorNode);var _proto=s.prototype;_proto.$config=function $config(){return this.config("horizontalrule",{"extends":require("Lexical").DecoratorNode,importDOM:{hr:function hr(){return{conversion:l,priority:0};}}});};_proto.exportDOM=function exportDOM(){return{element:require("Lexical").$getDocument().createElement("hr")};};_proto.createDOM=function createDOM(e){var n=require("Lexical").$getDocument().createElement("hr");return require("Lexical").addClassNamesToElement(n,e.theme.hr),n;};_proto.getTextContent=function getTextContent(){return"\n";};_proto.isInline=function isInline(){return!1;};_proto.updateDOM=function updateDOM(){return!1;};return s;}(require("Lexical").DecoratorNode);function l(){return{node:c()};}function c(){return require("Lexical").$create(_s3);}function a(e){return e instanceof _s3;}var d={dependencies:[require("LexicalExtensionEditorStateExtension").EditorStateExtension,require("LexicalExtensionNodeSelectionExtension").NodeSelectionExtension],name:"@lexical/extension/HorizontalRule",nodes:function nodes(){return[_s3];},register:function register(n,l,d){var _n$_config$theme$hrSe;var u=d.getDependency(require("LexicalExtensionNodeSelectionExtension").NodeSelectionExtension).output.watchNodeKey,N=require("LexicalExtensionSignals").signal({nodeSelections:new Map()}),g=(_n$_config$theme$hrSe=n._config.theme.hrSelected)!=null?_n$_config$theme$hrSe:"selected";return require("Lexical").mergeRegister(n.registerCommand(i,function(n){var o=require("Lexical").$getSelection();if(!require("Lexical").$isRangeSelection(o))return!1;if(null!==o.focus.getNode()){var _t=c();require("LexicalUtils").$insertNodeToNearestRoot(_t);}return!0;},require("Lexical").COMMAND_PRIORITY_EDITOR),n.registerCommand(require("Lexical").CLICK_COMMAND,function(e){if(require("Lexical").isDOMNode(e.target)){var _n=require("Lexical").$getNodeFromDOMNode(e.target);if(a(_n))return function(e,n){if(n===void 0){n=!1;}var o=require("Lexical").$getSelection(),r=e.isSelected(),i=e.getKey();var s;n&&require("Lexical").$isNodeSelection(o)?s=o:(s=require("Lexical").$createNodeSelection(),require("Lexical").$setSelection(s)),r?s["delete"](i):s.add(i);}(_n,e.shiftKey),!0;}return!1;},require("Lexical").COMMAND_PRIORITY_LOW),n.registerMutationListener(_s3,function(e,t){require("LexicalExtensionSignals").batch(function(){var t=!1;var _N$peek=N.peek(),o=_N$peek.nodeSelections;for(var _ref2 of e.entries()){var _i=_ref2[0];var _s=_ref2[1];if("destroyed"===_s)o["delete"](_i),t=!0;else{var _e=o.get(_i),_s2=n.getElementByKey(_i);_e?_e.domNode.value=_s2:(t=!0,o.set(_i,{domNode:require("LexicalExtensionSignals").signal(_s2),selectedSignal:u(_i)}));}}t&&(N.value={nodeSelections:o});});}),require("LexicalExtensionSignals").effect(function(){var e=[];var _loop=function _loop(){var n=_ref4.domNode;var o=_ref4.selectedSignal;e.push(require("LexicalExtensionSignals").effect(function(){var e=n.value;e&&(o.value?require("Lexical").addClassNamesToElement(e,g):require("Lexical").removeClassNamesFromElement(e,g));}));};for(var _ref4 of N.value.nodeSelections.values()){_loop();}return require("Lexical").mergeRegister.apply(require("Lexical"),Array.from(e));}));}};exports.$createHorizontalRuleNode=c,exports.$isHorizontalRuleNode=a,exports.HorizontalRuleExtension=d,exports.HorizontalRuleNode=_s3,exports.INSERT_HORIZONTAL_RULE_COMMAND=i;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<a5928c8b386dac65ec18ccc4a7098238>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionInitialStateExtension.prod",["Lexical"],(function $module_LexicalExtensionInitialStateExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var _require_Lexical;var i={tag:(_require_Lexical=require("Lexical")).HISTORY_MERGE_TAG};function e(){var i=require("Lexical").$getRoot();i.isEmpty()&&i.append(require("Lexical").$createParagraphNode());}var o={config:{setOptions:i,updateOptions:i},init:function init(_ref){var _ref$$initialEditorSt=_ref.$initialEditorState,t=_ref$$initialEditorSt===void 0?e:_ref$$initialEditorSt;return{$initialEditorState:t,initialized:!1};},afterRegistration:function afterRegistration(i,_ref2,a){var e=_ref2.updateOptions,o=_ref2.setOptions;var n=a.getInitResult();if(!n.initialized){n.initialized=!0;var _a=n.$initialEditorState;if(require("Lexical").$isEditorState(_a))i.setEditorState(_a,o);else if("function"==typeof _a)i.update(function(){_a(i);},e);else if(_a&&("string"==typeof _a||"object"==typeof _a)){var _t=i.parseEditorState(_a);i.setEditorState(_t,o);}}return function(){};},name:"@lexical/extension/InitialState",nodes:[_require_Lexical.RootNode,_require_Lexical.TextNode,_require_Lexical.LineBreakNode,_require_Lexical.TabNode,_require_Lexical.ParagraphNode]};exports.InitialStateExtension=o;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<58dcbe4c9d785eb3db3910c96676b1ec>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionLexicalBuilder.prod",["Lexical","LexicalExtensionConfig","LexicalExtensionInitialStateExtension"],(function $module_LexicalExtensionLexicalBuilder_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var _excluded=["$initialEditorState","onError","onWarn"];function i(t){var n=new URL("https://lexical.dev/docs/error"),i=new URLSearchParams();i.append("code",t);for(var _len=arguments.length,e=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){e[_key-1]=arguments[_key];}for(var _t of e)i.append("v",_t);throw n.search=i.toString(),Error("Minified Lexical error #"+t+"; visit "+n.toString()+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");}function s(){var t;try{t="0.51.0+prod.cjs";}catch(_unused){}return t!=null?t:'"<unknown>+source"';}var o=s(),r=new Set(["__proto__","constructor","prototype"]);function a(t,e){if(t&&e&&!Array.isArray(e)&&"object"==typeof t&&"object"==typeof e){var _n=t,_i=e;for(var _t2 in _i)!r.has(_t2)&&Object.prototype.hasOwnProperty.call(_i,_t2)&&(_n[_t2]=a(_n[_t2],_i[_t2]));return t;}return e;}function c(t){return 0===t.id;}function d(t){return 2===t.id;}var g=new Set();var _h=function(){function h(t,e){this.builder=t,this.extension=e,this.configs=new Set(),this.state={id:0};}var _proto=h.prototype;_proto.mergeConfigs=function mergeConfigs(){var e=this.extension.config||{};var n=this.extension.mergeConfig?this.extension.mergeConfig.bind(this.extension):require("Lexical").shallowMergeConfig;for(var _t3 of this.configs)e=n(e,_t3);return e;};_proto.init=function init(t){var e=this.state;d(e)||i(306,String(e.id));var n={getDependency:this.getInitDependency.bind(this),getDirectDependentNames:this.getDirectDependentNames.bind(this),getPeer:this.getInitPeer.bind(this),getPeerNameSet:this.getPeerNameSet.bind(this)},s=babelHelpers["extends"]({},n,{getDependency:this.getDependency.bind(this),getInitResult:this.getInitResult.bind(this),getPeer:this.getPeer.bind(this)}),o=function(t,e,n){return Object.assign(t,{config:e,id:3,registerState:n});}(e,this.mergeConfigs(),n);var r;this.state=o,this.extension.init&&(r=this.extension.init(t,o.config,n)),this.state=function(t,e,n){return Object.assign(t,{id:4,initResult:e,registerState:n});}(o,r,s);};_proto.build=function build(t){var e=this.state;var n;4!==e.id&&i(307,String(e.id),String(5)),this.extension.build&&(n=this.extension.build(t,e.config,e.registerState));var s=babelHelpers["extends"]({},e.registerState,{getOutput:function getOutput(){return n;},getSignal:this.getSignal.bind(this)});this.state=function(t,e,n){return Object.assign(t,{id:5,output:e,registerState:n});}(e,n,s);};_proto.register=function register(t,e){var _this=this;this._signal=e;var n=this.state;5!==n.id&&i(308,String(n.id),String(5));var s=this.extension.register&&this.extension.register(t,n.config,n.registerState);return this.state=function(t){return Object.assign(t,{id:6});}(n),function(){var t=_this.state;7!==t.id&&i(309,String(n.id),String(7)),_this.state=function(t){return Object.assign(t,{id:5});}(t),s&&s();};};_proto.afterRegistration=function afterRegistration(t){var e=this.state;var n;return 6!==e.id&&i(310,String(e.id),String(6)),this.extension.afterRegistration&&(n=this.extension.afterRegistration(t,e.config,e.registerState)),this.state=function(t){return Object.assign(t,{id:7});}(e),n;};_proto.getSignal=function getSignal(){return void 0===this._signal&&i(311),this._signal;};_proto.getInitResult=function getInitResult(){void 0===this.extension.init&&i(312,this.extension.name);var t=this.state;return function(t){return t.id>=4;}(t)||i(313,String(t.id),String(4)),t.initResult;};_proto.getInitPeer=function getInitPeer(t){var e=this.builder.extensionNameMap.get(t);return e?e.getExtensionInitDependency():void 0;};_proto.getExtensionInitDependency=function getExtensionInitDependency(){var t=this.state;return function(t){return t.id>=3;}(t)||i(314,String(t.id),String(3)),{config:t.config};};_proto.getPeer=function getPeer(t){var e=this.builder.extensionNameMap.get(t);return e?e.getExtensionDependency():void 0;};_proto.getInitDependency=function getInitDependency(t){var e=this.builder.getExtensionRep(t);return void 0===e&&i(315,this.extension.name,t.name),e.getExtensionInitDependency();};_proto.getDependency=function getDependency(t){var e=this.builder.getExtensionRep(t);return void 0===e&&i(315,this.extension.name,t.name),e.getExtensionDependency();};_proto.getState=function getState(){var t=this.state;return function(t){return t.id>=7;}(t)||i(316,String(t.id),String(7)),t;};_proto.getDirectDependentNames=function getDirectDependentNames(){return this.builder.incomingEdges.get(this.extension.name)||g;};_proto.getPeerNameSet=function getPeerNameSet(){var t=this._peerNameSet;return t||(t=new Set((this.extension.peerDependencies||[]).map(function(_ref){var t=_ref[0];return t;})),this._peerNameSet=t),t;};_proto.getExtensionDependency=function getExtensionDependency(){if(!this._dependency){var _t4=this.state;(function(t){return t.id>=5;})(_t4)||i(317,this.extension.name),this._dependency={config:_t4.config,init:_t4.initResult,output:_t4.output};}return this._dependency;};return h;}();var f=Symbol["for"]("LexicalExtensionLexicalBuilder");function u(){}function l(t){throw t;}function p(t){return Array.isArray(t)?t:[t];}var m=o;var _x=function(){function x(t){this.outgoingConfigEdges=new Map(),this.incomingEdges=new Map(),this.extensionNameMap=new Map(),this.conflicts=new Map(),this.PACKAGE_VERSION=m,this.roots=t;for(var _e of t)this.addExtension(_e);}x.fromExtensions=function fromExtensions(t){var e=[p(require("LexicalExtensionInitialStateExtension").InitialStateExtension)];for(var _n2 of t)e.push(p(_n2));return new x(e);};x.maybeFromEditor=function maybeFromEditor(t){var e=t[f];return e&&(e.PACKAGE_VERSION!==m&&i(292,e.PACKAGE_VERSION,m),e instanceof x||i(293)),e;};x.fromEditor=function fromEditor(t){var e=x.maybeFromEditor(t);return void 0===e&&i(294),e;};var _proto2=x.prototype;_proto2.constructEditor=function constructEditor(){var _Object$assign;var _this$buildCreateEdit=this.buildCreateEditorArgs(),e=_this$buildCreateEdit.$initialEditorState,n=_this$buildCreateEdit.onError,i=_this$buildCreateEdit.onWarn,s=babelHelpers.objectWithoutPropertiesLoose(_this$buildCreateEdit,_excluded),o=Object.assign(require("Lexical").createEditor(babelHelpers["extends"]({},s,n?{onError:function onError(t){n(t,o);}}:{},i?{onWarn:function onWarn(t){i(t,o);}}:{})),(_Object$assign={},_Object$assign[f]=this,_Object$assign));for(var _t5 of this.sortedExtensionReps())_t5.build(o);return o;};_proto2.buildEditor=function buildEditor(){var _Object$assign2;var e=u;function n(){try{e();}finally{e=u;}}var i=Object.assign(this.constructEditor(),(_Object$assign2={dispose:n},_Object$assign2[typeof Symbol==="function"?Symbol.dispose:"@@dispose"]=n,_Object$assign2));return e=require("Lexical").mergeRegister(this.registerEditor(i),function(){return i.setRootElement(null);}),i;};_proto2.hasExtensionByName=function hasExtensionByName(t){return this.extensionNameMap.has(t);};_proto2.getExtensionRep=function getExtensionRep(t){var e=this.extensionNameMap.get(t.name);if(e)return e.extension!==t&&i(295,t.name),e;};_proto2.addEdge=function addEdge(t,e,n){var i=this.outgoingConfigEdges.get(t);if(i){var _t6=i.get(e);_t6?_t6.push.apply(_t6,Array.from(n)):i.set(e,n);}else this.outgoingConfigEdges.set(t,new Map([[e,n]]));var s=this.incomingEdges.get(e);s?s.add(t):this.incomingEdges.set(e,new Set([t]));};_proto2.addExtension=function addExtension(t){void 0!==this._sortedExtensionReps&&i(296);var e=p(t),n=e[0];"string"!=typeof n.name&&i(297,typeof n.name);var s=this.extensionNameMap.get(n.name);if(void 0!==s&&s.extension!==n&&i(298,n.name),!s){s=new _h(this,n),this.extensionNameMap.set(n.name,s);var _t7=this.conflicts.get(n.name);"string"==typeof _t7&&i(299,n.name,_t7);for(var _t8 of n.conflictsWith||[])this.extensionNameMap.has(_t8)&&i(299,n.name,_t8),this.conflicts.set(_t8,n.name);for(var _t9 of n.dependencies||[]){var _e2=p(_t9);this.addEdge(n.name,_e2[0].name,_e2.slice(1)),this.addExtension(_e2);}for(var _ref3 of n.peerDependencies||[]){var _t0=_ref3[0];var _e3=_ref3[1];this.addEdge(n.name,_t0,_e3?[_e3]:[]);}}};_proto2.sortedExtensionReps=function sortedExtensionReps(){var _this2=this;if(this._sortedExtensionReps)return this._sortedExtensionReps;var t=[],_e4=function e(n,s){var o=n.state;if(d(o))return;var r=n.extension.name;var a;c(o)||i(300,r,s||"[unknown]"),c(a=o)||i(304,String(a.id),String(0)),o=Object.assign(a,{id:1}),n.state=o;var g=_this2.outgoingConfigEdges.get(r);if(g)for(var _t1 of g.keys()){var _n3=_this2.extensionNameMap.get(_t1);_n3&&_e4(_n3,r);}o=function(t){return function(t){return 1===t.id;}(t)||i(305,String(t.id),String(1)),Object.assign(t,{id:2});}(o),n.state=o,t.push(n);};for(var _t10 of this.extensionNameMap.values())c(_t10.state)&&_e4(_t10);for(var _e5 of t)for(var _ref5 of this.outgoingConfigEdges.get(_e5.extension.name)||[]){var _t11=_ref5[0];var _n4=_ref5[1];if(_n4.length>0){var _e6=this.extensionNameMap.get(_t11);if(_e6)for(var _t12 of _n4)_e6.configs.add(_t12);}}for(var _ref7 of this.roots){var _t13=_ref7[0];var _e7=babelHelpers.arrayLikeToArray(_ref7).slice(1);if(_e7.length>0){var _n5=this.extensionNameMap.get(_t13.name);void 0===_n5&&i(301,_t13.name);for(var _t14 of _e7)_n5.configs.add(_t14);}}return this._sortedExtensionReps=t,this._sortedExtensionReps;};_proto2.registerEditor=function registerEditor(e){var n=this.sortedExtensionReps(),i=new AbortController(),s=[function(){return i.abort();}],o=i.signal;for(var _t15 of n){var _n6=_t15.register(e,o);_n6&&s.push(_n6);}for(var _t16 of n){var _n7=_t16.afterRegistration(e);_n7&&s.push(_n7);}return require("Lexical").mergeRegister.apply(require("Lexical"),Array.from(s));};_proto2.buildCreateEditorArgs=function buildCreateEditorArgs(){var t={},n=new Set(),s=new Map(),o=new Map(),r={},c={},d=this.sortedExtensionReps();for(var _g of d){var _d=_g.extension;if(void 0!==_d.onError&&(t.onError=_d.onError),void 0!==_d.onWarn&&(t.onWarn=_d.onWarn),void 0!==_d.disableEvents&&(t.disableEvents=_d.disableEvents),void 0!==_d.parentEditor&&(t.parentEditor=_d.parentEditor),void 0!==_d.editable&&(t.editable=_d.editable),void 0!==_d.namespace&&(t.namespace=_d.namespace),void 0!==_d.$initialEditorState&&(t.$initialEditorState=_d.$initialEditorState),_d.nodes)for(var _t17 of require("LexicalExtensionConfig").getNodeConfig(_d)){if("function"!=typeof _t17){var _e8=s.get(_t17.replace);_e8&&i(302,_d.name,_t17.replace.name,_e8.extension.name),s.set(_t17.replace,_g);}n.add(_t17);}if(_d.html){if(_d.html["export"])for(var _ref9 of _d.html["export"].entries()){var _t18=_ref9[0];var _e9=_ref9[1];o.set(_t18,_e9);}_d.html["import"]&&Object.assign(r,_d.html["import"]);}_d.theme&&a(c,_d.theme);}Object.keys(c).length>0&&(t.theme=c),n.size&&(t.nodes=Array.from(n));var g=Object.keys(r).length>0,h=o.size>0;(g||h)&&(t.html={},g&&(t.html["import"]=r),h&&(t.html["export"]=o));for(var _e0 of d)_e0.init(t);return t.onError||(t.onError=l),t;};return x;}();exports.LexicalBuilder=_x,exports.buildEditorFromExtensions=function(){for(var _len2=arguments.length,t=new Array(_len2),_key2=0;_key2<_len2;_key2++){t[_key2]=arguments[_key2];}return _x.fromExtensions(t).buildEditor();},exports.builderSymbol=f;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<36713252c4833d4b3ae71c4c15bd6cb7>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionNamedSignals.prod",["LexicalExtensionSignals"],(function $module_LexicalExtensionNamedSignals_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";exports.namedSignals=function(i,s){if(s===void 0){s={};}var t={};for(var e in i){var o=s[e],r=require("LexicalExtensionSignals").signal(void 0===o?i[e]:o);t[e]=r;}return t;};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<78cfb82b1dd34245891c21fc6632a36d>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionNodeSelectionExtension.prod",["Lexical","LexicalExtensionEditorStateExtension","LexicalExtensionSignals","LexicalExtensionWatchedSignal"],(function $module_LexicalExtensionNodeSelectionExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var o=new Set(),s={build:function build(s,a,c){var d=c.getDependency(require("LexicalExtensionEditorStateExtension").EditorStateExtension).output,l=require("LexicalExtensionSignals").signal({watchedNodeKeys:new Map()}),r=require("LexicalExtensionWatchedSignal").watchedSignal(function(){},function(){return require("LexicalExtensionSignals").effect(function(){var t=r.peek(),n=l.value.watchedNodeKeys;var i,o=!1;d.value.read(function(){if(require("Lexical").$getSelection())for(var _ref2 of n.entries()){var _s=_ref2[0];var _a=_ref2[1];{if(0===_a.size){n["delete"](_s);continue;}var _c=require("Lexical").$getNodeByKey(_s),_d=_c&&_c.isSelected()||!1;o=o||_d!==(!!t&&t.has(_s)),_d&&(i=i||new Set(),i.add(_s));}}}),!o&&i&&t&&i.size===t.size||(r.value=i);});});return{watchNodeKey:function watchNodeKey(e){var t=require("LexicalExtensionSignals").computed(function(){return(r.value||o).has(e);}),_l$peek=l.peek(),i=_l$peek.watchedNodeKeys;var s=i.get(e);var a=void 0!==s;return s=s||new Set(),s.add(t),a||(i.set(e,s),l.value={watchedNodeKeys:i}),t;}};},dependencies:[require("LexicalExtensionEditorStateExtension").EditorStateExtension],name:"@lexical/extension/NodeSelection"};exports.NodeSelectionExtension=s;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<9056b347b4b5eb3171e68dbb8c9604f1>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionNormalizeInlineElementsExtension.prod",["Lexical","LexicalExtensionNamedSignals","LexicalExtensionSignals"],(function $module_LexicalExtensionNormalizeInlineElementsExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";function t(n){require("Lexical").$isElementNode(n)&&n.isInline()&&n.isEmpty()&&n.remove();}var s={build:function build(e,i,t){return require("LexicalExtensionNamedSignals").namedSignals(i);},config:{disabled:!1},name:"@lexical/NormalizeInlineElements",register:function register(n,s,o){var l=o.getOutput();return require("LexicalExtensionSignals").effect(function(){if(!l.disabled.value){var _i=[];var _loop=function _loop(){var s=_ref2.klass;var o=_ref2.transforms;s.prototype instanceof require("Lexical").ElementNode&&s.prototype.isInline!==require("Lexical").ElementNode.prototype.isInline&&(o.add(t),_i.push(function(){return o["delete"](t);}));};for(var _ref2 of n._nodes.values()){_loop();}return function(){return _i.forEach(function(e){return e();});};}});}};exports.NormalizeInlineElementsExtension=s;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<3dbf5088106fe9b39cd39b72fb6d8300>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionNormalizeTripleClickSelectionExtension.prod",["Lexical","LexicalExtensionNamedSignals","LexicalExtensionSignals"],(function $module_LexicalExtensionNormalizeTripleClickSelectionExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var n=new Set([require("Lexical").SKIP_SELECTION_FOCUS_TAG,require("Lexical").SKIP_SCROLL_INTO_VIEW_TAG]),r={build:function build(e,t,n){return require("LexicalExtensionNamedSignals").namedSignals(t);},config:{$fixFocusOverselection:function $fixFocusOverselection(){var i=require("Lexical").$getSelection();if(require("Lexical").$isRangeSelection(i)&&!i.isCollapsed()){var _t=require("Lexical").$getCaretRangeInDirection(require("Lexical").$caretRangeFromSelection(i),"next");var _r=_t.focus;for(require("Lexical").$isTextPointCaret(_r)&&_t.anchor.origin!==_r.origin&&0===_r.offset&&(_r=require("Lexical").$rewindSiblingCaret(_r.getSiblingCaret())),require("Lexical").$isSiblingCaret(_r)&&_t.anchor.origin!==_r.origin&&require("Lexical").$isLineBreakNode(_r.origin)&&(_r=require("Lexical").$rewindSiblingCaret(_r));require("Lexical").$isChildCaret(_r)&&_t.anchor.origin!==_r.origin;)_r=require("Lexical").$rewindSiblingCaret(require("Lexical").$getSiblingCaret(_r.origin,"next"));if(require("Lexical").$isSiblingCaret(_r)&&require("Lexical").$isElementNode(_r.origin)&&(_r=require("Lexical").$normalizeCaret(require("Lexical").$getChildCaret(_r.origin,"previous")).getFlipped()),_r=require("Lexical").$normalizeCaret(_r),!_r.isSamePointCaret(_t.focus)){var _i=require("Lexical").$setSelectionFromCaretRange(require("Lexical").$getCaretRange(_t.anchor,_r)),o=require("Lexical").$getEditor().getRootElement(),a=o&&require("Lexical").getDOMSelection(o.ownerDocument.defaultView);a&&require("Lexical").$updateDOMSelection(require("Lexical").$getPreviousSelection(),_i,require("Lexical").$getEditor(),a,n,o);}}},dateNow:function dateNow(){return Date.now();},disabled:!1,thresholdMsec:100},name:"@lexical/NormalizeTripleClickSelection",register:function register(i,n,r){return require("LexicalExtensionSignals").effect(function(){var t=r.getOutput();if(!t.disabled.value)return i.registerRootListener(function(n){if(!n)return;var r=0;var o=function o(e){if(e?e.detail>2:r>0){var _i2=t.dateNow.peek()();r=e&&"mousedown"===e.type||_i2-r<=t.thresholdMsec.peek()?_i2:0;}return r;};return require("Lexical").mergeRegister(i.registerCommand(require("Lexical").SELECTION_CHANGE_COMMAND,function(){return o(null)&&(r=0,t.$fixFocusOverselection.peek()()),!1;},require("Lexical").COMMAND_PRIORITY_BEFORE_CRITICAL),require("Lexical").registerEventListeners(n,{mousedown:o,mouseup:o},!0));});});}};exports.NormalizeTripleClickSelectionExtension=r;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<8bcef4f4c63a3166567e2d1862bcf600>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionRootElementExtension.prod",["LexicalExtensionWatchedSignal"],(function $module_LexicalExtensionRootElementExtension_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var t={build:function build(t){return require("LexicalExtensionWatchedSignal").watchedSignal(function(){return t.getRootElement();},function(e){return t.registerRootListener(function(t){e.value=t;});});},name:"@lexical/extension/RootElement"};exports.RootElementExtension=t;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<3a9501e74ad1ecf81d7be8de4137ae35>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionSignals.prod",[],(function $module_LexicalExtensionSignals_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var t=Symbol["for"]("preact-signals");function i(){if(e>1)return void e--;var t,i=!1;for(function(){var t=r;for(r=void 0;void 0!==t;)t.S.v===t.v&&(t.S.i=t.i),t=t.o;}();void 0!==n;){var _o=n;for(n=void 0,h++;void 0!==_o;){var _n=_o.u;if(_o.u=void 0,_o.f&=-3,!(8&_o.f)&&l(_o))try{_o.c();}catch(o){i||(t=o,i=!0);}_o=_n;}}if(h=0,e--,i)throw t;}var o,n;function s(t){var i=o;o=void 0;try{return t();}finally{o=i;}}var r,e=0,h=0,f=0,c=0,u=0;function d(t){if(void 0===o)return;var i=t.n;return void 0===i||i.t!==o?(i={i:0,S:t,p:o.s,n:void 0,t:o,e:void 0,x:void 0,r:i},void 0!==o.s&&(o.s.n=i),o.s=i,t.n=i,32&o.f&&t.S(i),i):-1===i.i?(i.i=0,void 0!==i.n&&(i.n.p=i.p,void 0!==i.p&&(i.p.n=i.n),i.p=o.s,i.n=void 0,o.s.n=i,o.s=i),i):void 0;}function v(t,i){this.v=t,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=null==i?void 0:i.watched,this.Z=null==i?void 0:i.unwatched,this.name=null==i?void 0:i.name;}function l(t){for(var _i=t.s;void 0!==_i;_i=_i.n)if(_i.S.i!==_i.i||!_i.S.h()||_i.S.i!==_i.i)return!0;return!1;}function p(t){for(var _i2=t.s;void 0!==_i2;_i2=_i2.n){var _o2=_i2.S.n;if(void 0!==_o2&&(_i2.r=_o2),_i2.S.n=_i2,_i2.i=-1,void 0===_i2.n){t.s=_i2;break;}}}function y(t){var i,o=t.s;for(;void 0!==o;){var _t=o.p;-1===o.i?(o.S.U(o),void 0!==_t&&(_t.n=o.n),void 0!==o.n&&(o.n.p=_t)):i=o,o.S.n=o.r,void 0!==o.r&&(o.r=void 0),o=_t;}t.s=i;}function a(t,i){v.call(this,void 0),this.x=t,this.s=void 0,this.g=u-1,this.f=4,this.W=null==i?void 0:i.watched,this.Z=null==i?void 0:i.unwatched,this.name=null==i?void 0:i.name;}function S(t){var n=t.m;if(t.m=void 0,"function"==typeof n){e++;var _s=o;o=void 0;try{n();}catch(i){throw t.f&=-2,t.f|=8,w(t),i;}finally{o=_s,i();}}}function w(t){for(var _i3=t.s;void 0!==_i3;_i3=_i3.n)_i3.S.U(_i3);t.x=void 0,t.s=void 0,S(t);}function x(t){if(o!==this)throw new Error("Out-of-order effect");y(this),o=t,this.f&=-2,8&this.f&&w(this),i();}function m(t,i){this.x=t,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=null==i?void 0:i.name;}function b(t,i){var o=new m(t,i);try{o.c();}catch(t){throw o.d(),t;}var n=o.d.bind(o);return n[typeof Symbol==="function"?Symbol.dispose:"@@dispose"]=n,n;}v.prototype.brand=t,v.prototype.h=function(){return!0;},v.prototype.S=function(t){var _this=this;var i=this.t;i!==t&&void 0===t.e&&(t.x=i,this.t=t,void 0!==i?i.e=t:s(function(){var t;null==(t=_this.W)||t.call(_this);}));},v.prototype.U=function(t){var _this2=this;if(void 0!==this.t){var _i4=t.e,_o3=t.x;void 0!==_i4&&(_i4.x=_o3,t.e=void 0),void 0!==_o3&&(_o3.e=_i4,t.x=void 0),t===this.t&&(this.t=_o3,void 0===_o3&&s(function(){var t;null==(t=_this2.Z)||t.call(_this2);}));}},v.prototype.subscribe=function(t){var _this3=this;return b(function(){var i=_this3.value,n=o;o=void 0;try{t(i);}finally{o=n;}},{name:"sub"});},v.prototype.valueOf=function(){return this.value;},v.prototype.toString=function(){return this.value+"";},v.prototype.toJSON=function(){return this.value;},v.prototype.peek=function(){var t=o;o=void 0;try{return this.value;}finally{o=t;}},Object.defineProperty(v.prototype,"value",{get:function get(){var t=d(this);return void 0!==t&&(t.i=this.i),this.v;},set:function set(t){if(t!==this.v){if(h>100)throw new Error("Cycle detected");!function(t){0!==e&&0===h&&t.l!==c&&(t.l=c,r={S:t,v:t.v,i:t.i,o:r});}(this),this.v=t,this.i++,u++,e++;try{for(var _t2=this.t;void 0!==_t2;_t2=_t2.x)_t2.t.N();}finally{i();}}}}),a.prototype=new v(),a.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===u)return!0;if(this.g=u,this.f|=1,this.i>0&&!l(this))return this.f&=-2,!0;var t=o;try{p(this),o=this;var _t3=this.x();(16&this.f||this.v!==_t3||0===this.i)&&(this.v=_t3,this.f&=-17,this.i++);}catch(t){this.v=t,this.f|=16,this.i++;}return o=t,y(this),this.f&=-2,!0;},a.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var _t4=this.s;void 0!==_t4;_t4=_t4.n)_t4.S.S(_t4);}v.prototype.S.call(this,t);},a.prototype.U=function(t){if(void 0!==this.t&&(v.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var _t5=this.s;void 0!==_t5;_t5=_t5.n)_t5.S.U(_t5);}},a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var _t6=this.t;void 0!==_t6;_t6=_t6.x)_t6.t.N();}},Object.defineProperty(a.prototype,"value",{get:function get(){if(1&this.f)throw new Error("Cycle detected");var t=d(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v;}}),m.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var _t7=this.x();"function"==typeof _t7&&(this.m=_t7);}finally{t();}},m.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,S(this),p(this),e++;var t=o;return o=this,x.bind(this,t);},m.prototype.N=function(){2&this.f||(this.f|=2,this.u=n,n=this);},m.prototype.d=function(){this.f|=8,1&this.f||w(this);},m.prototype.dispose=function(){this.d();},exports.batch=function(t){if(e>0)return t();c=++f,e++;try{return t();}finally{i();}},exports.computed=function(t,i){return new a(t,i);},exports.effect=b,exports.signal=function(t,i){return new v(t,i);},exports.untracked=s;}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<e7fb482f5c2bed7be96efcb2b1a85374>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("LexicalExtensionWatchedSignal.prod",["LexicalExtensionSignals"],(function $module_LexicalExtensionWatchedSignal_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";exports.watchedSignal=function(t,i){var a;return require("LexicalExtensionSignals").signal(t(),{unwatched:function unwatched(){a&&(a(),a=void 0);},watched:function watched(){this.value=t(),a=i(this);}});};}),null);
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @fullSyntaxTransform
 * @es6-async_DO_NOT_USE
 * @generated SignedSource<<4f2d1d74be3dc5562991c81827bee326>>
 * 
 * @nolint
 * @oncall lexical_web_text_editor
 * @preserve-invariant-messages
 * @preserve-whitespace
 * @preventMunge
 */__d("useLexicalSubscription.prod",["Lexical","LexicalComposerContext","react"],(function $module_useLexicalSubscription_prod(global,require,requireDynamic,requireLazy,module,exports){

"use strict";var _require_closure_react;var t=_require_closure_react||(_require_closure_react=require("react"));var r=require("Lexical").CAN_USE_DOM?t.useLayoutEffect:t.useEffect;exports.useLexicalSubscription=function(u){var _e$useLexicalComposer=require("LexicalComposerContext").useLexicalComposerContext(),i=_e$useLexicalComposer[0],s=t.useMemo(function(){return u(i);},[i,u]),_t$useState=t.useState(function(){return s.initialValueFn();}),c=_t$useState[0],n=_t$useState[1],o=t.useRef(c);return r(function(){var e=s.initialValueFn,t=s.subscribe,r=e();return o.current!==r&&(o.current=r,n(r)),t(function(e){o.current=e,n(e);});},[s,u]),c;};}),null);