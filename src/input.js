import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'

async function input(userUrl) {
    const result = {
            "ip": "161.185.160.93",
            "city": "New York City",
            "region": "New York",
            "country": "US",
            "loc": "40.7143,-74.0060",
            "org": "AS22252 The City of New York",
            "postal": "10004",
            "timezone": "America/New_York",
            "readme": "https://ipinfo.io/missingauth"
    }
    console.log(result)
}
export default input
