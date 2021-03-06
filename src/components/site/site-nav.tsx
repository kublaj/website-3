import { Component, State } from "@stencil/core"
import { allRoutes } from '../routes/routes';
import Route from '../routes/Route';

@Component({
  tag: 'site-nav'
})
export class SiteNav {
  @State() isOpen: boolean;

  openMenu() {
    this.isOpen = true;
  }

  closeMenu() {
    this.isOpen = false
  }

  navSection({ title, routes }: { title: string, routes: Array<Route> }) {
    const navLinks = (routes: Array<Route>) => {
      return routes.map(route => (
        <li class="c-list__item u-letter-box u-letter-box-xsmall">
          <stencil-route-link url={route.url} onClick={() => this.closeMenu()}>
            {route.props.name}
          </stencil-route-link>
          {route.props.atoms && <span>&nbsp;<i class="fab fa-js-square"></i></span>}
        </li>
      ))
    };

    return ([
      <h3 class="c-heading u-large">
        {title}
      </h3>,
      <ul class="c-list c-list--unstyled">
        {navLinks(routes)}
      </ul>
    ]);
  }

  render() {
    const drawerVisibleClass = this.isOpen ? 'o-drawer--visible' : '';
    const overlayVisibleClass = this.isOpen ? 'c-overlay--visible' : '';

    return (
      <div class="c-text">
        <a class="o-page-header__button o-page-header__button--left c-link c-link--brand" onClick={() => this.openMenu()}>
          <i class="fas fa-bars" />
        </a>
        <div class={`c-overlay c-overlay--dismissible ${overlayVisibleClass}`} onClick={() => this.closeMenu()} />
        <div class={`o-drawer o-drawer--left ${drawerVisibleClass} u-highest`}>
          <div class="c-card">
            <div class="c-card__body">
              <nav>
                <ul class="c-list c-list--unstyled">
                  <li class="c-list__item u-letter-box u-letter-box-xsmall">
                    <a class="c-link" href="https://github.com/BlazeUI/blaze/archive/master.zip"
                      download="">
                      <i class="fas fa-download" /> Download
                    </a>
                  </li>
                  <li class="c-list__item u-letter-box u-letter-box-xsmall">
                    <a class="c-link" href="https://github.com/BlazeCSS/blaze">
                      <i class="fas fa-code" /> Source
                    </a>
                  </li>
                </ul>
                {allRoutes.map(area => this.navSection(area))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}