import { Injectable } from '@angular/core';
import { Toast } from '@syncfusion/ej2-notifications';
import { enableRipple } from '@syncfusion/ej2-base';



@Injectable({
  providedIn: 'root'
})

export class SyncfusionService {

constructor() {
  enableRipple(true);
}

succes(content: string) {
  const toast: Toast = new Toast({
    title: 'Success !',
    content: content,
    cssClass: 'e-toast-success'
  });
  toast.appendTo('#toast_confirm');
  toast.show();
}

warning(content: string) {
  const toast: Toast = new Toast({
    title: 'Warning !',
    content: content,
    cssClass: 'e-toast-warning'
  });
  toast.appendTo('#toast_warning');
  toast.show();
}

information(content: string) {
  const toast: Toast = new Toast({
    title: 'Information !',
    content: content,
    cssClass: 'e-toast-information'
  });
  toast.appendTo('#toast_information');
  toast.show(toast);
}

error(content: string) {
  const toast: Toast = new Toast({
    title: 'Error !',
    content: content,
    cssClass: 'e-toast-error'
  });
  toast.appendTo('#toast_error');
  toast.show(toast);
}


}
