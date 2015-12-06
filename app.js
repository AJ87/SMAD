var oldMenuItem;

window.onload = function(){
  oldMenuItem = document.getElementById('contactMenu');
  showHide(oldMenuItem.id, 'block');
};

function popup(url)
{
 var popup=window.open(url,'Conditions','height=300,width=500,scrollbars=1,resizable=1,toolbar=1');
 if (window.focus) {popup.focus()}
}

function factory() {
  var children = 1;
  return {
    add: function(){
      children = children + 1;
    },
    get: function(){
      return children;
    }};
}

var child = factory();

function addChild(button) {
  child.add();
  document.getElementById('child' + child.get()).style.display = 'block';
  if (child.get() === 4) {
    button.style.display = 'none';
  }
}

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
        document.getElementById('contact').style.display = vis;
    },
    'emergMenu': function(vis) {
        document.getElementById('emergency').style.display = vis;
    },
    'childMenu': function(vis) {
        document.getElementById('child').style.display = vis;
    },
    'consentMenu': function(vis) {
        document.getElementById('consent').style.display = vis;
    }
/*    '2': function(vis) {
        document.getElementById('child2').style.display = vis;
    },
    '3': function(vis) {
        document.getElementById('child3').style.display = vis;
    },
    '4': function(vis) {
        document.getElementById('child4').style.display = vis;
    }*/
  }
  return actions[id](vis);
}
