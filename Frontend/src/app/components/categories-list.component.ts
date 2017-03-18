import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Message} from "primeng/components/common/api";
import {Categories} from "../api/categories";
import {CategoriesService} from "../service/categories.service";
import {Product} from "../api/product";
import {ProductService} from "../service/product.service";

@Component({
  moduleId: module.id,
  selector: 'categs',
  templateUrl: 'categories-list.component.html',
  styleUrls: ['categories-list.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  msgs: Message[] = [];

  constructor(private router: Router,
              private categoriesService: CategoriesService, private productService:ProductService) {
  }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(r => this.categories = r, error =>  this.msgs = error);
  }

  cart(){
    this.router.navigate(['/cart']);
  }

  listItems(id:number): void {
    this.router.navigate(['/item',id]);
  }
}
