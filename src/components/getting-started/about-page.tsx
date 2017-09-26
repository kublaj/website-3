import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'about-page'
})
export class AboutPage {
  @Prop() name: string;

  componentWillLoad() {
    document.title = `${this.name} - Blaze`;
  }

  render() {
    return (
      <section>
        <h1 class="c-heading u-super">
          {this.name}
        </h1>

        <carbon-ad/>

        <h2 class="c-heading u-xlarge">What makes Blaze different?</h2>

        <p class="c-paragraph">
          Blaze fills the gap between monolithic frameworks like Bootstrap, UIKit and Semantic, and "micro" ones such as
          Skeleton, Milligram and Min.
        </p>

        <h2 id="opt-in" class="c-heading u-xlarge">
          <i class="fa fa-hand-paper-o"></i>
          <span class="u-pillar-box--small">Opt-in</span>
        </h2>

        <p class="c-paragraph">
          Blaze won't automatically take control of any of your design unless you want it to. With other toolkits all
          you need to do is reference the stylesheet and an unknown number of elements have CSS applied. We think you'd
          prefer to be in control.
        </p>
        <p class="c-paragraph">
          We also think providing a opt-in approach will reduce the number of conflicts you might experience between
          Blaze and your own CSS, not to mention any other frameworks you use in-conjunction.
        </p>

        <h2 id="bem-itcss" class="c-heading u-xlarge">
          <i class="fa fa-play" style={{ transform: 'rotate(90deg)' }}></i>
          <span class="u-pillar-box--small">BEM and ITCSS</span></h2>

        <p class="c-paragraph">
          Blaze follows <span class="c-text--loud">BEM</span> and
          <span class="c-text--loud">Inverted Triangle</span> naming conventions to give meaning
          and context to our selectors.
        </p>

        <p class="c-paragraph">
          We've worked hard on making our selectors meaningful. Our classes provide clarity to
          anyone reading the code which makes maintaining your code a lot easier.
        </p>


        <h2 id="components" class="c-heading u-xlarge">
          <i class="fa fa-sliders"></i>
          <span class="u-pillar-box--small">Components</span>
        </h2>

        <p class="c-paragraph">
          Micro-frameworks tend to sacrifice a lot of usefulness for the file size, leaving the
          developer wanting more. We took the approach that provides a decent set of components
          built on top of solid foundations.
        </p>
      </section>
    );
  }
}