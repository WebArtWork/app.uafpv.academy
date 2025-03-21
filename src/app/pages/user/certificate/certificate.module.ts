import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CertificateComponent } from './certificate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: ':certificate_id',
		component: CertificateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [CertificateComponent]
})
export class CertificateModule {}
