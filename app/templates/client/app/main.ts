import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {AppModule} from './app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then(result => {
    console.log('Boot Strap success')
})
.catch(error => {
    console.error(error.message);
});