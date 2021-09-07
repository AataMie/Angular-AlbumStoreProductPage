import { Component, OnInit } from '@angular/core';
import { ProductService} from 'app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  albumInfo;
  sub: Subscription;
  constructor(private _productService: ProductService ) { }

  ngOnInit(): void {
    this.sub = this._productService.getAlbum(1).subscribe({
      next: response => {
        this.albumInfo = response} 
    });
  }

}
