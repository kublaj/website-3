import { Component } from '@stencil/core';
import { allRoutes } from '../routes/routes';

@Component({
  tag: 'blaze-site',
  styleUrl: 'blaze-site.scss'
})
export class BlazeSite {
  render() {
    return (
      <div class="c-text o-container o-container--large u-pillar-box u-pillar-box--medium">
        <site-header/>
        <main>
          <stencil-router id="blaze-content">
            <stencil-route url="/" component="home-page" exact={true}/>
            {allRoutes.map(({ routes }) => (
              routes.map(route => (
                <stencil-route url={route.url}
                               component={route.component}
                               componentProps={route.props}
                />
              ))
            ))}

          </stencil-router>
        </main>
      </div>
    );
  }
}