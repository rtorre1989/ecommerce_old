import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { ProdutoModel } from '../model/produto-model';
import { EstoqueProdutosServiceService } from '../service/estoque-produtos-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos: Array<ProdutoModel>;

  sortOptions: SelectItem[];

  sortOrder: number;

  sortField: string;

  constructor(private service: EstoqueProdutosServiceService, private primengConfig: PrimeNGConfig) {
    this.produtos = [];
  }

  ngOnInit() {

    this.obterProdutos();

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;

  }

  obterProdutos() {
    this.service.getProdutos().subscribe(res => {
      this.produtos = res;
      console.log(this.produtos);
    });
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
