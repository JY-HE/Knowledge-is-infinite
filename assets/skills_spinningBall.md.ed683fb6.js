import{_ as a,o as s,c as n,N as e}from"./chunks/framework.e35b7731.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"skills/spinningBall.md"}'),d={name:"skills/spinningBall.md"},t=e(`<div class="box-background" data-v-cdfe391f><div class="spinningBall" data-v-cdfe391f></div></div><details data-v-cdfe391f><summary data-v-cdfe391f>查看代码</summary><div class="language-vue" data-v-cdfe391f><button title="Copy Code" class="copy" data-v-cdfe391f></button><span class="lang" data-v-cdfe391f>vue</span><pre class="shiki material-theme-palenight" data-v-cdfe391f><code data-v-cdfe391f><span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>&lt;</span><span style="color:#F07178;" data-v-cdfe391f>template</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#89DDFF;" data-v-cdfe391f>&lt;</span><span style="color:#F07178;" data-v-cdfe391f>div</span><span style="color:#89DDFF;" data-v-cdfe391f> </span><span style="color:#C792EA;" data-v-cdfe391f>class</span><span style="color:#89DDFF;" data-v-cdfe391f>=</span><span style="color:#89DDFF;" data-v-cdfe391f>&quot;</span><span style="color:#C3E88D;" data-v-cdfe391f>spinningBall</span><span style="color:#89DDFF;" data-v-cdfe391f>&quot;</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;&lt;/</span><span style="color:#F07178;" data-v-cdfe391f>div</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>&lt;/</span><span style="color:#F07178;" data-v-cdfe391f>template</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;</span></span>
<span class="line" data-v-cdfe391f></span>
<span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>&lt;</span><span style="color:#F07178;" data-v-cdfe391f>style</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#C792EA;" data-v-cdfe391f>lang</span><span style="color:#89DDFF;" data-v-cdfe391f>=</span><span style="color:#89DDFF;" data-v-cdfe391f>&#39;</span><span style="color:#C3E88D;" data-v-cdfe391f>scss</span><span style="color:#89DDFF;" data-v-cdfe391f>&#39;</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>.</span><span style="color:#FFCB6B;" data-v-cdfe391f>spinningBall</span><span style="color:#89DDFF;" data-v-cdfe391f>{</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>width</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>200px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>height</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>200px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>background</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> transparent</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>border</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>10px</span><span style="color:#A6ACCD;" data-v-cdfe391f> solid </span><span style="color:#89DDFF;" data-v-cdfe391f>#</span><span style="color:#A6ACCD;" data-v-cdfe391f>00d9ff</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>border-radius</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>50%</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>position</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> relative</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#B2CCD6;" data-v-cdfe391f>animation</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> round </span><span style="color:#F78C6C;" data-v-cdfe391f>3s</span><span style="color:#A6ACCD;" data-v-cdfe391f> ease infinite</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#FFCB6B;" data-v-cdfe391f>&amp;</span><span style="color:#89DDFF;" data-v-cdfe391f>::</span><span style="color:#C792EA;" data-v-cdfe391f>before</span><span style="color:#89DDFF;" data-v-cdfe391f>{</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#FFCB6B;" data-v-cdfe391f>content</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#89DDFF;" data-v-cdfe391f>&#39;&#39;</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>display</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> block</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>position</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> absolute</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>top</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>0</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>left</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>14px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>width</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>30px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>height</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>30px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>border-radius</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>50px</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#B2CCD6;" data-v-cdfe391f>background</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#82AAFF;" data-v-cdfe391f>rgb</span><span style="color:#89DDFF;" data-v-cdfe391f>(</span><span style="color:#F78C6C;" data-v-cdfe391f>255</span><span style="color:#89DDFF;" data-v-cdfe391f>,</span><span style="color:#F78C6C;" data-v-cdfe391f>132</span><span style="color:#89DDFF;" data-v-cdfe391f>,</span><span style="color:#F78C6C;" data-v-cdfe391f>0</span><span style="color:#89DDFF;" data-v-cdfe391f>);</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#89DDFF;" data-v-cdfe391f>}</span></span>
<span class="line" data-v-cdfe391f></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#89DDFF;font-style:italic;" data-v-cdfe391f>@keyframes</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#82AAFF;" data-v-cdfe391f>round</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#89DDFF;" data-v-cdfe391f>{</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#C792EA;" data-v-cdfe391f>0%</span><span style="color:#89DDFF;" data-v-cdfe391f>{</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>            </span><span style="color:#B2CCD6;" data-v-cdfe391f>rotate</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>0deg</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#89DDFF;" data-v-cdfe391f>}</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#C792EA;" data-v-cdfe391f>100%</span><span style="color:#89DDFF;" data-v-cdfe391f>{</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>            </span><span style="color:#B2CCD6;" data-v-cdfe391f>rotate</span><span style="color:#89DDFF;" data-v-cdfe391f>:</span><span style="color:#A6ACCD;" data-v-cdfe391f> </span><span style="color:#F78C6C;" data-v-cdfe391f>360deg</span><span style="color:#89DDFF;" data-v-cdfe391f>;</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>        </span><span style="color:#89DDFF;" data-v-cdfe391f>}</span></span>
<span class="line" data-v-cdfe391f><span style="color:#A6ACCD;" data-v-cdfe391f>    </span><span style="color:#89DDFF;" data-v-cdfe391f>}</span></span>
<span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>}</span></span>
<span class="line" data-v-cdfe391f><span style="color:#89DDFF;" data-v-cdfe391f>&lt;/</span><span style="color:#F07178;" data-v-cdfe391f>style</span><span style="color:#89DDFF;" data-v-cdfe391f>&gt;</span></span></code></pre></div></details>`,2),l=[t];function c(p,f,o,v,r,D){return s(),n("div",null,l)}const F=a(d,[["render",c],["__scopeId","data-v-cdfe391f"]]);export{C as __pageData,F as default};
