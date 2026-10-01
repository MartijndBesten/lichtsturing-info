var kc=0,ll=1,Vc=2;var ki=1,Gc=2,vs=3,Si=0,on=1,un=2,Hn=0,Ms=1,bi=2,cl=3,hl=4,Hc=5;var Vi=100,Wc=101,Xc=102,qc=103,Yc=104,Zc=200,Jc=201,$c=202,Kc=203,ul=204,dl=205,Qc=206,jc=207,th=208,eh=209,nh=210,ih=211,sh=212,rh=213,ah=214,Zr=0,Jr=1,$r=2,ls=3,Kr=4,Qr=5,jr=6,ta=7,fl=0,oh=1,lh=2,In=0,pl=1,ml=2,gl=3,ar=4,_l=5,or=6,Ss=7;var xl=300,wi=301,Gi=302,Ta=303,Ea=304,lr=306,Bi=1e3,zn=1001,ea=1002,Ze=1003,ch=1004;var cr=1005;var Ke=1006,Aa=1007;var Ti=1008;var dn=1009,yl=1010,vl=1011,bs=1012,Ra=1013,Pn=1014,Ln=1015,Dn=1016,Ca=1017,Ia=1018,ws=1020,Ml=35902,Sl=35899,bl=1021,wl=1022,Mn=1023,kn=1026,Ei=1027,Tl=1028,Pa=1029,Ai=1030,La=1031;var Da=1033,hr=33776,ur=33777,dr=33778,fr=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Va=37488,Ga=37489,pr=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,$a=37814,Ka=37815,Qa=37816,ja=37817,to=37818,eo=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,mr=36285,co=36286;var Vs=2300,na=2301,qr=2302,jo=2303,tl=2400,el=2401,nl=2402;var hh=3200;var ho=0,uh=1,ni="",qe="srgb",Gs="srgb-linear",Hs="linear",fe="srgb";var Yr=7680;var dh=519,fh=512,ph=513,mh=514,uo=515,gh=516,_h=517,fo=518,xh=519,yh=35044;var El="300 es",Cn=2e3,cs=2001;function Ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Cu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vh(){let i=Ws("canvas");return i.style.display="block",i}var yc={},hs=null;function Al(...i){let t="THREE."+i.shift();hs?hs("log",t,...i):console.log(t,...i)}function Mh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Mh(i);let t="THREE."+i.shift();if(hs)hs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Mh(i);let t="THREE."+i.shift();if(hs)hs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){let t=i.join(" ");t in yc||(yc[t]=!0,Wt(...i))}function Sh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var bh={[Zr]:Jr,[$r]:jr,[Kr]:ta,[ls]:Qr,[Jr]:Zr,[jr]:$r,[ta]:Kr,[Qr]:ls},Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Io=Math.PI/180,Xs=180/Math.PI;function gr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Iu(i,t){return(i%t+t)%t}function Po(i,t,e){return(1-e)*i+e*t}function Fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ll=class Ll{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ll.prototype.isVector2=!0;var Qt=Ll,Gn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],f=r[a+0],u=r[a+1],_=r[a+2],S=r[a+3];if(p!==S||h!==f||l!==u||d!==_){let m=h*f+l*u+d*_+p*S;m<0&&(f=-f,u=-u,_=-_,S=-S,m=-m);let c=1-o;if(m<.9995){let v=Math.acos(m),A=Math.sin(v);c=Math.sin(c*v)/A,o=Math.sin(o*v)/A,h=h*c+f*o,l=l*c+u*o,d=d*c+_*o,p=p*c+S*o}else{h=h*c+f*o,l=l*c+u*o,d=d*c+_*o,p=p*c+S*o;let v=1/Math.sqrt(h*h+l*l+d*d+p*p);h*=v,l*=v,d*=v,p*=v}}t[e]=h,t[e+1]=l,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],h=n[s+1],l=n[s+2],d=n[s+3],p=r[a],f=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+d*p+h*u-l*f,t[e+1]=h*_+d*f+l*p-o*u,t[e+2]=l*_+d*u+o*f-h*p,t[e+3]=d*_-o*p-h*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),d=o(s/2),p=o(r/2),f=h(n/2),u=h(s/2),_=h(r/2);switch(a){case"XYZ":this._x=f*d*p+l*u*_,this._y=l*u*p-f*d*_,this._z=l*d*_+f*u*p,this._w=l*d*p-f*u*_;break;case"YXZ":this._x=f*d*p+l*u*_,this._y=l*u*p-f*d*_,this._z=l*d*_-f*u*p,this._w=l*d*p+f*u*_;break;case"ZXY":this._x=f*d*p-l*u*_,this._y=l*u*p+f*d*_,this._z=l*d*_+f*u*p,this._w=l*d*p-f*u*_;break;case"ZYX":this._x=f*d*p-l*u*_,this._y=l*u*p+f*d*_,this._z=l*d*_-f*u*p,this._w=l*d*p+f*u*_;break;case"YZX":this._x=f*d*p+l*u*_,this._y=l*u*p+f*d*_,this._z=l*d*_-f*u*p,this._w=l*d*p-f*u*_;break;case"XZY":this._x=f*d*p-l*u*_,this._y=l*u*p-f*d*_,this._z=l*d*_+f*u*p,this._w=l*d*p+f*u*_;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],d=e[6],p=e[10],f=n+o+p;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(d-h)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>p){let u=2*Math.sqrt(1+n-o-p);this._w=(d-h)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>p){let u=2*Math.sqrt(1+o-n-p);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(h+d)/u}else{let u=2*Math.sqrt(1+p-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(h+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,d=e._w;return this._x=n*d+a*o+s*l-r*h,this._y=s*d+a*h+r*o-n*l,this._z=r*d+a*l+n*h-s*o,this._w=a*d-n*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let h=1-e;if(o<.9995){let l=Math.acos(o),d=Math.sin(l);h=Math.sin(h*l)/d,e=Math.sin(e*l)/d,this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this._onChangeCallback()}else this._x=this._x*h+n*e,this._y=this._y*h+s*e,this._z=this._z*h+r*e,this._w=this._w*h+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Dl=class Dl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*n),d=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+h*l+a*p-o*d,this.y=n+h*d+o*l-r*p,this.z=s+h*p+r*d-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dl.prototype.isVector3=!0;var G=Dl,Lo=new G,vc=new Gn,Ul=class Ul{constructor(t,e,n,s,r,a,o,h,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l)}set(t,e,n,s,r,a,o,h,l){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=h,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],d=n[4],p=n[7],f=n[2],u=n[5],_=n[8],S=s[0],m=s[3],c=s[6],v=s[1],A=s[4],x=s[7],b=s[2],w=s[5],C=s[8];return r[0]=a*S+o*v+h*b,r[3]=a*m+o*A+h*w,r[6]=a*c+o*x+h*C,r[1]=l*S+d*v+p*b,r[4]=l*m+d*A+p*w,r[7]=l*c+d*x+p*C,r[2]=f*S+u*v+_*b,r[5]=f*m+u*A+_*w,r[8]=f*c+u*x+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8];return e*a*d-e*o*l-n*r*d+n*o*h+s*r*l-s*a*h}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8],p=d*a-o*l,f=o*h-d*r,u=l*r-a*h,_=e*p+n*f+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=p*S,t[1]=(s*l-d*n)*S,t[2]=(o*n-s*a)*S,t[3]=f*S,t[4]=(d*e-s*h)*S,t[5]=(s*r-o*e)*S,t[6]=u*S,t[7]=(n*h-l*e)*S,t[8]=(a*e-n*r)*S,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Do.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ul.prototype.isMatrix3=!0;var $t=Ul,Do=new $t,Mc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pu(){let i={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===fe&&(s.r=ti(s.r),s.g=ti(s.g),s.b=ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?Hs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gs]:{primaries:t,whitePoint:n,transfer:Hs,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:Mc,fromXYZ:Sc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}}),i}var oe=Pu();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=Ws("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ws("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ti(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ti(e[n]/255)*255):e[n]=ti(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Lu=0,us=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var Du=0,No=new G,rn=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=zn,s=zn,r=Ke,a=Ti,o=Mn,h=dn,l=i.DEFAULT_ANISOTROPY,d=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=gr(),this.name="",this.source=new us(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bi:t.x=t.x-Math.floor(t.x);break;case zn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bi:t.y=t.y-Math.floor(t.y);break;case zn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=xl;rn.DEFAULT_ANISOTROPY=1;var Nl=class Nl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,h=t.elements,l=h[0],d=h[4],p=h[8],f=h[1],u=h[5],_=h[9],S=h[2],m=h[6],c=h[10];if(Math.abs(d-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+m)<.1&&Math.abs(l+u+c-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,x=(u+1)/2,b=(c+1)/2,w=(d+f)/4,C=(p+S)/4,y=(_+m)/4;return A>x&&A>b?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=w/n,r=C/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=y/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-_)*(m-_)+(p-S)*(p-S)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(p-S)/v,this.z=(f-d)/v,this.w=Math.acos((l+u+c-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nl.prototype.isVector4=!0;var Ee=Nl,sa=class extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new rn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new us(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},qs=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var wa=class wa{constructor(t,e,n,s,r,a,o,h,l,d,p,f,u,_,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l,d,p,f,u,_,S,m)}set(t,e,n,s,r,a,o,h,l,d,p,f,u,_,S,m){let c=this.elements;return c[0]=t,c[4]=e,c[8]=n,c[12]=s,c[1]=r,c[5]=a,c[9]=o,c[13]=h,c[2]=l,c[6]=d,c[10]=p,c[14]=f,c[3]=u,c[7]=_,c[11]=S,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let f=a*d,u=a*p,_=o*d,S=o*p;e[0]=h*d,e[4]=-h*p,e[8]=l,e[1]=u+_*l,e[5]=f-S*l,e[9]=-o*h,e[2]=S-f*l,e[6]=_+u*l,e[10]=a*h}else if(t.order==="YXZ"){let f=h*d,u=h*p,_=l*d,S=l*p;e[0]=f+S*o,e[4]=_*o-u,e[8]=a*l,e[1]=a*p,e[5]=a*d,e[9]=-o,e[2]=u*o-_,e[6]=S+f*o,e[10]=a*h}else if(t.order==="ZXY"){let f=h*d,u=h*p,_=l*d,S=l*p;e[0]=f-S*o,e[4]=-a*p,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*d,e[9]=S-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){let f=a*d,u=a*p,_=o*d,S=o*p;e[0]=h*d,e[4]=_*l-u,e[8]=f*l+S,e[1]=h*p,e[5]=S*l+f,e[9]=u*l-_,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){let f=a*h,u=a*l,_=o*h,S=o*l;e[0]=h*d,e[4]=S-f*p,e[8]=_*p+u,e[1]=p,e[5]=a*d,e[9]=-o*d,e[2]=-l*d,e[6]=u*p+_,e[10]=f-S*p}else if(t.order==="XZY"){let f=a*h,u=a*l,_=o*h,S=o*l;e[0]=h*d,e[4]=-p,e[8]=l*d,e[1]=f*p+S,e[5]=a*d,e[9]=u*p-_,e[2]=_*p-u,e[6]=o*d,e[10]=S*p+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Uu,t,Nu)}lookAt(t,e,n){let s=this.elements;return pn.subVectors(t,e),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),ci.crossVectors(n,pn),ci.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),ci.crossVectors(n,pn)),ci.normalize(),Ar.crossVectors(pn,ci),s[0]=ci.x,s[4]=Ar.x,s[8]=pn.x,s[1]=ci.y,s[5]=Ar.y,s[9]=pn.y,s[2]=ci.z,s[6]=Ar.z,s[10]=pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],d=n[1],p=n[5],f=n[9],u=n[13],_=n[2],S=n[6],m=n[10],c=n[14],v=n[3],A=n[7],x=n[11],b=n[15],w=s[0],C=s[4],y=s[8],E=s[12],P=s[1],N=s[5],O=s[9],D=s[13],I=s[2],z=s[6],L=s[10],Y=s[14],j=s[3],J=s[7],it=s[11],Q=s[15];return r[0]=a*w+o*P+h*I+l*j,r[4]=a*C+o*N+h*z+l*J,r[8]=a*y+o*O+h*L+l*it,r[12]=a*E+o*D+h*Y+l*Q,r[1]=d*w+p*P+f*I+u*j,r[5]=d*C+p*N+f*z+u*J,r[9]=d*y+p*O+f*L+u*it,r[13]=d*E+p*D+f*Y+u*Q,r[2]=_*w+S*P+m*I+c*j,r[6]=_*C+S*N+m*z+c*J,r[10]=_*y+S*O+m*L+c*it,r[14]=_*E+S*D+m*Y+c*Q,r[3]=v*w+A*P+x*I+b*j,r[7]=v*C+A*N+x*z+b*J,r[11]=v*y+A*O+x*L+b*it,r[15]=v*E+A*D+x*Y+b*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],d=t[2],p=t[6],f=t[10],u=t[14],_=t[3],S=t[7],m=t[11],c=t[15],v=h*u-l*f,A=o*u-l*p,x=o*f-h*p,b=a*u-l*d,w=a*f-h*d,C=a*p-o*d;return e*(S*v-m*A+c*x)-n*(_*v-m*b+c*w)+s*(_*A-S*b+c*C)-r*(_*x-S*w+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],h=t[2],l=t[6],d=t[10];return e*(a*d-o*l)-n*(r*d-o*h)+s*(r*l-a*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],d=t[8],p=t[9],f=t[10],u=t[11],_=t[12],S=t[13],m=t[14],c=t[15],v=e*o-n*a,A=e*h-s*a,x=e*l-r*a,b=n*h-s*o,w=n*l-r*o,C=s*l-r*h,y=d*S-p*_,E=d*m-f*_,P=d*c-u*_,N=p*m-f*S,O=p*c-u*S,D=f*c-u*m,I=v*D-A*O+x*N+b*P-w*E+C*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(o*D-h*O+l*N)*z,t[1]=(s*O-n*D-r*N)*z,t[2]=(S*C-m*w+c*b)*z,t[3]=(f*w-p*C-u*b)*z,t[4]=(h*P-a*D-l*E)*z,t[5]=(e*D-s*P+r*E)*z,t[6]=(m*x-_*C-c*A)*z,t[7]=(d*C-f*x+u*A)*z,t[8]=(a*O-o*P+l*y)*z,t[9]=(n*P-e*O-r*y)*z,t[10]=(_*w-S*x+c*v)*z,t[11]=(p*x-d*w-u*v)*z,t[12]=(o*E-a*N-h*y)*z,t[13]=(e*N-n*E+s*y)*z,t[14]=(S*A-_*b-m*v)*z,t[15]=(d*b-p*A+f*v)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-s*h,l*h+s*o,0,l*o+s*h,d*o+n,d*h-s*a,0,l*h-s*o,d*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,d=a+a,p=o+o,f=r*l,u=r*d,_=r*p,S=a*d,m=a*p,c=o*p,v=h*l,A=h*d,x=h*p,b=n.x,w=n.y,C=n.z;return s[0]=(1-(S+c))*b,s[1]=(u+x)*b,s[2]=(_-A)*b,s[3]=0,s[4]=(u-x)*w,s[5]=(1-(f+c))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(_+A)*C,s[9]=(m-v)*C,s[10]=(1-(f+S))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),h=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);let l=1/a,d=1/o,p=1/h;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=d,Tn.elements[5]*=d,Tn.elements[6]*=d,Tn.elements[8]*=p,Tn.elements[9]*=p,Tn.elements[10]*=p,e.setFromRotationMatrix(Tn),n.x=a,n.y=o,n.z=h,this}makePerspective(t,e,n,s,r,a,o=Cn,h=!1){let l=this.elements,d=2*r/(e-t),p=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),_,S;if(h)_=r/(a-r),S=a*r/(a-r);else if(o===Cn)_=-(a+r)/(a-r),S=-2*a*r/(a-r);else if(o===cs)_=-a/(a-r),S=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Cn,h=!1){let l=this.elements,d=2/(e-t),p=2/(n-s),f=-(e+t)/(e-t),u=-(n+s)/(n-s),_,S;if(h)_=1/(a-r),S=a/(a-r);else if(o===Cn)_=-2/(a-r),S=-(a+r)/(a-r);else if(o===cs)_=-1/(a-r),S=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=p,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};wa.prototype.isMatrix4=!0;var we=wa,Ji=new G,Tn=new we,Uu=new G(0,0,0),Nu=new G(1,1,1),ci=new G,Ar=new G,pn=new G,bc=new we,wc=new Gn,ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],d=s[9],p=s[2],f=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,u),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wc.setFromEuler(this),this.setFromQuaternion(wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var Ys=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Fu=0,Tc=new G,$i=new Gn,Jn=new we,Rr=new G,Os=new G,Ou=new G,Bu=new Gn,Ec=new G(1,0,0),Ac=new G(0,1,0),Rc=new G(0,0,1),Cc={type:"added"},zu={type:"removed"},Ki={type:"childadded",child:null},Fo={type:"childremoved",child:null},Je=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new ei,n=new Gn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new $t}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Ec,t)}rotateY(t){return this.rotateOnAxis(Ac,t)}rotateZ(t){return this.rotateOnAxis(Rc,t)}translateOnAxis(t,e){return Tc.copy(t).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ec,t)}translateY(t){return this.translateOnAxis(Ac,t)}translateZ(t){return this.translateOnAxis(Rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Os,Rr,this.up):Jn.lookAt(Rr,Os,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Jn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,t,Ou),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Os,Bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let h=o.shapes;if(Array.isArray(h))for(let l=0,d=h.length;l<d;l++){let p=h[l];r(t.shapes,p)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){let o=a(t.geometries),h=a(t.materials),l=a(t.textures),d=a(t.images),p=a(t.shapes),f=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let h=[];for(let l in o){let d=o[l];delete d.metadata,h.push(d)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Je.DEFAULT_UP=new G(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},ku={type:"move"},ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let S of t.hand.values()){let m=e.getJointPose(S,n),c=this._getHandJoint(l,S);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=d.position.distanceTo(p.position),u=.02,_=.005;l.inputState.pinching&&f>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ku)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Rt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=Iu(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oo(a,r,t+1/3),this.g=Oo(a,r,t),this.b=Oo(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=qe){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){let n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ti(t.r),this.g=ti(t.g),this.b=ti(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return oe.workingToColorSpace(en.copy(this),t),Math.round(re(en.r*255,0,255))*65536+Math.round(re(en.g*255,0,255))*256+Math.round(re(en.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),h,l,d=(o+a)/2;if(o===a)h=0,l=0;else{let p=a-o;switch(l=d<=.5?p/(a+o):p/(2-a-o),a){case n:h=(s-r)/p+(s<r?6:0);break;case s:h=(r-n)/p+2;break;case r:h=(n-s)/p+4;break}h/=6}return t.h=h,t.s=l,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=qe){oe.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Cr);let n=Po(hi.h,Cr.h,e),s=Po(hi.s,Cr.s,e),r=Po(hi.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Rt;Rt.NAMES=wh;var Zs=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},En=new G,$n=new G,Bo=new G,Kn=new G,Qi=new G,ji=new G,Ic=new G,zo=new G,ko=new G,Vo=new G,Go=new Ee,Ho=new Ee,Wo=new Ee,pi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),$n.subVectors(n,e),Bo.subVectors(t,e);let a=En.dot(En),o=En.dot($n),h=En.dot(Bo),l=$n.dot($n),d=$n.dot(Bo),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let f=1/p,u=(l*h-o*d)*f,_=(a*d-o*h)*f;return r.set(1-u-_,_,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Kn.x),h.addScaledVector(a,Kn.y),h.addScaledVector(o,Kn.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return Go.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),$n.subVectors(t,e),En.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ji.subVectors(r,n),zo.subVectors(t,n);let h=Qi.dot(zo),l=ji.dot(zo);if(h<=0&&l<=0)return e.copy(n);ko.subVectors(t,s);let d=Qi.dot(ko),p=ji.dot(ko);if(d>=0&&p<=d)return e.copy(s);let f=h*p-d*l;if(f<=0&&h>=0&&d<=0)return a=h/(h-d),e.copy(n).addScaledVector(Qi,a);Vo.subVectors(t,r);let u=Qi.dot(Vo),_=ji.dot(Vo);if(_>=0&&u<=_)return e.copy(r);let S=u*l-h*_;if(S<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(ji,o);let m=d*_-u*p;if(m<=0&&p-d>=0&&u-_>=0)return Ic.subVectors(r,s),o=(p-d)/(p-d+(u-_)),e.copy(s).addScaledVector(Ic,o);let c=1/(m+S+f);return a=S*c,o=f*c,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mi=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Pr.subVectors(this.max,Bs),ts.subVectors(t.a,Bs),es.subVectors(t.b,Bs),ns.subVectors(t.c,Bs),ui.subVectors(es,ts),di.subVectors(ns,es),Di.subVectors(ts,ns);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Di.z,Di.y,ui.z,0,-ui.x,di.z,0,-di.x,Di.z,0,-Di.x,-ui.y,ui.x,0,-di.y,di.x,0,-Di.y,Di.x,0];return!Xo(e,ts,es,ns,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,ts,es,ns,Pr))?!1:(Lr.crossVectors(ui,di),e=[Lr.x,Lr.y,Lr.z],Xo(e,ts,es,ns,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new G,new G,new G,new G,new G,new G,new G,new G],An=new G,Ir=new mi,ts=new G,es=new G,ns=new G,ui=new G,di=new G,Di=new G,Bs=new G,Pr=new G,Lr=new G,Ui=new G;function Xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ui.fromArray(i,r);let o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),h=t.dot(Ui),l=e.dot(Ui),d=n.dot(Ui);if(Math.max(-Math.max(h,l,d),Math.min(h,l,d))>o)return!1}return!0}var Fe=new G,Dr=new Qt,Vu=0,cn=class extends Vn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vu++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ln(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),n=ln(n,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Js=class extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $s=class extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var he=class extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Gu=new mi,zs=new G,qo=new G,fs=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(qo)),this.expandByPoint(zs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hu=0,vn=new we,Yo=new Je,is=new G,mn=new mi,ks=new mi,Xe=new G,Qe=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?$s:Js)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new he(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(mn.min,ks.min),mn.expandByPoint(Xe),Xe.addVectors(mn.max,ks.max),mn.expandByPoint(Xe)):(mn.expandByPoint(ks.min),mn.expandByPoint(ks.max))}mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],h=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Xe.fromBufferAttribute(o,l),h&&(is.fromBufferAttribute(t,l),Xe.add(is)),s=Math.max(s,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new cn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],h=[];for(let y=0;y<n.count;y++)o[y]=new G,h[y]=new G;let l=new G,d=new G,p=new G,f=new Qt,u=new Qt,_=new Qt,S=new G,m=new G;function c(y,E,P){l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,E),p.fromBufferAttribute(n,P),f.fromBufferAttribute(r,y),u.fromBufferAttribute(r,E),_.fromBufferAttribute(r,P),d.sub(l),p.sub(l),u.sub(f),_.sub(f);let N=1/(u.x*_.y-_.x*u.y);isFinite(N)&&(S.copy(d).multiplyScalar(_.y).addScaledVector(p,-u.y).multiplyScalar(N),m.copy(p).multiplyScalar(u.x).addScaledVector(d,-_.x).multiplyScalar(N),o[y].add(S),o[E].add(S),o[P].add(S),h[y].add(m),h[E].add(m),h[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){let P=v[y],N=P.start,O=P.count;for(let D=N,I=N+O;D<I;D+=3)c(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let A=new G,x=new G,b=new G,w=new G;function C(y){b.fromBufferAttribute(s,y),w.copy(b);let E=o[y];A.copy(E),A.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(w,E);let N=x.dot(h[y])<0?-1:1;a.setXYZW(y,A.x,A.y,A.z,N)}for(let y=0,E=v.length;y<E;++y){let P=v[y],N=P.start,O=P.count;for(let D=N,I=N+O;D<I;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new G,r=new G,a=new G,o=new G,h=new G,l=new G,d=new G,p=new G;if(t)for(let f=0,u=t.count;f<u;f+=3){let _=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,S),a.fromBufferAttribute(e,m),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),o.fromBufferAttribute(n,_),h.fromBufferAttribute(n,S),l.fromBufferAttribute(n,m),o.add(d),h.add(d),l.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(S,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),p.subVectors(s,r),d.cross(p),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,h){let l=o.array,d=o.itemSize,p=o.normalized,f=new l.constructor(h.length*d),u=0,_=0;for(let S=0,m=h.length;S<m;S++){o.isInterleavedBufferAttribute?u=h[S]*o.data.stride+o.offset:u=h[S]*d;for(let c=0;c<d;c++)f[_++]=l[u++]}return new cn(f,d,p)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let h=s[o],l=t(h,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let h=[],l=r[o];for(let d=0,p=l.length;d<p;d++){let f=l[d],u=t(f,n);h.push(u)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,h=a.length;o<h;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let l=n[h];t.data.attributes[h]=l.toJSON(t.data)}let s={},r=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],d=[];for(let p=0,f=l.length;p<f;p++){let u=l[p];d.push(u.toJSON(t.data))}d.length>0&&(s[h]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let d=s[l];this.setAttribute(l,d.clone(e))}let r=t.morphAttributes;for(let l in r){let d=[],p=r[l];for(let f=0,u=p.length;f<u;f++)d.push(p[f].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,d=a.length;l<d;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=new G,Wu=new G,Xu=new $t,Rn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zo.subVectors(n,e).cross(Wu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Xu.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qu=0,gi=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=gr(),this.name="",this.type="Material",this.blending=Ms,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=dl,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let h=r[o];delete h.metadata,a.push(h)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var jn=new G,Jo=new G,Ur=new G,Nr=new G,aa=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Ur.copy(e).sub(t).normalize(),Nr.copy(this.origin).sub(Jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ur),o=Nr.dot(this.direction),h=-Nr.dot(Ur),l=Nr.lengthSq(),d=Math.abs(1-a*a),p,f,u,_;if(d>0)if(p=a*h-o,f=a*o-h,_=r*d,p>=0)if(f>=-_)if(f<=_){let S=1/d;p*=S,f*=S,u=p*(p+a*f+2*o)+f*(a*p+f+2*h)+l}else f=r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*h)+l;else f=-r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*h)+l;else f<=-_?(p=Math.max(0,-(-a*r+o)),f=p>0?-r:Math.min(Math.max(-r,-h),r),u=-p*p+f*(f+2*h)+l):f<=_?(p=0,f=Math.min(Math.max(-r,-h),r),u=f*(f+2*h)+l):(p=Math.max(0,-(a*r+o)),f=p>0?r:Math.min(Math.max(-r,-h),r),u=-p*p+f*(f+2*h)+l);else f=a>0?-r:r,p=Math.max(0,-(a*f+o)),u=-p*p+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Jo).addScaledVector(Ur,f),u}intersectSphere(t,e){if(t.radius<0)return null;jn.subVectors(t.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-f.z)*p,h=(t.max.z-f.z)*p):(o=(t.max.z-f.z)*p,h=(t.min.z-f.z)*p),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,h=o.x,l=o.y,d=o.z,p=t.x-a.x,f=t.y-a.y,u=t.z-a.z,_=e.x-a.x,S=e.y-a.y,m=e.z-a.z,c=n.x-a.x,v=n.y-a.y,A=n.z-a.z,x=Math.abs(h),b=Math.abs(l),w=Math.abs(d),C,y,E,P,N,O,D,I,z,L,Y,j;if(x>=b&&x>=w?(E=h,O=p,z=_,j=c,h>=0?(C=l,y=d,P=f,N=u,D=S,I=m,L=v,Y=A):(C=d,y=l,P=u,N=f,D=m,I=S,L=A,Y=v)):b>=w?(E=l,O=f,z=S,j=v,l>=0?(C=d,y=h,P=u,N=p,D=m,I=_,L=A,Y=c):(C=h,y=d,P=p,N=u,D=_,I=m,L=c,Y=A)):(E=d,O=u,z=m,j=A,d>=0?(C=h,y=l,P=p,N=f,D=_,I=S,L=c,Y=v):(C=l,y=h,P=f,N=p,D=S,I=_,L=v,Y=c)),E===0)return null;let J=C/E,it=y/E,Q=1/E,bt=P-J*O,xt=N-it*O,Ot=D-J*z,Kt=I-it*z,qt=L-J*j,et=Y-it*j,rt=qt*Kt-et*Ot,ft=bt*et-xt*qt,Bt=Ot*xt-Kt*bt;if(s){if(rt<0||ft<0||Bt<0)return null}else if((rt<0||ft<0||Bt<0)&&(rt>0||ft>0||Bt>0))return null;let ht=rt+ft+Bt;if(ht===0)return null;let At=Q*(rt*O+ft*z+Bt*j);return(ht>0?At<0:At>0)?null:this.at(At/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Oe=class extends gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Pc=new we,Ni=new aa,Fr=new fs,Lc=new G,Or=new G,Br=new G,zr=new G,$o=new G,kr=new G,Dc=new G,Vr=new G,Ae=class extends Je{constructor(t=new Qe,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){let d=o[h],p=r[h];d!==0&&($o.fromBufferAttribute(p,t),a?kr.addScaledVector($o,d):kr.addScaledVector($o.sub(e),d))}e.add(kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Ni.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Fr,Lc)===null||Ni.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),Ni.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let m=f[_],c=a[m.materialIndex],v=Math.max(m.start,u.start),A=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,b=A;x<b;x+=3){let w=o.getX(x),C=o.getX(x+1),y=o.getX(x+2);s=Gr(this,c,t,n,l,d,p,w,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),S=Math.min(o.count,u.start+u.count);for(let m=_,c=S;m<c;m+=3){let v=o.getX(m),A=o.getX(m+1),x=o.getX(m+2);s=Gr(this,a,t,n,l,d,p,v,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){let m=f[_],c=a[m.materialIndex],v=Math.max(m.start,u.start),A=Math.min(h.count,Math.min(m.start+m.count,u.start+u.count));for(let x=v,b=A;x<b;x+=3){let w=x,C=x+1,y=x+2;s=Gr(this,c,t,n,l,d,p,w,C,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),S=Math.min(h.count,u.start+u.count);for(let m=_,c=S;m<c;m+=3){let v=m,A=m+1,x=m+2;s=Gr(this,a,t,n,l,d,p,v,A,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Yu(i,t,e,n,s,r,a,o){let h;if(t.side===on?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===Si,o),h===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Gr(i,t,e,n,s,r,a,o,h,l){i.getVertexPosition(o,Or),i.getVertexPosition(h,Br),i.getVertexPosition(l,zr);let d=Yu(i,t,e,n,Or,Br,zr,Dc);if(d){let p=new G;pi.getBarycoord(Dc,Or,Br,zr,p),s&&(d.uv=pi.getInterpolatedAttribute(s,o,h,l,p,new Qt)),r&&(d.uv1=pi.getInterpolatedAttribute(r,o,h,l,p,new Qt)),a&&(d.normal=pi.getInterpolatedAttribute(a,o,h,l,p,new G),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:h,c:l,normal:new G,materialIndex:0};pi.getNormal(Or,Br,zr,f.normal),d.face=f,d.barycoord=p}return d}var oa=class extends rn{constructor(t=null,e=1,n=1,s,r,a,o,h,l=Ze,d=Ze,p,f){super(null,a,o,h,l,d,s,r,p,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=new fs,Zu=new Qt(.5,.5),Hr=new G,ps=class{constructor(t=new Rn,e=new Rn,n=new Rn,s=new Rn,r=new Rn,a=new Rn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],h=r[2],l=r[3],d=r[4],p=r[5],f=r[6],u=r[7],_=r[8],S=r[9],m=r[10],c=r[11],v=r[12],A=r[13],x=r[14],b=r[15];if(s[0].setComponents(l-a,u-d,c-_,b-v).normalize(),s[1].setComponents(l+a,u+d,c+_,b+v).normalize(),s[2].setComponents(l+o,u+p,c+S,b+A).normalize(),s[3].setComponents(l-o,u-p,c-S,b-A).normalize(),n)s[4].setComponents(h,f,m,x).normalize(),s[5].setComponents(l-h,u-f,c-m,b-x).normalize();else if(s[4].setComponents(l-h,u-f,c-m,b-x).normalize(),e===Cn)s[5].setComponents(l+h,u+f,c+m,b+x).normalize();else if(e===cs)s[5].setComponents(h,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=Zu.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Hr.x=s.normal.x>0?t.max.x:t.min.x,Hr.y=s.normal.y>0?t.max.y:t.min.y,Hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends rn{constructor(t=[],e=wi,n,s,r,a,o,h,l,d){super(t,e,n,s,r,a,o,h,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ms=class extends rn{constructor(t,e,n,s,r,a,o,h,l){super(t,e,n,s,r,a,o,h,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends rn{constructor(t,e,n=Pn,s,r,a,o=Ze,h=Ze,l,d=kn,p=1){if(d!==kn&&d!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:p};super(f,s,r,a,o,h,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new us(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends _i{constructor(t,e=Pn,n=wi,s,r,a=Ze,o=Ze,h,l=kn){let d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,h,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Qs=class extends rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$e=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let h=[],l=[],d=[],p=[],f=0,u=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2));function _(S,m,c,v,A,x,b,w,C,y,E){let P=x/C,N=b/y,O=x/2,D=b/2,I=w/2,z=C+1,L=y+1,Y=0,j=0,J=new G;for(let it=0;it<L;it++){let Q=it*N-D;for(let bt=0;bt<z;bt++){let xt=bt*P-O;J[S]=xt*v,J[m]=Q*A,J[c]=I,l.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[c]=w>0?1:-1,d.push(J.x,J.y,J.z),p.push(bt/C),p.push(1-it/y),Y+=1}}for(let it=0;it<y;it++)for(let Q=0;Q<C;Q++){let bt=f+Q+z*it,xt=f+Q+z*(it+1),Ot=f+(Q+1)+z*(it+1),Kt=f+(Q+1)+z*it;h.push(bt,xt,Kt),h.push(xt,Ot,Kt),j+=6}o.addGroup(u,j,E),u+=j,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Be=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:h};let l=this;s=Math.floor(s),r=Math.floor(r);let d=[],p=[],f=[],u=[],_=0,S=[],m=n/2,c=0;v(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(d),this.setAttribute("position",new he(p,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(u,2));function v(){let x=new G,b=new G,w=0,C=(e-t)/n;for(let y=0;y<=r;y++){let E=[],P=y/r,N=P*(e-t)+t;for(let O=0;O<=s;O++){let D=O/s,I=D*h+o,z=Math.sin(I),L=Math.cos(I);b.x=N*z,b.y=-P*n+m,b.z=N*L,p.push(b.x,b.y,b.z),x.set(z,C,L).normalize(),f.push(x.x,x.y,x.z),u.push(D,1-P),E.push(_++)}S.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let P=S[E][y],N=S[E+1][y],O=S[E+1][y+1],D=S[E][y+1];(t>0||E!==0)&&(d.push(P,N,D),w+=3),(e>0||E!==r-1)&&(d.push(N,O,D),w+=3)}l.addGroup(c,w,0),c+=w}function A(x){let b=_,w=new Qt,C=new G,y=0,E=x===!0?t:e,P=x===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,m*P,0),f.push(0,P,0),u.push(.5,.5),_++;let N=_;for(let O=0;O<=s;O++){let I=O/s*h+o,z=Math.cos(I),L=Math.sin(I);C.x=E*L,C.y=m*P,C.z=E*z,p.push(C.x,C.y,C.z),f.push(0,P,0),w.x=z*.5+.5,w.y=L*.5*P+.5,u.push(w.x,w.y),_++}for(let O=0;O<s;O++){let D=b+O,I=N+O;x===!0?d.push(I,I+1,D):d.push(I+1,I,D),y+=3}l.addGroup(c,y,x===!0?1:2),c+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var js=class i extends Qe{constructor(t=[new Qt(0,-.5),new Qt(.5,0),new Qt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],a=[],o=[],h=[],l=[],d=1/e,p=new G,f=new Qt,u=new G,_=new G,S=new G,m=0,c=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,c=t[v+1].y-t[v].y,u.x=c*1,u.y=-m,u.z=c*0,S.copy(u),u.normalize(),h.push(u.x,u.y,u.z);break;case t.length-1:h.push(S.x,S.y,S.z);break;default:m=t[v+1].x-t[v].x,c=t[v+1].y-t[v].y,u.x=c*1,u.y=-m,u.z=c*0,_.copy(u),u.x+=S.x,u.y+=S.y,u.z+=S.z,u.normalize(),h.push(u.x,u.y,u.z),S.copy(_)}for(let v=0;v<=e;v++){let A=n+v*d*s,x=Math.sin(A),b=Math.cos(A);for(let w=0;w<=t.length-1;w++){p.x=t[w].x*x,p.y=t[w].y,p.z=t[w].x*b,a.push(p.x,p.y,p.z),f.x=v/e,f.y=w/(t.length-1),o.push(f.x,f.y);let C=h[3*w+0]*x,y=h[3*w+1],E=h[3*w+0]*b;l.push(C,y,E)}}for(let v=0;v<e;v++)for(let A=0;A<t.length-1;A++){let x=A+v*t.length,b=x,w=x+t.length,C=x+t.length+1,y=x+1;r.push(b,w,y),r.push(C,y,w)}this.setIndex(r),this.setAttribute("position",new he(a,3)),this.setAttribute("uv",new he(o,2)),this.setAttribute("normal",new he(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var ze=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),l=o+1,d=h+1,p=t/o,f=e/h,u=[],_=[],S=[],m=[];for(let c=0;c<d;c++){let v=c*f-a;for(let A=0;A<l;A++){let x=A*p-r;_.push(x,-v,0),S.push(0,0,1),m.push(A/o),m.push(1-c/h)}}for(let c=0;c<h;c++)for(let v=0;v<o;v++){let A=v+l*c,x=v+l*(c+1),b=v+1+l*(c+1),w=v+1+l*c;u.push(A,x,w),u.push(x,b,w)}this.setIndex(u),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},gs=class i extends Qe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],h=[],l=[],d=[],p=t,f=(e-t)/s,u=new G,_=new Qt;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){let c=r+m/n*a;u.x=p*Math.cos(c),u.y=p*Math.sin(c),h.push(u.x,u.y,u.z),l.push(0,0,1),_.x=(u.x/e+1)/2,_.y=(u.y/e+1)/2,d.push(_.x,_.y)}p+=f}for(let S=0;S<s;S++){let m=S*(n+1);for(let c=0;c<n;c++){let v=c+m,A=v,x=v+n+1,b=v+n+2,w=v+1;o.push(A,x,w),o.push(x,b,w)}}this.setIndex(o),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ve=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(a+o,Math.PI),l=0,d=[],p=new G,f=new G,u=[],_=[],S=[],m=[];for(let c=0;c<=n;c++){let v=[],A=c/n,x=a+A*o,b=t*Math.cos(x),w=Math.sqrt(t*t-b*b),C=0;c===0&&a===0?C=.5/e:c===n&&h===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let E=y/e,P=s+E*r;p.x=-w*Math.cos(P),p.y=b,p.z=w*Math.sin(P),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),m.push(E+C,1-A),v.push(l++)}d.push(v)}for(let c=0;c<n;c++)for(let v=0;v<e;v++){let A=d[c][v+1],x=d[c][v],b=d[c+1][v],w=d[c+1][v+1];(c!==0||a>0)&&u.push(A,x,w),(c!==n-1||h<Math.PI)&&u.push(x,b,w)}this.setIndex(u),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(S,3)),this.setAttribute("uv",new he(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var tr=class i extends Qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let h=[],l=[],d=[],p=[],f=new G,u=new G,_=new G;for(let S=0;S<=n;S++){let m=a+S/n*o;for(let c=0;c<=s;c++){let v=c/s*r;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),l.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),_.subVectors(u,f).normalize(),d.push(_.x,_.y,_.z),p.push(c/s),p.push(S/n)}}for(let S=1;S<=n;S++)for(let m=1;m<=s;m++){let c=(s+1)*S+m-1,v=(s+1)*(S-1)+m-1,A=(s+1)*(S-1)+m,x=(s+1)*S+m;h.push(c,v,x),h.push(v,A,x)}this.setIndex(h),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(d,3)),this.setAttribute("uv",new he(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uc(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function Uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ju(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Th={clone:Hi,merge:nn},$u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Qt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new we().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ca=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},an=class extends gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},er=class extends an{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Qt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var ha=class extends gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ua=class extends gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ko(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let h=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],h=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case el:r=t,o=2*e-n;break;case nl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(h===void 0)switch(this.getSettings_().endingEnd){case el:a=t,h=2*n-e;break;case nl:a=1,h=n+s[1]-s[0];break;default:a=t-1,h=e}let l=(n-e)*.5,d=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(h-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,d=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,u=this._weightNext,_=(n-e)/(s-e),S=_*_,m=S*_,c=-f*m+2*f*S-f*_,v=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*_+1,A=(-1-u)*m+(1.5+u)*S+.5*_,x=u*m-u*S;for(let b=0;b!==o;++b)r[b]=c*a[d+b]+v*a[l+b]+A*a[h+b]+x*a[p+b];return r}},fa=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,d=(n-e)/(s-e),p=1-d;for(let f=0;f!==o;++f)r[f]=a[l+f]*p+a[h+f]*d;return r}},pa=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ma=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=t*o,l=h-o,d=this.inTangents,p=this.outTangents;if(!d||!p){let _=(n-e)/(s-e),S=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*S+a[h+m]*_;return r}let f=o*2,u=t-1;for(let _=0;_!==o;++_){let S=a[l+_],m=a[h+_],c=u*f+_*2,v=p[c],A=p[c+1],x=t*f+_*2,b=d[x],w=d[x+1],C=ju(n,e,v,b,s);r[_]=Eh(C,S,A,w,m)}return r}};function Eh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Qu(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ju(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Eh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let h=Qu(r,t,e,n,s);if(Math.abs(h)<1e-10)break;r=Math.max(0,Math.min(1,r-o/h))}return r}var _n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ss(e,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ss(t.times,Array),values:ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ko(t.settings)&&(n.settings={inTangents:ss(t.settings.inTangents,Array),outTangents:ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ma(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Vs:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case jo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ko(this.settings)&&(Nc(this.settings.inTangents,t),Nc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let h=n[o];if(typeof h=="number"&&isNaN(h)){Xt("KeyframeTrack: Time is not a valid number.",this,o,h),t=!1;break}if(a!==null&&a>h){Xt("KeyframeTrack: Out of order keys.",this,o,h,a),t=!1;break}a=h}if(s!==void 0&&Cu(s))for(let o=0,h=s.length;o!==h;++o){let l=s[o];if(isNaN(l)){Xt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let h=!1,l=t[o],d=t[o+1];if(l!==d&&(o!==1||l!==t[0]))if(s)h=!0;else{let p=o*n,f=p-n,u=p+n;for(let _=0;_!==n;++_){let S=e[p+_];if(S!==e[f+_]||S!==e[u+_]){h=!0;break}}}if(h){if(o!==a){t[a]=t[o];let p=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[p+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,h=a*n,l=0;l!==n;++l)e[h+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ko(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Nc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=na;var yi=class extends _n{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Vs;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ga.prototype.ValueTypeName="color";var _a=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="number";var xa=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,h=(n-e)/(s-e),l=t*o;for(let d=l+o;l!==d;l+=4)Gn.slerpFlat(r,0,a,l-o,a,l,h);return r}},nr=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends _n{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Vs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),h?h(d):d},this.setURLModifier=function(d){return h=d,this},this.addHandler=function(d,p){return l.push(d,p),this},this.removeHandler=function(d){let p=l.indexOf(d);return p!==-1&&l.splice(p,2),this},this.getHandler=function(d){for(let p=0,f=l.length;p<f;p+=2){let u=l[p],_=l[p+1];if(u.global&&(u.lastIndex=0),u.test(d))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ah=new va,Ma=class{constructor(t){this.manager=t!==void 0?t:Ah,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ir=class extends zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Qo=new we,Fc=new G,Oc=new G,_s=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Qo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,h=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===cs||t.reversedDepth?e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+h,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new G,Xr=new Gn,Bn=new G,sr=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Bn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new G,Bc=new Qt,zc=new Qt,Ye=class extends sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,Bc,zc),e.subVectors(zc,Bc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Io*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/l,s*=a.width/h,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},il=class extends _s{constructor(){super(new Ye(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Xs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},rr=class extends zi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new il}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},sl=class extends _s{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0}},Mi=class extends zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new sl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},xs=class extends sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,h=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},rl=class extends _s{constructor(){super(new xs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new rl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var rs=-90,as=1,Sa=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ye(rs,as,t,e);s.layers=this.layers,this.add(s);let r=new Ye(rs,as,t,e);r.layers=this.layers,this.add(r);let a=new Ye(rs,as,t,e);a.layers=this.layers,this.add(a);let o=new Ye(rs,as,t,e);o.layers=this.layers,this.add(o);let h=new Ye(rs,as,t,e);h.layers=this.layers,this.add(h);let l=new Ye(rs,as,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(let l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,h,l,d]=this.children,p=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,f,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ba=class extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Cl="\\[\\]\\.:\\/",td=new RegExp("["+Cl+"]","g"),Il="[^"+Cl+"]",ed="[^"+Cl.replace("\\.","")+"]",nd=/((?:WC+[\/:])*)/.source.replace("WC",Il),id=/(WCOD+)?/.source.replace("WCOD",ed),sd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il),rd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il),ad=new RegExp("^"+nd+id+sd+rd+"$"),od=["material","materials","bones","map"],al=class{constructor(t,e,n){let s=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(td,"")}static parseTrackName(t){let e=ad.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);od.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let h=n(o.children);if(h)return h}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===l){l=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}h=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(h=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=al;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Og=new Float32Array(1);var Fl=class Fl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Fl.prototype.isMatrix2=!0;var ol=Fl;function Pl(i,t,e,n){let s=ld(n);switch(e){case bl:return i*t;case Tl:return i*t/s.components*s.byteLength;case Pa:return i*t/s.components*s.byteLength;case Ai:return i*t*2/s.components*s.byteLength;case La:return i*t*2/s.components*s.byteLength;case wl:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case Da:return i*t*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Ba:case za:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:case pr:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mr:case co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ld(i){switch(i){case dn:case yl:return{byteLength:1,components:1};case bs:case vl:case Dn:return{byteLength:2,components:1};case Ca:case Ia:return{byteLength:2,components:4};case Pn:case Ra:case Ln:return{byteLength:4,components:1};case Ml:case Sl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Jh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gd(i){let t=new WeakMap;function e(o,h){let l=o.array,d=o.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,d),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,h,l){let d=h.array,p=h.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,d);else{p.sort((u,_)=>u.start-_.start);let f=0;for(let u=1;u<p.length;u++){let _=p[f],S=p[u];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let u=0,_=p.length;u<_;u++){let S=p[u];i.bufferSubData(l,S.start*d.BYTES_PER_ELEMENT,d,S.start,S.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}var _d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Td=`#ifdef USE_BATCHING
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
#endif`,Ed=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Id=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rf=`#ifdef USE_GRADIENTMAP
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
}`,af=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hf=`#ifdef USE_ENVMAP
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
#endif`,uf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mf=`PhysicalMaterial material;
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
#endif`,gf=`uniform sampler2D dfgLUT;
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
}`,_f=`
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Mf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rf=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Uf=`#ifdef USE_MORPHTARGETS
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
#endif`,Nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Of=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vf=`#ifdef USE_NORMALMAP
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
#endif`,Gf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ip=`float getShadowMask() {
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
}`,sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,fp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Tp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Fp=`#define MATCAP
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define NORMAL
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
}`,zp=`#define NORMAL
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
}`,kp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define STANDARD
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
}`,Wp=`#define TOON
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
}`,Xp=`#define TOON
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
}`,qp=`uniform float size;
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
}`,Yp=`uniform vec3 diffuse;
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
}`,Zp=`#include <common>
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
}`,Jp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,ne={alphahash_fragment:_d,alphahash_pars_fragment:xd,alphamap_fragment:yd,alphamap_pars_fragment:vd,alphatest_fragment:Md,alphatest_pars_fragment:Sd,aomap_fragment:bd,aomap_pars_fragment:wd,batching_pars_vertex:Td,batching_vertex:Ed,begin_vertex:Ad,beginnormal_vertex:Rd,bsdfs:Cd,iridescence_fragment:Id,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Ld,clipping_planes_pars_fragment:Dd,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Nd,color_fragment:Fd,color_pars_fragment:Od,color_pars_vertex:Bd,color_vertex:zd,common:kd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:Gd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Wd,emissivemap_fragment:Xd,emissivemap_pars_fragment:qd,colorspace_fragment:Yd,colorspace_pars_fragment:Zd,envmap_fragment:Jd,envmap_common_pars_fragment:$d,envmap_pars_fragment:Kd,envmap_pars_vertex:Qd,envmap_physical_pars_fragment:hf,envmap_vertex:jd,fog_vertex:tf,fog_pars_vertex:ef,fog_fragment:nf,fog_pars_fragment:sf,gradientmap_pars_fragment:rf,lightmap_pars_fragment:af,lights_lambert_fragment:of,lights_lambert_pars_fragment:lf,lights_pars_begin:cf,lights_toon_fragment:uf,lights_toon_pars_fragment:df,lights_phong_fragment:ff,lights_phong_pars_fragment:pf,lights_physical_fragment:mf,lights_physical_pars_fragment:gf,lights_fragment_begin:_f,lights_fragment_maps:xf,lights_fragment_end:yf,lightprobes_pars_fragment:vf,logdepthbuf_fragment:Mf,logdepthbuf_pars_fragment:Sf,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:wf,map_fragment:Tf,map_pars_fragment:Ef,map_particle_fragment:Af,map_particle_pars_fragment:Rf,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:If,morphinstance_vertex:Pf,morphcolor_vertex:Lf,morphnormal_vertex:Df,morphtarget_pars_vertex:Uf,morphtarget_vertex:Nf,normal_fragment_begin:Ff,normal_fragment_maps:Of,normal_pars_fragment:Bf,normal_pars_vertex:zf,normal_vertex:kf,normalmap_pars_fragment:Vf,clearcoat_normal_fragment_begin:Gf,clearcoat_normal_fragment_maps:Hf,clearcoat_pars_fragment:Wf,iridescence_pars_fragment:Xf,opaque_fragment:qf,packing:Yf,premultiplied_alpha_fragment:Zf,project_vertex:Jf,dithering_fragment:$f,dithering_pars_fragment:Kf,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:jf,shadowmap_pars_fragment:tp,shadowmap_pars_vertex:ep,shadowmap_vertex:np,shadowmask_pars_fragment:ip,skinbase_vertex:sp,skinning_pars_vertex:rp,skinning_vertex:ap,skinnormal_vertex:op,specularmap_fragment:lp,specularmap_pars_fragment:cp,tonemapping_fragment:hp,tonemapping_pars_fragment:up,transmission_fragment:dp,transmission_pars_fragment:fp,uv_pars_fragment:pp,uv_pars_vertex:mp,uv_vertex:gp,worldpos_vertex:_p,background_vert:xp,background_frag:yp,backgroundCube_vert:vp,backgroundCube_frag:Mp,cube_vert:Sp,cube_frag:bp,depth_vert:wp,depth_frag:Tp,distance_vert:Ep,distance_frag:Ap,equirect_vert:Rp,equirect_frag:Cp,linedashed_vert:Ip,linedashed_frag:Pp,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Fp,meshmatcap_frag:Op,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Hp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Zp,shadow_frag:Jp,sprite_vert:$p,sprite_frag:Kp},yt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:nn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:nn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:nn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:nn([yt.points,yt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:nn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:nn([yt.common,yt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:nn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:nn([yt.sprite,yt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:nn([yt.common,yt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:nn([yt.lights,yt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var po={r:0,b:0,g:0},Qp=new we,$h=new $t;$h.set(-1,0,0,0,1,0,0,0,1);function jp(i,t,e,n,s,r){let a=new Rt(0),o=s===!0?0:1,h,l,d=null,p=0,f=null;function u(v){let A=v.isScene===!0?v.background:null;if(A&&A.isTexture){let x=v.backgroundBlurriness>0;A=t.get(A,x)}return A}function _(v){let A=!1,x=u(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),A=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(v,A){let x=u(A);x&&(x.isCubeTexture||x.mapping===lr)?(l===void 0&&(l=new Ae(new $e(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Hi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(A.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply($h),l.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,(d!==x||p!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Ae(new ze(2,2),new gn({name:"BackgroundMaterial",uniforms:Hi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=oe.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||p!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,p=x.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null))}function m(v,A){v.getRGB(po,Rl(i)),e.buffers.color.setClear(po.r,po.g,po.b,A,r)}function c(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,A=1){a.set(v),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:_,addToRenderList:S,dispose:c}}function tm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(N,O,D,I,z){let L=!1,Y=p(N,I,D,O);r!==Y&&(r=Y,l(r.object)),L=u(N,I,D,z),L&&_(N,I,D,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(L||a)&&(a=!1,x(N,O,D,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.createVertexArray()}function l(N){return i.bindVertexArray(N)}function d(N){return i.deleteVertexArray(N)}function p(N,O,D,I){let z=I.wireframe===!0,L=n[O.id];L===void 0&&(L={},n[O.id]=L);let Y=N.isInstancedMesh===!0?N.id:0,j=L[Y];j===void 0&&(j={},L[Y]=j);let J=j[D.id];J===void 0&&(J={},j[D.id]=J);let it=J[z];return it===void 0&&(it=f(h()),J[z]=it),it}function f(N){let O=[],D=[],I=[];for(let z=0;z<e;z++)O[z]=0,D[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:D,attributeDivisors:I,object:N,attributes:{},index:null}}function u(N,O,D,I){let z=r.attributes,L=O.attributes,Y=0,j=D.getAttributes();for(let J in j)if(j[J].location>=0){let Q=z[J],bt=L[J];if(bt===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(bt=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(bt=N.instanceColor)),Q===void 0||Q.attribute!==bt||bt&&Q.data!==bt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==I}function _(N,O,D,I){let z={},L=O.attributes,Y=0,j=D.getAttributes();for(let J in j)if(j[J].location>=0){let Q=L[J];Q===void 0&&(J==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),J==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor));let bt={};bt.attribute=Q,Q&&Q.data&&(bt.data=Q.data),z[J]=bt,Y++}r.attributes=z,r.attributesNum=Y,r.index=I}function S(){let N=r.newAttributes;for(let O=0,D=N.length;O<D;O++)N[O]=0}function m(N){c(N,0)}function c(N,O){let D=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;D[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),z[N]!==O&&(i.vertexAttribDivisor(N,O),z[N]=O)}function v(){let N=r.newAttributes,O=r.enabledAttributes;for(let D=0,I=O.length;D<I;D++)O[D]!==N[D]&&(i.disableVertexAttribArray(D),O[D]=0)}function A(N,O,D,I,z,L,Y){Y===!0?i.vertexAttribIPointer(N,O,D,z,L):i.vertexAttribPointer(N,O,D,I,z,L)}function x(N,O,D,I){S();let z=I.attributes,L=D.getAttributes(),Y=O.defaultAttributeValues;for(let j in L){let J=L[j];if(J.location>=0){let it=z[j];if(it===void 0&&(j==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),j==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),it!==void 0){let Q=it.normalized,bt=it.itemSize,xt=t.get(it);if(xt===void 0)continue;let Ot=xt.buffer,Kt=xt.type,qt=xt.bytesPerElement,et=Kt===i.INT||Kt===i.UNSIGNED_INT||it.gpuType===Ra;if(it.isInterleavedBufferAttribute){let rt=it.data,ft=rt.stride,Bt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let ht=0;ht<J.locationSize;ht++)c(J.location+ht,rt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let ht=0;ht<J.locationSize;ht++)m(J.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let ht=0;ht<J.locationSize;ht++)A(J.location+ht,bt/J.locationSize,Kt,Q,ft*qt,(Bt+bt/J.locationSize*ht)*qt,et)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<J.locationSize;rt++)c(J.location+rt,it.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<J.locationSize;rt++)m(J.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let rt=0;rt<J.locationSize;rt++)A(J.location+rt,bt/J.locationSize,Kt,Q,bt*qt,bt/J.locationSize*rt*qt,et)}}else if(Y!==void 0){let Q=Y[j];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(J.location,Q);break;case 3:i.vertexAttrib3fv(J.location,Q);break;case 4:i.vertexAttrib4fv(J.location,Q);break;default:i.vertexAttrib1fv(J.location,Q)}}}}v()}function b(){E();for(let N in n){let O=n[N];for(let D in O){let I=O[D];for(let z in I){let L=I[z];for(let Y in L)d(L[Y].object),delete L[Y];delete I[z]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let D in O){let I=O[D];for(let z in I){let L=I[z];for(let Y in L)d(L[Y].object),delete L[Y];delete I[z]}}delete n[N.id]}function C(N){for(let O in n){let D=n[O];for(let I in D){let z=D[I];if(z[N.id]===void 0)continue;let L=z[N.id];for(let Y in L)d(L[Y].object),delete L[Y];delete z[N.id]}}}function y(N){for(let O in n){let D=n[O],I=N.isInstancedMesh===!0?N.id:0,z=D[I];if(z!==void 0){for(let L in z){let Y=z[L];for(let j in Y)d(Y[j].object),delete Y[j];delete z[L]}delete D[I],Object.keys(D).length===0&&delete n[O]}}}function E(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:P,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function em(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,d){d!==0&&(i.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function o(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let f=0;for(let u=0;u<d;u++)f+=l[u];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Mn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let y=C===Dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==dn&&C!==Ln&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",d=h(l);d!==l&&(Wt("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),c=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:c,maxVertexUniforms:v,maxVaryings:A,maxFragmentUniforms:x,maxSamples:b,samples:w}}function im(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Rn,o=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let u=p.length!==0||f||n!==0||s;return s=f,n=p.length,u},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){e=d(p,f,0)},this.setState=function(p,f,u){let _=p.clippingPlanes,S=p.clipIntersection,m=p.clipShadows,c=i.get(p);if(!s||_===null||_.length===0||r&&!m)r?d(null):l();else{let v=r?0:n,A=v*4,x=c.clippingState||null;h.value=x,x=d(_,f,A,u);for(let b=0;b!==A;++b)x[b]=e[b];c.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,f,u,_){let S=p!==null?p.length:0,m=null;if(S!==0){if(m=h.value,_!==!0||m===null){let c=u+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<c)&&(m=new Float32Array(c));for(let A=0,x=u;A!==S;++A,x+=4)a.copy(p[A]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}var Es=4,sm=6,rm=20,am=256,_r=new xs,Rh=new Rt,Ol=null,Bl=0,zl=0,kl=!1,om=new G,Wi=new G,go=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=om}=r;Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,o),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol,Bl,zl),this._renderer.xr.enabled=kl,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wi||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),kl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Dn,format:Mn,colorSpace:Gs,depthBuffer:!1},s=Ch(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ch(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lm(r)),this._blurMaterial=hm(r,t,e),this._ggxMaterial=cm(r,t,e)}return s}_compileMaterial(t){let e=new Ae(new Qe,t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s,r){let h=new Ye(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,u=p.toneMapping;p.getClearColor(Rh),p.toneMapping=In,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ae(new $e,new Oe({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));let S=this._backgroundBox,m=S.material,c=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,c=!0):(m.color.copy(Rh),c=!0);for(let A=0;A<6;A++){let x=A%3;x===0?(h.up.set(0,l[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+d[A],r.y,r.z)):x===1?(h.up.set(0,0,l[A]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+d[A],r.z)):(h.up.set(0,l[A],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+d[A]));let b=this._cubeSize;Ts(s,x*b,A>2?b:0,b,b),p.setRenderTarget(s),c&&p.render(S,h),p.render(t,h)}p.toneMapping=u,p.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===wi||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let h=this._cubeSize;Ts(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,_r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let h=a.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),f=l*1.25,u=p*f,{_lodMax:_}=this,S=this._sizeLods[n],m=3*S*(n>_-Es?n-_+Es:0),c=4*(this._cubeSize-S);h.envMap.value=t.texture,h.roughness.value=u,h.mipInt.value=_-e,Ts(r,m,c,3*S,2*S),s.setRenderTarget(r),s.render(o,_r),h.envMap.value=r.texture,h.roughness.value=0,h.mipInt.value=_-n,Ts(t,m,c,3*S,2*S),s.setRenderTarget(t),s.render(o,_r)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,h=this._lodMeshes[s];h.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],p=3*d*(s>this._lodMax-Es?s-this._lodMax+Es:0),f=4*(this._cubeSize-d);Ts(e,p,f,3*d,2*d),a.setRenderTarget(e),a.render(h,_r)}};function lm(i){let t=[],e=[],n=i,s=i-Es+1+sm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),h=-o,l=1+o,d=[h,h,l,h,l,l,h,h,l,l,h,l],p=6,f=6,u=3,_=new Float32Array(u*f*p),S=new Float32Array(u*f*p);for(let c=0;c<p;c++){let v=c%3*2/3-1,A=c>2?0:-1,x=[v,A,0,v+2/3,A,0,v+2/3,A+1,0,v,A,0,v+2/3,A+1,0,v,A+1,0];_.set(x,u*f*c);for(let b=0;b<f;b++){let w=d[b*2]*2-1,C=d[b*2+1]*2-1;c===0?Wi.set(1,C,w):c===1?Wi.set(-w,1,-C):c===2?Wi.set(-w,C,1):c===3?Wi.set(-1,C,-w):c===4?Wi.set(-w,-1,C):Wi.set(w,C,-1),Wi.toArray(S,(c*f+b)*u)}}let m=new Qe;m.setAttribute("position",new cn(_,u)),m.setAttribute("outputDirection",new cn(S,u)),e.push(new Ae(m,null)),n>Es&&n--}return{lodMeshes:e,sizeLods:t}}function Ch(i,t,e){let n=new hn(i,t,e);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cm(i,t,e){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function hm(i,t,e){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:rm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ih(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ph(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _o=class extends hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ks(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new $e(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Hn});r.uniforms.tEquirect.value=e;let a=new Ae(s,r),o=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Ke),new Sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function um(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===Ta||u===Ea)if(t.has(f)){let _=t.get(f).texture;return o(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let S=new _o(_.height);return S.fromEquirectangularTexture(i,f),t.set(f,S),f.addEventListener("dispose",l),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let u=f.mapping,_=u===Ta||u===Ea,S=u===wi||u===Gi;if(_||S){let m=e.get(f),c=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return n===null&&(n=new go(i)),m=_?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return _&&v&&v.height>0||S&&v&&h(v)?(n===null&&(n=new go(i)),m=_?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",d),m.texture):null}}}return f}function o(f,u){return u===Ta?f.mapping=wi:u===Ea&&(f.mapping=Gi),f}function h(f){let u=0,_=6;for(let S=0;S<_;S++)f[S]!==void 0&&u++;return u===_}function l(f){let u=f.target;u.removeEventListener("dispose",l);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function d(f){let u=f.target;u.removeEventListener("dispose",d);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function dm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function fm(i,t,e,n){let s={},r=new WeakMap;function a(p){let f=p.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(p,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(p){let f=p.attributes;for(let u in f)t.update(f[u],i.ARRAY_BUFFER)}function l(p){let f=[],u=p.index,_=p.attributes.position,S=0;if(_===void 0)return;if(u!==null){let v=u.array;S=u.version;for(let A=0,x=v.length;A<x;A+=3){let b=v[A+0],w=v[A+1],C=v[A+2];f.push(b,w,w,C,C,b)}}else{let v=_.array;S=_.version;for(let A=0,x=v.length/3-1;A<x;A+=3){let b=A+0,w=A+1,C=A+2;f.push(b,w,w,C,C,b)}}let m=new(_.count>=65535?$s:Js)(f,1);m.version=S;let c=r.get(p);c&&t.remove(c),r.set(p,m)}function d(p){let f=r.get(p);if(f){let u=p.index;u!==null&&f.version<u.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:h,getWireframeAttribute:d}}function pm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function h(p,f){i.drawElements(n,f,r,p*a),e.update(f,n,1)}function l(p,f,u){u!==0&&(i.drawElementsInstanced(n,f,r,p*a,u),e.update(f,n,u))}function d(p,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,p,0,u);let S=0;for(let m=0;m<u;m++)S+=f[m];e.update(S,n,1)}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=d}function mm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Xt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gm(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,h){let l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==p){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],A=0;u===!0&&(A=1),_===!0&&(A=2),S===!0&&(A=3);let x=o.attributes.position.count*A,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*b*4*p),C=new qs(w,x,b,p);C.type=Ln,C.needsUpdate=!0;let y=A*4;for(let P=0;P<p;P++){let N=m[P],O=c[P],D=v[P],I=x*b*4*P;for(let z=0;z<N.count;z++){let L=z*y;u===!0&&(s.fromBufferAttribute(N,z),w[I+L+0]=s.x,w[I+L+1]=s.y,w[I+L+2]=s.z,w[I+L+3]=0),_===!0&&(s.fromBufferAttribute(O,z),w[I+L+4]=s.x,w[I+L+5]=s.y,w[I+L+6]=s.z,w[I+L+7]=0),S===!0&&(s.fromBufferAttribute(D,z),w[I+L+8]=s.x,w[I+L+9]=s.y,w[I+L+10]=s.z,w[I+L+11]=D.itemSize===4?s.w:1)}}f={count:p,texture:C,size:new Qt(x,b)},n.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let S=0;S<l.length;S++)u+=l[S];let _=o.morphTargetsRelative?1:1-u;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function _m(i,t,e,n,s){let r=new WeakMap;function a(l){let d=s.render.frame,p=l.geometry,f=t.get(l,p);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",h)===!1&&l.addEventListener("dispose",h),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==d&&(u.update(),r.set(u,d))}return f}function o(){r=new WeakMap}function h(l){let d=l.target;d.removeEventListener("dispose",h),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var xm={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[ar]:"ACES_FILMIC_TONE_MAPPING",[or]:"AGX_TONE_MAPPING",[Ss]:"NEUTRAL_TONE_MAPPING",[_l]:"CUSTOM_TONE_MAPPING"};function ym(i,t,e,n,s,r){let a=new hn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,h=null,l=new Qe;l.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new he([0,2,0,0,2,0],2));let d=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Ae(l,d),f=new xs(-1,1,1,-1,0,1),u=null,_=null,S=!1,m,c=null,v=[],A=!1;this.setSize=function(x,b){a.setSize(x,b),o!==null&&o.setSize(x,b),h!==null&&h.setSize(x,b);for(let w=0;w<v.length;w++){let C=v[w];C.setSize&&C.setSize(x,b)}},this.setEffects=function(x){v=x,A=v.length>0&&v[0].isRenderPass===!0;let b=a.width,w=a.height;v.length>0&&o===null&&(o=new hn(b,w,{type:Dn,depthBuffer:!1,stencilBuffer:!1}),h=new hn(b,w,{type:Dn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<v.length;C++){let y=v[C];y.setSize&&y.setSize(b,w)}},this.begin=function(x,b){if(S||x.toneMapping===In&&v.length===0)return!1;if(c=b,b!==null){let w=b.width,C=b.height;(a.width!==w||a.height!==C)&&this.setSize(w,C)}return A===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=In,!0},this.hasRenderPass=function(){return A},this.end=function(x,b){x.toneMapping=m,S=!0;let w=a,C=o;for(let y=0;y<v.length;y++){let E=v[y];E.enabled!==!1&&(E.render(x,C,w,b),E.needsSwap!==!1&&(w=C,C=C===o?h:o))}if(u!==x.outputColorSpace||_!==x.toneMapping){u=x.outputColorSpace,_=x.toneMapping,d.defines={},oe.getTransfer(u)===fe&&(d.defines.SRGB_TRANSFER="");let y=xm[_];y&&(d.defines[y]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(c),x.render(p,f),c=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),h!==null&&h.dispose(),l.dispose(),d.dispose()}}var Kh=new rn,Hl=new _i(1,1),Qh=new qs,jh=new ra,tu=new Ks,Lh=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ge(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Mm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function Sm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),He(e,n)}}function Tm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),He(e,n)}}function Em(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ge(e,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),He(e,n)}}function Am(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function Im(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Pm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Lm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function Nm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hl.compareFunction=e.isReversedDepthBuffer()?fo:uo,r=Hl):r=Kh,e.setTexture2D(t||r,s)}function Fm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||jh,s)}function Om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tu,s)}function Bm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qh,s)}function zm(i){switch(i){case 5126:return vm;case 35664:return Mm;case 35665:return Sm;case 35666:return bm;case 35674:return wm;case 35675:return Tm;case 35676:return Em;case 5124:case 35670:return Am;case 35667:case 35671:return Rm;case 35668:case 35672:return Cm;case 35669:case 35673:return Im;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}function km(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Gm(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Wm(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xm(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qm(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ym(i,t){i.uniform1iv(this.addr,t)}function Zm(i,t){i.uniform2iv(this.addr,t)}function Jm(i,t){i.uniform3iv(this.addr,t)}function $m(i,t){i.uniform4iv(this.addr,t)}function Km(i,t){i.uniform1uiv(this.addr,t)}function Qm(i,t){i.uniform2uiv(this.addr,t)}function jm(i,t){i.uniform3uiv(this.addr,t)}function t0(i,t){i.uniform4uiv(this.addr,t)}function e0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hl:a=Kh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function n0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jh,r[a])}function i0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tu,r[a])}function s0(i,t,e){let n=this.cache,s=t.length,r=vo(e,s);Ge(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Qh,r[a])}function r0(i){switch(i){case 5126:return km;case 35664:return Vm;case 35665:return Gm;case 35666:return Hm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return Jm;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Qm;case 36295:return jm;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}var Wl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=zm(e.type)}},Xl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=r0(e.type)}},ql=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Vl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function a0(i,t,e){let n=i.name,s=n.length;for(Vl.lastIndex=0;;){let r=Vl.exec(n),a=Vl.lastIndex,o=r[1],h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){Oh(e,l===void 0?new Wl(o,i,t):new Xl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new ql(o),Oh(e,p)),e=p}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),h=t.getUniformLocation(e,o.name);a0(o,h,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var o0=37297,l0=0;function c0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zh=new $t;function h0(i){oe._getMatrix(zh,oe.workingColorSpace,i);let t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case Hs:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+c0(i.getShaderSource(t),o)}else return r}function u0(i,t){let e=h0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var d0={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[ar]:"ACESFilmic",[or]:"AgX",[Ss]:"Neutral",[_l]:"Custom"};function f0(i,t){let e=d0[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mo=new G;function p0(){oe.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),t=mo.y.toFixed(4),e=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function g0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function yr(i){return i!==""}function Vh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var x0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(i){return i.replace(x0,v0)}var y0=new Map;function v0(i,t){let e=ne[t];if(e===void 0){let n=y0.get(t);if(n!==void 0)e=ne[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Yl(e)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(M0,S0)}function S0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var b0={[ki]:"SHADOWMAP_TYPE_PCF",[vs]:"SHADOWMAP_TYPE_VSM"};function w0(i){return b0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var T0={[wi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function E0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":T0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var A0={[Gi]:"ENVMAP_MODE_REFRACTION"};function R0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":A0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var C0={[fl]:"ENVMAP_BLENDING_MULTIPLY",[oh]:"ENVMAP_BLENDING_MIX",[lh]:"ENVMAP_BLENDING_ADD"};function I0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":C0[i.combine]||"ENVMAP_BLENDING_NONE"}function P0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,h=w0(e),l=E0(e),d=R0(e),p=I0(e),f=P0(e),u=m0(e),_=g0(r),S=s.createProgram(),m,c,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(yr).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(yr).join(`
`),c.length>0&&(c+=`
`)):(m=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),c=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?ne.tonemapping_pars_fragment:"",e.toneMapping!==In?f0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,u0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yr).join(`
`)),a=Yl(a),a=Vh(a,e),a=Gh(a,e),o=Yl(o),o=Vh(o,e),o=Gh(o,e),a=Hh(a),o=Hh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",e.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);let A=v+m+a,x=v+c+o,b=Bh(s,s.VERTEX_SHADER,A),w=Bh(s,s.FRAGMENT_SHADER,x);s.attachShader(S,b),s.attachShader(S,w),e.index0AttributeName!==void 0?s.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function C(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(S)||"",D=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(w)||"",z=O.trim(),L=D.trim(),Y=I.trim(),j=!0,J=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,S,b,w);else{let it=kh(s,b,"vertex"),Q=kh(s,w,"fragment");Xt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+z+`
`+it+`
`+Q)}else z!==""?Wt("WebGLProgram: Program Info Log:",z):(L===""||Y==="")&&(J=!1);J&&(N.diagnostics={runnable:j,programLog:z,vertexShader:{log:L,prefix:m},fragmentShader:{log:Y,prefix:c}})}s.deleteShader(b),s.deleteShader(w),y=new As(s,S),E=_0(s,S)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(S,o0)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}var D0=0,Zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jl(t),e.set(t,n)),n}},Jl=class{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}};function U0(i){return i===Ai||i===pr||i===mr}function N0(i,t,e,n,s,r){let a=new Ys,o=new Zl,h=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer,f=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return h.add(y),y===0?"uv":`uv${y}`}function S(y,E,P,N,O,D){let I=N.fog,z=O.geometry,L=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?N.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=t.get(y.envMap||L,Y),J=j&&j.mapping===lr?j.image.height:null,it=u[y.type];y.precision!==null&&(f=n.getMaxPrecision(y.precision),f!==y.precision&&Wt("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,bt=Q!==void 0?Q.length:0,xt=0;z.morphAttributes.position!==void 0&&(xt=1),z.morphAttributes.normal!==void 0&&(xt=2),z.morphAttributes.color!==void 0&&(xt=3);let Ot,Kt,qt,et;if(it){let St=Xn[it];Ot=St.vertexShader,Kt=St.fragmentShader}else{Ot=y.vertexShader,Kt=y.fragmentShader;let St=o.getVertexShaderStage(y),at=o.getFragmentShaderStage(y);o.update(y,St,at),qt=St.id,et=at.id}let rt=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,ht=O.isBatchedMesh===!0,At=!!y.map,kt=!!y.matcap,Pt=!!j,Yt=!!y.aoMap,Vt=!!y.lightMap,Zt=!!y.bumpMap&&y.wireframe===!1,Gt=!!y.normalMap,me=!!y.displacementMap,_e=!!y.emissiveMap,ue=!!y.metalnessMap,ce=!!y.roughnessMap,U=y.anisotropy>0,Re=y.clearcoat>0,ie=y.dispersion>0,R=y.retroreflectivity>0,g=y.iridescence>0,V=y.sheen>0,Z=y.transmission>0,nt=U&&!!y.anisotropyMap,dt=Re&&!!y.clearcoatMap,ut=Re&&!!y.clearcoatNormalMap,$=Re&&!!y.clearcoatRoughnessMap,st=g&&!!y.iridescenceMap,pt=g&&!!y.iridescenceThicknessMap,Et=V&&!!y.sheenColorMap,mt=V&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Lt=!!y.specularColorMap,Nt=!!y.specularIntensityMap,Jt=Z&&!!y.transmissionMap,T=Z&&!!y.thicknessMap,k=!!y.gradientMap,W=!!y.alphaMap,ot=y.alphaTest>0,lt=!!y.alphaHash,B=!!y.extensions,H=In;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(H=i.toneMapping);let tt={shaderID:it,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:Kt,defines:y.defines,customVertexShaderID:qt,customFragmentShaderID:et,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:ht,batchingColor:ht&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:At,matcap:kt,envMap:Pt,envMapMode:Pt&&j.mapping,envMapCubeUVHeight:J,aoMap:Yt,lightMap:Vt,bumpMap:Zt,normalMap:Gt,displacementMap:me,emissiveMap:_e,normalMapObjectSpace:Gt&&y.normalMapType===uh,normalMapTangentSpace:Gt&&y.normalMapType===ho,packedNormalMap:Gt&&y.normalMapType===ho&&U0(y.normalMap.format),metalnessMap:ue,roughnessMap:ce,anisotropy:U,anisotropyMap:nt,clearcoat:Re,clearcoatMap:dt,clearcoatNormalMap:ut,clearcoatRoughnessMap:$,dispersion:ie,retroreflection:R,iridescence:g,iridescenceMap:st,iridescenceThicknessMap:pt,sheen:V,sheenColorMap:Et,sheenRoughnessMap:mt,specularMap:gt,specularColorMap:Lt,specularIntensityMap:Nt,transmission:Z,transmissionMap:Jt,thicknessMap:T,gradientMap:k,opaque:y.transparent===!1&&y.blending===Ms&&y.alphaToCoverage===!1,alphaMap:W,alphaTest:ot,alphaHash:lt,combine:y.combine,mapUv:At&&_(y.map.channel),aoMapUv:Yt&&_(y.aoMap.channel),lightMapUv:Vt&&_(y.lightMap.channel),bumpMapUv:Zt&&_(y.bumpMap.channel),normalMapUv:Gt&&_(y.normalMap.channel),displacementMapUv:me&&_(y.displacementMap.channel),emissiveMapUv:_e&&_(y.emissiveMap.channel),metalnessMapUv:ue&&_(y.metalnessMap.channel),roughnessMapUv:ce&&_(y.roughnessMap.channel),anisotropyMapUv:nt&&_(y.anisotropyMap.channel),clearcoatMapUv:dt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ut&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&_(y.sheenRoughnessMap.channel),specularMapUv:gt&&_(y.specularMap.channel),specularColorMapUv:Lt&&_(y.specularColorMap.channel),specularIntensityMapUv:Nt&&_(y.specularIntensityMap.channel),transmissionMapUv:Jt&&_(y.transmissionMap.channel),thicknessMapUv:T&&_(y.thicknessMap.channel),alphaMapUv:W&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Gt||U),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(At||W),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&Gt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ft,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:xt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:H,decodeVideoTexture:At&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:_e&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:B&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(B&&y.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=h.has(1),tt.vertexUv2s=h.has(2),tt.vertexUv3s=h.has(3),h.clear(),tt}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(c(E,y),v(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function c(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function A(y){let E=u[y.type],P;if(E){let N=Xn[E];P=Th.clone(N.uniforms)}else P=y.uniforms;return P}function x(y,E){let P=d.get(E);return P!==void 0?++P.usedTimes:(P=new L0(i,E,y,s),l.push(P),d.set(E,P)),P}function b(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),d.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function C(){o.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:A,acquireProgram:x,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:C}}function F0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,_,S,m,c){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:m,group:c},i[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=_,v.materialVariant=a(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=m,v.group=c),t++,v}function h(f,u,_,S,m,c,v){v.reversedDepth===!0&&(m=-m);let A=o(f,u,_,S,m,c);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(f,u,_,S,m,c){let v=o(f,u,_,S,m,c);_.transmission>0?n.unshift(v):_.transparent===!0?s.unshift(v):e.unshift(v)}function d(f,u){e.length>1&&e.sort(f||O0),n.length>1&&n.sort(u||Xh),s.length>1&&s.sort(u||Xh)}function p(){for(let f=t,u=i.length;f<u;f++){let _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:h,unshift:l,finish:p,sort:d}}function B0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new Rt};break;case"SpotLight":e={position:new G,direction:new G,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function k0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var V0=0;function G0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H0(i){let t=new z0,e=k0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new G);let s=new G,r=new we,a=new we;function o(l){let d=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let u=0,_=0,S=0,m=0,c=0,v=0,A=0,x=0,b=0,w=0,C=0,y=0,E=0,P=0;l.sort(G0);for(let O=0,D=l.length;O<D;O++){let I=l[O],z=I.color,L=I.intensity,Y=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ai?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)d+=z.r*L,p+=z.g*L,f+=z.b*L;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],L);P++}else if(I.isSunLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,Q=e.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[_]=Q,n.sunShadowMap[_]=j;let bt=it.getViewportCount();for(let xt=0;xt<bt;xt++)n.sunShadowMatrix[S+xt]=it.getMatrix(xt),n.sunShadowCascade[S+xt]=it._cascadeData[xt];S+=bt,_++}n.sun[u]=J,u++}else if(I.isDirectionalLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,Q=e.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=I.shadow.matrix,b++}n.directional[m]=J,m++}else if(I.isSpotLight){let J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(z).multiplyScalar(L),J.distance=Y,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[v]=J;let it=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,it.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=it.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,n.spotShadow[v]=Q,n.spotShadowMap[v]=j,C++}v++}else if(I.isRectAreaLight){let J=t.get(I);J.color.copy(z).multiplyScalar(L),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=J,A++}else if(I.isPointLight){let J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){let it=I.shadow,Q=e.get(I);Q.shadowIntensity=it.intensity,Q.shadowBias=it.bias,Q.shadowNormalBias=it.normalBias,Q.shadowRadius=it.radius,Q.shadowMapSize=it.mapSize,Q.shadowCameraNear=it.camera.near,Q.shadowCameraFar=it.camera.far,n.pointShadow[c]=Q,n.pointShadowMap[c]=j,n.pointShadowMatrix[c]=I.shadow.matrix,w++}n.point[c]=J,c++}else if(I.isHemisphereLight){let J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(L),J.groundColor.copy(I.groundColor).multiplyScalar(L),n.hemi[x]=J,x++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=f;let N=n.hash;(N.sunLength!==u||N.directionalLength!==m||N.pointLength!==c||N.spotLength!==v||N.rectAreaLength!==A||N.hemiLength!==x||N.numSunShadows!==_||N.numDirectionalShadows!==b||N.numPointShadows!==w||N.numSpotShadows!==C||N.numSpotMaps!==y||N.numLightProbes!==P)&&(n.sun.length=u,n.directional.length=m,n.spot.length=v,n.rectArea.length=A,n.point.length=c,n.hemi.length=x,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=S,n.sunShadowCascade.length=S,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=P,N.sunLength=u,N.directionalLength=m,N.pointLength=c,N.spotLength=v,N.rectAreaLength=A,N.hemiLength=x,N.numSunShadows=_,N.numDirectionalShadows=b,N.numPointShadows=w,N.numSpotShadows=C,N.numSpotMaps=y,N.numLightProbes=P,n.version=V0++)}function h(l,d){let p=0,f=0,u=0,_=0,S=0,m=0,c=d.matrixWorldInverse;for(let v=0,A=l.length;v<A;v++){let x=l[v];if(x.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(c),p++}else if(x.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),f++}else if(x.isSpotLight){let b=n.spot[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(c),_++}else if(x.isRectAreaLight){let b=n.rectArea[S];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),a.identity(),r.copy(x.matrixWorld),r.premultiply(c),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(x.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(c),u++}else if(x.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(c),m++}}}return{setup:o,setupView:h,state:n}}function Yh(i){let t=new H0(i),e=[],n=[],s=[];function r(f){p.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function h(f){s.push(f)}function l(){t.setup(e)}function d(f){t.setupView(e,f)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:h}}function W0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yh(i),t.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
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
}`,Y0=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Z0=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Zh=new we,xr=new G,Gl=new G;function J0(i,t,e){let n=new ps,s=new Qt,r=new Qt,a=new Ee,o=new ha,h=new ua,l={},d=e.maxTextureSize,p={[Si]:on,[on]:Si,[un]:un},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let _=new Qe;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new Ae(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ki;let c=this.type;this.render=function(w,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Gc&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ki);let E=i.getRenderTarget(),P=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Hn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let D=c!==this.type;D&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=w.length;I<z;I++){let L=w[I],Y=L.shadow;if(Y===void 0){Wt("WebGLShadowMap:",L,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let j=Y.getFrameExtents();s.multiply(j),r.copy(Y.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/j.x),s.x=r.x*j.x,Y.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/j.y),s.y=r.y*j.y,Y.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=J,Y.map===null||D===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===vs){if(L.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new hn(s.x,s.y,{format:Ai,type:Dn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),Y.map.texture.name=L.name+".shadowMap",Y.map.depthTexture=new _i(s.x,s.y,Ln),Y.map.depthTexture.name=L.name+".shadowMapDepth",Y.map.depthTexture.format=kn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ze,Y.map.depthTexture.magFilter=Ze}else L.isPointLight?(Y.map=new _o(s.x),Y.map.depthTexture=new la(s.x,Pn)):(Y.map=new hn(s.x,s.y),Y.map.depthTexture=new _i(s.x,s.y,Pn)),Y.map.depthTexture.name=L.name+".shadowMap",Y.map.depthTexture.format=kn,this.type===ki?(Y.map.depthTexture.compareFunction=J?fo:uo,Y.map.depthTexture.minFilter=Ke,Y.map.depthTexture.magFilter=Ke):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Ze,Y.map.depthTexture.magFilter=Ze);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let it=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();L.isPointLight!==!0&&Y.updateMatrices(L,y);for(let Q=0;Q<it;Q++){let bt=Y.getCamera(Q);if(L.isPointLight){let xt=Y.camera,Ot=Y.matrix,Kt=L.distance||xt.far;Kt!==xt.far&&(xt.far=Kt,xt.updateProjectionMatrix()),xr.setFromMatrixPosition(L.matrixWorld),xt.position.copy(xr),Gl.copy(xt.position),Gl.add(Y0[Q]),xt.up.copy(Z0[Q]),xt.lookAt(Gl),xt.updateMatrixWorld(),Ot.makeTranslation(-xr.x,-xr.y,-xr.z),Zh.multiplyMatrices(xt.projectionMatrix,xt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Zh,xt.coordinateSystem,xt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(Y.map),i.clear());let xt=Y.getViewport(Q);a.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),O.viewport(a)}n=Y.getFrustum(Q),x(C,y,bt,L,this.type)}Y.isPointLightShadow!==!0&&this.type===vs&&v(Y,y),Y.needsUpdate=!1}c=this.type,m.needsUpdate=!1,i.setRenderTarget(E,P,N)};function v(w,C){let y=t.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new hn(s.x,s.y,{format:Ai,type:Dn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,y,f,S,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,y,u,S,null)}function A(w,C,y,E){let P=null,N=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)P=N;else if(P=y.isPointLight===!0?h:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let O=P.uuid,D=C.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let z=I[D];z===void 0&&(z=P.clone(),I[D]=z,C.addEventListener("dispose",b)),P=z}if(P.visible=C.visible,P.wireframe=C.wireframe,E===vs?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:p[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=y}return P}function x(w,C,y,E,P){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===vs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let D=t.update(w),I=w.material;if(Array.isArray(I)){let z=D.groups;for(let L=0,Y=z.length;L<Y;L++){let j=z[L],J=I[j.materialIndex];if(J&&J.visible){let it=A(w,J,E,P);w.onBeforeShadow(i,w,C,y,D,it,j),i.renderBufferDirect(y,null,D,it,w,j),w.onAfterShadow(i,w,C,y,D,it,j)}}}else if(I.visible){let z=A(w,I,E,P);w.onBeforeShadow(i,w,C,y,D,z,null),i.renderBufferDirect(y,null,D,z,w,null),w.onAfterShadow(i,w,C,y,D,z,null)}}let O=w.children;for(let D=0,I=O.length;D<I;D++)x(O[D],C,y,E,P)}function b(w){w.target.removeEventListener("dispose",b);for(let y in l){let E=l[y],P=w.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function $0(i,t){function e(){let T=!1,k=new Ee,W=null,ot=new Ee(0,0,0,0);return{setMask:function(lt){W!==lt&&!T&&(i.colorMask(lt,lt,lt,lt),W=lt)},setLocked:function(lt){T=lt},setClear:function(lt,B,H,tt,St){St===!0&&(lt*=tt,B*=tt,H*=tt),k.set(lt,B,H,tt),ot.equals(k)===!1&&(i.clearColor(lt,B,H,tt),ot.copy(k))},reset:function(){T=!1,W=null,ot.set(-1,0,0,0)}}}function n(){let T=!1,k=!1,W=null,ot=null,lt=null;return{setReversed:function(B){if(k!==B){let H=t.get("EXT_clip_control");B?H.clipControlEXT(H.LOWER_LEFT_EXT,H.ZERO_TO_ONE_EXT):H.clipControlEXT(H.LOWER_LEFT_EXT,H.NEGATIVE_ONE_TO_ONE_EXT),k=B;let tt=lt;lt=null,this.setClear(tt)}},getReversed:function(){return k},setTest:function(B){B?rt(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(B){W!==B&&!T&&(i.depthMask(B),W=B)},setFunc:function(B){if(k&&(B=bh[B]),ot!==B){switch(B){case Zr:i.depthFunc(i.NEVER);break;case Jr:i.depthFunc(i.ALWAYS);break;case $r:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case Qr:i.depthFunc(i.GEQUAL);break;case jr:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=B}},setLocked:function(B){T=B},setClear:function(B){lt!==B&&(lt=B,k&&(B=1-B),i.clearDepth(B))},reset:function(){T=!1,W=null,ot=null,lt=null,k=!1}}}function s(){let T=!1,k=null,W=null,ot=null,lt=null,B=null,H=null,tt=null,St=null;return{setTest:function(at){T||(at?rt(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(at){k!==at&&!T&&(i.stencilMask(at),k=at)},setFunc:function(at,ct,Dt){(W!==at||ot!==ct||lt!==Dt)&&(i.stencilFunc(at,ct,Dt),W=at,ot=ct,lt=Dt)},setOp:function(at,ct,Dt){(B!==at||H!==ct||tt!==Dt)&&(i.stencilOp(at,ct,Dt),B=at,H=ct,tt=Dt)},setLocked:function(at){T=at},setClear:function(at){St!==at&&(i.clearStencil(at),St=at)},reset:function(){T=!1,k=null,W=null,ot=null,lt=null,B=null,H=null,tt=null,St=null}}}let r=new e,a=new n,o=new s,h=new WeakMap,l=new WeakMap,d={},p={},f={},u=new WeakMap,_=[],S=null,m=!1,c=null,v=null,A=null,x=null,b=null,w=null,C=null,y=new Rt(0,0,0),E=0,P=!1,N=null,O=null,D=null,I=null,z=null,L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,j=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),Y=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),Y=j>=2);let it=null,Q={},bt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ot=new Ee().fromArray(bt),Kt=new Ee().fromArray(xt);function qt(T,k,W,ot){let lt=new Uint8Array(4),B=i.createTexture();i.bindTexture(T,B),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let H=0;H<W;H++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(k+H,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return B}let et={};et[i.TEXTURE_2D]=qt(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=qt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=qt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=qt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(ls),Zt(!1),Gt(ll),rt(i.CULL_FACE),Yt(Hn);function rt(T){d[T]!==!0&&(i.enable(T),d[T]=!0)}function ft(T){d[T]!==!1&&(i.disable(T),d[T]=!1)}function Bt(T,k){return f[T]!==k?(i.bindFramebuffer(T,k),f[T]=k,T===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=k),T===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=k),!0):!1}function ht(T,k){let W=_,ot=!1;if(T){W=u.get(k),W===void 0&&(W=[],u.set(k,W));let lt=T.textures;if(W.length!==lt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let B=0,H=lt.length;B<H;B++)W[B]=i.COLOR_ATTACHMENT0+B;W.length=lt.length,ot=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,ot=!0);ot&&i.drawBuffers(W)}function At(T){return S!==T?(i.useProgram(T),S=T,!0):!1}let kt={[Vi]:i.FUNC_ADD,[Wc]:i.FUNC_SUBTRACT,[Xc]:i.FUNC_REVERSE_SUBTRACT};kt[qc]=i.MIN,kt[Yc]=i.MAX;let Pt={[Zc]:i.ZERO,[Jc]:i.ONE,[$c]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[th]:i.DST_COLOR,[Qc]:i.DST_ALPHA,[Kc]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[eh]:i.ONE_MINUS_DST_COLOR,[jc]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(T,k,W,ot,lt,B,H,tt,St,at){if(T===Hn){m===!0&&(ft(i.BLEND),m=!1);return}if(m===!1&&(rt(i.BLEND),m=!0),T!==Hc){if(T!==c||at!==P){if((v!==Vi||b!==Vi)&&(i.blendEquation(i.FUNC_ADD),v=Vi,b=Vi),at)switch(T){case Ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFunc(i.ONE,i.ONE);break;case cl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",T);break}else switch(T){case Ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cl:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hl:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",T);break}A=null,x=null,w=null,C=null,y.set(0,0,0),E=0,c=T,P=at}return}lt=lt||k,B=B||W,H=H||ot,(k!==v||lt!==b)&&(i.blendEquationSeparate(kt[k],kt[lt]),v=k,b=lt),(W!==A||ot!==x||B!==w||H!==C)&&(i.blendFuncSeparate(Pt[W],Pt[ot],Pt[B],Pt[H]),A=W,x=ot,w=B,C=H),(tt.equals(y)===!1||St!==E)&&(i.blendColor(tt.r,tt.g,tt.b,St),y.copy(tt),E=St),c=T,P=!1}function Vt(T,k){T.side===un?ft(i.CULL_FACE):rt(i.CULL_FACE);let W=T.side===on;k&&(W=!W),Zt(W),T.blending===Ms&&T.transparent===!1?Yt(Hn):Yt(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),a.setFunc(T.depthFunc),a.setTest(T.depthTest),a.setMask(T.depthWrite),r.setMask(T.colorWrite);let ot=T.stencilWrite;o.setTest(ot),ot&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),_e(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(T){N!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),N=T)}function Gt(T){T!==kc?(rt(i.CULL_FACE),T!==O&&(T===ll?i.cullFace(i.BACK):T===Vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),O=T}function me(T){T!==D&&(Y&&i.lineWidth(T),D=T)}function _e(T,k,W){T?(rt(i.POLYGON_OFFSET_FILL),(I!==k||z!==W)&&(I=k,z=W,a.getReversed()&&(k=-k),i.polygonOffset(k,W))):ft(i.POLYGON_OFFSET_FILL)}function ue(T){T?rt(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function ce(T){T===void 0&&(T=i.TEXTURE0+L-1),it!==T&&(i.activeTexture(T),it=T)}function U(T,k,W){W===void 0&&(it===null?W=i.TEXTURE0+L-1:W=it);let ot=Q[W];ot===void 0&&(ot={type:void 0,texture:void 0},Q[W]=ot),(ot.type!==T||ot.texture!==k)&&(it!==W&&(i.activeTexture(W),it=W),i.bindTexture(T,k||et[T]),ot.type=T,ot.texture=k)}function Re(){let T=Q[it];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(T){Xt("WebGLState:",T)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(T){Xt("WebGLState:",T)}}function g(){try{i.texSubImage2D(...arguments)}catch(T){Xt("WebGLState:",T)}}function V(){try{i.texSubImage3D(...arguments)}catch(T){Xt("WebGLState:",T)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(T){Xt("WebGLState:",T)}}function nt(){try{i.compressedTexSubImage3D(...arguments)}catch(T){Xt("WebGLState:",T)}}function dt(){try{i.texStorage2D(...arguments)}catch(T){Xt("WebGLState:",T)}}function ut(){try{i.texStorage3D(...arguments)}catch(T){Xt("WebGLState:",T)}}function $(){try{i.texImage2D(...arguments)}catch(T){Xt("WebGLState:",T)}}function st(){try{i.texImage3D(...arguments)}catch(T){Xt("WebGLState:",T)}}function pt(T){return p[T]!==void 0?p[T]:i.getParameter(T)}function Et(T,k){p[T]!==k&&(i.pixelStorei(T,k),p[T]=k)}function mt(T){Ot.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Ot.copy(T))}function gt(T){Kt.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),Kt.copy(T))}function Lt(T,k){let W=l.get(k);W===void 0&&(W=new WeakMap,l.set(k,W));let ot=W.get(T);ot===void 0&&(ot=i.getUniformBlockIndex(k,T.name),W.set(T,ot))}function Nt(T,k){let ot=l.get(k).get(T);h.get(k)!==ot&&(i.uniformBlockBinding(k,ot,T.__bindingPointIndex),h.set(k,ot))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},p={},it=null,Q={},f={},u=new WeakMap,_=[],S=null,m=!1,c=null,v=null,A=null,x=null,b=null,w=null,C=null,y=new Rt(0,0,0),E=0,P=!1,N=null,O=null,D=null,I=null,z=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:ft,bindFramebuffer:Bt,drawBuffers:ht,useProgram:At,setBlending:Yt,setMaterial:Vt,setFlipSided:Zt,setCullFace:Gt,setLineWidth:me,setPolygonOffset:_e,setScissorTest:ue,activeTexture:ce,bindTexture:U,unbindTexture:Re,compressedTexImage2D:ie,compressedTexImage3D:R,texImage2D:$,texImage3D:st,pixelStorei:Et,getParameter:pt,updateUBOMapping:Lt,uniformBlockBinding:Nt,texStorage2D:dt,texStorage3D:ut,texSubImage2D:g,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:nt,scissor:mt,viewport:gt,reset:Jt}}function K0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,d=new WeakMap,p=new Set,f,u=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,g){return _?new OffscreenCanvas(R,g):Ws("canvas")}function m(R,g,V){let Z=1,nt=ie(R);if((nt.width>V||nt.height>V)&&(Z=V/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let dt=Math.floor(Z*nt.width),ut=Math.floor(Z*nt.height);f===void 0&&(f=S(dt,ut));let $=g?S(dt,ut):f;return $.width=dt,$.height=ut,$.getContext("2d").drawImage(R,0,0,dt,ut),Wt("WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+dt+"x"+ut+")."),$}else return"data"in R&&Wt("WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function c(R){return R.generateMipmaps}function v(R){i.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,g,V,Z,nt,dt=!1){if(R!==null){if(i[R]!==void 0)return i[R];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut;Z&&(ut=t.get("EXT_texture_norm16"),ut||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(V===i.FLOAT&&($=i.R32F),V===i.HALF_FLOAT&&($=i.R16F),V===i.UNSIGNED_BYTE&&($=i.R8),V===i.UNSIGNED_SHORT&&ut&&($=ut.R16_EXT),V===i.SHORT&&ut&&($=ut.R16_SNORM_EXT)),g===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.R8UI),V===i.UNSIGNED_SHORT&&($=i.R16UI),V===i.UNSIGNED_INT&&($=i.R32UI),V===i.BYTE&&($=i.R8I),V===i.SHORT&&($=i.R16I),V===i.INT&&($=i.R32I)),g===i.RG&&(V===i.FLOAT&&($=i.RG32F),V===i.HALF_FLOAT&&($=i.RG16F),V===i.UNSIGNED_BYTE&&($=i.RG8),V===i.UNSIGNED_SHORT&&ut&&($=ut.RG16_EXT),V===i.SHORT&&ut&&($=ut.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RG8UI),V===i.UNSIGNED_SHORT&&($=i.RG16UI),V===i.UNSIGNED_INT&&($=i.RG32UI),V===i.BYTE&&($=i.RG8I),V===i.SHORT&&($=i.RG16I),V===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGB8UI),V===i.UNSIGNED_SHORT&&($=i.RGB16UI),V===i.UNSIGNED_INT&&($=i.RGB32UI),V===i.BYTE&&($=i.RGB8I),V===i.SHORT&&($=i.RGB16I),V===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&($=i.RGBA8UI),V===i.UNSIGNED_SHORT&&($=i.RGBA16UI),V===i.UNSIGNED_INT&&($=i.RGBA32UI),V===i.BYTE&&($=i.RGBA8I),V===i.SHORT&&($=i.RGBA16I),V===i.INT&&($=i.RGBA32I)),g===i.RGB&&(V===i.UNSIGNED_SHORT&&ut&&($=ut.RGB16_EXT),V===i.SHORT&&ut&&($=ut.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){let st=dt?Hs:oe.getTransfer(nt);V===i.FLOAT&&($=i.RGBA32F),V===i.HALF_FLOAT&&($=i.RGBA16F),V===i.UNSIGNED_BYTE&&($=st===fe?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ut&&($=ut.RGBA16_EXT),V===i.SHORT&&ut&&($=ut.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(R,g){let V;return R?g===null||g===Pn||g===ws?V=i.DEPTH24_STENCIL8:g===Ln?V=i.DEPTH32F_STENCIL8:g===bs&&(V=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Pn||g===ws?V=i.DEPTH_COMPONENT24:g===Ln?V=i.DEPTH_COMPONENT32F:g===bs&&(V=i.DEPTH_COMPONENT16),V}function w(R,g){return c(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==Ke?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function C(R){let g=R.target;g.removeEventListener("dispose",C),E(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&p.delete(g)}function y(R){let g=R.target;g.removeEventListener("dispose",y),N(g)}function E(R){let g=n.get(R);if(g.__webglInit===void 0)return;let V=R.source,Z=u.get(V);if(Z){let nt=Z[g.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(R),Object.keys(Z).length===0&&u.delete(V)}n.remove(R)}function P(R){let g=n.get(R);i.deleteTexture(g.__webglTexture);let V=R.source,Z=u.get(V);delete Z[g.__cacheKey],a.memory.textures--}function N(R){let g=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let nt=0;nt<g.__webglFramebuffer[Z].length;nt++)i.deleteFramebuffer(g.__webglFramebuffer[Z][nt]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let V=R.textures;for(let Z=0,nt=V.length;Z<nt;Z++){let dt=n.get(V[Z]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(V[Z])}n.remove(R)}let O=0;function D(){O=0}function I(){return O}function z(R){O=R}function L(){let R=O;return R>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function Y(R){let g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function j(R,g){let V=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let Z=R.image;if(Z===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(V,R,g);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+g)}function J(R,g){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ft(V,R,g);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+g)}function it(R,g){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ft(V,R,g);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+g)}function Q(R,g){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Bt(V,R,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+g)}let bt={[Bi]:i.REPEAT,[zn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},xt={[Ze]:i.NEAREST,[ch]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Ot={[fh]:i.NEVER,[xh]:i.ALWAYS,[ph]:i.LESS,[uo]:i.LEQUAL,[mh]:i.EQUAL,[fo]:i.GEQUAL,[gh]:i.GREATER,[_h]:i.NOTEQUAL};function Kt(R,g){if(g.type===Ln&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Ke||g.magFilter===Aa||g.magFilter===cr||g.magFilter===Ti||g.minFilter===Ke||g.minFilter===Aa||g.minFilter===cr||g.minFilter===Ti)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,bt[g.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,bt[g.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,bt[g.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,xt[g.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,xt[g.minFilter]),g.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ot[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ze||g.minFilter!==cr&&g.minFilter!==Ti||g.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function qt(R,g){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",C));let Z=g.source,nt=u.get(Z);nt===void 0&&(nt={},u.set(Z,nt));let dt=Y(g);if(dt!==R.__cacheKey){nt[dt]===void 0&&(nt[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),nt[dt].usedTimes++;let ut=nt[R.__cacheKey];ut!==void 0&&(nt[R.__cacheKey].usedTimes--,ut.usedTimes===0&&P(g)),R.__cacheKey=dt,R.__webglTexture=nt[dt].texture}return V}function et(R,g,V){return Math.floor(Math.floor(R/V)/g)}function rt(R,g,V,Z){let dt=R.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,V,Z,g.data);else{dt.sort((Et,mt)=>Et.start-mt.start);let ut=0;for(let Et=1;Et<dt.length;Et++){let mt=dt[ut],gt=dt[Et],Lt=mt.start+mt.count,Nt=et(gt.start,g.width,4),Jt=et(mt.start,g.width,4);gt.start<=Lt+1&&Nt===Jt&&et(gt.start+gt.count-1,g.width,4)===Nt?mt.count=Math.max(mt.count,gt.start+gt.count-mt.start):(++ut,dt[ut]=gt)}dt.length=ut+1;let $=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),pt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Et=0,mt=dt.length;Et<mt;Et++){let gt=dt[Et],Lt=Math.floor(gt.start/4),Nt=Math.ceil(gt.count/4),Jt=Lt%g.width,T=Math.floor(Lt/g.width),k=Nt,W=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,T),e.texSubImage2D(i.TEXTURE_2D,0,Jt,T,k,W,V,Z,g.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,$),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,pt)}}function ft(R,g,V){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);let nt=qt(R,g),dt=g.source;e.bindTexture(Z,R.__webglTexture,i.TEXTURE0+V);let ut=n.get(dt);if(dt.version!==ut.__version||nt===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let W=oe.getPrimaries(oe.workingColorSpace),ot=g.colorSpace===ni?null:oe.getPrimaries(g.colorSpace),lt=g.colorSpace===ni||W===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt)}e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let st=m(g.image,!1,s.maxTextureSize);st=Re(g,st);let pt=r.convert(g.format,g.colorSpace),Et=r.convert(g.type),mt=x(g.internalFormat,pt,Et,g.normalized,g.colorSpace,g.isVideoTexture);Kt(Z,g);let gt,Lt=g.mipmaps,Nt=g.isVideoTexture!==!0,Jt=ut.__version===void 0||nt===!0,T=dt.dataReady,k=w(g,st);if(g.isDepthTexture)mt=b(g.format===Ei,g.type),Jt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,mt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,mt,st.width,st.height,0,pt,Et,null));else if(g.isDataTexture)if(Lt.length>0){Nt&&Jt&&e.texStorage2D(i.TEXTURE_2D,k,mt,Lt[0].width,Lt[0].height);for(let W=0,ot=Lt.length;W<ot;W++)gt=Lt[W],Nt?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(i.TEXTURE_2D,W,mt,gt.width,gt.height,0,pt,Et,gt.data);g.generateMipmaps=!1}else Nt?(Jt&&e.texStorage2D(i.TEXTURE_2D,k,mt,st.width,st.height),T&&rt(g,st,pt,Et)):e.texImage2D(i.TEXTURE_2D,0,mt,st.width,st.height,0,pt,Et,st.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Nt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,mt,Lt[0].width,Lt[0].height,st.depth);for(let W=0,ot=Lt.length;W<ot;W++)if(gt=Lt[W],g.format!==Mn)if(pt!==null)if(Nt){if(T)if(g.layerUpdates.size>0){let lt=Pl(gt.width,gt.height,g.format,g.type);for(let B of g.layerUpdates){let H=gt.data.subarray(B*lt/gt.data.BYTES_PER_ELEMENT,(B+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,B,gt.width,gt.height,1,pt,H)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,st.depth,pt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,mt,gt.width,gt.height,st.depth,0,gt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?T&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,st.depth,pt,Et,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,mt,gt.width,gt.height,st.depth,0,pt,Et,gt.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Nt&&Jt&&e.texStorage2D(i.TEXTURE_2D,k,mt,Lt[0].width,Lt[0].height);for(let W=0,ot=Lt.length;W<ot;W++)gt=Lt[W],g.format!==Mn?pt!==null?Nt?T&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,pt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,mt,gt.width,gt.height,0,gt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt.width,gt.height,pt,Et,gt.data):e.texImage2D(i.TEXTURE_2D,W,mt,gt.width,gt.height,0,pt,Et,gt.data)}else if(g.isDataArrayTexture)if(Nt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,k,mt,st.width,st.height,st.depth),T)if(g.layerUpdates.size>0){let W=Pl(st.width,st.height,g.format,g.type);for(let ot of g.layerUpdates){let lt=st.data.subarray(ot*W/st.data.BYTES_PER_ELEMENT,(ot+1)*W/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,st.width,st.height,1,pt,Et,lt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,pt,Et,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,st.width,st.height,st.depth,0,pt,Et,st.data);else if(g.isData3DTexture)Nt?(Jt&&e.texStorage3D(i.TEXTURE_3D,k,mt,st.width,st.height,st.depth),T&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,pt,Et,st.data)):e.texImage3D(i.TEXTURE_3D,0,mt,st.width,st.height,st.depth,0,pt,Et,st.data);else if(g.isFramebufferTexture){if(Jt)if(Nt)e.texStorage2D(i.TEXTURE_2D,k,mt,st.width,st.height);else{let W=st.width,ot=st.height;for(let lt=0;lt<k;lt++)e.texImage2D(i.TEXTURE_2D,lt,mt,W,ot,0,pt,Et,null),W>>=1,ot>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){let W=i.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),st.parentNode!==W){W.appendChild(st),p.add(g),W.onpaint=ot=>{let lt=ot.changedElements;for(let B of p)lt.includes(B.image)&&(B.needsUpdate=!0)},W.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{let lt=i.RGBA,B=i.RGBA,H=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,lt,B,H,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Nt&&Jt){let W=ie(Lt[0]);e.texStorage2D(i.TEXTURE_2D,k,mt,W.width,W.height)}for(let W=0,ot=Lt.length;W<ot;W++)gt=Lt[W],Nt?T&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,pt,Et,gt):e.texImage2D(i.TEXTURE_2D,W,mt,pt,Et,gt);g.generateMipmaps=!1}else if(Nt){if(Jt){let W=ie(st);e.texStorage2D(i.TEXTURE_2D,k,mt,W.width,W.height)}T&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt,Et,st)}else e.texImage2D(i.TEXTURE_2D,0,mt,pt,Et,st);c(g)&&v(Z),ut.__version=dt.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function Bt(R,g,V){if(g.image.length!==6)return;let Z=qt(R,g),nt=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let dt=n.get(nt);if(nt.version!==dt.__version||Z===!0){e.activeTexture(i.TEXTURE0+V);let ut=oe.getPrimaries(oe.workingColorSpace),$=g.colorSpace===ni?null:oe.getPrimaries(g.colorSpace),st=g.colorSpace===ni||ut===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let pt=g.isCompressedTexture||g.image[0].isCompressedTexture,Et=g.image[0]&&g.image[0].isDataTexture,mt=[];for(let B=0;B<6;B++)!pt&&!Et?mt[B]=m(g.image[B],!0,s.maxCubemapSize):mt[B]=Et?g.image[B].image:g.image[B],mt[B]=Re(g,mt[B]);let gt=mt[0],Lt=r.convert(g.format,g.colorSpace),Nt=r.convert(g.type),Jt=x(g.internalFormat,Lt,Nt,g.normalized,g.colorSpace),T=g.isVideoTexture!==!0,k=dt.__version===void 0||Z===!0,W=nt.dataReady,ot=w(g,gt);Kt(i.TEXTURE_CUBE_MAP,g);let lt;if(pt){T&&k&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Jt,gt.width,gt.height);for(let B=0;B<6;B++){lt=mt[B].mipmaps;for(let H=0;H<lt.length;H++){let tt=lt[H];g.format!==Mn?Lt!==null?T?W&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H,0,0,tt.width,tt.height,Lt,tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H,Jt,tt.width,tt.height,0,tt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):T?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H,0,0,tt.width,tt.height,Lt,Nt,tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H,Jt,tt.width,tt.height,0,Lt,Nt,tt.data)}}}else{if(lt=g.mipmaps,T&&k){lt.length>0&&ot++;let B=ie(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Jt,B.width,B.height)}for(let B=0;B<6;B++)if(Et){T?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,mt[B].width,mt[B].height,Lt,Nt,mt[B].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Jt,mt[B].width,mt[B].height,0,Lt,Nt,mt[B].data);for(let H=0;H<lt.length;H++){let St=lt[H].image[B].image;T?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H+1,0,0,St.width,St.height,Lt,Nt,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H+1,Jt,St.width,St.height,0,Lt,Nt,St.data)}}else{T?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Lt,Nt,mt[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Jt,Lt,Nt,mt[B]);for(let H=0;H<lt.length;H++){let tt=lt[H];T?W&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H+1,0,0,Lt,Nt,tt.image[B]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,H+1,Jt,Lt,Nt,tt.image[B])}}}c(g)&&v(i.TEXTURE_CUBE_MAP),dt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ht(R,g,V,Z,nt,dt){let ut=r.convert(V.format,V.colorSpace),$=r.convert(V.type),st=x(V.internalFormat,ut,$,V.normalized,V.colorSpace),pt=n.get(g),Et=n.get(V);if(Et.__renderTarget=g,!pt.__hasExternalTextures){let mt=Math.max(1,g.width>>dt),gt=Math.max(1,g.height>>dt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,dt,st,mt,gt,g.depth,0,ut,$,null):e.texImage2D(nt,dt,st,mt,gt,0,ut,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,nt,Et.__webglTexture,0,ue(g)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,nt,Et.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(R,g,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),g.depthBuffer){let Z=g.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,dt=b(g.stencilBuffer,nt),ut=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ce(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),dt,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),dt,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,dt,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,R)}else{let Z=g.textures;for(let nt=0;nt<Z.length;nt++){let dt=Z[nt],ut=r.convert(dt.format,dt.colorSpace),$=r.convert(dt.type),st=x(dt.internalFormat,ut,$,dt.normalized,dt.colorSpace);ce(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(g),st,g.width,g.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(g),st,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,st,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(R,g,V){let Z=g.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let nt=n.get(g.depthTexture);if(nt.__renderTarget=g,(!nt.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z){if(nt.__webglInit===void 0&&(nt.__webglInit=!0,g.depthTexture.addEventListener("dispose",C)),nt.__webglTexture===void 0){nt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,g.depthTexture);let pt=r.convert(g.depthTexture.format),Et=r.convert(g.depthTexture.type),mt;g.depthTexture.format===kn?mt=i.DEPTH_COMPONENT24:g.depthTexture.format===Ei&&(mt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,mt,g.width,g.height,0,pt,Et,null)}}else j(g.depthTexture,0);let dt=nt.__webglTexture,ut=ue(g),$=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,st=g.depthTexture.format===Ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===kn)ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,$,dt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,st,$,dt,0);else if(g.depthTexture.format===Ei)ce(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,$,dt,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,st,$,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(R){let g=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){let Z=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){let nt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),g.__depthDisposeCallback=nt}g.__boundDepthTexture=Z}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)kt(g.__webglFramebuffer[Z],R,Z);else{let Z=R.texture.mipmaps;Z&&Z.length>0?kt(g.__webglFramebuffer[0],R,0):kt(g.__webglFramebuffer,R,0)}else if(V){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),At(g.__webglDepthbuffer[Z],R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}else{let Z=R.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),At(g.__webglDepthbuffer,R,!1);else{let nt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(R,g,V){let Z=n.get(R);g!==void 0&&ht(Z.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Pt(R)}function Vt(R){let g=R.texture,V=n.get(R),Z=n.get(g);R.addEventListener("dispose",y);let nt=R.textures,dt=R.isWebGLCubeRenderTarget===!0,ut=nt.length>1;if(ut||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,a.memory.textures++),dt){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let st=0;st<g.mipmaps.length;st++)V.__webglFramebuffer[$][st]=i.createFramebuffer()}else V.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)V.__webglFramebuffer[$]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ut)for(let $=0,st=nt.length;$<st;$++){let pt=n.get(nt[$]);pt.__webglTexture===void 0&&(pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&ce(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<nt.length;$++){let st=nt[$];V.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let pt=r.convert(st.format,st.colorSpace),Et=r.convert(st.type),mt=x(st.internalFormat,pt,Et,st.normalized,st.colorSpace,R.isXRRenderTarget===!0),gt=ue(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,V.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),At(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Kt(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let st=0;st<g.mipmaps.length;st++)ht(V.__webglFramebuffer[$][st],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,st);else ht(V.__webglFramebuffer[$],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);c(g)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let $=0,st=nt.length;$<st;$++){let pt=nt[$],Et=n.get(pt),mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Et.__webglTexture),Kt(mt,pt),ht(V.__webglFramebuffer,R,pt,i.COLOR_ATTACHMENT0+$,mt,0),c(pt)&&v(mt)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&($=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,Z.__webglTexture),Kt($,g),g.mipmaps&&g.mipmaps.length>0)for(let st=0;st<g.mipmaps.length;st++)ht(V.__webglFramebuffer[st],R,g,i.COLOR_ATTACHMENT0,$,st);else ht(V.__webglFramebuffer,R,g,i.COLOR_ATTACHMENT0,$,0);c(g)&&v($),e.unbindTexture()}R.depthBuffer&&Pt(R)}function Zt(R){let g=R.textures;for(let V=0,Z=g.length;V<Z;V++){let nt=g[V];if(c(nt)){let dt=A(R),ut=n.get(nt).__webglTexture;e.bindTexture(dt,ut),v(dt),e.unbindTexture()}}}let Gt=[],me=[];function _e(R){if(R.samples>0){if(ce(R)===!1){let g=R.textures,V=R.width,Z=R.height,nt=i.COLOR_BUFFER_BIT,dt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(R),$=g.length>1;if($)for(let pt=0;pt<g.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let st=R.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<g.length;pt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Et=n.get(g[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,V,Z,0,0,V,Z,nt,i.NEAREST),h===!0&&(Gt.length=0,me.length=0,Gt.push(i.COLOR_ATTACHMENT0+pt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Gt.push(dt),me.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pt=0;pt<g.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Et=n.get(g[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&h){let g=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ue(R){return Math.min(s.maxSamples,R.samples)}function ce(R){let g=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function U(R){let g=a.render.frame;d.get(R)!==g&&(d.set(R,g),R.update())}function Re(R,g){let V=R.colorSpace,Z=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Gs&&V!==ni&&(oe.getTransfer(V)===fe?(Z!==Mn||nt!==dn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",V)),g}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=J,this.setTexture3D=it,this.setTextureCube=Q,this.rebindTextures=Yt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ce,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Q0(i,t){function e(n,s=ni){let r,a=oe.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yl)return i.BYTE;if(n===vl)return i.SHORT;if(n===bs)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===Pn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===Dn)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===wl)return i.RGB;if(n===Mn)return i.RGBA;if(n===kn)return i.DEPTH_COMPONENT;if(n===Ei)return i.DEPTH_STENCIL;if(n===Tl)return i.RED;if(n===Pa)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===La)return i.RG_INTEGER;if(n===Da)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka||n===Va||n===Ga||n===pr||n===Ha)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return a===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===to||n===eo||n===no||n===io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===mr||n===co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
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

}`,$l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:j0,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kl=class extends Vn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",h=1,l=null,d=null,p=null,f=null,u=null,_=null,S=typeof XRWebGLBinding<"u",m=new $l,c={},v=e.getContextAttributes(),A=null,x=null,b=[],w=[],C=new Qt,y=null,E=null,P=new Ye;P.viewport=new Ee;let N=new Ye;N.viewport=new Ee;let O=[P,N],D=new ba,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let rt=b[et];return rt===void 0&&(rt=new ds,b[et]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(et){let rt=b[et];return rt===void 0&&(rt=new ds,b[et]=rt),rt.getGripSpace()},this.getHand=function(et){let rt=b[et];return rt===void 0&&(rt=new ds,b[et]=rt),rt.getHandSpace()};function L(et){let rt=w.indexOf(et.inputSource);if(rt===-1)return;let ft=b[rt];ft!==void 0&&(ft.update(et.inputSource,et.frame,l||a),ft.dispatchEvent({type:et.type,data:et.inputSource}))}function Y(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let et=0;et<b.length;et++){let rt=w[et];rt!==null&&(w[et]=null,b[et].disconnect(rt))}I=null,z=null,m.reset();for(let et in c)delete c[et];if(t.setRenderTarget(A),u=null,f=null,p=null,s=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),E!==null){let et=E.camera;et.fov=E.fov,et.zoom=E.zoom,et.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){r=et,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){o=et,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Bt=null,ht=null;v.depth&&(ht=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=v.stencil?Ei:kn,Bt=v.stencil?ws:Pn);let At={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};p=this.getBinding(),f=p.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new hn(f.textureWidth,f.textureHeight,{format:Mn,type:dn,depthTexture:new _i(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ft={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new hn(u.framebufferWidth,u.framebufferHeight,{format:Mn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(et){for(let rt=0;rt<et.removed.length;rt++){let ft=et.removed[rt],Bt=w.indexOf(ft);Bt>=0&&(w[Bt]=null,b[Bt].disconnect(ft))}for(let rt=0;rt<et.added.length;rt++){let ft=et.added[rt],Bt=w.indexOf(ft);if(Bt===-1){for(let At=0;At<b.length;At++)if(At>=w.length){w.push(ft),Bt=At;break}else if(w[At]===null){w[At]=ft,Bt=At;break}if(Bt===-1)break}let ht=b[Bt];ht&&ht.connect(ft)}}let J=new G,it=new G;function Q(et,rt,ft){J.setFromMatrixPosition(rt.matrixWorld),it.setFromMatrixPosition(ft.matrixWorld);let Bt=J.distanceTo(it),ht=rt.projectionMatrix.elements,At=ft.projectionMatrix.elements,kt=ht[14]/(ht[10]-1),Pt=ht[14]/(ht[10]+1),Yt=(ht[9]+1)/ht[5],Vt=(ht[9]-1)/ht[5],Zt=(ht[8]-1)/ht[0],Gt=(At[8]+1)/At[0],me=kt*Zt,_e=kt*Gt,ue=Bt/(-Zt+Gt),ce=ue*-Zt;if(rt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(ce),et.translateZ(ue),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),ht[10]===-1)et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let U=kt+ue,Re=Pt+ue,ie=me-ce,R=_e+(Bt-ce),g=Yt*Pt/Re*U,V=Vt*Pt/Re*U;et.projectionMatrix.makePerspective(ie,R,g,V,U,Re),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function bt(et,rt){rt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(rt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let rt=et.near,ft=et.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),D.near=N.near=P.near=rt,D.far=N.far=P.far=ft,(I!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,z=D.far),D.layers.mask=et.layers.mask|6,P.layers.mask=D.layers.mask&-5,N.layers.mask=D.layers.mask&-3;let Bt=et.parent,ht=D.cameras;bt(D,Bt);for(let At=0;At<ht.length;At++)bt(ht[At],Bt);ht.length===2?Q(D,P,N):D.projectionMatrix.copy(P.projectionMatrix),E===null&&et.isPerspectiveCamera&&(E={camera:et,fov:et.fov,zoom:et.zoom}),xt(et,D,Bt)};function xt(et,rt,ft){ft===null?et.matrix.copy(rt.matrixWorld):(et.matrix.copy(ft.matrixWorld),et.matrix.invert(),et.matrix.multiply(rt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(rt.projectionMatrix),et.projectionMatrixInverse.copy(rt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Xs*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&u===null))return h},this.setFoveation=function(et){h=et,f!==null&&(f.fixedFoveation=et),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=et)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(et){return c[et]};let Ot=null;function Kt(et,rt){if(d=rt.getViewerPose(l||a),_=rt,d!==null){let ft=d.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let Bt=!1;ft.length!==D.cameras.length&&(D.cameras.length=0,Bt=!0);for(let Pt=0;Pt<ft.length;Pt++){let Yt=ft[Pt],Vt=null;if(u!==null)Vt=u.getViewport(Yt);else{let Gt=p.getViewSubImage(f,Yt);Vt=Gt.viewport,Pt===0&&(t.setRenderTargetTextures(x,Gt.colorTexture,Gt.depthStencilTexture),t.setRenderTarget(x))}let Zt=O[Pt];Zt===void 0&&(Zt=new Ye,Zt.layers.enable(Pt),Zt.viewport=new Ee,O[Pt]=Zt),Zt.matrix.fromArray(Yt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Yt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Pt===0&&(D.matrix.copy(Zt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Bt===!0&&D.cameras.push(Zt)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){p=n.getBinding();let Pt=p.getDepthInformation(ft[0]);Pt&&Pt.isValid&&Pt.texture&&m.init(Pt,s.renderState)}if(ht&&ht.includes("camera-access")&&S){t.state.unbindTexture(),p=n.getBinding();for(let Pt=0;Pt<ft.length;Pt++){let Yt=ft[Pt].camera;if(Yt){let Vt=c[Yt];Vt||(Vt=new Qs,c[Yt]=Vt);let Zt=p.getCameraImage(Yt);Vt.sourceTexture=Zt}}}}for(let ft=0;ft<b.length;ft++){let Bt=w[ft],ht=b[ft];Bt!==null&&ht!==void 0&&ht.update(Bt,rt,l||a)}Ot&&Ot(et,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),_=null}let qt=new Jh;qt.setAnimationLoop(Kt),this.setAnimationLoop=function(et){Ot=et},this.dispose=function(){}}},eg=new we,eu=new $t;eu.set(-1,0,0,0,1,0,0,0,1);function ng(i,t){function e(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function n(m,c){c.color.getRGB(m.fogColor.value,Rl(i)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function s(m,c,v,A,x){c.isNodeMaterial?c.uniformsNeedUpdate=!1:c.isMeshBasicMaterial?r(m,c):c.isMeshLambertMaterial?(r(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(r(m,c),p(m,c)):c.isMeshPhongMaterial?(r(m,c),d(m,c),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(r(m,c),f(m,c),c.isMeshPhysicalMaterial&&u(m,c,x)):c.isMeshMatcapMaterial?(r(m,c),_(m,c)):c.isMeshDepthMaterial?r(m,c):c.isMeshDistanceMaterial?(r(m,c),S(m,c)):c.isMeshNormalMaterial?r(m,c):c.isLineBasicMaterial?(a(m,c),c.isLineDashedMaterial&&o(m,c)):c.isPointsMaterial?h(m,c,v,A):c.isSpriteMaterial?l(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function r(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,e(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===on&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,e(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===on&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,e(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,e(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);let v=t.get(c),A=v.envMap,x=v.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(x)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(eu),m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,m.aoMapTransform))}function a(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform))}function o(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function h(m,c,v,A){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*v,m.scale.value=A*.5,c.map&&(m.map.value=c.map,e(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function l(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,e(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,e(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function d(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function p(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function f(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function u(m,c,v){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===on&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.retroreflectivity>0&&(m.retroreflectivity.value=c.retroreflectivity),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,c){c.matcap&&(m.matcap.value=c.matcap)}function S(m,c){let v=t.get(c).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ig(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,b){let w=b.program;n.uniformBlockBinding(x,w)}function l(x,b){let w=s[x.id];w===void 0&&(m(x),w=d(x),s[x.id]=w,x.addEventListener("dispose",v));let C=b.program;n.updateUBOMapping(x,C);let y=t.render.frame;r[x.id]!==y&&(f(x),r[x.id]=y)}function d(x){let b=p();x.__bindingPointIndex=b;let w=i.createBuffer(),C=x.__size,y=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,w),w}function p(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let b=s[x.id],w=x.uniforms,C=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,E=w.length;y<E;y++){let P=w[y];if(Array.isArray(P))for(let N=0,O=P.length;N<O;N++)u(P[N],y,N,C);else u(P,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,b,w,C){if(S(x,b,w,C)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let P=0;for(let N=0;N<E.length;N++){let O=E[N],D=c(O);_(O,x.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,x.__data)}}function _(x,b,w){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,w)}function S(x,b,w,C){let y=x.value,E=b+"_"+w;if(C[E]===void 0)return typeof y=="number"||typeof y=="boolean"?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{let P=C[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(x){let b=x.uniforms,w=0,C=16;for(let E=0,P=b.length;E<P;E++){let N=Array.isArray(b[E])?b[E]:[b[E]];for(let O=0,D=N.length;O<D;O++){let I=N[O],z=Array.isArray(I.value)?I.value:[I.value];for(let L=0,Y=z.length;L<Y;L++){let j=z[L],J=c(j),it=w%C,Q=it%J.boundary,bt=it+Q;w+=Q,bt!==0&&C-bt<J.storage&&(w+=C-bt),I.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=J.storage}}}let y=w%C;return y>0&&(w+=C-y),x.__size=w,x.__cache={},this}function c(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",x),b}function v(x){let b=x.target;b.removeEventListener("dispose",v);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function A(){for(let x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:h,update:l,dispose:A}}var sg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function rg(){return Wn===null&&(Wn=new oa(sg,16,16,Ai,Dn),Wn.name="DFG_LUT",Wn.minFilter=Ke,Wn.magFilter=Ke,Wn.wrapS=zn,Wn.wrapT=zn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var xo=class{constructor(t={}){let{canvas:e=vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:u=dn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let S=u,m=new Set([Da,La,Pa]),c=new Set([dn,Pn,bs,ws,Ca,Ia]),v=new Uint32Array(4),A=new Int32Array(4),x=new G,b=null,w=null,C=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,O=null,D=null,I=null,z=null;this._outputColorSpace=qe;let L=0,Y=0,j=null,J=-1,it=null,Q=new Ee,bt=new Ee,xt=null,Ot=new Rt(0),Kt=0,qt=e.width,et=e.height,rt=1,ft=null,Bt=null,ht=new Ee(0,0,qt,et),At=new Ee(0,0,qt,et),kt=!1,Pt=new ps,Yt=!1,Vt=!1,Zt=new we,Gt=new G,me=new Ee,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ce(){return j===null?rt:1}let U=n;function Re(M,F){return e.getContext(M,F)}let ie,R,g,V,Z,nt,dt,ut,$,st,pt,Et,mt,gt,Lt,Nt,Jt,T,k,W,ot,lt,B;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){let F="webgl2";if(U=Re(F,M),U===null)throw Re(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}H()}catch(M){throw e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Xt("WebGLRenderer: "+M.message),M}function H(){ie=new dm(U),ie.init(),ot=new Q0(U,ie),R=new nm(U,ie,t,ot),g=new $0(U,ie),R.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),D=U.createFramebuffer(),I=U.createFramebuffer(),z=U.createFramebuffer(),V=new mm(U),Z=new F0,nt=new K0(U,ie,g,Z,R,ot,V),dt=new um(P),ut=new gd(U),lt=new tm(U,ut),$=new fm(U,ut,V,lt),st=new _m(U,$,ut,lt,V),T=new gm(U,R,nt),Lt=new im(Z),pt=new N0(P,dt,ie,R,lt,Lt),Et=new ng(P,Z),mt=new B0,gt=new W0(ie),Jt=new jp(P,dt,g,st,_,h),Nt=new J0(P,st,R),B=new ig(U,V,R,g),k=new em(U,ie,V),W=new pm(U,ie,V),V.programs=pt.programs,P.capabilities=R,P.extensions=ie,P.properties=Z,P.renderLists=mt,P.shadowMap=Nt,P.state=g,P.info=V}S!==dn&&(E=new ym(S,e.width,e.height,o,s,r));let tt=new Kl(P,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ie.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ie.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(M){M!==void 0&&(rt=M,this.setSize(qt,et,!1))},this.getSize=function(M){return M.set(qt,et)},this.setSize=function(M,F,K=!0){if(tt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=M,et=F,e.width=Math.floor(M*rt),e.height=Math.floor(F*rt),K===!0&&(e.style.width=M+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(qt*rt,et*rt).floor()},this.setDrawingBufferSize=function(M,F,K){qt=M,et=F,rt=K,e.width=Math.floor(M*K),e.height=Math.floor(F*K),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(S===dn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(ht)},this.setViewport=function(M,F,K,X){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,F,K,X),g.viewport(Q.copy(ht).multiplyScalar(rt).round())},this.getScissor=function(M){return M.copy(At)},this.setScissor=function(M,F,K,X){M.isVector4?At.set(M.x,M.y,M.z,M.w):At.set(M,F,K,X),g.scissor(bt.copy(At).multiplyScalar(rt).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(M){g.setScissorTest(kt=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){Bt=M},this.getClearColor=function(M){return M.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,K=!0){let X=0;if(M){let q=!1;if(j!==null){let Mt=j.texture.format;q=m.has(Mt)}if(q){let Mt=j.texture.type,Tt=c.has(Mt),vt=Jt.getClearColor(),Ct=Jt.getClearAlpha(),Ut=vt.r,ee=vt.g,se=vt.b;Tt?(v[0]=Ut,v[1]=ee,v[2]=se,v[3]=Ct,U.clearBufferuiv(U.COLOR,0,v)):(A[0]=Ut,A[1]=ee,A[2]=se,A[3]=Ct,U.clearBufferiv(U.COLOR,0,A))}else X|=U.COLOR_BUFFER_BIT}F&&(X|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),O=M},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Jt.dispose(),mt.dispose(),gt.dispose(),Z.dispose(),dt.dispose(),st.dispose(),lt.dispose(),B.dispose(),pt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Zn),tt.removeEventListener("sessionend",Ns),Li.stop()};function St(M){M.preventDefault(),Al("WebGLRenderer: Context Lost."),N=!0}function at(){Al("WebGLRenderer: Context Restored."),N=!1;let M=V.autoReset,F=Nt.enabled,K=Nt.autoUpdate,X=Nt.needsUpdate,q=Nt.type;H(),V.autoReset=M,Nt.enabled=F,Nt.autoUpdate=K,Nt.needsUpdate=X,Nt.type=q}function ct(M){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Dt(M){let F=M.target;F.removeEventListener("dispose",Dt),Ft(F)}function Ft(M){Ht(M),Z.remove(M)}function Ht(M){let F=Z.get(M).programs;F!==void 0&&(F.forEach(function(K){pt.releaseProgram(K)}),M.isShaderMaterial&&pt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,K,X,q,Mt){F===null&&(F=_e);let Tt=q.isMesh&&q.matrixWorld.determinantAffine()<0,vt=Tu(M,F,K,X,q);g.setMaterial(X,Tt);let Ct=K.index,Ut=1;if(X.wireframe===!0){if(Ct=$.getWireframeAttribute(K),Ct===void 0)return;Ut=2}let ee=K.drawRange,se=K.attributes.position,It=ee.start*Ut,de=(ee.start+ee.count)*Ut;Mt!==null&&(It=Math.max(It,Mt.start*Ut),de=Math.min(de,(Mt.start+Mt.count)*Ut)),Ct!==null?(It=Math.max(It,0),de=Math.min(de,Ct.count)):se!=null&&(It=Math.max(It,0),de=Math.min(de,se.count));let Ne=de-It;if(Ne<0||Ne===1/0)return;lt.setup(q,X,vt,K,Ct);let Me,xe=k;if(Ct!==null&&(Me=ut.get(Ct),xe=W,xe.setIndex(Me)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*ce()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(q.isLine){let je=X.linewidth;je===void 0&&(je=1),g.setLineWidth(je*ce()),q.isLineSegments?xe.setMode(U.LINES):q.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else q.isPoints?xe.setMode(U.POINTS):q.isSprite&&xe.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))xe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let je=q._multiDrawStarts,wt=q._multiDrawCounts,sn=q._multiDrawCount,le=Ct?ut.get(Ct).bytesPerElement:1,yn=Z.get(X).currentProgram.getUniforms();for(let On=0;On<sn;On++)yn.setValue(U,"_gl_DrawID",On),xe.render(je[On]/le,wt[On])}else if(q.isInstancedMesh)xe.renderInstances(It,Ne,q.count);else if(K.isInstancedBufferGeometry){let je=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,wt=Math.min(K.instanceCount,je);xe.renderInstances(It,Ne,wt)}else xe.render(It,Ne)};function We(M,F,K,X){O!==null&&M.isNodeMaterial&&O.setObject(X,M),Yt===!0&&Lt.setState(M,K,!1),M.transparent===!0&&M.side===un&&M.forceSinglePass===!1?(M.side=on,M.needsUpdate=!0,Er(M,F,X),M.side=Si,M.needsUpdate=!0,Er(M,F,X),M.side=un):Er(M,F,X)}this.compile=function(M,F,K=null){K===null&&(K=M),O!==null&&O.renderStart(M,F,K),w=gt.get(K),w.init(F),y.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),M!==K&&M.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),Vt=this.localClippingEnabled,Yt=Lt.init(this.clippingPlanes,Vt),Yt===!0&&Lt.setGlobalState(this.clippingPlanes,F),O!==null&&Nt.render(w.state.shadowsArray,K,F);let X=new Set;return M.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Mt=q.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let vt=Mt[Tt];We(vt,K,F,q),X.add(vt)}else We(Mt,K,F,q),X.add(Mt)}),w=y.pop(),O!==null&&O.renderEnd(),X},this.compileAsync=function(M,F,K=null){let X=this.compile(M,F,K);return new Promise(q=>{function Mt(){if(X.forEach(function(Tt){let Ct=Z.get(Tt).currentProgram;(Ct===void 0||Ct.isReady())&&X.delete(Tt)}),X.size===0){q(M);return}setTimeout(Mt,10)}ie.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ke=null;function Yn(M){ke&&ke(M)}function Zn(){Li.stop()}function Ns(){Li.start()}let Li=new Jh;Li.setAnimationLoop(Yn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(M){ke=M,tt.setAnimationLoop(M),M===null?Li.stop():Li.start()},tt.addEventListener("sessionstart",Zn),tt.addEventListener("sessionend",Ns),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(M,F);let K=tt.enabled===!0&&tt.isPresenting===!0,X=E!==null&&(j===null||K)&&E.begin(P,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(F),F=tt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,F,j),w=gt.get(M,y.length),w.init(F),w.state.textureUnits=nt.getTextureUnits(),y.push(w),Zt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Pt.setFromProjectionMatrix(Zt,Cn,F.reversedDepth),Vt=this.localClippingEnabled,Yt=Lt.init(this.clippingPlanes,Vt),b=mt.get(M,C.length),b.init(),C.push(b),tt.enabled===!0&&tt.isPresenting===!0){let Tt=P.xr.getDepthSensingMesh();Tt!==null&&Co(Tt,F,-1/0,P.sortObjects)}Co(M,F,0,P.sortObjects),b.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&b.sort(ft,Bt),ue=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ue&&Jt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Lt.beginShadows();let q=w.state.shadowsArray;if(Nt.render(q,M,F),Yt===!0&&Lt.endShadows(),(X&&E.hasRenderPass())===!1){let Tt=b.opaque,vt=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Ct=F.cameras;if(vt.length>0)for(let Ut=0,ee=Ct.length;Ut<ee;Ut++){let se=Ct[Ut];fc(Tt,vt,M,se)}ue&&Jt.render(M);for(let Ut=0,ee=Ct.length;Ut<ee;Ut++){let se=Ct[Ut];dc(b,M,se,se.viewport)}}else vt.length>0&&fc(Tt,vt,M,F),ue&&Jt.render(M),dc(b,M,F)}j!==null&&Y===0&&(nt.updateMultisampleRenderTarget(j),nt.updateRenderTargetMipmap(j)),X&&E.end(P),M.isScene===!0&&M.onAfterRender(P,M,F),lt.resetDefaultState(),J=-1,it=null,y.pop(),y.length>0?(w=y[y.length-1],nt.setTextureUnits(w.state.textureUnits),Yt===!0&&Lt.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,O!==null&&O.renderEnd()};function Co(M,F,K,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)K=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)w.pushLightProbeGrid(M);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Pt)){X&&me.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Zt);let Tt=st.update(M),vt=M.material;vt.visible&&b.push(M,Tt,vt,K,me.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Pt))){let Tt=st.update(M),vt=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),me.copy(M.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),me.copy(Tt.boundingSphere.center)),me.applyMatrix4(M.matrixWorld).applyMatrix4(Zt)),Array.isArray(vt)){let Ct=Tt.groups;for(let Ut=0,ee=Ct.length;Ut<ee;Ut++){let se=Ct[Ut],It=vt[se.materialIndex];It&&It.visible&&b.push(M,Tt,It,K,me.z,se,F)}}else vt.visible&&b.push(M,Tt,vt,K,me.z,null,F)}}let Mt=M.children;for(let Tt=0,vt=Mt.length;Tt<vt;Tt++)Co(Mt[Tt],F,K,X)}function dc(M,F,K,X){let{opaque:q,transmissive:Mt,transparent:Tt}=M;w.setupLightsView(K),Yt===!0&&Lt.setGlobalState(P.clippingPlanes,K),X&&g.viewport(Q.copy(X)),q.length>0&&Tr(q,F,K),Mt.length>0&&Tr(Mt,F,K),Tt.length>0&&Tr(Tt,F,K),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function fc(M,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){let It=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new hn(1,1,{generateMipmaps:!0,type:It?Dn:dn,minFilter:Ti,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[X.id],Tt=X.viewport||Q;Mt.setSize(Tt.z*P.transmissionResolutionScale,Tt.w*P.transmissionResolutionScale);let vt=P.getRenderTarget(),Ct=P.getActiveCubeFace(),Ut=P.getActiveMipmapLevel();P.setRenderTarget(Mt),P.getClearColor(Ot),Kt=P.getClearAlpha(),Kt<1&&P.setClearColor(16777215,.5),P.clear(),ue&&Jt.render(K);let ee=P.toneMapping;P.toneMapping=In;let se=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),Yt===!0&&Lt.setGlobalState(P.clippingPlanes,X),Tr(M,K,X),nt.updateMultisampleRenderTarget(Mt),nt.updateRenderTargetMipmap(Mt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let de=0,Ne=F.length;de<Ne;de++){let Me=F[de],{object:xe,geometry:je,material:wt,group:sn}=Me;if(wt.side===un&&xe.layers.test(X.layers)){let le=wt.side;wt.side=on,wt.needsUpdate=!0,pc(xe,K,X,je,wt,sn),wt.side=le,wt.needsUpdate=!0,It=!0}}It===!0&&(nt.updateMultisampleRenderTarget(Mt),nt.updateRenderTargetMipmap(Mt))}P.setRenderTarget(vt,Ct,Ut),P.setClearColor(Ot,Kt),se!==void 0&&(X.viewport=se),P.toneMapping=ee}function Tr(M,F,K){let X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Mt=M.length;q<Mt;q++){let Tt=M[q],{object:vt,geometry:Ct,group:Ut}=Tt,ee=Tt.material;ee.allowOverride===!0&&X!==null&&(ee=X),vt.layers.test(K.layers)&&pc(vt,F,K,Ct,ee,Ut)}}function pc(M,F,K,X,q,Mt){O!==null&&q.isNodeMaterial&&O.setObject(M,q),M.onBeforeRender(P,F,K,X,q,Mt),M.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(P,F,K,X,M,Mt),q.transparent===!0&&q.side===un&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,P.renderBufferDirect(K,F,X,q,M,Mt),q.side=Si,q.needsUpdate=!0,P.renderBufferDirect(K,F,X,q,M,Mt),q.side=un):P.renderBufferDirect(K,F,X,q,M,Mt),M.onAfterRender(P,F,K,X,q,Mt)}function Er(M,F,K){F.isScene!==!0&&(F=_e);let X=Z.get(M),q=w.state.lights,Mt=w.state.shadowsArray,Tt=q.state.version,vt=pt.getParameters(M,q.state,Mt,F,K,w.state.lightProbeGridArray),Ct=pt.getProgramCacheKey(vt),Ut=X.programs;X.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;let ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;X.envMap=dt.get(M.envMap||X.environment,ee),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Dt),Ut=new Map,X.programs=Ut);let se=Ut.get(Ct);if(se!==void 0){if(X.currentProgram===se&&X.lightsStateVersion===Tt)return gc(M,vt),se}else vt.uniforms=pt.getUniforms(M),O!==null&&M.isNodeMaterial&&O.build(M,K,vt),M.onBeforeCompile(vt,P),se=pt.acquireProgram(vt,Ct),Ut.set(Ct,se),X.uniforms=vt.uniforms;let It=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(It.clippingPlanes=Lt.uniform),gc(M,vt),X.needsLights=Au(M),X.lightsStateVersion=Tt,X.needsLights&&(It.ambientLightColor.value=q.state.ambient,It.lightProbe.value=q.state.probe,It.sunLights.value=q.state.sun,It.sunLightShadows.value=q.state.sunShadow,It.directionalLights.value=q.state.directional,It.directionalLightShadows.value=q.state.directionalShadow,It.spotLights.value=q.state.spot,It.spotLightShadows.value=q.state.spotShadow,It.rectAreaLights.value=q.state.rectArea,It.ltc_1.value=q.state.rectAreaLTC1,It.ltc_2.value=q.state.rectAreaLTC2,It.pointLights.value=q.state.point,It.pointLightShadows.value=q.state.pointShadow,It.hemisphereLights.value=q.state.hemi,It.sunShadowMatrix.value=q.state.sunShadowMatrix,It.sunShadowCascade.value=q.state.sunShadowCascade,It.directionalShadowMatrix.value=q.state.directionalShadowMatrix,It.spotLightMatrix.value=q.state.spotLightMatrix,It.spotLightMap.value=q.state.spotLightMap,It.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=se,X.uniformsList=null,se}function mc(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=As.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function gc(M,F){let K=Z.get(M);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function wu(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;x.setFromMatrixPosition(F.matrixWorld);for(let K=0,X=M.length;K<X;K++){let q=M[K];if(q.texture!==null&&q.boundingBox.containsPoint(x))return q}return null}function Tu(M,F,K,X,q){F.isScene!==!0&&(F=_e),nt.resetTextureUnits();let Mt=F.fog,Tt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,vt=j===null?P.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:oe.workingColorSpace,Ct=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ut=dt.get(X.envMap||Tt,Ct),ee=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,se=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),It=!!K.morphAttributes.position,de=!!K.morphAttributes.normal,Ne=!!K.morphAttributes.color,Me=In;X.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=P.toneMapping);let xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,je=xe!==void 0?xe.length:0,wt=Z.get(X),sn=w.state.lights;if(Yt===!0&&(Vt===!0||M!==it)){let ye=M===it&&X.id===J;Lt.setState(X,M,ye)}let le=!1;X.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==sn.state.version||wt.outputColorSpace!==vt||q.isBatchedMesh&&wt.batching===!1||!q.isBatchedMesh&&wt.batching===!0||q.isBatchedMesh&&wt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&wt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&wt.instancing===!1||!q.isInstancedMesh&&wt.instancing===!0||q.isSkinnedMesh&&wt.skinning===!1||!q.isSkinnedMesh&&wt.skinning===!0||q.isInstancedMesh&&wt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&wt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&wt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&wt.instancingMorph===!1&&q.morphTexture!==null||wt.envMap!==Ut||X.fog===!0&&wt.fog!==Mt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Lt.numPlanes||wt.numIntersection!==Lt.numIntersection)||wt.vertexAlphas!==ee||wt.vertexTangents!==se||wt.morphTargets!==It||wt.morphNormals!==de||wt.morphColors!==Ne||wt.toneMapping!==Me||wt.morphTargetsCount!==je||!!wt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,wt.__version=X.version);let yn=wt.currentProgram;le===!0&&(yn=Er(X,F,q),O&&X.isNodeMaterial&&O.onUpdateProgram(X,yn,wt));let On=!1,ai=!1,qi=!1,ge=yn.getUniforms(),De=wt.uniforms;if(g.useProgram(yn.program)&&(On=!0,ai=!0,qi=!0),X.id!==J&&(J=X.id,ai=!0),wt.needsLights){let ye=wu(w.state.lightProbeGridArray,q);wt.lightProbeGrid!==ye&&(wt.lightProbeGrid=ye,ai=!0)}if(On||it!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",M.projectionMatrix),ge.setValue(U,"viewMatrix",M.matrixWorldInverse);let li=ge.map.cameraPosition;li!==void 0&&li.setValue(U,Gt.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),it!==M&&(it=M,ai=!0,qi=!0)}if(wt.needsLights&&(sn.state.sunShadowMap.length>0&&ge.setValue(U,"sunShadowMap",sn.state.sunShadowMap,nt),sn.state.directionalShadowMap.length>0&&ge.setValue(U,"directionalShadowMap",sn.state.directionalShadowMap,nt),sn.state.spotShadowMap.length>0&&ge.setValue(U,"spotShadowMap",sn.state.spotShadowMap,nt),sn.state.pointShadowMap.length>0&&ge.setValue(U,"pointShadowMap",sn.state.pointShadowMap,nt)),q.isSkinnedMesh){ge.setOptional(U,q,"bindMatrix"),ge.setOptional(U,q,"bindMatrixInverse");let ye=q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ge.setValue(U,"boneTexture",ye.boneTexture,nt))}q.isBatchedMesh&&(ge.setOptional(U,q,"batchingTexture"),ge.setValue(U,"batchingTexture",q._matricesTexture,nt),ge.setOptional(U,q,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",q._indirectTexture,nt),ge.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",q._colorsTexture,nt));let oi=K.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&T.update(q,K,yn),(ai||wt.receiveShadow!==q.receiveShadow)&&(wt.receiveShadow=q.receiveShadow,ge.setValue(U,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=rg()),ai){if(ge.setValue(U,"toneMappingExposure",P.toneMappingExposure),wt.needsLights&&Eu(De,qi),Mt&&X.fog===!0&&Et.refreshFogUniforms(De,Mt),Et.refreshMaterialUniforms(De,X,rt,et,w.state.transmissionRenderTarget[M.id]),wt.needsLights&&wt.lightProbeGrid){let ye=wt.lightProbeGrid;De.probesSH.value=ye.texture,De.probesMin.value.copy(ye.boundingBox.min),De.probesMax.value.copy(ye.boundingBox.max),De.probesResolution.value.copy(ye.resolution)}As.upload(U,mc(wt),De,nt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(As.upload(U,mc(wt),De,nt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(U,"center",q.center),ge.setValue(U,"modelViewMatrix",q.modelViewMatrix),ge.setValue(U,"normalMatrix",q.normalMatrix),ge.setValue(U,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let ye=X.uniformsGroups;for(let li=0,Yi=ye.length;li<Yi;li++){let xc=ye[li];B.update(xc,yn),B.bind(xc,yn)}}return yn}function Eu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Au(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,F,K){let X=Z.get(M);X.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Z.get(M.texture).__webglTexture=F,Z.get(M.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let K=Z.get(M);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,K=0){j=M,L=F,Y=K;let X=null,q=!1,Mt=!1;if(M){let vt=Z.get(M);if(vt.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(U.FRAMEBUFFER,vt.__webglFramebuffer),Q.copy(M.viewport),bt.copy(M.scissor),xt=M.scissorTest,g.viewport(Q),g.scissor(bt),g.setScissorTest(xt),J=-1;return}else if(vt.__webglFramebuffer===void 0)nt.setupRenderTarget(M);else if(vt.__hasExternalTextures)nt.rebindTextures(M,Z.get(M.texture).__webglTexture,Z.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ee=M.depthTexture;if(vt.__boundDepthTexture!==ee){if(ee!==null&&Z.has(ee)&&(M.width!==ee.image.width||M.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);let Ut=Z.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ut[F])?X=Ut[F][K]:X=Ut[F],q=!0):M.samples>0&&nt.useMultisampledRTT(M)===!1?X=Z.get(M).__webglMultisampledFramebuffer:Array.isArray(Ut)?X=Ut[K]:X=Ut,Q.copy(M.viewport),bt.copy(M.scissor),xt=M.scissorTest}else Q.copy(ht).multiplyScalar(rt).floor(),bt.copy(At).multiplyScalar(rt).floor(),xt=kt;if(K!==0&&(X=D),g.bindFramebuffer(U.FRAMEBUFFER,X)&&g.drawBuffers(M,X),g.viewport(Q),g.scissor(bt),g.setScissorTest(xt),q){let vt=Z.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,K)}else if(Mt){let vt=F;for(let Ct=0;Ct<M.textures.length;Ct++){let Ut=Z.get(M.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Ut.__webglTexture,K,vt)}}else if(M!==null&&K!==0){let vt=Z.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vt.__webglTexture,K)}J=-1};function _c(M){let F=Z.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=R.textureFormatReadable(M.format),F.__typeReadable=R.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,K,X,q,Mt,Tt,vt=0){if(!(M&&M.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct){g.bindFramebuffer(U.FRAMEBUFFER,Ct);try{let Ut=M.textures[vt],ee=Ut.format,se=Ut.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let It=_c(Ut);if(It.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&K>=0&&K<=M.height-q&&U.readPixels(F,K,X,q,ot.convert(ee),ot.convert(se),Mt)}finally{let Ut=j!==null?Z.get(j).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(M,F,K,X,q,Mt,Tt,vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Z.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ct=Ct[Tt]),Ct)if(F>=0&&F<=M.width-X&&K>=0&&K<=M.height-q){g.bindFramebuffer(U.FRAMEBUFFER,Ct);let Ut=M.textures[vt],ee=Ut.format,se=Ut.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let It=_c(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let de=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),U.readPixels(F,K,X,q,ot.convert(ee),ot.convert(se),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ne=j!==null?Z.get(j).__webglFramebuffer:null;g.bindFramebuffer(U.FRAMEBUFFER,Ne);let Me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Sh(U,Me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,de),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(de),U.deleteSync(Me),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,K=0){let X=Math.pow(2,-K),q=Math.floor(M.image.width*X),Mt=Math.floor(M.image.height*X),Tt=F!==null?F.x:0,vt=F!==null?F.y:0;nt.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,Tt,vt,q,Mt),g.unbindTexture()},this.copyTextureToTexture=function(M,F,K=null,X=null,q=0,Mt=0){let Tt,vt,Ct,Ut,ee,se,It,de,Ne,Me=M.isCompressedTexture?M.mipmaps[Mt]:M.image;if(K!==null)Tt=K.max.x-K.min.x,vt=K.max.y-K.min.y,Ct=K.isBox3?K.max.z-K.min.z:1,Ut=K.min.x,ee=K.min.y,se=K.isBox3?K.min.z:0;else{let De=Math.pow(2,-q);Tt=Math.floor(Me.width*De),vt=Math.floor(Me.height*De),M.isDataArrayTexture?Ct=Me.depth:M.isData3DTexture?Ct=Math.floor(Me.depth*De):Ct=1,Ut=0,ee=0,se=0}X!==null?(It=X.x,de=X.y,Ne=X.z):(It=0,de=0,Ne=0);let xe=ot.convert(F.format),je=ot.convert(F.type),wt;F.isData3DTexture?(nt.setTexture3D(F,0),wt=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(nt.setTexture2DArray(F,0),wt=U.TEXTURE_2D_ARRAY):(nt.setTexture2D(F,0),wt=U.TEXTURE_2D),g.activeTexture(U.TEXTURE0),g.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let sn=g.getParameter(U.UNPACK_ROW_LENGTH),le=g.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=g.getParameter(U.UNPACK_SKIP_PIXELS),On=g.getParameter(U.UNPACK_SKIP_ROWS),ai=g.getParameter(U.UNPACK_SKIP_IMAGES);g.pixelStorei(U.UNPACK_ROW_LENGTH,Me.width),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Me.height),g.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),g.pixelStorei(U.UNPACK_SKIP_ROWS,ee),g.pixelStorei(U.UNPACK_SKIP_IMAGES,se);let qi=M.isDataArrayTexture||M.isData3DTexture,ge=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let De=Z.get(M),oi=Z.get(F),ye=Z.get(De.__renderTarget),li=Z.get(oi.__renderTarget);g.bindFramebuffer(U.READ_FRAMEBUFFER,ye.__webglFramebuffer),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Yi=0;Yi<Ct;Yi++)qi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(M).__webglTexture,q,se+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Z.get(F).__webglTexture,Mt,Ne+Yi)),U.blitFramebuffer(Ut,ee,Tt,vt,It,de,Tt,vt,U.DEPTH_BUFFER_BIT,U.NEAREST);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||M.isRenderTargetTexture||Z.has(M)){let De=Z.get(M),oi=Z.get(F);g.bindFramebuffer(U.READ_FRAMEBUFFER,I),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let ye=0;ye<Ct;ye++)qi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.__webglTexture,q,se+ye):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,De.__webglTexture,q),ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,oi.__webglTexture,Mt,Ne+ye):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,oi.__webglTexture,Mt),q!==0?U.blitFramebuffer(Ut,ee,Tt,vt,It,de,Tt,vt,U.COLOR_BUFFER_BIT,U.NEAREST):ge?U.copyTexSubImage3D(wt,Mt,It,de,Ne+ye,Ut,ee,Tt,vt):U.copyTexSubImage2D(wt,Mt,It,de,Ut,ee,Tt,vt);g.bindFramebuffer(U.READ_FRAMEBUFFER,null),g.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(wt,Mt,It,de,Ne,Tt,vt,Ct,xe,je,Me.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,Mt,It,de,Ne,Tt,vt,Ct,xe,Me.data):U.texSubImage3D(wt,Mt,It,de,Ne,Tt,vt,Ct,xe,je,Me):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,It,de,Tt,vt,xe,je,Me.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,It,de,Me.width,Me.height,xe,Me.data):U.texSubImage2D(U.TEXTURE_2D,Mt,It,de,Tt,vt,xe,je,Me);g.pixelStorei(U.UNPACK_ROW_LENGTH,sn),g.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le),g.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),g.pixelStorei(U.UNPACK_SKIP_ROWS,On),g.pixelStorei(U.UNPACK_SKIP_IMAGES,ai),Mt===0&&F.generateMipmaps&&U.generateMipmap(wt),g.unbindTexture()},this.initRenderTarget=function(M){Z.get(M).__webglFramebuffer===void 0&&nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?nt.setTextureCube(M,0):M.isData3DTexture?nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?nt.setTexture2DArray(M,0):nt.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){L=0,Y=0,j=null,g.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function Ri(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,h=new Qe,l=0;for(let d=0;d<i.length;++d){let p=i[d],f=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in p.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(p.attributes[u]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in p.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(p.morphAttributes[u])}if(t){let u;if(e)u=p.index.count;else if(p.attributes.position!==void 0)u=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,u,d),l+=u}}if(e){let d=0,p=[];for(let f=0;f<i.length;++f){let u=i[f].index;for(let _=0;_<u.count;++_)p.push(u.getX(_)+d);d+=i[f].attributes.position.count}h.setIndex(p)}for(let d in r){let p=nu(r[d]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;h.setAttribute(d,p)}for(let d in a){let p=a[d][0].length;if(p!==0){h.morphAttributes=h.morphAttributes||{},h.morphAttributes[d]=[];for(let f=0;f<p;++f){let u=[];for(let S=0;S<a[d].length;++S)u.push(a[d][S][f]);let _=nu(u);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;h.morphAttributes[d].push(_)}}}return h}function nu(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let d=i[l];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let a=new t(r),o=new cn(a,e,n),h=0;for(let l=0;l<i.length;++l){let d=i[l];if(d.isInterleavedBufferAttribute){let p=h/e;for(let f=0,u=d.count;f<u;f++)for(let _=0;_<e;_++){let S=d.getComponent(f,_);o.setComponent(f+p,_,S)}}else a.set(d.array,h);h+=d.count*e}return s!==void 0&&(o.gpuType=s),o}var vr=new G;function Sn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),h=Math.PI/4;vr.copy(t),vr[n]=0,vr.normalize();let l=.5*a/(a+o),d=1-vr.angleTo(i)/h;return Math.sign(vr[e])===1?d*l:o/(a+o)+l+l*(1-d)}var Mo=class i extends $e{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let h=new G,l=new G,d=new G(t,e,n).divideScalar(2).subScalar(r),p=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,_=p.length/6,S=new G,m=.5/a;for(let c=0,v=0;c<p.length;c+=3,v+=2)switch(h.fromArray(p,c),l.copy(h),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),p[c+0]=d.x*Math.sign(h.x)+l.x*r,p[c+1]=d.y*Math.sign(h.y)+l.y*r,p[c+2]=d.z*Math.sign(h.z)+l.z*r,f[c+0]=l.x,f[c+1]=l.y,f[c+2]=l.z,Math.floor(c/_)){case 0:S.set(1,0,0),u[v+0]=Sn(S,l,"z","y",r,n),u[v+1]=1-Sn(S,l,"y","z",r,e);break;case 1:S.set(-1,0,0),u[v+0]=1-Sn(S,l,"z","y",r,n),u[v+1]=1-Sn(S,l,"y","z",r,e);break;case 2:S.set(0,1,0),u[v+0]=1-Sn(S,l,"x","z",r,t),u[v+1]=Sn(S,l,"z","x",r,n);break;case 3:S.set(0,-1,0),u[v+0]=1-Sn(S,l,"x","z",r,t),u[v+1]=1-Sn(S,l,"z","x",r,n);break;case 4:S.set(0,0,1),u[v+0]=1-Sn(S,l,"x","y",r,t),u[v+1]=1-Sn(S,l,"y","x",r,e);break;case 5:S.set(0,0,-1),u[v+0]=Sn(S,l,"x","y",r,t),u[v+1]=1-Sn(S,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Ql={x0:-5,x1:5,z0:-7,z1:6,H:3},iu={A:3.4,B:0,C:-3.4},su=[-4.5,-1.5,1.5,4.5],Te={x0:-3.2,x1:-2.2,h:2.3},xn=[.9,Ql.H-.01,-1.5],pe={x:0,z:0,yaw:0,w:1.4,d:.72,top:.74},ii={x:-.06,z:-.19,ax:-.43,az:.07,ayaw:.45},Cs={x:0,z:-1.1,yaw:0},ru=[{x:0,z:0,yaw:0,monitor:!1,chair:!1,mug:!0,paper:!0},{x:-1.7,z:0,yaw:0,monitor:!1,chair:!0,chairBack:.75,paper:!0,mug:!0},{x:-3.6,z:-2.6,yaw:Math.PI/2,monitor:!1,chair:!0,chairBack:.7,paper:!0},{x:-3.6,z:-1.1,yaw:Math.PI/2,monitor:!0,chair:!0,chairBack:.7},{x:3.3,z:2.2,yaw:-Math.PI/2,monitor:!0,chair:!0,chairBack:.7},{x:3.3,z:3.7,yaw:-Math.PI/2,monitor:!1,chair:!0,chairBack:.7,mug:!0,paper:!0}],fn={x:2.5,z:-4.8,w:2.4,d:1,stools:[[-.7,-.85],[0,-.85],[.7,-.85],[-.66,.85],[.04,.85],[.74,.85]]},au=[[4.3,-6.2,1.9,3,.7,26,.28],[-4.3,-6.2,1.6,11,.5,20,.24],[4.3,5.3,1.7,7,.6,22,.26]],si={x:-4.67,z:2.4,w:.45,d:1.6},Ce={x:-.6,z:-6.74,w:1.9,d:.42,h:.74};var Ci=new Rt("#fff0de"),So=new Rt("#3d4148"),ou=new Rt("#c9ccd1"),ag=new Rt("#58ccff"),te=(i,t=.9,e={})=>new an({color:i,roughness:t,metalness:0,...e}),Ie=(i,t,e,n=.012,s=1)=>new Mo(i,t,e,s,Math.min(n,i/2-1e-4,t/2-1e-4,e/2-1e-4));function Is(i,t,{repeat:e=null,srgb:n=!0}={}){let s=document.createElement("canvas");s.width=s.height=i,t(s.getContext("2d"),i);let r=new ms(s);return n&&(r.colorSpace=qe),e&&(r.wrapS=r.wrapT=Bi,r.repeat.set(e[0],e[1]),r.anisotropy=4),r}function jl(i=128,t=1.6){return Is(i,(e,n)=>{let s=e.createImageData(n,n);for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.min(1,Math.hypot((a+.5)/n-.5,(r+.5)/n-.5)*2),h=(1-o)**t,l=(r*n+a)*4;s.data[l]=s.data[l+1]=s.data[l+2]=255,s.data[l+3]=Math.round(255*h)}e.putImageData(s,0,0)})}function og(i=128,t=.22,e=1.4){return Is(i,(n,s)=>{let r=n.createImageData(s,s);for(let a=0;a<s;a++)for(let o=0;o<s;o++){let h=Math.abs((o+.5)/s-.5)*2,l=Math.abs((a+.5)/s-.5)*2,d=Math.hypot(Math.max(0,h-(1-t)),Math.max(0,l-(1-t)))/t,p=Math.max(0,1-d)**e,f=(a*s+o)*4;r.data[f]=r.data[f+1]=r.data[f+2]=0,r.data[f+3]=Math.round(255*p)}n.putImageData(r,0,0)})}function lg(i=32,t=128){let e=document.createElement("canvas");e.width=i,e.height=t;let n=e.getContext("2d"),s=n.createImageData(i,t);for(let a=0;a<t;a++)for(let o=0;o<i;o++){let h=Math.abs((o+.5)/i-.5)*2,l=Math.abs((a+.5)/t-.5)*2,d=Math.exp(-((h*2.4)**2))*(1-Math.max(0,(l-.72)/.28))**2,p=(a*i+o)*4;s.data[p]=s.data[p+1]=s.data[p+2]=255,s.data[p+3]=Math.round(255*d)}n.putImageData(s,0,0);let r=new ms(e);return r.colorSpace=qe,r}function lu(i,t,e,n,s=0){return(r,a)=>{r.fillStyle=t,r.fillRect(0,0,a,a);let o=n,h=()=>(o=o*16807%2147483647)/2147483647;for(let[l,d,p]of[[90,a*.18,e],[260,a*.06,e*.8],[900,a*.015,e*.6]])for(let f=0;f<l;f++){let u=h()*a,_=h()*a,S=d*(.5+h()),m=h()>.5,c=r.createRadialGradient(u,_,0,u,_,S),v=m?"255,255,255":"0,0,0";c.addColorStop(0,`rgba(${v},${p*(.4+h()*.6)})`),c.addColorStop(1,`rgba(${v},0)`),r.fillStyle=c;for(let A of[-a,0,a])for(let x of[-a,0,a])r.save(),r.translate(A,x),r.beginPath(),r.arc(u,_,S,0,Math.PI*2),r.fill(),r.restore()}if(s){let l=r.getImageData(0,0,a,a);for(let d=0;d<l.data.length;d+=4){let p=(h()-.5)*s;l.data[d]+=p,l.data[d+1]+=p,l.data[d+2]+=p}r.putImageData(l,0,0)}}}function cu(i,t={}){let e=new be;i.add(e);let n=(T,k,W=e,ot=!0,lt=!0)=>{let B=new Ae(T,k);return B.castShadow=ot,B.receiveShadow=lt,W.add(B),B},s=(T,k,W)=>new $e(T,k,W),{x0:r,x1:a,z0:o,z1:h,H:l}=Ql,d=a-r,p=h-o,f={floor:Is(256,lu(256,"#d6d1c8",.035,7,6),{repeat:[d/2.2,p/2.2]}),carpet:Is(128,lu(128,"#a29c93",.05,19,22),{repeat:[4.6/.9,3.6/.9]}),ceiling:Is(256,(T,k)=>{T.fillStyle="#f4f3f0",T.fillRect(0,0,k,k),T.fillStyle="rgba(120,118,112,0.16)",T.fillRect(0,0,k,1.5),T.fillRect(0,k/2,k,1.5),T.fillRect(0,0,1.5,k)},{repeat:[d/1.2,p/1.2]}),pool:jl(128,2.4),halo:jl(96,1.6),blob:jl(64,1.5),rect:og(128,.3,1.3),glow:lg(),windows:Is(128,(T,k)=>{T.fillStyle="#d3d6db",T.fillRect(0,0,k,k);let W=3,ot=()=>(W=W*16807%2147483647)/2147483647;for(let lt=0;lt<4;lt++)for(let B=0;B<4;B++){let H=ot()>.86;T.fillStyle=H?"#e2d8c6":"#b8bfca",T.fillRect(B*(k/4)+5,lt*(k/4)+8,k/4-10,k/4-18)}},{repeat:[1,1]})},u={floor:te("#ffffff",.82,{map:f.floor}),carpet:te("#ffffff",1,{map:f.carpet}),floorCorr:te("#c9c9c6",.9),ceiling:te("#ffffff",1,{map:f.ceiling}),ceilPlain:te("#f1f0ed",1),wall:te("#ece9e3",1),wallDark:te("#dedbd4",1),plinth:te("#5a5e64",.7),oak:te("#c49a6c",.72),oakLight:te("#d6b58c",.7),frame:te("#3a3e45",.45,{metalness:.25}),alu:te("#a3a8ae",.38,{metalness:.55}),desk:te("#ebe8e2",.6),deskEdge:te("#d9d4cb",.6),felt:te("#5d636b",1),feltSage:te("#a3afa8",1),feltSand:te("#cdc1ad",1),chair:te("#4c5868",.95),chairShell:te("#2c3036",.6),meetChair:te("#a99c88",.95),monitor:te("#c3c6ca",.45),screenOff:te("#1d222a",.22),keyboard:te("#d4d6d9",.7),mug:te("#f2f1ee",.45),paper:te("#fbfaf7",.9),book1:te("#6f7f8f",.9),book2:te("#b78b5c",.9),book3:te("#e3ded5",.9),pot:te("#d9d4cc",.85),potDark:te("#4a4d52",.8),stem:te("#4a3a2c",.9),leaf:te("#2f6648",.8),leaf2:te("#4a8458",.8),housing:te("#2c3036",.4,{metalness:.3}),wire:te("#4a4f57",.6),sensor:te("#f2f3f5",.55),sideboard:te("#e2ddd4",.65),convector:te("#d9dadb",.55),glass:new er({color:"#d6e4f2",roughness:.05,metalness:0,transparent:!0,opacity:.12,depthWrite:!1}),laptop:te("#b3b8bf",.35,{metalness:.35}),building:new Oe({color:"#1a2448",map:f.windows}),buildingFar:new Oe({color:"#1a2448"}),ground:new Oe({color:"#6d7a8c"})},_=n(new ze(d,p),u.floor,e,!1,!0);_.rotation.x=-Math.PI/2,_.position.set(0,0,(o+h)/2);let S=n(new ze(4.6,3.6),u.carpet,e,!1,!0);S.rotation.x=-Math.PI/2,S.position.set(-.4,.003,-.2);let m=n(new ze(d,p),u.ceiling,e,!1,!0);m.rotation.x=Math.PI/2,m.position.set(0,l,(o+h)/2),n(s(.7,.28,p),u.ceilPlain,e,!1,!0).position.set(a-.35,l-.14,(o+h)/2),n(s(Te.x0-r,l,.2),u.wall,e).position.set((r+Te.x0)/2,l/2,o-.1),n(s(a-Te.x1,l,.2),u.wall,e).position.set((Te.x1+a)/2,l/2,o-.1),n(s(Te.x1-Te.x0+.2,l-Te.h,.2),u.wall,e).position.set((Te.x0+Te.x1)/2,(Te.h+l)/2,o-.1);for(let T of[Te.x0-.035,Te.x1+.035])n(s(.07,Te.h+.035,.24),u.frame,e).position.set(T,(Te.h+.035)/2,o-.1);n(s(Te.x1-Te.x0+.14,.07,.24),u.frame,e).position.set((Te.x0+Te.x1)/2,Te.h+.035,o-.1);for(let T=r+.08;T<Te.x0-.3;T+=.13)n(s(.06,l-.02,.05),u.oak,e,!1).position.set(T,l/2,o+.035);n(s(Te.x0-r-.2,.06,.012),u.plinth,e,!1).position.set((r+Te.x0-.2)/2,.03,o+.006),n(s(a-Te.x1,.06,.012),u.plinth,e,!1).position.set((Te.x1+a)/2,.03,o+.006),n(s(.012,.06,p),u.plinth,e,!1).position.set(r+.006,.03,(o+h)/2),n(s(.2,l,p),u.wall,e).position.set(r-.1,l/2,(o+h)/2),n(s(d+.4,l,.2),u.wallDark,e,!1).position.set(0,l/2,h+.1);for(let[T,k]of[[0,u.feltSage],[1,u.feltSand],[2,u.feltSage]])n(Ie(.56,1.05,.04,.01),k,e,!1).position.set(Ce.x-.64+T*.64,1.62,o+.025);for(let[T,k]of[[0,u.feltSand],[1,u.feltSage]])n(Ie(.04,.9,.7,.01),k,e,!1).position.set(r+.025,1.6,-3.1+T*.8);for(let T=o;T<h-.01;T+=1.5){let k=Math.min(1.5,h-T),W=n(new ze(k,l-.25),u.glass,e,!1,!1);W.rotation.y=-Math.PI/2,W.position.set(a,(l-.25)/2+.08,T+k/2),n(s(.14,l,.055),u.frame,e).position.set(a+.01,l/2,T)}n(s(.14,l,.055),u.frame,e).position.set(a+.01,l/2,h),n(s(.16,.09,p),u.frame,e).position.set(a+.01,.045,(o+h)/2),n(s(.16,.06,p),u.frame,e).position.set(a+.01,2.25,(o+h)/2),n(s(.24,.12,p-.4),u.convector,e,!1,!0).position.set(a-.14,.06,(o+h)/2),n(s(.2,.004,p-.45),u.frame,e,!1,!1).position.set(a-.14,.122,(o+h)/2);let c=n(new ze(d,2.6),u.floorCorr,e,!1,!0);c.rotation.x=-Math.PI/2,c.position.set(0,0,o-1.3),n(s(d,l,.2),u.wallDark,e,!1).position.set(0,l/2,o-2.7);let v=n(new ze(d,2.6),u.ceilPlain,e,!1,!0);v.rotation.x=Math.PI/2,v.position.set(0,l,o-1.3),n(s(.2,l,2.8),u.wall,e,!1).position.set(r-.1,l/2,o-1.3),n(Ie(1.2,.85,.035,.008),te("#3f5b7d",.85),e,!1).position.set(-2.7,1.5,o-2.58);let A=6,x=new ze(90,30,1,A);x.setAttribute("color",new he(new Array((A+1)*2*3).fill(0),3));let b=new Ae(x,new Oe({vertexColors:!0,fog:!1}));b.rotation.y=-Math.PI/2,b.position.set(a+36,11,0),e.add(b);let w=n(new ze(70,90),u.ground,e,!1,!1);w.rotation.x=-Math.PI/2,w.position.set(a+35,-.02,0);{let T=5,k=()=>(T=T*16807%2147483647)/2147483647,W=[],ot=[];for(let lt=-24;lt<26;lt+=2.6+k()*2.6){let B=5+k()*8,H=3+k()*4,tt=15+k()*5,St=s(H,B,H);St.translate(a+tt+H/2,B/2-.5,lt);let at=St.getAttribute("uv");for(let ct=0;ct<at.count;ct++)at.setXY(ct,at.getX(ct)*H/6,at.getY(ct)*B/13);W.push(St)}for(let lt=-26;lt<28;lt+=3+k()*3){let B=10+k()*14,H=3+k()*4,tt=s(H,B,H);tt.translate(a+26+k()*6,B/2-.5,lt),ot.push(tt)}u.building.map.wrapS=u.building.map.wrapT=Bi,n(Ri(W),u.building,e,!1,!1),n(Ri(ot),u.buildingFar,e,!1,!1)}let C=[];function y(T,k,W,ot,{arms:lt=!0}={}){let B=new be;B.position.set(k,0,W),B.rotation.y=ot,T.add(B);let H=new be;B.add(H),n(Ie(.49,.075,.47,.03,2),u.chair,H).position.set(0,.47,.01),n(Ie(.42,.03,.4,.01),u.chairShell,H).position.set(0,.42,0);let tt=new be;if(tt.position.set(0,.47,-.2),H.add(tt),n(Ie(.45,.5,.065,.03,2),u.chair,tt).position.set(0,.34,-.055),n(Ie(.06,.26,.03,.01),u.chairShell,tt).position.set(0,.08,-.06),lt)for(let St of[-1,1])n(s(.028,.2,.035),u.chairShell,H).position.set(St*.255,.56,-.02),n(Ie(.06,.028,.24,.012),u.chairShell,H).position.set(St*.255,.672,0);n(new Be(.024,.024,.3,12),u.alu,B).position.set(0,.27,0),n(new Be(.038,.032,.14,14),u.chairShell,B).position.set(0,.16,0);for(let St=0;St<5;St++){let at=St/5*Math.PI*2+.3,ct=n(s(.3,.03,.045),u.alu,B);ct.position.set(Math.cos(at)*.15,.085,Math.sin(at)*.15),ct.rotation.y=-at,n(new Ve(.026,6,4),u.chairShell,B).position.set(Math.cos(at)*.29,.03,Math.sin(at)*.29)}return{group:B,seat:H,back:tt}}function E(T,k,W,{monitor:ot=!0,chair:lt=!0,chairBack:B=1.1,mug:H=!1,paper:tt=!1,books:St=!1}={}){let at=new be;at.position.set(T,0,k),at.rotation.y=W,e.add(at),n(Ie(pe.w,.025,pe.d,.006),u.desk,at).position.set(0,pe.top-.0125,0);for(let Ft of[-1,1]){let Ht=Ft*(pe.w/2-.09);n(s(.06,pe.top-.075,.05),u.frame,at).position.set(Ht,(pe.top-.075)/2+.02,0),n(Ie(.065,.03,pe.d-.06,.008),u.frame,at).position.set(Ht,.015,0),n(s(.05,.05,pe.d-.12),u.frame,at).position.set(Ht,pe.top-.05,0)}n(s(pe.w-.2,.035,.04),u.frame,at).position.set(0,pe.top-.045,.2),n(Ie(pe.w-.24,.3,.018,.006),u.felt,at).position.set(0,pe.top-.21,pe.d/2-.05),ot&&(n(Ie(.54,.32,.03,.008),u.monitor,at).position.set(.05,pe.top+.4,.2),n(s(.51,.29,.004),u.screenOff,at,!1).position.set(.05,pe.top+.4,.184),n(s(.035,.24,.03),u.alu,at).position.set(.05,pe.top+.12,.24),n(Ie(.2,.012,.15,.005),u.alu,at).position.set(.05,pe.top+.006,.23),n(Ie(.42,.016,.13,.005),u.keyboard,at).position.set(.05,pe.top+.008,-.1)),H&&n(new Be(.04,.036,.095,18),u.mug,at).position.set(.5,pe.top+.0475,-.02),tt&&n(s(.21,.004,.29),u.paper,at).position.set(-.42,pe.top+.002,-.08),St&&(n(s(.16,.022,.23),u.book1,at).position.set(.42,pe.top+.011,.18),n(s(.15,.018,.22),u.book3,at).position.set(.43,pe.top+.031,.17)),lt&&y(at,0,-B,0);let ct=Math.cos(W),Dt=Math.sin(W);return C.push([T,k,pe.w+.25,pe.d+.22,W,"rect",.34]),lt&&C.push([T-Dt*B,k-ct*B,.78,.78,0,"blob",.42]),at}for(let T of ru)E(T.x,T.z,T.yaw,{...T,books:T.x===0});{let T=new be;T.position.set(fn.x,0,fn.z),e.add(T),n(Ie(fn.w,.032,fn.d,.008),u.oak,T).position.set(0,.744,0);for(let k of[-.85,.85])n(s(.07,.66,.07),u.frame,T).position.set(k,.36,0),n(Ie(.07,.03,fn.d-.12,.008),u.frame,T).position.set(k,.015,0),n(s(.06,.05,fn.d-.2),u.frame,T).position.set(k,.7,0);for(let[k,W]of fn.stools){let ot=new be;ot.position.set(k,0,W),ot.rotation.y=W<0?0:Math.PI,T.add(ot),n(Ie(.46,.06,.44,.025),u.meetChair,ot).position.set(0,.46,0),n(Ie(.44,.34,.045,.02),u.meetChair,ot).position.set(0,.74,-.21),ot.children.at(-1).rotation.x=-.1;for(let lt of[-.19,.19])for(let B of[-.18,.18])n(new Be(.012,.011,.44,6),u.frame,ot).position.set(lt,.22,B);C.push([fn.x+k,fn.z+W,.62,.6,0,"blob",.32])}n(s(.3,.004,.42),u.paper,T).position.set(-.3,.762,.05),n(new Be(.04,.036,.095,18),u.mug,T).position.set(.55,.808,-.1),C.push([fn.x,fn.z,fn.w+.3,fn.d+.3,0,"rect",.3])}{let T=new be;T.position.set(Ce.x,0,Ce.z),e.add(T),n(Ie(Ce.w,Ce.h-.06,Ce.d,.01),u.sideboard,T).position.set(0,.06+(Ce.h-.06)/2,0),n(s(Ce.w-.06,.06,Ce.d-.06),u.plinth,T).position.set(0,.03,0);for(let k of[-1,0,1])n(s(.004,Ce.h-.12,.004),u.deskEdge,T,!1).position.set(k*Ce.w/6*2+0,.06+(Ce.h-.06)/2,Ce.d/2+.001);n(s(.07,.22,.17),u.book1,T).position.set(-.6,Ce.h+.11,0),n(s(.05,.2,.16),u.book2,T).position.set(-.53,Ce.h+.1,0),n(s(.06,.24,.17),u.book3,T).position.set(-.465,Ce.h+.12,0),n(new Be(.1,.085,.2,16),u.potDark,T).position.set(.62,Ce.h+.1,0);for(let k=0;k<7;k++){let W=n(new Ve(.09,8,6),k%2?u.leaf:u.leaf2,T,!0,!1);W.scale.set(1,.4,.6),W.position.set(.62+Math.cos(k*.9)*.08,Ce.h+.25+k%3*.05,Math.sin(k*.9)*.06),W.rotation.set(.3,k,.5)}C.push([Ce.x,Ce.z+.04,Ce.w+.25,Ce.d+.3,0,"rect",.36])}n(Ie(si.w,.74,si.d,.01),u.sideboard,e).position.set(si.x,.37,si.z),C.push([si.x+.05,si.z,si.w+.3,si.d+.25,0,"rect",.34]);function P(T,k,W,ot,lt=.55,B=18,H=.26){let tt=new be;tt.position.set(T,0,k),e.add(tt),n(new Be(.23,.19,.48,20),u.pot,tt).position.y=.24,n(new Be(.014,.014,W*.7,6),u.stem,tt).position.y=.48+W*.35;let St=ot,at=()=>(St=St*16807%2147483647)/2147483647;for(let ct=0;ct<B;ct++){let Dt=(ct+.5)/B,Ft=.66+(W-.62)*Math.sqrt(Dt),Ht=at()*Math.PI*2,We=lt*(.35+.65*Math.sin(Math.PI*Math.min(1,Dt*1.15)))*(.55+at()*.45),ke=n(new Ve(H*(.75+at()*.5),8,6),ct%3?u.leaf:u.leaf2,tt,!0,!1);ke.scale.set(1,.3,.58),ke.position.set(Math.cos(Ht)*We*.6,Ft,Math.sin(Ht)*We*.6),ke.rotation.set(.3-at()*.6,-Ht,.35+at()*.4)}C.push([T,k,.75,.75,0,"blob",.4])}for(let T of au)P(...T);let N=y(e,Cs.x,Cs.z,Cs.yaw),O=new be;O.position.set(ii.x,pe.top,ii.z+.02),e.add(O),n(Ie(.32,.016,.22,.006),u.laptop,O).position.set(0,.008,0),n(s(.27,.002,.1),te("#3a3e45",.7),O).position.set(0,.0165,-.025);let D=new be;D.position.set(0,.016,.11),D.rotation.x=-.28,O.add(D),n(Ie(.32,.21,.008,.003),u.laptop,D).position.set(0,.105,0);let I=n(s(.29,.18,.001),new an({color:"#cfe0f5",emissive:"#d6e4f5",emissiveIntensity:.8,roughness:.4}),D,!1,!1);I.position.set(0,.11,-.0045);let z=new Mi("#dbe6f5",0,1.6,2);z.position.set(0,.2,-.12),O.add(z);let L=(T,k)=>new Oe({map:T,color:"#000000",transparent:!0,opacity:k,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});{let T=[],k=[];for(let[ot,lt,B,H,tt,St,at]of C){let ct=new ze(B,H);ct.rotateX(-Math.PI/2),ct.rotateY(tt),ct.translate(ot,.006,lt);let Dt=new he(new Array(12).fill(at/.4),3);ct.setAttribute("color",Dt),(St==="rect"?T:k).push(ct)}let W=(ot,lt)=>{let B=L(lt,.4);B.vertexColors=!0,B.color.set("#ffffff"),B.onBeforeCompile=tt=>{tt.fragmentShader=tt.fragmentShader.replace("#include <color_fragment>","diffuseColor.a *= vColor.r; diffuseColor.rgb = vec3(0.0);")};let H=n(Ri(ot),B,e,!1,!1);return H.renderOrder=1,H};W(T,f.rect),W(k,f.blob)}let Y=(T,k,W)=>{let ot=new ze(T,k);ot.rotateX(-Math.PI/2);let lt=n(ot,L(f.blob,W),e,!1,!1);return lt.position.y=.007,lt.renderOrder=1,lt},j=Y(.8,.8,.42),J=[Y(.75,.65,.38),Y(.75,.65,.38)],it={},Q=[],bt=[];for(let[T,k]of Object.entries(iu)){let W=new an({color:So.clone(),emissive:Ci.clone(),emissiveIntensity:0,roughness:.5}),ot=new Oe({map:f.pool,color:Ci,transparent:!0,opacity:0,depthWrite:!1,blending:bi,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),lt=new Oe({map:f.halo,color:Ci,transparent:!0,opacity:0,depthWrite:!1,blending:bi,side:un}),B=new Oe({map:f.glow,color:Ci,transparent:!0,opacity:0,depthWrite:!1,blending:bi,side:un});it[T]={diff:W,pool:ot,halo:lt,glow:B,spots:[]};let H=[],tt=[],St=[];for(let ct of su){n(Ie(.07,.045,1.5,.008),u.housing,e,!1,!1).position.set(k,2.45,ct);let Ft=new Ae(s(.056,.004,1.46),W);Ft.position.set(k,2.45-.0235,ct),e.add(Ft);for(let Ht of[-.6,.6])n(new Be(.0025,.0025,l-2.45-.022,4),u.wire,e,!1,!1).position.set(k,(l+2.45)/2,ct+Ht);{let Ht=new ze(3.4,4.6);Ht.rotateX(-Math.PI/2),Ht.translate(k,.011,ct),H.push(Ht)}{let Ht=new ze(2.8,3.8);Ht.rotateX(Math.PI/2),Ht.translate(k,l-.004,ct),tt.push(Ht)}{let Ht=new ze(.42,1.95);Ht.rotateX(-Math.PI/2),Ht.translate(k,2.45-.03,ct),St.push(Ht)}bt.push({row:T,x:k,z:ct})}n(Ri(H),ot,e,!1,!1),n(Ri(tt),lt,e,!1,!1),n(Ri(St),B,e,!1,!1);let at=T==="B"?[-3.3,.1,3.4]:[-3,3];for(let ct of at){let Dt=T==="B"&&ct===.1,Ft=new rr(Ci,0,9,Dt?1:1.15,1,1.5);if(Ft.position.set(k,2.42,ct),Ft.target.position.set(k,0,ct),e.add(Ft,Ft.target),Dt){Ft.castShadow=!0;let Ht=t.mobile?512:1024;Ft.shadow.mapSize.set(Ht,Ht),Ft.shadow.camera.near=.4,Ft.shadow.camera.far=3.2,Ft.shadow.focus=.85,Ft.shadow.radius=6,Ft.shadow.bias=-6e-4,Ft.shadow.normalBias=.02,Ft.userData.hero=!0}it[T].spots.push(Ft),Q.push(Ft)}}let xt=Q.find(T=>T.userData.hero),Ot=new an({color:So.clone(),emissive:Ci.clone(),emissiveIntensity:0,roughness:.6}),Kt=new Ae(new Be(.11,.11,.02,18),Ot);Kt.position.set(-2.7,l-.012,o-1.3),e.add(Kt);let qt=new Mi(Ci,0,5.5,1.5);qt.position.set(-2.7,l-.3,o-1.3),e.add(qt);let et=new Oe({map:f.pool,color:Ci,transparent:!0,opacity:0,depthWrite:!1,blending:bi}),rt=new Ae(new ze(2.6,2.6),et);rt.rotation.x=-Math.PI/2,rt.position.set(-2.7,.01,o-1.3),e.add(rt);let ft=new be;ft.position.set(xn[0],xn[1],xn[2]),e.add(ft),n(new Be(.062,.062,.008,24),u.sensor,ft,!1,!1).position.y=.006,n(new Ve(.043,18,10,0,Math.PI*2,Math.PI/2,Math.PI/2),u.sensor,ft,!1,!1).position.y=.002;let Bt=new Oe({color:"#58ccff"}),ht=new Ae(new Ve(.0075,10,8),Bt);ht.position.set(.034,-.012,.02),ft.add(ht);let At=new Oe({color:"#7fd6ff",transparent:!0,opacity:0,side:un,depthWrite:!1}),kt=new Ae(new gs(.09,.108,40),At);kt.rotation.x=Math.PI/2,kt.position.y=-.004,ft.add(kt);let Pt=new Ae(new gs(.09,.1,40),At.clone());Pt.rotation.x=Math.PI/2,Pt.position.y=-.004,ft.add(Pt);let Yt=new ir("#dfe8ff","#8b857a",.4);i.add(Yt);let Vt=new ys("#fff2df",0);Vt.position.set(14,9.5,-6),Vt.target.position.set(0,0,-.5),Vt.castShadow=!0;let Zt=t.mobile?1024:2048;Vt.shadow.mapSize.set(Zt,Zt),Object.assign(Vt.shadow.camera,{left:-9,right:9,top:7,bottom:-7,near:2,far:40}),Vt.shadow.bias=-5e-4,Vt.shadow.normalBias=.03,Vt.shadow.radius=2,i.add(Vt,Vt.target);let Gt=new ys("#dde7f7",0);Gt.position.set(6,3.2,1),Gt.target.position.set(-3,.8,-1),i.add(Gt,Gt.target);let me=new Rt,_e=new Rt,ue=new Rt,ce={dawn:["#0b1634","#18244c","#2b335b","#423f66","#5a4f6e","#706273","#857479"],day:["#5f95d8","#78a8e0","#93bbe7","#afcdec","#c9ddf0","#dde9f4","#eef3f7"]},U=new Rt("#323a58"),Re=new Rt("#dfe4ea"),ie=new Rt("#232b48"),R=new Rt("#b9c4d2"),g=new Rt("#1c2333"),V=new Rt("#9aa39e"),Z=new Rt("#1b2423"),nt=new Rt("#5d7a5a"),dt=x.getAttribute("color"),ut=new Rt("#c9d3ea"),$=new Rt("#f4f3ee"),st=new Rt("#7c7c7c"),pt=new Rt("#d6cfc4"),Et=new Rt("#ebe6dd"),mt=!1;function gt(T){let k=T.sky,W=T.sun,ot=(T.rows[0]+T.rows[1]+T.rows[2])/3,lt=.42*ot;Yt.intensity=.2+1.25*k+lt,Yt.color.copy(ut).lerp($,Math.min(1,k+lt)),Yt.groundColor.copy(st).lerp(pt,Math.min(1,lt*2.2)).lerp(Et,k*.85),Gt.intensity=.12+.75*k,Vt.intensity=3.1*W,Vt.shadow.autoUpdate=W>.002,mt||(Vt.shadow.needsUpdate=!0,xt.shadow.needsUpdate=!0,mt=!0);for(let at=0;at<=A;at++){_e.set(ce.dawn[at]).lerp(ue.set(ce.day[at]),k);for(let ct=0;ct<2;ct++)dt.setXYZ(at*2+ct,_e.r,_e.g,_e.b)}dt.needsUpdate=!0,u.building.color.copy(U).lerp(Re,k),u.buildingFar.color.copy(ie).lerp(R,k),u.ground.color.copy(g).lerp(V,k),i.background.set(ce.dawn[0]).lerp(_e.set(ce.day[0]),k),["A","B","C"].forEach((at,ct)=>{let Dt=Math.max(0,Math.min(1,T.rows[ct])),Ft=it[at],Ht=Dt**1.6;Ft.diff.emissiveIntensity=3.2*Ht,Ft.diff.color.copy(So).lerp(ou,Math.min(1,Dt*1.6)),Ft.pool.opacity=.14*Dt*(1-.5*k),Ft.halo.opacity=.36*Dt*(1-.3*k),Ft.glow.opacity=.5*Ht*(1-.35*k);for(let We of Ft.spots)We.intensity=(We.userData.hero?30:34)*Dt}),xt.shadow.autoUpdate=xt.intensity>.05,Ot.emissiveIntensity=2.2*T.corridor,Ot.color.copy(So).lerp(ou,T.corridor),qt.intensity=8*T.corridor,et.opacity=.22*T.corridor*(1-.3*k);let B=.12+.88*Math.min(1,T.led);Bt.color.copy(ag).multiplyScalar(.25+.75*B),ht.scale.setScalar(.8+.5*Math.min(1,T.led));let H=T.pulse;H>=0&&H<1?(kt.visible=!0,kt.scale.setScalar(1+3*H),At.opacity=.7*(1-H)**1.3*Math.min(1,H*8)):At.opacity=0;let tt=H-.22;tt>=0&&tt<1?(Pt.material.opacity=.5*(1-tt)**1.3*Math.min(1,tt*8),Pt.scale.setScalar(1+3*tt)):Pt.material.opacity=0;let St=T.laptop??1;I.material.emissiveIntensity=.8*St,I.material.color.set("#cfe0f5").lerp(_e.set("#263040"),1-St),z.intensity=St*(.06+.22*(1-ot)*(1-k))}function Lt(T){N.group.position.set(T.x,0,T.z),N.group.rotation.y=T.yaw,N.seat.position.y=T.dip*.6,N.back.rotation.x=-.08-.16*T.back,j.position.set(T.x,.007,T.z)}function Nt(T){O.position.set(T.x,pe.top,T.z+.02),O.rotation.y=T.yaw}function Jt(T,k){let W=J[T];if(W.visible=!!k.visible,!k.visible)return;let ot=k.leg.L.ankle,lt=k.leg.R.ankle;W.position.set((ot[0]+lt[0]+k.pelvis[0])/3,.008,(ot[2]+lt[2]+k.pelvis[2])/3);let B=Math.hypot(ot[0]-lt[0],ot[2]-lt[2]);W.scale.set(.85+B*.9,1,.85+B*.9)}return cg(e,[N.group,O,ft]),{group:e,setState:gt,setChair:Lt,setLaptop:Nt,setPersonShadow:Jt,sun:Vt,hemi:Yt,spots:Q,mats:u,pendants:bt,sensorPos:xn}}function cg(i,t){i.updateMatrixWorld(!0);let e=new Set;for(let s of t)s.traverse(r=>e.add(r));let n=new Map;i.traverse(s=>{if(!s.isMesh||e.has(s))return;let r=s.material;if(Array.isArray(r)||r.transparent||r.vertexColors||r.map&&!r.isMeshStandardMaterial)return;let a=`${r.uuid}|${s.castShadow?1:0}${s.receiveShadow?1:0}`;n.has(a)||n.set(a,{mat:r,cast:s.castShadow,receive:s.receiveShadow,items:[]}),n.get(a).items.push(s)});for(let{mat:s,cast:r,receive:a,items:o}of n.values()){if(o.length<2)continue;let h=o.map(p=>{let f=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();f.applyMatrix4(p.matrixWorld);for(let u of Object.keys(f.attributes))["position","normal","uv"].includes(u)||f.deleteAttribute(u);return f.getAttribute("uv")?f:null});if(h.some(p=>!p))continue;let l=Ri(h,!1);if(h.forEach(p=>p.dispose()),!l)continue;let d=new Ae(l,s);d.castShadow=r,d.receiveShadow=a,d.frustumCulled=!1;for(let p of o)p.parent.remove(p),p.geometry.dispose();i.add(d)}}var jt=(i,t=0,e=1)=>Math.min(e,Math.max(t,i)),ae=(i,t,e)=>i+(t-i)*e,ve=(i,t,e)=>{let n=jt((e-i)/(t-i));return n*n*(3-2*n)},Ps=i=>i<.5?4*i*i*i:1-(-2*i+2)**3/2,hg=i=>1-(1-i)**3,ug=i=>i*i*i,qn={io:Ps,out:hg,in:ug,lin:i=>i,sine:i=>.5-.5*Math.cos(Math.PI*i)},Mr=Math.PI*2,bn=i=>{for(;i>Math.PI;)i-=Mr;for(;i<-Math.PI;)i+=Mr;return i},hu=(i,t,e,n,s)=>ve(i,t,s)*(1-ve(e,n,s)),Un=i=>({x:null,v:0,w:i});function Nn(i,t,e){if(i.x===null)return i.x=t,t;let n=i.w,s=-n*n*(i.x-t)-2*n*i.v;return i.v+=s*e,i.x+=i.v*e,i.x}function uu(i){let t=[];for(let r=0;r<i.length-1;r++){let a=i[Math.max(0,r-1)],o=i[r],h=i[r+1],l=i[Math.min(i.length-1,r+2)];for(let d=0;d<32;d++){let p=d/32,f=p*p,u=f*p;t.push([0,1].map(_=>.5*(2*o[_]+(-a[_]+h[_])*p+(2*a[_]-5*o[_]+4*h[_]-l[_])*f+(-a[_]+3*o[_]-3*h[_]+l[_])*u)))}}t.push(i.at(-1));let e=[0];for(let r=1;r<t.length;r++)e.push(e[r-1]+Math.hypot(t[r][0]-t[r-1][0],t[r][1]-t[r-1][1]));let n=e.at(-1);return{total:n,at:r=>{r=jt(r,0,n);let a=1;for(;a<e.length-1&&e[a]<r;)a++;let o=(r-e[a-1])/(e[a]-e[a-1]||1),h=t[a-1],l=t[a];return{x:ae(h[0],l[0],o),z:ae(h[1],l[1],o),h:Math.atan2(l[0]-h[0],l[1]-h[1])}},pts:t}}function du(i,t,e){i=jt(i);let n=1-t/2-e/2,s;if(t>0&&i<t)s=i*i/(2*t);else if(i<1-e)s=t/2+(i-t);else{let r=i-(1-e);s=t/2+(1-t-e)+r-r*r/(2*e)}return s/n}var _t={add:(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],sub:(i,t)=>[i[0]-t[0],i[1]-t[1],i[2]-t[2]],mul:(i,t)=>[i[0]*t,i[1]*t,i[2]*t],dot:(i,t)=>i[0]*t[0]+i[1]*t[1]+i[2]*t[2],len:i=>Math.hypot(i[0],i[1],i[2]),norm:i=>{let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},cross:(i,t)=>[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]],lerp:(i,t,e)=>[ae(i[0],t[0],e),ae(i[1],t[1],e),ae(i[2],t[2],e)]},Ii=i=>({R:[-Math.cos(i),0,Math.sin(i)],U:[0,1,0],F:[Math.sin(i),0,Math.cos(i)]});function bo(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:_t.sub(_t.mul(i.R,e),_t.mul(i.F,n)),U:i.U,F:_t.add(_t.mul(i.F,e),_t.mul(i.R,n))}}function Xi(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:i.R,U:_t.add(_t.mul(i.U,e),_t.mul(i.F,n)),F:_t.sub(_t.mul(i.F,e),_t.mul(i.U,n))}}function wo(i,t){let e=Math.cos(t),n=Math.sin(t);return{R:_t.add(_t.mul(i.R,e),_t.mul(i.U,n)),U:_t.sub(_t.mul(i.U,e),_t.mul(i.R,n)),F:i.F}}var Pe=(i,t,e,n,s)=>[i[0]+t.R[0]*e+t.U[0]*n+t.F[0]*s,i[1]+t.R[1]*e+t.U[1]*n+t.F[1]*s,i[2]+t.R[2]*e+t.U[2]*n+t.F[2]*s];function tc(i,t,e,n,s){let r=_t.sub(t,i),a=jt(_t.len(r),Math.abs(e-n)+.001,e+n-1e-4);r=_t.norm(r);let o=_t.norm(_t.sub(s,_t.mul(r,_t.dot(s,r)))),h=jt((e*e+a*a-n*n)/(2*e*a),-1,1),l=Math.sqrt(1-h*h),d=_t.add(i,_t.add(_t.mul(r,e*h),_t.mul(o,e*l))),p=_t.add(d,_t.mul(_t.norm(_t.sub(_t.add(i,_t.mul(r,a)),d)),n));return[d,p]}var Le={thigh:.43,shin:.42,upper:.29,fore:.27,hipW:.095,shW:.19,ankle:.08,standY:.935,seatY:.605},fu=.19,pu=.085,To=i=>ae(.74,.54,jt(i/1)),ec=i=>i*To(i),nc=i=>i==="L"?"R":"L",Fn={standAhead:.48,scoot:.44,end:-.26,feetDesk:.42,feetUp:.36,seatBack:.03},br=["wHang","wSeat","wThigh","wEdge","wKey","wFold","wUp","wTabL","wTapR","wGestR","wRaiseR","wWaveR","wChinR","wHipR","wHipL"],Eo=Object.freeze({sp:0,ch:0,cy:0,cr:0,dr:0,hp:0,hy:0,hr:0,ey:1,bw:0,lw:0,lx:0,ly:1.4,lz:0,slide:0,type:0,back:0,...Object.fromEntries(br.map(i=>[i,0])),wHang:1}),zt=i=>({...Eo,...Object.fromEntries(br.map(t=>[t,0])),...i}),ic={sp:9,ch:10,cy:9,cr:9,dr:6,hp:8,hy:9,hr:6,ey:22,bw:11,lw:7,lx:7,ly:7,lz:7,slide:10,back:6,type:8,...Object.fromEntries(br.map(i=>[i,7.5]))},Pi=["rx","rz","h","px","py","pz","pyaw","ppitch","proll",...Object.keys(Eo),"gaitV","walking","swL","swR","gCy","gCh","gCr","gHy","gHr","fLx","fLy","fLz","fLyaw","fLp","fLst","fRx","fRy","fRz","fRyaw","fRp","fRst","chx","chz","chyaw","chback","seatDip","breath","tap","vis"],Sr=Object.fromEntries(Pi.map((i,t)=>[i,t])),sc=120,wn=1/sc;function rc(i){let t=i.loco.map(c=>{if(c.type!=="walk")return c;let v=c.startDelay??.35,A=uu(c.path),x=c.t1-c.t0-v,b=(c.accel??1.2)/x,w=(c.decel??1)/x;return{...c,pathObj:A,a:b,b:w,delay:v,hEnd:c.hEnd??A.at(A.total).h,turnDur:c.turnDur??.9}}),e=c=>{let v=t[0];for(let A of t)c>=A.t0&&(v=A);return v};t.forEach((c,v)=>{if(c.type!=="walk")return;let A=t[v-1];c.hPrev=A?A.type==="stand"?typeof A.h=="function"?A.h(c.t0):A.h:A.type==="sit"?A.chair.yaw:A.hEnd:c.pathObj.at(0).h});let n=c=>Ii(c.yaw),s=(c,v,A)=>{let x=n(c);return[c.x+x.R[0]*-v+x.F[0]*A,c.z+x.R[2]*-v+x.F[2]*A]};function r(c){let v=e(c);if(v.type==="stand"){let x=typeof v.h=="function"?v.h(c):v.h;return{x:v.pos[0],z:v.pos[1],h:x,s:0,sEnd:0,path:null,walk:!1,seg:v}}if(v.type==="walk"){let x=(c-v.t0-v.delay)/(v.t1-v.t0-v.delay),b=du(x,v.a,v.b)*v.pathObj.total,w=v.pathObj.at(b),C=v.hPrev+bn(w.h-v.hPrev)*ve(v.t0,v.t0+.8,c);return C=C+bn(v.hEnd-C)*ve(v.t1-v.turnDur,v.t1+.25,c),{x:w.x,z:w.z,h:C,s:b,sEnd:v.pathObj.total,path:v.pathObj,walk:!0,seg:v,end:v.pathObj.at(v.pathObj.total)}}let A=s(v.chair,0,Fn.standAhead);return{x:A[0],z:A[1],h:v.chair.yaw,s:0,sEnd:0,path:null,walk:!1,seg:v,sit:!0}}let a=c=>{let v=r(c-.01),A=r(c+.01);return Math.hypot(A.x-v.x,A.z-v.z)/.02},o=c=>{let v={...i.poses[i.seq[0][2]]};for(let[A,x,b,w]of i.seq){if(c<A)break;let C=qn[w||"io"](jt((c-A)/x)),y=i.poses[b],E={};for(let P in v)E[P]=ae(v[P],y[P]??Eo[P],C);v=E}return i.layers?i.layers(c,v):v},h=(c,v)=>{let A=c.times,x=0;v>=A.scoot0&&v<A.push0?x=ae(0,Fn.scoot,qn.io(jt((v-A.scoot0)/(A.scoot1-A.scoot0)))):v>=A.push0&&v<A.up0+.3?x=ae(Fn.scoot,0,qn.io(jt((v-A.push0)/(A.push1-A.push0)))):v>=A.up0+.3&&(x=ae(0,Fn.end,qn.out(jt((v-A.up0-.75)/.9))));let b=.22*(1-ve(A.sit0+.3,A.sit1,v))+.16*ve(A.up0+.5,A.up1+.6,v)+(c.chairWake?.06*Math.sin(jt((v-c.chairWake)/.6)*Math.PI)*(v>c.chairWake?1:0):0);return{dz:x,yaw:b}},l=i.tStart,d=i.tEnd,p=Math.ceil((d-l)*sc)+1,f=new Float32Array(p*Pi.length);(function(){let v=Object.fromEntries(Object.keys(ic).map(z=>[z,Un(ic[z])])),A=Un(14),x={sway:Un(8),py:Un(16),hP:Un(10),chest:Un(11),swL:Un(9),swR:Un(9),lean:Un(5),still:Un(6)},b={},w=r(l);for(let z of["L","R"]){let L=[-Math.cos(w.h),Math.sin(w.h)],Y=(z==="L"?-1:1)*pu;b[z]={x:w.x+L[0]*Y,z:w.z+L[1]*Y,y:0,yaw:w.h,pitch:0,plant:[w.x+L[0]*Y,w.z+L[1]*Y],stance:!0,landT:-1e9}}let C=null,y=null,E=-1e9,P="R",N=0,O=null,D=!1;function I(z,L,Y){let j=r(L),J=a(L),it=(Y+J)/2,Q=(z==="L"?-1:1)*pu,bt,xt,Ot=.5*ec(it)+.02;if(!j.walk||j.s+Ot>=j.sEnd-.01)bt=[j.x,j.z],xt=j.h,j.walk&&(bt=[j.end.x,j.end.z],xt=j.seg.hEnd);else{let qt=j.path.at(j.s+Ot);bt=[qt.x,qt.z];let et=ve(j.seg.t1-j.seg.turnDur-.3,j.seg.t1-.2,L),rt=1-ve(j.seg.t0,j.seg.t0+.9,L);xt=qt.h+bn(j.h-qt.h)*jt(et+rt)}let Kt=[-Math.cos(xt),Math.sin(xt)];return{x:bt[0]+Kt[0]*Q,z:bt[1]+Kt[1]*Q,yaw:xt,vL:J}}for(let z=0;z<p;z++){let L=l+z*wn,Y=r(L),{x:j,z:J,h:it}=Y,Q=Y.seg,bt=!!Y.sit,xt=!bt,Ot=xt?a(L):0,Kt=(Ot-N)/wn;N=Ot;let qt=[Math.sin(it),Math.cos(it)];if(Q!==O){if(O&&O.type==="sit"){E=L-1,P="R";for(let H of["L","R"]){let tt=b[H];tt.stance=!0,tt.plant=[tt.x,tt.z],tt.landT=L-1}}Q.type==="sit"&&(D=!1),O=Q}if(xt){let H=To(Ot),tt=Ot<.25?.09:.15*H,St=at=>{let ct=b[at];if(!ct.stance)return!1;let Dt=(j-ct.x)*qt[0]+(J-ct.z)*qt[1],Ft=Math.abs(bn(it-ct.yaw)),Ht=Ot>.06;return Y.walk&&L>=Q.t0&&L-Q.t0<.5&&L-E>.6||Ht&&Dt>.25*ec(Ot)+.02||Ft>.3||Ht&&Dt>.12||!Ht&&Dt>.22};if(!C&&!y&&L-E>=tt-.02){let at=L-E>.6,ct=null;if(St(nc(P))?ct=nc(P):St(P)&&(ct=P),ct){let Dt=L+(at?.28:Math.max(0,tt-(L-E))),Ft=I(ct,Dt+.78*To(a(Dt+.4)),Ot),Ht=e(Dt+.6),We=!(Ht.type==="sit"&&Dt+.6>Ht.times.sit0-.1),ke=b[ct],Yn=Math.hypot(Ft.x-ke.x,Ft.z-ke.z),Zn=Math.abs(bn(Ft.yaw-ke.yaw));We&&(Yn>.03||Zn>.12)&&(y={side:ct,tStart:Dt})}}if(y&&L>=y.tStart){let at=y.side,ct=b[at],Dt=To(a(L+.4)),Ft=a(L+.4)<.25?.36:jt(.84*Dt,.36,.52),Ht=I(at,L+Ft,Ot);C={side:at,t0:L,dur:Ft,from:{x:ct.x,z:ct.z,y:ct.y,yaw:ct.yaw,pitch:ct.pitch},to:Ht,lift:.045+.05*jt(Ht.vL/1)},ct.stance=!1,y=null}if(C){let at=C,ct=b[at.side],Dt=jt((L-at.t0)/at.dur),Ft=ve(0,1,Dt);ct.x=ae(at.from.x,at.to.x,Ft),ct.z=ae(at.from.z,at.to.z,Ft),ct.yaw=at.from.yaw+bn(at.to.yaw-at.from.yaw)*Ft,ct.y=ae(at.from.y,.012,ve(0,.6,Dt))+at.lift*Math.sin(Math.PI*Math.pow(Dt,.85));let Ht=ae(at.from.pitch,-.12,ve(0,.4,Dt));ct.pitch=ae(Ht,.28,ve(.5,1,Dt)),Dt>=1&&(ct.stance=!0,ct.heelUp=!1,ct.plant=[at.to.x,at.to.z],ct.landT=L,E=L,P=at.side,C=null)}for(let at of["L","R"]){let ct=b[at];if(!ct.stance)continue;let Dt=ve(0,.14,L-ct.landT),Ft=.28*(1-Dt),Ht=.012*(1-Dt),We=[Math.sin(ct.yaw),Math.cos(ct.yaw)],ke=(j-ct.plant[0])*We[0]+(J-ct.plant[1])*We[1],Yn=y&&y.side===at||C&&C.side!==at||ct.heelUp?1:0,Zn=.78*jt((ke-.08)/.3)*jt(Ot/.5)*Yn;Zn>.01&&(ct.heelUp=!0),Ft-=Zn,Ht+=fu*Math.sin(Zn)*.95;let Ns=fu*(1-Math.cos(Zn));ct.x=ct.plant[0]+We[0]*Ns,ct.z=ct.plant[1]+We[1]*Ns,ct.y=Ht,ct.pitch=Ft}}let et={dz:0,yaw:0},rt=null;if(bt){let H=Q.times,tt=Q.chair;et=h(Q,L),rt={pos:s(tt,0,et.dz),yaw:tt.yaw+et.yaw};let St=null;if(L>=H.scoot0&&L<H.push0?St=ae(Fn.standAhead,Fn.feetDesk+Fn.scoot,qn.io(jt((L-H.scoot0)/(H.scoot1-H.scoot0)))):L>=H.push0&&L<H.up0&&(St=ae(Fn.feetDesk+Fn.scoot,Fn.feetUp,qn.io(jt((L-H.push0)/(H.up0-H.push0+.2))))),St!==null)for(let at of["L","R"]){let ct=b[at],Dt=s(tt,(at==="L"?1:-1)*.125,St),Ft=((L-H.scoot0)*2.4+(at==="L"?0:.5))%1,Ht=L>H.scoot0&&L<H.scoot1+.1||L>H.push0&&L<H.push1+.1;ct.x=Dt[0],ct.z=Dt[1],ct.y=Ht?.035*Math.max(0,Math.sin(Ft*Mr)):0,ct.yaw=tt.yaw,ct.pitch=0,ct.plant=[ct.x,ct.z],ct.stance=!0}}let ft=[(b.L.x+b.R.x)/2,(b.L.z+b.R.z)/2];bt&&(j=ft[0],J=ft[1],it=Q.chair.yaw);let Bt=o(L),ht=i.fast?i.fast(L):1,At={};for(let H in Bt){let tt=v[H];if(!tt){At[H]=Bt[H];continue}tt.w=ic[H]*ht,At[H]=Nn(tt,Bt[H],wn)}let kt=xt&&(Ot>.05||C||y),Pt=kt?jt(Ot/1):0,Yt=C?jt((L-C.t0)/C.dur):0,Vt=H=>jt(((b[H].x-j)*qt[0]+(b[H].z-J)*qt[1])/(.5*Math.max(.3,ec(Ot))),-1,1),Zt=kt?.05*(Vt("L")-Vt("R")):0,Gt=it;if(xt){let H=0,tt=0;for(let at of["L","R"]){let ct=b[at].stance?1:1-.6*Math.sin(Math.PI*Yt);H+=ct*Math.sin(b[at].yaw),tt+=ct*Math.cos(b[at].yaw)}let St=Math.atan2(H,tt);Gt=St+.3*bn(it-St)}x.hP.x===null&&(x.hP.x=Gt);{let H=x.hP.x;Gt=H+(Nn(x.hP,H+bn(Gt-H),wn)-H),x.hP.x=Gt}bt&&(Gt=it,x.hP.x=it,x.hP.v=0);let me=[-Math.cos(Gt),Math.sin(Gt)],_e=0;if(kt){let H=C?C.side:y?y.side:null;if(H){let tt=b[nc(H)];_e=.3*((tt.x-j)*me[0]+(tt.z-J)*me[1])}}let ue=Nn(x.sway,_e,wn),ce=.026*Pt,U=Le.standY-(C?ce*(.5+.5*Math.cos(Mr*Yt)):ce);if(xt)for(let H of["L","R"]){let tt=b[H];if(!tt.stance)continue;let St=H==="L"?-1:1,at=j+me[0]*St*Le.hipW,ct=J+me[1]*St*Le.hipW,Dt=Math.hypot(tt.x-at,tt.z-ct),Ft=Le.ankle+tt.y+.035+Math.sqrt(Math.max(0,.845*.845-Dt*Dt));U=Math.min(U,Ft)}let Re=Nn(x.py,U,wn),ie=Nn(x.still,kt&&Ot>.05?0:1,wn),R=kt?jt(Ot/.8+.15):0,g=Nn(x.swL,-.36*Vt("L")*R,wn),V=Nn(x.swR,-.36*Vt("R")*R,wn),Z=Nn(x.chest,-1.6*Zt,wn),nt=Nn(x.lean,kt?.07*jt(Kt/1.5,-1,1):0,wn),dt,ut,$,st=0,pt=0,Et=0,mt=0;if(bt){let H=Q.times,tt=Q.chair,St=n(tt),at=s(tt,0,et.dz+Fn.seatBack),ct=jt((L-H.sit0)/(H.sit1-H.sit0)),Dt=jt((L-H.up0)/(H.up1-H.up0)),Ft=At.slide,Ht=[St.F[0]*Ft,St.F[2]*Ft];if(L<H.up0){let ke=qn.io(ve(0,.85,ct)),Yn=ve(.08,.88,ct)**1.2;dt=ae(ft[0],at[0],ke),$=ae(ft[1]-St.F[2]*.03,at[1],ke),ut=ae(Le.standY-.05,Le.seatY,Yn)}else{let ke=qn.io(ve(0,1,Dt)),Yn=qn.io(ve(.12,.95,Dt));dt=ae(at[0],ft[0],ke),$=ae(at[1]+Ht[1],ft[1],ke),ut=ae(Le.seatY,Le.standY,Yn)}L>=H.sit1-.1&&L<H.up0&&(dt=at[0]+Ht[0],$=at[1]+Ht[1],ut=Le.seatY);let We=L>H.sit0+1.1&&L<H.sit0+1.75?1:0;mt=Nn(A,We?-.022*Math.exp(-(L-H.sit0-1.1)*9):0,wn),ut+=mt,pt=.12*jt(ct*1.3)*(L<H.up0?1:1-Dt)+.1*At.sp,x.py.x=ut,x.py.v=0,x.sway.x=0,x.still.x=1}else{dt=ae(j+me[0]*ue,ft[0],ie),$=ae(J+me[1]*ue,ft[1],ie),ut=Re,st=Zt,Et=C?.045*Math.sin(Math.PI*Yt)*Pt*(C.side==="L"?1:-1):0,pt=.035*Pt;let H=e(L+.5);if(H.type==="sit"){let tt=ve(H.times.antic,H.times.sit0,L);ut-=.05*tt;let St=Ii(H.chair.yaw).F;dt-=St[0]*.03*tt,$-=St[2]*.03*tt}}let gt=Gt+st+.4*bn(it-Gt)+Z,Lt=gt-(Gt+st),Nt=bn(it+.12*st-gt),Jt=nt,T=-1*Et,k=.25*Et,W=i.breath?i.breath(L):{rate:1.65,amp:1},ot=Math.sin(L*W.rate+(i.phase||0))*W.amp,lt=z*Pi.length,B=(H,tt)=>{f[lt+Sr[H]]=tt};B("rx",j),B("rz",J),B("h",Gt),B("px",dt),B("py",ut),B("pz",$),B("pyaw",st),B("ppitch",pt),B("proll",Et);for(let H in Eo)B(H,At[H]);B("gaitV",Pt),B("walking",kt?1:0),B("swL",g),B("swR",V),B("gCy",Lt),B("gCh",Jt),B("gCr",T),B("gHy",Nt),B("gHr",k);for(let H of["L","R"]){let tt=b[H];B(`f${H}x`,tt.x),B(`f${H}z`,tt.z),B(`f${H}y`,tt.y),B(`f${H}yaw`,tt.yaw),B(`f${H}p`,tt.pitch),B(`f${H}st`,tt.stance?1:0)}if(rt)B("chx",rt.pos[0]),B("chz",rt.pos[1]),B("chyaw",rt.yaw);else{let H=t.find(tt=>tt.type==="sit");H&&(B("chx",H.chair.x),B("chz",H.chair.z),B("chyaw",H.chair.yaw))}B("chback",At.back),B("seatDip",mt),B("breath",ot),B("tap",At.type),B("vis",i.visible?i.visible(L)?1:0:1)}})();function u(c){let v=jt((c-l)*sc,0,p-1.001),A=Math.floor(v),x=v-A,b=y=>ae(f[A*Pi.length+Sr[y]],f[(A+1)*Pi.length+Sr[y]],x),w=y=>{let E=f[A*Pi.length+Sr[y]],P=f[(A+1)*Pi.length+Sr[y]];return E+bn(P-E)*x},C={};for(let y of Pi)C[y]=y.endsWith("yaw")||y==="h"?w(y):b(y);return C}let _=Le.upper,S=Le.fore;function m(c,v){let A=Ii(c.h),x=[c.px,c.py,c.pz],b=wo(Xi(bo(A,c.pyaw),c.ppitch),c.proll),w=c.breath,C=Xi(b,c.sp*.55),y=Pe(x,C,0,.2,0),E=wo(Xi(bo(Xi(C,c.sp*.45),c.gCy+c.cy),c.ch+c.gCh-.012*w),c.cr+c.gCr),P=c.dr,N=.3-.035*P+.004*w,O=-.012+.035*P,D={L:Pe(y,E,-Le.shW*(1-.06*P),N,O),R:Pe(y,E,Le.shW*(1-.06*P),N,O)},I=Pe(y,E,0,.355-.02*P,.02+.03*P),z=c.hy+c.gHy,L=c.hp-c.ch*.3-c.sp*.25;if(c.lw>.001){let ht=_t.norm(_t.sub([c.lx,c.ly,c.lz],Pe(I,E,0,.165,0))),At=Math.atan2(_t.dot(ht,E.R),_t.dot(ht,E.F)),kt=-Math.asin(jt(_t.dot(ht,E.U),-1,1)),Pt=jt(c.lw);z=ae(z,jt(At,-1.1,1.1),Pt),L=ae(L,jt(kt,-.7,.8),Pt)}let Y=wo(Xi(bo(E,z),L),c.hr+c.gHr),j=Pe(I,Y,0,.165,.015),J={L:Pe(x,b,-Le.hipW,-.035,0),R:Pe(x,b,Le.hipW,-.035,0)},it={};for(let ht of["L","R"]){let At=c[`f${ht}yaw`],kt=c[`f${ht}p`],Pt=Xi(Ii(At),-kt),Yt=[c[`f${ht}x`],Le.ankle+c[`f${ht}y`],c[`f${ht}z`]],Vt=_t.norm(_t.add(b.F,_t.mul(b.R,(ht==="L"?-1:1)*.15))),[Zt,Gt]=tc(J[ht],Yt,Le.thigh,Le.shin,Vt);it[ht]={hip:J[ht],knee:Zt,ankle:Gt,foot:Pt,stance:c[`f${ht}st`]>.5}}let Q=i.desk,bt=Q?Ii(Q.yaw):null,xt=(ht,At,kt)=>Pe([Q.x,0,Q.z],bt,-ht,At,kt),Ot=i.laptopAt?i.laptopAt(v):null,Kt=Ii(c.chyaw),qt=[c.chx,0,c.chz],et=c.tap*.012*Math.max(0,Math.sin(v*17.3))+c.tap*.006*Math.sin(v*5.1),rt=c.tap*.012*Math.max(0,Math.sin(v*15.1+1.7))+c.tap*.006*Math.sin(v*4.3+2),ft={};for(let ht of["L","R"]){let At=ht==="L"?-1:1,kt=D[ht],Pt=c["sw"+ht],Yt=.42+.55*Math.max(0,Pt)-.12*Math.min(0,Pt),Vt=.1,Zt=Pe(kt,E,At*Vt*_,-Math.cos(Pt)*_,Math.sin(Pt)*_),Gt=Pe(Zt,E,At*Vt*S,-Math.cos(Pt+Yt)*S,Math.sin(Pt+Yt)*S),me={wHang:Gt,wSeat:Pe(qt,Kt,At*.25,.52,.02),wThigh:_t.add(it[ht].knee,_t.add(_t.mul(b.F,-.09),[0,.075,0])),wEdge:Q?xt(ht==="L"?.27:-.27,Q.top+.045,-Q.d/2+.035):Gt,wKey:Ot?(()=>{let ut=Ii(Ot.yaw),$=(ht==="L"?.085:-.085)+(ht==="L"?.004:-.004)*Math.sin(v*1.3);return Pe([Ot.x,Q.top+.075+(ht==="L"?et:rt),Ot.z],ut,-$,0,-.035)})():Gt,wFold:Q?xt(ht==="L"?-.04:.16,Q.top+(ht==="L"?.05:.08),-Q.d/2+(ht==="L"?.36:.32)):Gt,wUp:Pe(kt,E,At*-.06,.52,.08),wTabL:Pe(kt,E,-.02,-.3,.27),wTapR:Pe(kt,E,-.1+.015*Math.sin(v*6.1),-.25+.012*Math.max(0,Math.sin(v*7.3)),.3),wGestR:Pe(kt,E,.16,-.36,.3),wRaiseR:Pe(kt,E,.22,.42,.12),wWaveR:Pe(kt,E,.3+.12*Math.sin(v*7.5),.26,.18),wChinR:Pe(I,E,.06,-.02,.12),wHipR:Pe(x,b,.2,.08,.02),wHipL:Pe(x,b,-.2,.08,.02)},_e=0;for(let ut of br)ut.at(-1)===ht&&(_e+=Math.max(0,c[ut]));let ue=Math.max(0,1-Math.min(1,_e)),ce=0,U=[0,0,0];for(let ut of br){let $=ut.at(-1);if(($==="L"||$==="R")&&$!==ht)continue;let st=Math.max(0,c[ut])*($===ht?1:ue);ce+=st,U=_t.add(U,_t.mul(me[ut],st))}U=ce>1e-4?_t.mul(U,1/ce):Gt;let Re=c.wKey+c.wFold+c.wEdge,ie=c.wThigh+c.wSeat+c.wHang;Q&&(U[1]+=.16*jt(4*Re*ie/((Re+ie)**2||1)));let R=_t.mul(E.R,At),g=_t.norm(_t.add(_t.add(_t.mul(E.F,-.6),_t.mul(R,.3)),_t.mul(E.U,-.7))),V=c.wUp+(ht==="R"?c.wRaiseR+c.wWaveR:0),Z=ht==="L"?c.wTabL:c.wTapR+c.wGestR;g=_t.norm(_t.add(_t.mul(g,Math.max(0,1-V-c.wFold*.8-Z*.5)),_t.add(_t.add(_t.mul(_t.add(R,_t.mul(E.F,.4)),V),_t.mul(_t.add(R,[0,-.6,0]),c.wFold*.8)),_t.mul(_t.add(_t.mul(R,.5),[0,-1,0]),Z*.5))));let[nt,dt]=tc(kt,U,_,S,g);if(c.wFold>.01&&Q){let ut=xt(ht==="L"?.31:-.165,Q.top+.072,-Q.d/2+.27),$=_t.add(kt,_t.mul(_t.norm(_t.sub(ut,kt)),_));nt=_t.lerp(nt,$,jt(c.wFold)),dt=_t.add(nt,_t.mul(_t.norm(_t.sub(U,nt)),S))}ft[ht]={sh:kt,el:nt,wr:dt}}let Bt={x:c.chx,z:c.chz,yaw:c.chyaw,back:c.chback,dip:c.seatDip};return{t:v,visible:c.vis>.5,root:[c.rx,c.rz,c.h],pelvis:x,pelvisF:b,waist:y,lowF:C,chestF:E,neck:I,headC:j,headF:Y,leg:it,arm:ft,eyes:jt(c.ey,0,1.35),brow:jt(c.bw,-1.2,1.3),chair:Bt,breath:w,gait:c.gaitV,walking:c.walking>.5,tab:c.wTabL}}return{id:i.id,sample:u,pose:c=>m(u(c),c),T_START:l,T_END:d,rootAt:r,segs:t}}var mu=new G(0,1,0),gu=new we,Ls=new G,dg=new G,fg=new G,Ao=null;function pg(){if(Ao)return Ao;let i=(d,p,f,u)=>{let _=new Be(p,d,f,14);_.translate(0,f/2,0);let S=new Ve(u,14,10);return[_,S]},t=(d,p,f)=>{let u=new js(d.map(([_,S])=>new Qt(_,S)),p);return u.scale(1,1,f),u.computeVertexNormals(),u},[e,n]=i(.054,.042,Le.upper,.056),[s,r]=i(.043,.034,Le.fore,.043),[a,o]=i(.085,.066,Le.thigh,.085),[h,l]=i(.064,.047,Le.shin,.064);return Ao={pelvis:(()=>{let d=new Ve(.17,18,12);return d.scale(1,.58,.72),d})(),abdomen:(()=>{let d=new Be(.152,.163,.23,18);return d.translate(0,.1,0),d.scale(1,1,.68),d})(),chest:t([[.152,0],[.163,.08],[.19,.2],[.212,.285],[.198,.33],[.125,.37],[.06,.39]],20,.62),shirt:new $e(.075,.19,.012),collar:(()=>{let d=new tr(.066,.014,6,18);return d.rotateX(Math.PI/2),d})(),neck:(()=>{let d=new Be(.047,.055,.1,12);return d.translate(0,.03,0),d})(),head:(()=>{let d=new Ve(.105,22,16);return d.scale(.92,1.08,1),d})(),hairShort:(()=>{let d=new Ve(.113,22,12,0,Math.PI*2,0,Math.PI*.53);return d.scale(1,1,1.06),d})(),hairCropped:(()=>{let d=new Ve(.11,22,12,0,Math.PI*2,0,Math.PI*.46);return d.scale(1,.95,1.02),d})(),eye:new Ve(.0115,10,8),nose:new Ve(.017,10,8),hand:(()=>{let d=new Ve(.043,12,10);return d.scale(.82,1.2,.48),d.translate(0,.035,0),d})(),shoe:(()=>{let d=new Ve(.06,14,10);return d.scale(.88,.52,2.05),d.translate(0,-.045,.055),d})(),upper:e,shoulder:n,fore:s,elbow:r,thigh:a,hipJ:o,shin:h,knee:l,tablet:new $e(.19,.012,.26),tabletScreen:new $e(.17,.002,.235),badge:new $e(.055,.075,.005),strap:new $e(.011,1,.003),brow:new $e(.036,.0085,.012),vestCollar:new Be(.078,.086,.06,18,1,!0)},Ao}function ac(i){let t=pg(),e=(m,c=.85)=>new an({color:m,roughness:c,metalness:0}),n={coat:e(i.vest||i.coat),sleeve:e(i.sleeve||i.coat,.9),shirt:e(i.shirt,.9),pants:e(i.pants,.9),shoe:e(i.shoe||"#1b1c22",.6),skin:e(i.skin,.75),hair:e(i.hair,.9),eye:new Oe({color:"#1d1a20"})},s=new be,r=(m,c,v=s,A=!0)=>{let x=new Ae(m,c);return x.castShadow=A,x.receiveShadow=!1,v.add(x),x},a={pelvis:r(t.pelvis,n.pants),abdomen:r(t.abdomen,n.coat),chest:new be,neck:r(t.neck,n.skin),head:new be};if(s.add(a.chest,a.head),r(t.chest,n.coat,a.chest),r(t.shirt,n.shirt,a.chest).position.set(0,.255,.104),r(t.collar,n.shirt,a.chest,!1).position.set(0,.365,.004),i.vest){let m=r(t.vestCollar,n.coat,a.chest,!1);m.position.set(0,.375,-.004),m.scale.set(1,1,.82)}if(i.badge){let m=new an({color:"#2f6f9f",roughness:.8}),c=(v,A)=>{let x=r(t.strap,m,a.chest,!1);x.position.set((v[0]+A[0])/2,(v[1]+A[1])/2,(v[2]+A[2])/2),Ls.set(A[0]-v[0],A[1]-v[1],A[2]-v[2]),x.scale.y=Ls.length(),x.quaternion.setFromUnitVectors(mu,Ls.normalize())};for(let v of[-1,1])c([v*.056,.372,.05],[v*.045,.31,.136]),c([v*.045,.31,.136],[v*.012,.215,.14]);r(t.badge,new an({color:"#f4f4f2",roughness:.6}),a.chest,!1).position.set(0,.18,.141)}r(t.head,n.skin,a.head);let o=r(t[i.hairStyle==="cropped"?"hairCropped":"hairShort"],n.hair,a.head);o.position.set(0,.018,-.012),o.rotation.x=-.34;let h=[-1,1].map(m=>{let c=r(t.eye,n.eye,a.head,!1);return c.position.set(m*.036,.012,.094),c});{let m=r(t.nose,n.skin,a.head,!1);m.position.set(0,-.004,.103),m.scale.set(.75,1.25,.95)}let l=i.brows?[-1,1].map(m=>{let c=r(t.brow,n.hair,a.head,!1);return c.position.set(m*.037,.037,.092),c.rotation.x=-.25,c}):[],d={};for(let m of["L","R"])d[m]={upper:r(t.upper,n.sleeve),shoulder:r(t.shoulder,i.vest?n.coat:n.sleeve),fore:r(t.fore,n.sleeve),elbow:r(t.elbow,n.sleeve),hand:r(t.hand,n.skin),thigh:r(t.thigh,n.pants),hipJ:r(t.hipJ,n.pants),shin:r(t.shin,n.pants),knee:r(t.knee,n.pants),shoe:r(t.shoe,n.shoe)};let p=null;if(i.tablet){p=new be,r(t.tablet,new an({color:"#23262b",roughness:.45}),p);let m=r(t.tabletScreen,new an({color:"#dfe7ef",emissive:"#cfdcea",emissiveIntensity:.9,roughness:.3}),p,!1);m.position.y=.0065;let c=(A,x,b,w,C)=>{r(new $e(A,.001,x),new Oe({color:C}),p,!1).position.set(b,.0085,w)};c(.14,.012,0,-.095,"#2f7fc0"),c(.1,.006,-.02,-.07,"#9fb3c8"),c(.14,.09,0,0,"#f2f6fa"),c(.06,.03,-.04,.085,"#2f7fc0"),c(.06,.03,.04,.085,"#c9d4de");let v=new Mi("#dce7f7",0,1.5,2);v.position.set(0,.12,0),p.add(v),p.userData.light=v,s.add(p)}let f=(m,c)=>{gu.makeBasis(Ls.set(-c.R[0],-c.R[1],-c.R[2]),dg.set(c.U[0],c.U[1],c.U[2]),fg.set(c.F[0],c.F[1],c.F[2])),m.quaternion.setFromRotationMatrix(gu)},u=(m,c,v)=>{m.position.set(c[0],c[1],c[2]),Ls.set(v[0]-c[0],v[1]-c[1],v[2]-c[2]).normalize(),m.quaternion.setFromUnitVectors(mu,Ls)},_=(m,c)=>m.position.set(c[0],c[1],c[2]);function S(m){if(s.visible=m.visible,!m.visible)return;_(a.pelvis,[m.pelvis[0]+m.pelvisF.U[0]*.02,m.pelvis[1]+.02,m.pelvis[2]+m.pelvisF.U[2]*.02]),f(a.pelvis,m.pelvisF),_(a.abdomen,m.pelvis),f(a.abdomen,m.lowF),_(a.chest,m.waist),f(a.chest,m.chestF),u(a.neck,m.neck,[m.neck[0]+m.headF.U[0],m.neck[1]+m.headF.U[1],m.neck[2]+m.headF.U[2]]),_(a.head,m.headC),f(a.head,m.headF);let c=Math.max(.12,Math.min(1.3,m.eyes));for(let A of h)A.scale.set(1,c,1);let v=m.brow||0;l.forEach((A,x)=>{let b=x?1:-1;A.position.y=.037+.009*Math.max(0,v)-.004*Math.max(0,-v),A.rotation.z=b*(-.32*Math.max(0,-v)+.08*Math.max(0,v))});for(let A of["L","R"]){let x=m.arm[A],b=m.leg[A],w=d[A];u(w.upper,x.sh,x.el),_(w.shoulder,x.sh),u(w.fore,x.el,x.wr),_(w.elbow,x.el),u(w.hand,x.wr,[2*x.wr[0]-x.el[0],2*x.wr[1]-x.el[1],2*x.wr[2]-x.el[2]]),u(w.thigh,b.hip,b.knee),_(w.hipJ,b.hip),u(w.shin,b.knee,b.ankle),_(w.knee,b.knee),_(w.shoe,b.ankle),f(w.shoe,b.foot)}if(p){p.visible=m.tab>.3;let A=m.arm.L.wr,x=m.chestF,b=[A[0]+x.R[0]*.07+x.U[0]*.03+x.F[0]*.04,A[1]+x.R[1]*.07+x.U[1]*.03+x.F[1]*.04,A[2]+x.R[2]*.07+x.U[2]*.03+x.F[2]*.04];p.position.set(b[0],b[1],b[2]);let w=[x.U[0]*.8-x.F[0]*.6,x.U[1]*.8-x.F[1]*.6,x.U[2]*.8-x.F[2]*.6],C=[x.F[0]*.8+x.U[0]*.6,x.F[1]*.8+x.U[1]*.6,x.F[2]*.8+x.U[2]*.6];f(p,{R:x.R,U:w,F:C})}}return{group:s,applyPose:S,mats:n,tablet:p}}var Us=[{id:"01_arrival",name:"Binnenkomst",t0:0,t1:9},{id:"02_start_work",name:"Aan het werk",t0:9,t1:15},{id:"03_false_off_1",name:"Eerste uitval",t0:15,t1:25},{id:"04_false_off_2",name:"Tweede uitval",t0:25,t1:34},{id:"05_give_up_sleep",name:"Geeft het op",t0:34,t1:46},{id:"06_technician_arrives",name:"Technicus komt",t0:46,t1:53.5},{id:"07_diagnosis",name:"Diagnose",t0:53.5,t1:61.8},{id:"08_configuration",name:"Configureren",t0:61.8,t1:72.6},{id:"09_wake_up_proof",name:"Wakker \u2014 het werkt",t0:72.6,t1:84},{id:"10_daylight_control",name:"Daglichtregeling",t0:84,t1:95},{id:"11_ending",name:"Einde",t0:95,t1:104}],ri=104,lc=i=>Us.filter(t=>t.t0<=i+1e-6).at(-1)||Us[0],cc=90.5,mg=[[2.7,1,1.5],[18.2,.3,1.2],[20.3,0,1],[22.5,1,1.2],[28,.3,1.2],[30,0,1],[32,1,1.2],[36.8,.3,1.2],[40.6,0,1.4],[48.5,1,1.5],[58,.3,1.2],[60.3,1,1],[68.9,.3,1.2],[70.9,0,1],[74.9,1,.4]];function gg(i){let t=0;for(let[e,n,s]of mg){if(i<e)break;t=ae(t,n,Ps(jt((i-e)/s)))}return t}var _g=[2.4,22.2,31.8,48.2,60.15,74.85],xg=71,yg=[.85,.45,.08],vg=i=>ve(84,93,i);function hc(i,t={}){let e=vg(i),n=ve(85,94,i),s=ve(86.5,95,i),r=gg(i),a=yg.map(d=>r*(1-d*n)),o=-1,h=0;for(let d of _g){let p=(i-d)/1.4;p>=0&&p<1&&(o=p),i>=d&&(h=Math.max(h,Math.exp(-(i-d)/1.6)))}t.walking&&(h=Math.max(h,.55)),i>=xg&&t.typing&&(h=Math.max(h,.4*t.typing));let l=1-.75*hu(38.6,39.4,79.1,79.9,i);return{rows:a,corridor:.6,sky:.1+.9*e,sun:s,led:h,pulse:o,laptop:l,zone:r}}function uc(i){let t=Ps(jt((i-38.4)/.8))*(1-Ps(jt((i-78.9)/1)));return{x:ae(ii.x,ii.ax,t),z:ae(ii.z,ii.az,t),yaw:ii.ayaw*t}}var Ds=[0,2.45,-1.5],Mg=[0,3.2,1],oc=[1.3,-.6],Sg=[1.3,1.62,-.6],bg=[5,1.7,1.5],wg=-.4,Ue=(i,t=1)=>({lw:t,lx:i[0],ly:i[1],lz:i[2]}),Tg={walk:zt({sp:.05}),stand:zt({hp:.04}),antic:zt({sp:.14,ch:.06,hp:.22,hy:-.55,cy:-.12}),sitMid:zt({sp:.52,ch:.16,hp:.12,hy:-.15,wSeat:1}),seated:zt({sp:.04,ch:.02,hp:.12,wThigh:1}),pull:zt({sp:.2,ch:.06,hp:.18,wEdge:1}),type:zt({cy:.08,sp:.1,ch:.07,hp:.36,wKey:1,type:1}),typeCalm:zt({cy:.06,sp:.1,ch:.07,hp:.38,wKey:1,type:.5}),stop1:zt({bw:.5,cy:.04,sp:.06,ch:.02,hp:.1,wKey:1,type:0,ey:1.05}),lookUp1:zt({bw:1,sp:0,ch:-.06,hp:-.3,wKey:1,ey:1.1,...Ue(Ds,1)}),raise1:zt({bw:.8,sp:0,ch:-.04,hp:-.25,wKey:1,wRaiseR:1,ey:1.1,...Ue(xn,1)}),okWeird:zt({bw:.35,sp:.04,ch:0,hp:.05,hr:.12,wKey:1,ey:1,...Ue(xn,.5)}),stop2:zt({bw:-.3,sp:.08,ch:.04,hp:.15,wKey:1,type:0,ey:.95}),lookUp2:zt({bw:-.5,sp:0,ch:-.08,hp:-.32,wKey:1,ey:1,...Ue(Ds,1)}),sighUp:zt({bw:-.4,sp:-.02,ch:-.12,dr:-.55,hp:-.3,wKey:1,ey:.9,...Ue(Ds,1)}),sighDown:zt({bw:-.8,sp:.08,ch:.04,dr:.45,hp:-.1,wKey:1,ey:.8,...Ue(Ds,.6)}),raise2:zt({bw:-.7,sp:.02,ch:-.02,dr:.1,hp:-.25,wKey:1,wRaiseR:1,ey:1,...Ue(xn,1)}),suspicious:zt({bw:-1,sp:.06,ch:.02,hp:-.12,hy:.15,wKey:1,ey:.7,...Ue(xn,.9)}),stop3:zt({bw:-.4,sp:.08,ch:.04,hp:-.05,wKey:1,type:0,ey:.85,...Ue(Ds,.7)}),giveUp:zt({bw:-.6,sp:.26,ch:.2,dr:.9,hp:.34,wKey:1,ey:.6}),pushLap:zt({bw:-.5,sp:.3,ch:.1,dr:.3,hp:.35,ey:.5,wKey:1}),sigh2:zt({bw:-.3,sp:.05,ch:-.08,dr:-.15,hp:.15,ey:.4,wThigh:.6,wEdge:.4}),fold:zt({sp:.5,ch:.04,dr:.45,hp:.3,ey:.25,wFold:1}),nod:zt({sp:.56,ch:.08,dr:.7,hp:.9,ey:0,wFold:1}),jerk:zt({sp:.4,ch:-.02,dr:.2,hp:0,ey:1,wFold:1}),trying:zt({sp:.46,ch:.04,dr:.45,hp:.35,ey:.55,wFold:1}),sleep:zt({sp:.68,ch:0,dr:.55,hp:.6,hy:.35,hr:.25,ey:0,wFold:1}),stir:zt({sp:.64,ch:0,dr:.5,hp:.5,hy:.1,hr:.2,ey:0,wFold:1}),startleHead:zt({bw:1,sp:.42,ch:.02,dr:.3,hp:-.12,ey:1.35,wFold:.85,wEdge:.15}),startle:zt({bw:1.2,sp:0,ch:-.14,dr:-.5,hp:-.18,ey:1.35,wFold:.25,wEdge:.75}),lookUpWake:zt({bw:1,sp:0,ch:-.1,dr:-.25,hp:-.3,ey:1.4,wEdge:1,...Ue(Mg,1)}),lookTech:zt({bw:.55,sp:.02,ch:-.04,dr:-.1,cy:wg,ey:1.15,wEdge:1,...Ue(Sg,1)}),normalSit:zt({bw:.15,sp:.05,ch:.03,hp:.2,ey:1,wEdge:1}),pullLap:zt({sp:.12,ch:.05,hp:.3,ey:1,wEdge:1}),leanBack:zt({sp:-.1,ch:-.12,hp:.05,ey:1,wThigh:.5,wEdge:.5}),glanceWin:zt({cy:.1,sp:.08,ch:.04,hp:.1,wKey:1,type:.3,ey:1,...Ue(bg,.9)}),stopSus:zt({bw:-.9,sp:.04,ch:-.02,hp:-.2,wKey:1,type:0,ey:.8,...Ue(Ds,1)}),nodOk:zt({bw:.2,sp:.06,ch:.02,hp:.3,wKey:1,type:0,ey:1}),typeRelaxed:zt({cy:.06,sp:.08,ch:.05,dr:.1,hp:.34,wKey:1,type:.8})},Eg=[[-10,.01,"walk","lin"],[8,.9,"stand"],[8.55,.4,"antic"],[9.05,.6,"sitMid"],[10.05,.6,"seated","out"],[10.65,.4,"pull"],[11.7,.55,"type"],[16.5,1.2,"typeCalm","sine"],[20.8,.4,"stop1"],[21.2,.7,"lookUp1"],[22,.45,"raise1","out"],[23.1,.6,"okWeird"],[23.9,.7,"type"],[26.5,1.2,"typeCalm","sine"],[30.4,.35,"stop2"],[30.8,.6,"lookUp2"],[31,.45,"sighUp"],[31.5,.5,"sighDown"],[31.75,.4,"raise2","out"],[32.7,.6,"suspicious"],[33.7,.7,"type"],[35,1.2,"typeCalm","sine"],[37.3,.4,"stop3"],[37.9,.6,"giveUp"],[38.4,.3,"pushLap"],[39.15,.45,"sigh2"],[39.6,.75,"fold"],[40.6,.55,"nod","in"],[41,.22,"jerk","out"],[41.3,.6,"trying"],[41.9,1.1,"sleep"],[74.4,.5,"stir"],[74.85,.12,"startleHead","out"],[74.97,.2,"startle","out"],[75.5,.5,"lookUpWake"],[76.9,.6,"lookTech"],[78.3,.6,"normalSit"],[78.9,.6,"pullLap"],[80.2,.6,"type"],[88,.6,"glanceWin"],[89.6,.6,"type"],[99.5,.45,"stopSus"],[101.6,.4,"nodOk"],[102.2,.6,"typeRelaxed"]];function Ag(i,t){let e=t.wKey*(t.ey>.8?1:.4)*(1-t.lw);t.hp+=e*(.035*Math.sin(i*.9)+.025*Math.sin(i*2.3+1))-e*.12*ve(0,.4,Math.sin(i*.55-.7)-.85),t.hy+=e*.05*Math.sin(i*.37+.4);let n=jt((i-41.3-.1)/.8);if(n>0&&n<1&&(t.hy+=.14*Math.sin(n*Math.PI*4)*(1-n)),t.ey>.5){let s=Math.floor((i+1.3)/3.9),r=s*3.9-1.3+.9*Math.sin(s*2.3);Math.abs(i-r)<.07&&(t.ey*=.1)}return t}var Rg=i=>1+1.6*(i>41&&i<41.35||i>74.83&&i<75.15?1:0),Cg=i=>{let t=ve(41.9,43.2,i)*(1-ve(74.3,74.5,i));return{rate:ae(1.65,1.05,t),amp:ae(1,2.2,t)}},wr=rc({id:"worker",tStart:-3,tEnd:ri+1,loco:[{type:"stand",t0:-10,t1:-1.4,pos:[-2.7,-9.4],h:0},{type:"walk",t0:-1.4,t1:8.5,path:[[-2.7,-9.4],[-2.7,-7.4],[-2.3,-5.4],[-1.55,-3.4],[-.98,-1.9],[-.68,-1.2],[-.36,-.68],[0,-.62]],accel:.9,decel:1,hEnd:0},{type:"sit",t0:8.5,t1:ri+1,chair:Cs,chairWake:74.85,times:{antic:8.55,sit0:9.2,sit1:10.45,scoot0:10.8,scoot1:11.8,push0:999,push1:1e3,up0:1001,up1:1002}}],poses:Tg,seq:Eg,layers:Ag,fast:Rg,breath:Cg,desk:pe,laptopAt:uc}),Ig=[0,1,-.55],_u=[0,1.3,-.6],Pg=[4.5,2.4,-1],Lg=[0,2.85,-1.5],xu={hp:.5,hy:-.12},Dg={walkTab:zt({sp:.05,wTabL:1}),standTab:zt({hp:.06,wTabL:1}),lookWorker:zt({sp:.07,ch:.04,wTabL:.35,wHang:1,...Ue(Ig,1)}),lookWorkerUp:zt({sp:-.02,ch:-.05,wTabL:.35,wHang:1,...Ue(_u,1)}),lookSensor:zt({ch:-.06,wTabL:1,...Ue(xn,1)}),walkLookUp:zt({sp:.03,ch:-.05,wTabL:1,...Ue(xn,1)}),lookTab:zt({sp:.04,ch:.06,wTabL:1,...xu}),tapTab:zt({sp:.04,ch:.06,wTabL:1,wTapR:1,...xu}),wave:zt({ch:-.04,wTabL:1,wWaveR:1,...Ue(xn,1)}),nod:zt({sp:.04,ch:.08,hp:.3,wTabL:1,wTapR:.5}),gesture:zt({wTabL:1,wGestR:1,hp:.05,...Ue(_u,1)}),lookRoom:zt({ch:-.03,wTabL:1,...Ue(Pg,1)}),lookLight:zt({ch:-.07,wTabL:1,...Ue(Lg,1)})},Ug=[[-10,.01,"walkTab","lin"],[52,.7,"standTab"],[53.8,.6,"lookWorker"],[55.2,.7,"lookSensor"],[56.4,.6,"lookTab"],[58.4,.6,"lookLight"],[59.1,.5,"lookTab"],[59.8,.6,"walkLookUp"],[63.4,.6,"standTab"],[64,.5,"lookTab"],[64.4,.5,"tapTab"],[66.3,.5,"lookSensor"],[66.9,.5,"lookTab"],[67.3,.5,"tapTab"],[69.2,.5,"lookLight"],[69.9,.5,"lookTab"],[70.2,.4,"tapTab"],[71,.4,"lookTab"],[71.6,.4,"nod"],[72.1,.5,"standTab"],[72.9,.8,"lookWorker"],[75,.4,"lookWorkerUp"],[78.4,.6,"lookTab"],[80.6,.8,"lookLight"],[82,.6,"lookTab"],[84.3,.5,"walkTab"],[88.3,.7,"standTab"],[88.6,.8,"lookRoom"],[91,.7,"lookTab"],[92.2,.8,"lookRoom"],[94,.7,"lookTab"],[95.5,.6,"lookRoom"],[96.5,.5,"walkTab"]];function Ng(i,t){if(t.ey>.5){let e=Math.floor((i+.4)/4.3),n=e*4.3-.4+1.1*Math.sin(e*1.7);Math.abs(i-n)<.07&&(t.ey*=.1)}t.hp>.3&&t.lw<.3&&(t.hy+=.05*Math.sin(i*1.4),t.hp+=.02*Math.sin(i*.9+1));for(let e of[59.3,77.4]){let n=i-e;n>0&&n<.5&&(t.hp+=.14*Math.sin(Math.PI*n/.5))}return t}var Ro=rc({id:"technician",tStart:40,tEnd:ri+1,phase:1.9,loco:[{type:"stand",t0:-10,t1:45.8,pos:[-2.7,-9.6],h:0},{type:"walk",t0:45.8,t1:52.5,path:[[-2.7,-9.6],[-2.7,-7.4],[-2.25,-5.4],[-1.5,-3.6],[-.9,-2.3]],accel:1,decel:1,hEnd:.49},{type:"stand",t0:52.5,t1:59.8,pos:[-.9,-2.3],h:.49},{type:"walk",t0:59.8,t1:63.6,path:[[-.9,-2.3],[.2,-2.15],[1.15,-1.7],[1.45,-1.05],oc],accel:.9,decel:1,hEnd:-1.85},{type:"stand",t0:63.6,t1:84.3,pos:oc,h:-1.85},{type:"walk",t0:84.3,t1:88.3,path:[oc,[1.6,-1.2],[1.55,-1.9],[1.45,-2.7],[1.1,-3.7]],accel:.9,decel:1,hEnd:.3},{type:"stand",t0:88.3,t1:96.5,pos:[1.1,-3.7],h:.3},{type:"walk",t0:96.5,t1:103.2,path:[[1.1,-3.7],[0,-4.4],[-1.4,-5.5],[-2.5,-6.6],[-2.7,-8],[-2.7,-9.8]],accel:.9,decel:.6}],poses:Dg,seq:Ug,layers:Ng,visible:i=>i>45&&i<103.3}),Fg={"01_arrival":{d:{pos:[3,1.8,5.2],target:[-1.1,1.05,-2.8],fov:36,to:{pos:[2.7,1.75,4.7]}},m:{pos:[2.5,1.75,2.8],target:[-1.3,1.1,-3.2],fov:60}},"02_start_work":{d:{pos:[2.7,1.45,2.5],target:[-.15,.95,-.6],fov:30},m:{pos:[1.9,1.45,1.8],target:[0,1,-.6],fov:52}},"03_false_off_1":{d:{pos:[2.6,1.5,2.1],target:[0,1.35,-.7],fov:34},m:{pos:[1.65,1.4,1.3],target:[0,1.3,-.65],fov:54}},"04_false_off_2":{d:{pos:[2.45,1.5,1.95],target:[0,1.35,-.7],fov:33},m:{pos:[1.6,1.4,1.2],target:[0,1.3,-.65],fov:52}},"05_give_up_sleep":{d:{pos:[2.4,1.2,1.5],target:[0,.95,-.5],fov:30,to:{pos:[2.2,1.18,1.35]}},m:{pos:[1.8,1.15,1.15],target:[0,.95,-.55],fov:50}},"06_technician_arrives":{d:{pos:[2.5,1.65,.9],target:[-2,1.15,-5],fov:38},m:{pos:[2.2,1.7,.9],target:[-1.6,1.1,-4.6],fov:64}},"07_diagnosis":{d:{pos:[2.7,1.5,1.3],target:[-.5,1.65,-2.3],fov:36},m:{pos:[1.9,1.5,.7],target:[-.6,1.7,-2.4],fov:58}},"08_configuration":{d:{pos:[-1.7,1.6,2.1],target:[.75,1.25,-.8],fov:38,to:{pos:[-1.38,1.52,1.72]}},m:{pos:[-1,1.55,1.7],target:[.8,1.3,-.8],fov:60,to:{pos:[-.82,1.5,1.45]}}},"09_wake_up_proof":{d:{pos:[.75,1.5,2.45],target:[.6,1.55,-.7],fov:35},m:{pos:[1.2,1.45,2],target:[.55,1.2,-.8],fov:62}},"10_daylight_control":{d:{pos:[-4.5,1.95,-6.1],target:[2.3,1.05,.15],fov:42,to:{pos:[-4.2,1.9,-5.5]}},m:{pos:[-4.1,2,-4.9],target:[1.6,1.1,.2],fov:64}},"11_ending":{d:{pos:[2.9,1.5,2.7],target:[-.6,1,-1.2],fov:32,to:{pos:[3.15,1.56,2.98]}},m:{pos:[2,1.45,2],target:[-.5,1.05,-1.2],fov:52}}};function yu(i,t){let e=lc(i),n=Fg[e.id][t?"m":"d"],s=n.to?Ps(jt((i-e.t0)/(e.t1-e.t0))):0,r=n.to&&n.to.pos?n.pos.map((o,h)=>ae(o,n.to.pos[h],s)):n.pos,a=n.to&&n.to.target?n.target.map((o,h)=>ae(o,n.to.target[h],s)):n.target;return{pos:r,target:a,fov:n.fov,scene:e}}var vu={mapping:Ss,exposure:1};function Mu(i){let t=i.querySelector("canvas"),e=Math.min(innerWidth,innerHeight)<600,n=new xo({canvas:t,antialias:!0,powerPreference:"high-performance"});n.setPixelRatio(Math.min(devicePixelRatio||1,e?2:1.75)),n.shadowMap.enabled=!0,n.shadowMap.type=ki;let s=new URLSearchParams(location.search),r={aces:ar,agx:or,neutral:Ss};n.toneMapping=r[s.get("tm")]??vu.mapping,n.toneMappingExposure=Number(s.get("exp"))||vu.exposure,n.outputColorSpace=qe;let a=new Zs;a.background=new Rt("#0e1a3c");let o=new Ye(32,16/9,.1,80),h=cu(a,{mobile:e}),l=s.get("brows")!=="0",d=ac({coat:"#c47d34",shirt:"#f2f2ef",pants:"#2e3852",skin:"#d9a37c",hair:"#2a211c",hairStyle:"short",brows:l}),p=ac({vest:"#2d3d50",sleeve:"#d8e0e7",shirt:"#eef2f5",pants:"#3a3f47",skin:"#c48a66",hair:"#1c1714",hairStyle:"cropped",tablet:!0,badge:!0,brows:l});a.add(d.group,p.group);let f="auto",u=null;function _(D){let I=t.clientWidth/Math.max(1,t.clientHeight),z=f==="portret"||f==="auto"&&I<1,L=yu(D,z);if(f==="close"&&(L={pos:[2,1.35,1.35],target:[0,1.1,-.6],fov:34}),f==="face"){let Y=wr.pose(D).headC;L={pos:[Y[0]+.5,Y[1]+.08,Y[2]+.95],target:[Y[0],Y[1]-.02,Y[2]],fov:28}}if(f==="tech"){let j=Ro.pose(D).root,J=[Math.sin(j[2]),Math.cos(j[2])];L={pos:[j[0]+J[0]*2.6+.8,1.45,j[1]+J[1]*2.6+.3],target:[j[0],1.15,j[1]],fov:36}}o.aspect=I,o.fov=z?L.fov:I<1.5?2*Math.atan(Math.tan(L.fov*Math.PI/360)*(1.5/I)**.6)*180/Math.PI:L.fov,o.updateProjectionMatrix(),o.position.set(L.pos[0],L.pos[1],L.pos[2]),o.lookAt(L.target[0],L.target[1],L.target[2]),u=L}let S={play:i.querySelector("[data-play]"),scrub:i.querySelector("[data-scrub]"),time:i.querySelector("[data-time]"),scene:i.querySelector("[data-scene]"),stats:i.querySelector("[data-stats]"),scenes:i.querySelector("[data-scenes]")},m=D=>D.toFixed(1).replace(".",","),c=0,v=!1,A=1,x=0,b=null,w=0,C=matchMedia("(prefers-reduced-motion: reduce)").matches;function y(){let D=wr.pose(c),I=Ro.pose(c),z={walking:D.visible&&D.walking&&D.root[1]>-7.2||I.visible&&I.walking&&I.root[1]>-7.2,typing:D.visible?Math.min(1,Math.max(0,wr.sample(c).tap)):0},L=hc(c,z);if(h.setState(L),h.setChair(D.chair),h.setLaptop(uc(c)),d.applyPose(D),p.applyPose(I),h.setPersonShadow(0,D),h.setPersonShadow(1,I),p.tablet){let Q=1-(L.rows[0]+L.rows[1]+L.rows[2])/3;p.tablet.userData.light.intensity=p.tablet.visible&&I.visible?(.05+.55*Q)*(1-L.sky):0}_(c);let Y=t.clientWidth,j=t.clientHeight,J=n.getPixelRatio();(t.width!==Math.round(Y*J)||t.height!==Math.round(j*J))&&n.setSize(Y,j,!1),n.render(a,o),S.scrub.value=String(c),S.time.textContent=`${m(c)} / ${m(ri)} s`;let it=lc(c);S.scene.textContent=`${it.id.slice(0,2)} \xB7 ${it.name}`;for(let Q of S.scenes.querySelectorAll("button"))Q.setAttribute("aria-current",Q.dataset.sceneId===it.id?"true":"false")}let E=[];function P(D){let I=x?Math.min(.1,(D-x)/1e3):0;if(x=D,v){let z=b?b[1]:ri;c>=z?(w+=I,w>1.2&&(w=0,b?N(!1):c=0)):c=Math.min(z,c+I*A),y()}if(I&&(E.push(I*1e3),E.length>120&&E.shift()),S.stats&&!S.stats.hidden&&v){let z=E.slice().sort((Y,j)=>Y-j),L=n.info;S.stats.textContent=`${(1e3/(z[Math.floor(z.length/2)]||16.7)).toFixed(0)} fps \xB7 ${L.render.calls} draw calls \xB7 ${(L.render.triangles/1e3).toFixed(1)}k driehoeken \xB7 ${L.memory.geometries} geometrie\xEBn \xB7 ${L.memory.textures} texturen \xB7 ${L.programs?.length??"\u2013"} shaders`}requestAnimationFrame(P)}let N=D=>{v=D,S.play.textContent=D?"Pauzeer":"Speel af",S.play.setAttribute("aria-pressed",String(!D))};S.play.addEventListener("click",()=>{c>=(b?b[1]:ri)-.001&&(c=b?b[0]:0),N(!v)}),i.querySelector("[data-replay]")?.addEventListener("click",()=>{c=b?b[0]:0,N(!0)}),S.scrub.max=String(ri),S.scrub.addEventListener("input",()=>{c=Number(S.scrub.value),b=null,N(!1),y()});for(let D of Us){let I=document.createElement("button");I.type="button",I.dataset.sceneId=D.id,I.textContent=`${D.id.slice(0,2)} ${D.name}`,I.title=`${m(D.t0)}\u2013${m(D.t1)} s`,I.addEventListener("click",()=>{b=i.querySelector("[data-loop]")?.checked?[D.t0,D.t1]:null,c=D.t0,N(!0),y()}),S.scenes.append(I)}i.querySelector("[data-full]")?.addEventListener("click",()=>{b=null,c=0,N(!0)});for(let D of i.querySelectorAll("[data-view]"))D.addEventListener("click",()=>{f=D.dataset.view,i.querySelectorAll("[data-view]").forEach(I=>I.setAttribute("aria-pressed",String(I===D))),y()});for(let D of i.querySelectorAll("[data-speed]"))D.addEventListener("click",()=>{A=Number(D.dataset.speed),i.querySelectorAll("[data-speed]").forEach(I=>I.setAttribute("aria-pressed",String(I===D)))});i.querySelector("[data-stats-toggle]")?.addEventListener("click",()=>{S.stats.hidden=!S.stats.hidden}),new ResizeObserver(()=>y()).observe(t);let O=new URLSearchParams(location.search);if(O.get("t")&&(c=Number(O.get("t"))),O.get("scene")){let D=Us.find(I=>I.id===O.get("scene")||I.id.startsWith(O.get("scene")));D&&(c=D.t0)}C&&!O.has("motion")?(c=cc,N(!1)):N(!O.has("capture")),y(),requestAnimationFrame(P),window.film={duration:ri,scenes:Us,still:cc,seek:D=>{c=D,N(!1),y()},view:D=>{f=D,y()},camera:()=>u,info:()=>({calls:n.info.render.calls,triangles:n.info.render.triangles,geometries:n.info.memory.geometries,textures:n.info.memory.textures,programs:n.info.programs?.length,dpr:n.getPixelRatio(),size:[t.width,t.height]}),gl:()=>{let D=n.getContext(),I=D.getExtension("WEBGL_debug_renderer_info");return I?D.getParameter(I.UNMASKED_RENDERER_WEBGL):D.getParameter(D.RENDERER)},poses:D=>({worker:wr.pose(D),technician:Ro.pose(D),lights:hc(D)})}}var Su=document.querySelector(".film"),bu=document.createElement("canvas");bu.getContext("webgl2")||bu.getContext("webgl")?Mu(Su):Su.classList.add("no-webgl");
