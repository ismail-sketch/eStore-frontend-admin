import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "../../helpers/axios"

const initialState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    message: ''
}



export const login = createAsyncThunk(
    'log/login',
    async (user) => {
        try {
            const res = await axiosInstance.post(`/admin/signin`, user)
            if(res.status === 200) {
                const { token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
            }
            return res.data
        } catch (err) {
            console.log(err);
        }
})



const regSlice = createSlice({
    name: 'logSliceName',
    initialState,
    reducers: {
        isUserLoggedIn: (state, action) => {
            const token = localStorage.getItem('token')
            if(token) {
                const user = JSON.parse(localStorage.getItem('user'))
                state.token = token
                state.user = user
                state.authenticate = true
            } else {
                state.authenticate = false
                state.message = 'Необходима авторизация!'
            }
        }
    },


    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.authenticating = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.user = action.payload.user
            state.authenticate = true
            state.authenticating = false
        })
    }
})
export const {isUserLoggedIn} = regSlice.actions
export default regSlice.reducer
