import { NgModule } from "@angular/core";
import { AuthFacade } from "src/facades/AuthFacade";
import { AuthClientApi } from "./api/AuthClientApi";
import { AuthState } from "./state/AuthState";

@NgModule({
    imports: [AuthFacade, AuthClientApi, AuthState],
    exports: [AuthFacade]
})

export class CoreModule {}
