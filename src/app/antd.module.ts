import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  exports: [
    NzTableModule,
    NzButtonModule,
    NzDividerModule,
    NzModalModule,
    NzLayoutModule,
    NzGridModule,
    NzImageModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule
  ],
})
export class NgZorroAntdModule {}
