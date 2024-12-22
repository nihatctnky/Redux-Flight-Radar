import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const getFlights = createAsyncThunk("flight/getFlight", async () => {


    // parametreyi belirle
    const params = {

        bl_lat: '34.64943',
        bl_lng: '24.65734',
        tr_lat: '43.42391',
        tr_lng: '47.118554',
        speed: "1,99999",
    };

    // api istegi at
    const res = await api.get("/flights/list-in-boundary", { params })

    // apiden gelen veri dizi içerisinde dizi oldugundan projede kulllanı mı kolay olsun diye dizinin içindelki dizilerinesneye çevir

    const formatted = res.data.aircraft.map((i) => ({
        id: i[0],
        code: i[1],
        lat: i[2],
        lng: i[3],
        deg: i[4]

    }))


    return formatted;
})

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
    const params = {
        flight: id,
    }
    const res = await api.get("flights/detail", { params })



    return res.data;
})