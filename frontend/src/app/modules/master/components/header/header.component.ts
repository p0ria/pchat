import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbMediaBreakpointsService, NbMenuItem, NbSidebarService, NbThemeService} from "@nebular/theme";
import {User} from "../../../../models/user.model";
import {select, Store} from "@ngrx/store";
import * as fromAuth from "../../../auth/state/auth.reducers";
import * as authSelectors from "../../../auth/state/auth.selectors";
import {map, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

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
    { title: 'Log out', link: 'login' }];

  constructor(
    private store: Store<fromAuth.State>,
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private breakpointService: NbMediaBreakpointsService) { }

  ngOnInit() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);

    this.store.pipe(select(authSelectors.getUser))
      .subscribe(user => this.user = user);

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
