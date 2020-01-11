import { RouterModule , Routes} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductDetailComponent } from './component/product/product-detail/product-detail.component';
import { UserdetailComponent } from './component/contact/userdetail/userdetail.component';

export const appRoutes : Routes = [
    {
      path : 'home',
      component : HomeComponent
    },
    {
      path : '',
      redirectTo :'/home',
      pathMatch : 'full'
    },
    {
      path : 'product',
    //   component : ProductComponent,
      children : [
        {
            path : '',
            redirectTo :'/product/list',
            pathMatch : 'full'
        },
        {
            path : 'list',
            component : ProductComponent
        },
        {
            path : ':id',
            component : ProductDetailComponent
        },
      ]
    },
    {
      

      path : 'contact',
    //   component : ProductComponent,
      children : [
        {
            path : '',
            redirectTo :'/contact/user',
            pathMatch : 'full'
        },
        {
            path : 'user',
            component : ContactComponent
        },
        {
            path : ':id',
            component : UserdetailComponent
        },
      ]

    },
    {
      path : 'login',
      component : LoginComponent
    },
    {
      path : 'sign-up',
      component : RegisterComponent
    },
    
]
