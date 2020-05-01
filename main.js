const panels = document.querySelectorAll( '.panel' );

function toggleOpen() {
  console.log( 'toggleopen' );
  this.classList.toggle( 'open' );
}

function toggleActive( e ) {
  console.log('toggleactive', e.propertyName);
  if ( e.propertyName === 'flex-grow' || e.propertyName === 'flex' ) {
    this.classList.toggle( 'open-active' );
  }
}

panels.forEach( panel => panel.addEventListener( 'click', toggleOpen ));
panels.forEach( panel => panel.addEventListener( 'transitionend', toggleActive ));
