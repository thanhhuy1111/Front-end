import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SliderComponent } from "./components/slider/slider.component";
import { BannerComponent } from "./components/banner/banner.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, SliderComponent, BannerComponent]
})
export class AppComponent {
  title = 'ecommerce-app';
}
