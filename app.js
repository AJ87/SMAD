var oldMenuItem;
window.onload = function(){
  oldMenuItem = document.getElementById('contactMenu');
  showHide(oldMenuItem.id, 'block');
};
function menuSelect(elem){
  oldMenuItem.className = 'not';
  elem.className = 'active';

  showHide(oldMenuItem.id, 'none');

  oldMenuItem = elem;

  showHide(elem.id, 'block');
}

function showHide(id, vis){
  var actions = {
    'contactMenu': function(vis) {
        elem = document.getElementById('contact').style.display = vis;
    },
    'emergMenu': function(vis) {
        elem = document.getElementById('emergency').style.display = vis;
    },
    'childMenu': function(vis) {
        elem = document.getElementById('child').style.display = vis;
    },
    'lastMenu': function(vis) {
        elem = document.getElementById('last').style.display = vis;
    }
  }
  return actions[id](vis);
}
