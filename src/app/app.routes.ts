import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages/search/search-page.component';
import { ProductsCatalogComponent } from './pages/products/catalog/products-catalog.component';
import { ProductsDetailsComponent } from './pages/products/details/products-details.component';
import { CartPageComponent } from './pages/cart/cart-page.component';
import { OrdersHistoryComponent } from './pages/orders/history/orders-history.component';
import { OrdersDetailsComponent } from './pages/orders/details/orders-details.component';
import { PaymentPageComponent } from './pages/payment/payment-page.component';

export const routes: Routes = [
  {
    path: '', redirectTo: '/inicio', pathMatch: 'full'
  },
  {
    path: 'inicio',
    children: [
      { path: '', component: ProductsCatalogComponent },
    ]
  },
  {
    path: 'producto/:id', component: ProductsDetailsComponent
  },
  {
    path: 'buscar', component: SearchPageComponent
  },
  {
    path: 'carrito', component: CartPageComponent
  },
  {
    path: 'carrito/pago', component: PaymentPageComponent
  },
  {
    path: 'pedidos', component: OrdersHistoryComponent
  },
  {
    path: 'pedido/:id', component: OrdersDetailsComponent
  }
];
