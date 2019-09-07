import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuItem, NbMenuService, NbSidebarService, NbThemeService} from "@nebular/theme";
import {User} from "../../../../models/user.model";
import {select, Store} from "@ngrx/store";
import {map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import * as fromRoot from "../../../../state/app.reducers";
import * as appActions from "../../../../state/app.actions";
import * as appSelectors from "../../../../state/app.selectors";

@Component({
  selector: 'master-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  user: User;
  userPictureOnly: boolean = false;
  userMenu: NbMenuItem[] = [
    { title: 'Profile' },
    { title: 'Logout' }];

  constructor(
    private store: Store<fromRoot.State>,
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private breakpointService: NbMediaBreakpointsService,
    private menuService: NbMenuService) { }

  ngOnInit() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.store.pipe(select(appSelectors.getUser))
      .subscribe(user => {
        this.user = user;
      });

    this.menuService.onItemClick().subscribe(
      m => {if(m.item.title === 'Logout') this.store.dispatch(new appActions.Logout())}
    )

  }

  toggleSidebar() {
    this.sidebarService.toggle(true, "master-menu");
    return false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
