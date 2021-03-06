/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app.server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './home/home.component.ngfactory';
import * as i4 from './about/about.component.ngfactory';
import * as i5 from './app.component.ngfactory';
import * as i6 from '@angular/http';
import * as i7 from '@angular/platform-server';
import * as i8 from '@angular/common/http';
import * as i9 from '@angular/common';
import * as i10 from '@angular/platform-browser';
import * as i11 from '@angular/animations/browser';
import * as i12 from '@angular/platform-browser/animations';
import * as i13 from '@angular/animations';
import * as i14 from '@angular/forms';
import * as i15 from '@angular/router';
import * as i16 from '../../../../src/app/home/home.component';
import * as i17 from '../../../../src/app/about/about.component';
import * as i18 from '../../../../src/app/app-routing.module';
import * as i19 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.HomeComponentNgFactory,i4.AboutComponentNgFactory,i5.AppComponentNgFactory]],
              [3,i0.ComponentFactoryResolver],i0.NgModuleRef]),i0.ɵmpd(4608,i6.BrowserXhr,
          i7.ɵc,([] as any[])),i0.ɵmpd(4608,i6.ResponseOptions,i6.BaseResponseOptions,
          ([] as any[])),i0.ɵmpd(4608,i6.XSRFStrategy,i7.ɵd,([] as any[])),i0.ɵmpd(4608,
          i6.XHRBackend,i6.XHRBackend,[i6.BrowserXhr,i6.ResponseOptions,i6.XSRFStrategy]),
          i0.ɵmpd(4608,i6.RequestOptions,i6.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,
              i6.Http,i7.ɵe,[i6.XHRBackend,i6.RequestOptions]),i0.ɵmpd(4608,i8.HttpXsrfTokenExtractor,
              i8.ɵg,[i9.DOCUMENT,i0.PLATFORM_ID,i8.ɵe]),i0.ɵmpd(4608,i8.ɵh,i8.ɵh,[i8.HttpXsrfTokenExtractor,
              i8.ɵf]),i0.ɵmpd(5120,i8.HTTP_INTERCEPTORS,(p0_0:any) => {
            return [p0_0];
          },[i8.ɵh]),i0.ɵmpd(4608,i8.XhrFactory,i7.ɵc,([] as any[])),i0.ɵmpd(4608,
              i8.HttpXhrBackend,i8.HttpXhrBackend,[i8.XhrFactory]),i0.ɵmpd(6144,i8.HttpBackend,
              (null as any),[i8.HttpXhrBackend]),i0.ɵmpd(5120,i8.HttpHandler,i7.ɵf,
              [i8.HttpBackend,[2,i8.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i8.HttpClient,
              i8.HttpClient,[i8.HttpHandler]),i0.ɵmpd(4608,i8.ɵd,i8.ɵd,([] as any[])),
          i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,[[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i9.NgLocalization,
              i9.NgLocaleLocalization,[i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,
              i0.ɵk,([] as any[])),i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),
          i0.ɵmpd(4608,i10.DomSanitizer,i10.ɵe,[i9.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,
              (null as any),[i10.DomSanitizer]),i0.ɵmpd(4608,i10.HAMMER_GESTURE_CONFIG,
              i10.HammerGestureConfig,([] as any[])),i0.ɵmpd(5120,i10.EVENT_MANAGER_PLUGINS,
              (p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
                return [new i10.ɵDomEventsPlugin(p0_0),new i10.ɵKeyEventsPlugin(p1_0),
                    new i10.ɵHammerGesturesPlugin(p2_0,p2_1)];
              },[i9.DOCUMENT,i9.DOCUMENT,i9.DOCUMENT,i10.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i10.EventManager,i10.EventManager,[i10.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i10.ɵDomSharedStylesHost,i10.ɵDomSharedStylesHost,[i9.DOCUMENT]),
          i0.ɵmpd(4608,i10.ɵDomRendererFactory2,i10.ɵDomRendererFactory2,[i10.EventManager,
              i10.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i7.ɵb,i7.ɵb,[i10.DOCUMENT,[2,
              i10.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i10.ɵSharedStylesHost,(null as any),
              [i7.ɵb]),i0.ɵmpd(4608,i7.ɵServerRendererFactory2,i7.ɵServerRendererFactory2,
              [i0.NgZone,i10.DOCUMENT,i10.ɵSharedStylesHost]),i0.ɵmpd(4608,i11.AnimationDriver,
              i11.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i11.ɵAnimationStyleNormalizer,
              i12.ɵd,([] as any[])),i0.ɵmpd(4608,i11.ɵAnimationEngine,i12.ɵb,[i11.AnimationDriver,
              i11.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i7.ɵa,
              [i7.ɵServerRendererFactory2,i11.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i10.Meta,i10.Meta,
              [i9.DOCUMENT]),i0.ɵmpd(4608,i10.Title,i10.Title,[i9.DOCUMENT]),i0.ɵmpd(4608,
              i13.AnimationBuilder,i12.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i10.DOCUMENT]),i0.ɵmpd(4608,i14.ɵi,i14.ɵi,([] as any[])),i0.ɵmpd(5120,
              i15.ActivatedRoute,i15.ɵf,[i15.Router]),i0.ɵmpd(4608,i15.NoPreloading,
              i15.NoPreloading,([] as any[])),i0.ɵmpd(6144,i15.PreloadingStrategy,
              (null as any),[i15.NoPreloading]),i0.ɵmpd(135680,i15.RouterPreloader,
              i15.RouterPreloader,[i15.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i15.PreloadingStrategy]),i0.ɵmpd(4608,i15.PreloadAllModules,
              i15.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i15.ROUTER_INITIALIZER,
              i15.ɵi,[i15.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i15.ROUTER_INITIALIZER]),i0.ɵmpd(512,i6.HttpModule,i6.HttpModule,([] as any[])),
          i0.ɵmpd(512,i8.HttpClientXsrfModule,i8.HttpClientXsrfModule,([] as any[])),
          i0.ɵmpd(512,i8.HttpClientModule,i8.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i9.CommonModule,i9.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i10.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i15.ɵb()];
          },([] as any[])),i0.ɵmpd(512,i15.ɵg,i15.ɵg,[i0.Injector]),i0.ɵmpd(256,i0.APP_ID,
              'ang4-seo',([] as any[])),i0.ɵmpd(2048,i10.ɵTRANSITION_ID,(null as any),
              [i0.APP_ID]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,
              p2_0:any,p2_1:any,p2_2:any) => {
            return [i10.ɵc(p0_0,p0_1),i15.ɵh(p1_0),i10.ɵf(p2_0,p2_1,p2_2)];
          },[[2,i10.NgProbeToken],[2,i0.NgProbeToken],i15.ɵg,i10.ɵTRANSITION_ID,i9.DOCUMENT,
              i0.Injector]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i10.BrowserModule,
              i10.BrowserModule,[[3,i10.BrowserModule]]),i0.ɵmpd(512,i12.NoopAnimationsModule,
              i12.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i7.ServerModule,
              i7.ServerModule,([] as any[])),i0.ɵmpd(512,i14.ɵba,i14.ɵba,([] as any[])),
          i0.ɵmpd(512,i14.FormsModule,i14.FormsModule,([] as any[])),i0.ɵmpd(1024,
              i15.ɵa,i15.ɵd,[[3,i15.Router]]),i0.ɵmpd(512,i15.UrlSerializer,i15.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i15.ChildrenOutletContexts,i15.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i15.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i9.LocationStrategy,i15.ɵc,[i9.PlatformLocation,[2,i9.APP_BASE_HREF],
              i15.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i9.Location,i9.Location,[i9.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i15.ROUTES,() => {
            return [[{path:'',component:i16.HomeComponent},{path:'about',component:i17.AboutComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i15.Router,i15.ɵe,[i0.ApplicationRef,i15.UrlSerializer,
              i15.ChildrenOutletContexts,i9.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i15.ROUTES,i15.ROUTER_CONFIGURATION,[2,i15.UrlHandlingStrategy],
              [2,i15.RouteReuseStrategy]]),i0.ɵmpd(512,i15.RouterModule,i15.RouterModule,
              [[2,i15.ɵa],[2,i15.Router]]),i0.ɵmpd(512,i18.AppRoutingModule,i18.AppRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i19.AppModule,i19.AppModule,([] as any[])),
          i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),i0.ɵmpd(256,
              i8.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i8.ɵf,'X-XSRF-TOKEN',([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL3dlYmRldi9hbmd1bGFyLXNlby9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL3dlYmRldi9hbmd1bGFyLXNlby9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
