import { fetchAddUser, fetchTokens, fetchUser } from "../../api/userApi";
import { SignInFormType, SignUpFormType, UserType } from "../../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getRegUser = createAsyncThunk(
  "user/getRegUser",
  async ({ email, password, username }: SignUpFormType) => {
    const user = await fetchAddUser({ email, password, username });
    return user;
  }
);

type AuthStateType = {
  user: { name: string; email: string } | null;
  tokens: {
    access: string | null;
    refresh: string | null;
  };
};

const initialState: AuthStateType = {
  user: null,
  tokens: {
    access: null,
    refresh: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, action: PayloadAction<{ accessToken: string}>) => {
      state.tokens.access = action.payload.accessToken;
    },
    setUser: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.user = action.payload;
    },
    clearAuth: (state) => {
      state.tokens.access = null;
      state.tokens.refresh = null;
      state.user = null;
    },
  },
});

export const { setTokens, setUser, clearAuth } = authSlice.actions;
export const authReducer = authSlice.reducer;
