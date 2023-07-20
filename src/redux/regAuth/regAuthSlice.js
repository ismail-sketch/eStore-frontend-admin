import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    log: ''
}

export const login = createAsyncThunk(
    'log/login',
    async (user) => {
        try {
            const res = await axios.post(' http://localhost:5000/api/admin/signin', user)
            return res.data
        } catch (err) {
            console.log(err);
        }
})

const regSlice = createSlice({
    name: 'logSliceName',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.log = action.payload
        })
    }
})

export default regSlice.reducer
