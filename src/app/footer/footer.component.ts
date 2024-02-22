import { Component } from '@angular/core';
import { AboutUs, products, socials } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  title: string = 'Bottle';
  slogan: string =
    'Elevate your stay with Bottle: Where luxury meets convenience in every reservation. Book now for unparalleled comfort and personalized service.';

  BottleProducts: products = {
    InternationalBooking: 'International Bookings',
    HotelBooking: 'Hotel Bookings',
    domesticBooking: 'Domestic Bookings',
    HoneyMoonPackage: 'HoneyMoon Packages',
    YatraPackage: 'Yatra Packages',
  };

  BottleAbout: AboutUs = {
    termsAndConditions: 'Terms & Conditions',
    aboutUs: 'About Us',
    managament: 'Management',
    privacy: 'Privacy',
    careers: 'Careers',
  };

  BottleSocials: socials = {
    facebook: 'Facebook',
    twitter: 'X',
    instagram: 'Instagram',
    email: 'Email',
  };
}
