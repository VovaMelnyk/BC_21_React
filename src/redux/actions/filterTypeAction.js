import { FILTER_ITEM } from "../constants/taskConstant";
import { createAction } from "@reduxjs/toolkit";

export const changeType = createAction(FILTER_ITEM);
