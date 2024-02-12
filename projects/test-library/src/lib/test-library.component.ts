import { Component } from '@angular/core';

@Component({
  selector: 'lib-test-library',
  standalone: true,
  imports: [],
  template: `
    <p>
      test-library works!
    </p>
  `,
  styles: ``
})
export class TestLibraryComponent {

  constructor() {
    this.loadScript();
  }

  async loadScript(): Promise<void> {
    try {
      // Dynamically import the external script
      await import('./scroll-timeline.js');
    } catch (error) {
      console.error('Error loading ScrollTimeline script:', error);
    }
  }

}
