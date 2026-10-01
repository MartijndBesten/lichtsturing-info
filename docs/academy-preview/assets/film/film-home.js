var zc=0,ll=1,kc=2;var ki=1,Vc=2,Ms=3,bi=0,ln=1,dn=2,Yn=0,Ss=1,wi=2,cl=3,hl=4,Gc=5;var Vi=100,Hc=101,Wc=102,Xc=103,qc=104,Yc=200,Zc=201,Jc=202,Kc=203,ul=204,dl=205,$c=206,Qc=207,jc=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,Zr=0,Jr=1,Kr=2,cs=3,$r=4,Qr=5,jr=6,ta=7,fl=0,ah=1,oh=2,Un=0,pl=1,ml=2,gl=3,rr=4,_l=5,ar=6,bs=7;var xl=300,Ti=301,Gi=302,Ta=303,Ea=304,or=306,Bi=1e3,Hn=1001,ea=1002,Je=1003,lh=1004;var lr=1005;var Qe=1006,Aa=1007;var Ei=1008;var fn=1009,yl=1010,vl=1011,ws=1012,Ra=1013,Nn=1014,Fn=1015,On=1016,Ca=1017,Ia=1018,Ts=1020,Ml=35902,Sl=35899,bl=1021,wl=1022,bn=1023,Wn=1026,Ai=1027,Tl=1028,Pa=1029,Ri=1030,La=1031;var Da=1033,cr=33776,hr=33777,ur=33778,dr=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Va=37488,Ga=37489,fr=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,Ka=37814,$a=37815,Qa=37816,ja=37817,to=37818,eo=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,pr=36285,co=36286;var ks=2300,na=2301,qr=2302,jo=2303,tl=2400,el=2401,nl=2402;var ch=3200;var ho=0,hh=1,si="",Ye="srgb",Vs="srgb-linear",Gs="linear",ye="srgb";var Yr=7680;var uh=519,dh=512,fh=513,ph=514,uo=515,mh=516,gh=517,fo=518,_h=519,xh=35044;var El="300 es",Dn=2e3,hs=2001;function Au(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yh(){let i=Hs("canvas");return i.style.display="block",i}var xc={},us=null;function Al(...i){let t="THREE."+i.shift();us?us("log",t,...i):[...i]}function vh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=vh(i);let t="THREE."+i.shift();if(us)us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function qt(...i){i=vh(i);let t="THREE."+i.shift();if(us)us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){let t=i.join(" ");t in xc||(xc[t]=!0,Xt(...i))}function Mh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Sh={[Zr]:Jr,[Kr]:jr,[$r]:ta,[cs]:Qr,[Jr]:Zr,[jr]:Kr,[ta]:$r,[Qr]:cs},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Io=Math.PI/180,Ws=180/Math.PI;function mr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function Cu(i,t){return(i%t+t)%t}function Po(i,t,e){return(1-e)*i+e*t}function Ns(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;var Qt=Ll,qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],f=r[a+0],d=r[a+1],g=r[a+2],S=r[a+3];if(p!==S||h!==f||l!==d||u!==g){let m=h*f+l*d+u*g+p*S;m<0&&(f=-f,d=-d,g=-g,S=-S,m=-m);let c=1-o;if(m<.9995){let v=Math.acos(m),E=Math.sin(v);c=Math.sin(c*v)/E,o=Math.sin(o*v)/E,h=h*c+f*o,l=l*c+d*o,u=u*c+g*o,p=p*c+S*o}else{h=h*c+f*o,l=l*c+d*o,u=u*c+g*o,p=p*c+S*o;let v=1/Math.sqrt(h*h+l*l+u*u+p*p);h*=v,l*=v,u*=v,p*=v}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],l=n[s+2],u=n[s+3],p=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+u*p+h*d-l*f,t[e+1]=h*g+u*f+l*p-o*d,t[e+2]=l*g+u*d+o*f-h*p,t[e+3]=u*g-o*p-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),f=h(n/2),d=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=f*u*p+l*d*g,this._y=l*d*p-f*u*g,this._z=l*u*g+f*d*p,this._w=l*u*p-f*d*g;break;case"YXZ":this._x=f*u*p+l*d*g,this._y=l*d*p-f*u*g,this._z=l*u*g-f*d*p,this._w=l*u*p+f*d*g;break;case"ZXY":this._x=f*u*p-l*d*g,this._y=l*d*p+f*u*g,this._z=l*u*g+f*d*p,this._w=l*u*p-f*d*g;break;case"ZYX":this._x=f*u*p-l*d*g,this._y=l*d*p+f*u*g,this._z=l*u*g-f*d*p,this._w=l*u*p+f*d*g;break;case"YZX":this._x=f*u*p+l*d*g,this._y=l*d*p+f*u*g,this._z=l*u*g-f*d*p,this._w=l*u*p-f*d*g;break;case"XZY":this._x=f*u*p-l*d*g,this._y=l*d*p-f*u*g,this._z=l*u*g+f*d*p,this._w=l*u*p+f*d*g;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],u=e[6],p=e[10],f=n+o+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(r-l)*d,this._z=(a-s)*d}else if(n>o&&n>p){let d=2*Math.sqrt(1+n-o-p);this._w=(u-h)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+l)/d}else if(o>p){let d=2*Math.sqrt(1+o-n-p);this._w=(r-l)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(h+u)/d}else{let d=2*Math.sqrt(1+p-n-o);this._w=(a-s)/d,this._x=(r+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*h,this._y=s*u+a*h+r*o-n*l,this._z=r*u+a*l+n*h-s*o,this._w=a*u-n*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);h=Math.sin(h*l)/u,e=Math.sin(e*l)/u,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dl=class Dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+h*l+a*p-o*u,this.y=n+h*u+o*l-r*p,this.z=s+h*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dl.prototype.isVector3=!0;var G=Dl,Lo=new G,yc=new qn,Ul=class Ul{constructor(t,e,n,s,r,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l)}set(t,e,n,s,r,a,o,h,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=h,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],u=n[4],p=n[7],f=n[2],d=n[5],g=n[8],S=s[0],m=s[3],c=s[6],v=s[1],E=s[4],x=s[7],b=s[2],w=s[5],R=s[8];return r[0]=a*S+o*v+h*b,r[3]=a*m+o*E+h*w,r[6]=a*c+o*x+h*R,r[1]=l*S+u*v+p*b,r[4]=l*m+u*E+p*w,r[7]=l*c+u*x+p*R,r[2]=f*S+d*v+g*b,r[5]=f*m+d*E+g*w,r[8]=f*c+d*x+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*h+s*r*l-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],p=u*a-o*l,f=o*h-u*r,d=l*r-a*h,g=e*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/g;return t[0]=p*S,t[1]=(s*l-u*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(u*e-s*h)*S,t[5]=(s*r-o*e)*S,t[6]=d*S,t[7]=(n*h-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Do.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;var $t=Ul,Do=new $t,vc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iu(){let i={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ye&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ye&&(s.r=ls(s.r),s.g=ls(s.g),s.b=ls(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vs]:{primaries:t,whitePoint:n,transfer:Gs,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:vc,fromXYZ:Mc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var he=Iu();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ls(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=Hs("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Hs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Pu=0,ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=mr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Lu=0,No=new G,an=class i extends Xn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Hn,s=Hn,r=Qe,a=Ei,o=bn,h=fn,l=i.DEFAULT_ANISOTROPY,u=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=mr(),this.name="",this.source=new ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case Hn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case Hn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=xl;an.DEFAULT_ANISOTROPY=1;var Nl=class Nl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,l=h[0],u=h[4],p=h[8],f=h[1],d=h[5],g=h[9],S=h[2],m=h[6],c=h[10];if(Math.abs(u-f)<.01&&Math.abs(p-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(p+S)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(l+1)/2,x=(d+1)/2,b=(c+1)/2,w=(u+f)/4,R=(p+S)/4,y=(g+m)/4;return E>x&&E>b?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=R/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=R/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(p-S)*(p-S)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(p-S)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+c-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;var Ie=Nl,sa=class extends Xn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new an(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Xs=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends an{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wa=class wa{constructor(t,e,n,s,r,a,o,h,l,u,p,f,d,g,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l,u,p,f,d,g,S,m)}set(t,e,n,s,r,a,o,h,l,u,p,f,d,g,S,m){let c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=h,c[2]=l,c[6]=u,c[10]=p,c[14]=f,c[3]=d,c[7]=g,c[11]=S,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),a=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=a*u,d=a*p,g=o*u,S=o*p;e[0]=h*u,e[4]=-h*p,e[8]=l,e[1]=d+g*l,e[5]=f-S*l,e[9]=-o*h,e[2]=S-f*l,e[6]=g+d*l,e[10]=a*h}else if(t.order==="YXZ"){let f=h*u,d=h*p,g=l*u,S=l*p;e[0]=f+S*o,e[4]=g*o-d,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=d*o-g,e[6]=S+f*o,e[10]=a*h}else if(t.order==="ZXY"){let f=h*u,d=h*p,g=l*u,S=l*p;e[0]=f-S*o,e[4]=-a*p,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*u,e[9]=S-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let f=a*u,d=a*p,g=o*u,S=o*p;e[0]=h*u,e[4]=g*l-d,e[8]=f*l+S,e[1]=h*p,e[5]=S*l+f,e[9]=d*l-g,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let f=a*h,d=a*l,g=o*h,S=o*l;e[0]=h*u,e[4]=S-f*p,e[8]=g*p+d,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=d*p+g,e[10]=f-S*p}else if(t.order==="XZY"){let f=a*h,d=a*l,g=o*h,S=o*l;e[0]=h*u,e[4]=-p,e[8]=l*u,e[1]=f*p+S,e[5]=a*u,e[9]=d*p-g,e[2]=g*p-d,e[6]=o*u,e[10]=S*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Du,t,Uu)}lookAt(t,e,n){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),hi.crossVectors(n,mn),hi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),hi.crossVectors(n,mn)),hi.normalize(),Ar.crossVectors(mn,hi),s[0]=hi.x,s[4]=Ar.x,s[8]=mn.x,s[1]=hi.y,s[5]=Ar.y,s[9]=mn.y,s[2]=hi.z,s[6]=Ar.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],u=n[1],p=n[5],f=n[9],d=n[13],g=n[2],S=n[6],m=n[10],c=n[14],v=n[3],E=n[7],x=n[11],b=n[15],w=s[0],R=s[4],y=s[8],T=s[12],P=s[1],F=s[5],z=s[9],X=s[13],L=s[2],k=s[6],I=s[10],H=s[14],J=s[3],W=s[7],tt=s[11],K=s[15];return r[0]=a*w+o*P+h*L+l*J,r[4]=a*R+o*F+h*k+l*W,r[8]=a*y+o*z+h*I+l*tt,r[12]=a*T+o*X+h*H+l*K,r[1]=u*w+p*P+f*L+d*J,r[5]=u*R+p*F+f*k+d*W,r[9]=u*y+p*z+f*I+d*tt,r[13]=u*T+p*X+f*H+d*K,r[2]=g*w+S*P+m*L+c*J,r[6]=g*R+S*F+m*k+c*W,r[10]=g*y+S*z+m*I+c*tt,r[14]=g*T+S*X+m*H+c*K,r[3]=v*w+E*P+x*L+b*J,r[7]=v*R+E*F+x*k+b*W,r[11]=v*y+E*z+x*I+b*tt,r[15]=v*T+E*X+x*H+b*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],u=t[2],p=t[6],f=t[10],d=t[14],g=t[3],S=t[7],m=t[11],c=t[15],v=h*d-l*f,E=o*d-l*p,x=o*f-h*p,b=a*d-l*u,w=a*f-h*u,R=a*p-o*u;return e*(S*v-m*E+c*x)-n*(g*v-m*b+c*w)+s*(g*E-S*b+c*R)-r*(g*x-S*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],h=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*h)+s*(r*l-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],u=t[8],p=t[9],f=t[10],d=t[11],g=t[12],S=t[13],m=t[14],c=t[15],v=e*o-n*a,E=e*h-s*a,x=e*l-r*a,b=n*h-s*o,w=n*l-r*o,R=s*l-r*h,y=u*S-p*g,T=u*m-f*g,P=u*c-d*g,F=p*m-f*S,z=p*c-d*S,X=f*c-d*m,L=v*X-E*z+x*F+b*P-w*T+R*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/L;return t[0]=(o*X-h*z+l*F)*k,t[1]=(s*z-n*X-r*F)*k,t[2]=(S*R-m*w+c*b)*k,t[3]=(f*w-p*R-d*b)*k,t[4]=(h*P-a*X-l*T)*k,t[5]=(e*X-s*P+r*T)*k,t[6]=(m*x-g*R-c*E)*k,t[7]=(u*R-f*x+d*E)*k,t[8]=(a*z-o*P+l*y)*k,t[9]=(n*P-e*z-r*y)*k,t[10]=(g*w-S*x+c*v)*k,t[11]=(p*x-u*w-d*v)*k,t[12]=(o*T-a*F-h*y)*k,t[13]=(e*F-n*T+s*y)*k,t[14]=(S*E-g*b-m*v)*k,t[15]=(u*b-p*E+f*v)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*h,l*h+s*o,0,l*o+s*h,u*o+n,u*h-s*a,0,l*h-s*o,u*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,u=a+a,p=o+o,f=r*l,d=r*u,g=r*p,S=a*u,m=a*p,c=o*p,v=h*l,E=h*u,x=h*p,b=n.x,w=n.y,R=n.z;return s[0]=(1-(S+c))*b,s[1]=(d+x)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(f+c))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+E)*R,s[9]=(m-v)*R,s[10]=(1-(f+S))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ki.set(s[0],s[1],s[2]).length(),o=Ki.set(s[4],s[5],s[6]).length(),h=Ki.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Cn.copy(this);let l=1/a,u=1/o,p=1/h;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=h,this}makePerspective(t,e,n,s,r,a,o=Dn,h=!1){let l=this.elements,u=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s),g,S;if(h)g=r/(a-r),S=a*r/(a-r);else if(o===Dn)g=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===hs)g=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn,h=!1){let l=this.elements,u=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),d=-(n+s)/(n-s),g,S;if(h)g=1/(a-r),S=a/(a-r);else if(o===Dn)g=-2/(a-r),S=-(a+r)/(a-r);else if(o===hs)g=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wa.prototype.isMatrix4=!0;var Ce=wa,Ki=new G,Cn=new Ce,Du=new G(0,0,0),Uu=new G(1,1,1),hi=new G,Ar=new G,mn=new G,Sc=new Ce,bc=new qn,ii=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],u=s[9],p=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-le(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Nu=0,wc=new G,$i=new qn,$n=new Ce,Rr=new G,Fs=new G,Fu=new G,Ou=new qn,Tc=new G(1,0,0),Ec=new G(0,1,0),Ac=new G(0,0,1),Rc={type:"added"},Bu={type:"removed"},Qi={type:"childadded",child:null},Fo={type:"childremoved",child:null},Ke=class i extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ii,n=new qn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new $t}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(Ec,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return wc.copy(t).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(Ec,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Fs,Rr,this.up):$n.lookAt(Rr,Fs,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),$i.setFromRotationMatrix($n),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bu),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,Fu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,Ou,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){let p=h[l];r(t.shapes,p)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let h=[];for(let l in o){let u=o[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new G(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Re=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},zu={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),c=this._getHandJoint(l,S);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=u.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zu)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=Cu(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oo(a,r,t+1/3),this.g=Oo(a,r,t),this.b=Oo(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=ls(t.r),this.g=ls(t.g),this.b=ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return he.workingToColorSpace(nn.copy(this),t),Math.round(le(nn.r*255,0,255))*65536+Math.round(le(nn.g*255,0,255))*256+Math.round(le(nn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(nn.copy(this),e);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,l,u=(o+a)/2;if(o===a)h=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:h=(s-r)/p+(s<r?6:0);break;case s:h=(r-n)/p+2;break;case r:h=(n-s)/p+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Ye){he.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,s=nn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Cr);let n=Po(ui.h,Cr.h,e),s=Po(ui.s,Cr.s,e),r=Po(ui.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Ct;Ct.NAMES=bh;var Ys=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new G,Qn=new G,Bo=new G,jn=new G,ji=new G,ts=new G,Cc=new G,zo=new G,ko=new G,Vo=new G,Go=new Ie,Ho=new Ie,Wo=new Ie,mi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Qn.subVectors(n,e),Bo.subVectors(t,e);let a=In.dot(In),o=In.dot(Qn),h=In.dot(Bo),l=Qn.dot(Qn),u=Qn.dot(Bo),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,d=(l*h-o*u)*f,g=(a*u-o*h)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,jn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,jn.x),h.addScaledVector(a,jn.y),h.addScaledVector(o,jn.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return Go.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Qn.subVectors(t,e),In.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ji.subVectors(s,n),ts.subVectors(r,n),zo.subVectors(t,n);let h=ji.dot(zo),l=ts.dot(zo);if(h<=0&&l<=0)return e.copy(n);ko.subVectors(t,s);let u=ji.dot(ko),p=ts.dot(ko);if(u>=0&&p<=u)return e.copy(s);let f=h*p-u*l;if(f<=0&&h>=0&&u<=0)return a=h/(h-u),e.copy(n).addScaledVector(ji,a);Vo.subVectors(t,r);let d=ji.dot(Vo),g=ts.dot(Vo);if(g>=0&&d<=g)return e.copy(r);let S=d*l-h*g;if(S<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ts,o);let m=u*g-d*p;if(m<=0&&p-u>=0&&d-g>=0)return Cc.subVectors(r,s),o=(p-u)/(p-u+(d-g)),e.copy(s).addScaledVector(Cc,o);let c=1/(m+S+f);return a=S*c,o=f*c,e.copy(n).addScaledVector(ji,a).addScaledVector(ts,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Pr.subVectors(this.max,Os),es.subVectors(t.a,Os),ns.subVectors(t.b,Os),is.subVectors(t.c,Os),di.subVectors(ns,es),fi.subVectors(is,ns),Di.subVectors(es,is);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!Xo(e,es,ns,is,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,es,ns,is,Pr))?!1:(Lr.crossVectors(di,fi),e=[Lr.x,Lr.y,Lr.z],Xo(e,es,ns,is,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new G,new G,new G,new G,new G,new G,new G,new G],Pn=new G,Ir=new gi,es=new G,ns=new G,is=new G,di=new G,fi=new G,Di=new G,Os=new G,Pr=new G,Lr=new G,Ui=new G;function Xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),h=t.dot(Ui),l=e.dot(Ui),u=n.dot(Ui);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>o)return!1}return!0}var ze=new G,Dr=new Qt,ku=0,hn=class extends Xn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ns(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ns(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ns(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ns(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ns(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Zs=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Js=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Vu=new gi,Bs=new G,qo=new G,ps=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(qo)),this.expandByPoint(Bs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Gu=0,Sn=new Ce,Yo=new Ke,ss=new G,gn=new gi,zs=new gi,qe=new G,je=class i extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Js:Zs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _e(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(qe.addVectors(gn.min,zs.min),gn.expandByPoint(qe),qe.addVectors(gn.max,zs.max),gn.expandByPoint(qe)):(gn.expandByPoint(zs.min),gn.expandByPoint(zs.max))}gn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)qe.fromBufferAttribute(o,l),h&&(ss.fromBufferAttribute(t,l),qe.add(ss)),s=Math.max(s,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],h=[];for(let y=0;y<n.count;y++)o[y]=new G,h[y]=new G;let l=new G,u=new G,p=new G,f=new Qt,d=new Qt,g=new Qt,S=new G,m=new G;function c(y,T,P){l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,T),p.fromBufferAttribute(n,P),f.fromBufferAttribute(r,y),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),u.sub(l),p.sub(l),d.sub(f),g.sub(f);let F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(F),m.copy(p).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),o[y].add(S),o[T].add(S),o[P].add(S),h[y].add(m),h[T].add(m),h[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,T=v.length;y<T;++y){let P=v[y],F=P.start,z=P.count;for(let X=F,L=F+z;X<L;X+=3)c(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let E=new G,x=new G,b=new G,w=new G;function R(y){b.fromBufferAttribute(s,y),w.copy(b);let T=o[y];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(w,T);let F=x.dot(h[y])<0?-1:1;a.setXYZW(y,E.x,E.y,E.z,F)}for(let y=0,T=v.length;y<T;++y){let P=v[y],F=P.start,z=P.count;for(let X=F,L=F+z;X<L;X+=3)R(t.getX(X+0)),R(t.getX(X+1)),R(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,a=new G,o=new G,h=new G,l=new G,u=new G,p=new G;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,g),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(u),h.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(o,h){let l=o.array,u=o.itemSize,p=o.normalized,f=new l.constructor(h.length*u),d=0,g=0;for(let S=0,m=h.length;S<m;S++){o.isInterleavedBufferAttribute?d=h[S]*o.data.stride+o.offset:d=h[S]*u;for(let c=0;c<u;c++)f[g++]=l[d++]}return new hn(f,u,p)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],l=t(h,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let h=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let f=l[u],d=t(f,n);h.push(d)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let l=n[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],u=[];for(let p=0,f=l.length;p<f;p++){let d=l[p];u.push(d.toJSON(t.data))}u.length>0&&(s[h]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],p=r[l];for(let f=0,d=p.length;f<d;f++)u.push(p[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=new G,Hu=new G,Wu=new $t,Ln=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zo.subVectors(n,e).cross(Hu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wu.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Xu=0,_i=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Ss,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new G,Jo=new G,Ur=new G,Nr=new G,aa=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(Jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Nr.dot(this.direction),h=-Nr.dot(Ur),l=Nr.lengthSq(),u=Math.abs(1-a*a),p,f,d,g;if(u>0)if(p=a*h-o,f=a*o-h,g=r*u,p>=0)if(f>=-g)if(f<=g){let S=1/u;p*=S,f*=S,d=p*(p+a*f+2*o)+f*(a*p+f+2*h)+l}else f=r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*h)+l;else f=-r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*h)+l;else f<=-g?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-h),r),d=-p*p+f*(f+2*h)+l):f<=g?(p=0,f=Math.min(Math.max(-r,-h),r),d=f*(f+2*h)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-h),r),d=-p*p+f*(f+2*h)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),d=-p*p+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Jo).addScaledVector(Ur,f),d}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,h=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,h=(t.min.z-f.z)*p),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,h=o.x,l=o.y,u=o.z,p=t.x-a.x,f=t.y-a.y,d=t.z-a.z,g=e.x-a.x,S=e.y-a.y,m=e.z-a.z,c=n.x-a.x,v=n.y-a.y,E=n.z-a.z,x=Math.abs(h),b=Math.abs(l),w=Math.abs(u),R,y,T,P,F,z,X,L,k,I,H,J;if(x>=b&&x>=w?(T=h,z=p,k=g,J=c,h>=0?(R=l,y=u,P=f,F=d,X=S,L=m,I=v,H=E):(R=u,y=l,P=d,F=f,X=m,L=S,I=E,H=v)):b>=w?(T=l,z=f,k=S,J=v,l>=0?(R=u,y=h,P=d,F=p,X=m,L=g,I=E,H=c):(R=h,y=u,P=p,F=d,X=g,L=m,I=c,H=E)):(T=u,z=d,k=m,J=E,u>=0?(R=h,y=l,P=p,F=f,X=g,L=S,I=c,H=v):(R=l,y=h,P=f,F=p,X=S,L=g,I=v,H=c)),T===0)return null;let W=R/T,tt=y/T,K=1/T,wt=P-W*z,yt=F-tt*z,zt=X-W*k,Jt=L-tt*k,Zt=I-W*J,et=H-tt*J,st=Zt*Jt-et*zt,_t=wt*et-yt*Zt,Ot=zt*yt-Jt*wt;if(s){if(st<0||_t<0||Ot<0)return null}else if((st<0||_t<0||Ot<0)&&(st>0||_t>0||Ot>0))return null;let lt=st+_t+Ot;if(lt===0)return null;let It=K*(st*z+_t*k+Ot*J);return(lt>0?It<0:It>0)?null:this.at(It/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ic=new Ce,Ni=new aa,Fr=new ps,Pc=new G,Or=new G,Br=new G,zr=new G,Ko=new G,kr=new G,Lc=new G,Vr=new G,Pe=class extends Ke{constructor(t=new je,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let u=o[h],p=r[h];u!==0&&(Ko.fromBufferAttribute(p,t),a?kr.addScaledVector(Ko,u):kr.addScaledVector(Ko.sub(e),u))}e.add(kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Fr,Pc)===null||Ni.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Ic.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){let m=f[g],c=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=E;x<b;x+=3){let w=o.getX(x),R=o.getX(x+1),y=o.getX(x+2);s=Gr(this,c,t,n,l,u,p,w,R,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),S=Math.min(o.count,d.start+d.count);for(let m=g,c=S;m<c;m+=3){let v=o.getX(m),E=o.getX(m+1),x=o.getX(m+2);s=Gr(this,a,t,n,l,u,p,v,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,S=f.length;g<S;g++){let m=f[g],c=a[m.materialIndex],v=Math.max(m.start,d.start),E=Math.min(h.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=E;x<b;x+=3){let w=x,R=x+1,y=x+2;s=Gr(this,c,t,n,l,u,p,w,R,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),S=Math.min(h.count,d.start+d.count);for(let m=g,c=S;m<c;m+=3){let v=m,E=m+1,x=m+2;s=Gr(this,a,t,n,l,u,p,v,E,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function qu(i,t,e,n,s,r,a,o){let h;if(t.side===ln?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===bi,o),h===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,h,l){i.getVertexPosition(o,Or),i.getVertexPosition(h,Br),i.getVertexPosition(l,zr);let u=qu(i,t,e,n,Or,Br,zr,Lc);if(u){let p=new G;mi.getBarycoord(Lc,Or,Br,zr,p),s&&(u.uv=mi.getInterpolatedAttribute(s,o,h,l,p,new Qt)),r&&(u.uv1=mi.getInterpolatedAttribute(r,o,h,l,p,new Qt)),a&&(u.normal=mi.getInterpolatedAttribute(a,o,h,l,p,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:h,c:l,normal:new G,materialIndex:0};mi.getNormal(Or,Br,zr,f.normal),u.face=f,u.barycoord=p}return u}var oa=class extends an{constructor(t=null,e=1,n=1,s,r,a,o,h,l=Je,u=Je,p,f){super(null,a,o,h,l,u,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=new ps,Yu=new Qt(.5,.5),Hr=new G,ms=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],l=r[3],u=r[4],p=r[5],f=r[6],d=r[7],g=r[8],S=r[9],m=r[10],c=r[11],v=r[12],E=r[13],x=r[14],b=r[15];if(s[0].setComponents(l-a,d-u,c-g,b-v).normalize(),s[1].setComponents(l+a,d+u,c+g,b+v).normalize(),s[2].setComponents(l+o,d+p,c+S,b+E).normalize(),s[3].setComponents(l-o,d-p,c-S,b-E).normalize(),n)s[4].setComponents(h,f,m,x).normalize(),s[5].setComponents(l-h,d-f,c-m,b-x).normalize();else if(s[4].setComponents(l-h,d-f,c-m,b-x).normalize(),e===Dn)s[5].setComponents(l+h,d+f,c+m,b+x).normalize();else if(e===hs)s[5].setComponents(h,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=Yu.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends an{constructor(t=[],e=Ti,n,s,r,a,o,h,l,u){super(t,e,n,s,r,a,o,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},gs=class extends an{constructor(t,e,n,s,r,a,o,h,l){super(t,e,n,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends an{constructor(t,e,n=Nn,s,r,a,o=Je,h=Je,l,u=Wn,p=1){if(u!==Wn&&u!==Ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,a,o,h,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends xi{constructor(t,e=Nn,n=Ti,s,r,a=Je,o=Je,h,l=Wn){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,h,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$s=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],l=[],u=[],p=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(p,2));function g(S,m,c,v,E,x,b,w,R,y,T){let P=x/R,F=b/y,z=x/2,X=b/2,L=w/2,k=R+1,I=y+1,H=0,J=0,W=new G;for(let tt=0;tt<I;tt++){let K=tt*F-X;for(let wt=0;wt<k;wt++){let yt=wt*P-z;W[S]=yt*v,W[m]=K*E,W[c]=L,l.push(W.x,W.y,W.z),W[S]=0,W[m]=0,W[c]=w>0?1:-1,u.push(W.x,W.y,W.z),p.push(wt/R),p.push(1-tt/y),H+=1}}for(let tt=0;tt<y;tt++)for(let K=0;K<R;K++){let wt=f+K+k*tt,yt=f+K+k*(tt+1),zt=f+(K+1)+k*(tt+1),Jt=f+(K+1)+k*tt;h.push(wt,yt,Jt),h.push(yt,zt,Jt),J+=6}o.addGroup(d,J,T),d+=J,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ve=class i extends je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],f=[],d=[],g=0,S=[],m=n/2,c=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new _e(p,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function v(){let x=new G,b=new G,w=0,R=(e-t)/n;for(let y=0;y<=r;y++){let T=[],P=y/r,F=P*(e-t)+t;for(let z=0;z<=s;z++){let X=z/s,L=X*h+o,k=Math.sin(L),I=Math.cos(L);b.x=F*k,b.y=-P*n+m,b.z=F*I,p.push(b.x,b.y,b.z),x.set(k,R,I).normalize(),f.push(x.x,x.y,x.z),d.push(X,1-P),T.push(g++)}S.push(T)}for(let y=0;y<s;y++)for(let T=0;T<r;T++){let P=S[T][y],F=S[T+1][y],z=S[T+1][y+1],X=S[T][y+1];(t>0||T!==0)&&(u.push(P,F,X),w+=3),(e>0||T!==r-1)&&(u.push(F,z,X),w+=3)}l.addGroup(c,w,0),c+=w}function E(x){let b=g,w=new Qt,R=new G,y=0,T=x===!0?t:e,P=x===!0?1:-1;for(let z=1;z<=s;z++)p.push(0,m*P,0),f.push(0,P,0),d.push(.5,.5),g++;let F=g;for(let z=0;z<=s;z++){let L=z/s*h+o,k=Math.cos(L),I=Math.sin(L);R.x=T*I,R.y=m*P,R.z=T*k,p.push(R.x,R.y,R.z),f.push(0,P,0),w.x=k*.5+.5,w.y=I*.5*P+.5,d.push(w.x,w.y),g++}for(let z=0;z<s;z++){let X=b+z,L=F+z;x===!0?u.push(L,L+1,X):u.push(L+1,L,X),y+=3}l.addGroup(c,y,x===!0?1:2),c+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Qs=class i extends je{constructor(t=[new Qt(0,-.5),new Qt(.5,0),new Qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=le(s,0,Math.PI*2);let r=[],a=[],o=[],h=[],l=[],u=1/e,p=new G,f=new Qt,d=new G,g=new G,S=new G,m=0,c=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,c=t[v+1].y-t[v].y,d.x=c*1,d.y=-m,d.z=c*0,S.copy(d),d.normalize(),h.push(d.x,d.y,d.z);break;case t.length-1:h.push(S.x,S.y,S.z);break;default:m=t[v+1].x-t[v].x,c=t[v+1].y-t[v].y,d.x=c*1,d.y=-m,d.z=c*0,g.copy(d),d.x+=S.x,d.y+=S.y,d.z+=S.z,d.normalize(),h.push(d.x,d.y,d.z),S.copy(g)}for(let v=0;v<=e;v++){let E=n+v*u*s,x=Math.sin(E),b=Math.cos(E);for(let w=0;w<=t.length-1;w++){p.x=t[w].x*x,p.y=t[w].y,p.z=t[w].x*b,a.push(p.x,p.y,p.z),f.x=v/e,f.y=w/(t.length-1),o.push(f.x,f.y);let R=h[3*w+0]*x,y=h[3*w+1],T=h[3*w+0]*b;l.push(R,y,T)}}for(let v=0;v<e;v++)for(let E=0;E<t.length-1;E++){let x=E+v*t.length,b=x,w=x+t.length,R=x+t.length+1,y=x+1;r.push(b,w,y),r.push(R,y,w)}this.setIndex(r),this.setAttribute("position",new _e(a,3)),this.setAttribute("uv",new _e(o,2)),this.setAttribute("normal",new _e(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Ge=class i extends je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),l=o+1,u=h+1,p=t/o,f=e/h,d=[],g=[],S=[],m=[];for(let c=0;c<u;c++){let v=c*f-a;for(let E=0;E<l;E++){let x=E*p-r;g.push(x,-v,0),S.push(0,0,1),m.push(E/o),m.push(1-c/h)}}for(let c=0;c<h;c++)for(let v=0;v<o;v++){let E=v+l*c,x=v+l*(c+1),b=v+1+l*(c+1),w=v+1+l*c;d.push(E,x,w),d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},_s=class i extends je{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],h=[],l=[],u=[],p=t,f=(e-t)/s,d=new G,g=new Qt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){let c=r+m/n*a;d.x=p*Math.cos(c),d.y=p*Math.sin(c),h.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}p+=f}for(let S=0;S<s;S++){let m=S*(n+1);for(let c=0;c<n;c++){let v=c+m,E=v,x=v+n+1,b=v+n+2,w=v+1;o.push(E,x,w),o.push(x,b,w)}}this.setIndex(o),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var He=class i extends je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),l=0,u=[],p=new G,f=new G,d=[],g=[],S=[],m=[];for(let c=0;c<=n;c++){let v=[],E=c/n,x=a+E*o,b=t*Math.cos(x),w=Math.sqrt(t*t-b*b),R=0;c===0&&a===0?R=.5/e:c===n&&h===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let T=y/e,P=s+T*r;p.x=-w*Math.cos(P),p.y=b,p.z=w*Math.sin(P),g.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),m.push(T+R,1-E),v.push(l++)}u.push(v)}for(let c=0;c<n;c++)for(let v=0;v<e;v++){let E=u[c][v+1],x=u[c][v],b=u[c+1][v],w=u[c+1][v+1];(c!==0||a>0)&&d.push(E,x,w),(c!==n-1||h<Math.PI)&&d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(S,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var js=class i extends je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let h=[],l=[],u=[],p=[],f=new G,d=new G,g=new G;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let c=0;c<=s;c++){let v=c/s*r;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),l.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),p.push(c/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let c=(s+1)*S+m-1,v=(s+1)*(S-1)+m-1,E=(s+1)*(S-1)+m,x=(s+1)*S+m;h.push(c,v,x),h.push(v,E,x)}this.setIndex(h),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Dc(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Dc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function sn(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function Dc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var wh={clone:Hi,merge:sn},Ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ju,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Zu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ce().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends _n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},on=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},tr=class extends on{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ha=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=t,o=2*e-n;break;case nl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case el:a=t,h=2*n-e;break;case nl:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(h-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),S=g*g,m=S*g,c=-f*m+2*f*S-f*g,v=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*S+.5*g,x=d*m-d*S;for(let b=0;b!==o;++b)r[b]=c*a[u+b]+v*a[l+b]+E*a[h+b]+x*a[p+b];return r}},fa=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=(n-e)/(s-e),p=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*p+a[h+f]*u;return r}},pa=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ma=class extends yi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let g=(n-e)/(s-e),S=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[h+m]*g;return r}let f=o*2,d=t-1;for(let g=0;g!==o;++g){let S=a[l+g],m=a[h+g],c=d*f+g*2,v=p[c],E=p[c+1],x=t*f+g*2,b=u[x],w=u[x+1],R=Qu(n,e,v,b,s);r[g]=Th(R,S,E,w,m)}return r}};function Th(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function $u(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Qu(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Th(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let h=$u(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var xn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$o(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ks:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$o(this.settings)&&(Uc(this.settings.inTangents,t),Uc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){qt("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){qt("KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&Ru(s))for(let o=0,h=s.length;o!==h;++o){let l=s[o];if(isNaN(l)){qt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)h=!0;else{let p=o*n,f=p-n,d=p+n;for(let g=0;g!==n;++g){let S=e[p+g];if(S!==e[f+g]||S!==e[d+g]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let p=o*n,f=a*n;for(let d=0;d!==n;++d)e[f+d]=e[p+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,l=0;l!==n;++l)e[h+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=na;var vi=class extends xn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=ks;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="color";var _a=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var xa=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)qn.slerpFlat(r,0,a,l-o,a,l,h);return r}},er=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends xn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=ks;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends xn{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,f=l.length;p<f;p+=2){let d=l[p],g=l[p+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Eh=new va,Ma=class{constructor(t){this.manager=t!==void 0?t:Eh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},nr=class extends zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qo=new Ce,Nc=new G,Fc=new G,xs=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=fn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ms,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===hs||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new G,Xr=new qn,Gn=new G,ir=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new G,Oc=new Qt,Bc=new Qt,Ze=class extends ir{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,Bc),e.subVectors(Bc,Oc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/l,s*=a.width/h,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},il=class extends xs{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Ws*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},sr=class extends zi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new il}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},sl=class extends xs{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0}},Si=class extends zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ys=class extends ir{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,h=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rl=class extends xs{constructor(){super(new ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,os=1,Sa=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Ze(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ze(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ze(as,os,t,e);o.layers=this.layers,this.add(o);let h=new Ze(as,os,t,e);h.layers=this.layers,this.add(h);let l=new Ze(as,os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,l,u]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ba=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cl="\\[\\]\\.:\\/",ju=new RegExp("["+Cl+"]","g"),Il="[^"+Cl+"]",td="[^"+Cl.replace("\\.","")+"]",ed=/((?:WC+[\/:])*)/.source.replace("WC",Il),nd=/(WCOD+)?/.source.replace("WCOD",td),id=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),sd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),rd=new RegExp("^"+ed+nd+id+sd+"$"),ad=["material","materials","bones","map"],al=class{constructor(t,e,n){let s=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ju,"")}static parseTrackName(t){let e=rd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ad.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=al;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fg=new Float32Array(1);var Fl=class Fl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Fl.prototype.isMatrix2=!0;var ol=Fl;function Pl(i,t,e,n){let s=od(n);switch(e){case bl:return i*t;case Tl:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case wl:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Da:return i*t*4/s.components*s.byteLength;case cr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Ba:case za:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case fr:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case pr:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function od(i){switch(i){case fn:case yl:return{byteLength:1,components:1};case ws:case vl:case On:return{byteLength:2,components:1};case Ca:case Ia:return{byteLength:2,components:4};case Nn:case Ra:case Fn:return{byteLength:4,components:1};case Ml:case Sl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Zh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function md(i){let t=new WeakMap;function e(o,h){let l=o.array,u=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,h,l){let u=h.array,p=h.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],S=p[d];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++f,p[f]=S)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let S=p[d];i.bufferSubData(l,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ed=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,cf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_f=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ef=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Af=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,If=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,np=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ap=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,up=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ep=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:yd,alphatest_fragment:vd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:bd,batching_pars_vertex:wd,batching_vertex:Td,begin_vertex:Ed,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Id,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Ud,color_fragment:Nd,color_pars_fragment:Fd,color_pars_vertex:Od,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:kd,defaultnormal_vertex:Vd,displacementmap_pars_vertex:Gd,displacementmap_vertex:Hd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:Kd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:cf,envmap_vertex:Qd,fog_vertex:jd,fog_pars_vertex:tf,fog_fragment:ef,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:lf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:xf,lightprobes_pars_fragment:yf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:Mf,logdepthbuf_pars_vertex:Sf,logdepthbuf_vertex:bf,map_fragment:wf,map_pars_fragment:Tf,map_particle_fragment:Ef,map_particle_pars_fragment:Af,metalnessmap_fragment:Rf,metalnessmap_pars_fragment:Cf,morphinstance_vertex:If,morphcolor_vertex:Pf,morphnormal_vertex:Lf,morphtarget_pars_vertex:Df,morphtarget_vertex:Uf,normal_fragment_begin:Nf,normal_fragment_maps:Ff,normal_pars_fragment:Of,normal_pars_vertex:Bf,normal_vertex:zf,normalmap_pars_fragment:kf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Wf,opaque_fragment:Xf,packing:qf,premultiplied_alpha_fragment:Yf,project_vertex:Zf,dithering_fragment:Jf,dithering_pars_fragment:Kf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Qf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:tp,shadowmap_vertex:ep,shadowmask_pars_fragment:np,skinbase_vertex:ip,skinning_pars_vertex:sp,skinning_vertex:rp,skinnormal_vertex:ap,specularmap_fragment:op,specularmap_pars_fragment:lp,tonemapping_fragment:cp,tonemapping_pars_fragment:hp,transmission_fragment:up,transmission_pars_fragment:dp,uv_pars_fragment:fp,uv_pars_vertex:pp,uv_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:yp,backgroundCube_frag:vp,cube_vert:Mp,cube_frag:Sp,depth_vert:bp,depth_frag:wp,distance_vert:Tp,distance_frag:Ep,equirect_vert:Ap,equirect_frag:Rp,linedashed_vert:Cp,linedashed_frag:Ip,meshbasic_vert:Pp,meshbasic_frag:Lp,meshlambert_vert:Dp,meshlambert_frag:Up,meshmatcap_vert:Np,meshmatcap_frag:Fp,meshnormal_vert:Op,meshnormal_frag:Bp,meshphong_vert:zp,meshphong_frag:kp,meshphysical_vert:Vp,meshphysical_frag:Gp,meshtoon_vert:Hp,meshtoon_frag:Wp,points_vert:Xp,points_frag:qp,shadow_vert:Yp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:Kp},Mt={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Jn={basic:{uniforms:sn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:sn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:sn([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:sn([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:sn([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:sn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:sn([Mt.points,Mt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:sn([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:sn([Mt.common,Mt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:sn([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:sn([Mt.sprite,Mt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:sn([Mt.common,Mt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:sn([Mt.lights,Mt.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Jn.physical={uniforms:sn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var po={r:0,b:0,g:0},$p=new Ce,Jh=new $t;Jh.set(-1,0,0,0,1,0,0,0,1);function Qp(i,t,e,n,s,r){let a=new Ct(0),o=s===!0?0:1,h,l,u=null,p=0,f=null;function d(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let x=v.backgroundBlurriness>0;E=t.get(E,x)}return E}function g(v){let E=!1,x=d(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),E=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,E){let x=d(E);x&&(x.isCubeTexture||x.mapping===or)?(l===void 0&&(l=new Pe(new $e(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Hi(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Jh),l.material.toneMapped=he.getTransfer(x.colorSpace)!==ye,(u!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Pe(new Ge(2,2),new _n({name:"BackgroundMaterial",uniforms:Hi(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=he.getTransfer(x.colorSpace)!==ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,E){v.getRGB(po,Rl(i)),e.buffers.color.setClear(po.r,po.g,po.b,E,r)}function c(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:S,dispose:c}}function jp(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(F,z,X,L,k){let I=!1,H=p(F,L,X,z);r!==H&&(r=H,l(r.object)),I=d(F,L,X,k),I&&g(F,L,X,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,x(F,z,X,L),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function u(F){return i.deleteVertexArray(F)}function p(F,z,X,L){let k=L.wireframe===!0,I=n[z.id];I===void 0&&(I={},n[z.id]=I);let H=F.isInstancedMesh===!0?F.id:0,J=I[H];J===void 0&&(J={},I[H]=J);let W=J[X.id];W===void 0&&(W={},J[X.id]=W);let tt=W[k];return tt===void 0&&(tt=f(h()),W[k]=tt),tt}function f(F){let z=[],X=[],L=[];for(let k=0;k<e;k++)z[k]=0,X[k]=0,L[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:L,object:F,attributes:{},index:null}}function d(F,z,X,L){let k=r.attributes,I=z.attributes,H=0,J=X.getAttributes();for(let W in J)if(J[W].location>=0){let K=k[W],wt=I[W];if(wt===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(wt=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(wt=F.instanceColor)),K===void 0||K.attribute!==wt||wt&&K.data!==wt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(F,z,X,L){let k={},I=z.attributes,H=0,J=X.getAttributes();for(let W in J)if(J[W].location>=0){let K=I[W];K===void 0&&(W==="instanceMatrix"&&F.instanceMatrix&&(K=F.instanceMatrix),W==="instanceColor"&&F.instanceColor&&(K=F.instanceColor));let wt={};wt.attribute=K,K&&K.data&&(wt.data=K.data),k[W]=wt,H++}r.attributes=k,r.attributesNum=H,r.index=L}function S(){let F=r.newAttributes;for(let z=0,X=F.length;z<X;z++)F[z]=0}function m(F){c(F,0)}function c(F,z){let X=r.newAttributes,L=r.enabledAttributes,k=r.attributeDivisors;X[F]=1,L[F]===0&&(i.enableVertexAttribArray(F),L[F]=1),k[F]!==z&&(i.vertexAttribDivisor(F,z),k[F]=z)}function v(){let F=r.newAttributes,z=r.enabledAttributes;for(let X=0,L=z.length;X<L;X++)z[X]!==F[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function E(F,z,X,L,k,I,H){H===!0?i.vertexAttribIPointer(F,z,X,k,I):i.vertexAttribPointer(F,z,X,L,k,I)}function x(F,z,X,L){S();let k=L.attributes,I=X.getAttributes(),H=z.defaultAttributeValues;for(let J in I){let W=I[J];if(W.location>=0){let tt=k[J];if(tt===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(tt=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(tt=F.instanceColor)),tt!==void 0){let K=tt.normalized,wt=tt.itemSize,yt=t.get(tt);if(yt===void 0)continue;let zt=yt.buffer,Jt=yt.type,Zt=yt.bytesPerElement,et=Jt===i.INT||Jt===i.UNSIGNED_INT||tt.gpuType===Ra;if(tt.isInterleavedBufferAttribute){let st=tt.data,_t=st.stride,Ot=tt.offset;if(st.isInstancedInterleavedBuffer){for(let lt=0;lt<W.locationSize;lt++)c(W.location+lt,st.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let lt=0;lt<W.locationSize;lt++)E(W.location+lt,wt/W.locationSize,Jt,K,_t*Zt,(Ot+wt/W.locationSize*lt)*Zt,et)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)c(W.location+st,tt.meshPerAttribute);F.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<W.locationSize;st++)m(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let st=0;st<W.locationSize;st++)E(W.location+st,wt/W.locationSize,Jt,K,wt*Zt,wt/W.locationSize*st*Zt,et)}}else if(H!==void 0){let K=H[J];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(W.location,K);break;case 3:i.vertexAttrib3fv(W.location,K);break;case 4:i.vertexAttrib4fv(W.location,K);break;default:i.vertexAttrib1fv(W.location,K)}}}}v()}function b(){T();for(let F in n){let z=n[F];for(let X in z){let L=z[X];for(let k in L){let I=L[k];for(let H in I)u(I[H].object),delete I[H];delete L[k]}}delete n[F]}}function w(F){if(n[F.id]===void 0)return;let z=n[F.id];for(let X in z){let L=z[X];for(let k in L){let I=L[k];for(let H in I)u(I[H].object),delete I[H];delete L[k]}}delete n[F.id]}function R(F){for(let z in n){let X=n[z];for(let L in X){let k=X[L];if(k[F.id]===void 0)continue;let I=k[F.id];for(let H in I)u(I[H].object),delete I[H];delete k[F.id]}}}function y(F){for(let z in n){let X=n[z],L=F.isInstancedMesh===!0?F.id:0,k=X[L];if(k!==void 0){for(let I in k){let H=k[I];for(let J in H)u(H[J].object),delete H[J];delete k[I]}delete X[L],Object.keys(X).length===0&&delete n[z]}}}function T(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function tm(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,u){u!==0&&(i.drawArraysInstanced(n,h,l,u),e.update(l,n,u))}function o(h,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function em(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let y=R===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==fn&&R!==Fn&&!y&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=h(l);u!==l&&(Xt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:x,maxSamples:b,samples:w}}function nm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=u(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,c=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,E=v*4,x=c.clippingState||null;h.value=x,x=u(g,f,E,d);for(let b=0;b!==E;++b)x[b]=e[b];c.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,f,d,g){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=h.value,g!==!0||m===null){let c=d+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let E=0,x=d;E!==S;++E,x+=4)a.copy(p[E]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var As=4,im=6,sm=20,rm=256,gr=new ys,Ah=new Ct,Ol=null,Bl=0,zl=0,kl=!1,am=new G,Wi=new G,go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=am}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Es(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:On,format:bn,colorSpace:Vs,depthBuffer:!1},s=Rh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=om(r)),this._blurMaterial=cm(r,t,e),this._ggxMaterial=lm(r,t,e)}return s}_compileMaterial(t){let e=new Pe(new je,t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,n,s,r){let h=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,d=p.toneMapping;p.getClearColor(Ah),p.toneMapping=Un,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new $e,new ke({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,c=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,c=!0):(m.color.copy(Ah),c=!0);for(let E=0;E<6;E++){let x=E%3;x===0?(h.up.set(0,l[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+u[E],r.y,r.z)):x===1?(h.up.set(0,0,l[E]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+u[E],r.z)):(h.up.set(0,l[E],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+u[E]));let b=this._cubeSize;Es(s,x*b,E>2?b:0,b,b),p.setRenderTarget(s),c&&p.render(S,h),p.render(t,h)}p.toneMapping=d,p.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;Es(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,gr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let h=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),f=l*1.25,d=p*f,{_lodMax:g}=this,S=this._sizeLods[n],m=3*S*(n>g-As?n-g+As:0),c=4*(this._cubeSize-S);h.envMap.value=t.texture,h.roughness.value=d,h.mipInt.value=g-e,Es(r,m,c,3*S,2*S),s.setRenderTarget(r),s.render(o,gr),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=g-n,Es(t,m,c,3*S,2*S),s.setRenderTarget(t),s.render(o,gr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-As?s-this._lodMax+As:0),f=4*(this._cubeSize-u);Es(e,p,f,3*u,2*u),a.setRenderTarget(e),a.render(h,gr)}};function om(i){let t=[],e=[],n=i,s=i-As+1+im;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),h=-o,l=1+o,u=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,f=6,d=3,g=new Float32Array(d*f*p),S=new Float32Array(d*f*p);for(let c=0;c<p;c++){let v=c%3*2/3-1,E=c>2?0:-1,x=[v,E,0,v+2/3,E,0,v+2/3,E+1,0,v,E,0,v+2/3,E+1,0,v,E+1,0];g.set(x,d*f*c);for(let b=0;b<f;b++){let w=u[b*2]*2-1,R=u[b*2+1]*2-1;c===0?Wi.set(1,R,w):c===1?Wi.set(-w,1,-R):c===2?Wi.set(-w,R,1):c===3?Wi.set(-1,R,-w):c===4?Wi.set(-w,-1,R):Wi.set(w,R,-1),Wi.toArray(S,(c*f+b)*d)}}let m=new je;m.setAttribute("position",new hn(g,d)),m.setAttribute("outputDirection",new hn(S,d)),e.push(new Pe(m,null)),n>As&&n--}return{lodMeshes:e,sizeLods:t}}function Rh(i,t,e){let n=new un(i,t,e);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function lm(i,t,e){return new _n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function cm(i,t,e){return new _n({name:"SphericalGaussianBlur",defines:{SAMPLES:sm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ch(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function Ih(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $e(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Yn});r.uniforms.tEquirect.value=e;let a=new Pe(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Qe),new Sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ta||d===Ea)if(t.has(f)){let g=t.get(f).texture;return o(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let S=new _o(g.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",l),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let d=f.mapping,g=d===Ta||d===Ea,S=d===Ti||d===Gi;if(g||S){let m=e.get(f),c=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return n===null&&(n=new go(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||S&&v&&h(v)?(n===null&&(n=new go(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,d){return d===Ta?f.mapping=Ti:d===Ea&&(f.mapping=Gi),f}function h(f){let d=0,g=6;for(let S=0;S<g;S++)f[S]!==void 0&&d++;return d===g}function l(f){let d=f.target;d.removeEventListener("dispose",l);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function um(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function dm(i,t,e,n){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(p){let f=p.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function l(p){let f=[],d=p.index,g=p.attributes.position,S=0;if(g===void 0)return;if(d!==null){let v=d.array;S=d.version;for(let E=0,x=v.length;E<x;E+=3){let b=v[E+0],w=v[E+1],R=v[E+2];f.push(b,w,w,R,R,b)}}else{let v=g.array;S=g.version;for(let E=0,x=v.length/3-1;E<x;E+=3){let b=E+0,w=E+1,R=E+2;f.push(b,w,w,R,R,b)}}let m=new(g.count>=65535?Js:Zs)(f,1);m.version=S;let c=r.get(p);c&&t.remove(c),r.set(p,m)}function u(p){let f=r.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:h,getWireframeAttribute:u}}function fm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function l(p,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,p*a,d),e.update(f,n,d))}function u(p,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,d);let S=0;for(let m=0;m<d;m++)S+=f[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=u}function pm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function mm(i,t,e){let n=new WeakMap,s=new Ie;function r(a,o,h){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==p){let T=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),S===!0&&(E=3);let x=o.attributes.position.count*E,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*b*4*p),R=new Xs(w,x,b,p);R.type=Fn,R.needsUpdate=!0;let y=E*4;for(let P=0;P<p;P++){let F=m[P],z=c[P],X=v[P],L=x*b*4*P;for(let k=0;k<F.count;k++){let I=k*y;d===!0&&(s.fromBufferAttribute(F,k),w[L+I+0]=s.x,w[L+I+1]=s.y,w[L+I+2]=s.z,w[L+I+3]=0),g===!0&&(s.fromBufferAttribute(z,k),w[L+I+4]=s.x,w[L+I+5]=s.y,w[L+I+6]=s.z,w[L+I+7]=0),S===!0&&(s.fromBufferAttribute(X,k),w[L+I+8]=s.x,w[L+I+9]=s.y,w[L+I+10]=s.z,w[L+I+11]=X.itemSize===4?s.w:1)}}f={count:p,texture:R,size:new Qt(x,b)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let S=0;S<l.length;S++)d+=l[S];let g=o.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function gm(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,f=t.get(l,p);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function h(l){let u=l.target;u.removeEventListener("dispose",h),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var _m={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[ar]:"AGX_TONE_MAPPING",[bs]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function xm(i,t,e,n,s,r){let a=new un(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=new je;l.setAttribute("position",new _e([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new _e([0,2,0,0,2,0],2));let u=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Pe(l,u),f=new ys(-1,1,1,-1,0,1),d=null,g=null,S=!1,m,c=null,v=[],E=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),h!==null&&h.setSize(x,b);for(let w=0;w<v.length;w++){let R=v[w];R.setSize&&R.setSize(x,b)}},this.setEffects=function(x){v=x,E=v.length>0&&v[0].isRenderPass===!0;let b=a.width,w=a.height;v.length>0&&o===null&&(o=new un(b,w,{type:On,depthBuffer:!1,stencilBuffer:!1}),h=new un(b,w,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let y=v[R];y.setSize&&y.setSize(b,w)}},this.begin=function(x,b){if(S||x.toneMapping===Un&&v.length===0)return!1;if(c=b,b!==null){let w=b.width,R=b.height;(a.width!==w||a.height!==R)&&this.setSize(w,R)}return E===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Un,!0},this.hasRenderPass=function(){return E},this.end=function(x,b){x.toneMapping=m,S=!0;let w=a,R=o;for(let y=0;y<v.length;y++){let T=v[y];T.enabled!==!1&&(T.render(x,R,w,b),T.needsSwap!==!1&&(w=R,R=R===o?h:o))}if(d!==x.outputColorSpace||g!==x.toneMapping){d=x.outputColorSpace,g=x.toneMapping,u.defines={},he.getTransfer(d)===ye&&(u.defines.SRGB_TRANSFER="");let y=_m[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(c),x.render(p,f),c=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),u.dispose()}}var Kh=new an,Hl=new xi(1,1),$h=new Xs,Qh=new ra,jh=new Ks,Ph=[],Lh=[],Dh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=Lh[t];e===void 0&&(e=new Int32Array(t),Lh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ym(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Nh.set(n),i.uniformMatrix2fv(this.addr,!1,Nh),Xe(e,n)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Xe(e,n)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Xe(e,n)}}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Im(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function Um(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=e.isReversedDepthBuffer()?fo:uo,r=Hl):r=Kh,e.setTexture2D(t||r,s)}function Nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qh,s)}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$h,s)}function Bm(i){switch(i){case 5126:return ym;case 35664:return vm;case 35665:return Mm;case 35666:return Sm;case 35674:return bm;case 35675:return wm;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return Cm;case 5125:return Im;case 36294:return Pm;case 36295:return Lm;case 36296:return Dm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Fm;case 36289:case 36303:case 36311:case 36292:return Om}}function zm(i,t){i.uniform1fv(this.addr,t)}function km(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function Vm(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function Gm(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Hm(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Wm(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Xm(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qm(i,t){i.uniform1iv(this.addr,t)}function Ym(i,t){i.uniform2iv(this.addr,t)}function Zm(i,t){i.uniform3iv(this.addr,t)}function Jm(i,t){i.uniform4iv(this.addr,t)}function Km(i,t){i.uniform1uiv(this.addr,t)}function $m(i,t){i.uniform2uiv(this.addr,t)}function Qm(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function t0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hl:a=Kh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function e0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qh,r[a])}function n0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||jh,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);We(n,r)||(i.uniform1iv(this.addr,r),Xe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$h,r[a])}function s0(i){switch(i){case 5126:return zm;case 35664:return km;case 35665:return Vm;case 35666:return Gm;case 35674:return Hm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return Jm;case 5125:return Km;case 36294:return $m;case 36295:return Qm;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var Wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}},Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s0(e.type)}},ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Fh(i,t){i.seq.push(t),i.map[t.id]=t}function r0(i,t,e){let n=i.name,s=n.length;for(Vl.lastIndex=0;;){let r=Vl.exec(n),a=Vl.lastIndex,o=r[1],h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){Fh(e,l===void 0?new Wl(o,i,t):new Xl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new ql(o),Fh(e,p)),e=p}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);r0(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var a0=37297,o0=0;function l0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Bh=new $t;function c0(i){he._getMatrix(Bh,he.workingColorSpace,i);let t=`mat3( ${Bh.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case Gs:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function zh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+l0(i.getShaderSource(t),o)}else return r}function h0(i,t){let e=c0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u0={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[rr]:"ACESFilmic",[ar]:"AgX",[bs]:"Neutral",[_l]:"Custom"};function d0(i,t){let e=u0[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new G;function f0(){he.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function m0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function g0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function xr(i){return i!==""}function kh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(_0,y0)}var x0=new Map;function y0(i,t){let e=ie[t];if(e===void 0){let n=x0.get(t);if(n!==void 0)e=ie[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yl(e)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(v0,M0)}function M0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var S0={[ki]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function b0(i){return S0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var w0={[Ti]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE_UV"};function T0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":w0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var E0={[Gi]:"ENVMAP_MODE_REFRACTION"};function A0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":E0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var R0={[fl]:"ENVMAP_BLENDING_MULTIPLY",[ah]:"ENVMAP_BLENDING_MIX",[oh]:"ENVMAP_BLENDING_ADD"};function C0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":R0[i.combine]||"ENVMAP_BLENDING_NONE"}function I0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=b0(e),l=T0(e),u=A0(e),p=C0(e),f=I0(e),d=p0(e),g=m0(r),S=s.createProgram(),m,c,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),c.length>0&&(c+=`
`)):(m=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),c=[Hh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ie.tonemapping_pars_fragment:"",e.toneMapping!==Un?d0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,h0("linearToOutputTexel",e.outputColorSpace),f0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),a=Yl(a),a=kh(a,e),a=Vh(a,e),o=Yl(o),o=kh(o,e),o=Vh(o,e),a=Gh(a),o=Gh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let E=v+m+a,x=v+c+o,b=Oh(s,s.VERTEX_SHADER,E),w=Oh(s,s.FRAGMENT_SHADER,x);s.attachShader(S,b),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function R(F){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(S)||"",X=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(w)||"",k=z.trim(),I=X.trim(),H=L.trim(),J=!0,W=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{let tt=zh(s,b,"vertex"),K=zh(s,w,"fragment");qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+tt+`
`+K)}else k!==""?Xt("WebGLProgram: Program Info Log:",k):(I===""||H==="")&&(W=!1);W&&(F.diagnostics={runnable:J,programLog:k,vertexShader:{log:I,prefix:m},fragmentShader:{log:H,prefix:c}})}s.deleteShader(b),s.deleteShader(w),y=new Rs(s,S),T=g0(s,S)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,a0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}var L0=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jl(t),e.set(t,n)),n}},Jl=class{constructor(t){this.id=L0++,this.code=t,this.usedTimes=0}};function D0(i){return i===Ri||i===fr||i===pr}function U0(i,t,e,n,s,r){let a=new qs,o=new Zl,h=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return h.add(y),y===0?"uv":`uv${y}`}function S(y,T,P,F,z,X){let L=F.fog,k=z.geometry,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,J=t.get(y.envMap||I,H),W=J&&J.mapping===or?J.image.height:null,tt=d[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Xt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let K=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,wt=K!==void 0?K.length:0,yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let zt,Jt,Zt,et;if(tt){let ut=Jn[tt];zt=ut.vertexShader,Jt=ut.fragmentShader}else{zt=y.vertexShader,Jt=y.fragmentShader;let ut=o.getVertexShaderStage(y),rt=o.getFragmentShaderStage(y);o.update(y,ut,rt),Zt=ut.id,et=rt.id}let st=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Ot=z.isInstancedMesh===!0,lt=z.isBatchedMesh===!0,It=!!y.map,Bt=!!y.matcap,Nt=!!J,Kt=!!y.aoMap,te=!!y.lightMap,Ht=!!y.bumpMap&&y.wireframe===!1,Vt=!!y.normalMap,de=!!y.displacementMap,ue=!!y.emissiveMap,ge=!!y.metalnessMap,fe=!!y.roughnessMap,D=y.anisotropy>0,Me=y.clearcoat>0,re=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,V=y.sheen>0,Z=y.transmission>0,nt=D&&!!y.anisotropyMap,ht=Me&&!!y.clearcoatMap,ct=Me&&!!y.clearcoatNormalMap,Q=Me&&!!y.clearcoatRoughnessMap,it=_&&!!y.iridescenceMap,dt=_&&!!y.iridescenceThicknessMap,Rt=V&&!!y.sheenColorMap,pt=V&&!!y.sheenRoughnessMap,ft=!!y.specularMap,Dt=!!y.specularColorMap,Ft=!!y.specularIntensityMap,Yt=Z&&!!y.transmissionMap,N=Z&&!!y.thicknessMap,mt=!!y.gradientMap,at=!!y.alphaMap,gt=y.alphaTest>0,O=!!y.alphaHash,C=!!y.extensions,B=Un;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(B=i.toneMapping);let $={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:Jt,defines:y.defines,customVertexShaderID:Zt,customFragmentShaderID:et,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:lt,batchingColor:lt&&z._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&z.instanceColor!==null,instancingMorph:Ot&&z.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:It,matcap:Bt,envMap:Nt,envMapMode:Nt&&J.mapping,envMapCubeUVHeight:W,aoMap:Kt,lightMap:te,bumpMap:Ht,normalMap:Vt,displacementMap:de,emissiveMap:ue,normalMapObjectSpace:Vt&&y.normalMapType===hh,normalMapTangentSpace:Vt&&y.normalMapType===ho,packedNormalMap:Vt&&y.normalMapType===ho&&D0(y.normalMap.format),metalnessMap:ge,roughnessMap:fe,anisotropy:D,anisotropyMap:nt,clearcoat:Me,clearcoatMap:ht,clearcoatNormalMap:ct,clearcoatRoughnessMap:Q,dispersion:re,retroreflection:A,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:dt,sheen:V,sheenColorMap:Rt,sheenRoughnessMap:pt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:Ft,transmission:Z,transmissionMap:Yt,thicknessMap:N,gradientMap:mt,opaque:y.transparent===!1&&y.blending===Ss&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:gt,alphaHash:O,combine:y.combine,mapUv:It&&g(y.map.channel),aoMapUv:Kt&&g(y.aoMap.channel),lightMapUv:te&&g(y.lightMap.channel),bumpMapUv:Ht&&g(y.bumpMap.channel),normalMapUv:Vt&&g(y.normalMap.channel),displacementMapUv:de&&g(y.displacementMap.channel),emissiveMapUv:ue&&g(y.emissiveMap.channel),metalnessMapUv:ge&&g(y.metalnessMap.channel),roughnessMapUv:fe&&g(y.roughnessMap.channel),anisotropyMapUv:nt&&g(y.anisotropyMap.channel),clearcoatMapUv:ht&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:pt&&g(y.sheenRoughnessMap.channel),specularMapUv:ft&&g(y.specularMap.channel),specularColorMapUv:Dt&&g(y.specularColorMap.channel),specularIntensityMapUv:Ft&&g(y.specularIntensityMap.channel),transmissionMapUv:Yt&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:at&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Vt||D),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(It||at),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:_t,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:yt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:B,decodeVideoTexture:It&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===ye,decodeVideoTextureEmissive:ue&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===ye,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===dn,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:C&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(C&&y.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return $.vertexUv1s=h.has(1),$.vertexUv2s=h.has(2),$.vertexUv3s=h.has(3),h.clear(),$}function m(y){let T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(c(T,y),v(T,y),T.push(i.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function c(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function v(y,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function E(y){let T=d[y.type],P;if(T){let F=Jn[T];P=wh.clone(F.uniforms)}else P=y.uniforms;return P}function x(y,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new P0(i,T,y,s),l.push(P),u.set(T,P)),P}function b(y){if(--y.usedTimes===0){let T=l.indexOf(y);l[T]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function R(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:x,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:R}}function N0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Wh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,S,m,c){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:c},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=a(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=m,v.group=c),t++,v}function h(f,d,g,S,m,c,v){v.reversedDepth===!0&&(m=-m);let E=o(f,d,g,S,m,c);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function l(f,d,g,S,m,c){let v=o(f,d,g,S,m,c);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||F0),n.length>1&&n.sort(d||Wh),s.length>1&&s.sort(d||Wh)}function p(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:l,finish:p,sort:u}}function O0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Ct};break;case"SpotLight":e={position:new G,direction:new G,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k0=0;function V0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function G0(i){let t=new B0,e=z0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new Ce,a=new Ce;function o(l){let u=0,p=0,f=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,S=0,m=0,c=0,v=0,E=0,x=0,b=0,w=0,R=0,y=0,T=0,P=0;l.sort(V0);for(let z=0,X=l.length;z<X;z++){let L=l[z],k=L.color,I=L.intensity,H=L.distance,J=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ri?J=L.shadow.map.texture:J=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=k.r*I,p+=k.g*I,f+=k.b*I;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],I);P++}else if(L.isSunLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,K=e.get(L);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=J;let wt=tt.getViewportCount();for(let yt=0;yt<wt;yt++)n.sunShadowMatrix[S+yt]=tt.getMatrix(yt),n.sunShadowCascade[S+yt]=tt._cascadeData[yt];S+=wt,g++}n.sun[d]=W,d++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let tt=L.shadow,K=e.get(L);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=W,m++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(k).multiplyScalar(I),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[v]=W;let tt=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,tt.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[v]=tt.matrix,L.castShadow){let K=e.get(L);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,n.spotShadow[v]=K,n.spotShadowMap[v]=J,R++}v++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(k).multiplyScalar(I),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[E]=W,E++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let tt=L.shadow,K=e.get(L);K.shadowIntensity=tt.intensity,K.shadowBias=tt.bias,K.shadowNormalBias=tt.normalBias,K.shadowRadius=tt.radius,K.shadowMapSize=tt.mapSize,K.shadowCameraNear=tt.camera.near,K.shadowCameraFar=tt.camera.far,n.pointShadow[c]=K,n.pointShadowMap[c]=J,n.pointShadowMatrix[c]=L.shadow.matrix,w++}n.point[c]=W,c++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(I),W.groundColor.copy(L.groundColor).multiplyScalar(I),n.hemi[x]=W,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=f;let F=n.hash;(F.sunLength!==d||F.directionalLength!==m||F.pointLength!==c||F.spotLength!==v||F.rectAreaLength!==E||F.hemiLength!==x||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==w||F.numSpotShadows!==R||F.numSpotMaps!==y||F.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=E,n.point.length=c,n.hemi.length=x,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,F.sunLength=d,F.directionalLength=m,F.pointLength=c,F.spotLength=v,F.rectAreaLength=E,F.hemiLength=x,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=w,F.numSpotShadows=R,F.numSpotMaps=y,F.numLightProbes=P,n.version=k0++)}function h(l,u){let p=0,f=0,d=0,g=0,S=0,m=0,c=u.matrixWorldInverse;for(let v=0,E=l.length;v<E;v++){let x=l[v];if(x.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(c),p++}else if(x.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),f++}else if(x.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),g++}else if(x.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),a.identity(),r.copy(x.matrixWorld),r.premultiply(c),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),d++}else if(x.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(c),m++}}}return{setup:o,setupView:h,state:n}}function qh(i){let t=new G0(i),e=[],n=[],s=[];function r(f){p.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function h(f){s.push(f)}function l(){t.setup(e)}function u(f){t.setupView(e,f)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function H0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new qh(i),t.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Y0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Yh=new Ce,_r=new G,Gl=new G;function Z0(i,t,e){let n=new ms,s=new Qt,r=new Qt,a=new Ie,o=new ha,h=new ua,l={},u=e.maxTextureSize,p={[bi]:ln,[ln]:bi,[dn]:dn},f=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Pe(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let c=this.type;this.render=function(w,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Vc&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);let T=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Yn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=c!==this.type;X&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(k=>k.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,k=w.length;L<k;L++){let I=w[L],H=I.shadow;if(H===void 0){Xt("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||X===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ms){if(I.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new un(s.x,s.y,{format:Ri,type:On,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new xi(s.x,s.y,Fn),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=Wn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je}else I.isPointLight?(H.map=new _o(s.x),H.map.depthTexture=new la(s.x,Nn)):(H.map=new un(s.x,s.y),H.map.depthTexture=new xi(s.x,s.y,Nn)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=Wn,this.type===ki?(H.map.depthTexture.compareFunction=W?fo:uo,H.map.depthTexture.minFilter=Qe,H.map.depthTexture.magFilter=Qe):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();I.isPointLight!==!0&&H.updateMatrices(I,y);for(let K=0;K<tt;K++){let wt=H.getCamera(K);if(I.isPointLight){let yt=H.camera,zt=H.matrix,Jt=I.distance||yt.far;Jt!==yt.far&&(yt.far=Jt,yt.updateProjectionMatrix()),_r.setFromMatrixPosition(I.matrixWorld),yt.position.copy(_r),Gl.copy(yt.position),Gl.add(q0[K]),yt.up.copy(Y0[K]),yt.lookAt(Gl),yt.updateMatrixWorld(),zt.makeTranslation(-_r.x,-_r.y,-_r.z),Yh.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Yh,yt.coordinateSystem,yt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,K),i.clear();else{K===0&&(i.setRenderTarget(H.map),i.clear());let yt=H.getViewport(K);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),z.viewport(a)}n=H.getFrustum(K),x(R,y,wt,I,this.type)}H.isPointLightShadow!==!0&&this.type===Ms&&v(H,y),H.needsUpdate=!1}c=this.type,m.needsUpdate=!1,i.setRenderTarget(T,P,F)};function v(w,R){let y=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new un(s.x,s.y,{format:Ri,type:On}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,y,f,S,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,y,d,S,null)}function E(w,R,y,T){let P=null,F=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(F!==void 0)P=F;else if(P=y.isPointLight===!0?h:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=P.uuid,X=R.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let k=L[X];k===void 0&&(k=P.clone(),L[X]=k,R.addEventListener("dispose",b)),P=k}if(P.visible=R.visible,P.wireframe=R.wireframe,T===Ms?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=y}return P}function x(w,R,y,T,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Ms)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let X=t.update(w),L=w.material;if(Array.isArray(L)){let k=X.groups;for(let I=0,H=k.length;I<H;I++){let J=k[I],W=L[J.materialIndex];if(W&&W.visible){let tt=E(w,W,T,P);w.onBeforeShadow(i,w,R,y,X,tt,J),i.renderBufferDirect(y,null,X,tt,w,J),w.onAfterShadow(i,w,R,y,X,tt,J)}}}else if(L.visible){let k=E(w,L,T,P);w.onBeforeShadow(i,w,R,y,X,k,null),i.renderBufferDirect(y,null,X,k,w,null),w.onAfterShadow(i,w,R,y,X,k,null)}}let z=w.children;for(let X=0,L=z.length;X<L;X++)x(z[X],R,y,T,P)}function b(w){w.target.removeEventListener("dispose",b);for(let y in l){let T=l[y],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function J0(i,t){function e(){let N=!1,mt=new Ie,at=null,gt=new Ie(0,0,0,0);return{setMask:function(O){at!==O&&!N&&(i.colorMask(O,O,O,O),at=O)},setLocked:function(O){N=O},setClear:function(O,C,B,$,ut){ut===!0&&(O*=$,C*=$,B*=$),mt.set(O,C,B,$),gt.equals(mt)===!1&&(i.clearColor(O,C,B,$),gt.copy(mt))},reset:function(){N=!1,at=null,gt.set(-1,0,0,0)}}}function n(){let N=!1,mt=!1,at=null,gt=null,O=null;return{setReversed:function(C){if(mt!==C){let B=t.get("EXT_clip_control");C?B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT):B.clipControlEXT(B.LOWER_LEFT_EXT,B.NEGATIVE_ONE_TO_ONE_EXT),mt=C;let $=O;O=null,this.setClear($)}},getReversed:function(){return mt},setTest:function(C){C?st(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(C){at!==C&&!N&&(i.depthMask(C),at=C)},setFunc:function(C){if(mt&&(C=Sh[C]),gt!==C){switch(C){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case $r:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}gt=C}},setLocked:function(C){N=C},setClear:function(C){O!==C&&(O=C,mt&&(C=1-C),i.clearDepth(C))},reset:function(){N=!1,at=null,gt=null,O=null,mt=!1}}}function s(){let N=!1,mt=null,at=null,gt=null,O=null,C=null,B=null,$=null,ut=null;return{setTest:function(rt){N||(rt?st(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(rt){mt!==rt&&!N&&(i.stencilMask(rt),mt=rt)},setFunc:function(rt,ot,vt){(at!==rt||gt!==ot||O!==vt)&&(i.stencilFunc(rt,ot,vt),at=rt,gt=ot,O=vt)},setOp:function(rt,ot,vt){(C!==rt||B!==ot||$!==vt)&&(i.stencilOp(rt,ot,vt),C=rt,B=ot,$=vt)},setLocked:function(rt){N=rt},setClear:function(rt){ut!==rt&&(i.clearStencil(rt),ut=rt)},reset:function(){N=!1,mt=null,at=null,gt=null,O=null,C=null,B=null,$=null,ut=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,l=new WeakMap,u={},p={},f={},d=new WeakMap,g=[],S=null,m=!1,c=null,v=null,E=null,x=null,b=null,w=null,R=null,y=new Ct(0,0,0),T=0,P=!1,F=null,z=null,X=null,L=null,k=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=J>=2);let tt=null,K={},wt=i.getParameter(i.SCISSOR_BOX),yt=i.getParameter(i.VIEWPORT),zt=new Ie().fromArray(wt),Jt=new Ie().fromArray(yt);function Zt(N,mt,at,gt){let O=new Uint8Array(4),C=i.createTexture();i.bindTexture(N,C),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let B=0;B<at;B++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(mt,0,i.RGBA,1,1,gt,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D(mt+B,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return C}let et={};et[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(cs),Ht(!1),Vt(ll),st(i.CULL_FACE),Kt(Yn);function st(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function _t(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ot(N,mt){return f[N]!==mt?(i.bindFramebuffer(N,mt),f[N]=mt,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=mt),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=mt),!0):!1}function lt(N,mt){let at=g,gt=!1;if(N){at=d.get(mt),at===void 0&&(at=[],d.set(mt,at));let O=N.textures;if(at.length!==O.length||at[0]!==i.COLOR_ATTACHMENT0){for(let C=0,B=O.length;C<B;C++)at[C]=i.COLOR_ATTACHMENT0+C;at.length=O.length,gt=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,gt=!0);gt&&i.drawBuffers(at)}function It(N){return S!==N?(i.useProgram(N),S=N,!0):!1}let Bt={[Vi]:i.FUNC_ADD,[Hc]:i.FUNC_SUBTRACT,[Wc]:i.FUNC_REVERSE_SUBTRACT};Bt[Xc]=i.MIN,Bt[qc]=i.MAX;let Nt={[Yc]:i.ZERO,[Zc]:i.ONE,[Jc]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[jc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Qc]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(N,mt,at,gt,O,C,B,$,ut,rt){if(N===Yn){m===!0&&(_t(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),N!==Gc){if(N!==c||rt!==P){if((v!==Vi||b!==Vi)&&(i.blendEquation(i.FUNC_ADD),v=Vi,b=Vi),rt)switch(N){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qt("WebGLState: Invalid blending: ",N);break}else switch(N){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",N);break}E=null,x=null,w=null,R=null,y.set(0,0,0),T=0,c=N,P=rt}return}O=O||mt,C=C||at,B=B||gt,(mt!==v||O!==b)&&(i.blendEquationSeparate(Bt[mt],Bt[O]),v=mt,b=O),(at!==E||gt!==x||C!==w||B!==R)&&(i.blendFuncSeparate(Nt[at],Nt[gt],Nt[C],Nt[B]),E=at,x=gt,w=C,R=B),($.equals(y)===!1||ut!==T)&&(i.blendColor($.r,$.g,$.b,ut),y.copy($),T=ut),c=N,P=!1}function te(N,mt){N.side===dn?_t(i.CULL_FACE):st(i.CULL_FACE);let at=N.side===ln;mt&&(at=!at),Ht(at),N.blending===Ss&&N.transparent===!1?Kt(Yn):Kt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let gt=N.stencilWrite;o.setTest(gt),gt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(N){F!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),F=N)}function Vt(N){N!==zc?(st(i.CULL_FACE),N!==z&&(N===ll?i.cullFace(i.BACK):N===kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),z=N}function de(N){N!==X&&(H&&i.lineWidth(N),X=N)}function ue(N,mt,at){N?(st(i.POLYGON_OFFSET_FILL),(L!==mt||k!==at)&&(L=mt,k=at,a.getReversed()&&(mt=-mt),i.polygonOffset(mt,at))):_t(i.POLYGON_OFFSET_FILL)}function ge(N){N?st(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function fe(N){N===void 0&&(N=i.TEXTURE0+I-1),tt!==N&&(i.activeTexture(N),tt=N)}function D(N,mt,at){at===void 0&&(tt===null?at=i.TEXTURE0+I-1:at=tt);let gt=K[at];gt===void 0&&(gt={type:void 0,texture:void 0},K[at]=gt),(gt.type!==N||gt.texture!==mt)&&(tt!==at&&(i.activeTexture(at),tt=at),i.bindTexture(N,mt||et[N]),gt.type=N,gt.texture=mt)}function Me(){let N=K[tt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function re(){try{i.compressedTexImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function V(){try{i.texSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function ht(){try{i.texStorage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function ct(){try{i.texStorage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function Q(){try{i.texImage2D(...arguments)}catch(N){qt("WebGLState:",N)}}function it(){try{i.texImage3D(...arguments)}catch(N){qt("WebGLState:",N)}}function dt(N){return p[N]!==void 0?p[N]:i.getParameter(N)}function Rt(N,mt){p[N]!==mt&&(i.pixelStorei(N,mt),p[N]=mt)}function pt(N){zt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),zt.copy(N))}function ft(N){Jt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Jt.copy(N))}function Dt(N,mt){let at=l.get(mt);at===void 0&&(at=new WeakMap,l.set(mt,at));let gt=at.get(N);gt===void 0&&(gt=i.getUniformBlockIndex(mt,N.name),at.set(N,gt))}function Ft(N,mt){let gt=l.get(mt).get(N);h.get(mt)!==gt&&(i.uniformBlockBinding(mt,gt,N.__bindingPointIndex),h.set(mt,gt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},tt=null,K={},f={},d=new WeakMap,g=[],S=null,m=!1,c=null,v=null,E=null,x=null,b=null,w=null,R=null,y=new Ct(0,0,0),T=0,P=!1,F=null,z=null,X=null,L=null,k=null,zt.set(0,0,i.canvas.width,i.canvas.height),Jt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:_t,bindFramebuffer:Ot,drawBuffers:lt,useProgram:It,setBlending:Kt,setMaterial:te,setFlipSided:Ht,setCullFace:Vt,setLineWidth:de,setPolygonOffset:ue,setScissorTest:ge,activeTexture:fe,bindTexture:D,unbindTexture:Me,compressedTexImage2D:re,compressedTexImage3D:A,texImage2D:Q,texImage3D:it,pixelStorei:Rt,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Ft,texStorage2D:ht,texStorage3D:ct,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:pt,viewport:ft,reset:Yt}}function K0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,u=new WeakMap,p=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,_){return g?new OffscreenCanvas(A,_):Hs("canvas")}function m(A,_,V){let Z=1,nt=re(A);if((nt.width>V||nt.height>V)&&(Z=V/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ht=Math.floor(Z*nt.width),ct=Math.floor(Z*nt.height);f===void 0&&(f=S(ht,ct));let Q=_?S(ht,ct):f;return Q.width=ht,Q.height=ct,Q.getContext("2d").drawImage(A,0,0,ht,ct),Xt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+ht+"x"+ct+")."),Q}else return"data"in A&&Xt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function c(A){return A.generateMipmaps}function v(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,_,V,Z,nt,ht=!1){if(A!==null){if(i[A]!==void 0)return i[A];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct;Z&&(ct=t.get("EXT_texture_norm16"),ct||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(V===i.FLOAT&&(Q=i.R32F),V===i.HALF_FLOAT&&(Q=i.R16F),V===i.UNSIGNED_BYTE&&(Q=i.R8),V===i.UNSIGNED_SHORT&&ct&&(Q=ct.R16_EXT),V===i.SHORT&&ct&&(Q=ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.R8UI),V===i.UNSIGNED_SHORT&&(Q=i.R16UI),V===i.UNSIGNED_INT&&(Q=i.R32UI),V===i.BYTE&&(Q=i.R8I),V===i.SHORT&&(Q=i.R16I),V===i.INT&&(Q=i.R32I)),_===i.RG&&(V===i.FLOAT&&(Q=i.RG32F),V===i.HALF_FLOAT&&(Q=i.RG16F),V===i.UNSIGNED_BYTE&&(Q=i.RG8),V===i.UNSIGNED_SHORT&&ct&&(Q=ct.RG16_EXT),V===i.SHORT&&ct&&(Q=ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RG8UI),V===i.UNSIGNED_SHORT&&(Q=i.RG16UI),V===i.UNSIGNED_INT&&(Q=i.RG32UI),V===i.BYTE&&(Q=i.RG8I),V===i.SHORT&&(Q=i.RG16I),V===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),V===i.UNSIGNED_INT&&(Q=i.RGB32UI),V===i.BYTE&&(Q=i.RGB8I),V===i.SHORT&&(Q=i.RGB16I),V===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),V===i.UNSIGNED_INT&&(Q=i.RGBA32UI),V===i.BYTE&&(Q=i.RGBA8I),V===i.SHORT&&(Q=i.RGBA16I),V===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGB16_EXT),V===i.SHORT&&ct&&(Q=ct.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let it=ht?Gs:he.getTransfer(nt);V===i.FLOAT&&(Q=i.RGBA32F),V===i.HALF_FLOAT&&(Q=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Q=it===ye?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGBA16_EXT),V===i.SHORT&&ct&&(Q=ct.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(A,_){let V;return A?_===null||_===Nn||_===Ts?V=i.DEPTH24_STENCIL8:_===Fn?V=i.DEPTH32F_STENCIL8:_===ws&&(V=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Nn||_===Ts?V=i.DEPTH_COMPONENT24:_===Fn?V=i.DEPTH_COMPONENT32F:_===ws&&(V=i.DEPTH_COMPONENT16),V}function w(A,_){return c(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==Qe?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&p.delete(_)}function y(A){let _=A.target;_.removeEventListener("dispose",y),F(_)}function T(A){let _=n.get(A);if(_.__webglInit===void 0)return;let V=A.source,Z=d.get(V);if(Z){let nt=Z[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(A),Object.keys(Z).length===0&&d.delete(V)}n.remove(A)}function P(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let V=A.source,Z=d.get(V);delete Z[_.__cacheKey],a.memory.textures--}function F(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let nt=0;nt<_.__webglFramebuffer[Z].length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[Z][nt]);else i.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Z]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=A.textures;for(let Z=0,nt=V.length;Z<nt;Z++){let ht=n.get(V[Z]);ht.__webglTexture&&(i.deleteTexture(ht.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(A)}let z=0;function X(){z=0}function L(){return z}function k(A){z=A}function I(){let A=z;return A>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,A}function H(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function J(A,_){let V=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let Z=A.image;if(Z===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(V,A,_);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function W(A,_){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_t(V,A,_);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function tt(A,_){let V=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){_t(V,A,_);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function K(A,_){let V=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Ot(V,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}let wt={[Bi]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},yt={[Je]:i.NEAREST,[lh]:i.NEAREST_MIPMAP_NEAREST,[lr]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},zt={[dh]:i.NEVER,[_h]:i.ALWAYS,[fh]:i.LESS,[uo]:i.LEQUAL,[ph]:i.EQUAL,[fo]:i.GEQUAL,[mh]:i.GREATER,[gh]:i.NOTEQUAL};function Jt(A,_){if(_.type===Fn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Qe||_.magFilter===Aa||_.magFilter===lr||_.magFilter===Ei||_.minFilter===Qe||_.minFilter===Aa||_.minFilter===lr||_.minFilter===Ei)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,wt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,wt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,wt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==lr&&_.minFilter!==Ei||_.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Zt(A,_){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let Z=_.source,nt=d.get(Z);nt===void 0&&(nt={},d.set(Z,nt));let ht=H(_);if(ht!==A.__cacheKey){nt[ht]===void 0&&(nt[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[ht].usedTimes++;let ct=nt[A.__cacheKey];ct!==void 0&&(nt[A.__cacheKey].usedTimes--,ct.usedTimes===0&&P(_)),A.__cacheKey=ht,A.__webglTexture=nt[ht].texture}return V}function et(A,_,V){return Math.floor(Math.floor(A/V)/_)}function st(A,_,V,Z){let ht=A.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,Z,_.data);else{ht.sort((Rt,pt)=>Rt.start-pt.start);let ct=0;for(let Rt=1;Rt<ht.length;Rt++){let pt=ht[ct],ft=ht[Rt],Dt=pt.start+pt.count,Ft=et(ft.start,_.width,4),Yt=et(pt.start,_.width,4);ft.start<=Dt+1&&Ft===Yt&&et(ft.start+ft.count-1,_.width,4)===Ft?pt.count=Math.max(pt.count,ft.start+ft.count-pt.start):(++ct,ht[ct]=ft)}ht.length=ct+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Rt=0,pt=ht.length;Rt<pt;Rt++){let ft=ht[Rt],Dt=Math.floor(ft.start/4),Ft=Math.ceil(ft.count/4),Yt=Dt%_.width,N=Math.floor(Dt/_.width),mt=Ft,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,Yt,N,mt,at,V,Z,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function _t(A,_,V){let Z=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=i.TEXTURE_3D);let nt=Zt(A,_),ht=_.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+V);let ct=n.get(ht);if(ht.version!==ct.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let at=he.getPrimaries(he.workingColorSpace),gt=_.colorSpace===si?null:he.getPrimaries(_.colorSpace),O=_.colorSpace===si||at===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let it=m(_.image,!1,s.maxTextureSize);it=Me(_,it);let dt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type),pt=x(_.internalFormat,dt,Rt,_.normalized,_.colorSpace,_.isVideoTexture);Jt(Z,_);let ft,Dt=_.mipmaps,Ft=_.isVideoTexture!==!0,Yt=ct.__version===void 0||nt===!0,N=ht.dataReady,mt=w(_,it);if(_.isDepthTexture)pt=b(_.format===Ai,_.type),Yt&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,pt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,dt,Rt,null));else if(_.isDataTexture)if(Dt.length>0){Ft&&Yt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Dt[0].width,Dt[0].height);for(let at=0,gt=Dt.length;at<gt;at++)ft=Dt[at],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,at,pt,ft.width,ft.height,0,dt,Rt,ft.data);_.generateMipmaps=!1}else Ft?(Yt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,it.width,it.height),N&&st(_,it,dt,Rt)):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,dt,Rt,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,Dt[0].width,Dt[0].height,it.depth);for(let at=0,gt=Dt.length;at<gt;at++)if(ft=Dt[at],_.format!==bn)if(dt!==null)if(Ft){if(N)if(_.layerUpdates.size>0){let O=Pl(ft.width,ft.height,_.format,_.type);for(let C of _.layerUpdates){let B=ft.data.subarray(C*O/ft.data.BYTES_PER_ELEMENT,(C+1)*O/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,C,ft.width,ft.height,1,dt,B)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,it.depth,dt,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,pt,ft.width,ft.height,it.depth,0,ft.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,ft.width,ft.height,it.depth,dt,Rt,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,pt,ft.width,ft.height,it.depth,0,dt,Rt,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&Yt&&e.texStorage2D(i.TEXTURE_2D,mt,pt,Dt[0].width,Dt[0].height);for(let at=0,gt=Dt.length;at<gt;at++)ft=Dt[at],_.format!==bn?dt!==null?Ft?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,at,pt,ft.width,ft.height,0,ft.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(i.TEXTURE_2D,at,pt,ft.width,ft.height,0,dt,Rt,ft.data)}else if(_.isDataArrayTexture)if(Ft){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,mt,pt,it.width,it.height,it.depth),N)if(_.layerUpdates.size>0){let at=Pl(it.width,it.height,_.format,_.type);for(let gt of _.layerUpdates){let O=it.data.subarray(gt*at/it.data.BYTES_PER_ELEMENT,(gt+1)*at/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,gt,it.width,it.height,1,dt,Rt,O)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,dt,Rt,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,it.width,it.height,it.depth,0,dt,Rt,it.data);else if(_.isData3DTexture)Ft?(Yt&&e.texStorage3D(i.TEXTURE_3D,mt,pt,it.width,it.height,it.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,dt,Rt,it.data)):e.texImage3D(i.TEXTURE_3D,0,pt,it.width,it.height,it.depth,0,dt,Rt,it.data);else if(_.isFramebufferTexture){if(Yt)if(Ft)e.texStorage2D(i.TEXTURE_2D,mt,pt,it.width,it.height);else{let at=it.width,gt=it.height;for(let O=0;O<mt;O++)e.texImage2D(i.TEXTURE_2D,O,pt,at,gt,0,dt,Rt,null),at>>=1,gt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),it.parentNode!==at){at.appendChild(it),p.add(_),at.onpaint=gt=>{let O=gt.changedElements;for(let C of p)O.includes(C.image)&&(C.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let O=i.RGBA,C=i.RGBA,B=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,O,C,B,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ft&&Yt){let at=re(Dt[0]);e.texStorage2D(i.TEXTURE_2D,mt,pt,at.width,at.height)}for(let at=0,gt=Dt.length;at<gt;at++)ft=Dt[at],Ft?N&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,dt,Rt,ft):e.texImage2D(i.TEXTURE_2D,at,pt,dt,Rt,ft);_.generateMipmaps=!1}else if(Ft){if(Yt){let at=re(it);e.texStorage2D(i.TEXTURE_2D,mt,pt,at.width,at.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Rt,it)}else e.texImage2D(i.TEXTURE_2D,0,pt,dt,Rt,it);c(_)&&v(Z),ct.__version=ht.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ot(A,_,V){if(_.image.length!==6)return;let Z=Zt(A,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);let ht=n.get(nt);if(nt.version!==ht.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);let ct=he.getPrimaries(he.workingColorSpace),Q=_.colorSpace===si?null:he.getPrimaries(_.colorSpace),it=_.colorSpace===si||ct===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Rt=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let C=0;C<6;C++)!dt&&!Rt?pt[C]=m(_.image[C],!0,s.maxCubemapSize):pt[C]=Rt?_.image[C].image:_.image[C],pt[C]=Me(_,pt[C]);let ft=pt[0],Dt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Yt=x(_.internalFormat,Dt,Ft,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,mt=ht.__version===void 0||Z===!0,at=nt.dataReady,gt=w(_,ft);Jt(i.TEXTURE_CUBE_MAP,_);let O;if(dt){N&&mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,ft.width,ft.height);for(let C=0;C<6;C++){O=pt[C].mipmaps;for(let B=0;B<O.length;B++){let $=O[B];_.format!==bn?Dt!==null?N?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B,0,0,$.width,$.height,Dt,$.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B,Yt,$.width,$.height,0,$.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B,0,0,$.width,$.height,Dt,Ft,$.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B,Yt,$.width,$.height,0,Dt,Ft,$.data)}}}else{if(O=_.mipmaps,N&&mt){O.length>0&&gt++;let C=re(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,Yt,C.width,C.height)}for(let C=0;C<6;C++)if(Rt){N?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,pt[C].width,pt[C].height,Dt,Ft,pt[C].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Yt,pt[C].width,pt[C].height,0,Dt,Ft,pt[C].data);for(let B=0;B<O.length;B++){let ut=O[B].image[C].image;N?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B+1,0,0,ut.width,ut.height,Dt,Ft,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B+1,Yt,ut.width,ut.height,0,Dt,Ft,ut.data)}}else{N?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,Dt,Ft,pt[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Yt,Dt,Ft,pt[C]);for(let B=0;B<O.length;B++){let $=O[B];N?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B+1,0,0,Dt,Ft,$.image[C]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+C,B+1,Yt,Dt,Ft,$.image[C])}}}c(_)&&v(i.TEXTURE_CUBE_MAP),ht.__version=nt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function lt(A,_,V,Z,nt,ht){let ct=r.convert(V.format,V.colorSpace),Q=r.convert(V.type),it=x(V.internalFormat,ct,Q,V.normalized,V.colorSpace),dt=n.get(_),Rt=n.get(V);if(Rt.__renderTarget=_,!dt.__hasExternalTextures){let pt=Math.max(1,_.width>>ht),ft=Math.max(1,_.height>>ht);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,ht,it,pt,ft,_.depth,0,ct,Q,null):e.texImage2D(nt,ht,it,pt,ft,0,ct,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,nt,Rt.__webglTexture,0,ge(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,nt,Rt.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let Z=_.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,ht=b(_.stencilBuffer,nt),ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(_),ht,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(_),ht,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ht,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,A)}else{let Z=_.textures;for(let nt=0;nt<Z.length;nt++){let ht=Z[nt],ct=r.convert(ht.format,ht.colorSpace),Q=r.convert(ht.type),it=x(ht.internalFormat,ct,Q,ht.normalized,ht.colorSpace);fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge(_),it,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(A,_,V){let Z=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(_.depthTexture);if(nt.__renderTarget=_,(!nt.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_.depthTexture);let dt=r.convert(_.depthTexture.format),Rt=r.convert(_.depthTexture.type),pt;_.depthTexture.format===Wn?pt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ai&&(pt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,pt,_.width,_.height,0,dt,Rt,null)}}else J(_.depthTexture,0);let ht=nt.__webglTexture,ct=ge(_),Q=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,it=_.depthTexture.format===Ai?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Wn)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,ht,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,ht,0);else if(_.depthTexture.format===Ai)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,Q,ht,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,it,Q,ht,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(A){let _=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=Z}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)Bt(_.__webglFramebuffer[Z],A,Z);else{let Z=A.texture.mipmaps;Z&&Z.length>0?Bt(_.__webglFramebuffer[0],A,0):Bt(_.__webglFramebuffer,A,0)}else if(V){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=i.createRenderbuffer(),It(_.__webglDepthbuffer[Z],A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),It(_.__webglDepthbuffer,A,!1);else{let nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,ht)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(A,_,V){let Z=n.get(A);_!==void 0&&lt(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Nt(A)}function te(A){let _=A.texture,V=n.get(A),Z=n.get(_);A.addEventListener("dispose",y);let nt=A.textures,ht=A.isWebGLCubeRenderTarget===!0,ct=nt.length>1;if(ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=_.version,a.memory.textures++),ht){V.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[Q]=[];for(let it=0;it<_.mipmaps.length;it++)V.__webglFramebuffer[Q][it]=i.createFramebuffer()}else V.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)V.__webglFramebuffer[Q]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Q=0,it=nt.length;Q<it;Q++){let dt=n.get(nt[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&fe(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let Q=0;Q<nt.length;Q++){let it=nt[Q];V.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[Q]);let dt=r.convert(it.format,it.colorSpace),Rt=r.convert(it.type),pt=x(it.internalFormat,dt,Rt,it.normalized,it.colorSpace,A.isXRRenderTarget===!0),ft=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,V.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),It(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)lt(V.__webglFramebuffer[Q][it],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,it);else lt(V.__webglFramebuffer[Q],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);c(_)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Q=0,it=nt.length;Q<it;Q++){let dt=nt[Q],Rt=n.get(dt),pt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Rt.__webglTexture),Jt(pt,dt),lt(V.__webglFramebuffer,A,dt,i.COLOR_ATTACHMENT0+Q,pt,0),c(dt)&&v(pt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,Z.__webglTexture),Jt(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)lt(V.__webglFramebuffer[it],A,_,i.COLOR_ATTACHMENT0,Q,it);else lt(V.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Q,0);c(_)&&v(Q),e.unbindTexture()}A.depthBuffer&&Nt(A)}function Ht(A){let _=A.textures;for(let V=0,Z=_.length;V<Z;V++){let nt=_[V];if(c(nt)){let ht=E(A),ct=n.get(nt).__webglTexture;e.bindTexture(ht,ct),v(ht),e.unbindTexture()}}}let Vt=[],de=[];function ue(A){if(A.samples>0){if(fe(A)===!1){let _=A.textures,V=A.width,Z=A.height,nt=i.COLOR_BUFFER_BIT,ht=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(A),Q=_.length>1;if(Q)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let it=A.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let Rt=n.get(_[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,nt,i.NEAREST),h===!0&&(Vt.length=0,de.length=0,Vt.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Vt.push(ht),de.push(ht),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,de)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ct.__webglColorRenderbuffer[dt]);let Rt=n.get(_[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&h){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ge(A){return Math.min(s.maxSamples,A.samples)}function fe(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){let _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Me(A,_){let V=A.colorSpace,Z=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Vs&&V!==si&&(he.getTransfer(V)===ye?(Z!==bn||nt!==fn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",V)),_}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=X,this.getTextureUnits=L,this.setTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=tt,this.setTextureCube=K,this.rebindTextures=Kt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function $0(i,t){function e(n,s=si){let r,a=he.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yl)return i.BYTE;if(n===vl)return i.SHORT;if(n===ws)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===wl)return i.RGB;if(n===bn)return i.RGBA;if(n===Wn)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===cr||n===hr||n===ur||n===dr)if(a===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===cr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===cr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka||n===Va||n===Ga||n===fr||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return a===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fr)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===Ka||n===$a||n===Qa||n===ja||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===pr||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Kl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _n({vertexShader:Q0,fragmentShader:j0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$l=class extends Xn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,l=null,u=null,p=null,f=null,d=null,g=null,S=typeof XRWebGLBinding<"u",m=new Kl,c={},v=e.getContextAttributes(),E=null,x=null,b=[],w=[],R=new Qt,y=null,T=null,P=new Ze;P.viewport=new Ie;let F=new Ze;F.viewport=new Ie;let z=[P,F],X=new ba,L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let st=b[et];return st===void 0&&(st=new fs,b[et]=st),st.getTargetRaySpace()},this.getControllerGrip=function(et){let st=b[et];return st===void 0&&(st=new fs,b[et]=st),st.getGripSpace()},this.getHand=function(et){let st=b[et];return st===void 0&&(st=new fs,b[et]=st),st.getHandSpace()};function I(et){let st=w.indexOf(et.inputSource);if(st===-1)return;let _t=b[st];_t!==void 0&&(_t.update(et.inputSource,et.frame,l||a),_t.dispatchEvent({type:et.type,data:et.inputSource}))}function H(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let et=0;et<b.length;et++){let st=w[et];st!==null&&(w[et]=null,b[et].disconnect(st))}L=null,k=null,m.reset();for(let et in c)delete c[et];if(t.setRenderTarget(E),d=null,f=null,p=null,s=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),T!==null){let et=T.camera;et.fov=T.fov,et.zoom=T.zoom,et.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Ot=null,lt=null;v.depth&&(lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Ai:Wn,Ot=v.stencil?Ts:Nn);let It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new un(f.textureWidth,f.textureHeight,{format:bn,type:fn,depthTexture:new xi(f.textureWidth,f.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new un(d.framebufferWidth,d.framebufferHeight,{format:bn,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(et){for(let st=0;st<et.removed.length;st++){let _t=et.removed[st],Ot=w.indexOf(_t);Ot>=0&&(w[Ot]=null,b[Ot].disconnect(_t))}for(let st=0;st<et.added.length;st++){let _t=et.added[st],Ot=w.indexOf(_t);if(Ot===-1){for(let It=0;It<b.length;It++)if(It>=w.length){w.push(_t),Ot=It;break}else if(w[It]===null){w[It]=_t,Ot=It;break}if(Ot===-1)break}let lt=b[Ot];lt&&lt.connect(_t)}}let W=new G,tt=new G;function K(et,st,_t){W.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(_t.matrixWorld);let Ot=W.distanceTo(tt),lt=st.projectionMatrix.elements,It=_t.projectionMatrix.elements,Bt=lt[14]/(lt[10]-1),Nt=lt[14]/(lt[10]+1),Kt=(lt[9]+1)/lt[5],te=(lt[9]-1)/lt[5],Ht=(lt[8]-1)/lt[0],Vt=(It[8]+1)/It[0],de=Bt*Ht,ue=Bt*Vt,ge=Ot/(-Ht+Vt),fe=ge*-Ht;if(st.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(fe),et.translateZ(ge),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),lt[10]===-1)et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let D=Bt+ge,Me=Nt+ge,re=de-fe,A=ue+(Ot-fe),_=Kt*Nt/Me*D,V=te*Nt/Me*D;et.projectionMatrix.makePerspective(re,A,_,V,D,Me),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function wt(et,st){st===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(st.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let st=et.near,_t=et.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),X.near=F.near=P.near=st,X.far=F.far=P.far=_t,(L!==X.near||k!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),L=X.near,k=X.far),X.layers.mask=et.layers.mask|6,P.layers.mask=X.layers.mask&-5,F.layers.mask=X.layers.mask&-3;let Ot=et.parent,lt=X.cameras;wt(X,Ot);for(let It=0;It<lt.length;It++)wt(lt[It],Ot);lt.length===2?K(X,P,F):X.projectionMatrix.copy(P.projectionMatrix),T===null&&et.isPerspectiveCamera&&(T={camera:et,fov:et.fov,zoom:et.zoom}),yt(et,X,Ot)};function yt(et,st,_t){_t===null?et.matrix.copy(st.matrixWorld):(et.matrix.copy(_t.matrixWorld),et.matrix.invert(),et.matrix.multiply(st.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(st.projectionMatrix),et.projectionMatrixInverse.copy(st.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Ws*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(et){h=et,f!==null&&(f.fixedFoveation=et),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(et){return c[et]};let zt=null;function Jt(et,st){if(u=st.getViewerPose(l||a),g=st,u!==null){let _t=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let Ot=!1;_t.length!==X.cameras.length&&(X.cameras.length=0,Ot=!0);for(let Nt=0;Nt<_t.length;Nt++){let Kt=_t[Nt],te=null;if(d!==null)te=d.getViewport(Kt);else{let Vt=p.getViewSubImage(f,Kt);te=Vt.viewport,Nt===0&&(t.setRenderTargetTextures(x,Vt.colorTexture,Vt.depthStencilTexture),t.setRenderTarget(x))}let Ht=z[Nt];Ht===void 0&&(Ht=new Ze,Ht.layers.enable(Nt),Ht.viewport=new Ie,z[Nt]=Ht),Ht.matrix.fromArray(Kt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Kt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(te.x,te.y,te.width,te.height),Nt===0&&(X.matrix.copy(Ht.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ot===!0&&X.cameras.push(Ht)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Nt=p.getDepthInformation(_t[0]);Nt&&Nt.isValid&&Nt.texture&&m.init(Nt,s.renderState)}if(lt&&lt.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let Nt=0;Nt<_t.length;Nt++){let Kt=_t[Nt].camera;if(Kt){let te=c[Kt];te||(te=new $s,c[Kt]=te);let Ht=p.getCameraImage(Kt);te.sourceTexture=Ht}}}}for(let _t=0;_t<b.length;_t++){let Ot=w[_t],lt=b[_t];Ot!==null&&lt!==void 0&&lt.update(Ot,st,l||a)}zt&&zt(et,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Zt=new Zh;Zt.setAnimationLoop(Jt),this.setAnimationLoop=function(et){zt=et},this.dispose=function(){}}},tg=new Ce,tu=new $t;tu.set(-1,0,0,0,1,0,0,0,1);function eg(i,t){function e(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function n(m,c){c.color.getRGB(m.fogColor.value,Rl(i)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function s(m,c,v,E,x){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(m,c):c.isMeshLambertMaterial?(r(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(m,c),p(m,c)):c.isMeshPhongMaterial?(r(m,c),u(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(m,c),f(m,c),c.isMeshPhysicalMaterial&&d(m,c,x)):c.isMeshMatcapMaterial?(r(m,c),g(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),S(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(a(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?h(m,c,v,E):c.isSpriteMaterial?l(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,e(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===ln&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,e(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===ln&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,e(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,e(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let v=t.get(c),E=v.envMap,x=v.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(tu),m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,m.aoMapTransform))}function a(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function h(m,c,v,E){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=E*.5,c.map&&(m.map.value=c.map,e(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function l(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function p(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function d(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===ln&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.retroreflectivity>0&&(m.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,c){c.matcap&&(m.matcap.value=c.matcap)}function S(m,c){let v=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,b){let w=b.program;n.uniformBlockBinding(x,w)}function l(x,b){let w=s[x.id];w===void 0&&(m(x),w=u(x),s[x.id]=w,x.addEventListener("dispose",v));let R=b.program;n.updateUBOMapping(x,R);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function u(x){let b=p();x.__bindingPointIndex=b;let w=i.createBuffer(),R=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let b=s[x.id],w=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,T=w.length;y<T;y++){let P=w[y];if(Array.isArray(P))for(let F=0,z=P.length;F<z;F++)d(P[F],y,F,R);else d(P,y,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,w,R){if(S(x,b,w,R)===!0){let y=x.__offset,T=x.value;if(Array.isArray(T)){let P=0;for(let F=0;F<T.length;F++){let z=T[F],X=c(z);g(z,x.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function g(x,b,w){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,w)}function S(x,b,w,R){let y=x.value,T=b+"_"+w;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{let P=R[T];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(x){let b=x.uniforms,w=0,R=16;for(let T=0,P=b.length;T<P;T++){let F=Array.isArray(b[T])?b[T]:[b[T]];for(let z=0,X=F.length;z<X;z++){let L=F[z],k=Array.isArray(L.value)?L.value:[L.value];for(let I=0,H=k.length;I<H;I++){let J=k[I],W=c(J),tt=w%R,K=tt%W.boundary,wt=tt+K;w+=K,wt!==0&&R-wt<W.storage&&(w+=R-wt),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=W.storage}}}let y=w%R;return y>0&&(w+=R-y),x.__size=w,x.__cache={},this}function c(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",x),b}function v(x){let b=x.target;b.removeEventListener("dispose",v);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:h,update:l,dispose:E}}var ig=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function sg(){return Zn===null&&(Zn=new oa(ig,16,16,Ri,On),Zn.name="DFG_LUT",Zn.minFilter=Qe,Zn.magFilter=Qe,Zn.wrapS=Hn,Zn.wrapT=Hn,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var xo=class{constructor(t={}){let{canvas:e=yh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:d=fn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let S=d,m=new Set([Da,La,Pa]),c=new Set([fn,Nn,ws,Ts,Ca,Ia]),v=new Uint32Array(4),E=new Int32Array(4),x=new G,b=null,w=null,R=[],y=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,z=null,X=null,L=null,k=null;this._outputColorSpace=Ye;let I=0,H=0,J=null,W=-1,tt=null,K=new Ie,wt=new Ie,yt=null,zt=new Ct(0),Jt=0,Zt=e.width,et=e.height,st=1,_t=null,Ot=null,lt=new Ie(0,0,Zt,et),It=new Ie(0,0,Zt,et),Bt=!1,Nt=new ms,Kt=!1,te=!1,Ht=new Ce,Vt=new G,de=new Ie,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function fe(){return J===null?st:1}let D=n;function Me(M,U){return e.getContext(M,U)}let re,A,_,V,Z,nt,ht,ct,Q,it,dt,Rt,pt,ft,Dt,Ft,Yt,N,mt,at,gt,O,C;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",rt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),D===null){let U="webgl2";if(D=Me(U,M),D===null)throw Me(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(M){throw e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),qt("WebGLRenderer: "+M.message),M}function B(){re=new um(D),re.init(),gt=new $0(D,re),A=new em(D,re,t,gt),_=new J0(D,re),A.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),X=D.createFramebuffer(),L=D.createFramebuffer(),k=D.createFramebuffer(),V=new pm(D),Z=new N0,nt=new K0(D,re,_,Z,A,gt,V),ht=new hm(P),ct=new md(D),O=new jp(D,ct),Q=new dm(D,ct,V,O),it=new gm(D,Q,ct,O,V),N=new mm(D,A,nt),Dt=new nm(Z),dt=new U0(P,ht,re,A,O,Dt),Rt=new eg(P,Z),pt=new O0,ft=new H0(re),Yt=new Qp(P,ht,_,it,g,h),Ft=new Z0(P,it,A),C=new ng(D,V,A,_),mt=new tm(D,re,V),at=new fm(D,re,V),V.programs=dt.programs,P.capabilities=A,P.extensions=re,P.properties=Z,P.renderLists=pt,P.shadowMap=Ft,P.state=_,P.info=V}S!==fn&&(T=new xm(S,e.width,e.height,o,s,r));let $=new $l(P,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=re.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=re.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(M){M!==void 0&&(st=M,this.setSize(Zt,et,!1))},this.getSize=function(M){return M.set(Zt,et)},this.setSize=function(M,U,j=!0){if($.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Zt=M,et=U,e.width=Math.floor(M*st),e.height=Math.floor(U*st),j===!0&&(e.style.width=M+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Zt*st,et*st).floor()},this.setDrawingBufferSize=function(M,U,j){Zt=M,et=U,st=j,e.width=Math.floor(M*j),e.height=Math.floor(U*j),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(S===fn){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,U,j,q){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,U,j,q),_.viewport(K.copy(lt).multiplyScalar(st).round())},this.getScissor=function(M){return M.copy(It)},this.setScissor=function(M,U,j,q){M.isVector4?It.set(M.x,M.y,M.z,M.w):It.set(M,U,j,q),_.scissor(wt.copy(It).multiplyScalar(st).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(M){_.setScissorTest(Bt=M)},this.setOpaqueSort=function(M){_t=M},this.setTransparentSort=function(M){Ot=M},this.getClearColor=function(M){return M.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,j=!0){let q=0;if(M){let Y=!1;if(J!==null){let bt=J.texture.format;Y=m.has(bt)}if(Y){let bt=J.texture.type,At=c.has(bt),St=Yt.getClearColor(),Pt=Yt.getClearAlpha(),Ut=St.r,ne=St.g,oe=St.b;At?(v[0]=Ut,v[1]=ne,v[2]=oe,v[3]=Pt,D.clearBufferuiv(D.COLOR,0,v)):(E[0]=Ut,E[1]=ne,E[2]=oe,E[3]=Pt,D.clearBufferiv(D.COLOR,0,E))}else q|=D.COLOR_BUFFER_BIT}U&&(q|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&D.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",rt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Yt.dispose(),pt.dispose(),ft.dispose(),Z.dispose(),ht.dispose(),it.dispose(),O.dispose(),C.dispose(),dt.dispose(),$.dispose(),$.removeEventListener("sessionstart",ae),$.removeEventListener("sessionend",An),Rn.stop()};function ut(M){M.preventDefault(),Al("WebGLRenderer: Context Lost."),F=!0}function rt(){Al("WebGLRenderer: Context Restored."),F=!1;let M=V.autoReset,U=Ft.enabled,j=Ft.autoUpdate,q=Ft.needsUpdate,Y=Ft.type;B(),V.autoReset=M,Ft.enabled=U,Ft.autoUpdate=j,Ft.needsUpdate=q,Ft.type=Y}function ot(M){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function vt(M){let U=M.target;U.removeEventListener("dispose",vt),Wt(U)}function Wt(M){Tt(M),Z.remove(M)}function Tt(M){let U=Z.get(M).programs;U!==void 0&&(U.forEach(function(j){dt.releaseProgram(j)}),M.isShaderMaterial&&dt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,j,q,Y,bt){U===null&&(U=ue);let At=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,St=wu(M,U,j,q,Y);_.setMaterial(q,At);let Pt=j.index,Ut=1;if(q.wireframe===!0){if(Pt=Q.getWireframeAttribute(j),Pt===void 0)return;Ut=2}let ne=j.drawRange,oe=j.attributes.position,Lt=ne.start*Ut,xe=(ne.start+ne.count)*Ut;bt!==null&&(Lt=Math.max(Lt,bt.start*Ut),xe=Math.min(xe,(bt.start+bt.count)*Ut)),Pt!==null?(Lt=Math.max(Lt,0),xe=Math.min(xe,Pt.count)):oe!=null&&(Lt=Math.max(Lt,0),xe=Math.min(xe,oe.count));let Be=xe-Lt;if(Be<0||Be===1/0)return;O.setup(Y,q,St,j,Pt);let Ee,be=mt;if(Pt!==null&&(Ee=ct.get(Pt),be=at,be.setIndex(Ee)),Y.isMesh)q.wireframe===!0?(_.setLineWidth(q.wireframeLinewidth*fe()),be.setMode(D.LINES)):be.setMode(D.TRIANGLES);else if(Y.isLine){let tn=q.linewidth;tn===void 0&&(tn=1),_.setLineWidth(tn*fe()),Y.isLineSegments?be.setMode(D.LINES):Y.isLineLoop?be.setMode(D.LINE_LOOP):be.setMode(D.LINE_STRIP)}else Y.isPoints?be.setMode(D.POINTS):Y.isSprite&&be.setMode(D.TRIANGLES);if(Y.isBatchedMesh)if(re.get("WEBGL_multi_draw"))be.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let tn=Y._multiDrawStarts,Et=Y._multiDrawCounts,rn=Y._multiDrawCount,pe=Pt?ct.get(Pt).bytesPerElement:1,Mn=Z.get(q).currentProgram.getUniforms();for(let Vn=0;Vn<rn;Vn++)Mn.setValue(D,"_gl_DrawID",Vn),be.render(tn[Vn]/pe,Et[Vn])}else if(Y.isInstancedMesh)be.renderInstances(Lt,Be,Y.count);else if(j.isInstancedBufferGeometry){let tn=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Et=Math.min(j.instanceCount,tn);be.renderInstances(Lt,Be,Et)}else be.render(Lt,Be)};function Gt(M,U,j,q){z!==null&&M.isNodeMaterial&&z.setObject(q,M),Kt===!0&&Dt.setState(M,j,!1),M.transparent===!0&&M.side===dn&&M.forceSinglePass===!1?(M.side=ln,M.needsUpdate=!0,Er(M,U,q),M.side=bi,M.needsUpdate=!0,Er(M,U,q),M.side=dn):Er(M,U,q)}this.compile=function(M,U,j=null){j===null&&(j=M),z!==null&&z.renderStart(M,U,j),w=ft.get(j),w.init(U),y.push(w),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),M!==j&&M.traverseVisible(function(Y){Y.isLight&&Y.layers.test(U.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),te=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,te),Kt===!0&&Dt.setGlobalState(this.clippingPlanes,U),z!==null&&Ft.render(w.state.shadowsArray,j,U);let q=new Set;return M.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let bt=Y.material;if(bt)if(Array.isArray(bt))for(let At=0;At<bt.length;At++){let St=bt[At];Gt(St,j,U,Y),q.add(St)}else Gt(bt,j,U,Y),q.add(bt)}),w=y.pop(),z!==null&&z.renderEnd(),q},this.compileAsync=function(M,U,j=null){let q=this.compile(M,U,j);return new Promise(Y=>{function bt(){if(q.forEach(function(At){let Pt=Z.get(At).currentProgram;(Pt===void 0||Pt.isReady())&&q.delete(At)}),q.size===0){Y(M);return}setTimeout(bt,10)}re.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let me=null;function se(M){me&&me(M)}function ae(){Rn.stop()}function An(){Rn.start()}let Rn=new Zh;Rn.setAnimationLoop(se),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){me=M,$.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},$.addEventListener("sessionstart",ae),$.addEventListener("sessionend",An),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;z!==null&&z.renderStart(M,U);let j=$.enabled===!0&&$.isPresenting===!0,q=T!==null&&(J===null||j)&&T.begin(P,J);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,U,J),w=ft.get(M,y.length),w.init(U),w.state.textureUnits=nt.getTextureUnits(),y.push(w),Ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Nt.setFromProjectionMatrix(Ht,Dn,U.reversedDepth),te=this.localClippingEnabled,Kt=Dt.init(this.clippingPlanes,te),b=pt.get(M,R.length),b.init(),R.push(b),$.enabled===!0&&$.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&Co(At,U,-1/0,P.sortObjects)}Co(M,U,0,P.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),P.sortObjects===!0&&b.sort(_t,Ot),ge=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ge&&Yt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Dt.beginShadows();let Y=w.state.shadowsArray;if(Ft.render(Y,M,U),Kt===!0&&Dt.endShadows(),(q&&T.hasRenderPass())===!1){let At=b.opaque,St=b.transmissive;if(w.setupLights(),U.isArrayCamera){let Pt=U.cameras;if(St.length>0)for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let oe=Pt[Ut];dc(At,St,M,oe)}ge&&Yt.render(M);for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let oe=Pt[Ut];uc(b,M,oe,oe.viewport)}}else St.length>0&&dc(At,St,M,U),ge&&Yt.render(M),uc(b,M,U)}J!==null&&H===0&&(nt.updateMultisampleRenderTarget(J),nt.updateRenderTargetMipmap(J)),q&&T.end(P),M.isScene===!0&&M.onAfterRender(P,M,U),O.resetDefaultState(),W=-1,tt=null,y.pop(),y.length>0?(w=y[y.length-1],nt.setTextureUnits(w.state.textureUnits),Kt===!0&&Dt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,z!==null&&z.renderEnd()};function Co(M,U,j,q){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Nt)){q&&de.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ht);let At=it.update(M),St=M.material;St.visible&&b.push(M,At,St,j,de.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Nt))){let At=it.update(M),St=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),de.copy(M.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),de.copy(At.boundingSphere.center)),de.applyMatrix4(M.matrixWorld).applyMatrix4(Ht)),Array.isArray(St)){let Pt=At.groups;for(let Ut=0,ne=Pt.length;Ut<ne;Ut++){let oe=Pt[Ut],Lt=St[oe.materialIndex];Lt&&Lt.visible&&b.push(M,At,Lt,j,de.z,oe,U)}}else St.visible&&b.push(M,At,St,j,de.z,null,U)}}let bt=M.children;for(let At=0,St=bt.length;At<St;At++)Co(bt[At],U,j,q)}function uc(M,U,j,q){let{opaque:Y,transmissive:bt,transparent:At}=M;w.setupLightsView(j),Kt===!0&&Dt.setGlobalState(P.clippingPlanes,j),q&&_.viewport(K.copy(q)),Y.length>0&&Tr(Y,U,j),bt.length>0&&Tr(bt,U,j),At.length>0&&Tr(At,U,j),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function dc(M,U,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){let Lt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new un(1,1,{generateMipmaps:!0,type:Lt?On:fn,minFilter:Ei,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let bt=w.state.transmissionRenderTarget[q.id],At=q.viewport||K;bt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let St=P.getRenderTarget(),Pt=P.getActiveCubeFace(),Ut=P.getActiveMipmapLevel();P.setRenderTarget(bt),P.getClearColor(zt),Jt=P.getClearAlpha(),Jt<1&&P.setClearColor(16777215,.5),P.clear(),ge&&Yt.render(j);let ne=P.toneMapping;P.toneMapping=Un;let oe=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Kt===!0&&Dt.setGlobalState(P.clippingPlanes,q),Tr(M,j,q),nt.updateMultisampleRenderTarget(bt),nt.updateRenderTargetMipmap(bt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let xe=0,Be=U.length;xe<Be;xe++){let Ee=U[xe],{object:be,geometry:tn,material:Et,group:rn}=Ee;if(Et.side===dn&&be.layers.test(q.layers)){let pe=Et.side;Et.side=ln,Et.needsUpdate=!0,fc(be,j,q,tn,Et,rn),Et.side=pe,Et.needsUpdate=!0,Lt=!0}}Lt===!0&&(nt.updateMultisampleRenderTarget(bt),nt.updateRenderTargetMipmap(bt))}P.setRenderTarget(St,Pt,Ut),P.setClearColor(zt,Jt),oe!==void 0&&(q.viewport=oe),P.toneMapping=ne}function Tr(M,U,j){let q=U.isScene===!0?U.overrideMaterial:null;for(let Y=0,bt=M.length;Y<bt;Y++){let At=M[Y],{object:St,geometry:Pt,group:Ut}=At,ne=At.material;ne.allowOverride===!0&&q!==null&&(ne=q),St.layers.test(j.layers)&&fc(St,U,j,Pt,ne,Ut)}}function fc(M,U,j,q,Y,bt){z!==null&&Y.isNodeMaterial&&z.setObject(M,Y),M.onBeforeRender(P,U,j,q,Y,bt),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Y.onBeforeRender(P,U,j,q,M,bt),Y.transparent===!0&&Y.side===dn&&Y.forceSinglePass===!1?(Y.side=ln,Y.needsUpdate=!0,P.renderBufferDirect(j,U,q,Y,M,bt),Y.side=bi,Y.needsUpdate=!0,P.renderBufferDirect(j,U,q,Y,M,bt),Y.side=dn):P.renderBufferDirect(j,U,q,Y,M,bt),M.onAfterRender(P,U,j,q,Y,bt)}function Er(M,U,j){U.isScene!==!0&&(U=ue);let q=Z.get(M),Y=w.state.lights,bt=w.state.shadowsArray,At=Y.state.version,St=dt.getParameters(M,Y.state,bt,U,j,w.state.lightProbeGridArray),Pt=dt.getProgramCacheKey(St),Ut=q.programs;q.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,q.fog=U.fog;let ne=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;q.envMap=ht.get(M.envMap||q.environment,ne),q.envMapRotation=q.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",vt),Ut=new Map,q.programs=Ut);let oe=Ut.get(Pt);if(oe!==void 0){if(q.currentProgram===oe&&q.lightsStateVersion===At)return mc(M,St),oe}else St.uniforms=dt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,j,St),M.onBeforeCompile(St,P),oe=dt.acquireProgram(St,Pt),Ut.set(Pt,oe),q.uniforms=St.uniforms;let Lt=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Lt.clippingPlanes=Dt.uniform),mc(M,St),q.needsLights=Eu(M),q.lightsStateVersion=At,q.needsLights&&(Lt.ambientLightColor.value=Y.state.ambient,Lt.lightProbe.value=Y.state.probe,Lt.sunLights.value=Y.state.sun,Lt.sunLightShadows.value=Y.state.sunShadow,Lt.directionalLights.value=Y.state.directional,Lt.directionalLightShadows.value=Y.state.directionalShadow,Lt.spotLights.value=Y.state.spot,Lt.spotLightShadows.value=Y.state.spotShadow,Lt.rectAreaLights.value=Y.state.rectArea,Lt.ltc_1.value=Y.state.rectAreaLTC1,Lt.ltc_2.value=Y.state.rectAreaLTC2,Lt.pointLights.value=Y.state.point,Lt.pointLightShadows.value=Y.state.pointShadow,Lt.hemisphereLights.value=Y.state.hemi,Lt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Lt.sunShadowCascade.value=Y.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Y.state.spotLightMatrix,Lt.spotLightMap.value=Y.state.spotLightMap,Lt.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=w.state.lightProbeGridArray.length>0,q.currentProgram=oe,q.uniformsList=null,oe}function pc(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Rs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function mc(M,U){let j=Z.get(M);j.outputColorSpace=U.outputColorSpace,j.batching=U.batching,j.batchingColor=U.batchingColor,j.instancing=U.instancing,j.instancingColor=U.instancingColor,j.instancingMorph=U.instancingMorph,j.skinning=U.skinning,j.morphTargets=U.morphTargets,j.morphNormals=U.morphNormals,j.morphColors=U.morphColors,j.morphTargetsCount=U.morphTargetsCount,j.numClippingPlanes=U.numClippingPlanes,j.numIntersection=U.numClipIntersection,j.vertexAlphas=U.vertexAlphas,j.vertexTangents=U.vertexTangents,j.toneMapping=U.toneMapping}function bu(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let j=0,q=M.length;j<q;j++){let Y=M[j];if(Y.texture!==null&&Y.boundingBox.containsPoint(x))return Y}return null}function wu(M,U,j,q,Y){U.isScene!==!0&&(U=ue),nt.resetTextureUnits();let bt=U.fog,At=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?U.environment:null,St=J===null?P.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:he.workingColorSpace,Pt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ut=ht.get(q.envMap||At,Pt),ne=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,oe=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!j.morphAttributes.position,xe=!!j.morphAttributes.normal,Be=!!j.morphAttributes.color,Ee=Un;q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ee=P.toneMapping);let be=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,tn=be!==void 0?be.length:0,Et=Z.get(q),rn=w.state.lights;if(Kt===!0&&(te===!0||M!==tt)){let we=M===tt&&q.id===W;Dt.setState(q,M,we)}let pe=!1;q.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==rn.state.version||Et.outputColorSpace!==St||Y.isBatchedMesh&&Et.batching===!1||!Y.isBatchedMesh&&Et.batching===!0||Y.isBatchedMesh&&Et.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Et.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Et.instancing===!1||!Y.isInstancedMesh&&Et.instancing===!0||Y.isSkinnedMesh&&Et.skinning===!1||!Y.isSkinnedMesh&&Et.skinning===!0||Y.isInstancedMesh&&Et.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Et.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Et.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Et.instancingMorph===!1&&Y.morphTexture!==null||Et.envMap!==Ut||q.fog===!0&&Et.fog!==bt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Dt.numPlanes||Et.numIntersection!==Dt.numIntersection)||Et.vertexAlphas!==ne||Et.vertexTangents!==oe||Et.morphTargets!==Lt||Et.morphNormals!==xe||Et.morphColors!==Be||Et.toneMapping!==Ee||Et.morphTargetsCount!==tn||!!Et.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Et.__version=q.version);let Mn=Et.currentProgram;pe===!0&&(Mn=Er(q,U,Y),z&&q.isNodeMaterial&&z.onUpdateProgram(q,Mn,Et));let Vn=!1,oi=!1,Yi=!1,Se=Mn.getUniforms(),Fe=Et.uniforms;if(_.useProgram(Mn.program)&&(Vn=!0,oi=!0,Yi=!0),q.id!==W&&(W=q.id,oi=!0),Et.needsLights){let we=bu(w.state.lightProbeGridArray,Y);Et.lightProbeGrid!==we&&(Et.lightProbeGrid=we,oi=!0)}if(Vn||tt!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Se.setValue(D,"projectionMatrix",M.projectionMatrix),Se.setValue(D,"viewMatrix",M.matrixWorldInverse);let ci=Se.map.cameraPosition;ci!==void 0&&ci.setValue(D,Vt.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&Se.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Se.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),tt!==M&&(tt=M,oi=!0,Yi=!0)}if(Et.needsLights&&(rn.state.sunShadowMap.length>0&&Se.setValue(D,"sunShadowMap",rn.state.sunShadowMap,nt),rn.state.directionalShadowMap.length>0&&Se.setValue(D,"directionalShadowMap",rn.state.directionalShadowMap,nt),rn.state.spotShadowMap.length>0&&Se.setValue(D,"spotShadowMap",rn.state.spotShadowMap,nt),rn.state.pointShadowMap.length>0&&Se.setValue(D,"pointShadowMap",rn.state.pointShadowMap,nt)),Y.isSkinnedMesh){Se.setOptional(D,Y,"bindMatrix"),Se.setOptional(D,Y,"bindMatrixInverse");let we=Y.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),Se.setValue(D,"boneTexture",we.boneTexture,nt))}Y.isBatchedMesh&&(Se.setOptional(D,Y,"batchingTexture"),Se.setValue(D,"batchingTexture",Y._matricesTexture,nt),Se.setOptional(D,Y,"batchingIdTexture"),Se.setValue(D,"batchingIdTexture",Y._indirectTexture,nt),Se.setOptional(D,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Se.setValue(D,"batchingColorTexture",Y._colorsTexture,nt));let li=j.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&N.update(Y,j,Mn),(oi||Et.receiveShadow!==Y.receiveShadow)&&(Et.receiveShadow=Y.receiveShadow,Se.setValue(D,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&U.environment!==null&&(Fe.envMapIntensity.value=U.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=sg()),oi){if(Se.setValue(D,"toneMappingExposure",P.toneMappingExposure),Et.needsLights&&Tu(Fe,Yi),bt&&q.fog===!0&&Rt.refreshFogUniforms(Fe,bt),Rt.refreshMaterialUniforms(Fe,q,st,et,w.state.transmissionRenderTarget[M.id]),Et.needsLights&&Et.lightProbeGrid){let we=Et.lightProbeGrid;Fe.probesSH.value=we.texture,Fe.probesMin.value.copy(we.boundingBox.min),Fe.probesMax.value.copy(we.boundingBox.max),Fe.probesResolution.value.copy(we.resolution)}Rs.upload(D,pc(Et),Fe,nt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Rs.upload(D,pc(Et),Fe,nt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Se.setValue(D,"center",Y.center),Se.setValue(D,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(D,"normalMatrix",Y.normalMatrix),Se.setValue(D,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let we=q.uniformsGroups;for(let ci=0,Zi=we.length;ci<Zi;ci++){let _c=we[ci];C.update(_c,Mn),C.bind(_c,Mn)}}return Mn}function Tu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Eu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(M,U,j){let q=Z.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=U,Z.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let j=Z.get(M);j.__webglFramebuffer=U,j.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,j=0){J=M,I=U,H=j;let q=null,Y=!1,bt=!1;if(M){let St=Z.get(M);if(St.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,St.__webglFramebuffer),K.copy(M.viewport),wt.copy(M.scissor),yt=M.scissorTest,_.viewport(K),_.scissor(wt),_.setScissorTest(yt),W=-1;return}else if(St.__webglFramebuffer===void 0)nt.setupRenderTarget(M);else if(St.__hasExternalTextures)nt.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ne=M.depthTexture;if(St.__boundDepthTexture!==ne){if(ne!==null&&Z.has(ne)&&(M.width!==ne.image.width||M.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(M)}}let Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(bt=!0);let Ut=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[U])?q=Ut[U][j]:q=Ut[U],Y=!0):M.samples>0&&nt.useMultisampledRTT(M)===!1?q=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?q=Ut[j]:q=Ut,K.copy(M.viewport),wt.copy(M.scissor),yt=M.scissorTest}else K.copy(lt).multiplyScalar(st).floor(),wt.copy(It).multiplyScalar(st).floor(),yt=Bt;if(j!==0&&(q=X),_.bindFramebuffer(D.FRAMEBUFFER,q)&&_.drawBuffers(M,q),_.viewport(K),_.scissor(wt),_.setScissorTest(yt),Y){let St=Z.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,j)}else if(bt){let St=U;for(let Pt=0;Pt<M.textures.length;Pt++){let Ut=Z.get(M.textures[Pt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,j,St)}}else if(M!==null&&j!==0){let St=Z.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,St.__webglTexture,j)}W=-1};function gc(M){let U=Z.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=A.textureFormatReadable(M.format),U.__typeReadable=A.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,j,q,Y,bt,At,St=0){if(!(M&&M.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt){_.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let Ut=M.textures[St],ne=Ut.format,oe=Ut.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let Lt=gc(Ut);if(Lt.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-q&&j>=0&&j<=M.height-Y&&D.readPixels(U,j,q,Y,gt.convert(ne),gt.convert(oe),bt)}finally{let Ut=J!==null?Z.get(J).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,U,j,q,Y,bt,At,St=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(Pt=Pt[At]),Pt)if(U>=0&&U<=M.width-q&&j>=0&&j<=M.height-Y){_.bindFramebuffer(D.FRAMEBUFFER,Pt);let Ut=M.textures[St],ne=Ut.format,oe=Ut.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+St);let Lt=gc(Ut);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.bufferData(D.PIXEL_PACK_BUFFER,bt.byteLength,D.STREAM_READ),D.readPixels(U,j,q,Y,gt.convert(ne),gt.convert(oe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Be=J!==null?Z.get(J).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Be);let Ee=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Mh(D,Ee,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,bt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(xe),D.deleteSync(Ee),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,j=0){let q=Math.pow(2,-j),Y=Math.floor(M.image.width*q),bt=Math.floor(M.image.height*q),At=U!==null?U.x:0,St=U!==null?U.y:0;nt.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,At,St,Y,bt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,j=null,q=null,Y=0,bt=0){let At,St,Pt,Ut,ne,oe,Lt,xe,Be,Ee=M.isCompressedTexture?M.mipmaps[bt]:M.image;if(j!==null)At=j.max.x-j.min.x,St=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,Ut=j.min.x,ne=j.min.y,oe=j.isBox3?j.min.z:0;else{let Fe=Math.pow(2,-Y);At=Math.floor(Ee.width*Fe),St=Math.floor(Ee.height*Fe),M.isDataArrayTexture?Pt=Ee.depth:M.isData3DTexture?Pt=Math.floor(Ee.depth*Fe):Pt=1,Ut=0,ne=0,oe=0}q!==null?(Lt=q.x,xe=q.y,Be=q.z):(Lt=0,xe=0,Be=0);let be=gt.convert(U.format),tn=gt.convert(U.type),Et;U.isData3DTexture?(nt.setTexture3D(U,0),Et=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(nt.setTexture2DArray(U,0),Et=D.TEXTURE_2D_ARRAY):(nt.setTexture2D(U,0),Et=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let rn=_.getParameter(D.UNPACK_ROW_LENGTH),pe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=_.getParameter(D.UNPACK_SKIP_PIXELS),Vn=_.getParameter(D.UNPACK_SKIP_ROWS),oi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(D.UNPACK_SKIP_ROWS,ne),_.pixelStorei(D.UNPACK_SKIP_IMAGES,oe);let Yi=M.isDataArrayTexture||M.isData3DTexture,Se=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Fe=Z.get(M),li=Z.get(U),we=Z.get(Fe.__renderTarget),ci=Z.get(li.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,we.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Zi=0;Zi<Pt;Zi++)Yi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,Y,oe+Zi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Z.get(U).__webglTexture,bt,Be+Zi)),D.blitFramebuffer(Ut,ne,At,St,Lt,xe,At,St,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(Y!==0||M.isRenderTargetTexture||Z.has(M)){let Fe=Z.get(M),li=Z.get(U);_.bindFramebuffer(D.READ_FRAMEBUFFER,L),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let we=0;we<Pt;we++)Yi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,Y,oe+we):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,Y),Se?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,li.__webglTexture,bt,Be+we):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,li.__webglTexture,bt),Y!==0?D.blitFramebuffer(Ut,ne,At,St,Lt,xe,At,St,D.COLOR_BUFFER_BIT,D.NEAREST):Se?D.copyTexSubImage3D(Et,bt,Lt,xe,Be+we,Ut,ne,At,St):D.copyTexSubImage2D(Et,bt,Lt,xe,Ut,ne,At,St);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Se?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Et,bt,Lt,xe,Be,At,St,Pt,be,tn,Ee.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,bt,Lt,xe,Be,At,St,Pt,be,Ee.data):D.texSubImage3D(Et,bt,Lt,xe,Be,At,St,Pt,be,tn,Ee):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,bt,Lt,xe,At,St,be,tn,Ee.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,bt,Lt,xe,Ee.width,Ee.height,be,Ee.data):D.texSubImage2D(D.TEXTURE_2D,bt,Lt,xe,At,St,be,tn,Ee);_.pixelStorei(D.UNPACK_ROW_LENGTH,rn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),_.pixelStorei(D.UNPACK_SKIP_ROWS,Vn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),bt===0&&U.generateMipmaps&&D.generateMipmap(Et),_.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?nt.setTextureCube(M,0):M.isData3DTexture?nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?nt.setTexture2DArray(M,0):nt.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){I=0,H=0,J=null,_.reset(),O.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};function Ci(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,h=new je,l=0;for(let u=0;u<i.length;++u){let p=i[u],f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in p.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(p.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in p.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(p.morphAttributes[d])}if(t){let d;if(e)d=p.index.count;else if(p.attributes.position!==void 0)d=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,d,u),l+=d}}if(e){let u=0,p=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)p.push(d.getX(g)+u);u+=i[f].attributes.position.count}h.setIndex(p)}for(let u in r){let p=eu(r[u]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;h.setAttribute(u,p)}for(let u in a){let p=a[u][0].length;if(p!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[u]=[];for(let f=0;f<p;++f){let d=[];for(let S=0;S<a[u].length;++S)d.push(a[u][S][f]);let g=eu(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;h.morphAttributes[u].push(g)}}}return h}function eu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new hn(a,e,n),h=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let p=h/e;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<e;g++){let S=u.getComponent(f,g);o.setComponent(f+p,g,S)}}else a.set(u.array,h);h+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var yr=new G;function wn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),h=Math.PI/4;yr.copy(t),yr[n]=0,yr.normalize();let l=.5*a/(a+o),u=1-yr.angleTo(i)/h;return Math.sign(yr[e])===1?u*l:o/(a+o)+l+l*(1-u)}var Mo=class i extends $e{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let h=new G,l=new G,u=new G(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=p.length/6,S=new G,m=.5/a;for(let c=0,v=0;c<p.length;c+=3,v+=2)switch(h.fromArray(p,c),l.copy(h),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[c+0]=u.x*Math.sign(h.x)+l.x*r,p[c+1]=u.y*Math.sign(h.y)+l.y*r,p[c+2]=u.z*Math.sign(h.z)+l.z*r,f[c+0]=l.x,f[c+1]=l.y,f[c+2]=l.z,Math.floor(c/g)){case 0:S.set(1,0,0),d[v+0]=wn(S,l,"z","y",r,n),d[v+1]=1-wn(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),d[v+0]=1-wn(S,l,"z","y",r,n),d[v+1]=1-wn(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),d[v+0]=1-wn(S,l,"x","z",r,t),d[v+1]=wn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),d[v+0]=1-wn(S,l,"x","z",r,t),d[v+1]=1-wn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),d[v+0]=1-wn(S,l,"x","y",r,t),d[v+1]=1-wn(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),d[v+0]=wn(S,l,"x","y",r,t),d[v+1]=1-wn(S,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ql={x0:-5,x1:5,z0:-7,z1:6,H:3},nu={A:3.4,B:0,C:-3.4},iu=[-4.5,-1.5,1.5,4.5],yn={x0:-3.2,x1:-2.2,h:2.3},vn=[.9,Ql.H-.01,-1.5],ve={x:0,z:0,yaw:0,w:1.4,d:.72,top:.74},ri={x:-.06,z:-.19,ax:-.43,az:.07,ayaw:.45},Is={x:0,z:-1.1,yaw:0},su=[{x:0,z:0,yaw:0,monitor:!1,chair:!1,mug:!0,paper:!0},{x:-1.7,z:0,yaw:0,monitor:!1,chair:!0,chairBack:.75,paper:!0,mug:!0},{x:-3.6,z:-2.6,yaw:Math.PI/2,monitor:!1,chair:!0,chairBack:.7,paper:!0},{x:-3.6,z:-1.1,yaw:Math.PI/2,monitor:!0,chair:!0,chairBack:.7},{x:3.3,z:2.2,yaw:-Math.PI/2,monitor:!0,chair:!0,chairBack:.7},{x:3.3,z:3.7,yaw:-Math.PI/2,monitor:!1,chair:!0,chairBack:.7,mug:!0,paper:!0}],pn={x:2.5,z:-4.8,w:2.4,d:1,stools:[[-.7,-.85],[0,-.85],[.7,-.85],[-.66,.85],[.04,.85],[.74,.85]]},ru=[[4.3,-6.2,1.9,3,.7,26,.28],[-4.3,-6.2,1.6,11,.5,20,.24],[4.3,5.3,1.7,7,.6,22,.26]],ai={x:-4.67,z:2.4,w:.45,d:1.6},Le={x:-.6,z:-6.74,w:1.9,d:.42,h:.74};var Ii=new Ct("#fff0de"),So=new Ct("#3d4148"),au=new Ct("#c9ccd1"),rg=new Ct("#58ccff"),ee=(i,t=.9,e={})=>new on({color:i,roughness:t,metalness:0,...e}),De=(i,t,e,n=.012,s=1)=>new Mo(i,t,e,s,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4));function Ps(i,t,{repeat:e=null,srgb:n=!0}={}){let s=document.createElement("canvas");s.width=s.height=i,t(s.getContext("2d"),i);let r=new gs(s);return n&&(r.colorSpace=Ye),e&&(r.wrapS=r.wrapT=Bi,r.repeat.set(e[0],e[1]),r.anisotropy=4),r}function jl(i=128,t=1.6){return Ps(i,(e,n)=>{let s=e.createImageData(n,n);for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.min(1,Math.hypot((a+.5)/n-.5,(r+.5)/n-.5)*2),h=(1-o)**t,l=(r*n+a)*4;s.data[l]=s.data[l+1]=s.data[l+2]=255,s.data[l+3]=Math.round(255*h)}e.putImageData(s,0,0)})}function ag(i=128,t=.22,e=1.4){return Ps(i,(n,s)=>{let r=n.createImageData(s,s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let h=Math.abs((o+.5)/s-.5)*2,l=Math.abs((a+.5)/s-.5)*2,u=Math.hypot(Math.max(0,h-(1-t)),Math.max(0,l-(1-t)))/t,p=Math.max(0,1-u)**e,f=(a*s+o)*4;r.data[f]=r.data[f+1]=r.data[f+2]=0,r.data[f+3]=Math.round(255*p)}n.putImageData(r,0,0)})}function og(i=32,t=128){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d"),s=n.createImageData(i,t);for(let a=0;a<t;a++)for(let o=0;o<i;o++){let h=Math.abs((o+.5)/i-.5)*2,l=Math.abs((a+.5)/t-.5)*2,u=Math.exp(-((h*2.4)**2))*(1-Math.max(0,(l-.72)/.28))**2,p=(a*i+o)*4;s.data[p]=s.data[p+1]=s.data[p+2]=255,s.data[p+3]=Math.round(255*u)}n.putImageData(s,0,0);let r=new gs(e);return r.colorSpace=Ye,r}function ou(i,t,e,n,s=0){return(r,a)=>{r.fillStyle=t,r.fillRect(0,0,a,a);let o=n,h=()=>(o=o*16807%2147483647)/2147483647;for(let[l,u,p]of[[90,a*.18,e],[260,a*.06,e*.8],[900,a*.015,e*.6]])for(let f=0;f<l;f++){let d=h()*a,g=h()*a,S=u*(.5+h()),m=h()>.5,c=r.createRadialGradient(d,g,0,d,g,S),v=m?"255,255,255":"0,0,0";c.addColorStop(0,`rgba(${v},${p*(.4+h()*.6)})`),c.addColorStop(1,`rgba(${v},0)`),r.fillStyle=c;for(let E of[-a,0,a])for(let x of[-a,0,a])r.save(),r.translate(E,x),r.beginPath(),r.arc(d,g,S,0,Math.PI*2),r.fill(),r.restore()}if(s){let l=r.getImageData(0,0,a,a);for(let u=0;u<l.data.length;u+=4){let p=(h()-.5)*s;l.data[u]+=p,l.data[u+1]+=p,l.data[u+2]+=p}r.putImageData(l,0,0)}}}function lu(i,t={}){let e=new Re;i.add(e);let n=(O,C,B=e,$=!0,ut=!0)=>{let rt=new Pe(O,C);return rt.castShadow=$,rt.receiveShadow=ut,B.add(rt),rt},s=(O,C,B)=>new $e(O,C,B),{x0:r,x1:a,z0:o,z1:h,H:l}=Ql,u=a-r,p=h-o,f={floor:Ps(256,ou(256,"#d6d1c8",.035,7,6),{repeat:[u/2.2,p/2.2]}),carpet:Ps(128,ou(128,"#a29c93",.05,19,22),{repeat:[4.6/.9,3.6/.9]}),ceiling:Ps(256,(O,C)=>{O.fillStyle="#f4f3f0",O.fillRect(0,0,C,C),O.fillStyle="rgba(120,118,112,0.16)",O.fillRect(0,0,C,1.5),O.fillRect(0,C/2,C,1.5),O.fillRect(0,0,1.5,C)},{repeat:[u/1.2,p/1.2]}),pool:jl(128,2.4),halo:jl(96,1.6),blob:jl(64,1.5),rect:ag(128,.3,1.3),glow:og(),windows:Ps(128,(O,C)=>{O.fillStyle="#d3d6db",O.fillRect(0,0,C,C);let B=3,$=()=>(B=B*16807%2147483647)/2147483647;for(let ut=0;ut<4;ut++)for(let rt=0;rt<4;rt++){let ot=$()>.86;O.fillStyle=ot?"#e2d8c6":"#b8bfca",O.fillRect(rt*(C/4)+5,ut*(C/4)+8,C/4-10,C/4-18)}},{repeat:[1,1]})},d={floor:ee("#ffffff",.82,{map:f.floor}),carpet:ee("#ffffff",1,{map:f.carpet}),floorCorr:ee("#c9c9c6",.9),ceiling:ee("#ffffff",1,{map:f.ceiling}),ceilPlain:ee("#f1f0ed",1),wall:ee("#ece9e3",1),wallDark:ee("#dedbd4",1),plinth:ee("#5a5e64",.7),oak:ee("#c49a6c",.72),oakLight:ee("#d6b58c",.7),frame:ee("#3a3e45",.45,{metalness:.25}),alu:ee("#a3a8ae",.38,{metalness:.55}),desk:ee("#ebe8e2",.6),deskEdge:ee("#d9d4cb",.6),felt:ee("#5d636b",1),feltSage:ee("#a3afa8",1),feltSand:ee("#cdc1ad",1),chair:ee("#4c5868",.95),chairShell:ee("#2c3036",.6),meetChair:ee("#a99c88",.95),monitor:ee("#c3c6ca",.45),screenOff:ee("#1d222a",.22),keyboard:ee("#d4d6d9",.7),mug:ee("#f2f1ee",.45),paper:ee("#fbfaf7",.9),book1:ee("#6f7f8f",.9),book2:ee("#b78b5c",.9),book3:ee("#e3ded5",.9),pot:ee("#d9d4cc",.85),potDark:ee("#4a4d52",.8),stem:ee("#4a3a2c",.9),leaf:ee("#2f6648",.8),leaf2:ee("#4a8458",.8),housing:ee("#2c3036",.4,{metalness:.3}),wire:ee("#4a4f57",.6),sensor:ee("#f2f3f5",.55),sideboard:ee("#e2ddd4",.65),convector:ee("#d9dadb",.55),glass:new tr({color:"#d6e4f2",roughness:.05,metalness:0,transparent:!0,opacity:.12,depthWrite:!1}),laptop:ee("#b3b8bf",.35,{metalness:.35}),building:new ke({color:"#1a2448",map:f.windows}),buildingFar:new ke({color:"#1a2448"}),ground:new ke({color:"#6d7a8c"})},g=n(new Ge(u,p),d.floor,e,!1,!0);g.rotation.x=-Math.PI/2,g.position.set(0,0,(o+h)/2);let S=n(new Ge(4.6,3.6),d.carpet,e,!1,!0);S.rotation.x=-Math.PI/2,S.position.set(-.4,.003,-.2);let m=n(new Ge(u,p),d.ceiling,e,!1,!0);m.rotation.x=Math.PI/2,m.position.set(0,l,(o+h)/2),n(s(.7,.28,p),d.ceilPlain,e,!1,!0).position.set(a-.35,l-.14,(o+h)/2);let c=.07,v=.24,E=yn.x0-c,x=yn.x1+c;n(s(E-r,l,.2),d.wall,e).position.set((r+E)/2,l/2,o-.1),n(s(a-x,l,.2),d.wall,e).position.set((x+a)/2,l/2,o-.1),n(s(x-E,l-yn.h-c,.2),d.wall,e).position.set((E+x)/2,(yn.h+c+l)/2,o-.1);for(let O of[yn.x0-c/2,yn.x1+c/2])n(s(c,yn.h,v),d.frame,e).position.set(O,yn.h/2,o-.1);n(s(x-E,c,v),d.frame,e).position.set((E+x)/2,yn.h+c/2,o-.1);for(let O=r+.08;O<yn.x0-.3;O+=.13)n(s(.06,l-.02,.05),d.oak,e,!1).position.set(O,l/2,o+.035);n(s(yn.x0-r-.2,.06,.012),d.plinth,e,!1).position.set((r+yn.x0-.2)/2,.03,o+.006),n(s(a-x,.06,.012),d.plinth,e,!1).position.set((x+a)/2,.03,o+.006),n(s(.012,.06,p),d.plinth,e,!1).position.set(r+.006,.03,(o+h)/2),n(s(.2,l,p),d.wall,e).position.set(r-.1,l/2,(o+h)/2),n(s(u+.4,l,.2),d.wallDark,e,!1).position.set(0,l/2,h+.1);for(let[O,C]of[[0,d.feltSage],[1,d.feltSand],[2,d.feltSage]])n(De(.56,1.05,.04,.01),C,e,!1).position.set(Le.x-.64+O*.64,1.62,o+.025);for(let[O,C]of[[0,d.feltSand],[1,d.feltSage]])n(De(.04,.9,.7,.01),C,e,!1).position.set(r+.025,1.6,-3.1+O*.8);for(let O=o;O<h-.01;O+=1.5){let C=Math.min(1.5,h-O),B=n(new Ge(C,l-.25),d.glass,e,!1,!1);B.rotation.y=-Math.PI/2,B.position.set(a,(l-.25)/2+.08,O+C/2),n(s(.14,l,.055),d.frame,e).position.set(a+.01,l/2,O)}n(s(.14,l,.055),d.frame,e).position.set(a+.01,l/2,h),n(s(.16,.09,p),d.frame,e).position.set(a+.01,.045,(o+h)/2),n(s(.16,.06,p),d.frame,e).position.set(a+.01,2.25,(o+h)/2),n(s(.24,.12,p-.4),d.convector,e,!1,!0).position.set(a-.14,.06,(o+h)/2),n(s(.2,.004,p-.45),d.frame,e,!1,!1).position.set(a-.14,.122,(o+h)/2);let b=n(new Ge(u,2.6),d.floorCorr,e,!1,!0);b.rotation.x=-Math.PI/2,b.position.set(0,0,o-1.3),n(s(u,l,.2),d.wallDark,e,!1).position.set(0,l/2,o-2.7);let w=n(new Ge(u,2.6),d.ceilPlain,e,!1,!0);w.rotation.x=Math.PI/2,w.position.set(0,l,o-1.3),n(s(.2,l,2.7),d.wall,e,!1).position.set(r-.1,l/2,o-1.35),n(De(1.2,.85,.035,.008),ee("#3f5b7d",.85),e,!1).position.set(-2.7,1.5,o-2.58);let R=6,y=new Ge(90,30,1,R);y.setAttribute("color",new _e(new Array((R+1)*2*3).fill(0),3));let T=new Pe(y,new ke({vertexColors:!0,fog:!1}));T.rotation.y=-Math.PI/2,T.position.set(a+36,11,0),e.add(T);let P=n(new Ge(70,90),d.ground,e,!1,!1);P.rotation.x=-Math.PI/2,P.position.set(a+35,-.02,0);{let O=5,C=()=>(O=O*16807%2147483647)/2147483647,B=[],$=[];for(let ut=-24;ut<26;ut+=2.6+C()*2.6){let rt=5+C()*8,ot=3+C()*4,vt=15+C()*5,Wt=s(ot,rt,ot);Wt.translate(a+vt+ot/2,rt/2-.5,ut);let Tt=Wt.getAttribute("uv");for(let Gt=0;Gt<Tt.count;Gt++)Tt.setXY(Gt,Tt.getX(Gt)*ot/6,Tt.getY(Gt)*rt/13);B.push(Wt)}for(let ut=-26;ut<28;ut+=3+C()*3){let rt=10+C()*14,ot=3+C()*4,vt=s(ot,rt,ot);vt.translate(a+26+C()*6,rt/2-.5,ut),$.push(vt)}d.building.map.wrapS=d.building.map.wrapT=Bi,n(Ci(B),d.building,e,!1,!1),n(Ci($),d.buildingFar,e,!1,!1)}let F=[];function z(O,C,B,$,{arms:ut=!0}={}){let rt=new Re;rt.position.set(C,0,B),rt.rotation.y=$,O.add(rt);let ot=new Re;rt.add(ot),n(De(.49,.075,.47,.03,2),d.chair,ot).position.set(0,.47,.01),n(De(.42,.03,.4,.01),d.chairShell,ot).position.set(0,.42,0);let vt=new Re;if(vt.position.set(0,.47,-.2),ot.add(vt),n(De(.45,.5,.065,.03,2),d.chair,vt).position.set(0,.34,-.055),n(De(.06,.26,.03,.01),d.chairShell,vt).position.set(0,.08,-.06),ut)for(let Wt of[-1,1])n(s(.028,.2,.035),d.chairShell,ot).position.set(Wt*.255,.56,-.02),n(De(.06,.028,.24,.012),d.chairShell,ot).position.set(Wt*.255,.672,0);n(new Ve(.024,.024,.3,12),d.alu,rt).position.set(0,.27,0),n(new Ve(.038,.032,.14,14),d.chairShell,rt).position.set(0,.16,0);for(let Wt=0;Wt<5;Wt++){let Tt=Wt/5*Math.PI*2+.3,Gt=n(s(.3,.03,.045),d.alu,rt);Gt.position.set(Math.cos(Tt)*.15,.085,Math.sin(Tt)*.15),Gt.rotation.y=-Tt,n(new He(.026,6,4),d.chairShell,rt).position.set(Math.cos(Tt)*.29,.03,Math.sin(Tt)*.29)}return{group:rt,seat:ot,back:vt}}function X(O,C,B,{monitor:$=!0,chair:ut=!0,chairBack:rt=1.1,mug:ot=!1,paper:vt=!1,books:Wt=!1}={}){let Tt=new Re;Tt.position.set(O,0,C),Tt.rotation.y=B,e.add(Tt),n(De(ve.w,.025,ve.d,.006),d.desk,Tt).position.set(0,ve.top-.0125,0);for(let se of[-1,1]){let ae=se*(ve.w/2-.09);n(s(.06,ve.top-.075,.05),d.frame,Tt).position.set(ae,(ve.top-.075)/2+.02,0),n(De(.065,.03,ve.d-.06,.008),d.frame,Tt).position.set(ae,.015,0),n(s(.05,.05,ve.d-.12),d.frame,Tt).position.set(ae,ve.top-.05,0)}n(s(ve.w-.2,.035,.04),d.frame,Tt).position.set(0,ve.top-.045,.2),n(De(ve.w-.24,.3,.018,.006),d.felt,Tt).position.set(0,ve.top-.21,ve.d/2-.05),$&&(n(De(.54,.32,.03,.008),d.monitor,Tt).position.set(.05,ve.top+.4,.2),n(s(.51,.29,.004),d.screenOff,Tt,!1).position.set(.05,ve.top+.4,.184),n(s(.035,.24,.03),d.alu,Tt).position.set(.05,ve.top+.12,.24),n(De(.2,.012,.15,.005),d.alu,Tt).position.set(.05,ve.top+.006,.23),n(De(.42,.016,.13,.005),d.keyboard,Tt).position.set(.05,ve.top+.008,-.1)),ot&&n(new Ve(.04,.036,.095,18),d.mug,Tt).position.set(.5,ve.top+.0475,-.02),vt&&n(s(.21,.004,.29),d.paper,Tt).position.set(-.42,ve.top+.002,-.08),Wt&&(n(s(.16,.022,.23),d.book1,Tt).position.set(.42,ve.top+.011,.18),n(s(.15,.018,.22),d.book3,Tt).position.set(.43,ve.top+.031,.17)),ut&&z(Tt,0,-rt,0);let Gt=Math.cos(B),me=Math.sin(B);return F.push([O,C,ve.w+.25,ve.d+.22,B,"rect",.34]),ut&&F.push([O-me*rt,C-Gt*rt,.78,.78,0,"blob",.42]),Tt}for(let O of su)X(O.x,O.z,O.yaw,{...O,books:O.x===0});{let O=new Re;O.position.set(pn.x,0,pn.z),e.add(O),n(De(pn.w,.032,pn.d,.008),d.oak,O).position.set(0,.744,0);for(let C of[-.85,.85])n(s(.07,.66,.07),d.frame,O).position.set(C,.36,0),n(De(.07,.03,pn.d-.12,.008),d.frame,O).position.set(C,.015,0),n(s(.06,.05,pn.d-.2),d.frame,O).position.set(C,.7,0);for(let[C,B]of pn.stools){let $=new Re;$.position.set(C,0,B),$.rotation.y=B<0?0:Math.PI,O.add($),n(De(.46,.06,.44,.025),d.meetChair,$).position.set(0,.46,0),n(De(.44,.34,.045,.02),d.meetChair,$).position.set(0,.74,-.21),$.children.at(-1).rotation.x=-.1;for(let ut of[-.19,.19])for(let rt of[-.18,.18])n(new Ve(.012,.011,.44,6),d.frame,$).position.set(ut,.22,rt);F.push([pn.x+C,pn.z+B,.62,.6,0,"blob",.32])}n(s(.3,.004,.42),d.paper,O).position.set(-.3,.762,.05),n(new Ve(.04,.036,.095,18),d.mug,O).position.set(.55,.808,-.1),F.push([pn.x,pn.z,pn.w+.3,pn.d+.3,0,"rect",.3])}{let O=new Re;O.position.set(Le.x,0,Le.z),e.add(O),n(De(Le.w,Le.h-.06,Le.d,.01),d.sideboard,O).position.set(0,.06+(Le.h-.06)/2,0),n(s(Le.w-.06,.06,Le.d-.06),d.plinth,O).position.set(0,.03,0);for(let C of[-1,0,1])n(s(.004,Le.h-.12,.004),d.deskEdge,O,!1).position.set(C*Le.w/6*2+0,.06+(Le.h-.06)/2,Le.d/2+.001);n(s(.07,.22,.17),d.book1,O).position.set(-.6,Le.h+.11,0),n(s(.05,.2,.16),d.book2,O).position.set(-.53,Le.h+.1,0),n(s(.06,.24,.17),d.book3,O).position.set(-.465,Le.h+.12,0),n(new Ve(.1,.085,.2,16),d.potDark,O).position.set(.62,Le.h+.1,0);for(let C=0;C<7;C++){let B=n(new He(.09,8,6),C%2?d.leaf:d.leaf2,O,!0,!1);B.scale.set(1,.4,.6),B.position.set(.62+Math.cos(C*.9)*.08,Le.h+.25+C%3*.05,Math.sin(C*.9)*.06),B.rotation.set(.3,C,.5)}F.push([Le.x,Le.z+.04,Le.w+.25,Le.d+.3,0,"rect",.36])}n(De(ai.w,.74,ai.d,.01),d.sideboard,e).position.set(ai.x,.37,ai.z),F.push([ai.x+.05,ai.z,ai.w+.3,ai.d+.25,0,"rect",.34]);function L(O,C,B,$,ut=.55,rt=18,ot=.26){let vt=new Re;vt.position.set(O,0,C),e.add(vt),n(new Ve(.23,.19,.48,20),d.pot,vt).position.y=.24,n(new Ve(.014,.014,B*.7,6),d.stem,vt).position.y=.48+B*.35;let Wt=$,Tt=()=>(Wt=Wt*16807%2147483647)/2147483647;for(let Gt=0;Gt<rt;Gt++){let me=(Gt+.5)/rt,se=.66+(B-.62)*Math.sqrt(me),ae=Tt()*Math.PI*2,An=ut*(.35+.65*Math.sin(Math.PI*Math.min(1,me*1.15)))*(.55+Tt()*.45),Rn=n(new He(ot*(.75+Tt()*.5),8,6),Gt%3?d.leaf:d.leaf2,vt,!0,!1);Rn.scale.set(1,.3,.58),Rn.position.set(Math.cos(ae)*An*.6,se,Math.sin(ae)*An*.6),Rn.rotation.set(.3-Tt()*.6,-ae,.35+Tt()*.4)}F.push([O,C,.75,.75,0,"blob",.4])}for(let O of ru)L(...O);let k=z(e,Is.x,Is.z,Is.yaw),I=new Re;I.position.set(ri.x,ve.top,ri.z+.02),e.add(I),n(De(.32,.016,.22,.006),d.laptop,I).position.set(0,.008,0),n(s(.27,.002,.1),ee("#3a3e45",.7),I).position.set(0,.0165,-.025);let H=new Re;H.position.set(0,.016,.11),H.rotation.x=-.28,I.add(H),n(De(.32,.21,.008,.003),d.laptop,H).position.set(0,.105,0);let J=n(s(.29,.18,.001),new on({color:"#cfe0f5",emissive:"#d6e4f5",emissiveIntensity:.8,roughness:.4}),H,!1,!1);J.position.set(0,.11,-.0045);let W=new Si("#dbe6f5",0,1.6,2);W.position.set(0,.2,-.12),I.add(W);let tt=(O,C)=>new ke({map:O,color:"#000000",transparent:!0,opacity:C,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});{let O=[],C=[];for(let[$,ut,rt,ot,vt,Wt,Tt]of F){let Gt=new Ge(rt,ot);Gt.rotateX(-Math.PI/2),Gt.rotateY(vt),Gt.translate($,.006,ut);let me=new _e(new Array(12).fill(Tt/.4),3);Gt.setAttribute("color",me),(Wt==="rect"?O:C).push(Gt)}let B=($,ut)=>{let rt=tt(ut,.4);rt.vertexColors=!0,rt.color.set("#ffffff"),rt.onBeforeCompile=vt=>{vt.fragmentShader=vt.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r; diffuseColor.rgb = vec3(0.0);")};let ot=n(Ci($),rt,e,!1,!1);return ot.renderOrder=1,ot};B(O,f.rect),B(C,f.blob)}let K=(O,C,B)=>{let $=new Ge(O,C);$.rotateX(-Math.PI/2);let ut=n($,tt(f.blob,B),e,!1,!1);return ut.position.y=.007,ut.renderOrder=1,ut},wt=K(.8,.8,.42),yt=[K(.75,.65,.38),K(.75,.65,.38)],zt={},Jt=[],Zt=[];for(let[O,C]of Object.entries(nu)){let B=new on({color:So.clone(),emissive:Ii.clone(),emissiveIntensity:0,roughness:.5}),$=new ke({map:f.pool,color:Ii,transparent:!0,opacity:0,depthWrite:!1,blending:wi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),ut=new ke({map:f.halo,color:Ii,transparent:!0,opacity:0,depthWrite:!1,blending:wi,side:dn}),rt=new ke({map:f.glow,color:Ii,transparent:!0,opacity:0,depthWrite:!1,blending:wi,side:dn});zt[O]={diff:B,pool:$,halo:ut,glow:rt,spots:[]};let ot=[],vt=[],Wt=[];for(let Gt of iu){n(De(.07,.045,1.5,.008),d.housing,e,!1,!1).position.set(C,2.45,Gt);let se=new Pe(s(.056,.004,1.46),B);se.position.set(C,2.45-.0235,Gt),e.add(se);for(let ae of[-.6,.6])n(new Ve(.0025,.0025,l-2.45-.022,4),d.wire,e,!1,!1).position.set(C,(l+2.45)/2,Gt+ae);{let ae=new Ge(3.4,4.6);ae.rotateX(-Math.PI/2),ae.translate(C,.011,Gt),ot.push(ae)}{let ae=new Ge(2.8,3.8);ae.rotateX(Math.PI/2),ae.translate(C,l-.004,Gt),vt.push(ae)}{let ae=new Ge(.42,1.95);ae.rotateX(-Math.PI/2),ae.translate(C,2.45-.03,Gt),Wt.push(ae)}Zt.push({row:O,x:C,z:Gt})}n(Ci(ot),$,e,!1,!1),n(Ci(vt),ut,e,!1,!1),n(Ci(Wt),rt,e,!1,!1);let Tt=O==="B"?[-3.3,.1,3.4]:[-3,3];for(let Gt of Tt){let me=O==="B"&&Gt===.1,se=new sr(Ii,0,9,me?1:1.15,1,1.5);if(se.position.set(C,2.42,Gt),se.target.position.set(C,0,Gt),e.add(se,se.target),me){se.castShadow=!0;let ae=t.mobile?512:1024;se.shadow.mapSize.set(ae,ae),se.shadow.camera.near=.4,se.shadow.camera.far=3.2,se.shadow.focus=.85,se.shadow.radius=6,se.shadow.bias=-6e-4,se.shadow.normalBias=.02,se.userData.hero=!0}zt[O].spots.push(se),Jt.push(se)}}let et=Jt.find(O=>O.userData.hero),st=new on({color:So.clone(),emissive:Ii.clone(),emissiveIntensity:0,roughness:.6}),_t=new Pe(new Ve(.11,.11,.02,18),st);_t.position.set(-2.7,l-.012,o-1.3),e.add(_t);let Ot=new Si(Ii,0,5.5,1.5);Ot.position.set(-2.7,l-.3,o-1.3),e.add(Ot);let lt=new ke({map:f.pool,color:Ii,transparent:!0,opacity:0,depthWrite:!1,blending:wi}),It=new Pe(new Ge(2.6,2.6),lt);It.rotation.x=-Math.PI/2,It.position.set(-2.7,.01,o-1.3),e.add(It);let Bt=new Re;Bt.position.set(vn[0],vn[1],vn[2]),e.add(Bt),n(new Ve(.062,.062,.008,24),d.sensor,Bt,!1,!1).position.y=.006,n(new He(.043,18,10,0,Math.PI*2,Math.PI/2,Math.PI/2),d.sensor,Bt,!1,!1).position.y=.002;let Nt=new ke({color:"#58ccff"}),Kt=new Pe(new He(.0075,10,8),Nt);Kt.position.set(.034,-.012,.02),Bt.add(Kt);let te=new ke({color:"#7fd6ff",transparent:!0,opacity:0,side:dn,depthWrite:!1}),Ht=new Pe(new _s(.09,.108,40),te);Ht.rotation.x=Math.PI/2,Ht.position.y=-.004,Bt.add(Ht);let Vt=new Pe(new _s(.09,.1,40),te.clone());Vt.rotation.x=Math.PI/2,Vt.position.y=-.004,Bt.add(Vt);let de=new nr("#dfe8ff","#8b857a",.4);i.add(de);let ue=new vs("#fff2df",0);ue.position.set(14,9.5,-6),ue.target.position.set(0,0,-.5),ue.castShadow=!0;let ge=t.mobile?1024:2048;ue.shadow.mapSize.set(ge,ge),Object.assign(ue.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:2,far:40}),ue.shadow.bias=-5e-4,ue.shadow.normalBias=.03,ue.shadow.radius=2,i.add(ue,ue.target);let fe=new vs("#dde7f7",0);fe.position.set(6,3.2,1),fe.target.position.set(-3,.8,-1),i.add(fe,fe.target);let D=new Ct,Me=new Ct,re=new Ct,A={dawn:["#0b1634","#18244c","#2b335b","#423f66","#5a4f6e","#706273","#857479"],day:["#5f95d8","#78a8e0","#93bbe7","#afcdec","#c9ddf0","#dde9f4","#eef3f7"]},_=new Ct("#323a58"),V=new Ct("#dfe4ea"),Z=new Ct("#232b48"),nt=new Ct("#b9c4d2"),ht=new Ct("#1c2333"),ct=new Ct("#9aa39e"),Q=new Ct("#1b2423"),it=new Ct("#5d7a5a"),dt=y.getAttribute("color"),Rt=new Ct("#c9d3ea"),pt=new Ct("#f4f3ee"),ft=new Ct("#7c7c7c"),Dt=new Ct("#d6cfc4"),Ft=new Ct("#ebe6dd"),Yt=!1;function N(O){let C=O.sky,B=O.sun,$=(O.rows[0]+O.rows[1]+O.rows[2])/3,ut=.42*$;de.intensity=.2+1.25*C+ut,de.color.copy(Rt).lerp(pt,Math.min(1,C+ut)),de.groundColor.copy(ft).lerp(Dt,Math.min(1,ut*2.2)).lerp(Ft,C*.85),fe.intensity=.12+.75*C,ue.intensity=3.1*B,ue.shadow.autoUpdate=B>.002,Yt||(ue.shadow.needsUpdate=!0,et.shadow.needsUpdate=!0,Yt=!0);for(let Tt=0;Tt<=R;Tt++){Me.set(A.dawn[Tt]).lerp(re.set(A.day[Tt]),C);for(let Gt=0;Gt<2;Gt++)dt.setXYZ(Tt*2+Gt,Me.r,Me.g,Me.b)}dt.needsUpdate=!0,d.building.color.copy(_).lerp(V,C),d.buildingFar.color.copy(Z).lerp(nt,C),d.ground.color.copy(ht).lerp(ct,C),i.background.set(A.dawn[0]).lerp(Me.set(A.day[0]),C),["A","B","C"].forEach((Tt,Gt)=>{let me=Math.max(0,Math.min(1,O.rows[Gt])),se=zt[Tt],ae=me**1.6;se.diff.emissiveIntensity=3.2*ae,se.diff.color.copy(So).lerp(au,Math.min(1,me*1.6)),se.pool.opacity=.14*me*(1-.5*C),se.halo.opacity=.36*me*(1-.3*C),se.glow.opacity=.5*ae*(1-.35*C);for(let An of se.spots)An.intensity=(An.userData.hero?30:34)*me}),et.shadow.autoUpdate=et.intensity>.05,st.emissiveIntensity=2.2*O.corridor,st.color.copy(So).lerp(au,O.corridor),Ot.intensity=8*O.corridor,lt.opacity=.22*O.corridor*(1-.3*C);let rt=.12+.88*Math.min(1,O.led);Nt.color.copy(rg).multiplyScalar(.25+.75*rt),Kt.scale.setScalar(.8+.5*Math.min(1,O.led));let ot=O.pulse;ot>=0&&ot<1?(Ht.visible=!0,Ht.scale.setScalar(1+3*ot),te.opacity=.7*(1-ot)**1.3*Math.min(1,ot*8)):te.opacity=0;let vt=ot-.22;vt>=0&&vt<1?(Vt.material.opacity=.5*(1-vt)**1.3*Math.min(1,vt*8),Vt.scale.setScalar(1+3*vt)):Vt.material.opacity=0;let Wt=O.laptop??1;J.material.emissiveIntensity=.8*Wt,J.material.color.set("#cfe0f5").lerp(Me.set("#263040"),1-Wt),W.intensity=Wt*(.06+.22*(1-$)*(1-C))}function mt(O){k.group.position.set(O.x,0,O.z),k.group.rotation.y=O.yaw,k.seat.position.y=O.dip*.6,k.back.rotation.x=-.08-.16*O.back,wt.position.set(O.x,.007,O.z)}function at(O){I.position.set(O.x,ve.top,O.z+.02),I.rotation.y=O.yaw}function gt(O,C){let B=yt[O];if(B.visible=!!C.visible,!C.visible)return;let $=C.leg.L.ankle,ut=C.leg.R.ankle;B.position.set(($[0]+ut[0]+C.pelvis[0])/3,.008,($[2]+ut[2]+C.pelvis[2])/3);let rt=Math.hypot($[0]-ut[0],$[2]-ut[2]);B.scale.set(.85+rt*.9,1,.85+rt*.9)}return lg(e,[k.group,I,Bt]),{group:e,setState:N,setChair:mt,setLaptop:at,setPersonShadow:gt,sun:ue,hemi:de,spots:Jt,mats:d,pendants:Zt,sensorPos:vn}}function lg(i,t){i.updateMatrixWorld(!0);let e=new Set;for(let s of t)s.traverse(r=>e.add(r));let n=new Map;i.traverse(s=>{if(!s.isMesh||e.has(s))return;let r=s.material;if(Array.isArray(r)||r.transparent||r.vertexColors||r.map&&!r.isMeshStandardMaterial)return;let a=`${r.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}`;n.has(a)||n.set(a,{mat:r,cast:s.castShadow,receive:s.receiveShadow,items:[]}),n.get(a).items.push(s)});for(let{mat:s,cast:r,receive:a,items:o}of n.values()){if(o.length<2)continue;let h=o.map(p=>{let f=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();f.applyMatrix4(p.matrixWorld);for(let d of Object.keys(f.attributes))["position","normal","uv"].includes(d)||f.deleteAttribute(d);return f.getAttribute("uv")?f:null});if(h.some(p=>!p))continue;let l=Ci(h,!1);if(h.forEach(p=>p.dispose()),!l)continue;let u=new Pe(l,s);u.castShadow=r,u.receiveShadow=a,u.frustumCulled=!1;for(let p of o)p.parent.remove(p),p.geometry.dispose();i.add(u)}}var jt=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ce=(i,t,e)=>i+(t-i)*e,Te=(i,t,e)=>{let n=jt((e-i)/(t-i));return n*n*(3-2*n)},Ls=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,cg=i=>1-(1-i)**3,hg=i=>i*i*i,Kn={io:Ls,out:cg,in:hg,lin:i=>i,sine:i=>.5-.5*Math.cos(Math.PI*i)},vr=Math.PI*2,Tn=i=>{for(;i>Math.PI;)i-=vr;for(;i<-Math.PI;)i+=vr;return i},cu=(i,t,e,n,s)=>Te(i,t,s)*(1-Te(e,n,s)),Bn=i=>({x:null,v:0,w:i});function zn(i,t,e){if(i.x===null)return i.x=t,t;let n=i.w,s=-n*n*(i.x-t)-2*n*i.v;return i.v+=s*e,i.x+=i.v*e,i.x}function hu(i){let t=[];for(let r=0;r<i.length-1;r++){let a=i[Math.max(0,r-1)],o=i[r],h=i[r+1],l=i[Math.min(i.length-1,r+2)];for(let u=0;u<32;u++){let p=u/32,f=p*p,d=f*p;t.push([0,1].map(g=>.5*(2*o[g]+(-a[g]+h[g])*p+(2*a[g]-5*o[g]+4*h[g]-l[g])*f+(-a[g]+3*o[g]-3*h[g]+l[g])*d)))}}t.push(i.at(-1));let e=[0];for(let r=1;r<t.length;r++)e.push(e[r-1]+Math.hypot(t[r][0]-t[r-1][0],t[r][1]-t[r-1][1]));let n=e.at(-1);return{total:n,at:r=>{r=jt(r,0,n);let a=1;for(;a<e.length-1&&e[a]<r;)a++;let o=(r-e[a-1])/(e[a]-e[a-1]||1),h=t[a-1],l=t[a];return{x:ce(h[0],l[0],o),z:ce(h[1],l[1],o),h:Math.atan2(l[0]-h[0],l[1]-h[1])}},pts:t}}function uu(i,t,e){i=jt(i);let n=1-t/2-e/2,s;if(t>0&&i<t)s=i*i/(2*t);else if(i<1-e)s=t/2+(i-t);else{let r=i-(1-e);s=t/2+(1-t-e)+r-r*r/(2*e)}return s/n}var xt={add:(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],sub:(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],mul:(i,t)=>[i[0]*t,i[1]*t,i[2]*t],dot:(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],len:i=>Math.hypot(i[0],i[1],i[2]),norm:i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},cross:(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],lerp:(i,t,e)=>[ce(i[0],t[0],e),ce(i[1],t[1],e),ce(i[2],t[2],e)]},Pi=i=>({R:[-Math.cos(i),0,Math.sin(i)],U:[0,1,0],F:[Math.sin(i),0,Math.cos(i)]});function bo(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:xt.sub(xt.mul(i.R,e),xt.mul(i.F,n)),U:i.U,F:xt.add(xt.mul(i.F,e),xt.mul(i.R,n))}}function Xi(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:i.R,U:xt.add(xt.mul(i.U,e),xt.mul(i.F,n)),F:xt.sub(xt.mul(i.F,e),xt.mul(i.U,n))}}function wo(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:xt.add(xt.mul(i.R,e),xt.mul(i.U,n)),U:xt.sub(xt.mul(i.U,e),xt.mul(i.R,n)),F:i.F}}var Ue=(i,t,e,n,s)=>[i[0]+t.R[0]*e+t.U[0]*n+t.F[0]*s,i[1]+t.R[1]*e+t.U[1]*n+t.F[1]*s,i[2]+t.R[2]*e+t.U[2]*n+t.F[2]*s];function tc(i,t,e,n,s){let r=xt.sub(t,i),a=jt(xt.len(r),Math.abs(e-n)+.001,e+n-1e-4);r=xt.norm(r);let o=xt.norm(xt.sub(s,xt.mul(r,xt.dot(s,r)))),h=jt((e*e+a*a-n*n)/(2*e*a),-1,1),l=Math.sqrt(1-h*h),u=xt.add(i,xt.add(xt.mul(r,e*h),xt.mul(o,e*l))),p=xt.add(u,xt.mul(xt.norm(xt.sub(xt.add(i,xt.mul(r,a)),u)),n));return[u,p]}var Ne={thigh:.43,shin:.42,upper:.29,fore:.27,hipW:.095,shW:.19,ankle:.08,standY:.935,seatY:.605},du=.19,fu=.085,To=i=>ce(.74,.54,jt(i/1)),ec=i=>i*To(i),nc=i=>i==="L"?"R":"L",kn={standAhead:.48,scoot:.44,end:-.26,feetDesk:.42,feetUp:.36,seatBack:.03},Sr=["wHang","wSeat","wThigh","wEdge","wKey","wFold","wUp","wTabL","wTapR","wGestR","wRaiseR","wWaveR","wChinR","wHipR","wHipL"],Eo=Object.freeze({sp:0,ch:0,cy:0,cr:0,dr:0,hp:0,hy:0,hr:0,ey:1,bw:0,lw:0,lx:0,ly:1.4,lz:0,slide:0,type:0,back:0,...Object.fromEntries(Sr.map(i=>[i,0])),wHang:1}),kt=i=>({...Eo,...Object.fromEntries(Sr.map(t=>[t,0])),...i}),ic={sp:9,ch:10,cy:9,cr:9,dr:6,hp:8,hy:9,hr:6,ey:22,bw:11,lw:7,lx:7,ly:7,lz:7,slide:10,back:6,type:8,...Object.fromEntries(Sr.map(i=>[i,7.5]))},Li=["rx","rz","h","px","py","pz","pyaw","ppitch","proll",...Object.keys(Eo),"gaitV","walking","swL","swR","gCy","gCh","gCr","gHy","gHr","fLx","fLy","fLz","fLyaw","fLp","fLst","fRx","fRy","fRz","fRyaw","fRp","fRst","chx","chz","chyaw","chback","seatDip","breath","tap","vis"],Mr=Object.fromEntries(Li.map((i,t)=>[i,t])),sc=120,En=1/sc;function rc(i){let t=i.loco.map(c=>{if(c.type!=="walk")return c;let v=c.startDelay??.35,E=hu(c.path),x=c.t1-c.t0-v,b=(c.accel??1.2)/x,w=(c.decel??1)/x;return{...c,pathObj:E,a:b,b:w,delay:v,hEnd:c.hEnd??E.at(E.total).h,turnDur:c.turnDur??.9}}),e=c=>{let v=t[0];for(let E of t)c>=E.t0&&(v=E);return v};t.forEach((c,v)=>{if(c.type!=="walk")return;let E=t[v-1];c.hPrev=E?E.type==="stand"?typeof E.h=="function"?E.h(c.t0):E.h:E.type==="sit"?E.chair.yaw:E.hEnd:c.pathObj.at(0).h});let n=c=>Pi(c.yaw),s=(c,v,E)=>{let x=n(c);return[c.x+x.R[0]*-v+x.F[0]*E,c.z+x.R[2]*-v+x.F[2]*E]};function r(c){let v=e(c);if(v.type==="stand"){let x=typeof v.h=="function"?v.h(c):v.h;return{x:v.pos[0],z:v.pos[1],h:x,s:0,sEnd:0,path:null,walk:!1,seg:v}}if(v.type==="walk"){let x=(c-v.t0-v.delay)/(v.t1-v.t0-v.delay),b=uu(x,v.a,v.b)*v.pathObj.total,w=v.pathObj.at(b),R=v.hPrev+Tn(w.h-v.hPrev)*Te(v.t0,v.t0+.8,c);return R=R+Tn(v.hEnd-R)*Te(v.t1-v.turnDur,v.t1+.25,c),{x:w.x,z:w.z,h:R,s:b,sEnd:v.pathObj.total,path:v.pathObj,walk:!0,seg:v,end:v.pathObj.at(v.pathObj.total)}}let E=s(v.chair,0,kn.standAhead);return{x:E[0],z:E[1],h:v.chair.yaw,s:0,sEnd:0,path:null,walk:!1,seg:v,sit:!0}}let a=c=>{let v=r(c-.01),E=r(c+.01);return Math.hypot(E.x-v.x,E.z-v.z)/.02},o=c=>{let v={...i.poses[i.seq[0][2]]};for(let[E,x,b,w]of i.seq){if(c<E)break;let R=Kn[w||"io"](jt((c-E)/x)),y=i.poses[b],T={};for(let P in v)T[P]=ce(v[P],y[P]??Eo[P],R);v=T}return i.layers?i.layers(c,v):v},h=(c,v)=>{let E=c.times,x=0;v>=E.scoot0&&v<E.push0?x=ce(0,kn.scoot,Kn.io(jt((v-E.scoot0)/(E.scoot1-E.scoot0)))):v>=E.push0&&v<E.up0+.3?x=ce(kn.scoot,0,Kn.io(jt((v-E.push0)/(E.push1-E.push0)))):v>=E.up0+.3&&(x=ce(0,kn.end,Kn.out(jt((v-E.up0-.75)/.9))));let b=.22*(1-Te(E.sit0+.3,E.sit1,v))+.16*Te(E.up0+.5,E.up1+.6,v)+(c.chairWake?.06*Math.sin(jt((v-c.chairWake)/.6)*Math.PI)*(v>c.chairWake?1:0):0);return{dz:x,yaw:b}},l=i.tStart,u=i.tEnd,p=Math.ceil((u-l)*sc)+1,f=new Float32Array(p*Li.length);(function(){let v=Object.fromEntries(Object.keys(ic).map(k=>[k,Bn(ic[k])])),E=Bn(14),x={sway:Bn(8),py:Bn(16),hP:Bn(10),chest:Bn(11),swL:Bn(9),swR:Bn(9),lean:Bn(5),still:Bn(6)},b={},w=r(l);for(let k of["L","R"]){let I=[-Math.cos(w.h),Math.sin(w.h)],H=(k==="L"?-1:1)*fu;b[k]={x:w.x+I[0]*H,z:w.z+I[1]*H,y:0,yaw:w.h,pitch:0,plant:[w.x+I[0]*H,w.z+I[1]*H],stance:!0,landT:-1e9}}let R=null,y=null,T=-1e9,P="R",F=0,z=null,X=!1;function L(k,I,H){let J=r(I),W=a(I),tt=(H+W)/2,K=(k==="L"?-1:1)*fu,wt,yt,zt=.5*ec(tt)+.02;if(!J.walk||J.s+zt>=J.sEnd-.01)wt=[J.x,J.z],yt=J.h,J.walk&&(wt=[J.end.x,J.end.z],yt=J.seg.hEnd);else{let Zt=J.path.at(J.s+zt);wt=[Zt.x,Zt.z];let et=Te(J.seg.t1-J.seg.turnDur-.3,J.seg.t1-.2,I),st=1-Te(J.seg.t0,J.seg.t0+.9,I);yt=Zt.h+Tn(J.h-Zt.h)*jt(et+st)}let Jt=[-Math.cos(yt),Math.sin(yt)];return{x:wt[0]+Jt[0]*K,z:wt[1]+Jt[1]*K,yaw:yt,vL:W}}for(let k=0;k<p;k++){let I=l+k*En,H=r(I),{x:J,z:W,h:tt}=H,K=H.seg,wt=!!H.sit,yt=!wt,zt=yt?a(I):0,Jt=(zt-F)/En;F=zt;let Zt=[Math.sin(tt),Math.cos(tt)];if(K!==z){if(z&&z.type==="sit"){T=I-1,P="R";for(let B of["L","R"]){let $=b[B];$.stance=!0,$.plant=[$.x,$.z],$.landT=I-1}}K.type==="sit"&&(X=!1),z=K}if(yt){let B=To(zt),$=zt<.25?.09:.15*B,ut=rt=>{let ot=b[rt];if(!ot.stance)return!1;let vt=(J-ot.x)*Zt[0]+(W-ot.z)*Zt[1],Wt=Math.abs(Tn(tt-ot.yaw)),Tt=zt>.06;return H.walk&&I>=K.t0&&I-K.t0<.5&&I-T>.6||Tt&&vt>.25*ec(zt)+.02||Wt>.3||Tt&&vt>.12||!Tt&&vt>.22};if(!R&&!y&&I-T>=$-.02){let rt=I-T>.6,ot=null;if(ut(nc(P))?ot=nc(P):ut(P)&&(ot=P),ot){let vt=I+(rt?.28:Math.max(0,$-(I-T))),Wt=L(ot,vt+.78*To(a(vt+.4)),zt),Tt=e(vt+.6),Gt=!(Tt.type==="sit"&&vt+.6>Tt.times.sit0-.1),me=b[ot],se=Math.hypot(Wt.x-me.x,Wt.z-me.z),ae=Math.abs(Tn(Wt.yaw-me.yaw));Gt&&(se>.03||ae>.12)&&(y={side:ot,tStart:vt})}}if(y&&I>=y.tStart){let rt=y.side,ot=b[rt],vt=To(a(I+.4)),Wt=a(I+.4)<.25?.36:jt(.84*vt,.36,.52),Tt=L(rt,I+Wt,zt);R={side:rt,t0:I,dur:Wt,from:{x:ot.x,z:ot.z,y:ot.y,yaw:ot.yaw,pitch:ot.pitch},to:Tt,lift:.045+.05*jt(Tt.vL/1)},ot.stance=!1,y=null}if(R){let rt=R,ot=b[rt.side],vt=jt((I-rt.t0)/rt.dur),Wt=Te(0,1,vt);ot.x=ce(rt.from.x,rt.to.x,Wt),ot.z=ce(rt.from.z,rt.to.z,Wt),ot.yaw=rt.from.yaw+Tn(rt.to.yaw-rt.from.yaw)*Wt,ot.y=ce(rt.from.y,.012,Te(0,.6,vt))+rt.lift*Math.sin(Math.PI*Math.pow(vt,.85));let Tt=ce(rt.from.pitch,-.12,Te(0,.4,vt));ot.pitch=ce(Tt,.28,Te(.5,1,vt)),vt>=1&&(ot.stance=!0,ot.heelUp=!1,ot.plant=[rt.to.x,rt.to.z],ot.landT=I,T=I,P=rt.side,R=null)}for(let rt of["L","R"]){let ot=b[rt];if(!ot.stance)continue;let vt=Te(0,.14,I-ot.landT),Wt=.28*(1-vt),Tt=.012*(1-vt),Gt=[Math.sin(ot.yaw),Math.cos(ot.yaw)],me=(J-ot.plant[0])*Gt[0]+(W-ot.plant[1])*Gt[1],se=y&&y.side===rt||R&&R.side!==rt||ot.heelUp?1:0,ae=.78*jt((me-.08)/.3)*jt(zt/.5)*se;ae>.01&&(ot.heelUp=!0),Wt-=ae,Tt+=du*Math.sin(ae)*.95;let An=du*(1-Math.cos(ae));ot.x=ot.plant[0]+Gt[0]*An,ot.z=ot.plant[1]+Gt[1]*An,ot.y=Tt,ot.pitch=Wt}}let et={dz:0,yaw:0},st=null;if(wt){let B=K.times,$=K.chair;et=h(K,I),st={pos:s($,0,et.dz),yaw:$.yaw+et.yaw};let ut=null;if(I>=B.scoot0&&I<B.push0?ut=ce(kn.standAhead,kn.feetDesk+kn.scoot,Kn.io(jt((I-B.scoot0)/(B.scoot1-B.scoot0)))):I>=B.push0&&I<B.up0&&(ut=ce(kn.feetDesk+kn.scoot,kn.feetUp,Kn.io(jt((I-B.push0)/(B.up0-B.push0+.2))))),ut!==null)for(let rt of["L","R"]){let ot=b[rt],vt=s($,(rt==="L"?1:-1)*.125,ut),Wt=((I-B.scoot0)*2.4+(rt==="L"?0:.5))%1,Tt=I>B.scoot0&&I<B.scoot1+.1||I>B.push0&&I<B.push1+.1;ot.x=vt[0],ot.z=vt[1],ot.y=Tt?.035*Math.max(0,Math.sin(Wt*vr)):0,ot.yaw=$.yaw,ot.pitch=0,ot.plant=[ot.x,ot.z],ot.stance=!0}}let _t=[(b.L.x+b.R.x)/2,(b.L.z+b.R.z)/2];wt&&(J=_t[0],W=_t[1],tt=K.chair.yaw);let Ot=o(I),lt=i.fast?i.fast(I):1,It={};for(let B in Ot){let $=v[B];if(!$){It[B]=Ot[B];continue}$.w=ic[B]*lt,It[B]=zn($,Ot[B],En)}let Bt=yt&&(zt>.05||R||y),Nt=Bt?jt(zt/1):0,Kt=R?jt((I-R.t0)/R.dur):0,te=B=>jt(((b[B].x-J)*Zt[0]+(b[B].z-W)*Zt[1])/(.5*Math.max(.3,ec(zt))),-1,1),Ht=Bt?.05*(te("L")-te("R")):0,Vt=tt;if(yt){let B=0,$=0;for(let rt of["L","R"]){let ot=b[rt].stance?1:1-.6*Math.sin(Math.PI*Kt);B+=ot*Math.sin(b[rt].yaw),$+=ot*Math.cos(b[rt].yaw)}let ut=Math.atan2(B,$);Vt=ut+.3*Tn(tt-ut)}x.hP.x===null&&(x.hP.x=Vt);{let B=x.hP.x;Vt=B+(zn(x.hP,B+Tn(Vt-B),En)-B),x.hP.x=Vt}wt&&(Vt=tt,x.hP.x=tt,x.hP.v=0);let de=[-Math.cos(Vt),Math.sin(Vt)],ue=0;if(Bt){let B=R?R.side:y?y.side:null;if(B){let $=b[nc(B)];ue=.3*(($.x-J)*de[0]+($.z-W)*de[1])}}let ge=zn(x.sway,ue,En),fe=.026*Nt,D=Ne.standY-(R?fe*(.5+.5*Math.cos(vr*Kt)):fe);if(yt)for(let B of["L","R"]){let $=b[B];if(!$.stance)continue;let ut=B==="L"?-1:1,rt=J+de[0]*ut*Ne.hipW,ot=W+de[1]*ut*Ne.hipW,vt=Math.hypot($.x-rt,$.z-ot),Wt=Ne.ankle+$.y+.035+Math.sqrt(Math.max(0,.845*.845-vt*vt));D=Math.min(D,Wt)}let Me=zn(x.py,D,En),re=zn(x.still,Bt&&zt>.05?0:1,En),A=Bt?jt(zt/.8+.15):0,_=zn(x.swL,-.36*te("L")*A,En),V=zn(x.swR,-.36*te("R")*A,En),Z=zn(x.chest,-1.6*Ht,En),nt=zn(x.lean,Bt?.07*jt(Jt/1.5,-1,1):0,En),ht,ct,Q,it=0,dt=0,Rt=0,pt=0;if(wt){let B=K.times,$=K.chair,ut=n($),rt=s($,0,et.dz+kn.seatBack),ot=jt((I-B.sit0)/(B.sit1-B.sit0)),vt=jt((I-B.up0)/(B.up1-B.up0)),Wt=It.slide,Tt=[ut.F[0]*Wt,ut.F[2]*Wt];if(I<B.up0){let me=Kn.io(Te(0,.85,ot)),se=Te(.08,.88,ot)**1.2;ht=ce(_t[0],rt[0],me),Q=ce(_t[1]-ut.F[2]*.03,rt[1],me),ct=ce(Ne.standY-.05,Ne.seatY,se)}else{let me=Kn.io(Te(0,1,vt)),se=Kn.io(Te(.12,.95,vt));ht=ce(rt[0],_t[0],me),Q=ce(rt[1]+Tt[1],_t[1],me),ct=ce(Ne.seatY,Ne.standY,se)}I>=B.sit1-.1&&I<B.up0&&(ht=rt[0]+Tt[0],Q=rt[1]+Tt[1],ct=Ne.seatY);let Gt=I>B.sit0+1.1&&I<B.sit0+1.75?1:0;pt=zn(E,Gt?-.022*Math.exp(-(I-B.sit0-1.1)*9):0,En),ct+=pt,dt=.12*jt(ot*1.3)*(I<B.up0?1:1-vt)+.1*It.sp,x.py.x=ct,x.py.v=0,x.sway.x=0,x.still.x=1}else{ht=ce(J+de[0]*ge,_t[0],re),Q=ce(W+de[1]*ge,_t[1],re),ct=Me,it=Ht,Rt=R?.045*Math.sin(Math.PI*Kt)*Nt*(R.side==="L"?1:-1):0,dt=.035*Nt;let B=e(I+.5);if(B.type==="sit"){let $=Te(B.times.antic,B.times.sit0,I);ct-=.05*$;let ut=Pi(B.chair.yaw).F;ht-=ut[0]*.03*$,Q-=ut[2]*.03*$}}let ft=Vt+it+.4*Tn(tt-Vt)+Z,Dt=ft-(Vt+it),Ft=Tn(tt+.12*it-ft),Yt=nt,N=-1*Rt,mt=.25*Rt,at=i.breath?i.breath(I):{rate:1.65,amp:1},gt=Math.sin(I*at.rate+(i.phase||0))*at.amp,O=k*Li.length,C=(B,$)=>{f[O+Mr[B]]=$};C("rx",J),C("rz",W),C("h",Vt),C("px",ht),C("py",ct),C("pz",Q),C("pyaw",it),C("ppitch",dt),C("proll",Rt);for(let B in Eo)C(B,It[B]);C("gaitV",Nt),C("walking",Bt?1:0),C("swL",_),C("swR",V),C("gCy",Dt),C("gCh",Yt),C("gCr",N),C("gHy",Ft),C("gHr",mt);for(let B of["L","R"]){let $=b[B];C(`f${B}x`,$.x),C(`f${B}z`,$.z),C(`f${B}y`,$.y),C(`f${B}yaw`,$.yaw),C(`f${B}p`,$.pitch),C(`f${B}st`,$.stance?1:0)}if(st)C("chx",st.pos[0]),C("chz",st.pos[1]),C("chyaw",st.yaw);else{let B=t.find($=>$.type==="sit");B&&(C("chx",B.chair.x),C("chz",B.chair.z),C("chyaw",B.chair.yaw))}C("chback",It.back),C("seatDip",pt),C("breath",gt),C("tap",It.type),C("vis",i.visible?i.visible(I)?1:0:1)}})();function d(c){let v=jt((c-l)*sc,0,p-1.001),E=Math.floor(v),x=v-E,b=y=>ce(f[E*Li.length+Mr[y]],f[(E+1)*Li.length+Mr[y]],x),w=y=>{let T=f[E*Li.length+Mr[y]],P=f[(E+1)*Li.length+Mr[y]];return T+Tn(P-T)*x},R={};for(let y of Li)R[y]=y.endsWith("yaw")||y==="h"?w(y):b(y);return R}let g=Ne.upper,S=Ne.fore;function m(c,v){let E=Pi(c.h),x=[c.px,c.py,c.pz],b=wo(Xi(bo(E,c.pyaw),c.ppitch),c.proll),w=c.breath,R=Xi(b,c.sp*.55),y=Ue(x,R,0,.2,0),T=wo(Xi(bo(Xi(R,c.sp*.45),c.gCy+c.cy),c.ch+c.gCh-.012*w),c.cr+c.gCr),P=c.dr,F=.3-.035*P+.004*w,z=-.012+.035*P,X={L:Ue(y,T,-Ne.shW*(1-.06*P),F,z),R:Ue(y,T,Ne.shW*(1-.06*P),F,z)},L=Ue(y,T,0,.355-.02*P,.02+.03*P),k=c.hy+c.gHy,I=c.hp-c.ch*.3-c.sp*.25;if(c.lw>.001){let lt=xt.norm(xt.sub([c.lx,c.ly,c.lz],Ue(L,T,0,.165,0))),It=Math.atan2(xt.dot(lt,T.R),xt.dot(lt,T.F)),Bt=-Math.asin(jt(xt.dot(lt,T.U),-1,1)),Nt=jt(c.lw);k=ce(k,jt(It,-1.1,1.1),Nt),I=ce(I,jt(Bt,-.7,.8),Nt)}let H=wo(Xi(bo(T,k),I),c.hr+c.gHr),J=Ue(L,H,0,.165,.015),W={L:Ue(x,b,-Ne.hipW,-.035,0),R:Ue(x,b,Ne.hipW,-.035,0)},tt={};for(let lt of["L","R"]){let It=c[`f${lt}yaw`],Bt=c[`f${lt}p`],Nt=Xi(Pi(It),-Bt),Kt=[c[`f${lt}x`],Ne.ankle+c[`f${lt}y`],c[`f${lt}z`]],te=xt.norm(xt.add(b.F,xt.mul(b.R,(lt==="L"?-1:1)*.15))),[Ht,Vt]=tc(W[lt],Kt,Ne.thigh,Ne.shin,te);tt[lt]={hip:W[lt],knee:Ht,ankle:Vt,foot:Nt,stance:c[`f${lt}st`]>.5}}let K=i.desk,wt=K?Pi(K.yaw):null,yt=(lt,It,Bt)=>Ue([K.x,0,K.z],wt,-lt,It,Bt),zt=i.laptopAt?i.laptopAt(v):null,Jt=Pi(c.chyaw),Zt=[c.chx,0,c.chz],et=c.tap*.012*Math.max(0,Math.sin(v*17.3))+c.tap*.006*Math.sin(v*5.1),st=c.tap*.012*Math.max(0,Math.sin(v*15.1+1.7))+c.tap*.006*Math.sin(v*4.3+2),_t={};for(let lt of["L","R"]){let It=lt==="L"?-1:1,Bt=X[lt],Nt=c["sw"+lt],Kt=.42+.55*Math.max(0,Nt)-.12*Math.min(0,Nt),te=.1,Ht=Ue(Bt,T,It*te*g,-Math.cos(Nt)*g,Math.sin(Nt)*g),Vt=Ue(Ht,T,It*te*S,-Math.cos(Nt+Kt)*S,Math.sin(Nt+Kt)*S),de={wHang:Vt,wSeat:Ue(Zt,Jt,It*.25,.52,.02),wThigh:xt.add(tt[lt].knee,xt.add(xt.mul(b.F,-.09),[0,.075,0])),wEdge:K?yt(lt==="L"?.27:-.27,K.top+.045,-K.d/2+.035):Vt,wKey:zt?(()=>{let ct=Pi(zt.yaw),Q=(lt==="L"?.085:-.085)+(lt==="L"?.004:-.004)*Math.sin(v*1.3);return Ue([zt.x,K.top+.075+(lt==="L"?et:st),zt.z],ct,-Q,0,-.035)})():Vt,wFold:K?yt(lt==="L"?-.04:.16,K.top+(lt==="L"?.05:.08),-K.d/2+(lt==="L"?.36:.32)):Vt,wUp:Ue(Bt,T,It*-.06,.52,.08),wTabL:Ue(Bt,T,-.02,-.3,.27),wTapR:Ue(Bt,T,-.1+.015*Math.sin(v*6.1),-.25+.012*Math.max(0,Math.sin(v*7.3)),.3),wGestR:Ue(Bt,T,.16,-.36,.3),wRaiseR:Ue(Bt,T,.22,.42,.12),wWaveR:Ue(Bt,T,.3+.12*Math.sin(v*7.5),.26,.18),wChinR:Ue(L,T,.06,-.02,.12),wHipR:Ue(x,b,.2,.08,.02),wHipL:Ue(x,b,-.2,.08,.02)},ue=0;for(let ct of Sr)ct.at(-1)===lt&&(ue+=Math.max(0,c[ct]));let ge=Math.max(0,1-Math.min(1,ue)),fe=0,D=[0,0,0];for(let ct of Sr){let Q=ct.at(-1);if((Q==="L"||Q==="R")&&Q!==lt)continue;let it=Math.max(0,c[ct])*(Q===lt?1:ge);fe+=it,D=xt.add(D,xt.mul(de[ct],it))}D=fe>1e-4?xt.mul(D,1/fe):Vt;let Me=c.wKey+c.wFold+c.wEdge,re=c.wThigh+c.wSeat+c.wHang;K&&(D[1]+=.16*jt(4*Me*re/((Me+re)**2||1)));let A=xt.mul(T.R,It),_=xt.norm(xt.add(xt.add(xt.mul(T.F,-.6),xt.mul(A,.3)),xt.mul(T.U,-.7))),V=c.wUp+(lt==="R"?c.wRaiseR+c.wWaveR:0),Z=lt==="L"?c.wTabL:c.wTapR+c.wGestR;_=xt.norm(xt.add(xt.mul(_,Math.max(0,1-V-c.wFold*.8-Z*.5)),xt.add(xt.add(xt.mul(xt.add(A,xt.mul(T.F,.4)),V),xt.mul(xt.add(A,[0,-.6,0]),c.wFold*.8)),xt.mul(xt.add(xt.mul(A,.5),[0,-1,0]),Z*.5))));let[nt,ht]=tc(Bt,D,g,S,_);if(c.wFold>.01&&K){let ct=yt(lt==="L"?.31:-.165,K.top+.072,-K.d/2+.27),Q=xt.add(Bt,xt.mul(xt.norm(xt.sub(ct,Bt)),g));nt=xt.lerp(nt,Q,jt(c.wFold)),ht=xt.add(nt,xt.mul(xt.norm(xt.sub(D,nt)),S))}_t[lt]={sh:Bt,el:nt,wr:ht}}let Ot={x:c.chx,z:c.chz,yaw:c.chyaw,back:c.chback,dip:c.seatDip};return{t:v,visible:c.vis>.5,root:[c.rx,c.rz,c.h],pelvis:x,pelvisF:b,waist:y,lowF:R,chestF:T,neck:L,headC:J,headF:H,leg:tt,arm:_t,eyes:jt(c.ey,0,1.35),brow:jt(c.bw,-1.2,1.3),chair:Ot,breath:w,gait:c.gaitV,walking:c.walking>.5,tab:c.wTabL}}return{id:i.id,sample:d,pose:c=>m(d(c),c),T_START:l,T_END:u,rootAt:r,segs:t}}var pu=new G(0,1,0),mu=new Ce,Ds=new G,ug=new G,dg=new G,Ao=null;function fg(){if(Ao)return Ao;let i=(u,p,f,d)=>{let g=new Ve(p,u,f,14);g.translate(0,f/2,0);let S=new He(d,14,10);return[g,S]},t=(u,p,f)=>{let d=new Qs(u.map(([g,S])=>new Qt(g,S)),p);return d.scale(1,1,f),d.computeVertexNormals(),d},[e,n]=i(.054,.042,Ne.upper,.056),[s,r]=i(.043,.034,Ne.fore,.043),[a,o]=i(.085,.066,Ne.thigh,.085),[h,l]=i(.064,.047,Ne.shin,.064);return Ao={pelvis:(()=>{let u=new He(.17,18,12);return u.scale(1,.58,.72),u})(),abdomen:(()=>{let u=new Ve(.152,.163,.23,18);return u.translate(0,.1,0),u.scale(1,1,.68),u})(),chest:t([[.152,0],[.163,.08],[.19,.2],[.212,.285],[.198,.33],[.125,.37],[.06,.39]],20,.62),shirt:new $e(.075,.19,.012),collar:(()=>{let u=new js(.066,.014,6,18);return u.rotateX(Math.PI/2),u})(),neck:(()=>{let u=new Ve(.047,.055,.1,12);return u.translate(0,.03,0),u})(),head:(()=>{let u=new He(.105,22,16);return u.scale(.92,1.08,1),u})(),hairShort:(()=>{let u=new He(.113,22,12,0,Math.PI*2,0,Math.PI*.53);return u.scale(1,1,1.06),u})(),hairCropped:(()=>{let u=new He(.11,22,12,0,Math.PI*2,0,Math.PI*.46);return u.scale(1,.95,1.02),u})(),eye:new He(.0115,10,8),nose:new He(.017,10,8),hand:(()=>{let u=new He(.043,12,10);return u.scale(.82,1.2,.48),u.translate(0,.035,0),u})(),shoe:(()=>{let u=new He(.06,14,10);return u.scale(.88,.52,2.05),u.translate(0,-.045,.055),u})(),upper:e,shoulder:n,fore:s,elbow:r,thigh:a,hipJ:o,shin:h,knee:l,tablet:new $e(.19,.012,.26),tabletScreen:new $e(.17,.002,.235),badge:new $e(.055,.075,.005),strap:new $e(.011,1,.003),brow:new $e(.036,.0085,.012),vestCollar:new Ve(.078,.086,.06,18,1,!0)},Ao}function ac(i){let t=fg(),e=(m,c=.85)=>new on({color:m,roughness:c,metalness:0}),n={coat:e(i.vest||i.coat),sleeve:e(i.sleeve||i.coat,.9),shirt:e(i.shirt,.9),pants:e(i.pants,.9),shoe:e(i.shoe||"#1b1c22",.6),skin:e(i.skin,.75),hair:e(i.hair,.9),eye:new ke({color:"#1d1a20"})},s=new Re,r=(m,c,v=s,E=!0)=>{let x=new Pe(m,c);return x.castShadow=E,x.receiveShadow=!1,v.add(x),x},a={pelvis:r(t.pelvis,n.pants),abdomen:r(t.abdomen,n.coat),chest:new Re,neck:r(t.neck,n.skin),head:new Re};if(s.add(a.chest,a.head),r(t.chest,n.coat,a.chest),r(t.shirt,n.shirt,a.chest).position.set(0,.255,.104),r(t.collar,n.shirt,a.chest,!1).position.set(0,.365,.004),i.vest){let m=r(t.vestCollar,n.coat,a.chest,!1);m.position.set(0,.375,-.004),m.scale.set(1,1,.82)}if(i.badge){let m=new on({color:"#2f6f9f",roughness:.8}),c=(v,E)=>{let x=r(t.strap,m,a.chest,!1);x.position.set((v[0]+E[0])/2,(v[1]+E[1])/2,(v[2]+E[2])/2),Ds.set(E[0]-v[0],E[1]-v[1],E[2]-v[2]),x.scale.y=Ds.length(),x.quaternion.setFromUnitVectors(pu,Ds.normalize())};for(let v of[-1,1])c([v*.056,.372,.05],[v*.045,.31,.136]),c([v*.045,.31,.136],[v*.012,.215,.14]);r(t.badge,new on({color:"#f4f4f2",roughness:.6}),a.chest,!1).position.set(0,.18,.141)}r(t.head,n.skin,a.head);let o=r(t[i.hairStyle==="cropped"?"hairCropped":"hairShort"],n.hair,a.head);o.position.set(0,.018,-.012),o.rotation.x=-.34;let h=[-1,1].map(m=>{let c=r(t.eye,n.eye,a.head,!1);return c.position.set(m*.036,.012,.094),c});{let m=r(t.nose,n.skin,a.head,!1);m.position.set(0,-.004,.103),m.scale.set(.75,1.25,.95)}let l=i.brows?[-1,1].map(m=>{let c=r(t.brow,n.hair,a.head,!1);return c.position.set(m*.037,.037,.092),c.rotation.x=-.25,c}):[],u={};for(let m of["L","R"])u[m]={upper:r(t.upper,n.sleeve),shoulder:r(t.shoulder,i.vest?n.coat:n.sleeve),fore:r(t.fore,n.sleeve),elbow:r(t.elbow,n.sleeve),hand:r(t.hand,n.skin),thigh:r(t.thigh,n.pants),hipJ:r(t.hipJ,n.pants),shin:r(t.shin,n.pants),knee:r(t.knee,n.pants),shoe:r(t.shoe,n.shoe)};let p=null;if(i.tablet){p=new Re,r(t.tablet,new on({color:"#23262b",roughness:.45}),p);let m=r(t.tabletScreen,new on({color:"#dfe7ef",emissive:"#cfdcea",emissiveIntensity:.9,roughness:.3}),p,!1);m.position.y=.0065;let c=(E,x,b,w,R)=>{r(new $e(E,.001,x),new ke({color:R}),p,!1).position.set(b,.0085,w)};c(.14,.012,0,-.095,"#2f7fc0"),c(.1,.006,-.02,-.07,"#9fb3c8"),c(.14,.09,0,0,"#f2f6fa"),c(.06,.03,-.04,.085,"#2f7fc0"),c(.06,.03,.04,.085,"#c9d4de");let v=new Si("#dce7f7",0,1.5,2);v.position.set(0,.12,0),p.add(v),p.userData.light=v,s.add(p)}let f=(m,c)=>{mu.makeBasis(Ds.set(-c.R[0],-c.R[1],-c.R[2]),ug.set(c.U[0],c.U[1],c.U[2]),dg.set(c.F[0],c.F[1],c.F[2])),m.quaternion.setFromRotationMatrix(mu)},d=(m,c,v)=>{m.position.set(c[0],c[1],c[2]),Ds.set(v[0]-c[0],v[1]-c[1],v[2]-c[2]).normalize(),m.quaternion.setFromUnitVectors(pu,Ds)},g=(m,c)=>m.position.set(c[0],c[1],c[2]);function S(m){if(s.visible=m.visible,!m.visible)return;g(a.pelvis,[m.pelvis[0]+m.pelvisF.U[0]*.02,m.pelvis[1]+.02,m.pelvis[2]+m.pelvisF.U[2]*.02]),f(a.pelvis,m.pelvisF),g(a.abdomen,m.pelvis),f(a.abdomen,m.lowF),g(a.chest,m.waist),f(a.chest,m.chestF),d(a.neck,m.neck,[m.neck[0]+m.headF.U[0],m.neck[1]+m.headF.U[1],m.neck[2]+m.headF.U[2]]),g(a.head,m.headC),f(a.head,m.headF);let c=Math.max(.12,Math.min(1.3,m.eyes));for(let E of h)E.scale.set(1,c,1);let v=m.brow||0;l.forEach((E,x)=>{let b=x?1:-1;E.position.y=.037+.009*Math.max(0,v)-.004*Math.max(0,-v),E.rotation.z=b*(-.32*Math.max(0,-v)+.08*Math.max(0,v))});for(let E of["L","R"]){let x=m.arm[E],b=m.leg[E],w=u[E];d(w.upper,x.sh,x.el),g(w.shoulder,x.sh),d(w.fore,x.el,x.wr),g(w.elbow,x.el),d(w.hand,x.wr,[2*x.wr[0]-x.el[0],2*x.wr[1]-x.el[1],2*x.wr[2]-x.el[2]]),d(w.thigh,b.hip,b.knee),g(w.hipJ,b.hip),d(w.shin,b.knee,b.ankle),g(w.knee,b.knee),g(w.shoe,b.ankle),f(w.shoe,b.foot)}if(p){p.visible=m.tab>.3;let E=m.arm.L.wr,x=m.chestF,b=[E[0]+x.R[0]*.07+x.U[0]*.03+x.F[0]*.04,E[1]+x.R[1]*.07+x.U[1]*.03+x.F[1]*.04,E[2]+x.R[2]*.07+x.U[2]*.03+x.F[2]*.04];p.position.set(b[0],b[1],b[2]);let w=[x.U[0]*.8-x.F[0]*.6,x.U[1]*.8-x.F[1]*.6,x.U[2]*.8-x.F[2]*.6],R=[x.F[0]*.8+x.U[0]*.6,x.F[1]*.8+x.U[1]*.6,x.F[2]*.8+x.U[2]*.6];f(p,{R:x.R,U:w,F:R})}}return{group:s,applyPose:S,mats:n,tablet:p}}var br=[{id:"01_arrival",name:"Binnenkomst",t0:0,t1:9},{id:"02_start_work",name:"Aan het werk",t0:9,t1:15},{id:"03_false_off_1",name:"Eerste uitval",t0:15,t1:25},{id:"04_false_off_2",name:"Tweede uitval",t0:25,t1:34},{id:"05_give_up_sleep",name:"Geeft het op",t0:34,t1:46},{id:"06_technician_arrives",name:"Technicus komt",t0:46,t1:53.5},{id:"07_diagnosis",name:"Diagnose",t0:53.5,t1:61.8},{id:"08_configuration",name:"Configureren",t0:61.8,t1:72.6},{id:"09_wake_up_proof",name:"Wakker \u2014 het werkt",t0:72.6,t1:84},{id:"10_daylight_control",name:"Daglichtregeling",t0:84,t1:95},{id:"11_ending",name:"Einde",t0:95,t1:104}],qi=104,lc=i=>br.filter(t=>t.t0<=i+1e-6).at(-1)||br[0],xu=90.5,pg=[[2.7,1,1.5],[18.2,.3,1.2],[20.3,0,1],[22.5,1,1.2],[28,.3,1.2],[30,0,1],[32,1,1.2],[36.8,.3,1.2],[40.6,0,1.4],[48.5,1,1.5],[58,.3,1.2],[60.3,1,1],[68.9,.3,1.2],[70.9,0,1],[74.9,1,.4]];function mg(i){let t=0;for(let[e,n,s]of pg){if(i<e)break;t=ce(t,n,Ls(jt((i-e)/s)))}return t}var gg=[2.4,22.2,31.8,48.2,60.15,74.85],_g=71,xg=[.85,.45,.08],yg=i=>Te(84,93,i);function cc(i,t={}){let e=yg(i),n=Te(85,94,i),s=Te(86.5,95,i),r=mg(i),a=xg.map(u=>r*(1-u*n)),o=-1,h=0;for(let u of gg){let p=(i-u)/1.4;p>=0&&p<1&&(o=p),i>=u&&(h=Math.max(h,Math.exp(-(i-u)/1.6)))}t.walking&&(h=Math.max(h,.55)),i>=_g&&t.typing&&(h=Math.max(h,.4*t.typing));let l=1-.75*cu(38.6,39.4,79.1,79.9,i);return{rows:a,corridor:.6,sky:.1+.9*e,sun:s,led:h,pulse:o,laptop:l,zone:r}}function hc(i){let t=Ls(jt((i-38.4)/.8))*(1-Ls(jt((i-78.9)/1)));return{x:ce(ri.x,ri.ax,t),z:ce(ri.z,ri.az,t),yaw:ri.ayaw*t}}var Us=[0,2.45,-1.5],vg=[0,3.2,1],oc=[1.3,-.6],Mg=[1.3,1.62,-.6],Sg=[5,1.7,1.5],bg=-.4,Oe=(i,t=1)=>({lw:t,lx:i[0],ly:i[1],lz:i[2]}),wg={walk:kt({sp:.05}),stand:kt({hp:.04}),antic:kt({sp:.14,ch:.06,hp:.22,hy:-.55,cy:-.12}),sitMid:kt({sp:.52,ch:.16,hp:.12,hy:-.15,wSeat:1}),seated:kt({sp:.04,ch:.02,hp:.12,wThigh:1}),pull:kt({sp:.2,ch:.06,hp:.18,wEdge:1}),type:kt({cy:.08,sp:.1,ch:.07,hp:.36,wKey:1,type:1}),typeCalm:kt({cy:.06,sp:.1,ch:.07,hp:.38,wKey:1,type:.5}),stop1:kt({bw:.5,cy:.04,sp:.06,ch:.02,hp:.1,wKey:1,type:0,ey:1.05}),lookUp1:kt({bw:1,sp:0,ch:-.06,hp:-.3,wKey:1,ey:1.1,...Oe(Us,1)}),raise1:kt({bw:.8,sp:0,ch:-.04,hp:-.25,wKey:1,wRaiseR:1,ey:1.1,...Oe(vn,1)}),okWeird:kt({bw:.35,sp:.04,ch:0,hp:.05,hr:.12,wKey:1,ey:1,...Oe(vn,.5)}),stop2:kt({bw:-.3,sp:.08,ch:.04,hp:.15,wKey:1,type:0,ey:.95}),lookUp2:kt({bw:-.5,sp:0,ch:-.08,hp:-.32,wKey:1,ey:1,...Oe(Us,1)}),sighUp:kt({bw:-.4,sp:-.02,ch:-.12,dr:-.55,hp:-.3,wKey:1,ey:.9,...Oe(Us,1)}),sighDown:kt({bw:-.8,sp:.08,ch:.04,dr:.45,hp:-.1,wKey:1,ey:.8,...Oe(Us,.6)}),raise2:kt({bw:-.7,sp:.02,ch:-.02,dr:.1,hp:-.25,wKey:1,wRaiseR:1,ey:1,...Oe(vn,1)}),suspicious:kt({bw:-1,sp:.06,ch:.02,hp:-.12,hy:.15,wKey:1,ey:.7,...Oe(vn,.9)}),stop3:kt({bw:-.4,sp:.08,ch:.04,hp:-.05,wKey:1,type:0,ey:.85,...Oe(Us,.7)}),giveUp:kt({bw:-.6,sp:.26,ch:.2,dr:.9,hp:.34,wKey:1,ey:.6}),pushLap:kt({bw:-.5,sp:.3,ch:.1,dr:.3,hp:.35,ey:.5,wKey:1}),sigh2:kt({bw:-.3,sp:.05,ch:-.08,dr:-.15,hp:.15,ey:.4,wThigh:.6,wEdge:.4}),fold:kt({sp:.5,ch:.04,dr:.45,hp:.3,ey:.25,wFold:1}),nod:kt({sp:.56,ch:.08,dr:.7,hp:.9,ey:0,wFold:1}),jerk:kt({sp:.4,ch:-.02,dr:.2,hp:0,ey:1,wFold:1}),trying:kt({sp:.46,ch:.04,dr:.45,hp:.35,ey:.55,wFold:1}),sleep:kt({sp:.68,ch:0,dr:.55,hp:.6,hy:.35,hr:.25,ey:0,wFold:1}),stir:kt({sp:.64,ch:0,dr:.5,hp:.5,hy:.1,hr:.2,ey:0,wFold:1}),startleHead:kt({bw:1,sp:.42,ch:.02,dr:.3,hp:-.12,ey:1.35,wFold:.85,wEdge:.15}),startle:kt({bw:1.2,sp:0,ch:-.14,dr:-.5,hp:-.18,ey:1.35,wFold:.25,wEdge:.75}),lookUpWake:kt({bw:1,sp:0,ch:-.1,dr:-.25,hp:-.3,ey:1.4,wEdge:1,...Oe(vg,1)}),lookTech:kt({bw:.55,sp:.02,ch:-.04,dr:-.1,cy:bg,ey:1.15,wEdge:1,...Oe(Mg,1)}),normalSit:kt({bw:.15,sp:.05,ch:.03,hp:.2,ey:1,wEdge:1}),pullLap:kt({sp:.12,ch:.05,hp:.3,ey:1,wEdge:1}),leanBack:kt({sp:-.1,ch:-.12,hp:.05,ey:1,wThigh:.5,wEdge:.5}),glanceWin:kt({cy:.1,sp:.08,ch:.04,hp:.1,wKey:1,type:.3,ey:1,...Oe(Sg,.9)}),stopSus:kt({bw:-.9,sp:.04,ch:-.02,hp:-.2,wKey:1,type:0,ey:.8,...Oe(Us,1)}),nodOk:kt({bw:.2,sp:.06,ch:.02,hp:.3,wKey:1,type:0,ey:1}),typeRelaxed:kt({cy:.06,sp:.08,ch:.05,dr:.1,hp:.34,wKey:1,type:.8})},Tg=[[-10,.01,"walk","lin"],[8,.9,"stand"],[8.55,.4,"antic"],[9.05,.6,"sitMid"],[10.05,.6,"seated","out"],[10.65,.4,"pull"],[11.7,.55,"type"],[16.5,1.2,"typeCalm","sine"],[20.8,.4,"stop1"],[21.2,.7,"lookUp1"],[22,.45,"raise1","out"],[23.1,.6,"okWeird"],[23.9,.7,"type"],[26.5,1.2,"typeCalm","sine"],[30.4,.35,"stop2"],[30.8,.6,"lookUp2"],[31,.45,"sighUp"],[31.5,.5,"sighDown"],[31.75,.4,"raise2","out"],[32.7,.6,"suspicious"],[33.7,.7,"type"],[35,1.2,"typeCalm","sine"],[37.3,.4,"stop3"],[37.9,.6,"giveUp"],[38.4,.3,"pushLap"],[39.15,.45,"sigh2"],[39.6,.75,"fold"],[40.6,.55,"nod","in"],[41,.22,"jerk","out"],[41.3,.6,"trying"],[41.9,1.1,"sleep"],[74.4,.5,"stir"],[74.85,.12,"startleHead","out"],[74.97,.2,"startle","out"],[75.5,.5,"lookUpWake"],[76.9,.6,"lookTech"],[78.3,.6,"normalSit"],[78.9,.6,"pullLap"],[80.2,.6,"type"],[88,.6,"glanceWin"],[89.6,.6,"type"],[99.5,.45,"stopSus"],[101.6,.4,"nodOk"],[102.2,.6,"typeRelaxed"]];function Eg(i,t){let e=t.wKey*(t.ey>.8?1:.4)*(1-t.lw);t.hp+=e*(.035*Math.sin(i*.9)+.025*Math.sin(i*2.3+1))-e*.12*Te(0,.4,Math.sin(i*.55-.7)-.85),t.hy+=e*.05*Math.sin(i*.37+.4);let n=jt((i-41.3-.1)/.8);if(n>0&&n<1&&(t.hy+=.14*Math.sin(n*Math.PI*4)*(1-n)),t.ey>.5){let s=Math.floor((i+1.3)/3.9),r=s*3.9-1.3+.9*Math.sin(s*2.3);Math.abs(i-r)<.07&&(t.ey*=.1)}return t}var Ag=i=>1+1.6*(i>41&&i<41.35||i>74.83&&i<75.15?1:0),Rg=i=>{let t=Te(41.9,43.2,i)*(1-Te(74.3,74.5,i));return{rate:ce(1.65,1.05,t),amp:ce(1,2.2,t)}},wr=rc({id:"worker",tStart:-3,tEnd:qi+1,loco:[{type:"stand",t0:-10,t1:-1.4,pos:[-2.7,-9.4],h:0},{type:"walk",t0:-1.4,t1:8.5,path:[[-2.7,-9.4],[-2.7,-7.4],[-2.3,-5.4],[-1.55,-3.4],[-.98,-1.9],[-.68,-1.2],[-.36,-.68],[0,-.62]],accel:.9,decel:1,hEnd:0},{type:"sit",t0:8.5,t1:qi+1,chair:Is,chairWake:74.85,times:{antic:8.55,sit0:9.2,sit1:10.45,scoot0:10.8,scoot1:11.8,push0:999,push1:1e3,up0:1001,up1:1002}}],poses:wg,seq:Tg,layers:Eg,fast:Ag,breath:Rg,desk:ve,laptopAt:hc}),Cg=[0,1,-.55],gu=[0,1.3,-.6],Ig=[4.5,2.4,-1],Pg=[0,2.85,-1.5],_u={hp:.5,hy:-.12},Lg={walkTab:kt({sp:.05,wTabL:1}),standTab:kt({hp:.06,wTabL:1}),lookWorker:kt({sp:.07,ch:.04,wTabL:.35,wHang:1,...Oe(Cg,1)}),lookWorkerUp:kt({sp:-.02,ch:-.05,wTabL:.35,wHang:1,...Oe(gu,1)}),lookSensor:kt({ch:-.06,wTabL:1,...Oe(vn,1)}),walkLookUp:kt({sp:.03,ch:-.05,wTabL:1,...Oe(vn,1)}),lookTab:kt({sp:.04,ch:.06,wTabL:1,..._u}),tapTab:kt({sp:.04,ch:.06,wTabL:1,wTapR:1,..._u}),wave:kt({ch:-.04,wTabL:1,wWaveR:1,...Oe(vn,1)}),nod:kt({sp:.04,ch:.08,hp:.3,wTabL:1,wTapR:.5}),gesture:kt({wTabL:1,wGestR:1,hp:.05,...Oe(gu,1)}),lookRoom:kt({ch:-.03,wTabL:1,...Oe(Ig,1)}),lookLight:kt({ch:-.07,wTabL:1,...Oe(Pg,1)})},Dg=[[-10,.01,"walkTab","lin"],[52,.7,"standTab"],[53.8,.6,"lookWorker"],[55.2,.7,"lookSensor"],[56.4,.6,"lookTab"],[58.4,.6,"lookLight"],[59.1,.5,"lookTab"],[59.8,.6,"walkLookUp"],[63.4,.6,"standTab"],[64,.5,"lookTab"],[64.4,.5,"tapTab"],[66.3,.5,"lookSensor"],[66.9,.5,"lookTab"],[67.3,.5,"tapTab"],[69.2,.5,"lookLight"],[69.9,.5,"lookTab"],[70.2,.4,"tapTab"],[71,.4,"lookTab"],[71.6,.4,"nod"],[72.1,.5,"standTab"],[72.9,.8,"lookWorker"],[75,.4,"lookWorkerUp"],[78.4,.6,"lookTab"],[80.6,.8,"lookLight"],[82,.6,"lookTab"],[84.3,.5,"walkTab"],[88.3,.7,"standTab"],[88.6,.8,"lookRoom"],[91,.7,"lookTab"],[92.2,.8,"lookRoom"],[94,.7,"lookTab"],[95.5,.6,"lookRoom"],[96.5,.5,"walkTab"]];function Ug(i,t){if(t.ey>.5){let e=Math.floor((i+.4)/4.3),n=e*4.3-.4+1.1*Math.sin(e*1.7);Math.abs(i-n)<.07&&(t.ey*=.1)}t.hp>.3&&t.lw<.3&&(t.hy+=.05*Math.sin(i*1.4),t.hp+=.02*Math.sin(i*.9+1));for(let e of[59.3,77.4]){let n=i-e;n>0&&n<.5&&(t.hp+=.14*Math.sin(Math.PI*n/.5))}return t}var Ro=rc({id:"technician",tStart:40,tEnd:qi+1,phase:1.9,loco:[{type:"stand",t0:-10,t1:45.8,pos:[-2.7,-9.6],h:0},{type:"walk",t0:45.8,t1:52.5,path:[[-2.7,-9.6],[-2.7,-7.4],[-2.25,-5.4],[-1.5,-3.6],[-.9,-2.3]],accel:1,decel:1,hEnd:.49},{type:"stand",t0:52.5,t1:59.8,pos:[-.9,-2.3],h:.49},{type:"walk",t0:59.8,t1:63.6,path:[[-.9,-2.3],[.2,-2.15],[1.15,-1.7],[1.45,-1.05],oc],accel:.9,decel:1,hEnd:-1.85},{type:"stand",t0:63.6,t1:84.3,pos:oc,h:-1.85},{type:"walk",t0:84.3,t1:88.3,path:[oc,[1.6,-1.2],[1.55,-1.9],[1.45,-2.7],[1.1,-3.7]],accel:.9,decel:1,hEnd:.3},{type:"stand",t0:88.3,t1:96.5,pos:[1.1,-3.7],h:.3},{type:"walk",t0:96.5,t1:103.2,path:[[1.1,-3.7],[0,-4.4],[-1.4,-5.5],[-2.5,-6.6],[-2.7,-8],[-2.7,-9.8]],accel:.9,decel:.6}],poses:Lg,seq:Dg,layers:Ug,visible:i=>i>45&&i<103.3}),Ng={"01_arrival":{d:{pos:[3,1.8,5.2],target:[-1.1,1.05,-2.8],fov:36,to:{pos:[2.7,1.75,4.7]}},m:{pos:[2.5,1.75,2.8],target:[-1.3,1.1,-3.2],fov:60}},"02_start_work":{d:{pos:[2.7,1.45,2.5],target:[-.15,.95,-.6],fov:30},m:{pos:[1.9,1.45,1.8],target:[0,1,-.6],fov:52}},"03_false_off_1":{d:{pos:[2.6,1.5,2.1],target:[0,1.35,-.7],fov:34},m:{pos:[1.65,1.4,1.3],target:[0,1.3,-.65],fov:54}},"04_false_off_2":{d:{pos:[2.45,1.5,1.95],target:[0,1.35,-.7],fov:33},m:{pos:[1.6,1.4,1.2],target:[0,1.3,-.65],fov:52}},"05_give_up_sleep":{d:{pos:[2.4,1.2,1.5],target:[0,.95,-.5],fov:30,to:{pos:[2.2,1.18,1.35]}},m:{pos:[1.8,1.15,1.15],target:[0,.95,-.55],fov:50}},"06_technician_arrives":{d:{pos:[2.5,1.65,.9],target:[-2,1.15,-5],fov:38},m:{pos:[2.2,1.7,.9],target:[-1.6,1.1,-4.6],fov:64}},"07_diagnosis":{d:{pos:[2.7,1.5,1.3],target:[-.5,1.65,-2.3],fov:36},m:{pos:[1.9,1.5,.7],target:[-.6,1.7,-2.4],fov:58}},"08_configuration":{d:{pos:[-1.7,1.6,2.1],target:[.75,1.25,-.8],fov:38,to:{pos:[-1.38,1.52,1.72]}},m:{pos:[-1,1.55,1.7],target:[.8,1.3,-.8],fov:60,to:{pos:[-.82,1.5,1.45]}}},"09_wake_up_proof":{d:{pos:[.75,1.5,2.45],target:[.6,1.55,-.7],fov:35},m:{pos:[1.2,1.45,2],target:[.55,1.2,-.8],fov:62}},"10_daylight_control":{d:{pos:[-4.5,1.95,-6.1],target:[2.3,1.05,.15],fov:42,to:{pos:[-4.2,1.9,-5.5]}},m:{pos:[-4.1,2,-4.9],target:[1.6,1.1,.2],fov:64}},"11_ending":{d:{pos:[2.9,1.5,2.7],target:[-.6,1,-1.2],fov:32,to:{pos:[3.15,1.56,2.98]}},m:{pos:[2,1.45,2],target:[-.5,1.05,-1.2],fov:52}}};function yu(i,t){let e=lc(i),n=Ng[e.id][t?"m":"d"],s=n.to?Ls(jt((i-e.t0)/(e.t1-e.t0))):0,r=n.to&&n.to.pos?n.pos.map((o,h)=>ce(o,n.to.pos[h],s)):n.pos,a=n.to&&n.to.target?n.target.map((o,h)=>ce(o,n.to.target[h],s)):n.target;return{pos:r,target:a,fov:n.fov,scene:e}}var Mu={duration:qi,scenes:br,still:xu,sceneAt:lc},vu={mapping:bs,exposure:1};function Su(i,t={}){let e=t.qa?new URLSearchParams(location.search):new URLSearchParams,n=Math.min(innerWidth,innerHeight)<600,s=new xo({canvas:i,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!t.qa&&e.has("qa")});s.setPixelRatio(Math.min(devicePixelRatio||1,t.dprMax??(n?2:1.75))),s.shadowMap.enabled=!0,s.shadowMap.type=ki;let r={aces:rr,agx:ar,neutral:bs};s.toneMapping=r[e.get("tm")]??vu.mapping,s.toneMappingExposure=Number(e.get("exp"))||vu.exposure,s.outputColorSpace=Ye;let a=new Ys;a.background=new Ct("#0e1a3c");let o=new Ze(32,16/9,.1,80),h=lu(a,{mobile:n}),l=e.get("brows")!=="0",u=ac({coat:"#c47d34",shirt:"#f2f2ef",pants:"#2e3852",skin:"#d9a37c",hair:"#2a211c",hairStyle:"short",brows:l}),p=ac({vest:"#2d3d50",sleeve:"#d8e0e7",shirt:"#eef2f5",pants:"#3a3f47",skin:"#c48a66",hair:"#1c1714",hairStyle:"cropped",tablet:!0,badge:!0,brows:l});a.add(u.group,p.group);let f=[t.start??0,t.end??qi],d=!!t.loop;if(t.scene){let I=br.find(H=>H.id===t.scene||H.id.startsWith(t.scene));I&&(f=[I.t0,I.t1])}let g=f[0],S=!1,m=!1,c=!1,v=t.speed??1,E=0,x=0,b=0,w=t.camera??"auto",R=null,y=!1;function T(){let I=i.clientWidth/Math.max(1,i.clientHeight),H=w==="portret"||w==="auto"&&I<1,J=yu(g,H);if(w==="close"&&(J={pos:[2,1.35,1.35],target:[0,1.1,-.6],fov:34}),w==="door"){let W=.03*Math.sin(g*7.3);J={pos:[-1.1+W,1.45,-4.4+W],target:[-3.2,1.25,-7],fov:22}}if(w==="face"){let W=wr.pose(g).headC;J={pos:[W[0]+.5,W[1]+.08,W[2]+.95],target:[W[0],W[1]-.02,W[2]],fov:28}}if(w==="tech"){let tt=Ro.pose(g).root,K=[Math.sin(tt[2]),Math.cos(tt[2])];J={pos:[tt[0]+K[0]*2.6+.8,1.45,tt[1]+K[1]*2.6+.3],target:[tt[0],1.15,tt[1]],fov:36}}o.aspect=I,o.fov=H?J.fov:I<1.5?2*Math.atan(Math.tan(J.fov*Math.PI/360)*(1.5/I)**.6)*180/Math.PI:J.fov,o.updateProjectionMatrix(),o.position.set(J.pos[0],J.pos[1],J.pos[2]),o.lookAt(J.target[0],J.target[1],J.target[2]),R=J}function P(){if(y)return;let I=i.clientWidth,H=i.clientHeight;if(!I||!H)return;let J=wr.pose(g),W=Ro.pose(g),tt={walking:J.visible&&J.walking&&J.root[1]>-7.2||W.visible&&W.walking&&W.root[1]>-7.2,typing:J.visible?Math.min(1,Math.max(0,wr.sample(g).tap)):0},K=cc(g,tt);if(h.setState(K),h.setChair(J.chair),h.setLaptop(hc(g)),u.applyPose(J),p.applyPose(W),h.setPersonShadow(0,J),h.setPersonShadow(1,W),p.tablet){let yt=1-(K.rows[0]+K.rows[1]+K.rows[2])/3;p.tablet.userData.light.intensity=p.tablet.visible&&W.visible?(.05+.55*yt)*(1-K.sky):0}T();let wt=s.getPixelRatio();(i.width!==Math.round(I*wt)||i.height!==Math.round(H*wt))&&s.setSize(I,H,!1),s.render(a,o),t.onTime?.(g)}function F(I){if(b=0,y||!S||c){x=0;return}let H=x?Math.min(.1,(I-x)/1e3):0;if(x=I,H&&t.onFrame?.(H),g>=f[1])if(E+=H,d)E>1.2&&(E=0,g=f[0]);else{X(!1),m=!0,t.onEnd?.(),P();return}else g=Math.min(f[1],g+H*v);P(),b=requestAnimationFrame(F)}let z=()=>{!b&&S&&!c&&!y&&(x=0,b=requestAnimationFrame(F))};function X(I){S!==I&&(S=I,t.onPlayState?.(I),I&&z())}let L=new ResizeObserver(()=>{(!S||c)&&P()});L.observe(i);let k={get time(){return g},get playing(){return S},get ended(){return m},get range(){return f.slice()},play(){(m||g>=f[1]-.001)&&(g=f[0],m=!1,E=0),X(!0)},pause(){X(!1)},toggle(){S?k.pause():k.play()},replay(){g=f[0],m=!1,E=0,P(),X(!0)},seek(I){g=Math.max(0,Math.min(qi,I)),m=!1,E=0,X(!1),P()},setRange(I,H,J=!1){f=[I,H],d=J},setView(I){w=I,P()},setSpeed(I){v=I},suspend(I){c=!!I,I||z()},render:P,camera:()=>R,info:()=>({calls:s.info.render.calls,triangles:s.info.render.triangles,geometries:s.info.memory.geometries,textures:s.info.memory.textures,programs:s.info.programs?.length,dpr:s.getPixelRatio(),size:[i.width,i.height]}),gl:()=>{let I=s.getContext(),H=I.getExtension("WEBGL_debug_renderer_info");return H?I.getParameter(H.UNMASKED_RENDERER_WEBGL):I.getParameter(I.RENDERER)},poses:I=>({worker:wr.pose(I),technician:Ro.pose(I),lights:cc(I)}),renderer:s,destroy(){y=!0,b&&cancelAnimationFrame(b),L.disconnect(),s.dispose()}};return t.autoplay??!0?(P(),X(!0)):P(),k}function Nv(i,{autoplay:t=!0}={}){if(i.dataset.filmMounted)return null;i.dataset.filmMounted="1";let e=i.querySelector(".home-film-stage"),n=i.querySelector("[data-film-toggle]"),s=i.querySelector("[data-film-replay]"),r=i.querySelector("[data-film-play]"),a=d=>{n.setAttribute("aria-label",d?n.dataset.labelPause:n.dataset.labelPlay),n.setAttribute("aria-pressed",String(!d)),n.classList.toggle("is-paused",!d)},o=document.createElement("canvas");o.className="home-film-canvas",o.setAttribute("role","img");let h=i.querySelector("figcaption");h?.id&&o.setAttribute("aria-labelledby",h.id),e.append(o);let l=!0,u=null,p=()=>{i.classList.add("is-live")};return u=Su(o,{autoplay:!1,loop:!1,onPlayState(d){a(d)},onEnd(){i.classList.add("is-ended"),n.hidden=!0,s.hidden=!1}}),new Promise(d=>{let g=()=>{o.clientWidth>0&&o.clientHeight>0?(u.render(),requestAnimationFrame(()=>requestAnimationFrame(d))):requestAnimationFrame(g)};g()}).then(()=>{p(),r&&(r.hidden=!0),n.hidden=!1,t?u.play():a(!1)}),n.addEventListener("click",()=>{u.toggle(),u.playing&&u.suspend(!l||document.hidden)}),s.addEventListener("click",()=>{i.classList.remove("is-ended"),s.hidden=!0,n.hidden=!1,u.replay(),n.focus({preventScroll:!0})}),"IntersectionObserver"in window&&new IntersectionObserver(d=>{for(let g of d)l=g.isIntersecting,u.suspend(!l)},{threshold:.15}).observe(i),document.addEventListener("visibilitychange",()=>u.suspend(document.hidden||!l)),i.filmPlayer=u,{film:u,FILM:Mu}}export{Nv as mount};
