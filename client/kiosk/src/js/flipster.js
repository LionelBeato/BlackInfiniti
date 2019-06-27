function activateFlipster() {
  return $('.my-flipster').flipster({
    itemContainer: 'ul',
    // [string|object]
    // Selector for the container of the flippin' items.
  
    itemSelector: 'li',
    // [string|object]
    // Selector for children of `itemContainer` to flip
  
    start: 'center',
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle
  
    fadeIn: 400,
    // [milliseconds]
    // Speed of the fade in animation after items have been setup
  
    loop: false,
    // [true|false]
    // Loop around when the start or end is reached
  
    autoplay: false,
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds
  
    pauseOnHover: true,
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered
  
    style: 'carousel',
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class
  
    spacing: -0.55,
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap
  
    click: true,
    // [true|false]
    // Clicking an item switches to that item
  
    keyboard: true,
    // [true|false]
    // Enable left/right arrow navigation
  
    scrollwheel: true,
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next
  
    touch: true,
    // [true|false]
    // Enable swipe navigation for touch devices
  
    nav: false,
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items
  
    buttons: false,
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`
  
    buttonPrev: 'Previous',
    // [text|html]
    // Changes the text for the Previous button
  
    buttonNext: 'Next',
    // [text|html]
    // Changes the text for the Next button
  
    onItemSwitch: false
    // [function]
    // Callback function when items are switched
    // Arguments received: [currentItem, previousItem]
  });
}