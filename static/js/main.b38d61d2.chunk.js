(this.webpackJsonpjammming=this.webpackJsonpjammming||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n,s=a(1),r=a.n(s),c=a(10),i=a.n(c),o=(a(15),a(3)),l=a(4),u=a(2),h=a(6),d=a(5),p=(a(16),a(17),a(0)),m=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={term:""},n.search=n.search.bind(Object(u.a)(n)),n.handleTermChange=n.handleTermChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchBar",children:[Object(p.jsx)("input",{onChange:this.handleTermChange,placeholder:"Enter A Song, Album, or Artist"}),Object(p.jsx)("button",{onClick:this.search,className:"SearchButton",children:"SEARCH"})]})}}]),a}(r.a.Component),b=(a(19),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.isRemoval?Object(p.jsx)("button",{className:"track-Action",onClick:this.removeTrack,children:"-"}):Object(p.jsx)("button",{className:"track-Action",onClick:this.addTrack,children:"+"})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Track",children:[Object(p.jsxs)("div",{className:"Track-information",children:[Object(p.jsx)("h3",{children:this.props.track.name}),Object(p.jsxs)("p",{children:[this.props.track.artist,"  | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(r.a.Component)),j=(a(20),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"TrackList",children:this.props.tracks.map((function(t){return Object(p.jsx)(b,{track:t,onAdd:e.props.onAdd,onRemove:e.props.onRemove,isRemoval:e.props.isRemoval},t.id)}))})}}]),a}(r.a.Component)),v=(a(21),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"SearchResults",children:[Object(p.jsx)("h2",{children:"Results"}),Object(p.jsx)(j,{tracks:this.props.searchResults,onAdd:this.props.onAdd,isRemoval:!1})]})}}]),a}(r.a.Component)),f=(a(22),function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleNameChange=n.handleNameChange.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Playlist",children:[Object(p.jsx)("input",{defaultValue:"New Playlist",onChange:this.handleNameChange}),Object(p.jsx)(j,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(p.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component)),k=a(7),O=a.n(k),y=a(9),T={getAccessToken:function(){if(console.log("Hello"),n)return n;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){n=e[1];var a=Number(t[1]);return window.setTimeout((function(){return n=""}),1e3*a),window.history.pushState("Access Token",null,"/"),n}var s="https://accounts.spotify.com/authorize?client_id=".concat("e8d2eab50a794080817852bb3c576a62","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000");window.location=s},search:function(e){return Object(y.a)(O.a.mark((function t(){var a,n,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=T.getAccessToken(),t.next=3,fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorisation:"Bearer ".concat(a)}});case 3:return n=t.sent,t.next=6,n.json();case 6:if((s=t.sent).tracks){t.next=9;break}return t.abrupt("return",[]);case 9:return t.abrupt("return",s.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})));case 10:case"end":return t.stop()}}),t)})))()},savePlaylist:function(e,t){return Object(y.a)(O.a.mark((function a(){var n,s,r,c,i,o,l,u;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e&&t.length){a.next=2;break}return a.abrupt("return");case 2:return n=T.getAccessToken(),s={Authorisation:"Bearer ".concat(n)},a.next=6,fetch("https://api.spotify.com/v1/me",{headers:s});case 6:return c=a.sent,a.next=9,c.json();case 9:return i=a.sent,r=i.id,a.next=13,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists"),{headers:s,method:"POST",body:JSON.stringify({name:e})});case 13:return o=a.sent,a.next=16,o.json();case 16:return l=a.sent,u=l.id,a.next=20,fetch("https://api.spotify.com/v1/users/".concat(r,"/playlists/").concat(u,"/tracks"),{header:s,method:"POST",body:JSON.stringify({uris:t})});case 20:return a.abrupt("return",a.sent);case 21:case"end":return a.stop()}}),a)})))()}},x=T,N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={searchResults:[],playlistName:"My Playlist",playlistTracks:[]},n.addTrack=n.addTrack.bind(Object(u.a)(n)),n.removeTrack=n.removeTrack.bind(Object(u.a)(n)),n.updatePlaylistName=n.updatePlaylistName.bind(Object(u.a)(n)),n.savePlaylist=n.savePlaylist.bind(Object(u.a)(n)),n.search=n.search.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.find((function(t){return t.id===e.id}))||(t.push(e),this.setState({playlistTracks:t}))}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter((function(t){return t.id!==e.id})),this.setState({playlistTracks:t})}},{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));x.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New Playlist",playlistTracks:[]})}))}},{key:"search",value:function(e){var t=this;x.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("h1",{children:["Any ",Object(p.jsx)("span",{className:"highlight",children:"COLOUR"})," You Like"]}),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(m,{onSearch:this.search}),Object(p.jsxs)("div",{className:"App-playlist",children:[Object(p.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(p.jsx)(f,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(r.a.Component),g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),g()}],[[24,1,2]]]);
//# sourceMappingURL=main.b38d61d2.chunk.js.map