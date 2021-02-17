let accessToken;
const clientId = 'e8d2eab50a794080817852bb3c576a62';
const redirectUri = 'http://localhost:3000';


const Spotify = {
    getAccessToken() {
        console.log('Hello')
        if (accessToken) {
            return accessToken;
        } 

        const regexOne = /access_token=([^&]*)/;
        const regexTwo = /expires_in=([^&]*)/;
        //check for access token match
        const accessTokenMatch = window.location.href.match(regexOne);
        const expiresInMatch = window.location.href.match(regexTwo);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //This clears the parameters, allowing us to grab a new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl;
        }
    },

    // search(term) {
    //     const accessToken = Spotify.getAccessToken();
    //     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, { 
    //         headers: {
    //             Authorisation: `Bearer ${accessToken}`
    //         }
    //     }).then(response => {return response.json();
    //     }).then(jsonResponse => {
    //         if (!jsonResponse.tracks) {
    //             return [];
    //         }
    //         return jsonResponse.tracks.items.map(track => ({
    //             id: track.id,
    //             name: track.name,
    //             artist: track.artists[0].name,
    //             album: track.album.name,
    //             uri: track.uri
    //         })
    //         );
    //     })
    // },

    async search(term) {
        const accessToken = Spotify.getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorisation: `Bearer ${accessToken}`
            }
        });
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
            return [];
        }
        return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
        })
        );
    },

    // savePlaylist(name, trackUris) {
    //     if (!name || !trackUris.length) {
    //         return;
    //     }

    //     const accessToken = Spotify.getAccessToken();
    //     const headers = { Authorisation: `Bearer ${accessToken}`};
    //     let userId;

    //     return fetch('https://api.spotify.com/v1/me', {headers: headers}
    //     ).then(response => response.json()
    //     ).then(jsonResponse => {
    //         userId = jsonResponse.id;
    //         return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
    //         {
    //             headers: headers,
    //             method: 'POST',
    //             body: JSON.stringify({name: name})
    //         }).then(response => response.json()
    //         ).then(jsonResponse => {
    //             const playlistId = jsonResponse.id;
    //             return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
    //                 header: headers,
    //                 method: 'POST',
    //                 body: JSON.stringify({uris: trackUris})
    //             })
    //         })
    //     })
    // }

    async savePlaylist(name, trackUris) {
        if (!name || !trackUris.length) {
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { Authorisation: `Bearer ${accessToken}`};
        let userId;

        const response = await fetch('https://api.spotify.com/v1/me', { headers: headers });
        const jsonResponse = await response.json();
        userId = jsonResponse.id;

        const response_1 = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ name: name })
            });
            
        const jsonResponse_1 = await response_1.json();
        const playlistId = jsonResponse_1.id;
        return await fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
            header: headers,
            method: 'POST',
            body: JSON.stringify({ uris: trackUris })
        });
    }
}

export default Spotify;