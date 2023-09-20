import { NgModule } from "@angular/core";
import { AuthFacade } from "src/facades/AuthFacade";
import { AuthClientApi } from "./api/AuthClientApi";
import { AuthState } from "./state/AuthState";
import { WeatherForecastApiClient } from "./api/WeatherForecastApiClient";
import { WeatherForecastFacade } from "src/facades/WeatherForecastFacade";

@NgModule({
    imports: [AuthFacade, AuthClientApi, AuthState, WeatherForecastApiClient, WeatherForecastFacade],
    exports: [AuthFacade, WeatherForecastFacade]
})

export class CoreModule {}
