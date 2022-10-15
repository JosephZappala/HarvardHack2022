import {useEffect, useState} from "react";
//import axios from 'axios';

function Login() {
    const CLIENT_ID = "2f882bcc6bac4d089ddb0d28dbb3f502"
    const REDIRECT_URI = "http://localhost:3000/login"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "code"

    const [token, setToken] = useState("")
    const [usr, setUsr] = useState("")
    const [searchKey, setSearchKey] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        // getToken()

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' , 'Authorization': 'Bearer ' + token},
            
        };
        fetch("https://api.spotify.com/v1/me", requestOptions).then(
            response =>response.json()).then(
                data => console.log(data)
            );
    

        setToken(token)

    }, [])

    return (
        <div>
        <h1>SPOTIFY</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Log In To Spotify</a>
        </div>
    )

}

export default Login;