import { fetchAddUser, fetchTokens, fetchUser } from "../../api/userApi";
import { SignInFormType, SignUpFormType, UserType } from "../../types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getAuthUser = createAsyncThunk(
  "user/getAuthUser",
  async ({ email, password }: SignInFormType) => {
    const user = await fetchUser({ email, password });
    return user;
  }
);

export const getRegUser = createAsyncThunk(
  "user/getRegUser",
  async ({ email, password, username }: SignUpFormType) => {
    const user = await fetchAddUser({ email, password, username });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SignInFormType) => {
    const tokens = await fetchTokens({ email, password });
    return tokens;
  }
);

type AuthStateType = {
  user: null | UserType;
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
  name: "auth",
  initialState,
  reducers: {
    setLogout: (state) => {
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(
        getAuthUser.fulfilled,
        (state, action: PayloadAction<UserType>) => {
          state.user = action.payload;
        }
      )
      .addCase(
        getTokens.fulfilled,
        (
          state,
          action: PayloadAction<{
            access: string | null;
            refresh: string | null;
          }>
        ) => {
          state.tokens.access = action.payload.access;
          state.tokens.refresh = action.payload.refresh;
        }
      );
  },
});

export const { setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;
