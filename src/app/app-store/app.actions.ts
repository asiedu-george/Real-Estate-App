import { createAction, props } from "@ngrx/store";
import { LoginSate } from "../home-listing/store/state/state";

export const getStoreData = createAction(
    '[App Store] Get App Store Data',
    props<LoginSate>()
)