import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TableComponent } from './components/table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('tableTemplate', { read: ViewContainerRef })
  private viewRef!: ViewContainerRef;
  private componentRef!: ComponentRef<TableComponent>;

  public addDynamicComponent() {
    this.viewRef.clear();
    this.componentRef = this.viewRef.createComponent(TableComponent);
  }

  public clearTemplate() {
    this.viewRef.clear();
  }
}
